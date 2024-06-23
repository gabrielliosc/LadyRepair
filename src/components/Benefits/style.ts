import styled from 'styled-components';

export const BenefitsContainer = styled.section`
    font-family: 'Roboto', sans-serif;
    padding: 0 1rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    li:first-child {
        margin-top: 2.5rem;
    }
`
export const IconStyleWrapper = styled.div`
    color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_200};
    border-radius: 8px;
    margin-bottom: 1.5rem;
`
export const BenefitItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    h3 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
        font-weight: 700;
    }
    p {
        text-align: center;
        font-size: 1.125rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    }
`