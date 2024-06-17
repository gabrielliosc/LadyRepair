import { Card } from "../Card"

import mockupImg from '../../assets/mockup-1.png'
import { SuggestionContainer } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from "../SectionTitle";



export function Suggestion() {

    const contractors = [
        { id: '1', image: mockupImg, name: 'Maria da Silva Joaquina', price: 100, location: 'Vila Mariana - São Paulo / SP', rating: 4, verified: true, category: 'Pintora' }, 
        { id: '2', image: 'https://www.google.com', name: 'Maria da Silva Joaquina', price: 100, location: 'Flamengo - Rio de Janeiro / RJ', rating: 3, verified: false, category: 'Eletricista' }, 
        { id: '3', image: 'https://www.google.com', name: 'Maria da Silva Joaquina', price: 100, location: 'Vila Mariana - São Paulo / SP', rating: 2, verified: false, category: 'Encanadora' }, 
        { id: '4', image: 'https://www.google.com', name: 'Maria da Silva Joaquina', price: 100, location: 'Vila Mariana - São Paulo / SP', rating: 1, verified: true, category: 'Mêcanica' }, 
        { id: '5', image: 'https://www.google.com', name: 'Maria da Silva Joaquina', price: 100, location: 'Flamengo - Rio de Janeiro / RJ', rating: 4, verified: true, category: 'Pintora' }
    ]

    return (
        <SuggestionContainer>
            <SectionTitle title="Profissionais mais recomendados" subtitle="Recomendados" />
            <Swiper 
                spaceBetween={50}
                slidesPerView={'auto'}
                simulateTouch={true}
            >
                {
                contractors.map(contractor => (
                    <SwiperSlide key={contractor.id} ><Card {...contractor} /></SwiperSlide>))
                }
            </Swiper>
        </SuggestionContainer>
    )
}