// components/SignupForm.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { UserPlus } from "lucide-react";
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
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleOauthBtn from "./GoogleOauthBtn";
import { toast } from "sonner";
// import { signupUser } from "@/actions/auth";
import axios from "axios";
import { useRouter } from "next/navigation";

export function SignupForm({
  className,
  backendUrl,
  ...props
}: React.ComponentProps<"div"> & { backendUrl: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${backendUrl}/auth/signup`, {
        name: name.trim(),
        email: email.trim(),
        password,
      });

      if (response.data.success) {
        toast.success(response.data.message || "Account created successfully!");
        router.push("/login");
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(`Sign up failed. Please try again.`);
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
        <div className="bg-green-600 h-2 w-full"></div>
        <CardHeader className="pt-10 pb-6 text-center">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-6 h-6" />
          </div>
          <CardTitle className="text-3xl font-black text-gray-900">
            Create your Aza vault
          </CardTitle>
          <CardDescription className="text-base">
            Join thousands of professionals sharing their details elegantly.
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
                <FieldLabel className="text-gray-700 font-semibold">Full Name</FieldLabel>
                <Input
                  placeholder="John Doe"
                  className="rounded-xl border-gray-200 h-12 focus:ring-green-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
                {errors.name && (
                  <FieldDescription className="text-red-500">
                    {errors.name}
                  </FieldDescription>
                )}
              </Field>

              <Field>
                <FieldLabel className="text-gray-700 font-semibold">Email Address</FieldLabel>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-xl border-gray-200 h-12 focus:ring-green-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
                {errors.email && (
                  <FieldDescription className="text-red-500">
                    {errors.email}
                  </FieldDescription>
                )}
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel className="text-gray-700 font-semibold">Password</FieldLabel>
                  <Input
                    type="password"
                    className="rounded-xl border-gray-200 h-12 focus:ring-green-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </Field>
                <Field>
                  <FieldLabel className="text-gray-700 font-semibold">Confirm Password</FieldLabel>
                  <Input
                    type="password"
                    className="rounded-xl border-gray-200 h-12 focus:ring-green-500"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </Field>
              </div>
              {(errors.password || errors.confirmPassword) && (
                <FieldDescription className="text-red-500 -mt-2">
                  {errors.password || errors.confirmPassword}
                </FieldDescription>
              )}

              <Field className="pt-2">
                <Button
                    type="submit"
                    className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-100 transition-all active:scale-95"
                    disabled={isLoading}
                >
                    {isLoading ? "Creating account..." : "Create my aza vault"}
                </Button>
                <div className="mt-6 text-center text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-green-600 font-bold hover:underline">
                        Log in
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
