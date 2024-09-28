import { cacheAssets } from "./cache";
import { handlePushNotifications } from "./push-notifications";
import { analytics } from "./analytics";

declare let self: ServiceWorkerGlobalScope;
// declare var __WB_MANIFEST: Array<string>; // Declare the __WB_MANIFEST variable

import { precacheAndRoute } from "workbox-precaching";

// Precache files
precacheAndRoute(self.__WB_MANIFEST);

// Install and activate events
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
  cacheAssets(event);
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
});

// Handle different concerns
self.addEventListener("fetch", (event) => {
  cacheAssets(event);
});

self.addEventListener("push", handlePushNotifications);
self.addEventListener("message", analytics);
