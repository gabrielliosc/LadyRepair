import styled from 'styled-components';

export const SignupFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const SignupInput = styled.input`
    padding: 0.875rem 1rem;
    border-radius: 8px;
    border: none;

    &:focus, &:hover {
        outline: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    }
`
export const SignupButton = styled.button`
    padding: 0.875rem 1rem;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    color: ${({ theme }) => theme.COLORS.NEUTRAL_WHITE};
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
    }
`