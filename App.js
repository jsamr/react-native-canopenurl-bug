import React, {useEffect} from 'react';
import {SafeAreaView, Linking} from 'react-native';

export default function App() {
  useEffect(() => {
    (async function () {
      const canOpen = await Linking.canOpenURL('https://google.com/');
      console.info(canOpen);
    })();
  }, []);
  return <SafeAreaView style={{flex: 1}} />;
}
