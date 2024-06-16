import { Header } from "./components/Header"
import { Suggestion } from "./components/Suggestion"
import { Tag } from "./components/Tag"
import { Hero, LocalInput, PopContainer, SearchButton, SearchContainer, SearchInput } from "./style"




function App() {

  const tags = [
    {
      'id': '1',
      'title': 'Diarista'
    },
    {
      'id': '2',
      'title': 'Serviço gerais'
    },
    {
      'id': '3',
      'title': 'Pintora'
    },
    {
      'id': '4',
      'title': 'Encanadora'
    },
    {
      'id': '5',
      'title': 'Eletricista'
    }
  ]

  

  return (
    <>
      <Header />

      <Hero>
        <h1>Que tipo de serviço você está procurando?</h1>

        <SearchContainer>
          <SearchInput placeholder="Busque por um serviço" />
          <LocalInput type="text" placeholder="SP" />
          <SearchButton>Buscar</SearchButton>
        </SearchContainer>

        <PopContainer>
          <strong>Populares:</strong>
            {tags.map(tag => (
              <Tag key={tag.id} title={tag.title} />
            ))}
        </PopContainer>
      </Hero>

      <Suggestion />            
    </>
  )
}

export default App
