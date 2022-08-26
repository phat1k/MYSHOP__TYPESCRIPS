import React, { createContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormLogin, login } from "../../services/auth";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getToken, setToken } from "../../utils/token";
import { Navigate } from "react-router-dom";


interface IFormInput {
  username: string;
  password: string | number;
}
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
  
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Label = styled.div`
  color:#333;
  flex-basis: 20%;
  font-size: 16px;
  margin-right: 15px;
`;
const InputText = styled.input`
  flex: 1;
  height: 40px;
`;
const ButtonSubmit = styled.input`
  font-weight: 700;
  width: 400px;
  display: block;
  appearance: none;
  background: violet;
  color: white;
  border: none;
  text-transform: uppercase;
  padding: 20px 20px;
  border-radius: 4px;
  letter-spacing: 10px;
`
const Error = styled.p`
  color: red;
  font-size: 14px;
`

export default function LoginCrud() {

  const [errorLoginMessage, setErrorLoginMessage] = useState<string>("")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormLogin>();
  const onSubmit: SubmitHandler<FormLogin> = async(data) => {
    console.log('data', data)
    try {
      const token = await login(data)
      console.log(`token`, token)
      if(token.error){
        return setErrorLoginMessage(token.message)
      }
      if(token.data){
        setToken(token.data)
      }
    } catch (error) {
    }
  };
  const token = getToken()
   const ContextAuthh = createContext({
    token
   })
  
  if(token) return <Navigate to="/"/>
  return (
    <Container>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Item>
        <Label>Email</Label>
        <InputText
          {...register("username", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
        /> 
      </Item>
        {errors?.username?.type === "required" && <Error>This field is required</Error>}
        {errors?.username?.type === "pattern" && (<Error>Vui lòng nhập đúng định dạng</Error>)}

      <Item>
        <Label>Password</Label>
        <InputText type="password"
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
        />
      </Item>
      {errors?.password?.type === "required" && <Error>This field is required</Error>}
      {errors?.password?.type === "minLength" && (<Error>First name cannot exceed 6 characters</Error>)}
      {errors?.password?.type === "maxLength" && (<Error>First name cannot exceed 20 characters</Error>)} <br />
      <ButtonSubmit type="submit" />
    </form>
    </Container>
  );
}
