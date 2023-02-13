import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'


export const Nav = () => {
    // useEffect();
    // useState();
    // useRef();
    // useMemo();
    // useContext();
  return (
    <header>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/board'>Board</Link>
        </nav>
      </header>
  )
}
