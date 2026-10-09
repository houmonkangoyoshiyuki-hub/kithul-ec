export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-brand-cream px-6 text-center">
      <div className="text-5xl mb-6">🎉</div>
      <h1 className="text-2xl font-bold text-brand-navy mb-3">ご注文ありがとうございます！</h1>
      <p className="text-gray-600 mb-2">ご注文確認メールをお送りしました。</p>
      <p className="text-sm text-gray-400 mb-8">発送まで3〜7営業日お待ちください。</p>
      <a
        href="/"
        className="inline-block bg-brand-gold text-brand-navy font-bold px-8 py-3 rounded-full hover:brightness-110 transition"
      >
        トップページへ戻る
      </a>
    </main>
  )
}
