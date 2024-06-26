import React from 'react';
import { ButtonContainer } from './style';
import { ButtonVariants } from '../../../@types/button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: ButtonVariants;
}

export function Button({ children, variant, ...rest }: ButtonProps) {
    return (
        <ButtonContainer variant={variant} {...rest}>
            {children}
        </ButtonContainer>
    )
}