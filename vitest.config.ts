import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        coverage: {
            provider: "v8",
            reporter: ["text", "html", "lcov", "json"],
            include: ["src/algorithms/**/*.ts", "src/list/**/*.ts", "src/stack/**/*.ts"],
            thresholds: {
                statements: 95,
                branches: 85,
                functions: 100,
                lines: 100,
            },
        },
    },
});
