import { useForm } from "react-hook-form"
import { useTasks } from "../context/TaskContext"

const TaskFormPage=()=> {
  const { register, handleSubmit } = useForm();
  const { createTask }= useTasks()

  const onSubmit = handleSubmit((data) => {
  createTask(data);
})
  return (
    <>
      <div className="bg-zinc-700 max-w-md w-full p-10 rounded.md">
        <form onSubmit={onSubmit}>
          <input type="text" className="min-w-full bg-zinc-600 text-white py-4 px-2 py-4 rounded-md"   placeholder="Titulo" {...register("title")} />
          <textarea rows="2" className="min-w-full bg-zinc-600 text-white py-4 px-2 py-4 rounded-md" {...register("description")}></textarea>
          <button>Guardar</button>
        </form>
      </div>
    </>
  )
}

export default TaskFormPage
