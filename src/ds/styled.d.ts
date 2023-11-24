import { Color, Typography } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    typography: Typography;
  }
}
