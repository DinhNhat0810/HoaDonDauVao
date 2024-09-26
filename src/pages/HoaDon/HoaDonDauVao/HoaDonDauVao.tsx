import ListInvoice from "../components/ListInvoice";
import ListInvoice1 from "../components/ListInvoice1";

export default function HoaDonDauVao() {
  return (
    <ListInvoice1
      title="Danh sách hóa đơn đầu vào"
      typeInvoice="hddt"
      type="purchase"
    />
  );
}
