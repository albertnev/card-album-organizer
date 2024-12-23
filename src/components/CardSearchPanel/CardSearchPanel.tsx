import { useEffect, useState } from "react";
import { LuInfo } from "react-icons/lu";
import { useDebounce } from "use-debounce";

import { Input } from "../Input";
import { Toggle } from "../Toggle";

import { getAlbumSettings } from "@/redux/features/album/selectors";
import { setCardResults } from "@/redux/features/card/cardSlice";
import {
  setSearchIsLoading,
  setSearchIsRelative,
} from "@/redux/features/search/searchSlice";
import { getSearchSettings } from "@/redux/features/search/selectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCardPosition } from "@/utils/getCardPosition";

const CardSearchPanel = () => {
  const dispatch = useAppDispatch();
  const { cols, rows } = useAppSelector(getAlbumSettings);
  const { relativeSearch } = useAppSelector(getSearchSettings);

  const [searchCardNumber, setSearchCardNumber] = useState(0);
  const [debouncedSearchCardNumber] = useDebounce(searchCardNumber, 1000);

  const handleOnChange = (text: string) => {
    dispatch(setSearchIsLoading(true));
    setSearchCardNumber(Number.parseInt(text));
  };

  useEffect(() => {
    const newCardParams = getCardPosition(
      debouncedSearchCardNumber,
      rows * cols,
    );
    dispatch(setCardResults(newCardParams));
    dispatch(setSearchIsLoading(false));
  }, [debouncedSearchCardNumber, cols, rows, dispatch]);

  return (
    <div className="my-4 stats stats-horizontal shadow overflow-visible">
      <div className="stat">
        <div className="stat-title">Card number</div>
        <div className="stat-value flex gap-1">
          # <Input type="number" variant="phantom" onChange={handleOnChange} />
        </div>
      </div>
      <div className="stat overflow-visible">
        <div
          className="tooltip tooltip-top md:tooltip-right"
          data-tip="Get page turns relative to where you are (your last search)."
        >
          <div className="stat-title">
            Relative <LuInfo className="inline-block" />
          </div>
        </div>
        <div className="stat-value flex gap-1">
          <Toggle
            defaultChecked={relativeSearch}
            onChange={(isChecked) => {
              dispatch(setSearchIsRelative(isChecked));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardSearchPanel;
