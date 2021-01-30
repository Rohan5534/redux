import React from 'react';
import ShortTask from './shortTask'

function ShortTaskContainer({tasks}) {
	return (
		<div className='shortTaskContainer-parent-container'>
			{tasks.map((currentValue,id) => <ShortTask key={id} task = {currentValue} />)}
		</div>
	);
}

export default ShortTaskContainer;