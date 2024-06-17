import { SectionTitleContainer } from './styles'

export function SectionTitle({ title, subtitle } : { title: string, subtitle: string }) {
    return (
        <SectionTitleContainer>
            <span>{ subtitle }</span>
            <h2>{ title }</h2>
        </SectionTitleContainer>
    )
}