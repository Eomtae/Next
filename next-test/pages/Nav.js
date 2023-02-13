import React from 'react'
import Link from "next/link"

export const Nav = () => {
  return (
    <header>
        <nav>
            <Link href='/'>초기화면</Link>
            <Link href='/one'>완</Link>
            <Link href='/two'>투</Link>
        </nav>
    </header>
  )
}

