"use client"

import { useState } from "react"
import Link from "next/link"
import { SocialProviders } from "@/components/SocialProviders"

interface AuthFormProps {
  mode: "sign-in" | "sign-up"
}

export function AuthForm({ mode }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isSignIn = mode === "sign-in"

  return (
    <div className="w-full max-w-md">
      <div className="mb-2 text-right">
        <span className="text-caption text-dark-700">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
        </span>
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="text-caption font-semibold text-dark-900 underline underline-offset-2 transition-colors hover:text-dark-700"
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </Link>
      </div>

      <div className="mt-8 text-center sm:mt-12">
        <h1 className="text-h3 text-dark-900">
          {isSignIn ? "Welcome back!" : "Create your account"}
        </h1>
        <p className="mt-2 text-body text-dark-700">
          {isSignIn
            ? "Please enter your details to sign in"
            : "Please fill in your details to get started"}
        </p>
      </div>

      <div className="mt-8">
        <SocialProviders />

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-light-300" />
          <span className="text-caption text-dark-700">
            Or {isSignIn ? "sign in" : "sign up"} with
          </span>
          <div className="h-px flex-1 bg-light-300" />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5"
        >
          {!isSignIn && (
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-caption text-dark-900"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="John Doe"
                className="w-full rounded-lg border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 transition-colors focus:border-dark-900 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-caption text-dark-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="johndoe@mail.com"
              className="w-full rounded-lg border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 transition-colors focus:border-dark-900 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-caption text-dark-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete={isSignIn ? "current-password" : "new-password"}
                placeholder="minimum 8 character"
                className="w-full rounded-lg border border-light-300 bg-light-100 px-4 py-3 pr-12 text-body text-dark-900 placeholder:text-dark-500 transition-colors focus:border-dark-900 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-dark-500 transition-colors hover:text-dark-900"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="1"
                      y1="1"
                      x2="23"
                      y2="23"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-1 w-full rounded-full bg-orange px-6 py-3.5 text-body-medium text-light-100 transition-opacity hover:opacity-90"
          >
            {isSignIn ? "Sign In" : "Sign Up"} &rarr;
          </button>
        </form>

        {isSignIn && (
          <div className="mt-4 text-center">
            <Link
              href="#"
              className="text-caption font-semibold text-dark-900 underline underline-offset-2 transition-colors hover:text-dark-700"
            >
              Forgot password?
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
