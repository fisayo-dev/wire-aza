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
    return { success: false, error: error instanceof Error ? error.response.data.message : String(error)};
  }
};
