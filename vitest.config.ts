import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith("v-");
          },
        },
      },
    }),
  ],
  test: {
    environment: "jsdom",
  },
});
