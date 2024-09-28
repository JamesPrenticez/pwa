import { get, removeAll, StoreName } from "@db";

export const syncAllData = async () => {
  try {
    // Fetch all stores and sync each type of data
    const clickData = await get(StoreName.CLICK_COUNTER);
    const userData = await get(StoreName.USER_DATA);
    const settingsData = await get(StoreName.SETTINGS);

    // Example of syncing each dataset to your backend
    if (clickData.length > 0) {
      try {
        const res = await sendClickDataToServer(clickData);
        if (res.status === 200) {
          await removeAll(StoreName.CLICK_COUNTER); // Clear IndexedDB after successfully syncing
          console.log("Data synced successfully and cleared from IndexedDB.");
        } else {
          console.error(`Failed to sync data: ${res.status} ${res.statusText}`);
        }
      } catch (error) {
        console.error("Failed to sync data:", error);
        // Optionally handle the error (e.g., keep the data in IndexedDB for future attempts)
      }
    }

    if (userData.length > 0) {
      await sendUserDataToServer(userData);
      await removeAll(StoreName.USER_DATA);
    }

    if (settingsData.length > 0) {
      await sendSettingsDataToServer(settingsData);
      await removeAll(StoreName.SETTINGS);
    }
  } catch (error) {
    console.error("Error syncing data:", error);
  }
};

const sendClickDataToServer = async (data: any) => {
  const response = await fetch("/api/syncClickData", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Return the response object
  return response;
};

const sendUserDataToServer = async (data: any) => {
  await fetch("/api/syncUserData", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

const sendSettingsDataToServer = async (data: any) => {
  await fetch("/api/syncSettings", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
