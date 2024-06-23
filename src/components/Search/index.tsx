import { SearchContainer, SearchInput, LocalInput, SearchButton } from './style';

export function Search() {
    return (
        <SearchContainer>
            <SearchInput placeholder="Busque por um serviço" />
            <LocalInput type="text" placeholder="SP" />
            <SearchButton>Buscar</SearchButton>
        </SearchContainer>
    )
}