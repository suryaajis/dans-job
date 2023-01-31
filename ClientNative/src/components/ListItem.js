import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const ListItem = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgrey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: wp(90),
    alignSelf:"center"
  },
  title: {
    fontSize: 18,
  },
});
