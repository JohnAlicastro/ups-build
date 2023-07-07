import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';
import { CustomerScreenNavigationProp } from '../screens/CustomerScreen';
import { Card, Icon } from '@rneui/themed';

type CustomerCardProps = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: CustomerCardProps) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity>
      <Card containerStyle={tw('p-5 rounded-lg')}>
        <View>
          <View>
            <Text style={tw('')}>{name}</Text>
            <Text>ID: {userId}</Text>
          </View>

          <View>
            <Text>{loading ? 'loading...' : `${orders.length} x`}</Text>
            <Icon style={tw('mb-5 ml-auto')} name='box' type='entypo' color='#59C1CC' size={50} />
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
