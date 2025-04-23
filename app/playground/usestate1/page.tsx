'use client'

import { useState } from 'react'

export default function UseStateExample1() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: 24 }}>
      <p>Você clicou {count} vezes.</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  )
}