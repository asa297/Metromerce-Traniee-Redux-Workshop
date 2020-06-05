import { CustomeTheme } from './theme'
/// <reference types="react-scripts" />

declare module 'styled-components' {
  interface DefaultTheme extends CustomeTheme {}
}
