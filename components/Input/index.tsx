import { BigField, SmallField } from './styles';
import { Props } from './types';

const Input = ({
  type = 'text',
  variant = 'small',
  name,
  value,
  required,
  placeholder,
  className,
  onChange,
}: Props) => {
  return variant === 'small' ? (
    <SmallField
      type={type}
      name={name}
      value={value}
      required={required}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  ) : (
    <BigField
      name={name}
      value={value}
      required={required}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      rows={3}
    />
  );
};

export default Input;
