import { SectionTitle } from '../SectionTitle';
import { ContractorContainer, ContractorSearchContainer, StepContainer } from './style';
import { SignupForm } from '../SignupForm';

export function Contractor() {
    return (
        <ContractorContainer>
            <SectionTitle title="Quero anunciar meus serviços" subtitle="Como funciona?" />
                
                <ContractorSearchContainer>
                    <h2>Anuncie seus serviços e aumente sua cartela de clientes!</h2>
                    <p>Cadastre-se agora e expanda suas oportunidades de trabalho.</p>

                    <SignupForm />
                </ContractorSearchContainer>           

                <ul>
                    <StepContainer>
                        <strong>1.</strong>
                        <p>Cadastre seus serviços na plataforma</p>
                    </StepContainer>
                    <StepContainer>
                        <strong>2.</strong>
                        <p>Clientes entrarão em contato com você</p>
                    </StepContainer>
                    <StepContainer>
                        <strong>3.</strong>
                        <p>Agende e realize o serviço de forma simples e segura</p>
                    </StepContainer>
                    <StepContainer>
                        <strong>4.</strong>
                        <p>Escolha como deseja receber o pagamento</p>
                    </StepContainer>
                </ul>
        </ContractorContainer> 
    )
}