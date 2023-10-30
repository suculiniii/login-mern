import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

 
function RegisterPage() {

  const {register, handleSubmit, formState: {errors}}=useForm();
  const {signup, isAuthenticathed, errors: RegisterErrors}=useAuth();
  const navigate = useNavigate();

useEffect(()=>{ 
  if(isAuthenticathed) navigate('/tasks');
}, [isAuthenticathed, navigate])


const onSubmit= handleSubmit(async (values)=>{
  signup(values);
  //console.log(values);  
})
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center"> 
    <div className="bg-zinc-500 max-w-md p-10 rounded-md">
      {
        RegisterErrors.map((error, i)=>(
          <div className="bg-red-500 text white p-2" key={i}>
            {error}
          </div>
        )) 
      }
      <form onSubmit={onSubmit}>
        <input type="id" {...register("username", {required:true})} placeholder="username"
        className="w-full bg-zinc-900 text-white px-4 py-4 rounded-md my-3"/>
        {
          errors.username && <p className='text-black-500'>el username es requerido </p>
        }
        <input type="email" {...register("email", {required:true})} placeholder="email"
        className="w-full bg-zinc-900 text-white px-4 py-4 rounded-md my-3"/>
        {
          errors.email && <p className='text-black-500'>el email es requerido </p>
        }
        <input type="password" {...register("password", {required:true})} placeholder="password"
        className="w-full bg-zinc-900 text-white px-4 py-4 rounded-md my-3"/>
        {
          errors.password && <p className='text-black-500'>la contraseña es requerido </p>
        }
        <button type="submit" className="w-full bg-green-800 fond-bold py-2 rounded-full">Register</button>
      </form>
    </div>
    </div>

  )
}

export default RegisterPage
 