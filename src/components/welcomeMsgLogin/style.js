import styled from "styled-components";
export const welcomeSectionContainer = styled.section`
    background-image: url("https://i.pinimg.com/originals/43/fc/32/43fc328be25a95be94e2f6c6f5246dc7.gif");
    height: 100vh;
    width: 100vw;
    background-size: 100% 100%;
    background-position: bottom;
    background-repeat: no-repeat;

`
export const welcomeContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #000000;
    color: white;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 1px 11px 0px black;


`

export const headerContainer = styled.div`
    
    h1{
        margin: 5px;
        font-size: 28px;
    }

`

export const bodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{  
        margin: 0;
        font-size: 32px;
    }

    a{
        padding: 10px;
        width: 150px;
        margin-top: 30px;
        background-color: #9c27b0;
        color: white;
        text-decoration: none;
        border-radius: 25px;
        text-align: center;
        font-size: 21px;
    }

`