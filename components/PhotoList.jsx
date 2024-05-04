import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import { PhotoLink } from './PhotoLink';

const List = styled.FlatList`
	padding-left: 50px;
	display: flex;
	flex-direction: column;
	list-style-type: none;
`;

export const PhotoList = ({ photosList, navigation }) => {
	return (
		<View>
			{console.log(photosList[0])}
			<List 
				data={photosList}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('FullPhoto', { photoLink: item.urls.full })}>
						<PhotoLink
							url={item.urls.thumb}
							user={item.user.name}
						/>
					</TouchableOpacity>
				)}
				keyExtractor={item => item.id}

			/>
		</View>
	)
};
