import { FC } from "react";

interface FormErrorProps {
  message: string;
  className?: string;
}

const FormError: FC<FormErrorProps> = ({ message, className = "" }) => {
  return (
    <div className={`text-red-500 my-2 font-medium text-sm ${className}`}>
      {message}
    </div>
  );
};

export default FormError;
