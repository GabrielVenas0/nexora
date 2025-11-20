import React from 'react'

interface ButtonProps {
  onClick?: () => void
  label: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled, type }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="rounded-sm bg-blue-500 px-5 py-2 transition duration-300 hover:scale-105 hover:cursor-pointer hover:bg-indigo-500"
    >
      {label}
    </button>
  )
}

export default Button
