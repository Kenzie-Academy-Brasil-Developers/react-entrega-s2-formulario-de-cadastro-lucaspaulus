import React from "react";
import * as S from "./style.js"

import * as yup from "yup"
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom";
import {regexOnlyString, regexPassWord} from "../../utils/"

function Form() {
    const goTo = useHistory()
    
    const schema = yup.object().shape({
        Name: yup.string().required("Nome é obrigatório").matches(regexOnlyString, "Nome Inválido"),
        Email: yup.string().required("Email é obrigatório").email("Email"),
        Password: yup.string().required("Senha é obrigatório").min(8, "Mínimo de 8 caracteres").matches(regexPassWord, "Senha Fraca"),
        ConfirmPassword: yup.string().required("Confirmar Senha é obrigatório").oneOf([yup.ref("Password"), null], "A confirmação da senha não confere")

    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmitFunction(data){
        goTo.push(`/home/${data.Name}`)
    }

    return (
        <S.Form onSubmit={handleSubmit(onSubmitFunction)}>
            <S.ContainerTitle>
                <h1>Registro</h1>
            </S.ContainerTitle>

            <S.ContainerInput>
                <S.Input error={errors.Name}  placeholder="Nome" {...register("Name")}/>
                <p>{errors.Name?.message}</p>

                <S.Input error={errors.Email} placeholder="E-mail" {...register("Email")}/>
                <p>{errors.Email?.message}</p>

                <S.Input error={errors.Password} placeholder="Senha" {...register("Password")}/>
                <p>{errors.Password?.message}</p>

                <S.Input error={errors.ConfirmPassword} placeholder="Confirmar Senha" {...register("ConfirmPassword")}/>
                <p>{errors.ConfirmPassword?.message}</p>
            </S.ContainerInput>
            
            <S.ContainerBtn>
                <button>Cadastrar</button>
            </S.ContainerBtn>
           
        </S.Form>
    );
}

export default Form;
