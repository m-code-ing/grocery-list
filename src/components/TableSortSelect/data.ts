import { Data } from "./types";

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "Row id",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

export const rows = [
  createData(0, "Cupcake", 305, 3.7, 67, 4.3),
  createData(1, "Donut", 452, 25.0, 51, 4.9),
  createData(2, "Eclair", 262, 16.0, 24, 6.0),
  createData(3, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(4, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(5, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(6, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(7, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(8, "KitKat", 518, 26.0, 65, 7.0),
  createData(9, "Lollipop", 392, 0.2, 98, 0.0),
  createData(10, "Marshmallow", 318, 0, 81, 2.0),
  createData(11, "Nougat", 360, 19.0, 9, 37.0),
  createData(12, "Oreo", 437, 18.0, 63, 4.0),
];
