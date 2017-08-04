import React from 'react'

const Items = (props) => {
	return (
		<li key={props.item.id}>
			<strong>{props.item.name}</strong><br />
			Gdzie: {props.item.place}<br />
			Kiedy: {props.item.date} - {props.item.time}<br />
			<button onClick={props.deleteItem.bind(this, props.item.id)}>Usun</button>
		</li>
	)
}

export default Items;