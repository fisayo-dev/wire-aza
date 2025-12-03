"use server";

import api from "@/config/axios";

export async function signupUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const res = await api.post("/auth/signup", data);
    return { success: res.data.success, data: res.data };
  } catch (error: any) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Signup failed. Please try again.";

    console.error("Signup failed:", message, error.response?.data);
    return { success: false, error: message };
  }
}

export async function loginUser(data: { email: string; password: string }) {
  try {
    const res = await api.post("/auth/login", data);
    console.log("Login response:", res.data);
    return { success: res.data.success, data: res.data };
  } catch (error: any) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Login failed. Please try again.";
    console.error("Login failed:", message, error.response?.data);
    return { success: false, error: message };
  }
}
