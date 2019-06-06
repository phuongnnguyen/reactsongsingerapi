import React from 'react';
import { graphql } from 'react-apollo';
import { getSong } from '../queries/queries'
const Details = props => {
	function displayBook() {
		const {song} = props.data;
		if(song) {
			return(
				<div className="w3-bar-block detail">
					<h2 className="w3-bar-item">Tên bài hát: {song.name}</h2>
					<h3 className="w3-bar-item">Thể loại: {song.genre}</h3>
					<p className="w3-bar-item">Tên ca sĩ: {song.singer.name}</p>
					<p className="w3-bar-item">Tuổi: {song.singer.age}</p>
					<p className="w3-bar-item">Bài hát: </p>
					<ul>
						{song.singer.songs.map(song => <li key={song.name}>{song.name}</li>)}
					</ul>
				</div>
			)
		} 
	}
	return(
		<div>
			{displayBook()}
		</div>
	)
}

export default graphql(getSong, {
	options: (props) => {
		return {
			variables: {
				id: props.id
			}
		}
	}
}
)(Details)
