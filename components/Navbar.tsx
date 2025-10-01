import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

// Small helper for Sign In
function AuthButton() {
  return (
    <SignInButton mode="modal">
      <Button variant="default">Sign In</Button>
    </SignInButton>
  );
}

// ✅ The actual Navbar component
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b">
      <h1 className="text-xl font-bold">Concept</h1>
      {/* Show Clerk buttons */}
      <div>
        <AuthButton />
        {/* Later, when logged in, you can use <UserButton /> */}
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
    </nav>
  );
}
