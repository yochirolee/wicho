// lib/dictionaries.ts
import 'server-only'

const dictionaries = {
  en: () => import('@/locales/en/common.json').then((mod) => mod.default),
  es: () => import('@/locales/es/common.json').then((mod) => mod.default),
}

export const getDictionary = async (locale: string) => {
  if (!(locale in dictionaries)) {
    throw new Error(`Unsupported locale: ${locale}`)
  }
  return dictionaries[locale as keyof typeof dictionaries]()
}