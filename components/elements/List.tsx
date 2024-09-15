import { ListType } from "@/types/elements/list"
import Link from "next/link"
import React from "react"

export const List: React.FC<ListType> = ({ title, className, to }) => {
  return <li className={className}><Link href={to}>{title}</Link></li>
}
