import DataTable, { TableColumn } from "react-data-table-component";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { formatCurrency } from "../utils/utils";

interface DataRow {
  title: string;
  quantity: number;
  cost: number;
}

const CartSummaryTable = ({ cart }) => {
  const totalPrice = useSelector(
    (state: RootState) => state.counter.totalPrice
  );

  const data: DataRow[] = cart.map((item) => ({
    title: item.title,
    quantity: item.cartCount,
    cost: item.itemTotalPrice,
  }));

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Item Name",
      selector: (row) => row.title,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Cost",
      selector: (row) => row.cost,
      cell: (row) => formatCurrency(row.cost),
    },
  ];

  return (
    <div>
      {/* <DataTable columns={columns} data={data} /> */}
      <DataTable columns={columns} data={data} />
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        Total Cost: {formatCurrency(totalPrice)}
      </div>
    </div>
  );
};

export default CartSummaryTable;
