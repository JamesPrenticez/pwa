import { useEffect, useState, type ReactElement } from "react";
import { get, update, StoreName, insert } from "@db";

interface ClickCount {
  id?: number; // Optional ID for auto-incremented records
  count: number;
}

export const ClickCounterButton = (): ReactElement => {
  const [clickCount, setClickCount] = useState<number>(0);

  // Fetch the click count from IndexedDB on component mount
  useEffect(() => {
    const fetchClickCount = async () => {
      const counts = await get<ClickCount>(StoreName.CLICK_COUNTER); // Get all counts
      const totalCount =
        counts.length > 0
          ? counts.reduce((sum, item) => sum + (item.count || 0), 0) // Sum all counts
          : 0; // Default to 0 if no counts exist

      setClickCount(totalCount);
    };

    fetchClickCount();
  }, []);

  const handleClick = async () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    const data: ClickCount = { count: newCount };

    // Check if we have any existing records and update them
    const counts = await get<ClickCount>(StoreName.CLICK_COUNTER);
    if (counts.length > 0) {
      await update(data, StoreName.CLICK_COUNTER); // Update existing count
    } else {
      await insert(data, StoreName.CLICK_COUNTER); // Insert new count if no record exists
    }
  };

  return <button onClick={handleClick}>Clicked {clickCount} times</button>;
};
