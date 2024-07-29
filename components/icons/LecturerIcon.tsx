import * as React from 'react';
import Svg, { SvgProps, Rect, Path, Circle } from 'react-native-svg';
const LecturerIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Rect
      width={24.067}
      height={24.067}
      x={0.686}
      y={0.466}
      fill="#E9ECFB"
      rx={12.034}
    />
    <Rect
      width={24.067}
      height={24.067}
      x={0.686}
      y={0.466}
      stroke="#BEC7F4"
      strokeWidth={0.383}
      rx={12.034}
    />
    <Path
      stroke="#677CE4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.05}
      d="M13.42 14.6c-1.604 4.2-6.096 0-7.7 4.2M15.17 14.6h1.05c1.65 0 2.476 0 2.988-.513.513-.512.513-1.337.513-2.987V9.7c0-1.65 0-2.475-.513-2.987-.512-.513-1.337-.513-2.987-.513h-2.8c-1.65 0-2.475 0-2.987.513-.435.434-.501 1.092-.511 2.287"
    />
    <Circle
      cx={9.57}
      cy={12.85}
      r={1.75}
      stroke="#677CE4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.05}
    />
    <Path
      stroke="#677CE4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.05}
      d="M12.72 9h4.2m0 2.8h-2.1"
    />
  </Svg>
);
export default LecturerIcon;
