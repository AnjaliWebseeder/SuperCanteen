import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomAuthButton from '../../Components/CustomAuthButton';
import { COLORS, Width } from '../../constants';
import { styles } from './styles';

const BottomPurchaseBar = ({ onSharePress, onAddToCart, onBuyNow,addToCartLoading }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={onSharePress}>
        <FontAwesome name="share-alt" size={20} color="#2E6074" />
      </TouchableOpacity>

      <CustomAuthButton
        width={Width(114)}
        title="Add to Cart"
        onPress={onAddToCart}
        backgroundColor="#FFFFFF"
        br={10}
        borderWidth={1}
        borderColor="#2E6074"
        textStyle={styles.addToCartText}
        marginLeft={Width(20)}
        loading={addToCartLoading}
        loadingColor={COLORS.green}
      />

      <CustomAuthButton
        width={Width(114)}
        title="Buy Now"
        onPress={onBuyNow}
        backgroundColor="#2E6074"
        br={10}
        borderWidth={1}
        borderColor="#2E6074"
        textStyle={styles.buyNowText}
        
      />
    </View>
  );
};

export default BottomPurchaseBar;


