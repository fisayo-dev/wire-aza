"use client";

import Image from "next/image";
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
  Plus,
  Trash2,
  Briefcase,
  CreditCard,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { createBusiness } from "@/actions/business";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Business types
const businessTypes = [
  "Financial Technology (Fintech)",
  "E-commerce",
  "Healthcare",
  "Education Technology (EdTech)",
  "Real Estate",
  "Agriculture (Agritech)",
  "Logistics & Transportation",
  "Food & Beverage",
  "Entertainment & Media",
  "Professional Services",
  "Manufacturing",
  "Retail",
  "Technology & Software",
  "Construction",
  "Hospitality & Tourism",
  "Energy & Utilities",
  "Fashion & Apparel",
  "Telecommunications",
  "Consulting",
  "Other",
];

// Nigerian banks list
const nigerianBanks = [
  { name: "Access Bank", code: "044" },
  { name: "Guaranty Trust Bank (GTBank)", code: "058" },
  { name: "Zenith Bank", code: "057" },
  { name: "First Bank of Nigeria", code: "011" },
  { name: "United Bank for Africa (UBA)", code: "033" },
  { name: "Union Bank of Nigeria", code: "032" },
  { name: "Ecobank Nigeria", code: "050" },
  { name: "Fidelity Bank", code: "070" },
  { name: "First City Monument Bank (FCMB)", code: "214" },
  { name: "Wema Bank", code: "035" },
  { name: "Stanbic IBTC Bank", code: "221" },
  { name: "Sterling Bank", code: "232" },
  { name: "Jaiz Bank", code: "301" },
  { name: "Keystone Bank", code: "082" },
  { name: "Citibank Nigeria", code: "023" },
  { name: "Standard Chartered Bank", code: "068" },
  { name: "Polaris Bank (formerly Skye)", code: "076" },
];

interface BankAccount {
  bankName: string;
  bankCode: string;
  accountName: string;
  accountNumber: string;
}

export default function CreateBusinessPage() {
  const [businessName, setBusinessName] = useState("");
  const [businessUsername, setBusinessUsername] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    { bankName: "", bankCode: "", accountName: "", accountNumber: "" },
  ]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState("");
  const [openBusinessType, setOpenBusinessType] = useState(false);
  const [openBankPopovers, setOpenBankPopovers] = useState<boolean[]>([false]);

  const router = useRouter();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          profileImage: "File size must be less than 10MB",
        }));
        return;
      }

      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          profileImage: "Please upload an image file",
        }));
        return;
      }

      setProfileImage(file);
      setErrors((prev) => ({ ...prev, profileImage: "" }));

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

  const addBankAccount = () => {
    if (bankAccounts.length < 2) {
      setBankAccounts([
        ...bankAccounts,
        { bankName: "", bankCode: "", accountName: "", accountNumber: "" },
      ]);
      setOpenBankPopovers([...openBankPopovers, false]);
    }
  };

  const removeBankAccount = (index: number) => {
    setBankAccounts(bankAccounts.filter((_, i) => i !== index));
    setOpenBankPopovers(openBankPopovers.filter((_, i) => i !== index));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[`bankAccount${index}`];
      return newErrors;
    });
  };

  const selectBank = (index: number, bank: { name: string; code: string }) => {
    const newAccounts = [...bankAccounts];
    newAccounts[index] = {
      ...newAccounts[index],
      bankName: bank.name,
      bankCode: bank.code,
    };
    setBankAccounts(newAccounts);

    // Close the popover
    const newOpen = [...openBankPopovers];
    newOpen[index] = false;
    setOpenBankPopovers(newOpen);

    // Clear error
    setErrors((prev) => ({ ...prev, [`bankAccount${index}`]: "" }));
  };

  const updateAccountField = (
    index: number,
    field: "accountName" | "accountNumber",
    value: string
  ) => {
    const newAccounts = [...bankAccounts];
    newAccounts[index] = { ...newAccounts[index], [field]: value };
    setBankAccounts(newAccounts);

    // Clear error when typing
    if (errors[`bankAccount${index}`]) {
      setErrors((prev) => ({ ...prev, [`bankAccount${index}`]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!businessName.trim())
      newErrors.businessName = "Business name is required";
    else if (businessName.trim().length < 2)
      newErrors.businessName = "Business name must be at least 2 characters";

    if (!businessUsername.trim())
      newErrors.businessUsername = "Business username is required";
    else if (businessUsername.trim().length < 3)
      newErrors.businessUsername = "Username must be at least 3 characters";
    else if (!/^[a-zA-Z0-9_]+$/.test(businessUsername))
      newErrors.businessUsername =
        "Username can only contain letters, numbers, and underscores";

    if (!businessType) newErrors.businessType = "Business type is required";

    if (!businessDescription.trim())
      newErrors.businessDescription = "Business description is required";
    else if (businessDescription.trim().length < 10)
      newErrors.businessDescription =
        "Description must be at least 10 characters";

    if (!profileImage) newErrors.profileImage = "Profile image is required";

    bankAccounts.forEach((account, index) => {
      if (!account.bankName) {
        newErrors[`bankAccount${index}`] = "Please select a bank";
      } else if (!account.accountName.trim()) {
        newErrors[`bankAccount${index}`] = "Account name is required";
      } else if (!account.accountNumber.trim()) {
        newErrors[`bankAccount${index}`] = "Account number is required";
      } else if (!/^\d{10}$/.test(account.accountNumber)) {
        newErrors[`bankAccount${index}`] = "Account number must be 10 digits";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setSubmitError("");
    if (!validateForm()) {
      setSubmitError("Please fix all errors before submitting");
      window.scrollTo(0, 0);
      return;
    }

    // Submit logic
    const payload = {
      name: businessName,
      username: businessUsername.trim(),
      description: businessDescription,
      type: businessType,
      logo: imagePreview,
      accounts: bankAccounts.map((account) => ({
        bank_name: account.bankName,
        bank_code: account.bankCode,
        account_number: account.accountNumber,
        account_name: account.accountName,
      })),
    };

    const res = await createBusiness(payload);
    if (res.success) {
      // console.log("Business created:", res.data);
      router.push("/businesses");
    } else {
      setSubmitError(res.error || "Failed to create business");
      toast.error(res.error || "Failed to create business");
      window.scrollTo(0, 0);
    }
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
          <div className="space-y-6">
            {submitError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{submitError}</AlertDescription>
              </Alert>
            )}

            <FieldGroup className="space-y-6">
              {/* Business Name */}
              <Field>
                <FieldLabel className="flex items-center gap-2 text-sm font-medium">
                  <Building2 className="w-4 h-4" />
                  Business Name <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => {
                    setBusinessName(e.target.value);
                    setErrors((prev) => ({ ...prev, businessName: "" }));
                  }}
                  className={errors.businessName ? "border-red-500" : ""}
                />
                {errors.businessName && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.businessName}
                  </p>
                )}
              </Field>

              {/* Business Username */}
              <Field>
                <FieldLabel className="flex items-center gap-2 text-sm font-medium">
                  <User className="w-4 h-4" />
                  Business Username <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  placeholder="Choose a unique username"
                  value={businessUsername}
                  onChange={(e) => {
                    setBusinessUsername(e.target.value);
                    setErrors((prev) => ({ ...prev, businessUsername: "" }));
                  }}
                  className={errors.businessUsername ? "border-red-500" : ""}
                />
                {errors.businessUsername && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.businessUsername}
                  </p>
                )}
              </Field>

              {/* Business Type */}
              <Field>
                <FieldLabel className="flex items-center gap-2 text-sm font-medium">
                  <Briefcase className="w-4 h-4" />
                  Business Type <span className="text-red-500">*</span>
                </FieldLabel>
                <Popover
                  open={openBusinessType}
                  onOpenChange={setOpenBusinessType}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={`w-full justify-between ${
                        errors.businessType ? "border-red-500" : ""
                      }`}
                    >
                      {businessType || "Select business type..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search business type..." />
                      <CommandEmpty>No type found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup className="max-h-64 overflow-auto">
                          {businessTypes.map((type) => (
                            <CommandItem
                              key={type}
                              value={type}
                              onSelect={() => {
                                setBusinessType(
                                  type === businessType ? "" : type
                                );
                                setOpenBusinessType(false);
                                setErrors((prev) => ({
                                  ...prev,
                                  businessType: "",
                                }));
                              }}
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  businessType === type
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              />
                              {type}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {errors.businessType && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.businessType}
                  </p>
                )}
              </Field>

              {/* Business Description */}
              <Field>
                <FieldLabel className="flex items-center gap-2 text-sm font-medium">
                  <FileText className="w-4 h-4" />
                  Business Description <span className="text-red-500">*</span>
                </FieldLabel>
                <Textarea
                  placeholder="Describe your business..."
                  value={businessDescription}
                  onChange={(e) => {
                    setBusinessDescription(e.target.value);
                    setErrors((prev) => ({ ...prev, businessDescription: "" }));
                  }}
                  rows={4}
                  className={`${
                    errors.businessDescription ? "border-red-500" : ""
                  } resize-none h-30`}
                />
                {errors.businessDescription && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.businessDescription}
                  </p>
                )}
              </Field>

              {/* Profile Image */}
              <Field>
                <FieldLabel className="flex items-center gap-2 text-sm font-medium">
                  <Upload className="w-4 h-4" />
                  Business Profile Image <span className="text-red-500">*</span>
                </FieldLabel>
                <div className="mt-1.5">
                  {imagePreview ? (
                    <div className="relative">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        width={500}
                        height={192}
                        className="w-full h-48 object-cover rounded-lg border-2 border-gray-300"
                      />
                      <button
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600"
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
                      className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ${
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
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
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

              {/* Bank Accounts */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FieldLabel className="flex items-center gap-2 text-sm font-medium">
                    <CreditCard className="w-4 h-4" />
                    Bank Account Details <span className="text-red-500">*</span>
                  </FieldLabel>
                  {bankAccounts.length < 2 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addBankAccount}
                      className="flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" />
                      Add Account
                    </Button>
                  )}
                </div>

                {bankAccounts.map((account, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg bg-white space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700">
                        Account {index + 1}
                      </span>
                      {bankAccounts.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeBankAccount(index)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    {/* Bank Selector - FULLY FIXED */}
                    <div>
                      <label className="text-xs font-medium text-gray-700 mb-1.5 block">
                        Bank Name <span className="text-red-500">*</span>
                      </label>
                      <Popover
                        open={openBankPopovers[index]}
                        onOpenChange={(open) => {
                          const newOpen = [...openBankPopovers];
                          newOpen[index] = open;
                          setOpenBankPopovers(newOpen);
                        }}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={`w-full justify-between ${
                              errors[`bankAccount${index}`]
                                ? "border-red-500"
                                : ""
                            }`}
                          >
                            <span className="truncate text-left">
                              {account.bankName || "Select bank..."}
                            </span>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command>
                            <CommandInput placeholder="Search bank..." />
                            <CommandEmpty>No bank found.</CommandEmpty>
                            <CommandList>
                              <CommandGroup className="max-h-64 overflow-auto">
                                {nigerianBanks.map((bank) => (
                                  <CommandItem
                                    key={bank.code}
                                    value={bank.name}
                                    onSelect={() => selectBank(index, bank)}
                                  >
                                    <Check
                                      className={`mr-2 h-4 w-4 ${
                                        account.bankName === bank.name
                                          ? "opacity-100"
                                          : "opacity-0"
                                      }`}
                                    />
                                    {bank.name}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Account Name */}
                    <div>
                      <label className="text-xs font-medium text-gray-700 mb-1.5 block">
                        Account Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Enter account name"
                        value={account.accountName}
                        onChange={(e) =>
                          updateAccountField(
                            index,
                            "accountName",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    {/* Account Number */}
                    <div>
                      <label className="text-xs font-medium text-gray-700 mb-1.5 block">
                        Account Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Enter 10-digit account number"
                        value={account.accountNumber}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          updateAccountField(index, "accountNumber", value);
                        }}
                        maxLength={10}
                      />
                    </div>

                    {errors[`bankAccount${index}`] && (
                      <p className="text-sm text-red-500 -mt-2">
                        {errors[`bankAccount${index}`]}
                      </p>
                    )}
                  </div>
                ))}

                <p className="text-xs text-gray-500">
                  You can add up to 2 bank accounts
                </p>
              </div>
            </FieldGroup>

            <Button onClick={handleSubmit} className="w-full mt-8" size="lg">
              Create Business
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
