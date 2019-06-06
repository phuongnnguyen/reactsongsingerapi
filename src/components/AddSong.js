import React, {useState} from 'react';
import { graphql, compose } from 'react-apollo';
import { getSingers, addingSong, getSongs } from '../queries/queries';
const AddSong = props => {
	const [name, setName] = useState('');
	const [genre, setGenre] = useState('');
	const [singerid, setSingerid] = useState('');
	function displaySingers() {
		const data = props.getSingers;
		if(data.loading)
			return <option>Loading...</option>
		else return data.singers.map(singer => <option key={singer.id} value={singer.id}>{singer.name}</option>)
	}
	function handleSubmit(e) {
		e.preventDefault();
		props.addingSong({
			variables: {
				name,
				genre,
				authorid: singerid
			},
			refetchQueries: [{query: getSongs}]
		})
	}
	return(
		<form id="addsong" className="w3-padding w3-round w3-border w3-border-white w3-margin" onSubmit={e => handleSubmit(e)}>
			<label>	Tên bài hát:
				<input type="text" required onChange={e => setName(e.target.value)}/>
			</label><br/>
			<label>
				Thể loại:
				<input type="text" required onChange={e => setGenre(e.target.value)}/>
			</label><br/>
			<label>
				Ca sĩ
				<select required onChange={e => setSingerid(e.target.value)}>
					<option value="">Chọn ca sĩ</option>
					{displaySingers()}
				</select>
			</label>
			<button>+</button>
		</form>
	)
}

export default compose(
	graphql(getSingers, {name: 'getSingers'}),
	graphql(addingSong, {name: 'addingSong'})
)(AddSong)
