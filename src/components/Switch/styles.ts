import * as SwitchPrimitive from '@radix-ui/react-switch';
import {
  violet, mauve, blackA, whiteA,
} from '@radix-ui/colors';
import { styled } from '../../styles/stitches.config';

export const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$purple',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: '0 0 0 2px black' },
  '&[data-state="checked"]': { backgroundColor: '$primary' },
});

export const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

export const Flex = styled('div', { display: 'flex' });

export const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
});
