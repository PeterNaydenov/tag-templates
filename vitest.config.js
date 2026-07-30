import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ['test/**/*.js'],
        coverage: {
            provider: 'v8',
            include: ['src/**/*.js'],
            exclude: ['node_modules', 'test'],
            reporter: ['lcov', 'text-summary']
        }
    }
})
