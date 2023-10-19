import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@type", replacement: path.resolve(__dirname, "src/types") },
      { find: "@action", replacement: path.resolve(__dirname, "src/actions") },
      { find: "@reducer", replacement: path.resolve(__dirname, "src/reducers") },
      { find: "@helper", replacement: path.resolve(__dirname, "src/helpers") },
      { find: "@container", replacement: path.resolve(__dirname, "src/containers") },
    ]
  }
})
