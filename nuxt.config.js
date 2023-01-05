import dotenv from '@dword-design/dotenv-json-extended'

dotenv.config()

export default defineNuxtConfig({
  modules: [
    ['nuxt-mail', {
      smtp: JSON.parse(process.env.MAIL_CONFIG || ''),
    }],
  ],
})
