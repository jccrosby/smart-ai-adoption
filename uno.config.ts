import { defineConfig, presetWind3, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Sen",
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
  ],
  shortcuts: {
    // custom the default background
    "bg-main":
      "bg-gradient-to-r from-teal-50 via-violet-100 to-white text-gray-900 dark:(from-gray-800 to-gray-900 text-white)",
  },
});
