import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';
import {Box, HStack, VStack, Text, Link} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RenderHtml from 'react-native-render-html';

export const JobDetailScreen = ({route}) => {
  const {item} = route.params;
  const {width} = useWindowDimensions();

  const [jobDetail, setJobDetail] = useState({});

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailData = async () => {
    const {data} = await axios({
      url: `http://dev3.dansmultipro.co.id/api/recruitment/positions/${item.id}`,
      method: 'GET',
    });

    setJobDetail(data);
  };

  const source = {
    html: `${item.description}`,
  };

  return (
    <Box p={4}>
      <ScrollView>
        <Text mb={2} fontWeight="bold">
          Company
        </Text>
        <Box
          rounded="8"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="coolGray.100"
          p={3}>
          <HStack>
            <Image
              source={require('../assets/microsoft.png')}
              style={{width: wp(20), height: hp(10), marginRight: wp(5)}}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <VStack>
                <Text fontSize="lg" fontWeight="bold" width="100%">
                  {item.company}
                </Text>
                <Text>{item.location}</Text>
                <Link href={item.company_url} _text={{color: 'blue.500'}}>
                  Go to website.
                </Link>
              </VStack>
            </ScrollView>
          </HStack>
        </Box>

        <Text mt={4} mb={2} fontWeight="bold">
          Job Specification
        </Text>
        <Box
          rounded="8"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="coolGray.100"
          p={3}>
          <View style={{marginBottom: hp(2)}}>
            <Text opacity="0.5">Title</Text>
            <Text>{item.title}</Text>
          </View>
          <View style={{marginBottom: hp(2)}}>
            <Text opacity="0.5">Fulltime</Text>
            <Text>{item.type === 'Full Time' ? 'Yes' : 'No'}</Text>
          </View>
          <View>
            <Text opacity="0.5">Description</Text>
            <RenderHtml contentWidth={width} source={source} />
          </View>
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({});
