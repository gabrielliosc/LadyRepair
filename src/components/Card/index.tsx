import { CardContainer, CardTitle } from "./style"

interface CardProps {
    id: string,
    image: string,
    name: string,
    price: number,
    location: string,
    rating: number,
    verified: boolean,
    category: string
}

export function Card(contractor: CardProps) {
    // const stars = [
    //     contractor.rating >= 1? <Star/>: <EmptyStar />,
    //     contractor.rating >= 2? <Star/>: <EmptyStar />,
    //     contractor.rating >= 3? <Star/>: <EmptyStar />,
    //     contractor.rating >= 4? <Star/>: <EmptyStar />,
    //     contractor.rating == 5? <Star/>: <EmptyStar />]
    return (
        <CardContainer>
            <img src={contractor.image} alt="" />

            <CardTitle>
                <span>{contractor.name}</span>
                <span>icone</span>
            </CardTitle>
            
            <span>{contractor.category}</span>
            <span>{contractor.location}</span>
            {contractor.verified && <span>Perfil verificado</span>}
            <div>
                {/* <span>{stars}</span> */}
                <span>{contractor.price}</span>
            </div>
        </CardContainer>
    )
}