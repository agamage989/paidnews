import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

const ItemDetailPage = (props: any) => {
  const {state} = props.navigation;
  const {params} = state || {};
  const {article} = params || {};

  return (
    <ScrollView
      style={style.scrollViewMain}
      contentContainerStyle={style.scrollViewContainer}
    />
  );
};

const style = StyleSheet.create({
  scrollViewMain: {
    flex: 1,
    backgroundColor: '#1b1b1b',
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBGContainer: {flex: 0, maxHeight: 300, overflow: 'hidden'},
  contentContainer: {flex: 1, flexDirection: 'column', padding: 20},
  contentRow: {
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  contentText: {color: '#fff', marginRight: 10, fontSize: 16, lineHeight: 44},
});

export default ItemDetailPage;
