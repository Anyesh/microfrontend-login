import { LoginUserData } from '@interfaces/user'
import Link from 'next/link'
import React, { useState } from 'react'
import LoginForm from './LoginForm'

const pageDescriptions = 'Totoro is an AI-enalbled social networking web application.'

export default function Login(): React.ReactElement {
  const [state, stateSet] = useState<LoginUserData>({
    userName: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = e.target

    stateSet((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmission = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    console.log(state.userName)
    console.log(state.password)
  }

  return (
    <div className="lg:pl-20 lg:pr-20 md:pl-10 md:pr-10 sm:p-5 h-screen w-screen grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-center ">
      <div className="text-3xl text-center sm:text-center mx-auto md:text-left w-full">
        <h1 className="text-5xl lg:text-left light:text-nord1 dark:text-nord4 font-bold">Totoro</h1>
        <p className="dark:text-nord4 light:text-nord0">{pageDescriptions}</p>
      </div>
      <div className="mx-auto items-center xl:w-1/2 w-full  shadow-xl light:bg-white dark:bg-nord3 bg-nord5 rounded-lg p-5">
        <h1 className="font-light text-left p-2">Login to continue</h1>
        <hr className="opacity-20" />

        <LoginForm state={state} handleSubmission={handleSubmission} handleChange={handleChange} />

        <hr className="opacity-30" />

        <div className="text-center bg-nord11 hover:opacity-70 transition duration-700 mt-4 mb-4 text-white p-3 rounded-lg font-semibold text-lg block">
          <Link href="/signup">Create New Account</Link>
        </div>
      </div>
    </div>
  )
}
