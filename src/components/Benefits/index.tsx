import { BenefitsContainer, BenefitItem, IconStyleWrapper } from "./style";
import { SectionTitle } from "../SectionTitle";
import { Clock } from "@styled-icons/evil/Clock";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { LockClosed } from "@styled-icons/ionicons-outline/LockClosed";

export function Benefits({contractor = false}) {
return (
    <BenefitsContainer>
      <SectionTitle title="Porque nos escolher?" subtitle="Benefícios"/>
      <ul>
        <BenefitItem>
          <IconStyleWrapper>
            <Check size={24}/>
          </IconStyleWrapper>
          <h3>Qualidade</h3>
          {contractor ? 
          <p>Trabalhar conosco significa fazer parte de uma equipe dedicada à excelência. Você terá acesso a recursos e treinamentos contínuos para aprimorar suas habilidades e oferecer o melhor serviço.</p>
          :
          <p>Nossos serviços de conserto são realizados por profissionais altamente qualificadas, garantindo que cada tarefa seja executada com excelência e atenção aos detalhes.</p>}
        </BenefitItem>
        <BenefitItem>
          <IconStyleWrapper>
            <Clock size={24}/>
          </IconStyleWrapper>
          <h3>Rapidez</h3>
          {contractor ? 
          <p>Nossa plataforma otimiza o agendamento e a logística dos serviços, permitindo que você atenda mais clientes em menos tempo, aumentando sua eficiência e potencial de ganhos.</p>
          :
          <p>Entendemos a importância do seu tempo. Por isso, nossas prestadoras trabalham de forma eficiente para resolver os problemas da sua casa rapidamente, sem comprometer a qualidade.</p>}
          
        </BenefitItem>
        <BenefitItem>
          <IconStyleWrapper>
            <LockClosed size={24}/>
          </IconStyleWrapper>
          <h3>Segurança</h3>
          {contractor ? 
          <p>Valorizamos seu bem-estar. Oferecemos um ambiente de trabalho seguro, com suporte contínuo, para que você possa se concentrar em entregar um serviços de alta qualidade sem pensar em preocupações.</p>
          :
          <p>Sua segurança é nossa prioridade. Todas as nossas prestadoras passam por rigorosos processos de seleção, assegurando que você possa confiar plenamente no serviço prestado.</p>}
          
        </BenefitItem>
      </ul>
    </BenefitsContainer>
  )
}