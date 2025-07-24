// app/[locale]/checkout/success/page.tsx
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n'

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function SuccessPage({ params }: Props) {
  const { locale } = await params
  const dict = await getDictionary(locale)
 
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">{dict.success.title}</h1>
      <p className="mt-4">{dict.success.message}</p>
      <a
        href={`/${locale}`}
        className="mt-6 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        {dict.success.continue}
      </a>
    </div>
  )
}
