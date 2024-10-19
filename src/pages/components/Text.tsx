import styled from '@emotion/styled';

export type TextProps = {
  color?: string;
  fontSize?: string;
};

const Text = styled.span<TextProps>`
  font-family: 'Poppins', sans-serif;
  transition:
    color 0.2s ease,
    font-size 0.2s ease;
  color: ${({ color }) => color || '#333333'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
`;

export default Text;
