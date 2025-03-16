import React from 'react'
import { useForm } from "react-hook-form";
import './Form.css';

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors , isSubmitting } } = useForm();

    async function onSubmit(data){
        await new Promise((resolve) => {
            setTimeout(resolve, 5000); //5 sec delay submission
        })
        console.log(data);
    }
  return (
    <form id='form' onSubmit={handleSubmit(onSubmit)}>

        <div className='row'>
            <div className='line'>
                <label>Name:</label>
                <input type="text" placeholder='Enter name..' {...register('name' , /*Form validation syntax starts from here*/ { required: true, minLength: {value:4}})}/>
            </div>
            {/*To display error */}
            {errors.name && <p className='err'>name must be 4 characters long</p>}
        </div>
        <div className='row'>
            <div className="line">
                <label>Gender:</label>
                <input type="text" placeholder='Enter gender..' {...register('gender')}/>
            </div>
        </div>
        <div className='row'>
            <div className="line">
                <label>Email:</label>
                <input type="text" placeholder='Enter email..' {...register('email')}/>
            </div>
        </div>


        <input type="submit" type='submit' disabled={isSubmitting} value={isSubmitting ? 'Submitting wait' : "Submit"} id='btn'/>
    </form>
  )
}

export default Form
