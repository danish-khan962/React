import React, { FormEvent, useRef, useState } from 'react'

type FormData = {
    name:string,
    email:string,
    password:string,
}

const Form = () => {
    const [submitted, setSubmitted] = useState<FormData>({
        name:'',
        email:'',
        password:'',
    });


    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const nameValue = nameRef.current!.value;
        const emailValue = emailRef.current!.value;
        const passValue = passwordRef.current!.value;

        setSubmitted({
            name: nameValue,
            email: emailValue,
            password: passValue,
        })
    }
  
    return (
    <form onSubmit={handleSubmit}>

        <input type="text" placeholder='Enter your name..' ref={nameRef}/>
        <input type="text" placeholder='Enter your email..'ref={emailRef}/>
        <input type="text" placeholder='Enter your password..' ref={passwordRef}/>
        <button type="submit">SUBMIT</button>

        <div>
            <h2>Name: {submitted.name}</h2>
            <h2>Email: {submitted.email}</h2>
            <h2>Password: {submitted.password}</h2>
        </div>

    </form>
  )
}

export default Form
