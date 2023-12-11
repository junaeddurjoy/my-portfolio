/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'bg-image': "url('images/background.png')",
            }
        },
    },
    plugins: [],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
}