import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

const TaskPage = () =>{
  const { getTasks, tasks } = useTasks()
  console.log(tasks);
  
  useEffect(() =>{
    getTasks();
  },[])

  return (
    <div>
      {
        tasks.map(tasks =>(
          <div key={tasks_id}>
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TaskPage