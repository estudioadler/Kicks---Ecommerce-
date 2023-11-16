import React from 'react';

interface IButtonProps {
  onClick?: () => void;
  text?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: string;
  border?: boolean;
  disabled?: boolean;
  variant: 'Cinza4' | 'white';
}

export const Button = ({
  onClick,
  text,
  leftIcon,
  rightIcon,
  width,
  border,
  disabled,
  variant
}: IButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center py-2 px-4 rounded-lg gap-1 flex-shrink-0 mb-0 w-${width} ${
        border ? 'border' : '' // Adicionando a classe de borda condicional
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'} ${variant === 'Cinza4' ? 'bg-Cinza4 text-white' : 'bg-white text-Cinza4'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </button>
  );
};

