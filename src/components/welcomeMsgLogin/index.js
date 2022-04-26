import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style.js"

function WelcomeMsgLogin({param}){
    return(
        <S.welcomeSectionContainer>
            <S.welcomeContainer>
                <S.headerContainer>
                    <h1>Ola {param.nome.toUpperCase()}</h1>
                </S.headerContainer>
            
                <S.bodyContainer>
                    <p>Seja bem-vindo!</p>
                    <Link to={"/"}>LogOut</Link>
                    
                </S.bodyContainer>
            </S.welcomeContainer>
        </S.welcomeSectionContainer>
        
       

    )
}

export default WelcomeMsgLogin