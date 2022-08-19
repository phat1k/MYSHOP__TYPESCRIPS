import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from "antd";
import { InputText } from '../../components/InputText';
import { Navigate } from 'react-router-dom';
// import "./style.scss"
import { useDispatch } from 'react-redux';
import { FomrLogin } from '../../utils/interface';
import { fetchLogin } from '../../store/authReducer';
import { setToken, setUser } from '../../utils/token';
import { login } from '../../services/auth';
import { getInfo } from '../../services/user';
import styled from 'styled-components';

const ErrorMessage = styled.div`
    color:red
`

export const Login = () => {
  const dispatch = useDispatch()
  const regexpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const [formLogin, SetFormLogin] = useState<FomrLogin>({
    username: "",
    password: ""

  });
  const [errorLogin, setErrorLogin] = useState<any>({})
  const [errorLoginMessage, setErrorLoginMessage] = useState<any>("")

  const onSubmitLogin = async(ev) => {
    ev.preventDefault()
    console.log(`formlogin`, formLogin)
    const errorObj:any = {};
    if (!formLogin?.username?.trim()) {
      errorObj.username = "nhập username vào"
    }else if(!regexpEmail.test(formLogin.username)){
      errorObj.username = "Email không đúng định dạng"
    }
    if (!formLogin?.password) {
      errorObj.password = "nhập password vào "
    }
    console.log(`errorObj`, errorObj)
    setErrorLogin(errorObj)
    //  if (Object.keys(errorObj).length === 0) {
    //    console.log("thanh coong");
    //    localStorage.setItem("token", "accessToken");
    //  }
    if(Object.keys(errorObj).length === 0){
      try{
        // const token = await authServicee.login(payload.data)
        const token = await login(formLogin)
        console.log('errorLoginMessage', errorLoginMessage)
        console.log(`token`, token)
        if(token.error){
          return setErrorLoginMessage(token.message)
        }
        if(token.data){
            setToken(token.data)
            const user = await getInfo()
            setUser(user.data)
            dispatch({
                type:"auth/setUser",
                payload: user.data
            })


            // payload.success(user.data)
        
          }
        
    }catch(error){
        setErrorLoginMessage(error.message)
        console.log(error)
    }
    }
  }
  const token = localStorage.getItem("token")
  if (token) return <Navigate to="/product"/>
    return (
       <>
        {
          errorLoginMessage && <ErrorMessage>{errorLoginMessage}</ErrorMessage>
        }
      <form onSubmit={(ev) => onSubmitLogin(ev)}>
        {/* <Input /> */}
        <InputText
          type="text"
          placeholder="Email Address *"
          onChange={(ev) => (formLogin.username = ev.target.value)}
          error={errorLogin.username}
        />
        <InputText
          type="password"
          placeholder="Password *"
          onChange={(ev) => (formLogin.password = ev.target.value)}
          error={errorLogin.password}
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
      </>
    );
}
export default Login