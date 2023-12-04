import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

const image = require('./images/guignolee.jpg');

function App() {
  const [donation, setDonation] = useState(0);

  function donAjout1() {
    setDonation(donation + 1)
  }

  function donAjout2() {
    setDonation(donation + 2)
  }

  return (
       <View style={styles.main}>
        <Image source={image} />
        <Text style={styles.text}>Voulez-vous faire un don?</Text>
         <View style={styles.buttonsContainer}>
           <TouchableHighlight style={styles.button} onPress={donAjout1}>
             <Text style={styles.buttonText}>Don de 1$</Text>
           </TouchableHighlight>
           <TouchableHighlight style={styles.button} onPress={donAjout2}>
             <Text style={styles.buttonText}>Don de 2$</Text>
           </TouchableHighlight>
         </View>
         <Text style={styles.text}>Merci pour votre don de {donation}$</Text>
       </View>

   );
 }
 
 
 const styles = StyleSheet.create(
   {
     main : {
       flex: 1,
       alignItems:'center',
       justifyContent: 'space-between',
     },
     image : {
      width:260,
      height:260,
    },
     buttonsContainer : {
       width: '100%',
       flexDirection: 'row',
       justifyContent: 'center'
     },
     button : {
       backgroundColor: 'red',
       margin: 15,
       padding: 5,
     }, 
     buttonText : {
       fontSize: 25,
       color : 'white',
     },
     text : {
      color: 'red',
      fontSize: 20,
     }
   }
 )

export default App;
