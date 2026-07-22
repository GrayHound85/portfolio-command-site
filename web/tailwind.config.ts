import type { Config } from "tailwindcss"

const config: Config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2563eb",
                    hover: "#1d4ed8",
                },

                background: "#f8fafc",

                surface: "#ffffff",

                text: {
                    primary: "#0f172a",
                    secondary: "#64748b",
                },

                border: "#cbd5e1",
            },


            borderRadius: {
                card: "12px",
                button: "10px",
            },


            boxShadow: {
                card: "0 1px 3px rgba(0,0,0,0.1)",
            },
        },
    },
    plugins: [],
};

export default config;