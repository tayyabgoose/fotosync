import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Signup Page - FotoSync",
  description: "Signup to FotoSync and start sharing your photos with the world!",
}

// Separate client component for the signup form
import { SignupForm } from "./signup-form"

export default function SignupPage() {
  return <SignupForm />
}

