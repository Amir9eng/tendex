import * as React from 'react';
import Svg, { SvgProps, Rect, Circle, Path } from 'react-native-svg';
const InfoIcon = (props: SvgProps) => (
  <Svg width={68} height={68} fill="none" {...props}>
    <Rect width={67} height={67} x={0.5} y={0.5} fill="#FFF3E6" rx={33.5} />
    <Rect width={67} height={67} x={0.5} y={0.5} stroke="#FFE5C7" rx={33.5} />
    <Circle cx={34} cy={34} r={20} stroke="#FFB561" strokeWidth={3} />
    <Path
      stroke="#FFB561"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M33.984 40h.018"
    />
    <Path
      stroke="#FFB561"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M34 34v-8"
    />
  </Svg>
);
export default InfoIcon;
