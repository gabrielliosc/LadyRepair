import { CardContainer, CardTitle, CardContent, CardLocation, CardVerified, CardCategory, CardStars, CardPrice, CardFooter, CardTag } from "./style"
// import { EmptyStar, Star } from "../Icons"
import { Bookmark } from '@styled-icons/bootstrap/Bookmark'
import { Location } from '@styled-icons/fluentui-system-regular/Location'
import { Star } from'@styled-icons/bootstrap/Star'
import { StarFill } from'@styled-icons/bootstrap/StarFill'

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
    const stars = [
        contractor.rating >= 1? <StarFill size={14}/>: <Star size={14} />,
        contractor.rating >= 2? <StarFill size={14}/>: <Star size={14} />,
        contractor.rating >= 3? <StarFill size={14}/>: <Star size={14} />,
        contractor.rating >= 4? <StarFill size={14}/>: <Star size={14} />,
        contractor.rating == 5? <StarFill size={14}/>: <Star size={14} />]

    return (
        <CardContainer>
            <CardTag>Destaque</CardTag>
            <img src={contractor.image} alt="" />
            <CardContent>
                <CardTitle>
                    <span>{contractor.name}</span>
                    <span><Bookmark size={20}/></span>
                </CardTitle>
                
                <CardCategory>
                    {contractor.category}
                </CardCategory>

                <CardLocation>
                    <Location size={12}/>
                    {contractor.location}
                </CardLocation>

                {contractor.verified && 
                <CardVerified>Perfil verificado</CardVerified>}

                <CardFooter>
                    <CardStars>{stars}</CardStars>
                    <CardPrice>R${contractor.price}<span>/hora</span></CardPrice>
                </CardFooter>
            </CardContent>
        </CardContainer>
    )
}