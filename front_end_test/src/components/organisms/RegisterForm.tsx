"use client";

import { useState } from "react";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
        if (!name || !email || !password) {
            setError("Preencha todos os campos");
            return;
        }

        console.log("Usuário registrado:", { name, email });

        router.push("/login");
    };

    return (
        <div className="container flex justify-center items-center min-h-screen">
            <div className="card w-full max-w-md flex flex-col gap-4">
                <h1 className="text-center text-2xl font-bold">Cadastro</h1>

                <InputField
                    label="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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

                <Button className="button w-full">Cadastrar</Button>

                <p className="text-sm text-center">
                    Já tem conta? <a href="/login" className="text-blue-500">Entrar</a>
                </p>
            </div>
        </div>



    );
}