import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {

    const [ formData, setFormData ] = useState({
        name:'',
        email:'',
        password:'',
        cpassword:''
    })

    const { name, email, password, cpassword } = formData

    const handleChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:[e.target.value]
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <input type="text" className='form-control' id='name' name='name' value={name} 
                        placeholder='Enter your Name' onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <input type="email" className='form-control' id='email' name='email' value={email} 
                        placeholder='Enter your Email' onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <input type="password" className='form-control' id='password' name='password' value={password} 
                        placeholder='Enter Password' onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <input type="password" className='form-control' id='cpassword' name='cpassword' value={cpassword} 
                        placeholder='Confirm Password' onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <button type='submit' className='btn btn-block' >Register</button>
                    </div>
                    
                </form>
            </section>
        </>
    )
}

export default Register