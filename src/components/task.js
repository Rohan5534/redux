import React , {useState} from 'react';

function Task({task , isCompleted, isUpdating , taskId , listId , toggle , handleDelete , startUpdate , endUpdate}){

	const [stateTask , setStateTask] = useState(task)

	const handleTaskChange = (e) => {
		let taskValue = e.target.value
		setStateTask(taskValue)
	}

	if(!isUpdating){
	return(
		<div className={isCompleted ? "task-container task-container-completed" : 'task-container'}>
			<input type='checkbox' 
			name='checkbox'
			className='task-checkbox' checked={isCompleted}
			onChange={() => toggle(listId , taskId)}></input>
			<div className='task-text'>{task}</div>
			<div className='task-btn-container'>
				<button className='task-update-btn'
				onClick={() => startUpdate(listId , taskId)}><i className="bi bi-pencil-fill"></i></button>
				<button 
				onClick = {() => handleDelete(listId , taskId)}
				className='task-delete-btn'><i className="bi bi-trash"></i></button>
			</div>
		</div>
	)}
	else{
		return(
			<div className='task-container task-container-updating'>
				<input defaultValue={task} onChange={handleTaskChange}></input>
				<div className='task-btn-container'>
				<button className='task-update-btn' onClick={() => endUpdate(listId , taskId ,stateTask)}>Save</button> 
				<button 
				onClick = {() => handleDelete(listId , taskId)}
				className='task-delete-btn'>Delete</button>
			</div>
			</div>
		)
	}
}

export default Task;