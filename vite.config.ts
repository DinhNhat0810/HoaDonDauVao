import { ConfigEnv, UserConfig, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({

//   return

//  ,
// })

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_BASE_URL_API,
          secure: false,
          ws: true,
          changeOrigin: false,
          rewrite: (path) =>
            path.replace(
              new RegExp("^" + env.VITE_APP_BASE_API),
              env.VITE_APP_BASE_API
            ),
        },
      },
    },
  };
});
