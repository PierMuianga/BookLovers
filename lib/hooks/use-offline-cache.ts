"use client";

import localforage from "localforage";
import { useEffect, useState } from "react";

localforage.config({
  name: "share-read",
  storeName: "share-read-cache"
});

export function useOfflineCache<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    let mounted = true;
    localforage.getItem<T>(key).then((stored) => {
      if (stored && mounted) {
        setValue(stored);
      }
    });
    return () => {
      mounted = false;
    };
  }, [key]);

  const persist = async (nextValue: T) => {
    setValue(nextValue);
    await localforage.setItem(key, nextValue);
  };

  return [value, persist] as const;
}
