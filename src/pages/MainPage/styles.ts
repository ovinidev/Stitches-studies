import {styled} from '../../styles/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
});

export const ButtonContainer = styled('div', {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  gridTemplateColumns: '1fr 1fr 1fr',
  width: '40rem',
  mt: '5rem',
  gap: '1rem',
});
