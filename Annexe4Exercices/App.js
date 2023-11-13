/**
 * Annexe 4 - cours C54
 * App de départ à modifier par les étudiants
 * 
 */

import React, { useState } from 'react';

import {

  Text,
  Button,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import { liste } from './donnees.js';

function Galerie() {
  const [index, setIndex] = useState(0);
  // const [affichage, setAffichage] = useState(false);
  // let index = 0;
  let sculpture = liste[index];
  const remoteImage = { uri: sculpture.url };

  // let visible = affichage ? styles.visible : styles.cache;

  function handleClick() {
    // index = index + 1;

    if (index < liste.length - 1) {
      setIndex(index+1); // index++ ne fonctionne pas...
    }

    // console.log(index);
    // console.log(liste.length);

    if (index == liste.length -1) {
      setIndex(0);
    }
  }

  function handleClickPrecedent() {
    if (0 < index) {
      setIndex(index-1);
    }
  }

  function affiche() {
    setAffichage(!affichage);
  }

  return (
   <ScrollView content>
      <View style={styles.main}>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight style={styles.button} onPress={handleClickPrecedent}>
            <Text style={styles.buttonText}>Precedent</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={handleClick}>
            <Text style={styles.buttonText}>Suivant</Text>
          </TouchableHighlight>
        </View>
    
        
        <Text>
          {sculpture.name + "de " +sculpture.artist}
        </Text>
        <Text>  
          ({index + 1} of {liste.length})
        </Text>

        <Image style={styles.image} source={remoteImage} />
      
        <View>
        <TouchableHighlight style={styles.button} onPress={affiche}>
            <Text style={styles.buttonText}>Description</Text>
          </TouchableHighlight>
        </View>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create(
  {
    image : {
      width:160,
      height:160,
    },

    main : {
      // height: '100%',
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
    },
    buttonsContainer : {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    button : {
      backgroundColor: 'blue',
      margin: 15,
      padding: 5,
    }, 
    buttonText : {
      fontSize: 25,
      color : 'white',
    }
  }
)

export default Galerie;
