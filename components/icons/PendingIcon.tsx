import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const PendingIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Circle cx={8.821} cy={9.063} r={8} stroke="#FF9D2E" strokeWidth={1.2} />
    <Path
      stroke="#FF9D2E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M8.815 11.462h.007"
    />
    <Path
      stroke="#FF9D2E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.821 9.063v-3.2"
    />
  </Svg>
);
export default PendingIcon;
