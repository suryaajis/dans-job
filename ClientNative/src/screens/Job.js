import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import {Input, Stack, MaterialIcons, Icon} from "native-base"
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function JobScreen() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    authentication();
    getData();
  }, []);

  const authentication = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      navigation.navigate('Login');
    }
  };

  const getData = async () => {
    const {data} = await axios({
      url: 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json',
      method: 'GET',
    });

    setJobList(data);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Stack space={4} w="100%" alignItems="center">
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Name"
        />
      </Stack>
    </View>
  );
}

export default JobScreen;

const styles = StyleSheet.create({});
