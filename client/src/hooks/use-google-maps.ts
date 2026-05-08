import { useState, useEffect } from "react";

const SCRIPT_ID = "google-maps-js";

type MapsState = "loading" | "ready" | "error";

// Module-level state shared across all hook instances
let _state: MapsState = "loading";
const _listeners = new Set<(s: MapsState) => void>();

function notify(s: MapsState) {
  _state = s;
  _listeners.forEach(fn => fn(s));
}

// Google Maps calls this when billing/activation fails
if (typeof window !== "undefined") {
  (window as any).gm_authFailure = () => {
    console.warn("[GoogleMaps] Auth failure — billing may not be active on your Google Cloud project.");
    notify("error");
  };
}

function loadScript() {
  if (document.getElementById(SCRIPT_ID)) return;
  const key = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
  if (!key) {
    console.error("[GoogleMaps] VITE_GOOGLE_MAPS_API_KEY is not set");
    notify("error");
    return;
  }
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&loading=async`;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    // gm_authFailure fires right after onload if the key is invalid
    // wait a tick so it has a chance to fire first
    setTimeout(() => {
      if (_state !== "error") notify("ready");
    }, 300);
  };
  script.onerror = () => {
    console.error("[GoogleMaps] Script failed to load");
    notify("error");
  };
  document.head.appendChild(script);
}

export function useGoogleMaps(): { ready: boolean; error: boolean } {
  const [localState, setLocalState] = useState<MapsState>(() => {
    if (typeof window !== "undefined" && window.google?.maps) return "ready";
    return _state;
  });

  useEffect(() => {
    // Sync with current module-level state
    if (_state !== localState) setLocalState(_state);

    const listener = (s: MapsState) => setLocalState(s);
    _listeners.add(listener);

    // Kick off loading if not already started
    if (_state === "loading" && !document.getElementById(SCRIPT_ID)) {
      loadScript();
    }

    return () => { _listeners.delete(listener); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ready: localState === "ready", error: localState === "error" };
}
