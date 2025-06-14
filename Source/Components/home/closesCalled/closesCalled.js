import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Ensure it's installed
import { styles } from './styles';
import FastImage from 'react-native-fast-image';

const WatchCard = ({ item, index,navigation }) => {
  return (
    <TouchableOpacity  onPress={() => {
                if (item.screen && navigation) {
                  navigation.navigate(item.screen, {title: item.label});
                }
              }} >
       <LinearGradient
      colors={['#D4E7F2', '#7B868C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.card}
    >
      <FastImage source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.cardFooter}>
        <Text style={styles.cardText} numberOfLines={1}>
          {item.label}
        </Text>
      </View>
    </LinearGradient>
    </TouchableOpacity>
   
  );
};

const ClosesCalled = ({ data, containerStyle,navigation ,listContentStyle }) => {
  return (
    <View style={[styles.wrapper,{...containerStyle}]}>
      <FastImage
        style={styles.background}
        source={require('../../../../assets/Background/SliderBg.png')}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Your Closet Called — It Wants These</Text>
      </View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <WatchCard navigation={navigation} item={item} />}
        contentContainerStyle={[styles.listContent,listContentStyle]}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ClosesCalled;



