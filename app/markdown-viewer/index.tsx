import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import ModuleA from '@ut/module-a';

export default function Index() {
  useEffect(() => {
    // DocumentPicker.pickDirectory();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text> Index </Text>
      <ModuleA />
    </View>
  );
}
