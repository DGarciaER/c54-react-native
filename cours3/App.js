/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, setLike } from 'react';
import {ImageBackground, Image, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';


// function App() {
//   return(
//     <View>
//       <Text>
//         Hello
//       </Text>
//     </View>
//   );
  
// } 

// function App () { // use return with useState, not render!!
//   const [valeur, setValeur] = useState(1);

//   return(
//     <View>
//       <Button
//         onPress={() => {
//           setValeur(valeur+1);}}
//           title={'Add 1'}
//       />
//       <Text>{valeur}</Text>
//     </View>
//   );
// }

const imageHeart = require('./images/heart.png');

function App () { // use return with useState, not render!!
  const [like, setLike] = useState(false);

  return(
    <View style={styles.conteneur}>
      <TouchableHighlight onPress={() => {
          setLike(!like)
      }}>
        <Image source={imageHeart} style={like ? styles.aime : styles.image}/>
      </TouchableHighlight>
      
      <Text>j'aime ?</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
      conteneur : {
        display : 'flex',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
      },
      image : {
        tintColor: '#f1f1f1',
      },
      aime : {
        tintColor: '#FF0000',
      }
  }
)

export default App;
