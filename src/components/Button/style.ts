import styled from 'styled-components';
import { ButtonContainerProps } from '../../../@types/button';

const buttonVariants= {
    primary: {
        'background': 'PRIMARY_MAIN',
        'color': 'NEUTRAL_WHITE',
    },
    secondary: {
        'background': 'NEUTRAL_WHITE',
        'color': 'PRIMARY_MAIN'
    },
} as const

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${(props) => {
        const colors = buttonVariants[props.variant]["background"]
        return props.theme.COLORS[colors];
    }};
    color: ${(props) => {
        const colors = buttonVariants[props.variant]["color"]
        return props.theme.COLORS[colors];
    }};
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    min-width: 9.68rem;
    padding: 0.75rem 1.5rem;

    &:hover {
        filter: brightness(0.9);
    }
`