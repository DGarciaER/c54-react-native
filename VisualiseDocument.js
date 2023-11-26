import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';



/* composant représentant un item de la liste */
function Item ({ title, description} ){
  return (
    <View>
    <Text style={styles.title}>{title} </Text>
    <Text>{description} </Text>
   </View>
  );
}

/* composant représentant la liste */
function App() {
  
  const data = [{id:1, title:"Bacon", description:"Bacon ipsum dolor amet chicken venison cow porchetta ribeye pancetta. Leberkas chuck corned beef kevin swine tongue biltong beef chislic pork chop flank cow spare ribs pork belly. Capicola strip steak sirloin pastrami beef jerky. Jowl kielbasa sausage, pastrami spare ribs jerky pig turkey ground round. "},
   {id:2, title:"Saucisse", description:"Bacon ipsum dolor amet chicken venison cow porchetta ribeye pancetta. Leberkas chuck corned beef kevin swine tongue biltong beef chislic pork chop flank cow spare ribs pork belly. Capicola strip steak sirloin pastrami beef jerky. Jowl kielbasa sausage, pastrami spare ribs jerky pig turkey ground."},
   {id:3, title:"Filet de porc", description:"Bacon ipsum dolor amet chicken venison cow porchetta ribeye pancetta. Leberkas chuck corned beef kevin swine tongue biltong beef chislic pork chop flank cow spare ribs pork belly. Capicola strip steak sirloin pastrami beef jerky. Jowl kielbasa sausage, pastrami spare ribs jerky pig turkey ground round. Flank tenderloin pancetta alcatra meatloaf ham hock"},
   {id:4, title:"Steak", description:"Bacon ipsum dolor amet chicken venison cow porchetta ribeye pancetta. Leberkas chuck corned beef kevin swine tongue biltong beef chislic pork chop flank cow spare ribs pork belly. Capicola strip steak sirloin pastrami beef jerky. Jowl kielbasa sausage, pastrami spare "}, 
   {id:5, title:"Boeuf braisé", description:"Bacon ipsum dolor amet chicken venison cow porchetta ribeye pancetta. Leberkas chuck corned beef kevin swine tongue biltong beef chislic pork chop flank cow spare ribs pork belly. Capicola strip steak sirloin pastrami beef jerky. Jowl kielbasa sausage, pastrami spare ribs jerky pig turkey ground round. Flank tenderloin pancetta alcatra meatloaf ham hock tail cupim t-bone. Pork "},
  {id:6,  title:"Boudin", description:"Bacon ipsum dolor amet chicken venison cow porchetta ribeye pancetta. Leberkas chuck corned beef kevin swine tongue biltong beef chislic pork chop flank cow spare ribs pork belly. Capicola strip steak sirloin pastrami beef jerky. Jowl kielbasa sausage, pastrami spare ribs jerky pig turkey ground round. Flank tenderloin pancetta alcatra meatloaf ham hock t"}]; 

  
 /* on clique sur un item et affiche le titre de l'item */
  function clic ( vv ) {

    Alert.alert('titre : ' +vv);
  }
  
  /* rendre les items cliquables */
  const renderItem = ({ item }) => (
    
    <TouchableOpacity onPress={() => clic(item.title)}>
      <Item title={item.title} description={item.description} />
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
     
        <FlatList
        /*  inverted={true} */ /* props pour inverser la liste. pas obligatoire */
          data={data} /* props représentant les données de la liste */
          renderItem={renderItem} /* props représentant un item de la liste */
        /*  keyExtractor={(item) => item.id}*/  /* pas nécessaire ici, on a déjà un attribut de data qui est a le nom id ou key */
        />
      
    </View>
  );


}  

/* feuille de style ReactNative style */
const styles = StyleSheet.create(
    {
      title :{
        color : 'red',
        fontSize: 20,
      },

      container : {
        backgroundColor:'pink',
      }
    }
  )
export default App;