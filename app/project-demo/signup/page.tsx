
"use client";

import { useState } from "react";
import { signupAction } from "@/app/actions/signup";

export default function SignupPage() {
  const [errors, setErrors] = useState<any>(null);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-96 p-6 rounded-xl shadow">
        <form 
            action={async (formData) => {
                const result = await signupAction(formData);
                if (result?.errors) setErrors(result.errors);
            }}
            className="flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold mb-4">Create an account</h2>
          {/* Email */}
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border rounded-md px-4 py-2"
            />
            {errors?.email && (
              <p className="text-red-500 text-sm">{errors.email[0]}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border rounded-md px-4 py-2"
            />
            {errors?.password && (
              <p className="text-red-500 text-sm">{errors.password[0]}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              name="confirm"
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-md px-4 py-2"
            />
            {errors?.confirm && (
              <p className="text-red-500 text-sm">{errors.confirm[0]}</p>
            )}
          </div>

          <button className="bg-black text-white py-2 rounded-md">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
