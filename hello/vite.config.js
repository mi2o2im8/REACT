import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // vite 웹앱을 호스팅/서브경로 에 배포해야 한다면.. base 설정 한 후 다시 빌드
  base:'/vite/',
})
