import React from 'react'

//import events from './data/events.json';
import Items from './Items';
import FilterEvents from './FilterEvents';
import SubmitForm from './SubmitForm';
import fetch from 'isomorphic-fetch';
import Loader from './Loader';

class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			events: [],
			filter: '',
			newName: '',
			newNameValid: false,
			newPlace: '',
			newPlaceValid: false,
			newDate: '',
			newDateValid: false,
			newTime: '',
			newTimeValid: false
		}
	}

	componentDidMount() {
		require('es6-promise').polyfill();
		require('isomorphic-fetch');
		
		fetch('//frontendinsights.com/events.json')
			.then(response => {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			})
			.then(stories => this.setState({ events: stories, isLoading: false })
			);
		
	}

	emptyDiv(event) {
		event.preventDefault();
		this.setState({ events: [] });
	}

	deleteItem(id, event) {
		event.preventDefault();
		const newArray = this.state.events.filter(item => item.id !== id);
		this.setState({ events: newArray });
	}

	filterEvents(event) {
		event.preventDefault();

		this.setState({ filter: event.currentTarget.value })
	}

	addEvent(event) {
		event.preventDefault();
		
		const {
			events,
			newName,
			newPlace,
			newDate,
			newTime,
			newNameValid,
			newPlaceValid,
			newDateValid,
			newTimeValid
		} = this.state;

		const maxId = Math.max(...events.map(item => item.id));

		if (newNameValid && newPlaceValid && newDateValid && newTimeValid) {
			events.push({
				id: maxId + 1,
				name: newName,
				place: newPlace,
				date: newDate,
				time: newTime
			})

			this.setState({ events })
		}
	}

	onChangeField(field, event) {
		const value = event.currentTarget.value;

		this.setState({
			[field]: value,
			[field + 'Valid']: value.length > 0
		});
	}

	render () {
		return (
			<div>
				<FilterEvents filterEvents={this.filterEvents.bind(this)} filter={this.state.filter} /><br />
				<Loader isLoading={this.state.isLoading}>
					<ul>
						{this.state.events.map(item => {
							const date = new Date(item.date);
							
							if (date >= Date.now() && item.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1) {
								return <Items item={item} deleteItem={this.deleteItem.bind(this)} />
							}
							return null;
							
						})}
					</ul>
				</Loader>
				<button onClick={this.emptyDiv.bind(this)}>Wyczyść</button>
				<SubmitForm	newName={this.state.newName}
										newPlace={this.state.newPlace}
										newDate={this.state.newDate}
										newTime={this.state.newTime}
										newNameValid={this.state.newNameValid}
										newPlaceValid={this.state.newPlaceValid}
										newDateValid={this.state.newDateValid}
										newTimeValid={this.state.newTimeValid}
										addEvent={this.addEvent.bind(this)}
										onChangeField={this.onChangeField.bind(this)}
										/>
			</div>
		)
	}
}

export default Events;