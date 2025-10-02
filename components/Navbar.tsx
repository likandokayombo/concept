"use client";
import { SignUpButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-16 px-6 border-b bg-white">
      <h1 className="text-lg font-bold">Concept</h1>
      <div>
        <SignedOut>
          <SignUpButton mode="modal">
            <Button variant="default">Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  )
}

