import type { Telegram, WebApp } from './schemas'

const telegram = window.Telegram as Telegram
export const webApp: WebApp = telegram.WebApp as WebApp
