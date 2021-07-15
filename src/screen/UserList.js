import React, {Component} from 'react';
import {FlatList, Text, View, Image, StyleSheet} from 'react-native';
import axios from 'axios';
export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://reqres.in/api/users')
      .then(res => {
        console.log('UserDATA', res.data);
        let data = res.data.data;
        this.setState({userdata: data});
      })
      .catch(err => {
        console.log(err);
      });
  }
  renderItem = ({item}) => {
    console.log(item, 'itemm');
    return (
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <View style={{flexDirection: 'row', height: 60, marginTop: 15}}>
          <Image
            source={{uri: item.avatar}}
            style={{height: 50, width: 40, borderRadius: 30}}
          />
          <View style={{marginLeft: 5, marginTop: 5}}>
            <Text style={{fontWeight: 'bold'}}>
              {item.first_name} {item.last_name}
            </Text>
            <Text>{item.email}</Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    console.log('data in render', this.state.userdata);
    return (
      <View style={{flex: 1, backgroundColor: 'grey'}}>
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            marginTop: 10,
            fontSize: 16,
          }}>
          User List
        </Text>
        <FlatList
          data={this.state.userdata}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default UserList;
const styles = StyleSheet.create({});
