import styled from "styled-components";
import logoImg from "./assets/logo_contorno.svg";

export const AppContainer = styled.div`
    background-color: ${({ theme }) => theme.COLORS.SUPORT_BACKGROUND_100};
`
export const Hero = styled.div`
    h1 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 3rem;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    }

    background-color: ${({ theme }) => theme.COLORS.SUPORT_BACKGROUND_200};
    padding: 3rem 1rem;
    margin: 1rem;
`
export const CategoriesContainer = styled.div`
    padding: 1rem;
    .swiper-slide {
        width: 6.25rem;
    }
`
export const PopContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;

    strong {
        font-family: 'Inter', sans-serif;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.COLORS.NEUTRAL};
        font-weight: 700;
    }
    
`
export const CommentsContainer = styled.div`
    margin-top: 3.5rem;
    padding: 0 1rem;

    .swiper-slide{
        margin-top: 1.5rem;
        height: 26.125rem;
    }
`
export const PromoContainer = styled.div`
    margin-top: 3.5rem;
    background: linear-gradient(56.9deg, #C71D07 9.86%, #FFC8A8 126.67%);
    font-family: 'Roboto', sans-serif;
`
export const PromoContent = styled.section`
    background: url(${logoImg});
    background-repeat: repeat;
    background-position: 30px 34px;
    display: flex;
    flex-direction: column;
    padding: 2.875rem 1rem;
    width: 100%;
    text-align: left;

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
        margin-bottom: 1rem;
        /* margin-left: -1.125rem; */
    }
    p {
        font-size: 1.125rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
        margin-bottom: 2rem;
        /* margin-left: -1.125rem; */
    }
    img {
        width: 100%;
        height: 6.8125rem;
        object-fit: cover;
        border-radius: 8px;
        /* margin-left: -1.125rem; */
    }
`
export const PromoInput = styled.input`
    width: 100%;
    border-radius: 8px;
    padding: 0.625rem 1rem;
    border: none;
    margin-bottom: 1rem;
    /* margin-left: -1.125rem; */

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
        font-size: 1rem;
        font-weight: 400;
    }
    &:focus {
        outline: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    }
`
export const PromoButton = styled.button`
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL_WHITE};
    color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    font-size: 1.125rem;
    font-weight: 700;
    padding: 0.625rem;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin-bottom: 2rem;
    /* margin-left: -1.125rem; */

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
        color: ${({ theme }) => theme.COLORS.NEUTRAL_WHITE};
    }
`
export const FaqContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1rem;
    margin-top: 3.5rem;
`
export const Title = styled.h2`
    font-weight: 700;
    text-align: center;
    font-size: 1.5rem;
    padding: 0 1.8125rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
`

export const DoubtsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    margin-top: 2.5rem;
    margin-bottom: 3.5rem;

    h4 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.125rem;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    }
    p {
        font-weight: 400;
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};

        a {
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
            &:hover {
                border-bottom: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
                font-weight: 400;
            }
        }
    }
`