"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      console.log("LOGIN RESPONSE:", data);

      if (res.ok && data.success === true) {
        alert(data.message);

        localStorage.setItem("user", JSON.stringify(data.user));

        setTimeout(() => {
          router.replace("/dashboard");
        }, 200);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to continue to your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit">Login</button>
        </form>

        <div className="login-footer">
          <p>© Pool Captain System</p>
        </div>
      </div>
    </div>
  );
}