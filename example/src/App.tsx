import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { rate } from 'react-native-appgallery';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    setTimeout(async () => {
      try {
        const result = await rate();
        setResult(result);
      } catch (error) {
        setResult(-1);
        console.log(error);
      }
    }, 0);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
