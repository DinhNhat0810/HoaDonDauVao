import { saveAs } from "file-saver";
import { isEmpty, isNumber } from "lodash";
import ExcelJS from "exceljs";
import { convertToVnd } from ".";

const borderStyle: any = {
  top: { style: "thin" },
  left: { style: "thin" },
  bottom: { style: "thin" },
  right: { style: "thin" },
};

function setFontStyleHeader(
  range: string,
  size: number,
  bold: boolean,
  value: string,
  worksheet: any,
  height?: number,
  row?: number,
  color?: string
) {
  worksheet.getCell(range).value = value;

  worksheet.getCell(range).alignment = {
    horizontal: "center",
    vertical: "middle",
    wrapText: true, // Bật wrap text
  };

  worksheet.getCell(range).font = {
    name: "Times New Roman",
    size: size,
    bold: bold,
  };

  if (height && row) {
    worksheet.getRow(row).height = height || 15;
  }

  if (color) {
    worksheet.getCell(range).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: color },
    };
  }

  worksheet.getCell(range).border = borderStyle;
}

export const templateMuaVaoTongHop = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  const excelData = data?.map((item: any, index: string) => {
    return {
      STT: (index + 1).toString(),
      "Ký hiệu mẫu số": item?.thongTinHoaDon?.khmshdon?.toString(),
      "Ký hiệu hóa đơn": item?.thongTinHoaDon?.khhdon?.toString(),
      "Số hóa đơn": item?.thongTinHoaDon?.shdon?.toString(),
      "Ngày, tháng, năm lập hóa đơn": item?.thongTinHoaDon?.ntao,
      "Tên người bán": item?.thongTinNguoiBan?.nbten,
      "Mã số thuế người bán": item?.thongTinNguoiBan?.mst,
      "Giá trị HHDV mua vào chưa có thuế": item?.tongTruocThue?.toString(),
      "Thuế GTGT mua vào": item?.thueSuat?.tsuat,
      "Trạng thái hóa đơn": item?.tthai?.toString(),
      "Ghi chú": item?.nky,
      "Trạng thái MST": item?.nky,
      "Tổng tiền phí": item?.tongThanhToan?.toString(),
    };
  });

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");

  worksheet.getColumn("A").width = 6;
  worksheet.getColumn("B").width = 9;
  worksheet.getColumn("C").width = 9;
  worksheet.getColumn("D").width = 15;
  worksheet.getColumn("E").width = 22;
  worksheet.getColumn("F").width = 20;
  worksheet.getColumn("G").width = 18;
  worksheet.getColumn("H").width = 17;
  worksheet.getColumn("I").width = 17;
  worksheet.getColumn("J").width = 16;
  worksheet.getColumn("K").width = 9;
  worksheet.getColumn("L").width = 20;
  worksheet.getColumn("M").width = 20;

  worksheet.mergeCells("A2:L2");

  const mergedCellHeader = worksheet.getCell("A2");
  mergedCellHeader.value =
    "Bảng kê hoá đơn, chứng từ của hàng hoá, dịch vụ mua vào".toUpperCase();
  mergedCellHeader.font = {
    name: "Times New Roman",
    size: 14,
    bold: true,
  };
  mergedCellHeader.alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  worksheet.mergeCells("A4:A5");
  worksheet.mergeCells("B4:E4");
  worksheet.mergeCells("F4:F5");
  worksheet.mergeCells("G4:G5");
  worksheet.mergeCells("H4:H5");
  worksheet.mergeCells("I4:I5");
  worksheet.mergeCells("J4:J5");
  worksheet.mergeCells("K4:K5");
  worksheet.mergeCells("L4:L5");
  worksheet.mergeCells("M4:M5");

  worksheet.getCell("A4:A5").value = "STT";

  worksheet.getCell("A4:A5").alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  worksheet.getCell("A4:A5").font = {
    name: "Times New Roman",
    size: 9,
    bold: true,
  };
  worksheet.getCell("A4:A5").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "D3D3D3" },
  };

  worksheet.getCell("A4:A5").border = borderStyle;

  // Thiết lập màu nền cho các ô đã gộp
  function setBackgroundColor(range: string, color: string) {
    worksheet.getCell(range).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: color },
    };

    worksheet.getCell(range).border = borderStyle;
  }

  setBackgroundColor("A4:A5", "D3D3D3");
  setBackgroundColor("B4:E4", "D3D3D3");
  setBackgroundColor("F4:F5", "D3D3D3");
  setBackgroundColor("G4:G5", "D3D3D3");
  setBackgroundColor("H4:H5", "D3D3D3");
  setBackgroundColor("I4:I5", "D3D3D3");
  setBackgroundColor("J4:J5", "D3D3D3");
  setBackgroundColor("K4:K5", "D3D3D3");
  setBackgroundColor("L4:L5", "D3D3D3");
  setBackgroundColor("M4:M5", "D3D3D3");

  setBackgroundColor("B5", "D3D3D3");
  setBackgroundColor("C5", "D3D3D3");
  setBackgroundColor("D5", "D3D3D3");
  setBackgroundColor("E5", "D3D3D3");

  setFontStyleHeader(
    "B4:E4",
    9,
    true,
    "Hóa đơn, chứng từ, biên lai nộp thuế",
    worksheet
  );
  setFontStyleHeader("B5", 9, true, "Kí hiệu mẫu số", worksheet);
  setFontStyleHeader("C5", 9, true, "Kí hiệu hóa đơn", worksheet);
  setFontStyleHeader("D5", 9, true, "Số hóa đơn", worksheet);
  setFontStyleHeader("E5", 9, true, "Ngày, tháng, năm lập hóa đơn", worksheet);

  setFontStyleHeader("F5", 9, true, "Tên người bán", worksheet);
  setFontStyleHeader("G5", 9, true, "Mã số thuế người bán", worksheet);
  setFontStyleHeader(
    "H5",
    9,
    true,
    "Giá trị HHDV mua vào chưa có thuế",
    worksheet
  );
  setFontStyleHeader("I5", 9, true, "Thuế GTGT mua vào", worksheet);
  setFontStyleHeader("J5", 9, true, "Trạng thái hóa đơn", worksheet);
  setFontStyleHeader("K5", 9, true, "Ghi chú", worksheet);
  setFontStyleHeader("L5", 9, true, "Trạng thái MST", worksheet);
  setFontStyleHeader("M5", 9, true, "Tổng tiền phí", worksheet);

  worksheet.columns.forEach((column: any) => {
    column.eachCell({ includeEmpty: true }, (cell: any) => {
      cell.alignment = {
        wrapText: true, // Bật wrap text
        vertical: "middle",
        horizontal: "center",
      };
    });
  });

  let rowIndex = 6;
  for (const rowData of excelData) {
    const rowValues = Object.values(rowData); // Convert each object to an array of its values
    const row = worksheet.addRow(rowValues, "n"); // 'n' is for normal style

    row.eachCell({ includeEmpty: true }, (cell) => {
      cell.alignment = {
        horizontal: "left", // Căn lề ngang bên trái
        vertical: "top", // Căn lề dọc lên trên
        wrapText: true, // Bọc văn bản nếu cần
      };
      cell.border = borderStyle;
    });
    rowIndex++;
  }

  worksheet.mergeCells(
    `A${worksheet?.rowCount + 1}:E${worksheet?.rowCount + 1}`
  );
  worksheet.getCell(`A${worksheet?.rowCount}`).value = "Tổng";
  worksheet.getCell(`A${worksheet?.rowCount}`).font = {
    name: "Times New Roman",
    size: 10,
    bold: true,
  };

  //Add border cho hàng tổng
  //   for (let col = 1; col <= 13; col++) {
  //     // Cột từ A đến M (13 cột)
  //     const cell = worksheet.getCell(worksheet?.rowCount, col);
  //     cell.border = borderStyle;
  //   }

  // Tổng Giá trị HHDV mua vào chưa có thuế
  worksheet.getCell(`H${worksheet?.rowCount}`).value = "0";

  // Tổng Thuế GTGT mua vào
  worksheet.getCell(`I${worksheet?.rowCount}`).value = "0";

  // Tổng Tổng tiền phí
  const total = data.reduce((accumulator: any, currentValue: any) => {
    console.log(accumulator);

    return accumulator + currentValue.tgtttbso;
  }, 0);

  worksheet.getCell(`M${worksheet?.rowCount}`).value = isNumber(total)
    ? convertToVnd(total)
    : "0";

  worksheet.mergeCells(
    `A${worksheet?.rowCount + 1}:D${worksheet?.rowCount + 1}`
  );
  worksheet.getCell(`A${worksheet?.rowCount}`).value =
    "Tổng Giá trị HHDV mua vào chưa có thuế (**):";
  worksheet.getCell(`A${worksheet?.rowCount}`).font = {
    name: "Times New Roman",
    size: 10,
  };

  worksheet.mergeCells(
    `A${worksheet?.rowCount + 1}:D${worksheet?.rowCount + 1}`
  );
  worksheet.getCell(`A${worksheet?.rowCount}`).value =
    "Tổng số thuế GTGT của HHDV mua vào (***):";
  worksheet.getCell(`A${worksheet?.rowCount}`).font = {
    name: "Times New Roman",
    size: 10,
  };

  worksheet.mergeCells(
    `A${worksheet?.rowCount + 1}:D${worksheet?.rowCount + 1}`
  );
  worksheet.getCell(`A${worksheet?.rowCount}`).value =
    "Tổng tiền phí của HHDV mua vào:";
  worksheet.getCell(`A${worksheet?.rowCount}`).font = {
    name: "Times New Roman",
    size: 10,
  };

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), `${fileName}.xlsx`);
};

export const templateMuaVaoTCT = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  const excelData = data?.map((item: any, index: string) => {
    return {
      STT: (index + 1).toString(),
      "Ký hiệu mẫu số": item?.thongTinHoaDon?.khmshdon?.toString(),
      "Ký hiệu hóa đơn": item?.thongTinHoaDon?.khhdon?.toString(),
      "Số hóa đơn": item?.thongTinHoaDon?.shdon?.toString(),
      "Ngày lập": item?.thongTinHoaDon?.ntao,
      "MST người bán/MST người xuất hàng": item?.thongTinNguoiBan?.mst,
      "Tên người bán/Tên người xuất hàng": item?.thongTinNguoiBan?.nbten,
      "Địa chỉ người bán": item?.thongTinNguoiBan?.nbten,

      "Tổng tiền chưa thuế": item?.thongTinNguoiBan?.nbten,
      "Tổng tiền thuế": item?.thongTinNguoiBan?.nbten,
      "Tổng tiền chiết khấu thương mại": item?.thongTinNguoiBan?.nbten,
      "Tổng tiền phí": item?.thongTinNguoiBan?.nbten,
      "Tổng tiền thanh toán": item?.thongTinNguoiBan?.nbten,
      "Đơn vị tiền tệ": item?.thongTinNguoiBan?.nbten,
      "Tỷ giá": item?.thongTinNguoiBan?.nbten,
      "Trạng thái hóa đơn": item?.thongTinNguoiBan?.nbten,
      "Kết quả kiểm tra hóa đơn": item?.thongTinNguoiBan?.nbten,
    };
  });

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");

  worksheet.getColumn("A").width = 7;
  worksheet.getColumn("B").width = 10;
  worksheet.getColumn("C").width = 10;
  worksheet.getColumn("D").width = 10;
  worksheet.getColumn("E").width = 20;
  worksheet.getColumn("F").width = 30;
  worksheet.getColumn("G").width = 30;
  worksheet.getColumn("H").width = 30;
  worksheet.getColumn("I").width = 12;
  worksheet.getColumn("J").width = 12;
  worksheet.getColumn("K").width = 20;
  worksheet.getColumn("L").width = 20;
  worksheet.getColumn("M").width = 20;
  worksheet.getColumn("N").width = 12;
  worksheet.getColumn("O").width = 10;
  worksheet.getColumn("P").width = 20;
  worksheet.getColumn("Q").width = 50;

  worksheet.mergeCells("A3:Q3");
  const mergedCellHeader = worksheet.getCell("A3");

  mergedCellHeader.value = "Danh sách hóa đơn".toUpperCase();
  mergedCellHeader.font = {
    name: "Times New Roman",
    size: 11,
    bold: true,
  };
  mergedCellHeader.alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  worksheet.mergeCells("A4:Q4");

  worksheet.getCell("A4").value = "Từ ngày 08/07/2024 đến ngày 07/08/2024";
  worksheet.getCell("A4").font = {
    name: "Times New Roman",
    size: 11,
    bold: true,
  };
  worksheet.getCell("A4").alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  const headers = [
    { address: "A6", text: "STT" },
    { address: "B6", text: "Ký hiệu mẫu số" },
    { address: "C6", text: "Ký hiệu hóa đơn" },
    { address: "D6", text: "Số hóa đơn" },
    { address: "E6", text: "Ngày lập" },
    { address: "F6", text: "MST người bán/MST người xuất hàng" },
    { address: "G6", text: "Tên người bán/Tên người xuất hàng" },
    { address: "H6", text: "Địa chỉ người bán" },
    { address: "I6", text: "Tổng tiền chưa thuế" },
    { address: "J6", text: "Tổng tiền thuế" },
    { address: "K6", text: "Tổng tiền chiết khấu thương mại" },
    { address: "L6", text: "Tổng tiền phí" },
    { address: "M6", text: "Tổng tiền thanh toán" },
    { address: "N6", text: "Đơn vị tiền tệ" },
    { address: "O6", text: "Tỷ giá" },
    { address: "P6", text: "Trạng thái hóa đơn" },
    { address: "Q6", text: "Kết quả kiểm tra hóa đơn" },
  ];

  headers.forEach((header) => {
    setFontStyleHeader(
      header.address,
      11, // fontSize
      true, // bold
      header.text, // text
      worksheet,
      50, // row height
      6, // column width
      "FFCC00" // background color
    );
  });

  let rowIndex = 6;
  for (const rowData of excelData) {
    const rowValues = Object.values(rowData); // Convert each object to an array of its values
    const row = worksheet.addRow(rowValues, "n"); // 'n' is for normal style

    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      if (
        colNumber === 3 ||
        colNumber === 7 ||
        colNumber === 8 ||
        colNumber === 16 ||
        colNumber === 17
      ) {
        cell.alignment = {
          horizontal: "left", // Căn lề ngang bên trái
          vertical: "bottom", // Căn lề dọc lên trên
          wrapText: true, // Bọc văn bản nếu cần
        };
      } else {
        cell.alignment = {
          horizontal: "center", // Căn lề ngang giữa
          vertical: "bottom", // Căn lề dọc lên trên
          wrapText: true, // Bọc văn bản nếu cần
        };
      }
      cell.border = borderStyle;
      cell.font = {
        name: "Times New Roman",
        size: 11,
      };
    });
    rowIndex++;
  }

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), `${fileName}.xlsx`);
};

export const templateDauVaoFAST = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  const excelData = data?.map((item: any, index: string) => {
    return {
      STT: (index + 1).toString(),
      "Ký hiệu mẫu số": item?.thongTinHoaDon?.khmshdon?.toString(),
      "Ký hiệu hóa đơn": item?.thongTinHoaDon?.khhdon?.toString(),
      "Số hóa đơn": item?.thongTinHoaDon?.shdon?.toString(),
      "Ngày, tháng, năm lập hóa đơn": item?.thongTinHoaDon?.ntao,
      "Tên người bán": item?.thongTinNguoiBan?.nbten,
      "Mã số thuế người bán": item?.thongTinNguoiBan?.mst,
      "Giá trị HHDV mua vào chưa có thuế": item?.tongTruocThue?.toString(),
      "Thuế GTGT mua vào": item?.thueSuat?.tsuat,
      "Trạng thái hóa đơn": item?.tthai?.toString(),
      "Ghi chú": item?.nky,
      "Trạng thái MST": item?.nky,
      "Tổng tiền phí": item?.tongThanhToan?.toString(),
    };
  });

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");

  worksheet.getColumn("A").width = 9;
  worksheet.getColumn("B").width = 40;
  worksheet.getColumn("C").width = 18;
  worksheet.getColumn("D").width = 18;
  worksheet.getColumn("E").width = 20;
  worksheet.getColumn("F").width = 18;
  worksheet.getColumn("G").width = 16;
  worksheet.getColumn("H").width = 12;
  worksheet.getColumn("I").width = 24;
  worksheet.getColumn("J").width = 14;
  worksheet.getColumn("K").width = 24;
  worksheet.getColumn("L").width = 10;
  worksheet.getColumn("M").width = 9;
  worksheet.getColumn("N").width = 9;
  worksheet.getColumn("O").width = 9;
  worksheet.getColumn("P").width = 9;
  worksheet.getColumn("Q").width = 9;
  worksheet.getColumn("R").width = 9;
  worksheet.getColumn("S").width = 9;
  worksheet.getColumn("T").width = 15;
  worksheet.getColumn("U").width = 10;
  worksheet.getColumn("V").width = 9;
  worksheet.getColumn("W").width = 12;
  worksheet.getColumn("X").width = 15;
  worksheet.getColumn("Y").width = 15;
  worksheet.getColumn("Z").width = 15;
  worksheet.getColumn("AA").width = 15;
  worksheet.getColumn("AB").width = 20;
  worksheet.getColumn("AC").width = 32;
  worksheet.getColumn("AD").width = 24;
  worksheet.getColumn("AE").width = 15;
  worksheet.getColumn("AF").width = 15;
  worksheet.getColumn("AG").width = 15;
  worksheet.getColumn("AH").width = 9;
  worksheet.getColumn("AI").width = 9;
  worksheet.getColumn("AJ").width = 9;
  worksheet.getColumn("AK").width = 9;
  worksheet.getColumn("AL").width = 9;
  worksheet.getColumn("AM").width = 9;
  worksheet.getColumn("AN").width = 9;
  worksheet.getColumn("AO").width = 9;
  worksheet.getColumn("AP").width = 9;
  worksheet.getColumn("AQ").width = 9;
  worksheet.getColumn("AR").width = 9;
  worksheet.getColumn("AS").width = 9;

  const headers = [
    { address: "A1", text: "Mã ncc" },
    { address: "B1", text: "Tên nhà cung cấp" },
    { address: "C1", text: "Người giao hàng" },
    { address: "D1", text: "Ngày chứng từ" },
    { address: "E1", text: "Số chứng từ" },
    { address: "F1", text: "Ngày hóa đơn" },
    { address: "G1", text: "Số hóa đơn" },
    { address: "H1", text: "Ký hiệu" },
    { address: "I1", text: "Diễn giải" },
    { address: "J1", text: "Mã hàng" },
    { address: "K1", text: "Tên mặt hàng" },
    { address: "L1", text: "Đvt" },
    { address: "M1", text: "Mã kho" },
    { address: "N1", text: "Số lượng" },
    { address: "O1", text: "Giá" },
    { address: "P1", text: "Tiền hàng" },
    { address: "Q1", text: "Mã nt" },
    { address: "R1", text: "Tỷ giá" },
    { address: "S1", text: "Tài khoản có" },
    { address: "T1", text: "Tài khoản nợ" },
    { address: "U1", text: "Mã thanh toán" },
    { address: "V1", text: "Mẫu báo cáo" },
    { address: "W1", text: "Mã tính chất" },
    { address: "X1", text: "Mẫu hóa đơn" },
    { address: "Y1", text: "Số hóa đơn" },
    { address: "Z1", text: "Ký hiệu" },
    { address: "AA1", text: "Ngày hóa đơn" },
    { address: "AB1", text: "Mã nhà cung cấp (Trong phần thuế)" },
    { address: "AC1", text: "Tên nhà cung cấp (Trong phần thuế)" },
    { address: "AD1", text: "Địa chỉ" },
    { address: "AE1", text: "Mã số thuế" },
    { address: "AF1", text: "Tên hàng hóa - dịch vụ" },
    { address: "AG1", text: "Tiền hàng" },
    { address: "AH1", text: "Mã thuế" },
    { address: "AI1", text: "Tk thuế" },
    { address: "AJ1", text: "Thuế" },
    { address: "AK1", text: "Cục thuế" },
    { address: "AL1", text: "Ghi chú" },
    { address: "AM1", text: "Vụ việc" },
    { address: "AN1", text: "Bộ phận" },
    { address: "AO1", text: "Lsx" },
    { address: "AP1", text: "Sản phẩm" },
    { address: "AQ1", text: "Hợp đồng" },
    { address: "AR1", text: "Phí" },
    { address: "AS1", text: "Khế ước" },
  ];

  headers.forEach((header) => {
    setFontStyleHeader(
      header.address,
      11, // fontSize
      true, // bold
      header.text, // text
      worksheet,
      50, // row height
      1, // column width
      "C5D9F1" // background color
    );
  });

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), `${fileName}.xlsx`);
};
