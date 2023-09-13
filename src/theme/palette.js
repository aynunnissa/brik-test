// Add more custom colors here, ex: secondary, neutral, etc if needed
const PRIMARY = {
  main: '#EE4D2D',
};

const SECONDARY = {
  main: '#FFFFFF',
};

const NEUTRAL = {
  light: '#CCCCCC',
  main: '#B3B3B3',
  dark: '#8F8F8F',
};

const ERROR = {
  main: '#EE2C4A',
};

const SUCCESS = {
  main: '#30B566',
};

const WARNING = {
  main: '#F69113',
};

const TEXT = {
  primary: 'rgba(0,0,0,.87)',
  secondary: '#595959',
};

const BACKGROUND = {
  default: '#FEF6F5',
};

const palette = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  neutral: { ...NEUTRAL },
  error: { ...ERROR },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  text: { ...TEXT },
  background: { ...BACKGROUND },
};

export default palette;
