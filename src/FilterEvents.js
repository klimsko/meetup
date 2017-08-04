import React from 'react'
import PropTypes from 'prop-types'

const FilterEvents = (props) => {
	return (
		<form>
			<input 
				onChange={props.filterEvents} 
				value={props.filter} 
				type="text"
				placeholder="filtruj..."
			/>
		</form>
	)
}

FilterEvents.propTypes = {
	filterEvents: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired
}

export default FilterEvents;