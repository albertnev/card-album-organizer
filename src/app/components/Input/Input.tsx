import { clsx } from "clsx";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (text: string) => void;
  variant?: "normal" | "phantom";
}

const Input = ({
  className,
  onChange,
  variant = "normal",
  ...rest
}: InputProps) => {
  return (
    <input
      className={clsx(className, {
        "focus:outline-none border-b-2 p-0 w-16": variant === "phantom",
        "input input-bordered w-full max-w-xs": variant === "normal",
      })}
      {...rest}
      onChange={({ target: { value } }) => {
        onChange(value);
      }}
    />
  );
};

export default Input;
