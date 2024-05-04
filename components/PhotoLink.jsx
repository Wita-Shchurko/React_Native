import styled from 'styled-components/native';
import { Text } from 'react-native';

const Image = styled.Image`
	width: 50px;
	height: 50px;
	object-fit: cover;
`;

const Item = styled.View`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
`;

export const PhotoLink = ({ url, user }) => {
	return (
		<Item>
			<Image source={{ uri: url}} alt="small img"/>
			<Text>{`Author: ${user}`}</Text>
		</Item>
	)
};
