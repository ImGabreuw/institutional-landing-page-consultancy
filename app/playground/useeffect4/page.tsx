'use client'

import { useState, useEffect } from 'react'

export default function UseEffectErroLoop() {
  const [data, setData] = useState<any>(null)
  const [count, setCount] = useState(0)

  // ERRO: incluir 'data' nas dependências faz o useEffect disparar sempre que o estado muda,
  // causando um loop infinito de chamadas de API.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => setData(json))
  }, [data]) // <-- ERRO: 'data' nunca deve ser dependência aqui!

  return (
    <div style={{ padding: 24 }}>
      <h2>Exemplo de erro: loop infinito com useEffect</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>
        <b>Erro:</b> O useEffect dispara toda vez que data muda, mas dentro dele o setData é chamado, mudando data novamente, causando um loop infinito de requisições.
      </p>
    </div>
  )
}