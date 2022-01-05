import React from 'react';
import {View} from 'react-native';

import Top from '@/feed/components/Top';

import styles from './style';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.home}>
      <Top title="Triplr" />
    </View>
  );
};

export default HomeScreen;
