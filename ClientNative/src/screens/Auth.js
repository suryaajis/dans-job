import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FormControl, Input, Stack, Button, Box, useToast} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const user = {
  email: 'user@mail.com',
  password: 'user',
};

export const AuthScreen = ({navigation}) => {
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    authentication();
  }, []);

  const authentication = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      navigation.navigate('Job');
    }
  };

  const handleLogin = async () => {
    if (email === user.email && password === user.password) {
      await AsyncStorage.setItem(
        'access_token',
        'access_token_mobile' + Math.random(),
      );
      navigation.navigate('Job');
      toast.show({
        description: 'Login success',
        placement: 'top',
        duration: 2000,
      });
    } else {
      toast.show({
        description: 'Incorrect email or password',
        placement: 'top',
        duration: 2000,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="ex: name@mail.com"
              onChangeText={setEmail}
              value={email}
            />
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              placeholder="123456"
              onChangeText={setPassword}
              value={password}
            />
            <Button style={styles.btn} onPress={handleLogin}>
              Sign in
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  btn: {marginTop: hp(2)},
});
