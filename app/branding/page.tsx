
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function BrandingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    brand: "",
    tagline: "",
    location: "",
    industry: "",
    audience: "",
    personality: "",
    colors: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams(formData).toString();
    router.push(`/branding/suggestions?${query}`);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-400">
            Branding Form
          </CardTitle>
          <CardDescription>
            Enter your details to generate AI-powered branding suggestions.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="brand"
              placeholder="Brand name (e.g., NovaTech)"
              value={formData.brand}
              onChange={handleChange}
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-black outline-none"
              required
            />

            <input
              type="text"
              name="tagline"
              placeholder="Tagline (e.g., Empowering Your Future)"
              value={formData.tagline}
              onChange={handleChange}
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-black outline-none"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location (e.g., San Francisco)"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-black outline-none"
              required
            />

            <input
              type="text"
              name="industry"
              placeholder="Industry (e.g., Technology, Fashion, Food)"
              value={formData.industry}
              onChange={handleChange}
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="text"
              name="audience"
              placeholder="Target Audience (e.g., Gen Z, Professionals, Entrepreneurs)"
              value={formData.audience}
              onChange={handleChange}
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="text"
              name="personality"
              placeholder="Brand Personality (e.g., Bold, Minimalist, Playful)"
              value={formData.personality}
              onChange={handleChange}
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="text"
              name="colors"
              placeholder="Color Preference (Optional)"
              value={formData.colors}
              onChange={handleChange}
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-black outline-none"
            />

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-900"
            >
              Get Suggestions
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
