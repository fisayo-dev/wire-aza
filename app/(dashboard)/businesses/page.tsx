import { getAllOrganizations } from "@/actions/business";
import AllBusinessesPage from "@/components/dashboard/AllBusinessesPage";

const BusinessesPage = async () => {
  const businesses = await getAllOrganizations();

  if (!businesses.success) {
    throw new Error(businesses.error || "Failed to load businesses");
  }

  return <AllBusinessesPage businesses={businesses.data} />;
};

export default BusinessesPage;
