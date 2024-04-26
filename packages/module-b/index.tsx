import React from 'react';
import {Text, View} from 'react-native';

export default function ModuleB() {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'blue'}}>
      <Text> ModuleA </Text>
    </View>
  );
}
