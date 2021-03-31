import { UserConfigExport, ConfigEnv } from "vite";
// https://github.com/anncwb/vite-plugin-mock
import { viteMockServe } from "vite-plugin-mock";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
    plugins: [vue(), viteMockServe({
			mockPath: 'mock',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve',
		})],
  };
};
