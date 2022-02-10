import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw'
});

export const ButtonContainer = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  gridTemplateColumns: '1fr 1fr 1fr',
  width: '60vw',
  mt: '5rem',
  gap: '1rem'
});