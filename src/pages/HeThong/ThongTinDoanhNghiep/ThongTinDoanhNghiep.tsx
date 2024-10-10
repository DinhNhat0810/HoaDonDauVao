import React, { useContext, useEffect, useState } from "react";
import EditInfo from "./EditInfo";
import { GetThongTinDanhNghiep } from "../../../services/hethong";
import { AppContext } from "../../../contexts/app.context";
import { isEmpty } from "lodash";
import CustomLoading from "../../../components/CustomLoading";

export default function ThongTinDoanhNghiep() {
  const [data, setData] = useState<any>(null);
  const { mst } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    if (mst) {
      const res = await GetThongTinDanhNghiep({ madv: mst });
      if (!isEmpty(res)) {
        setData(res[0]);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Thông tin doanh nghiệp</h2>

      {loading && <CustomLoading />}

      <EditInfo data={data} />
    </div>
  );
}
