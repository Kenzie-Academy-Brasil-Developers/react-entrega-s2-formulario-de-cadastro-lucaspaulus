import styled from "styled-components";


export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 350px;
    height: auto;
 
    margin: 0 25px;
    background-color: white;
    box-shadow: -4px -4px 10px 0px #00000045, 
                 4px 4px 10px 0px #00000045;

   
   
    button{
        width: 70%;
        height: 40px;
        border: 2px solid transparent;
        border-radius: 50px;
        background-color: black;
        color: white;
        font-family: "Roboto", sans-serif;
        font-size: 28px;
        cursor: pointer;

        &:hover{
            box-shadow: 0px 0px 0px 2px white inset;
        }


    }


`

export const Input = styled.input`
        width: 80%;
        max-width: 320px;
        height: 35px;
        border-radius: 50px;
        border: 1.5px solid transparent;
        padding: 0 0 0 10px;
        font-family: "Roboto", sans-serif;

        background-color: black;
        color: white;
        margin: 10px 0;

        &::placeholder{
            color: #666666;
        }

        &:focus{
            outline: none;
            /* box-shadow: 0px 0px 0px 2px white inset; */
            box-shadow: ${(props)=> props.error? "0px 0px 0px 2px red inset" : "0px 0px 0px 2px green inset" };
             
        }
       


`
export const ContainerTitle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: black;
        
    padding: 0;
    h1{
        color: white;
        font-size: 32px;
        font-family: "Roboto", sans-serif;
    }


`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 25px 0;

    p{
            color: black;
            margin-top: -5px;
            margin-bottom: 10px;
            font-size: 16px;
        }

`

export const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-top: 2px solid black;
 
    margin-top: 15px;
`