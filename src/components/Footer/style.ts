import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 0 1rem;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4rem;

    hr {
        width: 100%;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_200};
        margin: 0.5rem 0;
    }
`

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.875rem;
    margin-bottom: 1rem;

    h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    }

    a {
        width: fit-content;
    }

    a:hover {
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
        font-weight: 600;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    }
`

export const CopyRight = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
`