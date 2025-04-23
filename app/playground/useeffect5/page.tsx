'use client'

import { useState, useEffect } from 'react'

export default function UseEffectCorreto() {
  const [data, setData] = useState<any>(null)
  const [count, setCount] = useState(0)

  // Correção: useEffect com array de dependências vazio para buscar apenas uma vez ao montar
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => setData(json))
  }, []) // <-- Correto: executa só uma vez ao montar

  return (
    <div style={{ padding: 24 }}>
      <h2>Exemplo corrigido: busca de dados sem loop infinito</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>
        <b>Correto:</b> O <code>useEffect</code> agora executa apenas uma vez ao montar o componente, evitando o loop infinito de requisições.
      </p>
    </div>
  )
}