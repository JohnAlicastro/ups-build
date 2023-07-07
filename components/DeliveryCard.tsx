import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { Card } from '@rneui/themed';

type DeliveryCardProps = {
  order: Order;
};

const DeliveryCard = ({ order }: DeliveryCardProps) => {
  const tw = useTailwind();

  return (
    <Card>
      <Text>DeliveryCard</Text>
    </Card>
  );
};

export default DeliveryCard;
