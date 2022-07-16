export interface Telegram {
  Utils: object
  WebApp: object
  WebView: object
}

export interface WebApp {
  initData: string
  initDataUnsafe: WebAppInitData
  version: string
  colorScheme: string
  themeParams: ThemeParams
  isExpanded: boolean
  viewportHeight: number
  viewportStableHeight: number
  headerColor: string
  backgroundColor: string
  BackButton: BackButton
  MainButton: MainButton
  HapticFeedback: HapticFeedback
  isVersionAtLeast: Function
  setHeaderColor: Function
  setBackgroundColor: Function
  onEvent: Function
  offEvent: Function
  sendData: Function
  openLink: Function
  openTelegramLink: Function
  openInvoice: Function
  ready: Function
  expand: Function
  close: Function
}

interface ThemeParams {
  bg_color: string
  text_color: string
  hint_color: string
  link_color: string
  button_color: string
  button_text_color: string
  secondary_bg_color: string
}

interface BackButton {
  isVisible: Boolean
  onClick: Function
  offClick: Function
  show(): Function
  hide(): Function
}

interface MainButton {
  text: String
  color: String
  textColor: String
  isVisible: Boolean
  isActive: Boolean
  isProgressVisible: Boolean
  setText: Function
  onClick: Function
  offClick: Function
  show: Function
  hide: Function
  enable: Function
  disable: Function
  showProgress: Function
  hideProgress: Function
  setParams: Function
}

interface HapticFeedback {
  impactOccurred(): Function
  notificationOccurred(): Function
  selectionChanged(): Function
}

interface WebAppInitData {
  query_id: string
  user: WebAppUser
  receiver: WebAppUser
  chat: WebAppChat
  start_param: string
  can_send_after: number
  auth_date: number
  hash: string
}

interface WebAppUser {
  id: number
  is_bot: boolean
  first_name: string
  last_name: string
  username: string
  language_code: string
  photo_url: string
}

interface WebAppChat {
  id: number
  type: string
  title: string
  username: string
  photo_url: string
}
