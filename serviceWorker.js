// console.log("inside service worker js");

self.addEventListener("install", (e) => {
  console.log("[ServiceWorker] Installed");
});

self.addEventListener("activate", (e) => {
  console.log("[ServiceWorker] Activated");
});

self.addEventListener("fetch", (e) => {
  console.log("[ServiceWorker] Fetching", e);
});
