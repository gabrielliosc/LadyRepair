import logoImg from '../../assets/logo_completa.svg'
import { Menu } from '@styled-icons/feather/Menu'
import { Container } from './style'



export function Header(){
    
    return (
        <Container>
            <img src={logoImg} alt="" />
            <Menu size="30" />
        </Container>
    )
}