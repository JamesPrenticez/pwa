// db.ts
const DB_NAME = "PWA-DB-2";

export enum StoreName {
  CLICK_COUNTER = "click-counter",
  USER_DATA = "user-data",
  SPA_TOKEN = "spa-token",
  SETTINGS = "settings",
  // Add more store names as needed
}

const VERSION = 2;

// Create a utility function to open the database
const openDatabase = () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, VERSION);

    request.onerror = () => {
      reject("Database failed to open");
    };

    request.onsuccess = (event) => {
      const dbRequest = event.target as IDBOpenDBRequest;
      resolve(dbRequest.result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Create object stores with auto-incrementing IDs if they don't already exist
      for (const store of Object.values(StoreName)) {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, { keyPath: "id", autoIncrement: true }); // Enable auto-increment
        }
      }
    };
  });
};

// Get data from the specified store
export const get = async <T>(store_name: StoreName): Promise<T[]> => {
  const db = await openDatabase();
  const transaction = db.transaction(store_name, "readonly");
  const store = transaction.objectStore(store_name);
  const request = store.getAll(); // Get all entries

  return new Promise<T[]>((resolve) => {
    request.onsuccess = () => {
      resolve(request.result ? (request.result as T[]) : []);
    };
  });
};

// Get data from the specified store by ID
export const getById = async <T>(
  store_name: StoreName,
  id: string,
): Promise<T | null> => {
  const db = await openDatabase();
  const transaction = db.transaction(store_name, "readonly");
  const store = transaction.objectStore(store_name);
  const request = store.get(id); // Retrieve entry by ID

  return new Promise<T | null>((resolve) => {
    request.onsuccess = () => {
      resolve(request.result ? (request.result as T) : null);
    };
  });
};

export const insert = async (
  data: { [key: string]: any },
  store_name: StoreName,
) => {
  const db = await openDatabase();
  const transaction = db.transaction(store_name, "readwrite");
  const store = transaction.objectStore(store_name);

  return new Promise<void>((resolve, reject) => {
    const insertRequest = store.add(data); // Use .add() to insert new data

    insertRequest.onsuccess = () => resolve();
    insertRequest.onerror = (err) => reject(err);
  });
};

export const update = async (
  data: { [key: string]: any },
  store_name: StoreName,
) => {
  const db = await openDatabase();
  const transaction = db.transaction(store_name, "readwrite");
  const store = transaction.objectStore(store_name);

  // Get all existing records
  const getAllRequest = store.getAll();

  return new Promise<void>((resolve, reject) => {
    getAllRequest.onsuccess = () => {
      const existingRecords = getAllRequest.result;

      if (existingRecords.length > 0) {
        const existingRecord = existingRecords[0]; // Use the first (and only) record
        data.id = existingRecord.id; // Maintain the existing id

        // Put the updated record back into the store
        const updateRequest = store.put(data);

        updateRequest.onsuccess = () => resolve();
        updateRequest.onerror = (err) => reject(err);
      } else {
        reject("No record found to update.");
      }
    };

    getAllRequest.onerror = (err) => reject(err);
  });
};

// Remove a specific item from the specified store using the provided id
export const removeById = async (store_name: StoreName, id: number) => {
  const db = await openDatabase();
  const transaction = db.transaction(store_name, "readwrite");
  const store = transaction.objectStore(store_name);
  await store.delete(id); // Use the auto-incremented id to delete the specific item
};

// Remove all data from the specified store
export const removeAll = async (store_name: StoreName) => {
  const db = await openDatabase();
  const transaction = db.transaction(store_name, "readwrite");
  const store = transaction.objectStore(store_name);
  await store.clear(); // Clear all entries in the object store
};
