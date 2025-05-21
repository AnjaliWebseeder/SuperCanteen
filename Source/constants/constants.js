// constants.js
import { Platform, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// Device dimensions
const { width, height } = Dimensions.get('window');

// Helper functions
export const Width = (value) => scale(value);
export const Height = (value) => verticalScale(value);
export const FontSize = (value) => moderateScale(value);
export const Padding = (value) => scale(value);
export const Margin = (value) => scale(value);

// COLORS
export const COLORS = {
  primary: '#3B82F6',
  secondary: '#6366F1',
  background: '#F9FAFB',
  text: '#111827',
  muted: '#6B7280',
  white: '#FFFFFF',
  black: '#000000',
  danger: '#EF4444',
  success: '#10B981',
  warning: '#F59E0B',
};

// FONT FAMILY
export const FONTS = {
  regular: 'Inter_24pt-Regular',
  medium: 'Inter_28pt-Medium',
  semiBold: 'Inter_28pt-SemiBold',
  bold: 'Inter_24pt-Bold',
};

// FONT SIZES
export const SIZES = {
  base: Width(8),
  small: FontSize(12),
  medium: FontSize(16),
  large: FontSize(20),
  xLarge: FontSize(28),
  xxLarge: FontSize(32),

  // Spacing
  padding: Padding(16),
  margin: Margin(16),

  // Heights
  headerHeight: Height(60),
  buttonHeight: Height(45),

  // Screen sizes
  screenWidth: width,
  screenHeight: height,
};
