import React, {useState} from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(""); 

  const addTask = () => {
    if (newTask.trim() === '') return; 
    setTasks([...tasks, newTask]);
    setNewTask(''); 
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    
  };

  return (
    <div>
      <h1>Lista</h1>
      <div>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Tarea"/>
        <button onClick={addTask}>Add</button>
      </div>  

      <ul> 
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default App;