// app/[locale]/checkout/cancel/page.tsx
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n'

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function CancelPage({ params }: Props) {
    const { locale } = await params
    const dict = await getDictionary(locale)
    
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-back-600">{dict.error.title}</h1>
      <p className="mt-4">{dict.error.message}</p>
      <a
        href={`/${locale}/checkout`}
        className="mt-6 inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        {dict.error.retry}
      </a>
    </div>
  )
}
