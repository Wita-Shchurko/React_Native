import { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../actions/photoActions';
import { PhotoList } from '../components/PhotoList';
import { Loader } from '../components/Loader';

export const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, photosList } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View>
      <PhotoList
				photosList={photosList}
				navigation={navigation} 
			/>
    </View>
  );
};