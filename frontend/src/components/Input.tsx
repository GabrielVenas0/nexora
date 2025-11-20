import React from 'react'

interface InputProps {
  label: string
  type: 'password' | 'email' | 'text'
  id: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ label, type, id, value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="peer w-full rounded-sm border border-gray-300 px-2 pt-3 pb-0.5 text-gray-800 outline-none"
      />
      <label
        htmlFor={id}
        className="absolute top-2.5 left-0 w-full px-2 text-sm text-gray-500 transition-all duration-100 peer-focus:top-0 peer-focus:text-xs"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
