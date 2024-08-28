import { Modal } from "antd";
import React from "react";

export default function ViewInvoiceModal() {
  return (
    <Modal>
      <div className="flex flex-col items-start gap-4 px-6 py-[18px] relative bg-white">
        <div className="flex flex-col w-[598px] items-start justify-center gap-3 p-4 relative flex-[0_0_auto] bg-neutral-50 rounded-lg">
          <div className="relative w-fit mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutral-800 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap [font-style:var(--heading-h4-font-style)]">
            Thông tin hoá đơn
          </div>
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[268px] items-start gap-1 relative">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                  Tổng tiền thanh toán:
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  456.000.000vnđ
                </div>
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                  Mẫu số Ký hiệu:
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  1K22TYY
                </div>
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                  Số hoá đơn:
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  200
                </div>
              </div>
            </div>
            <div className="relative w-0.5 h-10 bg-neutral-200 rounded-sm" />
            <div className="flex flex-col w-[268px] items-start gap-1 relative">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                  Mẫu hóa đơn:
                </div>
                <p className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Hóa đơn giá trị gia tăng
                </p>
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                  Ngày lập:
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  13/09/2022 10:00:00
                </div>
              </div>
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                  Ngày ký:
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  13/09/2022 14:30:10
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[598px] items-start relative flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutral-800 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap [font-style:var(--heading-h4-font-style)]">
                Kết quả kiểm tra hoá đơn
              </p>
              <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1.5 relative flex-[0_0_auto] bg-semanticsuccess-50 rounded border border-solid border-semanticsuccessmain-500">
                <div className="relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-semanticsuccessmain-500 text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                  Hoá đơn hợp lệ
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                  Tình trạng rủi ro thuế:
                </p>
                <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-neutral-800 text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                  Không
                </div>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[126px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                  Thời gian kiểm tra:
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  13/09/2022
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
                  Trạng thái hoá đơn:
                </div>
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <TrNgThIH className="!relative" property1="h-m-i" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                    Hoá đơn mới
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
                <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[126px] items-center gap-1 relative">
                    <Property1KhNgHPL className="!relative !w-3 !h-3" />
                    <div className="relative w-[115px] mt-[-1.00px] mr-[-5.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                      Tên đơn vị:
                    </div>
                  </div>
                  <p className="relative w-[293.56px] mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-primarymain-800 text-sm tracking-[0] leading-5">
                    Công ty Cổ phần Công nghệ Long Hoàng Phát
                  </p>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 pl-4 pr-0 py-0 relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] font-caption-small-medium font-[number:var(--caption-small-medium-font-weight)] text-primarymain-800 text-[length:var(--caption-small-medium-font-size)] tracking-[var(--caption-small-medium-letter-spacing)] leading-[var(--caption-small-medium-line-height)] whitespace-nowrap [font-style:var(--caption-small-medium-font-style)]">
                    Tên đơn vị chưa chính xác
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <TrNgThIH9 className="!relative !w-3 !h-3" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    MST:
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1.5 relative flex-[0_0_auto] bg-neutral-50 rounded">
                  <div className="relative w-fit mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
                    1100035680
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <TrNgThIH9 className="!relative !w-3 !h-3" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    Địa chỉ:
                  </div>
                </div>
                <p className="relative w-[523px] mt-[-1.00px] mr-[-123.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-neutral-800 text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] [font-style:var(--body-medium-medium-font-style)]">
                  Tầng 5 số 02 Chùa Bộc, Phường Trung Tự, Quận Đống Đa, <br />
                  Thành Phố Hà Nội, Việt Nam
                </p>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <TrNgThIH9 className="!relative !w-3 !h-3" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    Tình trạng:
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <TrNgThIMst className="!relative" property1="ang-ho-t-ng" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                    MST đang hoạt động
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-neutral-200">
            <div className="relative self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutral-800 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
              Đơn vị bán hàng
            </div>
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <TrNgThIH9 className="!relative !w-3 !h-3" />
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Tên đơn vị:
                  </div>
                </div>
                <p className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Công ty cổ phần công nghệ Nacencomm
                </p>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <TrNgThIH9 className="!relative !w-3 !h-3" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    MST:
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1.5 relative flex-[0_0_auto] bg-neutral-50 rounded">
                  <div className="relative w-fit mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-neutral-800 text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
                    1100035680
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <TrNgThIH9 className="!relative !w-3 !h-3" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    Địa chỉ:
                  </div>
                </div>
                <p className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-neutral-800 text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] [font-style:var(--body-medium-medium-font-style)]">
                  Tầng 3 số 25 Nguyễn Huy Tưởng, Quận Thanh Xuân, <br />
                  Thành Phố Hà Nội, Việt Nam
                </p>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <TrNgThIH9 className="!relative !w-3 !h-3" />
                  <div className="relative w-[63px] mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                    Tình trạng:
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <TrNgThIMst className="!relative" property1="ang-ho-t-ng" />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                    MST đang hoạt động
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 px-4 py-3 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-neutral-200">
            <div className="relative self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutral-800 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
              Chữ ký số
            </div>
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <TrNgThIH9 className="!relative !w-3 !h-3" />
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Thông tin CKS:
                  </div>
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Hợp lệ
                </div>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 relative">
                  <TrNgThIH9 className="!relative !w-3 !h-3" />
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    CTS của NNT:
                  </div>
                </div>
                <p className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Hợp lệ (Tại thời điểm ký hóa đơn )
                </p>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 pl-3 pr-0 py-0 relative">
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Ký bởi:
                  </div>
                </div>
                <p className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Công ty cổ phần công nghệ thẻ NACENCOMM
                </p>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 pl-3 pr-0 py-0 relative">
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Nhà cung cấp:
                  </div>
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  CN=CA2, O=NACENCOMM SCT, C=VN
                </div>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 pl-3 pr-0 py-0 relative">
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Hiệu lực:
                  </div>
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  từ 06/03/2025 đến 25/05/2025
                </div>
              </div>
              <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[126px] items-center gap-1 pl-3 pr-0 py-0 relative">
                  <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral900-character-primary text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    Serial number:
                  </div>
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-neutral-800 text-sm tracking-[0] leading-5 whitespace-nowrap">
                  5402BC5CACCE669C2015000200063CD0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
