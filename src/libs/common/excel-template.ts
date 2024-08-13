import { saveAs } from "file-saver";
import { add, isEmpty, isNumber } from "lodash";
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

export const templateBanRaTongHop = async ({
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
      "Tên người mua": item?.thongTinNguoiMua?.nmten,
      "Mã số thuế người mua": item?.thongTinNguoiMua?.nmmst,
      "Giá trị HHDV bán ra chưa có thuế": item?.tongTruocThue?.toString(),
      "Thuế GTGT bán ra": item?.thueSuat?.tsuat,
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
    "Bảng kê hoá đơn, chứng từ của hàng hoá, dịch vụ bán ra".toUpperCase();
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

  setFontStyleHeader("F5", 9, true, "Tên người mua", worksheet);
  setFontStyleHeader("G5", 9, true, "Mã số thuế người mua", worksheet);
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
    "Tổng Giá trị HHDV bán ra chưa có thuế (**):";
  worksheet.getCell(`A${worksheet?.rowCount}`).font = {
    name: "Times New Roman",
    size: 10,
  };

  worksheet.mergeCells(
    `A${worksheet?.rowCount + 1}:D${worksheet?.rowCount + 1}`
  );
  worksheet.getCell(`A${worksheet?.rowCount}`).value =
    "Tổng số thuế GTGT của HHDV bán ra (***):";
  worksheet.getCell(`A${worksheet?.rowCount}`).font = {
    name: "Times New Roman",
    size: 10,
  };

  worksheet.mergeCells(
    `A${worksheet?.rowCount + 1}:D${worksheet?.rowCount + 1}`
  );
  worksheet.getCell(`A${worksheet?.rowCount}`).value =
    "Tổng tiền phí của HHDV bán ra:";
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

export const templateBanRaTCT = async ({
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
      "MST người mua/MST người nhận hàng": item?.thongTinNguoiMua?.nmmst,
      "Tên người mua/Tên người nhận hàng": item?.thongTinNguoiMua?.nmten,
      "Địa chỉ người mua": item?.thongTinNguoiBan?.nbten,

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
    { address: "F6", text: "MST người mua/MST người nhận hàng" },
    { address: "G6", text: "Tên người mua/Tên người nhận hàng" },
    { address: "H6", text: "Địa chỉ người mua" },
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

  const columnWidths = {
    A: 9,
    B: 40,
    C: 18,
    D: 18,
    E: 20,
    F: 18,
    G: 16,
    H: 12,
    I: 24,
    J: 14,
    K: 24,
    L: 10,
    M: 9,
    N: 9,
    O: 9,
    P: 9,
    Q: 9,
    R: 9,
    S: 9,
    T: 15,
    U: 12,
    V: 9,
    W: 12,
    X: 15,
    Y: 15,
    Z: 15,
    AA: 15,
    AB: 20,
    AC: 32,
    AD: 24,
    AE: 15,
    AF: 15,
    AG: 15,
    AH: 9,
    AI: 9,
    AJ: 9,
    AK: 9,
    AL: 9,
    AM: 9,
    AN: 9,
    AO: 9,
    AP: 9,
    AQ: 9,
    AR: 9,
    AS: 9,
  };

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

  // Thiết lập độ rộng cột cho worksheet
  for (const [column, width] of Object.entries(columnWidths)) {
    worksheet.getColumn(column).width = width;
  }

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

export const templateDauRaFAST = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  // const excelData = data?.map((item: any, index: string) => {
  //   return {
  //     STT: (index + 1).toString(),
  //     "Ký hiệu mẫu số": item?.thongTinHoaDon?.khmshdon?.toString(),
  //     "Ký hiệu hóa đơn": item?.thongTinHoaDon?.khhdon?.toString(),
  //     "Số hóa đơn": item?.thongTinHoaDon?.shdon?.toString(),
  //     "Ngày, tháng, năm lập hóa đơn": item?.thongTinHoaDon?.ntao,
  //     "Tên người bán": item?.thongTinNguoiBan?.nbten,
  //     "Mã số thuế người bán": item?.thongTinNguoiBan?.mst,
  //     "Giá trị HHDV mua vào chưa có thuế": item?.tongTruocThue?.toString(),
  //     "Thuế GTGT mua vào": item?.thueSuat?.tsuat,
  //     "Trạng thái hóa đơn": item?.tthai?.toString(),
  //     "Ghi chú": item?.nky,
  //     "Trạng thái MST": item?.nky,
  //     "Tổng tiền phí": item?.tongThanhToan?.toString(),
  //   };
  // });

  const response = await fetch("../assets/template/HDDR_TEMPLATE_FAST.xlsx"); // Tải file từ thư mục public
  const arrayBuffer = await response.arrayBuffer(); // Chuyển đổi response thành ArrayBuffer

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);

  // Chọn worksheet đầu tiên
  const worksheet = workbook.worksheets[0];

  // Cập nhật dữ liệu vào template

  // Tạo file mới và lưu
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, `${fileName}.xlsx`);
};

// export const templateDauVaoMISA = async ({
//   data,
//   fileName,
// }: {
//   data: any;
//   fileName: string;
// }) => {
//   if (isEmpty(data)) return;

//   const excelData = data?.map((item: any, index: string) => {
//     return {
//       STT: (index + 1).toString(),
//       "Ký hiệu mẫu số": item?.thongTinHoaDon?.khmshdon?.toString(),
//       "Ký hiệu hóa đơn": item?.thongTinHoaDon?.khhdon?.toString(),
//       "Số hóa đơn": item?.thongTinHoaDon?.shdon?.toString(),
//       "Ngày, tháng, năm lập hóa đơn": item?.thongTinHoaDon?.ntao,
//       "Tên người bán": item?.thongTinNguoiBan?.nbten,
//       "Mã số thuế người bán": item?.thongTinNguoiBan?.mst,
//       "Giá trị HHDV mua vào chưa có thuế": item?.tongTruocThue?.toString(),
//       "Thuế GTGT mua vào": item?.thueSuat?.tsuat,
//       "Trạng thái hóa đơn": item?.tthai?.toString(),
//       "Ghi chú": item?.nky,
//       "Trạng thái MST": item?.nky,
//       "Tổng tiền phí": item?.tongThanhToan?.toString(),
//     };
//   });

//   const workbook = new ExcelJS.Workbook();
//   const worksheet = workbook.addWorksheet("Sheet1");

//   const columnWidths = {
//     A: 20,
//     B: 18,
//     C: 18,
//     D: 20,
//     E: 18,
//     F: 16,
//     G: 16,
//     H: 16,
//     I: 16,
//     J: 16,
//     K: 16,
//     L: 16,
//     M: 18,
//     N: 20,
//     O: 20,
//     P: 16,
//     Q: 18,
//     R: 18,
//     S: 18,
//     T: 20,
//     U: 20,
//     V: 20,
//     W: 20,
//     X: 20,
//     Y: 16,
//     Z: 14,
//     AA: 14,
//     AB: 16,
//     AC: 16,
//     AD: 12,
//     AE: 14,
//     AF: 18,
//     AG: 18,
//     AH: 18,
//     AI: 12,
//     AJ: 10,
//     AK: 14,
//     AL: 16,
//     AM: 16,
//     AN: 12,
//     AO: 14,
//     AP: 14,
//     AQ: 14,
//     AR: 14,
//     AS: 14,
//     AT: 14,
//     AU: 16,
//     AV: 16,
//     AW: 16,
//     AX: 16,
//     AY: 16,
//     AZ: 16,
//     BA: 16,
//     BB: 16,
//     BC: 16,
//     BD: 16,
//     BE: 16,
//     BF: 16,
//     BG: 16,
//     BH: 16,
//     BI: 16,
//   };

//   const headers = [
//     {
//       address: "A1",
//       text: "Hình thức mua hàng",
//       color: "CCFFFF",
//       dataValidation: {
//         showErrorMessage: true,
//         promptTitle: "AMIS ACCOUNTING",
//         prompt: `Lựa chọn hình thức mua hàng:
//     Mua hàng trong nước nhập kho
//     Mua hàng trong nước không qua kho
//     Nếu để trống mặc định là Mua hàng trong nước nhập kho.`,
//         showInputMessage: true,
//         allowBlank: true,
//       },
//     },
//     {
//       address: "B1",
//       text: "Phương thức thanh toán",
//       color: "CCFFFF",
//       dataValidation: {
//         showErrorMessage: true,
//         promptTitle: "AMIS ACCOUNTING",
//         prompt: `Nhập Phương thức thanh toán.
// Chưa thanh toán
// Tiền mặt
// Ủy nhiệm chi
// Séc chuyển khoản
// Séc tiền mặt
// Nếu để trống mặc định là Chưa thanh toán.`,
//         showInputMessage: true,
//         allowBlank: true,
//       },
//     },
//     { address: "C1", text: "Nhận kèm hóa đơn", color: "CCFFFF" },
//     { address: "D1", text: "Ngày hạch toán (*)", color: "CCFFFF" },
//     { address: "E1", text: "Ngày chứng từ (*)", color: "CCFFFF" },
//     { address: "F1", text: "Số phiếu nhập (*)", color: "CCFFFF" },
//     {
//       address: "G1",
//       text: "Số chứng từ ghi nợ/Số chứng từ thanh toán",
//       color: "CCFFFF",
//     },
//     { address: "H1", text: "Mẫu số HĐ", color: "CCFFFF" },
//     { address: "I1", text: "Ký hiệu HĐ", color: "CCFFFF" },
//     { address: "J1", text: "Số hóa đơn", color: "CCFFFF" },
//     { address: "K1", text: "Ngày hóa đơn", color: "CCFFFF" },
//     { address: "L1", text: "Số tài khoản chi", color: "CCFFFF" },
//     { address: "M1", text: "Tên ngân hàng chi", color: "CCFFFF" },
//     { address: "N1", text: "Mã nhà cung cấp", color: "CCFFFF" },
//     { address: "O1", text: "Tên nhà cung cấp", color: "CCFFFF" },
//     { address: "P1", text: "Địa chỉ", color: "CCFFFF" },
//     { address: "Q1", text: "Mã số thuế", color: "CCFFFF" },
//     { address: "R1", text: "Người giao hàng", color: "CCFFFF" },
//     { address: "S1", text: "Diễn giải", color: "CCFFFF" },
//     { address: "T1", text: "Số tài khoản nhận", color: "CCFFFF" },
//     { address: "U1", text: "Tên ngân hàng nhận", color: "CCFFFF" },
//     { address: "V1", text: "Lý do chi/nội dung thanh toán", color: "CCFFFF" },
//     { address: "W1", text: "Mã nhân viên mua hàng", color: "CCFFFF" },
//     { address: "X1", text: "Số lượng chứng từ kèm theo", color: "CCFFFF" },
//     { address: "Y1", text: "Hạn thanh toán", color: "CCFFFF" },
//     { address: "Z1", text: "Loại tiền", color: "CCFFFF" },
//     { address: "AA1", text: "Tỷ giá", color: "CCFFFF" },
//     { address: "AB1", text: "Mã hàng (*)", color: "CCFFCC" },
//     { address: "AC1", text: "Tên hàng", color: "CCFFCC" },
//     { address: "AD1", text: "Là dòng ghi chú", color: "CCFFCC" },
//     { address: "AE1", text: "Mã kho", color: "CCFFCC" },
//     { address: "AF1", text: "Hàng hóa giữ hộ/bán hộ", color: "CCFFCC" },
//     { address: "AG1", text: "TK kho/TK chi phí (*)", color: "CCFFCC" },
//     { address: "AH1", text: "TK công nợ/TK tiền (*)", color: "CCFFCC" },
//     { address: "AI1", text: "ĐVT", color: "CCFFCC" },
//     { address: "AJ1", text: "Số lượng", color: "CCFFCC" },
//     { address: "AK1", text: "Đơn giá", color: "CCFFCC" },
//     { address: "AL1", text: "Thành tiền", color: "CCFFCC" },
//     { address: "AM1", text: "Thành tiền quy đổi", color: "CCFFCC" },
//     { address: "AN1", text: "Tỷ lệ CK (%)", color: "CCFFCC" },
//     { address: "AO1", text: "Tiền chiết khấu", color: "CCFFCC" },
//     { address: "AP1", text: "Tiền chiết khấu quy đổi", color: "CCFFCC" },
//     { address: "AQ1", text: "% thuế GTGT", color: "CCFFCC" },
//     { address: "AR1", text: "% thuế suất KHAC", color: "CCFFCC" },
//     { address: "AS1", text: "Tiền thuế GTGT", color: "CCFFCC" },
//     { address: "AT1", text: "Tiền thuế GTGT quy đổi", color: "CCFFCC" },
//     { address: "AU1", text: "TK thuế GTGT", color: "CCFFCC" },
//     {
//       address: "AV1",
//       text: "Phí hàng về kho/Chi phí mua hàng",
//       color: "CCFFCC",
//     },
//     { address: "AW1", text: "Nhóm HHDV mua vào", color: "CCFFCC" },
//     { address: "AX1", text: "Số Lệnh sản xuất", color: "CCFFCC" },
//     { address: "AY1", text: "Mã khoản mục chi phí", color: "CCFFCC" },
//     { address: "AZ1", text: "Mã đơn vị", color: "CCFFCC" },
//     { address: "BA1", text: "Mã đối tượng THCP", color: "CCFFCC" },
//     { address: "BB1", text: "Mã công trình", color: "CCFFCC" },
//     { address: "BC1", text: "Số đơn đặt hàng", color: "CCFFCC" },
//     { address: "BD1", text: "Số đơn mua hàng", color: "CCFFCC" },
//     { address: "BE1", text: "Số hợp đồng mua", color: "CCFFCC" },
//     { address: "BF1", text: "Số hợp đồng bán", color: "CCFFCC" },
//     { address: "BG1", text: "Mã thống kê", color: "CCFFCC" },
//     { address: "BH1", text: "Số khế ước vay", color: "CCFFCC" },
//     { address: "BI1", text: "CP không hợp lý", color: "CCFFCC" },
//   ];

//   // Thiết lập độ rộng cột cho worksheet
//   for (const [column, width] of Object.entries(columnWidths)) {
//     worksheet.getColumn(column).width = width;
//   }

//   // worksheet.getCell("A1").dataValidation = {
//   //   showErrorMessage: true,
//   //   promptTitle: "AMIS ACCOUNTING",
//   //   prompt: `Lựa chọn hình thức mua hàng:
//   //   Mua hàng trong nước nhập kho
//   //   Mua hàng trong nước không qua kho
//   //   Nếu để trống mặc định là Mua hàng trong nước nhập kho.`,
//   //   showInputMessage: true,
//   //   allowBlank: true,
//   // };

//   headers.forEach((header) => {
//     setFontStyleHeader(
//       header.address,
//       11, // fontSize
//       true, // bold
//       header.text, // text
//       worksheet,
//       50, // row height
//       1, // column width
//       header.color // background color
//     );

//     if (header.dataValidation) {
//       worksheet.getCell(header.address).dataValidation = header.dataValidation;
//     }
//   });

//   const buffer = await workbook.xlsx.writeBuffer();
//   saveAs(new Blob([buffer]), `${fileName}.xlsx`);
// };

export const templateDauVaoMISA = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  // const excelData = data?.map((item: any, index: string) => {
  //   return {
  //     STT: (index + 1).toString(),
  //     "Ký hiệu mẫu số": item?.thongTinHoaDon?.khmshdon?.toString(),
  //     "Ký hiệu hóa đơn": item?.thongTinHoaDon?.khhdon?.toString(),
  //     "Số hóa đơn": item?.thongTinHoaDon?.shdon?.toString(),
  //     "Ngày, tháng, năm lập hóa đơn": item?.thongTinHoaDon?.ntao,
  //     "Tên người bán": item?.thongTinNguoiBan?.nbten,
  //     "Mã số thuế người bán": item?.thongTinNguoiBan?.mst,
  //     "Giá trị HHDV mua vào chưa có thuế": item?.tongTruocThue?.toString(),
  //     "Thuế GTGT mua vào": item?.thueSuat?.tsuat,
  //     "Trạng thái hóa đơn": item?.tthai?.toString(),
  //     "Ghi chú": item?.nky,
  //     "Trạng thái MST": item?.nky,
  //     "Tổng tiền phí": item?.tongThanhToan?.toString(),
  //   };
  // });

  const response = await fetch("../assets/template/HDDV_TEMPLATE_MISA.xlsx"); // Tải file từ thư mục public
  const arrayBuffer = await response.arrayBuffer(); // Chuyển đổi response thành ArrayBuffer

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);

  // Chọn worksheet đầu tiên
  const worksheet = workbook.worksheets[0];

  // Cập nhật dữ liệu vào template

  // Tạo file mới và lưu
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, `${fileName}.xlsx`);
};

export const templateDauRaMISA = async ({
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

  const columnWidths = {
    A: 30,
    B: 20,
    C: 34,
    D: 16,
    E: 30,
    F: 15,
    G: 18,
    H: 18,
    I: 18,
    J: 14,
    K: 18,
    L: 16,
    M: 12,
    N: 14,
    O: 26,
    P: 26,
    Q: 8,
    R: 20,
    S: 20,
    T: 20,
    U: 16,
    V: 18,
    W: 18,
    X: 9,
    Y: 9,
  };

  const headers = [
    {
      address: "A1",
      text: "Ngày hạch toán (*)",
      color: "CCCCFF",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Ngày hóa đơn",
          },
        ],
      },
    },
    {
      address: "B1",
      text: "Ngày chứng từ (*)",
      color: "CCCCFF",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Ngày hóa đơn",
          },
        ],
      },
    },
    { address: "C1", text: "Số chứng từ (*)", color: "CCCCFF" },
    {
      address: "D1",
      text: "Mẫu số HĐ",
      color: "CCCCFF",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Mẫu số hóa đơn",
          },
        ],
      },
    },
    { address: "E1", text: "Ký hiệu HĐ", color: "CCCCFF" },
    {
      address: "F1",
      text: "Số hóa đơn",
      color: "CCCCFF",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Số hóa đơn",
          },
        ],
      },
    },
    {
      address: "G1",
      text: "Ngày hóa đơn",
      color: "CCCCFF",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Ngày hóa đơn",
          },
        ],
      },
    },
    {
      address: "H1",
      text: "Mã khách hàng",
      color: "CCCCFF",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Mã khách hàng",
          },
        ],
      },
    },
    {
      address: "I1",
      text: "Tên khách hàng",
      color: "CCCCFF",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Ưu tiên lấy tên đơn vị ko có tên đơn vị lấy tên người mua hàng",
          },
        ],
      },
    },
    {
      address: "J1",
      text: "Địa chỉ",
      color: "CCCCFF",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Địa chỉ",
          },
        ],
      },
    },
    {
      address: "K1",
      text: "Mã số thuế",
      color: "CCCCFF",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Mã số thuế",
          },
        ],
      },
    },
    {
      address: "L1",
      text: "Diễn giải",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Tên HH,DV",
          },
        ],
      },
    },
    {
      address: "M1",
      text: "Mã hàng (*)",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Mã hàng hóa",
          },
        ],
      },
    },
    {
      address: "N1",
      text: "Tên hàng",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Tên HH,DV",
          },
        ],
      },
    },
    {
      address: "O1",
      text: "TK Tiền/Chi phí/Nợ (*)",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Mặc định 131",
          },
        ],
      },
    },
    {
      address: "P1",
      text: "Hình thức thanh toán",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Hình thức thanh toán",
          },
        ],
      },
    },
    {
      address: "Q1",
      text: "ĐVT",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Đơn vị tính",
          },
        ],
      },
    },
    {
      address: "R1",
      text: "Số lượng",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Số lượng",
          },
        ],
      },
    },
    {
      address: "S1",
      text: "Đơn giá",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Đơn giá sp",
          },
        ],
      },
    },
    {
      address: "T1",
      text: "Thành tiền",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Thành tiền sp trước thuế",
          },
        ],
      },
    },
    {
      address: "U1",
      text: "% thuế GTGT",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Thuế suất: 0,5,8,10,-1,-2,-3",
          },
        ],
      },
    },
    {
      address: "V1",
      text: "Tiền thuế GTGT",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Tiền thuế sp",
          },
        ],
      },
    },
    {
      address: "W1",
      text: "TK thuế GTGT",
      color: "FFFF00",
      note: {
        texts: [
          {
            font: {
              size: 11,
              bold: true,
              name: "Times New Roman",
            },
            text: "Thương: \n",
          },
          {
            font: {
              size: 11,
              name: "Times New Roman",
            },
            text: "Mặc định 33311",
          },
        ],
      },
    },
    { address: "X1", text: "Tiền tệ", color: "FFFF00" },
    { address: "Y1", text: "Tỷ giá", color: "FFFF00" },
  ];

  // Thiết lập độ rộng cột cho worksheet
  for (const [column, width] of Object.entries(columnWidths)) {
    worksheet.getColumn(column).width = width;
  }

  headers.forEach((header) => {
    setFontStyleHeader(
      header.address,
      11, // fontSize
      true, // bold
      header.text, // text
      worksheet,
      20, // row height
      1, // column width
      header.color // background color
    );

    if (header.note) {
      worksheet.getCell(header.address).note = header.note;
    }
  });

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), `${fileName}.xlsx`);
};
