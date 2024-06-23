import { PaintBrush } from "@styled-icons/remix-fill/PaintBrush"
import { Category } from "./components/Category"
import { Header } from "./components/Header"
import { Suggestion } from "./components/Suggestion"
import { Search } from "./components/Search"
import { Tag } from "./components/Tag"
import { Benefits } from "./components/Benefits"
import { Comment } from "./components/Comment"
import { AppContainer, CategoriesContainer, Hero, PopContainer, CommentsContainer, PromoContainer, PromoContent, PromoInput, PromoButton, FaqContainer, Title, DoubtsContainer } from "./style"

import mockupImage from "./assets/mockup-2.png"
import promoMockupImage from "./assets/mockup-3.png"

import { CleaningServices } from '@styled-icons/material-outlined/CleaningServices'
import { Toilet } from "styled-icons/fa-solid"
import { Lightbulb } from '@styled-icons/bootstrap/Lightbulb'
import { Swiper, SwiperSlide } from 'swiper/react';
import { About } from "./components/About"
import { Pagination } from "swiper/modules"
import { Contractor } from "./components/Contractor"
import { FaqItem } from "./components/FaqItem"
import { Footer } from "./components/Footer"


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

  const comments = [
    {
      'id': '1',
      'content': 'Fiquei impressionada com a qualidade e a segurança que a plataforma oferece. A encanadora resolveu meu problema em minutos!',
      'rating': 5,
      'avatar': mockupImage,
      'name': 'Maria Silva',
      'location': 'São Paulo'
    },
    {
      'id': '2',
      'content': 'Precisava de uma diarista para limpar minha casa e encontrei a pessoa perfeita. Super recomendo!',
      'rating': 4,
      'avatar': mockupImage,
      'name': 'Joana Souza',
      'location': 'Rio de Janeiro'
    },
    {
      'id': '3',
      'content': 'A pintora que contratei fez um trabalho incrível. Amei o resultado!',
      'rating': 5,
      'avatar': mockupImage,
      'name': 'Ana Clara',
      'location': 'Curitiba'
    }
  ]

  const faqs = [
    {
      'id': '1',
      'question': 'Como encontro a profissional certa para o meu serviço?',
      'answer': 'Na LadyRepair, você pode navegar pelas categorias de serviços e ler avaliações de outras clientes para escolher a profissional que melhor atenda às suas necessidades. Também é possível filtrar por localização, preço e disponibilidade.'
    },
    {
      'id': '2',
      'question': 'Como funciona o pagamento?',
      'answer': 'O pagamento é realizado de forma segura através da nossa plataforma. Você pode pagar online com cartão de crédito ou débito. O valor é liberado para a profissional somente após a conclusão do serviço e a sua confirmação de satisfação.'
    },
    {
      'id': '3',
      'question': 'Posso cancelar ou reagendar um serviço?',
      'answer': 'Sim, entendemos que imprevistos acontecem. Você pode cancelar ou reagendar um serviço diretamente pelo seu painel de controle, seguindo nossas políticas de cancelamento. Caso tenha dúvidas, nosso suporte está à disposição para ajudar.'
    },
    {
      'id': '4',
      'question': 'Como posso anunciar meus serviços na Lady Repair?',
      'answer': 'Se você é uma profissional qualificada e deseja oferecer seus serviços na LadyRepair, clique na opção "Anuncie seus serviços" e preencha o formulário de inscrição. Nossa equipe revisará suas informações e entrará em contato para finalizar o cadastro.'
    }
  ]

  return (
    <AppContainer>
      <Header />

      <Hero>
        <h1>Que tipo de serviço você está procurando?</h1>

        <Search />

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

      <Benefits />   

      <CommentsContainer>
        <Title>O que nossos clientes estão dizendo</Title>
        <Swiper 
          spaceBetween={10}
          slidesPerView={'auto'}
          simulateTouch={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
              >
              {comments.map(comment => (
          <SwiperSlide>
            <Comment key={comment.id} comment={comment.content} rating={comment.rating} avatar={comment.avatar} name={comment.name} location={comment.location} />
          </SwiperSlide>
        ))}
        </Swiper>
      </CommentsContainer>

      <PromoContainer>
        <PromoContent>
          <h2>Ganhe 20% OFF na primeira contratação!</h2>
          <p>Aproveite nosso desconto exclusivo e experimente a qualidade dos nossos serviços.</p>

          <PromoInput placeholder="E-mail" />

          <PromoButton>Pegar código</PromoButton>
          
          <img src={promoMockupImage} alt="Imagem de uma mulher trabalhando" />
        </PromoContent>
      </PromoContainer>

      <Contractor />

      <Benefits contractor /> 

      <FaqContainer>
        <Title>Perguntas frequentes</Title>
        {faqs.map(faq => (
          <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </FaqContainer>
      
      <DoubtsContainer>
        <h4>Ainda está com dúvidas?</h4>
        <p><a href="">Clique aqui</a> e entre em contato conosco</p>
      </DoubtsContainer>

      <Footer />
    </AppContainer>
  )
}

export default App
