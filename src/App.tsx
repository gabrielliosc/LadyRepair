import { PaintBrush } from "@styled-icons/remix-fill/PaintBrush"
import { Category } from "./components/Category"
import { Header } from "./components/Header"
import { Suggestion } from "./components/Suggestion"
import { Tag } from "./components/Tag"
import { AppContainer, CategoriesContainer, Hero, LocalInput, PopContainer, SearchButton, SearchContainer, SearchInput } from "./style"

import { CleaningServices } from '@styled-icons/material-outlined/CleaningServices'
import { Toilet } from "styled-icons/fa-solid"
import { Lightbulb } from '@styled-icons/bootstrap/Lightbulb'
import { Swiper, SwiperSlide } from 'swiper/react';
import { About } from "./components/About"




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

  const categories = [
    {
      'id': '1',
      'title': 'Diarista',
      'icon': <CleaningServices size={48}/>
    },
    {
      'id': '2',
      'title': 'Serviço gerais',
      'icon': <CleaningServices size={48}/>
    },
    {
      'id': '3',
      'title': 'Pintora',
      'icon': <PaintBrush size={48}/>
    },
    {
      'id': '4',
      'title': 'Encanadora',
      'icon': <Toilet size={48}/>
    },
    {
      'id': '5',
      'title': 'Eletricista',
      'icon': <Lightbulb size={48}/>
    }
  ]

  return (
    <AppContainer>
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
      
      <CategoriesContainer>
        <Swiper 
                  spaceBetween={10}
                  slidesPerView={'auto'}
                  simulateTouch={true}
              >
              {categories.map(category => (
          <SwiperSlide>
            <Category key={category.id} title={category.title} src={category.icon} />
          </SwiperSlide>
        ))}
        </Swiper>
      </CategoriesContainer>
      
      <Suggestion /> 

      <About />          
    </AppContainer>
  )
}

export default App
