import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../components'

function Auth() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', user: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: form.user,
          password: form.password,
        }),
      })
      if (res.ok) {
        navigate('/')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="h-screen bg-slate-900">
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-60 flex-col items-center gap-3 rounded-sm bg-white p-4"
        >
          <h1 className="mb-4 text-xl">Login</h1>
          <div className="flex w-full flex-col items-center gap-1.5">
            <Input
              type="text"
              label="Usuário"
              id="user"
              onChange={handleChange}
            ></Input>
            <Input
              type="password"
              label="Senha"
              id="password"
              onChange={handleChange}
            ></Input>
          </div>
          <Button type="submit" label="Entrar"></Button>
        </form>
      </div>
    </div>
  )
}

export default Auth
