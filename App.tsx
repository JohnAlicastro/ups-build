import { TailwindProvider } from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import utilities from './tailwind.json';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  // USE BELOW uri AND headers FOR PRODUCTION
  // uri: 'https://mifune.stepzen.net/api/dealing-monkey/__graphql',
  // headers: { Authorization: 'apikey mifune::stepzen.io+1000::52b81db992e16df6a7df26cdc1f3f028a0a727622cc326430d636dab3350dbbe' },

  // USE BELOW uri FOR DEVELOPMENT
  uri: 'http://localhost:5001/api/dealing-monkey',
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
