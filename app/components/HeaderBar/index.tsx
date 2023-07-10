import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';
import Images from '../../images';
import {Actions} from 'react-native-router-flux';

const {Logo, Bell, Calendar} = Images;

export const HeaderBar = () => {
  return (
    <View style={styles.base}>
      <View style={styles.logoColumn}>
        <Logo width={150} height={50} />
      </View>
      <View style={styles.actionColumn}>
        <View style={styles.actionColumnItem}>
          <TouchableOpacity
            style={styles.actionBtnColumn}
            onPress={() => {
              Actions.pop();
            }}>
            <Calendar fill="#fff" width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtnColumn}
            onPress={() => {
              Actions.pop();
            }}>
            <Bell fill="#fff" width={32} height={32} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
