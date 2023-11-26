/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
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

// ----------------------------------------------------------------------------------

// In React Native, useState is a hook that allows you to add state to function components. It returns an array with two values: the current state and a function to update it 1.

// Here’s how the code you provided works:

// JavaScript
// const [like, setLike] = useState(false);

// like is the current state value, which is initialized to false.
// setLike is a function that updates the state value of like.

// When you call setLike, React Native will re-render the component with the new state value 2.

// ----------------------------------------------------------------------------------

// In React Native, a hook is a special function that allows you to use state and other React features without writing a class 1. Hooks are used to add functionality to React components beyond just creating and returning React elements 1.

// There are several built-in hooks in React Native, including useState, useEffect, useContext, and useReducer 1.

// useState is a hook that allows you to add state to function components. It returns an array with two values: the current state and a function to update it 1.

// useEffect is another hook that lets you perform side effects within your component functions. It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components 1.

// ----------------------------------------------------------------------------------

// In React Native, there are two main types of components: class components and function components 123.

// The most significant difference between the two is that class components are JavaScript ES2015 classes that extend a base class from React called Component 12. They have access to the React lifecycle methods like render as well as state/props functionality from the parent 1.

// On the other hand, functional components are simpler and do not manage their own state or have access to the lifecycle methods provided by React Native 12. They are literally plain old JavaScript functions and are sometimes called stateless components 1.

// Functional components are generally used for display purposes, and these components call functions from parent components to handle user interactions or state updates 1.

// ----------------------------------------------------------------------------------

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
