import styled from 'styled-components';

export const CategoryContainer = styled.div`
    svg {
        color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    }
    div {
        border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_200};
        border-radius: 0.5rem;
        height: 6rem;
        width: 6rem;
        padding: 1.5rem;
        text-align: center;

        &:hover {
            border-color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
            cursor: pointer;
        }
    }
    width: fit-content;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`