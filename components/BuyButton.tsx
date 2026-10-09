'use client'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function BuyButton({ priceId, label = '購入する' }: { priceId: string; label?: string }) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (!priceId) {
      alert('商品設定中です。しばらくお待ちください。')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const { url, error } = await res.json()
      if (error) throw new Error(error)
      window.location.href = url
    } catch (e) {
      alert('エラーが発生しました。しばらくしてから再度お試しください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full bg-brand-gold text-brand-dark font-bold py-3 rounded-full hover:bg-brand-gold-light disabled:opacity-40 transition-all duration-300 tracking-wider"
    >
      {loading ? '処理中...' : label}
    </button>
  )
}
