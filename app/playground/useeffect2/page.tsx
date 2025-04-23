'use client'

import { useState, useEffect } from 'react'

export default function UseEffectErroComum() {
  const [count, setCount] = useState(0)
  const [dobro, setDobro] = useState(0)

  // ERRO: esquecer de colocar dependências no array do useEffect
  useEffect(() => {
    setDobro(count * 2)
    // Dependências ausentes: deveria ser [count]
  }, []) // <-- Executa só uma vez, não quando count muda

  return (
    <div style={{ padding: 24 }}>
      <h2>Exemplo de erro comum com useEffect</h2>
      <p>Valor: {count}</p>
      <p>Dobro: {dobro}</p>
      <button onClick={() => setCount(count + 1)}>
        Somar 1
      </button>
      <p>
        <b>Erro:</b> O valor de <code>dobro</code> não é atualizado quando <code>count</code> muda, pois o <code>useEffect</code> não depende de <code>count</code>.
      </p>
    </div>
  )
}