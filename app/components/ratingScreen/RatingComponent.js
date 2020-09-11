import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './styles';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default function RatingComponent() {
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text>Rating Screen</Text>
        <View>
          <AirbnbRating
            count={5}
            reviews={['Bad', 'OK', 'Good', 'Very Good', 'Amazing']}
            defaultRating={5}
            size={20}
          />
          <Rating showRating onFinishRating={ratingCompleted} />
        </View>
      </View>
    </ScrollView>
  );
}
