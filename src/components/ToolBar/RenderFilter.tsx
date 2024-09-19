import React, { useEffect, useMemo, useState } from "react";
import { HTHDO_Options, TTMST_Options } from "../../libs/constants";
import { Form, Popover, Tooltip } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { CaretDownOutlined } from "@ant-design/icons";
import CustomInput from "../CustomInput";
import CustomBtn from "../CustomBtn";
import dayjs from "dayjs";

const fileterOptions = [
  {
    label: "Trạng thái MST người bán",
    children: TTMST_Options,
    type: "square",
    value: "tthai",
    tooltip: true,
  },
  // {
  //   label: "Trạng thái hóa đơn",
  //   children: TTHD,
  //   type: "circle",
  //   value: "tthd",
  // },
  {
    label: "Hình thức hóa đơn",
    children: HTHDO_Options,
    type: "circle",
    value: "hthuc",
  },
];

export default function RenderFilter({
  handleFilter,
  setOpenFilter,
  rangeDate,
  setDataFilter,
  dataFilter,
  form,
  setActive,
  active,
}: {
  handleFilter: ({
    value,
    type,
    date,
  }: {
    value: string;
    type: string;
    date: any;
  }) => void;
  setOpenFilter: () => void;
  rangeDate?: any;
  setDataFilter: (data: any) => void;
  dataFilter: any;
  form: any;
  setActive: (data: any) => void;
  active: any;
}) {
  const [open, setOpen] = useState("");

  const disabledDate: RangePickerProps["disabledDate"] = useMemo(() => {
    const [start, end] = rangeDate.map((date: any) => dayjs(date).valueOf());
    return (current) => {
      // Convert dayjs object to time for comparison
      const currentTime = current.valueOf();
      // Disable dates outside of the range
      return currentTime < start || currentTime > end;
    };
  }, [rangeDate]);

  useEffect(() => {
    if (!dataFilter.date) {
      form.setFieldsValue({
        selectDate: [
          rangeDate[0] && dayjs(rangeDate[0].format("YYYY/MM/DD")),
          rangeDate[1] && dayjs(rangeDate[1].format("YYYY/MM/DD")),
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setOpenFilter]);

  const handleSubmit = () => {
    const newDate = form.getFieldValue("selectDate");

    handleFilter({
      value: dataFilter.value,
      type: dataFilter.type,
      date: newDate,
    });
    // setActive({
    //   tthai: {
    //     value: "",
    //   },
    //   tthd: {
    //     value: "",
    //   },
    //   hthuc: {
    //     value: "",
    //   },
    // });
    setDataFilter((prev: any) => ({
      ...prev,
      date: newDate,
    }));
    setOpenFilter();

    form.setFieldsValue({
      selectDate: newDate,
    });
  };

  return (
    <div className="w-60 py-2">
      {fileterOptions.map((option, index) => (
        <div
          key={index}
          className={`py-3 px-2 mb-3 cursor-pointer bg-[#F6F7F9] rounded-md`}
        >
          <Popover
            open={open === option.value ? true : open === "" ? false : false}
            onOpenChange={(visible) => {
              if (!visible) {
                setOpen("");
              } else {
                setOpen(option.value);
              }
            }}
            placement="bottomRight"
            content={
              <div className="w-60">
                {option.children?.map(
                  (child: any, i: number) =>
                    !child.hidden && (
                      <div
                        className={`flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-50 
                          ${
                            active[option.value].value === child.value &&
                            "bg-slate-200"
                          }
                        `}
                        key={i}
                        onClick={() => {
                          setDataFilter({
                            value: String(child.value),
                            type: option.value,
                          });
                          setOpen("");
                          setActive((prev: any) => {
                            const updatedKey = option.value;
                            const newValue = child.value;

                            const updatedState = Object.keys(prev).reduce(
                              (acc, key) => {
                                acc[key] = {
                                  value: key === updatedKey ? newValue : "",
                                };
                                return acc;
                              },
                              {} as any
                            );

                            return updatedState;
                          });
                        }}
                      >
                        {child.color && (
                          <div
                            className={`w-[20px] h-[20px] ${
                              option.type === "square"
                                ? "rounded-[4px]"
                                : "rounded-full"
                            }
                  `}
                            style={{ backgroundColor: child.color }}
                          ></div>
                        )}
                        <div className="flex-1 ml-1">
                          {option.tooltip ? (
                            <Tooltip title={child.desc}>
                              <span className="line-clamp-2">{child.desc}</span>
                            </Tooltip>
                          ) : (
                            <span>{child.label}</span>
                          )}
                        </div>
                      </div>
                    )
                )}
              </div>
            }
            trigger="click"
          >
            <div className="font-medium flex justify-between items-center px-2">
              <span className="">{option.label}</span>
              <CaretDownOutlined />
            </div>
          </Popover>
        </div>
      ))}

      <div>
        <p className="font-bold">Tùy chọn</p>
        <div className="flex justify-between mt-2 gap-2">
          <Form form={form}>
            <CustomInput
              placeholder="Chọn ngày"
              className="w-full"
              type="rangePicker"
              name="selectDate"
              configBoderRadius={4}
              disabledDate={disabledDate}
              format={"YYYY/MM/DD"}
            />
          </Form>
        </div>
      </div>

      <div className="flex justify-center">
        <CustomBtn title="Áp dụng" onClick={() => handleSubmit()} />
      </div>
    </div>
  );
}
