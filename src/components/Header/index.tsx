import logoImg from '../../assets/logo.svg'


export function Header(){
    return (
        <header>
            <img src={logoImg} alt="" />
            <div className="menu-hamburguer">-----</div>
        </header>
    )
}