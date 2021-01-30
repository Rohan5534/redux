import React , {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Task from './task'

function TaskContainer({list , listId , markAllAsDone , deleteList , handleDelete , handleSubmit , toggle , startUpdate , endUpdate}) {

	const [inputValue , setInputValue] = useState('')

	const handleInputChange = e => {
		e.preventDefault()
		setInputValue(e.target.value)
	}

	if(!list){return <Redirect to='/' />}

	else return (

		<div className='taskContainer-parent-container'>
			<div className='taskContainer-list-name'>
				{list.name}
			</div>
			<button className='taksContainer-deleteList-btn' onClick={() => deleteList(listId)}>
				<i className="bi bi-trash"></i>
				Delete list
			</button>
			<button className='taksContainer-markAllDone-btn' onClick={() => markAllAsDone(listId)}>
				<i className="bi bi-check2-square"></i>
				Mark all as done 
			</button>
			<Link className='taskContainer-home-link' to='/'>
				<i className="bi bi-house-door"></i>
				Home
			</Link>
			<form className='taskContainer-form' onSubmit={() => handleSubmit(listId , inputValue)}>
				<input type='text' name='task' 
				defaultValue = ''
				onChange={handleInputChange}
				placeholder='Enter new task'  className='taskContainer-form-input '></input>
				<button type='submit' className='taskContainer-form-submit-btn'>
					<i className="bi bi-plus-circle"></i>
				</button>
			</form>
			<div className='taskContainer-todo-container'>
				{list.tasks.map((currentValue , taskId) => <Task 
				key={taskId}
				task = {currentValue.task}
				isCompleted = {currentValue.isCompleted}
				isUpdating = {currentValue.isUpdating}
				startUpdate={startUpdate}
				endUpdate={endUpdate}
				taskId={taskId}
				listId={listId}
				toggle = {toggle}
				handleDelete = {handleDelete} />
				)}
			</div>
			</div>
	);
}

export default TaskContainer;