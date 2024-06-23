import { SignupFormContainer, SignupInput, SignupButton } from './style'


export function SignupForm() {
    return (
        <SignupFormContainer>
            <SignupInput placeholder="Nome" type='text'/>
            <SignupInput placeholder="E-mail" type='email' />
            <SignupInput placeholder="Telefone"/>
            <SignupButton>Criar conta</SignupButton>
        </SignupFormContainer>
    )
}