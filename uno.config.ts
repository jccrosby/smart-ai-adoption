import { defineConfig, presetWind3 } from "unocss";

export default defineConfig({
  presets: [presetWind3()],
  shortcuts: {
    // custom the default background
    "bg-main":
      "bg-gradient-to-r from-sky-50 to-sky-100 text-gray-900 dark:(from-gray-800 to-gray-900 text-white)",
  },
});
