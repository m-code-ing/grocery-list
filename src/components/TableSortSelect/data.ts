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
    label: "Item",
  },
  {
    id: "category",
    numeric: true,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "lastDateOfPurchase",
    numeric: true,
    disablePadding: false,
    label: "Last Date of Purchase",
  },
];

function createData(
  id: number,
  name: string,
  category: string,
  lastDateOfPurchase: string
): Data {
  return {
    id,
    name,
    category,
    lastDateOfPurchase,
  };
}

const randomDate = new Date(
  Math.floor(Math.random() * 1000 * Math.random() * 1000)
).toDateString();

export const rows = [
  createData(0, "Cupcake", "Category1", randomDate),
  createData(1, "Donut", "Category2", randomDate),
  createData(2, "Eclair", "Category3", randomDate),
  createData(3, "Frozen yoghurt", "Category4", randomDate),
  createData(4, "Gingerbread", "Category5", randomDate),
  createData(5, "Honeycomb", "Category6", randomDate),
  createData(6, "Ice cream sandwich", "Category7", randomDate),
];
