/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, View } from 'react-native';

// class App extends React.Component {
//   render() {
//     return (
//        <View>
//         <Text>test</Text>
//        </View> 
//     );
//   }
// }

const imagePlay = require('./images/play.png');
const imageVolume = require('./images/sound.png');
const imagePleinEcran = require('./images/full-screen.png');
const imageHd = require('./images/hd-sign.png');
const imageFond = require('./images/video.jpg');

function LecteurVideo() {
  return(
    <View style={styles.parent}>
      <ImageBackground source={imageFond}>
      <View style={styles.conteneurBas}>
        <Image source={imagePlay}/>
        <Image source={imageVolume}/>
        <View style={styles.barre}></View>
        <Image source={imageHd}/>
        <Image source={imagePleinEcran}/>
      </View>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create(
  {
      conteneurBas : {
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 150,
        backgroundColor: '#000',
        padding: 20,
      },
      parent : {
        width : '100%',
        height : '100%',
        justifyContent : 'center',
      },
      barre : {
        width : 100,
        height : 10,
        backgroundColor : '#FF0000',
        borderRadius : 10,
      }

  }
)


export default LecteurVideo;
