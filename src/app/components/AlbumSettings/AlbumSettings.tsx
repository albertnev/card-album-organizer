"use client";

import range from "lodash.range";

import { DiceButton } from "../DiceButton";

import {
  setAlbumCols,
  setAlbumRows,
} from "@/app/redux/features/album/albumSlice";
import { getAlbumSettings } from "@/app/redux/features/album/selectors";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

const AlbumSettings = () => {
  const settings = useAppSelector(getAlbumSettings);
  const dispatch = useAppDispatch();

  const allowedCols = range(2, 7);
  const allowedRows = range(2, 7);

  return (
    <div>
      <div className="stats stats-vertical md:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Page columns</div>
          <div className="stat-value flex gap-1">
            {allowedCols.map((diceNumber) => (
              <DiceButton
                key={`settings-cols-${diceNumber}`}
                isChecked={diceNumber === settings.cols}
                number={diceNumber}
                onClick={() => {
                  dispatch(setAlbumCols(diceNumber));
                }}
              />
            ))}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Page rows</div>
          <div className="stat-value flex gap-1">
            {allowedRows.map((diceNumber) => (
              <DiceButton
                key={`settings-rows-${diceNumber}`}
                isChecked={diceNumber === settings.rows}
                number={diceNumber}
                onClick={() => {
                  dispatch(setAlbumRows(diceNumber));
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumSettings;
