import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        coverage: {
            provider: "v8",
            reporter: ["text", "html", "lcov", "json"],
            include: ["src/arrays/**/*.ts", "src/list/**/*.ts"],
        },
    },
});
