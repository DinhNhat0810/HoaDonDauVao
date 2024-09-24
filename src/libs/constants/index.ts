import ca2Invoice from "../../assets/images/auth/ca2-invoice.svg";
import personnel from "../../assets/images/auth/personnel.png";
import logo from "../../assets/images/home/logo.svg";
import dots from "../../assets/images/icon/dots.svg";
import qrCode from "../../assets/images/auth/qr-chplay.svg";
import chplay from "../../assets/images/auth/chplay.svg";
import appstore from "../../assets/images/auth/appstore.svg";
import signAuth from "../../assets/images/auth/sign-auth.png";

// export const API_URL = "http://10.253.214.26:8010/apiquanlyhoadon.asmx";

export const API_URL = "http://10.0.0.168:8010/apiquanlyhoadon.asmx";

export const ROUTE = {
  HOME: "/",
  HDMV: "/hoa-don-mua-vao",
  HDMV_TatCa: "/hoa-don-mua-vao/tat-ca",
  HDMV_Huy: "/hoa-don-mua-vao/da-huy",
  HDMV_ThayThe: "/hoa-don-mua-vao/da-thay-the",
  HDMV_DaDC: "/hoa-don-mua-vao/da-dieu-chinh",
  HDMV_XuatBangKe: "/hoa-don-mua-vao/xuat-bang-ke",
  HDBR: "/hoa-don-ban-ra",
  HDBR_TatCa: "/hoa-don-ban-ra/tat-ca",
  HDBR_Huy: "/hoa-don-ban-ra/da-huy",
  HDBR_ThayThe: "/hoa-don-ban-ra/da-thay-the",
  HDBR_DaDC: "/hoa-don-ban-ra/da-dieu-chinh",
  HDBR_XuatBangKe: "/hoa-don-ban-ra/xuat-bang-ke",
  QL_NGUOI_DUNG: "/quan-ly-nguoi-dung",
  QL_TAI_NGUYEN: "/quan-ly-tai-nguyen",
  QL_NHAT_KY: "/quan-ly-nhat-ky",

  TQ: "/tong-quan",
  TQ_HD: "/tong-quan/hoa-don",

  HD: "/hoa-don",
  HDDV: "/hoa-don/hoa-don-dau-vao",
  HDDV_MTT: "/hoa-don/hoa-don-dau-vao-may-tinh-tien",
  HDDR: "/hoa-don/hoa-don-dau-ra",
  HDDR_MTT: "/hoa-don/hoa-don-dau-ra-may-tinh-tien",

  BAOCAO: "/bao-cao",
  BAOCAO_KXBKMV: "/bao-cao/ket-xuat-bang-ke-mua-vao",
  BAOCAO_KXBKBR: "/bao-cao/ket-xuat-bang-ke-ban-ra",
  BAOCAO_THKT: "/bao-cao/tong-hop-khai-thue",
  BAOCAO_HDRR: "/bao-cao/hoa-don-rui-ro",

  DANHMUC: "/danh-muc",
  DANHMUC_NCC: "/danh-muc/nha-cung-cap",
  DANHMUC_KH: "/danh-muc/khach-hang",

  HETHONG: "/he-thong",
  HETHONG_TTDN: "/he-thong/thong-tin-doanh-nghiep",
  HETHONG_QLTN: "/he-thong/quan-ly-tai-nguyen",
  HETHONG_KNCQT: "/he-thong/ket-noi-co-quan-thue",
  HETHONG_NKTC: "/he-thong/nhat-ky-truy-cap",

  LOGIN: "/login",
  LOGOUT: "/logout",
  NOT_FOUND: "*",
};

export const IMAGES = {
  auth: {
    ca2Invoice: ca2Invoice,
    personnel: personnel,
    qrCode: qrCode,
    chplay: chplay,
    appstore: appstore,
    signAuth: signAuth,
  },
  home: {
    logo: logo,
  },

  icon: {
    dots: dots,
  },
};

export const COLORS = {
  primary: "#de3f0f",
  gray: "#bdbdbf",
  black: "#000",
  infor: "#38a4dd",
  success: "#4caf4e",
  warning: "#f9bf2c",
  error: "#ef5451",
};

export const HTHDO_Options = [
  {
    label: "Tất cả",
    color: null,
    value: 9999,
  },
  {
    label: "Không mã",
    color: "#A9A9A9",
    value: 0,
  },
  {
    label: "Có mã",
    color: "#1E90FF",
    value: 1,
  },

  {
    label: "Không mã bảng kê",
    color: "#FFD700",
    value: 2,
  },
  {
    label: "Có mã theo lần phát sinh",
    color: "#FFA500",
    value: 3,
  },
  {
    label: "Hóa đơn đặt in bảng tổng hợp",
    color: "#32CD32",
    value: 4,
  },
  {
    label: "Hóa đơn có mã từ máy tính tiền",
    color: "#FF4500",
    value: 5,
  },
];

export const TTMST_Options: any = [
  {
    label: "Tất cả",
    color: null,
    value: 9999,
    desc: "Tất cả",
  },
  {
    label: "Đang hoạt động",
    color: COLORS.success,
    value: 0,
    desc: "MST đang hoạt động",
  },

  {
    label: "Đang hoạt động",
    color: COLORS.success,
    value: 4,
    desc: "MST đang hoạt động",
    hidden: true,
  },

  {
    label: "Ngừng hoạt động",
    color: COLORS.error,
    value: 1,
    desc: "MST ngừng hoạt động và đã hoàn thành thủ tục chấm dứt hiệu lực MST",
  },

  {
    label: "Đã chuyển cơ quan thuế quản lý",
    color: "#b155d7",
    value: 2,
    desc: "MST đã chuyển cơ quan thuế quản lý",
  },

  {
    label: "Tạm ngừng hoạt động",
    color: COLORS.warning,
    value: 3,
    desc: "MST ngừng hoạt động nhưng chưa hoàn thành thủ tục chấm dứt hiệu lực MST",
  },

  {
    label: "Tạm ngừng hoạt động, kinh doanh",
    color: "#f9812c",
    value: 5,
    desc: "MST tạm ngừng hoạt động, kinh doanh",
  },
  {
    label: "Địa chỉ không khớp",
    color: "#7d7d7d",
    value: 6,
    desc: "MST không hoạt động tại địa chỉ đã đăng ký",
  },
  {
    label: "Chờ thủ tục phá sản",
    color: "#343a40",
    value: 7,
    desc: "MST chờ làm thủ tục phá sản",
  },
];

export const TRANG_THAI_HOA_DON: any = {
  "00": "MST đang hoạt động",
  "0": "MST đang hoạt động",
  "04": "MST đang hoạt động",
  "4": "MST đang hoạt động",
  "01": "MST ngừng hoạt động và đã hoàn thành thủ tục chấm dứt hiệu lực MST",
  "1": "MST ngừng hoạt động và đã hoàn thành thủ tục chấm dứt hiệu lực MST",
  "02": "MST đã chuyển cơ quan thuế quản lý",
  "2": "MST đã chuyển cơ quan thuế quản lý",
  "03": "MST ngừng hoạt động nhưng chưa hoàn thành thủ tục chấm dứt hiệu lực MST",
  "3": "MST ngừng hoạt động nhưng chưa hoàn thành thủ tục chấm dứt hiệu lực MST",
  "05": "MST tạm ngừng hoạt động, kinh doanh",
  "5": "MST tạm ngừng hoạt động, kinh doanh",
  "06": "MST không hoạt động tại địa chỉ đã đăng ký",
  "6": "MST không hoạt động tại địa chỉ đã đăng ký",
  "07": "MST chờ làm thủ tục phá sản",
  "7": "MST chờ làm thủ tục phá sản",
};

export const TTHD = [
  {
    label: "Tất cả",
    color: null,
    value: 9999,
  },
  {
    label: "Hóa đơn gốc ",
    color: COLORS.success,
    value: 1,
  },
  {
    label: "Hóa đơn thay thế",
    color: COLORS.error,
    value: 2,
  },
  {
    label: "Hóa đơn điều chỉnh",
    color: COLORS.infor,
    value: 3,
  },
  {
    label: " Hóa đơn đã bị thay thế",
    color: COLORS.infor,
    value: 4,
  },

  {
    label: "Hóa đơn đã bị điều chỉnh",
    color: "#FF6E40",
    value: 5,
  },
  {
    label: "Hóa đơn đã bị xóa bỏ/hủy bỏ",
    color: "#E03400",
    value: 6,
  },
];

export const TTXLY = [
  {
    label: "Tất cả",
    color: null,
    value: 9999,
  },
  {
    label: "CQT từ chối hóa đơn theo từng lần phát sinh",
    color: COLORS.success,
    value: 2,
  },
  {
    label: "Hóa đơn không đủ điều kiện cấp mã",
    color: COLORS.error,
    value: 4,
  },
  {
    label: "Đã cấp mã hóa đơn",
    color: COLORS.infor,
    value: 5,
  },
  {
    label: "Tổng cục thuế đã nhận không mã",
    color: "#FF6E40",
    value: 6,
  },

  {
    label: "Tổng cục thuế đã nhận máy tính tiền",
    color: "#E03400",
    value: 8,
  },
];
