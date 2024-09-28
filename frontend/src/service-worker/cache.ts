export function cacheAssets(event: any) {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll(["/index.html", "/style.css", "/app.js"]);
    }),
  );
}
