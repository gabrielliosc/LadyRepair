import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 1rem;
    background-color: ${props => props.theme.NEUTRAL_WHITE};
    color: ${props => props.theme.NEUTRAL_700};
`
