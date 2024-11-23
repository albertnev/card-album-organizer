interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (isChecked: boolean) => void;
}

const Toggle = ({ onChange, ...rest }: ToggleProps) => {
  return (
    <input
      className="toggle"
      type="checkbox"
      {...rest}
      onChange={({ target: { checked } }) => {
        onChange(checked);
      }}
    />
  );
};

export default Toggle;
