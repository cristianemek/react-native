import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function FAB() {
  return (
          <Pressable onPress={() => setCount(count + 1)}
            style={styles.floatingButton}
            onLongPress={() => setCount(0)}
            >
            <Text style={{color: 'white', fontSize: 20}}>+1</Text>
          </Pressable>
  )
}