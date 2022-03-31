import { InputHTMLAttributes } from 'react';

interface IInputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'placeholder' | 'style'
  > {}

export function Input({ type, placeholder, style }: IInputProps) {
  return <input type={type} placeholder={placeholder} style={style} />;
}
