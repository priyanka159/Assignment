// import React, { Component } from 'react';
// import { View, Text,Button,Modal } from 'react-native';
// const HomeScreen = ({navigation}) => {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
     
//         <Text>Byeee</Text>
//         <Button
//           title="go to next screen"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </View>
//     );
//   };
//   export default HomeScreen
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}

export default HomeScreen;
