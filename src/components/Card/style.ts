import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    border-radius: 0.5rem;
    border: 1px solid #DBDDE1;
    height: 25rem;
    width: 18.625rem;
    margin-top: 4rem;
    position: relative;

    img {
        height: 12.5rem;
        width: 18.625rem;
        object-fit: cover;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
    }

    &:hover {
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    gap: 1rem;
    width: 100%;
`

export const CardTag = styled.span`
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_WHITE};
    background-color: ${({ theme }) => theme.COLORS.SUPORT_TAG};
    border-radius: 0.25rem;
    padding: 0.0625rem 0.5rem;
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
`

export const CardTitle = styled.h3`
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_900};
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const CardBookmarkActive = styled.span`
    color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    padding: 0.125rem 0.75rem;
`

export const CardBookmark = styled.span`
    color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    padding: 0.125rem 0.75rem;

    &:hover {
        color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
        cursor: pointer;
    }
`

export const CardCategory = styled.span`
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    margin-top: -0.75rem;
`

export const CardLocation = styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
    display: flex;
    align-items: center;
    gap: 0.28rem;
`

export const CardVerified = styled.span`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
    border-radius: 0.25rem;
    padding: 0.125rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 400;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN_BACKGROUND};
`

export const CardStars = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_MAIN};
`

export const CardPrice = styled.div`
    font-size: 1rem;
    font-weight: 700;

    span {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.COLORS.NEUTRAL_700};
        font-weight: 400;
        margin-left: 0.25rem;
    }
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`