import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';

import {SCREENS} from './app/utilities/constants';
import {HeaderBar} from './app/components/HeaderBar';
import NewsPage from './app/screens/News';
import ItemDetailPage from './app/screens/ItemDetail';
import {HeaderTextBar} from './app/components/HeaderTextBar';

const App = (props: any) => (
  <Provider store={store}>
    <Router {...props}>
      <Stack
        {...props}
        key="root"
        navTransparent
        navigationBarStyle={styles.navBarStyle}>
        <Scene
          initial
          key={SCREENS.NEWS}
          component={NewsPage}
          navBar={() => (
            <HeaderBar {...props} title="Rewards" backButtonEnabled />
          )}
        />
        <Scene
          key={SCREENS.NEWS_DETAIL}
          component={ItemDetailPage}
          navBar={() => <HeaderTextBar {...props} />}
        />
      </Stack>
    </Router>
  </Provider>
);

const styles = StyleSheet.create({
  navBarStyle: {
    backgroundColor: '#fff',
    margin: 0,
    marginBottom: StatusBar.currentHeight,
  },
});

export default App;
