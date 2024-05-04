import { useState } from 'react';
import { Loader } from '../components/Loader';
import { View, Image, StyleSheet  } from 'react-native';

export const FullPhoto = ({ route }) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const { photoLink } = route.params;

	const handleImageLoad = () => {
    setImageLoaded(true);
  };

	return (
		<View style={styles.container}>
      {imageLoaded ? (
        <Image
					source={{ uri: photoLink }}
					style={styles.image}
				/>
      ) : (
        <Loader />
      )}

      <Image
        source={{ uri: photoLink }}
        style={{ width: 0, height: 0 }}
        onLoad={handleImageLoad}
      />
    </View>
	)
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});