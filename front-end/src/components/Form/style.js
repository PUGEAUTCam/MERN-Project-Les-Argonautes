import styled from "styled-components";
import colors from "../StyleDefinition"

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InputText = styled.input`
    border: 1px solid ${colors.wcs};
    border-radius: 21px;
    width: 260px;
    height: 33px;
    text-align: center;
`
export const InputNumber = styled.input`
    border: 1px solid ${colors.wcs};
    border-radius: 21px;
    height: 33px;
    width: 33px;
    text-align: center;   
`
export const LabelText = styled.label`
    margin: 5px 0px;
    font-weight: bold;
    color: ${colors.grayTitle};
`
export const Button = styled.button`
    margin-top: 20px;
    border-radius: 17px;
    width: 168px;
    height: 36px;
    background: rgb(247, 107, 107);
    border: none;
    transition: transform 100ms;
        :hover {
            transform: scale(1.01);
            background-color: ${colors.grayTitle};
            color: white;
            box-shadow: 0px 3px 15px rgb(224 221 221 / 93%);
        }
`
export const DivBubble = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`