import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';

const CustomerScreen = () => {
  const tailwind = useTailwind();

  return (
    <View>
      <Text>CustomerScreen</Text>
    </View>
  );
};

export default CustomerScreen;
