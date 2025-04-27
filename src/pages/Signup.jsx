import React from "react"
import { useState } from "react"
import axios from 'axios'
import {BottomWarning} from '../components/BottomWarning'
import {Button} from '../components/Button'
import {InputBox} from '../components/InputBox'
import {Heading} from '../components/Heading'
import {SubHeading} from '../components/SubHeading'

function App(){

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="bg-slate-300 h-screen flex justify-center ">
            <div className="flex flex-col justify-center ">
                <div className="rounded-lg bg-white text-center p-2 px-4 h-max w-80">
                    <Heading label={"Sign up"} ></Heading>
                    <SubHeading label={"Enter your infromation to create an account"} />
                    <InputBox label={"First name"}  placeholder={"John"} onChange={(e) => {setFirstName(e.target.value)}} />
                    <InputBox label={"Last name"}  placeholder={"Cena"} onChange={(e) => {setLastName(e.target.value)}} />
                    <InputBox label={"Email"}  placeholder={"jhonyy@gmail.com"} onChange={(e) => {setUsername(e.target.value)}} />
                    <InputBox label={"Password"}  placeholder={"johnLovesLisa"} onChange={(e) => {setPassword(e.target.value)}} />
                    <div className="pt-4">
                        <Button label ={"Sign up"} onClick = { async () => {
                                const response = await axios.post("https://exammate-backend-seven.vercel.app/api/v1/user/signup" , {
                                    username,
                                    password,
                                    firstname,
                                    lastname
                                })   
                                localStorage.setItem("token",  response.data.token )    
                        }} />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={'/signin'} />
                </div>
            </div>
        </div>
    )
}

export default App