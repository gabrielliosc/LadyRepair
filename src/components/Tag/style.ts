import styled from "styled-components";

export const CategoryTag = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_200};
    border-radius: 40px;
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding: 0.125rem 1rem;
`