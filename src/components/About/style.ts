import styled from 'styled-components';

export const AboutContainer = styled.section`
    padding: 0 1rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
`

export const StepContainer = styled.li`
    border: 3px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    border-radius: 0.5rem;
    padding: 2rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
        font-weight: 700;
    }

    p {
        width: 13rem;
        font-size: 1.125rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    }
`