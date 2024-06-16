import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #313338;
    border-radius: 0.5rem;
    border: 1px solid #DBDDE1;
    height: 25rem;
    width: 16.5rem;
    
    img {
        height: 12.5rem;
        width: 16.5rem;
        object-fit: cover;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
    }
`;

export const CardTitle = styled.h3`
    font-size: 1rem;
    color: #313338;
    display: flex;
    justify-content: space-between;
    align-items: center;
`