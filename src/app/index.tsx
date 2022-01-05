import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import HomeScreen from '@/feed/screens/HomeScreen';

import styles from './style';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={'dark-content'} />

      <View style={styles.container}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;
