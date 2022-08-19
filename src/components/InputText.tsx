import React from 'react'
import { Button, Checkbox, Form, Input } from "antd";
import styled from 'styled-components';
import { InputProps } from 'antd/lib/input';

export interface InputText extends InputProps{
  placeholder: string,
  onChange: (e) => void,
  error: string
  type: string
}
const ErrorMessage = styled.p`
  color:red;
  white-space: nowrap;
`

export const InputText: React.FC<InputText>  = ({
  placeholder,
  onChange,
  error,
  type,
  ...props
}) => {
  return (
    <>
      <Input
        {...props}
        id="loginEmail"
          type={ type}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <ErrorMessage> {error}</ErrorMessage>}
    </>
  );
};
