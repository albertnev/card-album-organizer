export const pageSides = {
  left: "left",
  right: "right",
};

export type PageSides = (typeof pageSides)[keyof typeof pageSides];
