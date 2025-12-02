import { FieldDescription } from "@/components/ui/field";
import { FacebookIcon, GithubIcon, WalletIcon, XIcon } from "lucide-react";
import Link from "next/link";

export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <WalletIcon className="size-4" />
          Wire Aza
        </Link>
        {children}
        <FieldDescription className="px-6 text-center grid gap-2">
          Developed By Fisayo Obadina{" "}
          <span className="flex items-center space-x-2 justify-center">
            <Link href="https://x.com/fisayocoder" target="_blank">
              <XIcon />
            </Link>
            <Link href="https://github.com/fisayo-dev" target="_blank">
              <GithubIcon />
            </Link>
            <Link href="https://web.facebook.com/" target="_blank">
              <FacebookIcon />
            </Link>
          </span>
        </FieldDescription>
      </div>
    </div>
  );
}
