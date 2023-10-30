import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";

function LoginPage() {

  const { register, handleSubmit, formState: {errors} }= useForm()
  const {signin, errors: signinErrors} = useAuth();
    
const onSubmit= handleSubmit(async (data)=>{
  signin(data);  
})
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center"> 
      <div className="bg-zinc-500 max-w-md p-10 rounded-md">
      {
        signinErrors.map((error, i)=>(
          <div className="bg-red-500 text white p-2" key={i}>
            {error}
          </div>
        )) 
      }
     <form onSubmit={onSubmit}>
        
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
        <button type="submit" className="w-full bg-green-800 fond-bold py-2 rounded-full">Logear</button>
      </form>
    </div>
    </div>
  )
}

export default LoginPage
