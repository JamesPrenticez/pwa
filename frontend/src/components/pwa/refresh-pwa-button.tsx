import "@styles/PWABadge.css";

import { useRegisterSW } from "virtual:pwa-register/react";

export const RefreshPWAButton = () => {
  // periodic sync is disabled, change the value to enable it, the period is in milliseconds
  // You can remove onRegisteredSW callback and registerPeriodicSync function
  const period = 5000;

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      if (period <= 0) return;
      if (r?.active?.state === "activated") {
        registerPeriodicSync(period, swUrl, r);
      } else if (r?.installing) {
        r.installing.addEventListener("statechange", (e) => {
          const sw = e.target as ServiceWorker;
          if (sw.state === "activated") registerPeriodicSync(period, swUrl, r);
        });
      }
    },
  });

  function close() {
    setOfflineReady(false);
    setNeedRefresh(false);
  }

  return (
    <div role="alert" aria-labelledby="toast-message">
      {(offlineReady || needRefresh) && (
        <div>
          <div>
            {offlineReady ? (
              <span id="toast-message">App ready to work offline</span>
            ) : (
              <span id="toast-message">
                New content available, click on reload button to update.
              </span>
            )}
          </div>
          <div>
            {needRefresh && (
              <button
                className="bg-blue-500 h-64 w-64 absolute top-0 left-5"
                onClick={() => {
                  updateServiceWorker(true);
                  console.log("update service worker");
                }}
              >
                Reload
              </button>
            )}
            <button className="PWABadge-toast-button" onClick={() => close()}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * This function will register a periodic sync check every hour, you can modify the interval as needed.
 */
function registerPeriodicSync(
  period: number,
  swUrl: string,
  r: ServiceWorkerRegistration,
) {
  if (period <= 0) return;

  setInterval(async () => {
    if ("onLine" in navigator && !navigator.onLine) return;

    const resp = await fetch(swUrl, {
      cache: "no-store",
      headers: {
        cache: "no-store",
        "cache-control": "no-cache",
      },
    });

    if (resp?.status === 200) await r.update();
  }, period);
}
