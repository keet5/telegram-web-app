import type { Telegram, WebApp } from './schemas'

const telegram: Telegram = window.Telegram
export const webApp: WebApp = telegram.WebApp as WebApp
