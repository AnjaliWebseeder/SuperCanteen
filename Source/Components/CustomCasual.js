import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { Height, Width } from '../constants';
import FastImage from 'react-native-fast-image';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomCasual = ({
  data = [],
  cardWidth,
  cardHeight,
  cardRadius,
  paddingHorizontal = Width(20),
  borderWidth,
  resizeMode,
  cardStyle,
  containerStyle
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingFirstImage, setLoadingFirstImage] = useState(true);
  const flatListRef = useRef();

  const width = cardWidth || SCREEN_WIDTH - Width(40);
  const height = cardHeight || Height(150);
  const radius = cardRadius || Width(14);

  // 1. Fix for URL normalization
  const normalizeUri = (uri) => {
    if (!uri) return null;
    
    // Handle cases where URLs might have double slashes or malformed paths
    let normalized = uri;
    
    // Fix double slashes after domain
    normalized = normalized.replace(/(https?:\/\/[^/]+)\/(\/+)/, '$1/');
    
    // Remove any remaining double slashes in path
    normalized = normalized.replace(/([^:]\/)\/+/g, '$1');
    
    // Ensure proper protocol
    if (!normalized.startsWith('http')) {
      normalized = `https://${normalized}`;
    }
    
    return normalized;
  };

  // 2. Preload first image when data changes
  useEffect(() => {
    if (data.length > 0) {
      const firstImage = data[0];
      let firstImageUri = '';
      
      if (typeof firstImage === 'string') {
        firstImageUri = firstImage;
      } else if (firstImage?.image) {
        firstImageUri = typeof firstImage.image === 'string' 
          ? firstImage.image 
          : firstImage.image.uri;
      }
      
      if (firstImageUri) {
        const normalizedUri = normalizeUri(firstImageUri);
        console.log('Preloading image:', normalizedUri);
        
        setLoadingFirstImage(true);
        FastImage.preload([{
          uri: normalizedUri,
          priority: FastImage.priority.high
        }]);
        
        // Small timeout to ensure preload completes
        setTimeout(() => setLoadingFirstImage(false), 100);
      }
    }
  }, [data]);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewConfigRef = useRef({ 
    viewAreaCoveragePercentThreshold: 50,
    minimumViewTime: 300
  });

  const renderItem = ({ item, index }) => {
    // 3. Enhanced source determination with fallbacks
    let source = null;
    let uri = '';
    
    if (typeof item === 'string') {
      uri = item;
    } else if (item?.image) {
      uri = typeof item.image === 'string' ? item.image : item.image.uri;
    } else if (item?.uri) {
      uri = item.uri;
    }
    
    if (uri) {
      source = { uri: normalizeUri(uri) };
    } else if (typeof item === 'number') {
      source = item; // Local require() images
    }

    // 4. Special handling for first image
    if (index === 0 && loadingFirstImage) {
      return (
        <View style={[
          styles.card,
          { 
            width, 
            height,
            borderRadius: radius,
            justifyContent: 'center',
            alignItems: 'center'
          }
        ]}>
          <ActivityIndicator size="small" color="#2E6074" />
        </View>
      );
    }

    return (
      <View style={[
        styles.card,
        { 
          width, 
          borderRadius: radius, 
          borderWidth: borderWidth ?? 1,
          borderColor: '#E3E3E3',
          ...cardStyle 
        }
      ]}>
        {source ? (
          <FastImage
            source={source}
            style={{
              width: '100%',
              height,
              borderRadius: radius,
              resizeMode: resizeMode || 'cover'
            }}
            onError={(error) => {
              console.warn('Image load error:', {
                error: error.nativeEvent.error,
                uri: source.uri,
                index
              });
            }}
            onLoadStart={() => console.log('Load start:', index)}
            onLoadEnd={() => console.log('Load end:', index)}
            priority={index === 0 ? FastImage.priority.high : FastImage.priority.normal}
            fallback={true} // Important for Android
          />
        ) : (
          <View style={{ 
            width: '100%', 
            height, 
            backgroundColor: '#F0F0F0',
            borderRadius: radius,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Placeholder content */}
          </View>
        )}
      </View>
    );
  };

  // 5. FlatList optimization props
  const flatListProps = {
    ref: flatListRef,
    data,
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    keyExtractor: (item, index) => item.id?.toString() || index.toString(),
    snapToAlignment: 'center',
    decelerationRate: 'fast',
    contentContainerStyle: { paddingHorizontal },
    renderItem,
    onViewableItemsChanged,
    viewabilityConfig: viewConfigRef.current,
    initialNumToRender: 3,
    maxToRenderPerBatch: 5,
    windowSize: 5,
    removeClippedSubviews: false, // Important for first image rendering
    updateCellsBatchingPeriod: 100,
    initialScrollIndex: 0
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList {...flatListProps} />
      
      {data.length > 1 && (
        <View style={styles.pagination}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: index === currentIndex ? '#2E6074' : '#FFFFFF',
                  width: index === currentIndex ? Width(14) : Width(9),
                }
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Height(12),
    position: 'relative'
  },
  card: {
    marginRight: Width(12),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: '#FFF',
    overflow: 'hidden' // Important for borderRadius
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Height(18),
    position: 'absolute',
    bottom: Height(10),
    left: 0,
    right: 0,
  },
  dot: {
    width: Width(9),
    height: Width(9),
    borderRadius: Width(10),
    marginHorizontal: Width(2),
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },
});

export default CustomCasual;