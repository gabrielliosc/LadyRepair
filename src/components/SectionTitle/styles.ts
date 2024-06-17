import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
    span{
        font-size: 1.125rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_600};
        text-transform: uppercase;
    }
    h2{
        margin-top: 0.5rem;
        font-size: 2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    }
`