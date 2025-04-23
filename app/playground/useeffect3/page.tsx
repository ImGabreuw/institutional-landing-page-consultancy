'use client'

import { useState, useEffect } from 'react'

export default function UseEffectErroComum() {
  const [count, setCount] = useState(0)
  const [dobro, setDobro] = useState(0)

  useEffect(() => {
    setDobro(count * 2)
  }, [count]) // <-- Executa sempre que count muda

  return (
    <div style={{ padding: 24 }}>
      <h2>Exemplo de erro comum com useEffect</h2>
      <p>Valor: {count}</p>
      <p>Dobro: {dobro}</p>
      <button onClick={() => setCount(count + 1)}>
        Somar 1
      </button>
      <p>
        <b>Correto:</b> Agora o valor de dobro é atualizado sempre que <code>count</code> muda, pois o <code>useEffect</code> depende de <code>count</code>.
      </p>
    </div>
  )
}