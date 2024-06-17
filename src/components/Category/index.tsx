import { ReactNode } from 'react';
import { CategoryContainer } from './style';

interface CategoryProps {
    src: ReactNode,
    title: string
}

export function Category({ src, title }: CategoryProps) {
    return (
        <CategoryContainer>
            <div>{src}</div>
            <p>{title}</p>
        </CategoryContainer>
    )
}