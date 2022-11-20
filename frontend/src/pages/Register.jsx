import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {

    const [ formData, setFormData ] = useState({
        name:'',
        email:'',
        password:'',
        cpassword:''
    })

    const { name, email, password, cpassword } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)


    useEffect(() => {
      if(isError){
        toast.error(message)
      }
      if(isSuccess || user){
        navigate('/')
      }

      dispatch(reset())
    
     
    }, [user, isError, isSuccess, message, navigate, dispatch])
    

    const handleChange = (e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (password !== cpassword){
            toast.error('Passwords do no match')
        }
        else {
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner />
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