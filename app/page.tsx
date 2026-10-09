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
    <main className="bg-brand-dark text-brand-text">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden border-b border-brand-muted">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1500] via-brand-dark to-brand-dark" />
        <div className="relative z-10 w-full max-w-xs mx-auto">
          <p className="text-brand-gold text-[10px] tracking-[0.4em] mb-8 uppercase">Sri Lanka Organic — Since Ancient Times</p>
          <h1 className="font-serif font-bold mb-5 leading-snug">
  <span className="block" style={{ fontSize: 'clamp(2rem, 9vw, 3.5rem)' }}>キトゥル・</span>
  <span className="block" style={{ fontSize: 'clamp(2rem, 9vw, 3.5rem)' }}>トリークル</span>
</h1>

          <div className="w-12 h-px bg-brand-gold mx-auto my-6" />
          <p className="text-base text-brand-sub mb-2 tracking-wide">スリランカ産 100%天然 低GIシロップ</p>
          <p className="text-brand-sub text-sm mb-12 tracking-wide">砂糖の代わりに。血糖値が気になる方へ。</p>
          <a
            href="#products"
            className="inline-block border border-brand-gold text-brand-gold font-bold px-10 py-3 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 tracking-widest text-sm"
          >
            商品を見る →
          </a>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-20 px-6 bg-brand-surface">
        <p className="text-center text-brand-gold text-xs tracking-widest mb-3 uppercase">Features</p>
        <h2 className="text-center text-2xl font-serif font-bold mb-12">キトゥル・トリークルとは</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: '🌴', title: '100%天然・無添加', body: 'スリランカのキトゥルヤシの樹液を煮詰めただけ。着色料・保存料・砂糖の添加は一切なし。' },
            { icon: '📉', title: '低GI甘味料', body: '白砂糖と比べて血糖値の上昇がゆるやか。糖尿病が気になる方・予備軍の方にもおすすめ。' },
            { icon: '🏛️', title: 'スリランカ政府認定', body: 'スリランカ政府も力を入れる特産品。政府検査機関での品質チェック済み。' },
          ].map(f => (
            <div key={f.title} className="bg-brand-muted rounded-2xl p-7 text-center border border-brand-muted hover:border-brand-gold transition-colors duration-300">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-brand-gold mb-3">{f.title}</h3>
              <p className="text-sm text-brand-sub leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* おすすめの使い方 */}
      <section className="py-16 px-6 bg-brand-dark border-y border-brand-muted">
        <p className="text-center text-brand-gold text-xs tracking-widest mb-3 uppercase">How to Use</p>
        <h2 className="text-center text-2xl font-serif font-bold mb-10">こんな使い方がおすすめ</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['☕ コーヒー・紅茶に', '🥣 ヨーグルトに', '🥞 パンケーキに', '🍳 料理の隠し味に'].map(u => (
            <div key={u} className="bg-brand-surface rounded-xl py-5 px-3 text-sm font-medium text-brand-gold border border-brand-muted hover:border-brand-gold transition-colors duration-300">{u}</div>
          ))}
        </div>
      </section>

      {/* 商品 */}
      <section id="products" className="py-20 px-6 bg-brand-surface">
        <p className="text-center text-brand-gold text-xs tracking-widest mb-3 uppercase">Products</p>
        <h2 className="text-center text-2xl font-serif font-bold mb-12">商品ラインナップ</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {PRODUCTS.map(p => (
            <div key={p.id} className="bg-brand-dark border border-brand-muted rounded-2xl p-8 flex flex-col gap-5 hover:border-brand-gold transition-colors duration-300">
              <span className="text-xs border border-brand-gold text-brand-gold px-3 py-1 rounded-full self-start tracking-wider">{p.tag}</span>
              <h3 className="text-xl font-serif font-bold">{p.name}</h3>
              <p className="text-sm text-brand-sub leading-relaxed">{p.desc}</p>
              <p className="text-3xl font-bold text-brand-gold">
                ¥{p.price.toLocaleString()}
                <span className="text-sm text-brand-sub font-normal ml-1">（税込）</span>
              </p>
              <BuyButton priceId={p.priceId} label="カートに入れる" />
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-brand-sub mt-8">送料：全国一律550円（税込）／5,000円以上で送料無料</p>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-brand-dark">
        <p className="text-center text-brand-gold text-xs tracking-widest mb-3 uppercase">FAQ</p>
        <h2 className="text-center text-2xl font-serif font-bold mb-10">よくある質問</h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {[
            { q: '砂糖との違いは？', a: '白砂糖はGI値70前後ですが、キトゥル・トリークルはGI値が低く、血糖値の急上昇を抑えます。またミネラル・鉄分なども含まれています。' },
            { q: '賞味期限はどのくらいですか？', a: '未開封で製造から2年です。開封後は冷蔵庫で保管し、3ヶ月を目安にお使いください。' },
            { q: '糖尿病の薬を飲んでいますが大丈夫ですか？', a: '低GI食品ですが、医療用途の代替品ではありません。主治医にご相談の上お使いください。' },
            { q: '業務用はどこに相談すればいいですか？', a: 'ページ下部のお問い合わせフォームよりご連絡ください。サンプルもご用意しています。' },
          ].map(f => (
            <details key={f.q} className="bg-brand-surface border border-brand-muted rounded-xl px-6 py-4 cursor-pointer group hover:border-brand-gold transition-colors duration-300">
              <summary className="font-bold list-none flex justify-between items-center">
                {f.q}
                <span className="text-brand-gold group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="mt-3 text-sm text-brand-sub leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-16 px-6 bg-brand-surface text-center border-t border-brand-muted">
        <p className="text-brand-gold text-xs tracking-widest mb-3 uppercase">Contact</p>
        <h2 className="text-2xl font-serif font-bold mb-3">お問い合わせ</h2>
        <p className="text-sm text-brand-sub mb-8">業務用・サンプルのご依頼・ご質問はこちらから</p>
        <a
          href="mailto:info@alljapan.co.jp"
          className="inline-block border border-brand-gold text-brand-gold font-bold px-10 py-3 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
        >
          メールで問い合わせる
        </a>
      </section>

      {/* フッター */}
      <footer className="bg-brand-dark border-t border-brand-muted text-brand-sub text-xs text-center py-8 px-4">
        <p className="font-serif text-brand-gold tracking-widest text-sm mb-2">KITHUL TREACLE</p>
        <p>© 2026 All Japan Co., Ltd. — スリランカ産キトゥル・トリークル 輸入販売</p>
        <p className="mt-1">特定商取引法に基づく表記 / プライバシーポリシー</p>
      </footer>
    </main>
  )
}
