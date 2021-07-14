import React, {Component} from 'react';
import {FlatList, Text, View, Image} from 'react-native';
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
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', height: 60}}>
          <Image source={{uri: item.avatar}} style={{height: 40, width: 40}} />
          <View>
            <Text>
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
      <View style={{flex: 1}}>
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
