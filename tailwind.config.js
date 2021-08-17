module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: "Questrial",
                domine: "Domine",
            },
            colors: {
                red: "#A1151A",
                mustard: "#D7B344",
                "spring-wood": "#F4F2EB",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
