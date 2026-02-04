"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
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
import { useRouter } from "next/navigation";
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
        const response = await axios.post(`${backendUrl}/auth/login`, {
          email: email.trim(),
          password,
        });

        if (response.data.success) {
          toast.success(response.data.message);
          router.push("/dashboard");
        } else {
          toast.error(response.data.message || "Something went wrong");
        }
      } catch {
        toast.error("Invalid credentials or server error");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-green-600 h-2 w-full"></div>
        <CardHeader className="pt-10 pb-6 text-center">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <CardTitle className="text-3xl font-black text-gray-900">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-base">
            Log in to manage your professional account details.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-10">
          <form onSubmit={handleSubmit}>
            <FieldGroup className="gap-5">
              <GoogleOauthBtn />

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-100"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-400">Or continue with</span>
                </div>
              </div>

              <Field>
                <FieldLabel htmlFor="email" className="text-gray-700 font-semibold">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="rounded-xl border-gray-200 h-12 focus:ring-green-500"
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
                  <FieldLabel htmlFor="password" className="text-gray-700 font-semibold">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm text-green-600 font-medium hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="rounded-xl border-gray-200 h-12 focus:ring-green-500"
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
              <Field className="pt-2">
                <Button
                  type="submit"
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-100 transition-all active:scale-95"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Log In"}
                </Button>
                <div className="mt-6 text-center text-gray-500">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="text-green-600 font-bold hover:underline">
                    Sign up free
                  </Link>
                </div>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
