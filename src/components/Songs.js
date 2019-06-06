import React, { useState } from 'react'
import { getSongs } from '../queries/queries';
import { graphql, compose } from 'react-apollo';
import AddSong from './AddSong';
import AddSinger from './AddSinger';
import Details from './Details';

const Songs = props => {
	const [id, setID] = useState('');
	function displaySongs() {
		const data = props.getSongs;
		if(data.loading)
			return <div>Loading....</div>
		else
			return data.songs.map(song => <li className="w3-bar-item w3-btn w3-round w3-padding w3-card-4 w3-margin w3-white" onClick={e => setID(song.id)} key={song.id}>{song.name}</li>)
	};
	return(
	<div className="SongsArea w3-row">
		<div className="w3-half">
			<h2>Song List</h2>
			<ul className="w3-bar">
				{displaySongs()}
			</ul>
			<AddSong/>
			<AddSinger/>
		</div>
		<div className="w3-half">
			<Details id={id}/>	
		</div>
	</div>
	)
}

export default compose(
 graphql(getSongs, {name: 'getSongs'}),
)(Songs)
