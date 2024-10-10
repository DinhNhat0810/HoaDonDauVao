import ListDanhMuc from "../components/ListDanhMuc";

export default function HoaDonDauVao() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Danh mục nhà khách hàng</h2>
      <ListDanhMuc fileName="Danh mục khách hàng" loaiHD="2" />
    </div>
  );
}
