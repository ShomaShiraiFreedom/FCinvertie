import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // 相対パスで指定
  publicDir: 'src/public',
  // .JPEGファイルをアセットとして含める
  assetsInclude: ['**/*.JPEG', '**/*.jpg', '**/*.png'],
});
