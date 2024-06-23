import { CommentsContainer, CommentStars, CommentAuthor, CommentAuthorInfo } from "./style";
import { Star } from'@styled-icons/bootstrap/Star'
import { StarFill } from'@styled-icons/bootstrap/StarFill'

interface CommentsProps {
    comment: string;
    rating: number;
    avatar: string;
    name: string;
    location: string;
}

export function Comment({ comment, rating, avatar, name, location}: CommentsProps){
    const stars = [
        rating >= 1? <StarFill size={24}/>: <Star size={24} />,
        rating >= 2? <StarFill size={24}/>: <Star size={24} />,
        rating >= 3? <StarFill size={24}/>: <Star size={24} />,
        rating >= 4? <StarFill size={24}/>: <Star size={24} />,
        rating == 5? <StarFill size={24}/>: <Star size={24} />]
    return (
    <CommentsContainer>
        <span>{`"${comment}"`}</span>

        <CommentAuthor>
            <CommentStars>{stars}</CommentStars>
            <img src={avatar} />

            <CommentAuthorInfo>
                <span>{name}</span>
                <p>{location}</p>
            </CommentAuthorInfo>

        </CommentAuthor>
    </CommentsContainer>
)}