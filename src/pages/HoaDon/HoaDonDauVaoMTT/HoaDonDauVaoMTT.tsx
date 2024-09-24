import ListInvoice from "../components/ListInvoice";

export default function HoaDonDauVaoMTT() {
  return (
    <ListInvoice
      title="Danh sách hóa đơn đầu vào máy tính tiền"
      typeInvoice="hdmtt"
      type="purchase"
    />
  );
}
