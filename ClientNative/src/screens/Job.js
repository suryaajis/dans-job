import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Input, Stack, Icon, Box, HStack, Switch, Button} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ListItem} from '../components/ListItem';

function JobScreen() {
  const [jobList, setJobList] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [fulltime, setFulltime] = useState(false);

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

  const getData = async query => {
    let URL = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json?';

    if (query?.description) {
      const desc = query.description.toLowerCase();
      URL += `description=${desc}&`;
    }

    if (query?.location) {
      const loc = query.location.toLowerCase();
      URL += `location=${loc}&`;
    }

    if (query?.type) {
      const type = query.type;
      URL += `full_time=${type}&`;
    }

    const {data} = await axios({
      url: URL,
      method: 'GET',
    });

    setJobList(data);
  };

  const handleSearch = text => {
    setSearch(text);
    getData({description: text});
  };

  const handleFilter = () => {
    getData({location: location, type: fulltime});
  };

  const clearPayload = () => {
    setFulltime(false)
    setSearch("")
    setLocation("")
    getData()
  }

  const Item = ({title}) => <ListItem title={title} />;

  return (
    <View style={{padding: hp(2)}}>
      <View style={styles.filter}>
        <Input
          w={{
            base: '80%',
            md: '20%',
          }}
          placeholder="Search . ."
          borderRadius="10"
          value={search}
          onChangeText={handleSearch}
          InputLeftElement={
            <Icon
              as={<MaterialCommunityIcons name="magnify" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
        />
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => setShowFilter(!showFilter)}>
          {showFilter ? (
            <MaterialCommunityIcons name="chevron-up" size={40} />
          ) : (
            <MaterialCommunityIcons name="chevron-down" size={40} />
          )}
        </TouchableOpacity>
      </View>

      {showFilter ? (
        <Box alignItems="center" style={styles.boxFilter}>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            style={{width: wp(80)}}>
            <Text>Full TIme</Text>
            <Switch
              size="sm"
              isChecked={fulltime}
              onToggle={() => setFulltime(!fulltime)}
            />
          </HStack>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            style={{width: wp(80)}}>
            <Text>Location</Text>
            <Input
              placeholder="ex: berlin"
              width="50%"
              height="75%"
              value={location}
              onChangeText={setLocation}
            />
          </HStack>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            style={{width: wp(80)}}>
            <Text></Text>
            <HStack>
            <Button
                size="sm"
                variant="outline"
                _text={{
                  color: '#1F2937',
                }}
                mr="1"
                onPress={clearPayload}>
                Reset
              </Button>
              <Button
                size="sm"
                variant="outline"
                _text={{
                  color: '#1F2937',
                }}
                onPress={handleFilter}>
                Apply
              </Button>
            </HStack>
          </HStack>
        </Box>
      ) : (
        <></>
      )}

      <FlatList
        data={jobList}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        style={{marginTop: hp(2)}}
      />
    </View>
  );
}

export default JobScreen;

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxFilter: {
    marginLeft: wp(2.5),
    marginRight: wp(2.5),
    marginTop: hp(1),
    paddingBottom: hp(1),
    paddingTop: hp(1),
    borderWidth: 1,
    borderColor: 'rgb(205,205,205)',
    borderRadius: 5,
  },
  btnApply: {
    height: hp(5),
  },
  iconBtn: {
    borderWidth: 1,
    borderColor: 'rgb(205,205,205)',
    borderRadius: 10,
    marginLeft: wp(2),
    padding: 1,
  },
});
