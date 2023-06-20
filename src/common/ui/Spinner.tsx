import { FC } from "react";
import { Dna, Oval } from "react-loader-spinner";

interface SpinnerProps {
  size?: number;
  color?: string;
  sencondaryColor?: string;
}

const Spinner: FC<SpinnerProps> = ({
  size = 40,
  color = "#4fa94d",
  sencondaryColor = "#4fa94d",
}) => {
  return (
    <Oval
      height={size}
      width={size}
      color={color}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={sencondaryColor}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Spinner;
