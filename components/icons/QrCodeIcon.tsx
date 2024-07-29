import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const QrCodeIcon = (props: SvgProps) => (
  <Svg width={59} height={58} fill="none" {...props}>
    <Circle cx={29.096} cy={29} r={28.5} fill="#677CE4" stroke="#EDEDF3" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.626}
      d="M18.096 25.586v-2.71A4.87 4.87 0 0 1 22.973 18h2.71M32.185 18h2.71a4.87 4.87 0 0 1 4.876 4.877v2.71M39.77 33.173v1.625a4.87 4.87 0 0 1-4.876 4.877h-1.626M25.682 39.675h-2.71a4.87 4.87 0 0 1-4.876-4.877v-2.71M34.352 26.128v5.419c0 2.168-1.083 3.251-3.25 3.251h-4.336c-2.167 0-3.251-1.084-3.251-3.251v-5.419c0-2.167 1.084-3.251 3.251-3.251h4.335c2.168 0 3.251 1.084 3.251 3.251ZM36.52 28.837H21.347"
    />
  </Svg>
);
export default QrCodeIcon;
