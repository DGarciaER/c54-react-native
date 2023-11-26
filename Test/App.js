/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Third Item',
  },
  {
    id: '5',
    title: 'Third Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
  {
    id: '7',
    title: 'Third Item',
  },
  {
    id: '8',
    title: 'Third Item',
  },
  {
    id: '9',
    title: 'Third Item',
  },
  {
    id: '10',
    title: 'Third Item',
  },
  {
    id: '11',
    title: 'Third Item',
  },
  {
    id: '12',
    title: 'Third Item',
  },
  {
    id: '13',
    title: 'Third Item',
  },
  {
    id: '14',
    title: 'Third Item',
  },
  {
    id: '15',
    title: 'Third Item',
  },
  {
    id: '16',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={{ flex: 1, padding: 20 }}>
    <Text>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default App;

// function App() {
//   return (
//     <View>
//       <Text>
//         Hello World
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
