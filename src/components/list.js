import React from 'react';
import ShortTaskContainer from './shortTaskContainer';
import { Link } from 'react-router-dom'

function List({list , id , deleteList}) {
	let threeTasks = list.tasks.slice(0,3).map(currentValue =>  currentValue)


	// This function will return 0 if none of the tasks are completed return 1 if at least 1 task is completed and return 2 if all of the task are completed
	const isListComplete = () => {
		let tempArr = list.tasks.map(currentIter => { if(currentIter.isCompleted) { return 1 } else return 0})
		let arraySum = tempArr.reduce((a,b) =>{return a+b }, 0)
		if (arraySum === list.tasks.length){
			return 2
		}
		else if(arraySum >= 1) return 1
		else if(arraySum === 0) return 0
	}

	return (
	<div className= {isListComplete() === 2 ? 'list-parent-container completed-list' : isListComplete() === 1 ? 'list-parent-container part-done-list' : 'list-parent-container incomplete-list'}>
		<Link to={`/list/${id}`} className='list-name-link'>
			{list.name}
		</Link>
		<Link to={`/list/${id}`}className='list-shortTaskContainer-link'>
			{threeTasks.length === 0 ? <div className='list-empty-div'>Yayy , you have no task pending !!!!</div> : <ShortTaskContainer tasks={threeTasks} />}
		</Link>
		<button className='link-delete-btn' onClick={() => deleteList(id)}>
			Delete List
		</button>
	</div>
	);
}

export default List;