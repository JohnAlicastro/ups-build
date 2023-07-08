import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';

type OrderCardProps = {
  item: Order;
};

const OrderCard = ({ item }: OrderCardProps) => {
  const tw = useTailwind();

  return (
    <TouchableOpacity>
      <Card containerStyle={tw('px-5 rounded-lg')}>
        <View style={tw('flex-row justify-between items-center')}>
          <View>
            <Icon name='truck-delivery' color={'#EB6A7C'} type={'material-community'} />
            <Text style={{ fontSize: 10 }}>{new Date(item.createdAt).toDateString()}</Text>
          </View>

          <View style={tw('flex-row items-center')}>
            <Text style={[tw('text-sm'), { color: '#EB6A7C' }]}>{item.trackingItems.items.length} x</Text>
            <Icon style={tw('ml-2')} name='box' type='feather'></Icon>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;