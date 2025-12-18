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
import {
  Upload,
  Building2,
  User,
  FileText,
  X,
  AlertCircle,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function CreateBusinessPage() {
  const [businessName, setBusinessName] = useState("");
  const [businessUsername, setBusinessUsername] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          profileImage: "File size must be less than 10MB",
        }));
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          profileImage: "Please upload an image file",
        }));
        return;
      }

      setProfileImage(file);
      setErrors((prev) => ({ ...prev, profileImage: "" }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setImagePreview(null);
    setErrors((prev) => ({ ...prev, profileImage: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!businessName.trim()) {
      newErrors.businessName = "Business name is required";
    } else if (businessName.trim().length < 2) {
      newErrors.businessName = "Business name must be at least 2 characters";
    }

    if (!businessUsername.trim()) {
      newErrors.businessUsername = "Business username is required";
    } else if (businessUsername.trim().length < 3) {
      newErrors.businessUsername = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(businessUsername)) {
      newErrors.businessUsername =
        "Username can only contain letters, numbers, and underscores";
    }

    if (!businessDescription.trim()) {
      newErrors.businessDescription = "Business description is required";
    } else if (businessDescription.trim().length < 10) {
      newErrors.businessDescription =
        "Description must be at least 10 characters";
    }

    if (!profileImage) {
      newErrors.profileImage = "Profile image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    setSubmitError("");

    if (!validateForm()) {
      setSubmitError("Please fix all errors before submitting");
      return;
    }

    // // Handle form submission here
    // console.log({
    //   businessName,
    //   businessUsername,
    //   businessDescription,
    //   profileImage,
    // });

    // // Success handling would go here
    // alert("Business created successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <Card className="max-w-xl mx-auto">
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
            {submitError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{submitError}</AlertDescription>
              </Alert>
            )}

            <FieldGroup className="space-y-5">
              <Field>
                <FieldLabel
                  htmlFor="businessName"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Building2 className="w-4 h-4" />
                  Business Name <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => {
                    setBusinessName(e.target.value);
                    if (errors.businessName) {
                      setErrors((prev) => ({ ...prev, businessName: "" }));
                    }
                  }}
                  className={`mt-1.5 ${
                    errors.businessName ? "border-red-500" : ""
                  }`}
                />
                {errors.businessName && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.businessName}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="businessUsername"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <User className="w-4 h-4" />
                  Business Username <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  id="businessUsername"
                  type="text"
                  placeholder="Choose a unique username"
                  value={businessUsername}
                  onChange={(e) => {
                    setBusinessUsername(e.target.value);
                    if (errors.businessUsername) {
                      setErrors((prev) => ({ ...prev, businessUsername: "" }));
                    }
                  }}
                  className={`mt-1.5 ${
                    errors.businessUsername ? "border-red-500" : ""
                  }`}
                />
                {errors.businessUsername && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.businessUsername}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="businessDescription"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Business Description <span className="text-red-500">*</span>
                </FieldLabel>
                <Textarea
                  id="businessDescription"
                  placeholder="Describe your business..."
                  value={businessDescription}
                  onChange={(e) => {
                    setBusinessDescription(e.target.value);
                    if (errors.businessDescription) {
                      setErrors((prev) => ({
                        ...prev,
                        businessDescription: "",
                      }));
                    }
                  }}
                  className={`resize-none h-40 ${
                    errors.businessDescription ? "border-red-500" : ""
                  }`}
                  rows={4}
                />
                {errors.businessDescription && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.businessDescription}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="profileImage"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Upload className="w-4 h-4" />
                  Business Profile Image <span className="text-red-500">*</span>
                </FieldLabel>
                <div className="mt-1.5">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg border-2 border-gray-300"
                      />
                      <button
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors"
                        type="button"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <p className="text-sm text-gray-600 mt-2">
                        {profileImage?.name}
                      </p>
                    </div>
                  ) : (
                    <label
                      htmlFor="profileImage"
                      className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors ${
                        errors.profileImage
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
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
                  )}
                </div>
                {errors.profileImage && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.profileImage}
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
