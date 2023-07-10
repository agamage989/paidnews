import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import {DateTime} from 'luxon';
import {Articles} from '../../redux/model/Articles';

export const NewsListItem = (props: any) => {
  const {article} = props || {};
  const {source, author, title, description, url, urlToImage, publishedAt} =
    (article as Articles) || {};
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.canOpenURL(url).then(() => {
          Linking.openURL(url);
        });
      }}
      style={style.articleItem}>
      <Image
        source={{uri: urlToImage}}
        resizeMode="cover"
        style={style.image}
      />
      <View style={style.articleContent}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.desc}>{description}</Text>
        <Text style={style.author}>{`By ${author} - ${source.name}`}</Text>
        <Text style={style.time}>
          {`${DateTime.fromISO(publishedAt).toFormat('dd LLL yyyy')}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  articleItem: {
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {width: '100%', height: 225},
  articleContent: {
    width: '100%',
    minHeight: 100,
    padding: 10,
  },
  title: {color: '#000', fontSize: 24, fontWeight: 'bold'},
  desc: {color: '#444', fontSize: 16, lineHeight: 20},
  author: {color: '#000', fontSize: 14, marginTop: 14},
  time: {color: '#222', fontSize: 12, marginTop: 5},
});
