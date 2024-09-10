import { useQuery } from "@tanstack/react-query";
import CustomBtn from "../../../../components/CustomBtn";
import { Thongtintainguyen } from "../../../../services/dashboard";

export default function ThongTinTaiNguyen() {
  // const { data, refetch, isLoading } = useQuery({
  //   queryKey: ["tttn"],
  //   queryFn: () => {
  //     return Thongtintainguyen({
  //       mstnban: "0103930279-999",
  //     });
  //   },
  // });

  const data = [
    {
      title: "Hóa đơn đã mua",
      value: "2.000.000",
    },
    {
      title: "Hóa đơn đã sử dụng",
      value: "2.000.000",
    },
    {
      title: "Hóa đơn còn lại",
      value: "2.000.000",
    },
  ];

  return (
    <div className="p-4 rounded-lg shadow-custom">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Thông tin tài nguyên</h2>
        <CustomBtn title="Mua thêm" />
      </div>
      <div className="mt-5 flex justify-between px-6">
        {data.map((item, index) => (
          <div key={index} className="pl-3 border-l-[3px] border-l-[#e2e2e7]">
            <p className="text-[#505052]">{item.title}</p>
            <p className="text-3xl text-[#505052] font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
