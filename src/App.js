import React , {useState} from 'react'
import ListContainer from './components/listContainer';
import TaskContainer from './components/taskContainer'
import { Link, Route , useLocation} from 'react-router-dom'
import ListCreator from './components/listCreator';

function App() {

	const [mainState , setMainState] = useState([
		{name:'your sample list' ,
		 tasks:[
			{task:'click on the list name or any of the task to get started' ,
			isCompleted : false ,
			isUpdating : false},
			{task:'some task' ,
			isCompleted : false ,
			isUpdating : false}
		]}
	])

	const [creatingList , setCreatingList] = useState(false)

	// List related actions

	const deleteList = (targetId) => {
		let stateCopy = [...mainState]
		stateCopy.splice(targetId , 1 , undefined)
		setMainState(stateCopy)
	}

	const createNewList = (listName , inputTask) => {
		let stateCopy = [...mainState]
		if(inputTask){
			stateCopy.push({name:listName,tasks:[{task:inputTask,isCompleted:false,isUpdating:false}]})
		}else stateCopy.push({name:listName , tasks:[]})
		setMainState(stateCopy)
		setCreatingList(false)
	}

	//Tasks related actions

	const toggle = (listId , taskId) => {
		let stateCopy = [...mainState]
		stateCopy[listId].tasks[taskId].isCompleted = !stateCopy[listId].tasks[taskId].isCompleted
		setMainState(stateCopy)
	}

	const handleDelete = (listId , taskId) => {
		let stateCopy = [...mainState]
		stateCopy[listId].tasks.splice(taskId,1)
		setMainState(stateCopy)
	}

	const handleSubmit = (listId, inputValue) =>{
		let stateCopy = [...mainState]
		if (inputValue) {
			stateCopy[listId].tasks.push({task:inputValue , isCompleted:false , isUpdating:false})
			setMainState(stateCopy)
		}
	}

	const startUpdate = (listId , taskId) => {
		const stateCopy = [...mainState]
		stateCopy[listId].tasks[taskId].isUpdating = true
		setMainState(stateCopy)
	}

	const endUpdate = (listId , taskId , taskValue) => {
		const stateCopy = [...mainState]
		stateCopy[listId].tasks[taskId].isUpdating = false
		stateCopy[listId].tasks[taskId].task = taskValue
		setMainState(stateCopy)
	}

	const markAllAsDone = (listId) => {
		let stateCopy = [...mainState]
		stateCopy[listId].tasks.map(currentValue => currentValue.isCompleted = true)
		setMainState(stateCopy)
	}

	const regexCheck = (expression) => {
		let regex = /\/list\/\d/
		return regex.test(expression)
	}

	const showCreateNewList = () => {
		setCreatingList(true)
	}

	const cancelButton = () => {
		setCreatingList(false)
	}

	return (
			<div className={regexCheck(useLocation().pathname) ? 'App-inTaskContainer' : 'App'}>

				{creatingList ? <ListCreator createNewList={createNewList} cancelButton={cancelButton} /> : null}

				{useLocation().pathname === '/' ? <Link to='/' className='app-heading-link'>
					<div className='app-heading-text'>
						Your Lists
					</div>
				</Link> : null}
				{useLocation().pathname === '/' ? <div className='app-createNewList'>
					<button onClick={showCreateNewList} className='app-createNewList-link'>
					<i className="bi bi-clipboard-plus"></i>
						Create New List
					</button>
				</div> : null}
				<Route path='/' component={ () => <ListContainer mainState={mainState} deleteList={deleteList} /> } exact/>
				<Route path={`/list/:id`} component={({ match }) => (
					<TaskContainer 
						list={mainState[match.params.id]} 
						listId={match.params.id} 
						toggle={toggle}
						handleDelete={handleDelete}
						handleSubmit={handleSubmit}
						markAllAsDone={markAllAsDone}
						deleteList={deleteList}
						startUpdate={startUpdate}
						endUpdate={endUpdate}
					/>)} />
			</div> 
	)
}

export default App;
