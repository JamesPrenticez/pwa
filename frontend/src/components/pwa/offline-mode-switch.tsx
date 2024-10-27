import { useEffect, type ReactElement } from "react";
import { Switch } from "@components/ui/switch";
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import { toggleisOnline } from "@redux/slices";
import { syncAllData } from "@db/sync-all-data";
import { Label } from "@components/ui/label";

export const OfflineModeSwitch = (): ReactElement => {
  const isOnline = useAppSelector((state) => state.user.isOnline);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(toggleisOnline());
  };

  // Sync all data when coming back online or when isOnline is toggled
  useEffect(() => {
    const handleBeingOnline = async () => {
      // Check both manual toggle and actual online status
      if (navigator.onLine && isOnline) {
        console.log("Online, syncing data...");
        try {
          await syncAllData(); // Custom function to sync all data
          console.log("Sync process completed.");
        } catch (error) {
          console.error("Failed to sync data:", error);
        }
      }
    };

    console.log("Effect triggered", navigator.onLine, isOnline);

    // Always check the network status whenever 'isOnline' changes or network is restored
    handleBeingOnline();

    window.addEventListener("online", handleBeingOnline);

    return () => {
      window.removeEventListener("online", handleBeingOnline);
    };
  }, [isOnline]);

  return (
    <Label
      value={isOnline ? "Online" : "Offline"}
      htmlFor="offlineMode"
      className={`flex items-center justify-center text-center gap-2 text-[0.8rem] ${isOnline ? "text-major/80" : "text-minor/80"} h-full`}
    >
      <Switch checked={isOnline} onChange={handleChange} />
    </Label>
  );
};
