import { ButtonType } from "@/types/elements/button"
import React from "react"

export const Button: React.FC<ButtonType> = ({ children, className }) => {
  return (
    <button className={className}>
      {children}
    </button>
  )
}
