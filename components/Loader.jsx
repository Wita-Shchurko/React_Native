import { ActivityIndicator, View, Text } from "react-native"

export const Loader = () => {
	return (
		<View style={{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<ActivityIndicator size="large"/>
			<Text>Loading...</Text>
		</View>
	)
}