import React from 'react'

const Events = (props) => {
	return (
		<ul>
			{props.events.map(item => {
				const date = new Date(item.date);
				
				if (date >= Date.now()) {
					return (
						<li key={item.id}>
							<strong>{item.name}</strong><br />
							Gdzie: {item.place}<br />
							Kiedy: {item.date} - {item.time}
						</li>
					)
				}
				return null;
				
			})}
		</ul>
	)
}

export default Events;