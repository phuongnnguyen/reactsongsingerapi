import React, {useState} from 'react'

import {addingSinger, getSingers} from '../queries/queries';
import {graphql, compose} from 'react-apollo';
const AddSinger = props => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	function handleSubmit(e) {
		e.preventDefault();
		props.addingSinger({
			variables: {
				name, 
				age
			},
			refetchQueries: [{query: getSingers}]
		})
	}
	return(
		<form onSubmit={e => handleSubmit(e)} id="addsinger" className="w3-padding w3-round w3-border w3-border-white w3-margin">
			<label>
				Tên ca sĩ: {' '}
				<input type='text' required onChange={e => setName(e.target.value)}/>
			</label><br/>
			<div>
				Tuổi: {' '}
			</div>
			<input type='number' required onChange={e => setAge(parseInt(e.target.value))}/>
			<button>+</button>
		</form>
	)
}

export default compose(
	graphql(addingSinger, {name: "addingSinger"})
)(AddSinger)
