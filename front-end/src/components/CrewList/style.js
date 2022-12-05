import styled from "styled-components";
import colors from "../StyleDefinition"

export const ContainerCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const CardMember = styled.div`
    max-width: 370px;
    width: 100%;
    border: 1px solid ${colors.wcs};
    border-radius: 20px; 
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 3px 15px rgb(224 221 221 / 93%);
    transition: transform 200ms;
    margin-bottom: 21px;
        :hover {
            transform: scale(1.01);
        }
        @media screen and (max-width: 768px) {
            margin: 20px 12px;
        }
`
export const DivBubble = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const SpanBubble = styled.span`
    padding: 9px 13px;
    border-radius: 20px;
    margin-left: 4px;
    border: 2px solid rgb(183, 155, 104);
`
export const TitleCrew = styled.h2`
    background: ${colors.grayLight};
    padding: 33px 0px;
    border-radius: 20px;
    margin: 46px 0px;
`