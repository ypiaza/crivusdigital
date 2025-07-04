import React, { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Enviando...");

        const response = await fetch("https://formspree.io/f/mrbkdnwv", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                message: form.message,
            }),
        });

        if (response.ok) {
            setStatus("Mensagem enviada! Obrigado por entrar em contato.");
            setForm({ name: "", email: "", message: "" });
        } else {
            setStatus("Algo deu errado. Tente novamente.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-10 rounded space-y-4">
                <div>
                    <label className="block mb-1 font-semibold text-[#161616]/80">Nome</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-[#161616]/80 rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-[#161616]/80">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-[#161616]/80 rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold text-[#161616]/80" >Mensagem</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full border-2 border-[#161616]/80 rounded px-3 py-2"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-[#57C690]/90 text-white w-full px-6 py-3 font-semibold cursor-pointer rounded hover:bg-[#57C690] transition"
                >
                    Enviar mensagem
                </button>
                {status && <p className="text-sm mt-2">{status}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
