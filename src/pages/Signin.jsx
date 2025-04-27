import React from "react"
import {BottomWarning} from '../components/BottomWarning'
import {Button} from '../components/Button'
import {InputBox} from '../components/InputBox'
import {Heading} from '../components/Heading'
import {SubHeading} from '../components/SubHeading'

function App(){

    return (
        <div className="h-screen flex justify-center bg-slate-300 ">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white text-center h-max p-2 px-4 w-80">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox label={"Email"}  placeholder={"abc@gmail.com"} />
                    <InputBox label={"Password"} placeholder={"Shhh !!!"} />
                    <div className="pt-4">
                        <Button label={"Sign in"} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={'/signup'} />
                </div>
            </div>
        </div>
    )
}

export default App