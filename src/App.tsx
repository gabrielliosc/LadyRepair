import { Header } from "./components/Header"
import { Tag } from "./components/Tag"

function App() {

  const tags = [
    {
      'id': '1',
      'title': 'Pintor'
    },
    {
      'id': '2',
      'title': 'Diarista'
    },
    {
      'id': '3',
      'title': 'Eletricista'
    },
    {
      'id': '4',
      'title': 'Encanador'
    },
    {
      'id': '5',
      'title': 'Serviço gerais'
    }
  ]

  return (
    <>
      <Header />

      <div>Que tipo de serviço você está procurando?</div>

      <input placeholder="Busque por um serviço ou profissional" />
      <input type="text" placeholder="SP" />

      <button>Buscar</button>

      <strong>Populares:</strong>
      {tags.map(tag => (
        <Tag key={tag.id} title={tag.title} />
      ))}

      <span>Recomendados</span>
      <h2>Profissionais mais recomendados</h2>
    </>
  )
}

export default App
