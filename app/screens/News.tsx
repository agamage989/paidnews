import React, {useEffect, useState} from 'react';
import {Text, TextInput, ScrollView, View, StyleSheet} from 'react-native';
import {Articles} from '../redux/model/Articles';
import {
  useLazyGetBreakingNewsQuery,
  useLazySearchNewsQuery,
} from '../redux/api';
import {EmptyCardsLoader} from '../components/EmptyCardsLoader';
import {NewsListItem} from '../components/NewsListItem';

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState<undefined | string>('');
  const [articles, setArticles] = useState<Articles[]>([]);
  const [searchArticles, result] = useLazySearchNewsQuery();
  const [getBreakingNews, breakingNewsResults] = useLazyGetBreakingNewsQuery();

  useEffect(() => {
    searchArticles({search: `${searchQuery}`}).then(res => {
      if (res.isSuccess) {
        setArticles(res.data?.articles);
      }
    });
  }, [searchQuery]);

  useEffect(() => {
    getBreakingNews({country: 'us'}).then(
      res => res.isSuccess && setArticles(res.data?.articles),
    );
  }, []);

  console.log('articles', articles);

  return (
    <>
      <ScrollView
        nestedScrollEnabled
        style={style.scrollViewMain}
        contentContainerStyle={style.scrollViewContainer}>
        <View>
          <Text style={style.availableNewsTitleText}>Search News</Text>
        </View>
        <View style={style.newsSearchQuery}>
          <TextInput
            value={searchQuery}
            onChangeText={(text: string) => setSearchQuery(text)}
            style={{color: '#000'}}
            placeholder="Search..."
            placeholderTextColor={'#444'}
          />
        </View>
        <View>{result.isLoading && <EmptyCardsLoader />}</View>
        <View>
          {!result.isLoading &&
            (articles || []).map(article => <NewsListItem article={article} />)}
        </View>
      </ScrollView>
    </>
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
    paddingTop: 85,
    paddingBottom: 500,
  },
  availableNewsHeader: {flex: 3, flexDirection: 'row'},
  availableNewsTitle: {flex: 2, flexDirection: 'column'},
  availableNewsTitleText: {color: '#fff', fontWeight: 'bold', fontSize: 24},
  newsSearchQuery: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});

export default NewsPage;
