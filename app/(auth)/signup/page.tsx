import { SignupForm } from "@/components/auth/SignupForm";
import wireAzaEnv from "@/config/env";

const page = () => {
  return <SignupForm backendUrl={wireAzaEnv.backendUrl} />;
};

export default page;
