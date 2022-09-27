import { useCep } from '../../src'

export function App() {
  const { setCep, status } = useCep()

  return (
    <div>
      <label>
        CEP: <input onBlur={e => setCep(e.target.value)} />
      </label>

      <pre>
        <p>{JSON.stringify(status, null, 2)}</p>
      </pre>
    </div>
  )
}
