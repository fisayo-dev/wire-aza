import axios from "@/config/axios";

export const createBusiness = async (payload: {
  name: string;
  username: string;
  description: string;
  type: string;
  logo: string | null;
  accounts: Array<{
    account_number: string;
    bank_name: string;
    bank_code?: string;
  }>;
}) => {
  try {
    const response = await axios.post("/organizations", payload);
    const data = response.data;
    return { success: true, data };
  } catch (error: unknown) {
    let errorMessage = "An error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "response" in error
    ) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };
      errorMessage = axiosError.response?.data?.message || "An error occurred";
    }
    return { success: false, error: errorMessage };
  }
};
