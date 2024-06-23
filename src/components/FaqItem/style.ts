import styled from 'styled-components';

export const FaqItemContainer = styled.li`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    padding: 1.5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_200};
    border-radius: 8px;
`
export const FaqQuestion = styled.h3`
    font-size: 1.125rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_700};

    span {
        color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
        max-width: 16.625rem;
    }
    &:hover {
        cursor: pointer;
    }
    .active {
        color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    }
`
export const FaqAnswer = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    line-height: 1.5rem;

    hr {
        margin: 1rem 0;
        margin-bottom: 1.5rem;
        border: none;
        border-top: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL_200};
    }
`