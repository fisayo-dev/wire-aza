"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Upload, Building2, User, FileText } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBusinessPage() {
  const [businessName, setBusinessName] = useState("");
  const [businessUsername, setBusinessUsername] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log({
      businessName,
      businessUsername,
      businessDescription,
      profileImage,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900">
            Create Your Business
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Set up your business profile and start showcasing your account
            details professionally.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            <FieldGroup className="space-y-5">
              <Field>
                <FieldLabel
                  htmlFor="businessName"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Building2 className="w-4 h-4" />
                  Business Name
                </FieldLabel>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                  className="mt-1.5"
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="businessUsername"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <User className="w-4 h-4" />
                  Business Username
                </FieldLabel>
                <Input
                  id="businessUsername"
                  type="text"
                  placeholder="Choose a unique username"
                  value={businessUsername}
                  onChange={(e) => setBusinessUsername(e.target.value)}
                  required
                  className="mt-1.5"
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="businessDescription"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Business Description
                </FieldLabel>
                <Textarea
                  id="businessDescription"
                  placeholder="Describe your business..."
                  value={businessDescription}
                  onChange={(e) => setBusinessDescription(e.target.value)}
                  className="resize-none h-40 text-md"
                  required
                  rows={4}
                />
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="profileImage"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Upload className="w-4 h-4" />
                  Business Profile Image
                </FieldLabel>
                <div className="mt-1.5">
                  <label
                    htmlFor="profileImage"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center py-4">
                      <Upload className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-1 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                    <input
                      id="profileImage"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                {profileImage && (
                  <p className="text-sm text-gray-600 mt-2">
                    Selected: {profileImage.name}
                  </p>
                )}
              </Field>
            </FieldGroup>

            <Button onClick={handleSubmit} className="w-full mt-6" size="lg">
              Create Business
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
