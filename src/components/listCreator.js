import React , { useState } from 'react';

function ListCreator({createNewList , cancelButton}) {

	const [listName , setListName] = useState('')
	const [inputTask , setInputTaskName] = useState('')

	const handleInputChange = (e) => {
		e.preventDefault()
		setListName(e.target.value)
	}

	const handleInputTaskChange = (e) => {
		e.preventDefault()
		setInputTaskName(e.target.value)
	}

	return (
		<div className='listCreator-parent-container'>
			<form className='listCreator-form' onSubmit={() => createNewList(listName , inputTask)}>
				<input className='listCreator-input' value={listName} onChange={handleInputChange} placeholder={'Enter list name'} required/>
				<input className='listCreator-inupt-task' value={inputTask} onChange={handleInputTaskChange} placeholder='Enter a task to get started' />
				<button className='listCreator-submit-btn' type='submit'>Create</button>
				<button className='listCreator-cancel-btn' type='button' onClick={cancelButton}>cancel</button>
			</form>
		</div>
	);
}

export default ListCreator;