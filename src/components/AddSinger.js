import React, {useState, useRef} from 'react'

import {addingSinger, getSingers} from '../queries/queries';
import {graphql, compose} from 'react-apollo';
const AddSinger = props => {
	let input1 = useRef(), input2 = useRef();
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
		});
		input1.current.value = ''; 
		input2.current.value = '';	

	}
	return(
		<form onSubmit={e => handleSubmit(e)} id="addsinger" className="w3-padding w3-round w3-border w3-border-white w3-margin">
			<label>
				Tên ca sĩ: {' '}
				<input ref={input1} type='text' required onChange={e => setName(e.target.value)}/>
			</label><br/>
			<div>
				Tuổi: {' '}
			</div>
			<input ref={input2} type='number' required onChange={e => setAge(parseInt(e.target.value))}/>
			<button>+</button>
		</form>
	)
}

export default compose(
	graphql(addingSinger, {name: "addingSinger"})
)(AddSinger)
