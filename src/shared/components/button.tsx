import { FormEvent } from "react"

type ButtonProps = HTMLButtonElement

export const Button = (props: ButtonProps) => {
  const onChangeHandler = (e: FormEvent<HTMLButtonElement>) => {
    alert("clicked btn")
  }

  return <button onChange={onChangeHandler}></button>
}
