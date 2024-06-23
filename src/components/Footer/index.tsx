import logoFooter from '../../assets/logo_horizontal.svg';
import { ColumnContainer, CopyRight, FooterContainer } from './style';

export function Footer() {
    return (
        <FooterContainer>
            <hr />
            <img src={logoFooter} alt="" />
            <p>A plataforma exclusiva que conecta mulheres a prestadoras de serviços especializadas em consertos domésticos. Qualidade, rapidez e segurança em um só lugar!</p>
            <hr />
            <ColumnContainer>
                <h3>Primeira Coluna</h3>
                <a href=''>Primeiro link</a>
                <a href=''>Segundo link</a>
                <a href=''>Terceiro link</a>
                <a href=''>Quarto link</a>
                <a href=''>Quinto link</a>
            </ColumnContainer>

            <ColumnContainer>
                <h3>Segunda Coluna</h3>
                <a href=''>Primeiro link</a>
                <a href=''>Segundo link</a>
                <a href=''>Terceiro link</a>
                <a href=''>Quarto link</a>
                <a href=''>Quinto link</a>
            </ColumnContainer>

            <ColumnContainer>
                <h3>Terceira Coluna</h3>
                <a href=''>Primeiro link</a>
                <a href=''>Segundo link</a>
                <a href=''>Terceiro link</a>
                <a href=''>Quarto link</a>
                <a href=''>Quinto link</a>
            </ColumnContainer>

            <hr />

            <CopyRight>&copy; 2024 Lady Repair. Todos os direitos reservados.</CopyRight>
        </FooterContainer>
    )
}