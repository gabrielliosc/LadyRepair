import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
`
export const SearchInput = styled.input`
    padding: 0.75rem;
    border: 1px solid #DBDDE1;
    border-radius: 8px;
    grid-area: 1 / 1 / 2 / 3;

    &:focus, &:hover {
        border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    }
`
export const SearchButton = styled.button`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    color: ${({ theme }) => theme.COLORS.NEUTRAL_100};
    border: none;
    width: 9.68rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    justify-self: end;
    grid-area: 2 / 2 / 3 / 3;

    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
`
export const LocalInput = styled.input`
    padding: 0.75rem;
    border: 1px solid #DBDDE1;
    border-radius: 8px;
    grid-area: 2 / 1 / 3 / 2; 
    width: 9.68rem;

    &:focus, &:hover {
        border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    }
`