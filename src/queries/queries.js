import {gql} from 'apollo-boost';

const getSongs = gql`
	{
		songs {
			id, 
			name,
		}
	}
`
const getSingers = gql`
	{
		singers {
			name,
			id
		}
	}
`
const getSong = gql`
	query($id: ID) {
		song(id: $id) {
			id
			name
			genre
			singer {
				name
				age
				id
				songs {
					name
					genre
				}
			}
		}
	}
`
const addingSong = gql`
	mutation ($name: String!, $genre: String!, $authorid: ID!) {
		addSong(name: $name, genre: $genre, authorid: $authorid) {
			name,
			genre
		}
	}
`
const addingSinger = gql`
	mutation($name: String!, $age: Int!) {
		addSinger(name: $name, age: $age) {
			name, 
			age
		}
	}
`

export { getSongs, getSingers, addingSong, addingSinger, getSong }
