import React from 'react'
import PropTypes from 'prop-types'

const SubmitForm = (props) => {
	return (
		<form onSubmit={props.addEvent}>
			<input
				id="name"
				type="text" placeholder="name"
				value={props.newName}
				onChange={props.onChangeField.bind(this, "newName")}
			/>
			<label htmlFor="name" style={ props.newNameValid ? {display: 'none'} : {display: 'inline'} }>Pole jest wymagane!</label><br />
			<input
				id="place"
				type="text" placeholder="place"
				value={props.newPlace}
				onChange={props.onChangeField.bind(this, "newPlace")}
			/>
			<label htmlFor="place" style={ props.newPlaceValid ? {display: 'none'} : {display: 'inline'} }>Pole jest wymagane!</label><br />
			<input
				id="date"
				type="text" placeholder="date"
				value={props.newDate}
				onChange={props.onChangeField.bind(this, "newDate")}
			/>
			<label htmlFor="date" style={ props.newDateValid ? {display: 'none'} : {display: 'inline'} }>Pole jest wymagane!</label><br />
			<input
				id="time"
				type="text" placeholder="time"
				value={props.newTime}
				onChange={props.onChangeField.bind(this, "newTime")}
			/>
			<label htmlFor="time" style={ props.newTimeValid ? {display: 'none'} : {display: 'inline'} }>Pole jest wymagane!</label><br />
			<button type="submit">Submit</button>
		</form>
	)
};

SubmitForm.propTypes = {
	newName: PropTypes.string.isRequired,
	newPlace: PropTypes.string.isRequired,
	newDate: PropTypes.string.isRequired,
	newTime: PropTypes.string.isRequired,
	newNameValid: PropTypes.bool.isRequired,
	newPlaceValid: PropTypes.bool.isRequired,
	newDateValid: PropTypes.bool.isRequired,
	newTimeValid: PropTypes.bool.isRequired,
	addEvent: PropTypes.func.isRequired,
	onChangeField: PropTypes.func.isRequired
}

export default SubmitForm;