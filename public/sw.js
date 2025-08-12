const CACHE_NAME = "analyce-portfolio-v1";
const urlsToCache = [
  "/",
  "/amp.html",
  "/analyce-ferreira-desenvolvedora-designer-ui-ux-developer-logo.png",
  "/analyce-ferreira-desenvolvedora-designer-ui-ux-developer-icon.png",
  "/portfolio-assets/sxWallet.png",
  "/portfolio-assets/ecommerce/1.png",
  "/portfolio-assets/betvencedor/1.png",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
];

// Install event - cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline form submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "Nova atualização disponível!",
    icon: "/analyce-ferreira-desenvolvedora-designer-ui-ux-developer-icon.png",
    badge: "/analyce-ferreira-desenvolvedora-designer-ui-ux-developer-icon.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Ver Portfólio",
        icon: "/analyce-ferreira-desenvolvedora-designer-ui-ux-developer-icon.png",
      },
      {
        action: "close",
        title: "Fechar",
        icon: "/analyce-ferreira-desenvolvedora-designer-ui-ux-developer-icon.png",
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification("Analyce Ferreira Portfolio", options)
  );
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"));
  }
});

// Background sync function
function doBackgroundSync() {
  // Implement background sync logic here
  console.log("Background sync completed");
}
