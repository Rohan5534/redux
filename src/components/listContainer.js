import React from 'react';
import List from './list'

function ListContainer({mainState , deleteList}) {

	return (
		<div className='listContainer-parent-container'>
			{mainState.map( (currentValue , id) =>{ 
				if(!currentValue){ return null}
				else {return <List
					key={id}	
					list={currentValue}
					id={id}
					deleteList={deleteList}
				/>}}
			)}
		</div>
	);
}

export default ListContainer;