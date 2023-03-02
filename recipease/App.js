import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './src/pages/layout';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout>Hello!</Layout>} />
      </Routes>
    </BrowserRouter>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
