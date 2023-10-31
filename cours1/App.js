/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {View, Text, StyleSheet} from "react-native";

// composant fonctionnel
// note: pour passer une expression js pure, il faut l'encapsuler comme ceci: {expression js}

// function Chanson () {
//     const nom = "Reflektor function";
//     return (
//         <View>
//             <Text>{nom}</Text> 
//         </View>
//     );
// }

// composant fonctionnel arrow function

// const Chanson = () => {
//     const nom = "Reflektor arrow";
//     return (
//         <View>
//             <Text>{nom}</Text> 
//         </View>
//     );
// }

// composant de classe

class Chanson extends React.Component {
    render() {
        const nom = "Reflektor classe";
        return (
                <View style={styles.viewAppearance}>
                    <Text>{nom}</Text> 
                </View>
                );
    }
}

const styles = StyleSheet.create(
    {
        viewAppearance : {
            backgroundColor: '#44ee33',
            borderRadius:8,
            margin:10,
        }


    }
) 


export default Chanson;
