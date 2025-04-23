'use client'

import { useState } from 'react'

export default function UseStateExample2() {
  const [count, setCount] = useState(0)

  // Atualização direta (pode causar problemas em atualizações rápidas)
  const handleDoubleIncrementDireto = () => {
    // alteração de estados são agrupadas (batching) quando ocorrem dentro do mesmo evento (click, submit, etc)
    setCount(count + 1)
    setCount(count + 1)
  }

  // Atualização baseada no valor anterior (CORRETO)
  const handleDoubleIncrementSeguro = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Diferença entre atualização direta e via estado anterior</h2>
      <p>Valor atual: {count}</p>
      <button onClick={handleDoubleIncrementDireto}>
        Somar 2 (atualização direta)
      </button>
      <br /><br />
      <button onClick={handleDoubleIncrementSeguro}>
        Somar 2 (usando função)
      </button>
    </div>
  )
}