import styled from 'styled-components';

export const SuggestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    margin: 0 auto;

    span#suggest{
        font-size: 1.125rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_600};
        text-transform: uppercase;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    }
    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        width: 16.5rem;
    }
`