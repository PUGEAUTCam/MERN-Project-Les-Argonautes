import React from 'react';
import { ContainerWCS, FooterContainer, FooterText } from './style';

const Footer = () => {

    return (
        <FooterContainer>
            <p>Réalisé par Camille PUGEAUT</p>
            <FooterText>D'après une maquette de Jason en Anthestérion de l'an 515 avant JC</FooterText>
            <ContainerWCS>
                <p>Pour le Tech Challenge de la</p>
                <img src="./logo_wild_code_school.png" alt="Logo de la Wild Code School" style={{ width: 143, marginLeft: 19 }} />
            </ContainerWCS>
        </FooterContainer>
    );
};

export default Footer;