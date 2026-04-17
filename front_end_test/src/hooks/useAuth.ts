"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export function useAuth() {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const loadUserFromStorage = useAuthStore((state) => state.loadUserFromStorage);

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);
}