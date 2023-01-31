import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HStack, VStack, Box, Text, Pressable} from 'native-base';

export const ListItem = ({item, navigation}) => {

  const handleDetail = () => {
    navigation.navigate("JobDetail", {item:item})
  }

  return (
    <Box>
      <Pressable
        onPress={handleDetail}
        rounded="8"
        overflow="hidden"
        borderWidth="1"
        borderColor="coolGray.300"
        maxW="96"
        shadow="3"
        bg="coolGray.100" m={1}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          m={2}
          space={2}>
          <Image
            source={require('../assets/microsoft.png')}
            style={{width: wp(16), height: hp(8)}}
          />
          <Text></Text>
          <VStack width="65%">
            <Text fontSize="sm" mb={1} fontWeight="bold" numberOfLines={1}>
              {item.title}
            </Text>
            <Text fontSize="xs" mb={1} numberOfLines={1}>
              {item.company}
            </Text>
            <Text fontSize="xs" numberOfLines={1}>
              {item.location}
            </Text>
          </VStack>
          <TouchableOpacity>
            <MaterialCommunityIcons name="chevron-right" size={30} />
          </TouchableOpacity>
        </HStack>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgrey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: wp(90),
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
  },
});
