import { SectionTitle } from "../SectionTitle";
import { Search } from "../Search";
import { AboutContainer, StepContainer, AboutSearchContainer } from "./style";

export function About(){
    return (
        <AboutContainer>
            <SectionTitle title="Quero contratar um serviço" subtitle="Como funciona?" />
            
            <AboutSearchContainer>
                <h2>Encontre profissionais capacitados e solucione seus problemas.</h2>
                <p>Não perca tempo e agende agora com as melhores prestadoras de serviços.</p>

                <Search />
            </AboutSearchContainer>           

            <ul>
                <StepContainer>
                    <strong>1.</strong>
                    <p>Encontre o serviço que você precisa</p>
                </StepContainer>
                <StepContainer>
                    <strong>2.</strong>
                    <p>Entre em contato com um profissional</p>
                </StepContainer>
                <StepContainer>
                    <strong>3.</strong>
                    <p>Agende e realize o serviço de forma simples e segura</p>
                </StepContainer>
                <StepContainer>
                    <strong>4.</strong>
                    <p>Escolha como deseja pagar e realize o pagamento</p>
                </StepContainer>
            </ul>
            
        </AboutContainer>
    )
}