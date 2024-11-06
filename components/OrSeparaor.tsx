import Colors from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OrSeparaor = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <View
        style={{
          flex: 1,
          height: StyleSheet.hairlineWidth,
          backgroundColor: Colors.gray,
        }}
      />
      <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
      <View
        style={{
          flex: 1,
          height: StyleSheet.hairlineWidth,
          backgroundColor: Colors.gray,
        }}
      />
    </View>
  );
};

export default OrSeparaor;
