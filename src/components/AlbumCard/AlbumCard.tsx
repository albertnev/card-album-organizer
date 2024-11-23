import { clsx } from "clsx";

interface AlbumCardProps {
  isHighlighted: boolean;
  number?: number;
}

const AlbumCard = ({ isHighlighted, number }: AlbumCardProps) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center aspect-card lg:min-w-20 md:min-w-14 min-w-9 border-solid border-2 rounded-sm border-neutral-content/40",
        { "bg-neutral-content/40": isHighlighted },
      )}
    >
      {number && number > 0 ? (
        <span className="text-base-100/50">{number}</span>
      ) : null}
    </div>
  );
};

export default AlbumCard;
