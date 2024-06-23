import styled from 'styled-components';

export const ContractorContainer = styled.section`
    font-family: 'Roboto', sans-serif;
    padding: 0 1rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`
export const StepContainer = styled.li`
    border: 3px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    border-radius: 0.5rem;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    strong {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
        font-weight: 700;
    }

    p {
        font-size: 1.125rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    }
`
export const ContractorSearchContainer = styled.div`
    h2 {
        text-align: left;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    }

    p {
        text-align: left;
        font-size: 1.125rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
        margin-bottom: 5rem;
    }

    background-color: ${({ theme }) => theme.COLORS.SUPORT_BACKGROUND_200};
    padding: 2rem 1rem;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
`