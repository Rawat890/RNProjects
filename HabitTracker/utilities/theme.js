// theme.js

const theme = {
  colors: {
    primary: '#1E90FF',
    secondary: '#FF6B6B',
    success: '#28A745',
    green: '#28A745',
    danger: '#DC3545',
    red: '#DC3545',
    warning: '#FFC107',
    info: '#17A2B8',
    blue: '#17A2B8',
    light: '#F8F9FA',
    dark: '#343A40',
    background: '#FFFFFF',
    surface: '#F2F2F2',
    textPrimary: '#212529',
    textSecondary: '#6C757D',
    lightGreen: '#6C757D',
    border: '#E0E0E0',
    muted: '#ADB5BD',
  },

  fontSizes: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },

  fontWeights: {
    thin: '100',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },

  spacing: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 40,
  },

  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    round: 9999,
  },

  zIndex: {
    background: 0,
    content: 10,
    dropdown: 20,
    overlay: 30,
    modal: 40,
    toast: 50,
    tooltip: 60,
  },

  shadow: {
    light: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    heavy: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 6,
    },
  },
};

export default theme;
