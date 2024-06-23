import styled from 'styled-components';

export const CommentsContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    padding: 2rem 1rem;
    background-color: ${({ theme }) => theme.COLORS.SUPORT_BACKGROUND_200};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    height: 26.125rem;

    span {
        text-align: center;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
`
export const CommentAuthor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    img {
        width: 4.875rem;
        height: 4.875rem;
        border-radius: 50%;
    }
`
export const CommentAuthorInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;

    span {
        font-size: 1.125rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    }
    p {
        font-size: 0.875rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    }
`

export const CommentStars = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
`