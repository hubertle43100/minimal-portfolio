/**  @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{jsx,js}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                Oswald: ["Oswald", "serif"],
                SourceCodePro: ["Source Code Pro", "monospace", "sans-serif"],
            },
            backgroundColor: {
                "green-300": "#556B2F",
                "swift-300": "#FA7343",
                "react-300": "#68DBFB",
                "onyx-300": "#353839",
                "sage-300": "#92AFAD",
            },
        },
    },
    //a custom variant to check if the element is the last child within its parent container
    plugins: [
        function ({ addVariant, e }) {
            addVariant("not-last-child", ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(
                        `not-last-child${separator}${className}`
                    )}:not(:last-child)`;
                });
            });
        },
    ],
};
