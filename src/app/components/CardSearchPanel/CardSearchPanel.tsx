import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { Input } from "../Input";
import { Toggle } from "../Toggle";

import { getAlbumSettings } from "@/app/redux/features/album/selectors";
import { setCardResults } from "@/app/redux/features/card/cardSlice";
import {
  setSearchIsLoading,
  setSearchIsRelative,
} from "@/app/redux/features/search/searchSlice";
import { getSearchSettings } from "@/app/redux/features/search/selectors";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { getCardPosition } from "@/app/utils/getCardPosition";

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
    <div className="my-4 stats stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title">Card number</div>
        <div className="stat-value flex gap-1">
          # <Input type="number" variant="phantom" onChange={handleOnChange} />
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">Relative</div>
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
