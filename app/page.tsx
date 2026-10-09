'use client'
import BuyButton from '@/components/BuyButton'

const PRODUCTS = [
  {
    id: 'personal',
    name: 'キトゥル・トリークル 200ml',
    price: 1980,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PERSONAL ?? '',
    tag: '個人用',
    desc: 'コーヒー・紅茶・ヨーグルトに。毎日使いやすいサイズ。',
  },
  {
    id: 'business',
    name: 'キトゥル・トリークル 業務用 1L',
    price: 7800,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BUSINESS ?? '',
    tag: '業務用',
    desc: 'カフェ・飲食店・健康食品店向け。大容量でコストを抑えられます。',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-brand-navy text-white py-20 px-6 text-center overflow-hidden">
        <p className="text-brand-gold text-sm tracking-widest mb-3 uppercase">Sri Lanka Organic</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          キトゥル・トリークル
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-2">スリランカ産 100%天然 低GIシロップ</p>
        <p className="text-blue-200 text-sm mb-8">砂糖の代わりに。血糖値が気になる方へ。</p>
        <a
          href="#products"
          className="inline-block bg-brand-gold text-brand-navy font-bold px-8 py-3 rounded-full hover:brightness-110 transition"
        >
          商品を見る →
        </a>
      </section>

      {/* 特徴 */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-center text-2xl font-bold text-brand-navy mb-10">キトゥル・トリークルとは</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: '🌴', title: '100%天然・無添加', body: 'スリランカのキトゥルヤシの樹液を煮詰めただけ。着色料・保存料・砂糖の添加は一切なし。' },
            { icon: '📉', title: '低GI甘味料', body: '白砂糖と比べて血糖値の上昇がゆるやか。糖尿病が気になる方・予備軍の方にもおすすめ。' },
            { icon: '🏛️', title: 'スリランカ政府認定', body: 'スリランカ政府も力を入れる特産品。政府検査機関での品質チェック済み。' },
          ].map(f => (
            <div key={f.title} className="bg-brand-cream rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-brand-navy mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* おすすめの使い方 */}
      <section className="py-14 px-6 bg-brand-cream">
        <h2 className="text-center text-2xl font-bold text-brand-navy mb-8">こんな使い方がおすすめ</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['☕ コーヒー・紅茶に', '🥣 ヨーグルトに', '🥞 パンケーキに', '🍳 料理の隠し味に'].map(u => (
            <div key={u} className="bg-white rounded-xl py-4 px-2 text-sm font-medium text-brand-green shadow-sm">{u}</div>
          ))}
        </div>
      </section>

      {/* 商品 */}
      <section id="products" className="py-16 px-6 bg-white">
        <h2 className="text-center text-2xl font-bold text-brand-navy mb-10">商品ラインナップ</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {PRODUCTS.map(p => (
            <div key={p.id} className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition">
              <span className="text-xs bg-brand-navy text-white px-3 py-1 rounded-full self-start">{p.tag}</span>
              <h3 className="text-lg font-bold text-brand-navy">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
              <p className="text-2xl font-bold text-brand-gold">¥{p.price.toLocaleString()}<span className="text-sm text-gray-400 font-normal ml-1">（税込）</span></p>
              <BuyButton priceId={p.priceId} label="カートに入れる" />
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">送料：全国一律550円（税込）／5,000円以上で送料無料</p>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 bg-brand-cream">
        <h2 className="text-center text-2xl font-bold text-brand-navy mb-8">よくある質問</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { q: '砂糖との違いは？', a: '白砂糖はGI値70前後ですが、キトゥル・トリークルはGI値が低く、血糖値の急上昇を抑えます。またミネラル・鉄分なども含まれています。' },
            { q: '賞味期限はどのくらいですか？', a: '未開封で製造から2年です。開封後は冷蔵庫で保管し、3ヶ月を目安にお使いください。' },
            { q: '糖尿病の薬を飲んでいますが大丈夫ですか？', a: '低GI食品ですが、医療用途の代替品ではありません。主治医にご相談の上お使いください。' },
            { q: '業務用はどこに相談すればいいですか？', a: 'ページ下部のお問い合わせフォームよりご連絡ください。サンプルもご用意しています。' },
          ].map(f => (
            <details key={f.q} className="bg-white rounded-xl px-6 py-4 cursor-pointer group">
              <summary className="font-bold text-brand-navy list-none flex justify-between items-center">
                {f.q}
                <span className="text-brand-gold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-14 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold text-brand-navy mb-3">お問い合わせ</h2>
        <p className="text-sm text-gray-500 mb-6">業務用・サンプルのご依頼・ご質問はこちらから</p>
        <a
          href="mailto:info@alljapan.co.jp"
          className="inline-block border-2 border-brand-navy text-brand-navy font-bold px-8 py-3 rounded-full hover:bg-brand-navy hover:text-white transition"
        >
          メールで問い合わせる
        </a>
      </section>

      {/* フッター */}
      <footer className="bg-brand-navy text-blue-200 text-xs text-center py-6 px-4">
        <p>© 2026 All Japan Co., Ltd. — スリランカ産キトゥル・トリークル 輸入販売</p>
        <p className="mt-1">特定商取引法に基づく表記 / プライバシーポリシー</p>
      </footer>
    </main>
  )
}
