function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="mb-6 text-lg">Página não encontrada 😢</p>
      <a
        href="/"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Voltar para a página inicial
      </a>
    </div>
  )
}

export default NotFound
