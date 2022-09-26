export type User = {
  id: number
  login: string
  token: string
}

//mock
const user: User = { id: 1, login: "spl33t", token: "xxxx" }

export const signIn = async (params: { login: string; password: string }) => {
  if (params.login !== user.login)
    throw new Error("Юзера с таким логином не существует")

  return new Promise<User>((resolve) =>
    setTimeout(() => {
      resolve(user)
    }, 1000)
  )
}

export const logout = async () => {
  return "Выход"
}

export const refreshSession = async () => {
  return new Promise<User>((resolve) =>
    setTimeout(() => {
      resolve(user)
    }, 1000)
  )
}
