import { Modal, Skeleton } from "antd";
import React, { memo, useEffect, useState } from "react";
import ErrorIcon from "../Icon/error";
import SuccessIcon from "../Icon/success";
import dayjs from "dayjs";
import CustomBtn from "../CustomBtn";
import DownloadIcon from "../Icon/download";
import { DownloadOutlined } from "@ant-design/icons";
import { HTHDO_Options, TTMST_Options } from "../../libs/constants";

interface PropsTrangThaiHD {
  style: any;
}

const TrangThaiMST = ({ style }: any): JSX.Element => {
  return <div className={`w-3 h-3`} style={style} />;
};
const TrangThaiHD = ({ style }: PropsTrangThaiHD): JSX.Element => {
  return <div className={`w-3 h-3 rounded-md`} style={style} />;
};

const LabelValuePair = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
    <div className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
      {label}:
    </div>
    <div className="relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
      {value}
    </div>
  </div>
);
function ViewInvoiceModal({
  open,
  handleCancel,
  data,
  handleDownload,
  isLoadingCheckStatus,
}: {
  open: boolean;
  handleCancel: () => void;
  data: any;
  handleDownload: (values: any) => void;
  isLoadingCheckStatus: boolean;
}) {
  return (
    <Modal open={open} onCancel={handleCancel} footer={null} width={680}>
      <div className="flex flex-col items-start gap-4 mt-10 relative bg-white">
        <div className="flex flex-col items-start justify-center gap-3 p-4 relative flex-[0_0_auto] bg-neutral-50 rounded-lg w-full">
          <div className="relative w-fit mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutral-800 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap [font-style:var(--heading-h4-font-style)]">
            Thông tin hoá đơn
          </div>
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[268px] items-start gap-1 relative">
              <LabelValuePair
                label="Tổng tiền thanh toán"
                value={data?.tongThanhToan}
              />
              <LabelValuePair label="Mẫu số Ký hiệu" value={data?.khmshdon} />
              <LabelValuePair label="Số hoá đơn" value={data?.shdon} />
            </div>
            <div className="relative w-0.5 h-10 bg-neutral-200 rounded-sm" />
            <div className="flex flex-col w-[268px] items-start gap-1 relative">
              <LabelValuePair label="Mẫu hóa đơn" value={data?.thdon} />
              <LabelValuePair label="Ngày lập" value={data?.tdlap} />
              <LabelValuePair label="Ngày ký" value={data?.nky} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start relative flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutral-800 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap [font-style:var(--heading-h4-font-style)]">
                Kết quả kiểm tra hoá đơn
              </p>
              <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1.5 relative flex-[0_0_auto] bg-semanticsuccess-50 rounded border border-solid border-semanticsuccessmain-500">
                <div
                  className="relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-semanticsuccessmain-500 text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]
                "
                >
                  Hoá đơn hợp lệ
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[126px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                  Thời gian kiểm tra:
                </div>
                <div className="relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {dayjs(new Date()).format("DD/MM/YYYY")}
                </div>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[126px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                  Ngày cấp mã HĐ
                </div>
                <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-neutral-800 text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                  29/09/2024
                </div>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[126px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                  Hình thức hóa đơn:
                </div>
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <TrangThaiHD
                    style={{
                      backgroundColor: HTHDO_Options.find(
                        (item) => item.value === data?.hthuc
                      )?.color,
                    }}
                  />
                  <div className="relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                    {
                      HTHDO_Options.find((item) => item.value === data?.hthuc)
                        ?.label
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-neutral-200">
            <div className="relative self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutral-800 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
              Đơn vị mua hàng
            </div>
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[126px] items-center gap-1 relative">
                    <SuccessIcon className="!relative" classNameSVG="w-4 h-4" />
                    <div className="relative w-[115px] mt-[-1.00px] mr-[-5.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                      Tên đơn vị:
                    </div>
                  </div>
                  <p className="flex-1 ml-10 relative w-[293.56px] mt-[-1.00px] font-semibold text-sm tracking-[0] leading-5">
                    {data?.thongTinNguoiMua?.nmten}
                  </p>
                </div>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <SuccessIcon className="!relative" classNameSVG="w-4 h-4" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    MST:
                  </div>
                </div>
                <div className="ml-10 flex-1">
                  <div className="inline-block gap-2.5 px-2.5 py-1.5 bg-neutral-50 rounded">
                    <span className="inline mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
                      {data?.thongTinNguoiMua?.nmmst}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <SuccessIcon className="!relative" classNameSVG="w-4 h-4" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    Địa chỉ:
                  </div>
                </div>
                <p className="flex-1 ml-10 relative w-[523px] mt-[-1.00px] mr-[-123.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-neutral-800 text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] [font-style:var(--body-medium-medium-font-style)]">
                  {data?.thongTinNguoiMua?.nmdchi}
                </p>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <SuccessIcon className="!relative" classNameSVG="w-4 h-4" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    Tình trạng:
                  </div>
                </div>
                <div className="flex-1 ml-10 inline-flex items-center gap-2 relative">
                  {isLoadingCheckStatus ? (
                    <Skeleton
                      active
                      title={false}
                      paragraph={{
                        rows: 1,
                      }}
                    />
                  ) : (
                    <>
                      {data?.thongTinNguoiMua?.trangThaiMST?.color && (
                        <TrangThaiMST
                          style={{
                            backgroundColor:
                              data?.thongTinNguoiMua?.trangThaiMST?.color,
                          }}
                        />
                      )}

                      <div className="mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                        {data?.thongTinNguoiMua?.trangThaiMST?.desc}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-neutral-200">
            <div className="relative self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutral-800 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
              Đơn vị bán hàng
            </div>
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <SuccessIcon className="!relative " classNameSVG="w-4 h-4" />
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Tên đơn vị:
                  </div>
                </div>
                <p className="ml-10 flex-1 relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {data?.thongTinNguoiBan?.nbten}
                </p>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <SuccessIcon className="!relative" classNameSVG="w-4 h-4" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    MST:
                  </div>
                </div>
                <div className="ml-10 flex-1">
                  <div className="inline-block gap-2.5 px-2.5 py-1.5 bg-neutral-50 rounded">
                    <span className="inline mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
                      {data?.thongTinNguoiBan?.mst}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <SuccessIcon className="!relative" classNameSVG="w-4 h-4" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    Địa chỉ:
                  </div>
                </div>
                <p className="ml-10 flex-1 relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-neutral-800 text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] [font-style:var(--body-medium-medium-font-style)]">
                  {data?.thongTinNguoiBan?.nbdchi}
                </p>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <SuccessIcon className="!relative" classNameSVG="w-4 h-4" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    Tình trạng:
                  </div>
                </div>
                <div className="ml-10 flex-1 inline-flex items-center gap-2 relative">
                  {isLoadingCheckStatus ? (
                    <Skeleton
                      active
                      title={false}
                      paragraph={{
                        rows: 1,
                      }}
                    />
                  ) : (
                    <>
                      {data?.thongTinNguoiBan?.trangThaiMST?.color && (
                        <TrangThaiMST
                          style={{
                            backgroundColor:
                              data?.thongTinNguoiMua?.trangThaiMST?.color,
                          }}
                        />
                      )}

                      <div className="mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                        {data?.thongTinNguoiBan?.trangThaiMST?.desc}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-neutral-200">
            <div className="relative self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutral-800 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
              Chữ ký số
            </div>
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <SuccessIcon className="!relative" classNameSVG="w-4 h-4" />
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Thông tin CKS:
                  </div>
                </div>
                <div className="flex-1 ml-10  relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Hợp lệ
                </div>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <SuccessIcon className="!relative" classNameSVG="w-4 h-4" />
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    CTS của NNT:
                  </div>
                </div>
                <p className="flex-1 ml-10  relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Hợp lệ (Tại thời điểm ký hóa đơn )
                </p>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 pl-5 pr-0 py-0 relative">
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Ký bởi:
                  </div>
                </div>
                <p className="flex-1 ml-10  relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {data?.cksNguoiBanObj?.CN}
                </p>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 pl-5 pr-0 py-0 relative">
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Nhà cung cấp:
                  </div>
                </div>
                <div className="flex-1 ml-10  relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {data?.cksNguoiBanObj?.Issuer}
                </div>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 pl-5 pr-0 py-0 relative">
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Hiệu lực:
                  </div>
                </div>
                <div className="flex-1 ml-10  relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  từ{" "}
                  {dayjs(data?.cksNguoiBanObj?.NotBefore).format("DD/MM/YYYY")}{" "}
                  đến{" "}
                  {dayjs(data?.cksNguoiBanObj?.NotAfter).format("DD/MM/YYYY")}
                </div>
              </div>
              <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 pl-5 pr-0 py-0 relative">
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Serial number:
                  </div>
                </div>
                <div className="flex-1 ml-10 relative w-fit mt-[-1.00px] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  {data?.cksNguoiBanObj?.SerialNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 w-full">
          <CustomBtn
            title="Tải xuống"
            variant="white"
            prefix={<DownloadOutlined className="mr-2" />}
            onClick={() => {
              handleDownload({
                nbmst: data?.thongTinNguoiBan?.mst,
                khhdon: data?.thongTinHoaDon?.khhdon,
                shdon: data?.thongTinHoaDon?.shdon,
                khmshdon: data?.thongTinHoaDon?.khmshdon,
              });
            }}
          />
          <CustomBtn title="Đóng" className="w-20" onClick={handleCancel} />
        </div>
      </div>
    </Modal>
  );
}

const MemoziedViewInvoiceModal = memo(ViewInvoiceModal);

export default MemoziedViewInvoiceModal;
