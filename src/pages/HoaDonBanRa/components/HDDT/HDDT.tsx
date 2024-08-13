import {
  DownloadOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  InputRef,
  Popover,
  Space,
  Table,
  TableColumnType,
  TableProps,
} from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import dayjs from "dayjs";
import { isEmpty } from "lodash";
import { useMemo, useRef, useState } from "react";
import { convertToVnd, convertXmlToJson } from "../../../../libs/common";
import ExcelExport from "../../../../components/ExportExcel";
import CustomInput from "../../../../components/CustomInput";
import { RangePickerProps } from "antd/es/date-picker";
import https from "../../../../libs/https";
import JSZip from "jszip";
import SelectTemplateModal from "../../../../components/CustomModal/SelectTemplateModal";
import { useLocation } from "react-router-dom";

export default function HDDT({
  handleDownload,
  handleViewInvoice,
  ListData,
  handleOpenNotification,
  token,
}: {
  handleDownload: (values: any) => void;
  handleViewInvoice: (values: any) => void;
  ListData: any;
  handleOpenNotification: any;
  token: any;
}) {
  const [loading, setLoading] = useState(false);
  const [loadingChild, setLoadingChild] = useState<any>({});
  const [data, setData] = useState<any[]>([]);
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const [fileName, setFileName] = useState("");
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
  const location = useLocation();

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: any
  ) => {
    confirm();
    setSearchText(selectedKeys[0]?.trim());
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: any,
    data?: any
  ): TableColumnType<any> => {
    return {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        close,
      }) => (
        <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
          <Input
            ref={searchInput}
            placeholder={`Tìm kiếm`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Button
                type="primary"
                onClick={() =>
                  handleSearch(selectedKeys as string[], confirm, dataIndex)
                }
                icon={<SearchOutlined />}
                size="small"
              ></Button>
              <Button
                onClick={() => {
                  clearFilters && handleReset(clearFilters);
                  handleSearch(selectedKeys as string[], confirm, dataIndex);
                }}
                size="small"
                style={{
                  marginLeft: 8,
                }}
              >
                Reset
              </Button>
            </div>

            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              Đóng
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
      ),
      onFilter: (value, record) => {
        if (typeof record[dataIndex] === "object" && data) {
          return data.some((item: any) =>
            record[dataIndex][item.field]
              .toString()
              .trim()
              .toLowerCase()
              .includes((value as string)?.trim()?.toLowerCase())
          );
        } else {
          return record[dataIndex]
            .toString()
            .trim()
            .toLowerCase()
            .includes((value as string)?.trim()?.toLowerCase());
        }
      },
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) => {
        if (!isEmpty(data)) {
          return (
            <ListData
              fields={data?.map((item: any) => {
                return {
                  ...item,
                  value: text,
                };
              })}
            />
          );
        }

        return text;
      },
    };
  };

  const handleGetDataChild = async (values: any, stt: string) => {
    try {
      setLoadingChild((prev: any) => {
        return {
          ...prev,
          [stt]: true,
        };
      });
      const response: any = await https({
        baseURL: `https://hoadondientu.gdt.gov.vn:30000/query/invoices/export-xml?nbmst=${values.nbmst}&khhdon=${values.khhdon}&shdon=${values.shdon}&khmshdon=${values.khmshdon}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        responseType: "arraybuffer",
      });

      const blob = new Blob([response], { type: "application/zip" });

      const zip = new JSZip();
      zip.loadAsync(blob).then((zipFiles: any) => {
        zipFiles
          .file("invoice.xml")
          .async("text")
          .then((content: any) => {
            const dataJson: any = convertXmlToJson(content);

            const newData =
              dataJson["HDon"]["DLHDon"]["NDHDon"]["DSHHDVu"]["HHDVu"];

            const arr = Array.isArray(newData)
              ? newData
              : !isEmpty(newData)
              ? [newData]
              : [];

            const newChilds = arr.map((item: any, index: number) => ({
              key: index,
              TChat: item?.TChat,
              MHHDVu: item?.MHHDVu,
              THHDVu: item?.THHDVu,
              DVTinh: item?.DVTinh,
              SLuong: item?.SLuong,
              DGia: convertToVnd(item?.DGia),
              ThTien: convertToVnd(item?.ThTien),
              TSuat: item?.TSuat,
            }));

            setData((prev: any) =>
              prev.map((item: any) =>
                item?.thongTinHoaDon?.shdon === values.shdon &&
                item?.thongTinHoaDon?.khmshdon === values.khmshdon &&
                item?.thongTinHoaDon?.khhdon === values.khhdon &&
                item?.thongTinNguoiBan?.mst === values.nbmst
                  ? { ...item, childrens: newChilds }
                  : item
              )
            );
          });
      });
      setLoadingChild((prev: any) => {
        return {
          ...prev,
          [stt]: false,
        };
      });
    } catch (error) {
      console.log(error);
      setLoadingChild((prev: any) => {
        return {
          ...prev,
          [stt]: false,
        };
      });
    }
  };

  const columns: TableProps<any>["columns"] = useMemo(() => {
    return [
      {
        title: "STT",
        dataIndex: "key",
        render: (value: any) => value + 1,
      },
      {
        title: "Thao tác",
        dataIndex: "action",
        render: (_: any, record: any) => {
          return (
            <div>
              <Popover content={<p>Tải xuống</p>} trigger="hover">
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    cursor: "pointer",
                    color: "green",
                  }}
                  onClick={() => {
                    handleDownload({
                      nbmst: record?.thongTinNguoiBan?.mst,
                      khhdon: record?.thongTinHoaDon?.khhdon,
                      shdon: record?.thongTinHoaDon?.shdon,
                      khmshdon: record?.thongTinHoaDon?.khmshdon,
                    });
                  }}
                >
                  <DownloadOutlined />
                </div>
              </Popover>

              <Popover content={<p>Xem hóa đơn</p>} trigger="hover">
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    cursor: "pointer",
                    color: "#1890ff",
                  }}
                  onClick={() => {
                    handleViewInvoice({
                      nbmst: record?.thongTinNguoiBan?.mst,
                      khhdon: record?.thongTinHoaDon?.khhdon,
                      shdon: record?.thongTinHoaDon?.shdon,
                      khmshdon: record?.thongTinHoaDon?.khmshdon,
                    });
                  }}
                >
                  <EyeOutlined />
                </div>
              </Popover>
            </div>
          );
        },
      },
      {
        title: "Thông tin người bán",
        dataIndex: "thongTinNguoiBan",
        width: "15%",
        render: (value: any) => (
          <ListData
            fields={[
              {
                label: "MST",
                field: "mst",
                value: value,
              },
              {
                label: "Tên người bán",
                field: "nbten",
                value: value,
              },
              {
                label: "Địa chỉ người bán",
                field: "nbdchi",
                value: value,
              },
            ]}
          />
        ),
      },

      {
        title: "Thông tin hóa đơn",
        dataIndex: "thongTinHoaDon",
        filters: [
          {
            text: "89",
            value: "89",
          },
          {
            text: "87",
            value: "87",
          },
        ],
        width: "15%",
        ...getColumnSearchProps("thongTinHoaDon", [
          {
            label: "Tên hóa đơn",
            field: "thdon",
          },
          {
            label: "Mẫu số",
            field: "khmshdon",
          },
          {
            label: "Ký hiệu",
            field: "khhdon",
          },
          {
            label: "Số HĐ",
            field: "shdon",
          },
          {
            label: "Ngày lập",
            field: "ntao",
          },
        ]),
      },

      {
        title: "Ngày ký",
        dataIndex: "nky",
        width: "100px",
        ...getColumnSearchProps("nky"),
      },

      {
        title: "Ngày cấp mã",
        dataIndex: "ncma",
        width: "100px",
      },

      {
        title: "Thông tin người mua",
        dataIndex: "thongTinNguoiMua",
        width: "12%",
        ...getColumnSearchProps("thongTinNguoiMua", [
          {
            label: "MST",
            field: "nmmst",
          },
          {
            label: "Tên đơn vị",
            field: "nmten",
          },
        ]),
      },

      {
        title: "Tổng trước thuế",
        dataIndex: "tongTruocThue",
        width: "10%",
        ...getColumnSearchProps("tongTruocThue"),
      },

      {
        title: "Thuế suất",
        dataIndex: "thueSuat",
        width: "10%",
        render: (value: any) => (
          <ListData
            fields={[
              {
                label: "Thành tiền",
                field: "thtien",
                value: value,
                labelWidth: "76px",
              },
              {
                label: "Thuế suất",
                field: "tsuat",
                value: value,
                labelWidth: "76px",
              },
              {
                label: "Tiền thuế",
                field: "tthue",
                value: value,
                labelWidth: "76px",
              },
            ]}
          />
        ),
      },
      {
        title: "Tổng thuế",
        dataIndex: "tongThue",
      },
      {
        title: "Tổng thanh toán",
        dataIndex: "tongThanhToan",
        width: "10%",
      },

      {
        title: "Bằng chữ",
        dataIndex: "bangChu",
        width: "10%",
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const childrenTableColumns: TableProps<any>["columns"] = useMemo(() => {
    return [
      {
        title: "STT",
        dataIndex: "key",
        render: (value: any) => value + 1,
      },
      {
        title: "Tính chất",
        dataIndex: "TChat",
      },
      {
        title: "Mã hàng hoá",
        dataIndex: "MHHDVu",
      },
      {
        title: "Tên hàng hóa",
        dataIndex: "THHDVu",
      },

      {
        title: "Đơn vị tính",
        dataIndex: "DVTinh",
      },
      {
        title: "Số lượng",
        dataIndex: "SLuong",
        align: "right",
      },
      {
        title: "Đơn giá",
        dataIndex: "DGia",
        align: "right",
      },
      {
        title: "Thành tiền",
        dataIndex: "ThTien",
        align: "right",
      },
      {
        title: "Thuế suất",
        dataIndex: "TSuat",
        align: "right",
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleFinish = async (values: any) => {
    // const expries = localStorage.getItem("time");

    // if (expries && +expries - new Date().getTime() < 60 * 60 * 1000) {
    //   return;
    // }

    setLoading(true);
    try {
      if (!values.tungay || !values.denngay) {
        return;
      }

      if (values.tungay > values.denngay) {
        setLoading(false);
        handleOpenNotification({
          type: "error",
          message: "Lỗi",
          description: "Ngày bắt đầu không được lớn hơn ngày kết thúc",
        });
        return;
      }

      const oneMonthAfterTungay = dayjs(values.tungay)
        .add(1, "month")
        .subtract(1, "day")
        .endOf("day");
      if (dayjs(values.denngay).isAfter(oneMonthAfterTungay)) {
        setLoading(false);
        handleOpenNotification({
          type: "error",
          message: "Lỗi",
          description: "Khoảng thời gian tìm kiếm không được vượt quá 1 tháng",
        });

        return;
      }

      const response: any = await https({
        baseURL: `https://hoadondientu.gdt.gov.vn:30000/query/invoices/sold?sort=tdlap:desc,khmshdon:asc,shdon:desc&size=15&search=tdlap=ge=${dayjs(
          values.tungay
        ).format("DD/MM/YYYY")}T00:00:00;tdlap=le=${dayjs(
          values.denngay
        ).format("DD/MM/YYYY")}T23:59:59;ttxly==5`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      setFileName(
        `${dayjs(values.tungay).format("DD/MM/YYYY")}-${dayjs(
          values.denngay
        ).format("DD/MM/YYYY")}`
      );

      if (response.datas.length > 0 && response.datas) {
        setExpandedRowKeys([]);

        setData(
          response.datas?.map((item: any, index: number) => ({
            key: index,
            thongTinNguoiBan: {
              mst: item?.nbmst,
              nbten: item?.nbten,
              nbdchi: item?.nbdchi,
            },
            thongTinHoaDon: {
              thdon: item?.thdon,
              khmshdon: item?.khmshdon,
              khhdon: item?.khhdon,
              shdon: item?.shdon,
              ntao: dayjs(item?.ntao).format("DD/MM/YYYY HH:mm:ss"),
            },
            nky: dayjs(item?.nky).format("DD/MM/YYYY HH:mm:ss"),
            ncma: dayjs(item?.ncma).format("DD/MM/YYYY HH:mm:ss"),
            thongTinNguoiMua: {
              nmmst: item?.nmmst,
              nmten: item?.nmten,
              khhdon: item?.khhdon,
            },
            tongTruocThue: convertToVnd(item?.tgtcthue),
            thueSuat: {
              gttsuat: item?.thttltsuat[0]?.gttsuat,
              thtien: convertToVnd(item?.thttltsuat[0]?.thtien),
              tsuat: convertToVnd(item?.thttltsuat[0]?.tsuat),
              tthue: convertToVnd(item?.thttltsuat[0]?.tthue),
            },
            // tongThue: convertToVnd(item?.tgtthue),
            // tongThanhToan: convertToVnd(item?.tgtttbso),
            // tgtttbso: item?.tgtttbso,
            // bangChu: item?.tgtttbchu,
            // cksNguoiBan: item?.nbcks,
            // thttltsuat: item?.thttltsuat,
            // msttcgp: item?.msttcgp,
            // mtdtchieu: item?.mtdtchieu,
            // mhdon: item?.mhdon,
            // thttlphi: item?.thttlphi,
            // shdgoc: item?.shdgoc,
            // tdlhdgoc: item?.tdlhdgoc,
            // khmshdgoc: item?.khmshdgoc,
            // khhdgoc: item?.khhdgoc,
          }))
        );
      } else {
        setExpandedRowKeys([]);
        setData([]);
      }
      localStorage.setItem(
        "time",
        JSON.stringify(new Date().getTime() + 60 * 60 * 1000)
      );
      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Có lỗi xảy ra, vui lòng thử lại sau",
      });
    }
  };

  // const excelData = useMemo(() => {
  //   return data?.map((item, index) => {
  //     return {
  //       STT: (index + 1).toString(),
  //       "Thông tin người bán": `MST: ${item?.thongTinNguoiBan?.mst}\nTên người bán: ${item?.thongTinNguoiBan?.nbten}\nĐịa chỉ người bán: ${item?.thongTinNguoiBan?.nbdchi}`,
  //       "Thông tin hóa đơn": `Tên hóa đơn: ${item?.thongTinHoaDon?.thdon}\nKý hiệu mẫu số: ${item?.thongTinHoaDon?.khmshdon}\nKý hiệu hóa đơn: ${item?.thongTinHoaDon?.khhdon}\nSố hóa đơn: ${item?.thongTinHoaDon?.shdon}\nNgày lập: ${item?.thongTinHoaDon?.ntao}`,
  //       "Ngày ký": item?.nky,
  //       "Ngày cấp mã": item?.ncma,
  //       "Thông tin người mua": `MST: ${item?.thongTinNguoiMua?.nmmst}\nTên đơn vị: ${item?.thongTinNguoiMua?.nmten}`,
  //       "Tổng trước thuế": item?.tongTruocThue?.toString(),
  //       "Thuế suất": `Thành tiền: ${item?.thueSuat?.thtien}\nThuế suất: ${item?.thueSuat?.tsuat}\nTiền thuế: ${item?.thueSuat?.tthue}`,
  //       "Tổng thuế": item?.tongThue?.toString(),
  //       "Tổng thanh toán": item?.tongThanhToan?.toString(),
  //       "Bằng chữ": item?.bangChu,
  //     };
  //   });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  const disabledDate: RangePickerProps["disabledDate"] = useMemo(() => {
    return (current, tuNgay: any) => {
      return (
        current &&
        tuNgay &&
        (current < dayjs(tuNgay).startOf("day") ||
          current >
            dayjs(tuNgay).add(1, "month").subtract(1, "day").endOf("day"))
      );
    };
  }, []);

  return (
    <>
      <Form
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "16px",
        }}
        onFinish={(values) => {
          handleFinish(values);
        }}
        form={form}
      >
        <CustomInput
          labelHorizontal="Từ ngày"
          name="tungay"
          placeholder="Từ ngày"
          size="large"
          configBoderRadius={4}
          type="date"
          rules={[{ required: true, message: "Vui lòng chọn ngày" }]}
          formItemStyle={{}}
          format={{
            format: "DD-MM-YYYY",
            type: "mask",
          }}
        />

        <CustomInput
          labelHorizontal="Đến ngày"
          name="denngay"
          placeholder="Đến ngày"
          size="large"
          configBoderRadius={4}
          type="date"
          rules={[{ required: true, message: "Vui lòng chọn ngày" }]}
          formItemStyle={{
            marginLeft: "8px",
          }}
          disabledDate={(data: any) =>
            disabledDate(data, form.getFieldValue("tungay"))
          }
          format={{
            format: "DD-MM-YYYY",
            type: "mask",
          }}
        />

        <Form.Item
          style={{
            marginLeft: "8px",
          }}
        >
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 4,
              },
            }}
          >
            <Button htmlType="submit" type="primary">
              Lấy dữ liệu
            </Button>
          </ConfigProvider>
        </Form.Item>

        <Form.Item
          style={{
            marginLeft: "8px",
          }}
        >
          <SelectTemplateModal data={data} fileName={fileName} type="soldout" />
        </Form.Item>
      </Form>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#001529d4",
              headerColor: "#fff",
              controlItemBgHover: "#fff",
              headerBorderRadius: 4,
              padding: 8,
              borderColor: "#d5d5d5",
            },
          },
        }}
      >
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          bordered
          expandable={{
            defaultExpandAllRows: true,
            expandedRowRender: (record) => {
              return (
                <ConfigProvider
                  theme={{
                    components: {
                      Table: {
                        headerBg: "#001529d4",
                        headerColor: "#fff",
                        controlItemBgHover: "#fff",
                        headerBorderRadius: 4,
                        padding: 8,
                        colorBgContainer: "#d5d5d559",
                      },
                    },
                  }}
                >
                  <Table
                    loading={loadingChild[record.key]}
                    columns={childrenTableColumns}
                    dataSource={record.childrens || []}
                    pagination={false}
                    rowKey={(record) => record?.key}
                    bordered
                  />
                </ConfigProvider>
              );
            },
            onExpand: async (expanded, record) => {
              if (expanded) {
                handleGetDataChild(
                  {
                    nbmst: record?.thongTinNguoiBan?.mst,
                    khhdon: record?.thongTinHoaDon?.khhdon,
                    shdon: record?.thongTinHoaDon?.shdon,
                    khmshdon: record?.thongTinHoaDon?.khmshdon,
                  },
                  record?.key
                );
                setExpandedRowKeys((prev) => {
                  return [...prev, record.key];
                });
              } else {
                setExpandedRowKeys((prev) => {
                  return prev.filter((item) => item !== record.key);
                });
              }
            },
            expandedRowKeys: expandedRowKeys,
          }}
        />
      </ConfigProvider>
    </>
  );
}
