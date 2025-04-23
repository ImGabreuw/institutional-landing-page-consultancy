'use client'

import { useState, useEffect } from 'react'

export default function UseEffectExample() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`
  }, [count])

  return (
    <div style={{ padding: 24 }}>
      <h2>Exemplo simples de useEffect</h2>
      <p>Você clicou {count} vezes.</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
      <p>
        O título da aba do navegador será atualizado toda vez que o valor de <b>count</b> mudar.
      </p>
    </div>
  )
}