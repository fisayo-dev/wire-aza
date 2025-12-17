"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleOauthBtn from "./GoogleOauthBtn";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
// import api from "@/config/axios"; // Your axios instance
import axios from "axios";

export function LoginForm({
  className,
  backendUrl,
  ...props
}: React.ComponentProps<"div"> & { backendUrl: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callback = searchParams.get("callback");

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);

      try {
        axios.defaults.withCredentials = true;
        // Direct API call from browser - cookie will be stored in browser
        const response = await axios.post(`${backendUrl}/auth/login`, {
          email: email.trim(),
          password,
        });

        console.log("Login Result:", response.data);
        console.log("Login response headers:", response.headers);

        if (response.data.success) {
          const redirectPath =
            callback && callback.startsWith("/")
              ? decodeURIComponent(callback)
              : "/businesses";
          toast.success(response.data.message);
          router.push(redirectPath);
        } else {
          toast.error(response.data.message || "Something went wrong");
        }
      } catch (error: any) {
        toast.error(error?.response?.data.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Jump Right In</CardTitle>
          <CardDescription>
            Your account number doesn&apos;t have to appear basic.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <GoogleOauthBtn />
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) {
                      setErrors({ ...errors, email: undefined });
                    }
                  }}
                />
                {errors.email && (
                  <FieldDescription className="text-red-500 text-sm">
                    {errors.email}
                  </FieldDescription>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) {
                      setErrors({ ...errors, password: undefined });
                    }
                  }}
                />
                {errors.password && (
                  <FieldDescription className="text-red-500 text-sm">
                    {errors.password}
                  </FieldDescription>
                )}
              </Field>
              <Field>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Log In"}
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
