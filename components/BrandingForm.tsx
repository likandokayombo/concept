"use client";

import { useState } from "react";

export default function BrandingForm({ onGenerate }: { onGenerate: (data: any) => void }) {
  const [industry, setIndustry] = useState("");
  const [tone, setTone] = useState("professional");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ industry, tone }),
    });

    const data = await res.json();
    onGenerate(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl p-6 rounded-2xl w-full max-w-lg space-y-4"
    >
      <h2 className="text-xl font-semibold">Create Your Brand</h2>

      <div>
        <label className="block text-sm font-medium">Industry</label>
        <input
          type="text"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-1"
          placeholder="e.g. Tech, Fashion, Food"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Tone</label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-1"
        >
          <option value="professional">Professional</option>
          <option value="playful">Playful</option>
          <option value="luxury">Luxury</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
      >
        Generate Ideas
      </button>
    </form>
  );
}
