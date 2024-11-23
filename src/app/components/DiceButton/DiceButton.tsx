import { type IconType } from "react-icons";
import {
  BsDice2,
  BsDice2Fill,
  BsDice3,
  BsDice3Fill,
  BsDice4,
  BsDice4Fill,
  BsDice5,
  BsDice5Fill,
  BsDice6,
  BsDice6Fill,
} from "react-icons/bs";
import { FaDiceD6 } from "react-icons/fa";

interface DiceButtonProps {
  isChecked: boolean;
  number: number;
  onClick: () => void;
}

const selectedDices: Record<number, IconType> = {
  2: BsDice2Fill,
  3: BsDice3Fill,
  4: BsDice4Fill,
  5: BsDice5Fill,
  6: BsDice6Fill,
};

const nonSelectedDices: Record<number, IconType> = {
  2: BsDice2,
  3: BsDice3,
  4: BsDice4,
  5: BsDice5,
  6: BsDice6,
};

const DiceButton = ({ isChecked, number, onClick }: DiceButtonProps) => {
  const DiceComponent = isChecked
    ? selectedDices[number]
    : nonSelectedDices[number];

  return (
    <button
      key={`settings-cols-${number}`}
      className="flex flex-col gap-2 items-center justify-center"
      type="button"
      onClick={onClick}
    >
      {DiceComponent ? <DiceComponent /> : <FaDiceD6 />}
    </button>
  );
};

export default DiceButton;
