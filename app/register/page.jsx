"use client";

import { useState } from "react";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Sign up to get started</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email address"
            className={styles.input}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>

        <p className={styles.footerText}>
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}