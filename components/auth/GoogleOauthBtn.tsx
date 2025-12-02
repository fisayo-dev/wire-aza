import Image from "next/image";
import { Button } from "../ui/button";
import { Field } from "../ui/field";

const GoogleOauthBtn = () => {
  return (
    <Field>
      <Button variant="outline" type="button">
        <Image src="/assets/google.svg" alt="Google Logo" width={20} height={20} />
        Login with Google
      </Button>
    </Field>
  );
};

export default GoogleOauthBtn;
