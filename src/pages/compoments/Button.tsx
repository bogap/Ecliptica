import styled from '@emotion/styled';
import React from "react";

type ButtonProps = {
    size: 'small' | 'large';
    label: string;
    onClick?: () => void;
};

const Button = styled.button<ButtonProps>`
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: ${({ size }) => (size === 'small' ? '8px 12px' : '16px 24px')};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '18px')};
`;

const GreenButton: React.FC<ButtonProps> = ({ size, label, onClick }) => (
    <Button size={size} onClick={onClick} label={label}>
        {label}
    </Button>
);

export default GreenButton;
