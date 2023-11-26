/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { createEnumDeclaration } from "typescript";

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
        const nom = "Drones";
        return (
                <View style={styles.viewAppearance}>
                    <Text style={styles.textAppearance}>{nom}</Text> 
                </View>
                );
    }
}

class Playlist extends React.Component {
    render() {
        return (
            <View style={styles.flexContainer}>
                <View>
                    <Chanson/>
                    <Chanson/>
                </View>
                <View>
                    <Chanson/>
                    <Chanson/>
                </View>  
            </View>
        )
    }
}

// class Playlist extends React.Component {
//     render() {
//         return (
//             <View>
//                {creerTab()}
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create(
    {
        viewAppearance : {
            backgroundColor: '#44ee33',
            borderRadius:8,
            margin:10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        textAppearance : {
            fontSize: 24,
            fontStyle : 'italic',
            color: '#ffffff',
        },
        flexContainer : {
            display : "flex",
            flexDirection : "row",
            justifyContent : "space-between",
        }

    }
)

function creerTab() {
    const tab=[];
    for(let index=0; index < 4; index++)
        tab.push(<Chanson/>);
    return tab;
}


export default Playlist; // exporter la classe que l'on veut afficher
