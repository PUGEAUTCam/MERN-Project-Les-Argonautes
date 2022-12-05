import React from 'react';
import colors from "../StyleDefinition"
import { HeaderContainer } from './style';
import Lottie from "lottie-react";
import Boat from "../lottieAnimations/boat.json";

const Header = () => {
    return (
        <HeaderContainer style={{ background: `${colors.grayLight}` }}>
            <Lottie animationData={Boat} style={{ width: '12%' }} />
            <h1>Les Argonautes</h1>
        </HeaderContainer>
    );
};

export default Header;