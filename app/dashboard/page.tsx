
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Home,
  LayoutDashboard,
  History,
  CreditCard,
  Wallet,
  Menu,
} from "lucide-react";

export default function DashboardHome() {
  const { user } = useUser();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", icon: <Home className="h-5 w-5" />, href: "/" },
    { name: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" />, href: "/dashboard" },
    { name: "History", icon: <History className="h-5 w-5" />, href: "/history" },
    { name: "Payments", icon: <CreditCard className="h-5 w-5" />, href: "/payments" },
    { name: "Subscriptions", icon: <Wallet className="h-5 w-5" />, href: "/subscriptions" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-6 md:px-16">
      <div className="max-w-5xl mx-auto relative flex flex-col items-center">
        {/* ---- Hamburger + Dashboard Header ---- */}
        <div className="flex flex-col mb-6 w-full items-start">
          {/* Hamburger Icon */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="p-3 hover:scale-105 transition-transform duration-200"
              >
                <Menu className="h-8 w-8 text-black" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-64 bg-white border-r">
              <h2 className="sr-only">Navigation Menu</h2>
              <div className="flex flex-col gap-6 mt-10 px-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-2 font-semibold px-3 py-2 rounded-md transition
                        ${isActive ? "bg-gray-200 text-black" : "text-gray-800 hover:bg-gray-100 hover:text-black"}`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>

          {/* Dashboard Title */}
          <div className="flex items-center gap-3 mt-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <span className="border border-gray-400 text-gray-700 text-sm font-medium px-3 py-1 rounded-md">
              Free Plan
            </span>
          </div>
        </div>

        {/* ---- Parent Card (Responsive) ---- */}
        <Card className="shadow-lg border p-4 md:p-6 w-full max-w-5xl">
          <CardContent className="flex flex-wrap gap-6 justify-center">
            {/* --- Welcome Back Card --- */}
            <Card className="shadow-md border flex-1 min-w-[280px] max-w-md w-full md:w-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Welcome back, {user?.firstName || "Creator"} 
                </CardTitle>
                <CardDescription>
                  Let’s generate unique branding ideas for your next project.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-4">
                <p className="text-gray-600 mb-4">
                  Use our AI engine to get name ideas, taglines, and creative
                  inspiration in seconds.
                </p>
              </CardContent>

              <CardFooter className="px-4 pb-4">
                <Button className="bg-black text-white hover:bg-gray-900 w-full">
                  Generate Branding Suggestions
                </Button>
              </CardFooter>
            </Card>

            {/* --- Premium Upgrade Card --- */}
            <Card className="shadow-md border border-gray-200 flex-1 min-w-[280px] max-w-md w-full md:w-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Unlock Premium 
                </CardTitle>
                <CardDescription>
                  Enjoy unlimited branding ideas, faster AI responses, and image
                  logo generation.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-4">
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Unlimited branding ideas</li>
                  <li>AI-generated logos and palettes</li>
                  <li>Priority generation speed</li>
                  <li>Save and manage your brand history</li>
                </ul>
              </CardContent>

              <CardFooter className="px-4 pb-4">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-black text-white hover:bg-gray-900 w-full"
                >
                  Upgrade to Premium
                </Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
