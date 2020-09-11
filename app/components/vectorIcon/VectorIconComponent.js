import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function VectorIconComponent() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text>Vector Icon Screen</Text>
        <View>
          <MaterialIcons name="coronavirus" size={100} />
        </View>
      </View>
    </ScrollView>
  );
}
