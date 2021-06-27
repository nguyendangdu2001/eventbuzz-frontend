import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import eslint from "@rbnlffl/rollup-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";
// import eslintPlugin from "vite-plugin-eslint";
// https://vitejs.dev/config/
const config = ({ command }) => ({
  plugins: [
    reactRefresh(),
    eslint({
      extensions: ["js", "jsx", "ts", "tsx"],
      filterInclude: ["**/*.{js,ts,jsx,tsx}"],
      throwOnError: true,
    }),
    // VitePWA(),
  ],
  base: command === "serve" ? "" : "/bwd2021-frontend/",
  define: {
    global: "window",
  },
  resolve: {
    alias: {
      "@pages": resolve(__dirname, "./src/pages"),
      "@hooks": resolve(__dirname, "./src/common/hooks"),
      "@components": resolve(__dirname, "./src/common/components"),
      "@action": resolve(__dirname, "./src/redux/action"),
      "@config": resolve(__dirname, "./src/config"),
      "@helper": resolve(__dirname, "./src/helper"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@data": resolve(__dirname, "./src/data"),
      "@redux": resolve(__dirname, "./src/redux"),
      "@icon": resolve(__dirname, "./src/common/components/icons"),
    },
  },
});
export default config;
