import { View, Text } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { Card, Divider, Icon } from '@rneui/themed';

type DeliveryCardProps = {
  order: Order;
};

const DeliveryCard = ({ order }: DeliveryCardProps) => {
  const tw = useTailwind();

  return (
    <Card
      containerStyle={[
        tw('rounded-lg my-2'),
        {
          padding: 0,
          paddingTop: 16,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          backgroundColor: '#59C1CC',
        },
      ]}
    >
      <View>
        <Icon name='box' type='entypo' size={50} color='white' />

        <View style={tw('')}>
          <Text style={tw('text-xs text-center uppercase text-white font-bold')}>
            {order.carrier} - {order.trackingId}
          </Text>
          <Text style={tw('text-white text-center text-lg font-bold pb-5')}>Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}</Text>
          <Divider color='white' />
        </View>

        <View style={tw('mx-auto')}>
          <Text style={tw('text-base text-center text-white font-bold mt-5')}>Address</Text>

          <Text style={tw('text-sm text-center text-white')}>
            {order.Address}, {order.City}
          </Text>

          <Text style={tw('text-sm text-center italic text-white pb-5')}>Shipping Cost: ${order.shippingCost}</Text>
        </View>
      </View>

      <Divider color='white' />

      <View style={tw('p-5')}>
        {order.trackingItems.items.map((item) => (
          <View style={tw('flex-row justify-between items-center')}>
            <Text style={tw('text-sm italic text-white')}>{item.name}</Text>
            <Text style={tw('text-xl text-white')}>x {item.quantity}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
};

export default DeliveryCard;
