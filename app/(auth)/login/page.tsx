import { LoginForm } from "@/components/auth/LoginForm";
import wireAzaEnv from "@/config/env";

const page = () => {
  return <LoginForm backendUrl={wireAzaEnv.backendUrl} />;
};

export default page;
