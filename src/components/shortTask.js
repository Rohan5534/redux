import React from 'react';

function ShortTask({task}) {
	return (
		<div className={task.isCompleted ? 'shortTask-parent-container shortTask-parent-container-completed' : 'shortTask-parent-container'}>
			{task.isCompleted ? <i className="bi bi-check2-square shortTask-checkbox-checked"></i> : <i className="bi bi-square shortTask-checkbox"></i> }
			<div className='shortTask-task'>
				{task.task.length <= 16 ? task.task : task.task.slice(0,14)+'...'}
			</div>
		</div>
	);
}

export default ShortTask;