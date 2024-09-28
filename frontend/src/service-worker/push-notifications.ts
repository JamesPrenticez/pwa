export function handlePushNotifications(event: any) {
  const data = event.data?.json();
  const title = data?.title || "Default title";

  event.waitUntil(
    self.registration.showNotification(title, {
      body: data?.body || "Default body",
      icon: "/icon.png",
    }),
  );
}
