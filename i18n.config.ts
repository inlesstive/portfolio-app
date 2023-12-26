import { lang } from "@/locales";

const messages = Object.assign(lang);

const selectedLang = process.client ? localStorage.getItem("lang") : null;

const defaultLang = "ru";

export default defineI18nConfig(() => ({
  legacy: false,
  lazy: true,
  locale: selectedLang || defaultLang,
  messages,
  globalInjection: true
}));
