import type { Metadata } from "next"

// Metadata must be in a server component
export const metadata: Metadata = {
  title: "Login Page - FotoSync",
  description: "Login to FotoSync and start sharing your photos with the world!",
}

// Separate client component for the login form
import { LoginForm } from "./login-form"

export default function LoginPage() {
  return <LoginForm />
}

