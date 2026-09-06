import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Đổi đường dẫn đúng tới file chứa hàm safeAsyncCaller của bạn
import { safeAsyncCaller } from './Day2/B/SafeAsyncCaller'; 
export default function App() {
  useEffect(() => {
    // Gọi hàm test ngay khi component vừa mount
    safeAsyncCaller();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Đang test hàm safeAsyncCaller (xem Terminal)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});