import { TailwindProvider } from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import utilities from './tailwind.json';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { STEPZEN_API_KEY, STEPZEN_URI } from '@env';

const client = new ApolloClient({
  uri: STEPZEN_URI,
  headers: { Authorization: `apikey ${STEPZEN_API_KEY}` },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
