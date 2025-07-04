import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomAuthButton from '../../Components/CustomAuthButton';
import { COLORS, Width } from '../../constants';
import { styles } from './styles';

const BottomPurchaseBar = ({
  onSharePress,
  onAddToCart,
  onBuyNow,
  addToCartLoading,
  selectionError,
}) => {
  const isDisabled = selectionError;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={onSharePress}>
        <FontAwesome name="share-alt" size={20} color="#2E6074" />
      </TouchableOpacity>

      <CustomAuthButton
        width={Width(114)}
        title="Add to Cart"
        onPress={!isDisabled ? onAddToCart : null}
        backgroundColor={isDisabled ? '#F4F8FB' : '#FFFFFF'}
        br={10}
        borderWidth={isDisabled ? 0 : 1}
        borderColor="#2E6074"
       textStyle={[
          styles.buyNowText,
          { color: isDisabled ? '#999' :COLORS.green ,  fontFamily: isDisabled ? 'Inter-Regular' : 'Inter-Bold'}
        ]}
        marginLeft={Width(20)}
        loading={addToCartLoading}
        loadingColor={COLORS.green}
        disabled={isDisabled}
        buttonStyle={{elevation: isDisabled ?  0 : 3}}
      />

      <CustomAuthButton
        width={Width(114)}
        title="Buy Now"
        onPress={!isDisabled ? onBuyNow : null}
         backgroundColor={isDisabled ? '#F4F8FB' : COLORS.green}
        br={10}
           borderWidth={isDisabled ? 0 : 1}
        borderColor="#2E6074"
        textStyle={[
          styles.buyNowText,
          { color: isDisabled ? '#999' : '#fff' ,    fontFamily: isDisabled ? 'Inter-Regular' : 'Inter-Bold'}
        ]}
         buttonStyle={{elevation: isDisabled ?  0 : 3}}
        disabled={isDisabled}
      />
    </View>
  );
};


export default BottomPurchaseBar;


