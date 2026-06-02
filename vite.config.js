import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    watch: {
      usePolling: true,
      interval: 1000, // Ngeceknya dilonggarin jadi tiap 1 detik sekali (bawaannya 100ms)
      ignored: ['**/node_modules/**', '**/.git/**'], // Jangan cek folder-folder ini!
    },
  },
  preview: {
    port: 3001,
  },  
});