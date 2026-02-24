import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {
  const [count, setCount] = useState(10)


  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>



      <FAB
        label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        postition='right'
      />

      <FAB
        label="Reset"
        postition='left'
        onPress={() => setCount(0)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge:{
    fontSize:120,
    fontWeight: '100'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
