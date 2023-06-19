import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {RouteType} from '../routes/RouteType';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';


type Props = RouteType<'Card'>;

export default class Card extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
        <View style={{
            ...styles.container, 
            backgroundColor:this.props.bg
         }}>
            <View style={styles.col}>
               <Icon 
                 name={this.props.icons}
                 size={30}
                 color={this.props.bg == "red" ? "#FFF":"red"}
               />
               <TouchableOpacity onPress={this.props.onPress}>
                    <Icon2
                        style={{marginLeft:50}}
                        name="dots-vertical"
                        size={30}
                        color="#b8b8aa"
                    />
               </TouchableOpacity>
            </View>
             <Text style={styles.title}>{this.props.title}</Text>
            <Text style={{
                ...styles.number,
                color: this.props.bg == "red" ? "#FFF":"#000",
            }}>
                {this.props.number}
            </Text>
         </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        height:200,
        width:130,
        borderRadius:30,
        padding:15,
        marginLeft:30
      },
      col: {
          flexDirection:"row"
      },
      title:{
          marginTop:90,
          color:"#b8b8aa",
          fontWeight:"bold",
          fontSize:12
      },
      number:{
          fontWeight:'bold',
          fontSize:22
      }
});
