import styled from "styled-components";

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
export const SearchContainer = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
`
export const SearchInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #DBDDE1;
    border-radius: 0.5rem;
    grid-area: 1 / 1 / 2 / 3;
`
// export const Icon = styled(Zap)`
//     width: 1.5rem;
// `
export const LocalInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #DBDDE1;
    border-radius: 0.5rem;
    grid-area: 2 / 1 / 3 / 2; 
    width: 9.68rem;

    ::before {
        content: url('https://www.google.com');
    }
`
export const SearchButton = styled.button`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
    border: none;
    width: 9.68rem;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    grid-area: 2 / 2 / 3 / 3;
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
