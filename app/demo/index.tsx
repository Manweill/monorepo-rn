import React from 'react';
import {Text, View} from 'react-native';
import ModuleB from '@ut/module-b';
export default function Index() {
  return (
    <View style={{flex: 1}}>
      <Text> Index </Text>
      <ModuleB />
    </View>
  );
}
