
import styled from "styled-components";

export const StyledFavorits = styled.div`
    overflow: auto;
    padding: 32px;
    section{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
    div{
        display: grid;
        overflow: auto;
        grid-template-columns: repeat(auto-fill,minmax(130px,1fr));
        grid-auto-flow: column;
        grid-auto-columns: minmax(160px,1fr);
    }
    a{
        display: flex;
        flex-direction: column;
        padding-top: 16px;
        justify-content: center;
    }
    img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
    span {
        text-align: center;
        padding-top: 8px;
        padding-right: 24px;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
    }
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }
`;
