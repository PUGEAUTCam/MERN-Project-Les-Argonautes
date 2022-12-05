import styled from "styled-components"
import colors from "../StyleDefinition"

export const ContainerWCS = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
`
export const FooterContainer = styled.footer`
    background: ${colors.grayLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
    padding: 0px 10px;
    padding-bottom: 20px;
    margin-top: 57px;
`
export const FooterText = styled.p`
    @media screen and (max-width: 768px) {
        text-align: center;
`