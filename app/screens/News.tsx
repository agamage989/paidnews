import React from 'react';
import {Text, ScrollView, View, StyleSheet} from 'react-native';

const NewsPage = () => {
  return (
    <ScrollView
      nestedScrollEnabled
      style={style.scrollViewMain}
      contentContainerStyle={style.scrollViewContainer}>
      <View style={style.availableNewsHeader}>
        <View style={style.availableNewsTitle}>
          <Text style={style.availableNewsTitleText}>Top News</Text>
        </View>
      </View>
      <View style={style.divider} />
      <ScrollView horizontal style={{marginVertical: 20}}>
        <View />
      </ScrollView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollViewMain: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    padding: 10,
    paddingHorizontal: 20,
  },
  scrollViewContainer: {
    paddingBottom: 200,
  },
  availableNewsHeader: {flex: 3, flexDirection: 'row'},
  availableNewsTitle: {flex: 2, flexDirection: 'column'},
  availableNewsTitleText: {color: '#fff', fontWeight: 'bold', fontSize: 24},
  myNewsBtnContainer: {
    flex: 1.5,
    flexDirection: 'column',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  myNewsBtn: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#353535',
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'center',
  },
  myNewsBtnText: {
    color: '#ffd119',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  rewardDescription: {flex: 1, flexDirection: 'row', marginVertical: 20},
  rewardDescText: {color: '#fff', fontSize: 14, lineHeight: 18},
  divider: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: '#303030',
    borderWidth: 1,
  },
});

export default NewsPage;
