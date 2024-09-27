import { useQuery } from "@tanstack/react-query";
import CustomBtn from "../../../../components/CustomBtn";
import { Thongtintainguyen } from "../../../../services/dashboard";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../contexts/app.context";
import { Skeleton } from "antd";

export default function ThongTinTaiNguyen() {
  const { mst } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([
    {
      title: "Hóa đơn đã mua",
      value: 0,
    },
    {
      title: "Hóa đơn đã sử dụng",
      value: 0,
    },
    {
      title: "Hóa đơn còn lại",
      value: 0,
    },
  ]);

  const fetchData = async () => {
    if (mst) {
      setLoading(true);
      await Thongtintainguyen({
        madonvi: mst,
      })
        .then((res) => {
          setData([
            {
              title: "Hóa đơn đã mua",
              value: res?.SoluongDK || 0,
            },
            {
              title: "Hóa đơn đã sử dụng",
              value: res?.SLHDonSD || 0,
            },
            {
              title: "Hóa đơn còn lại",
              value: res?.SLConlai || 0,
            },
          ]);
          localStorage.setItem("SLHDCL", res?.SLConlai || "0");
        })
        .catch((error) => {
          console.error(error);
          localStorage.setItem("SLHDCL", "0");
        });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-4 rounded-lg shadow-custom">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Thông tin tài nguyên</h2>
        <CustomBtn title="Mua thêm" />
      </div>
      <div className="mt-5 flex justify-between px-6 ">
        {data.map((item, index) => {
          if (loading) {
            return (
              <div
                key={index}
                className="pl-3 border-l-[3px] border-l-[#e2e2e7]"
              >
                <Skeleton
                  title={false}
                  paragraph={{ rows: 2 }}
                  active
                  className="w-[150px] h-[50px]"
                />
              </div>
            );
          }

          return (
            <div key={index} className="pl-3 border-l-[3px] border-l-[#e2e2e7]">
              <p className="text-[#505052]">{item.title}</p>
              <p className="text-3xl text-[#505052] font-bold">
                {new Intl.NumberFormat("vi-VN").format(Number(item.value))}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
