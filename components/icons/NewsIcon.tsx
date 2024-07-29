import { BottomTabProps } from '@/utils/types';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const NewsIcon = (props: BottomTabProps) => (
  <Svg width={17} height={14} fill="none" {...props}>
    <Path
      stroke={props.focused || '#71719D'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="M6.971 4h6m-6 3h1.875m4.125 0h-1.875M6.97 10h1.875m4.125 0h-1.875M4.346 3.625h-.75c-1.414 0-2.121 0-2.56.44-.44.439-.44 1.146-.44 2.56V11.5a1.875 1.875 0 0 0 3.75 0V3.625Z"
    />
    <Path
      stroke={props.focused || '#71719D'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="M11.096.625h-3.75c-.698 0-1.046 0-1.332.077a2.25 2.25 0 0 0-1.591 1.59c-.077.287-.077.636-.077 1.333V11.5c0 1.036-.84 1.875-1.875 1.875h8.625c2.121 0 3.182 0 3.84-.659.66-.659.66-1.72.66-3.841v-3.75c0-2.121 0-3.182-.66-3.841-.658-.659-1.719-.659-3.84-.659Z"
    />
  </Svg>
);
export default NewsIcon;
