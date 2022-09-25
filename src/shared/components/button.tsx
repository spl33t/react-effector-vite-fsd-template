import styled from "styled-components"
import { FormEvent } from "react";

interface ButtonProps extends HTMLButtonElement {}

export const Button = (props: ButtonProps) => {

  const onChangeHandler = (e: FormEvent<HTMLButtonElement>) => {
    alert('clicked btn')
  }

  return (
    <button onChange={onChangeHandler}></button>
  )
}