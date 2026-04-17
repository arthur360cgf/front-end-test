"use client";

import { useState } from "react";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/auth.store";

"use client";
export default function LoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    login({
      email,
      token: "fake-token-123",
    });

    router.push("/dashboard");
  };

  return (

    <div className="container flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Login</h1>

        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <span className="text-red-500">{error}</span>}

        <Button className="button w-full">Entrar</Button>

        <p className="text-sm text-center">
          Não tem conta? <a href="/register" className="text-blue-500">Cadastrar</a>
        </p>
      </div>
    </div>

  );
}