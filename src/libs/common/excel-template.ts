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

  console.log(data);

  const excelData = data?.map((item: any, index: string) => {
    return {
      STT: (index + 1).toString(),
      "Ký hiệu mẫu số": item?.khmshdon?.toString(),
      "Ký hiệu hóa đơn": item?.khhdon?.toString(),
      "Số hóa đơn": item?.shdon?.toString(),
      "Ngày, tháng, năm lập hóa đơn": item?.ntao,
      "Tên người bán": item?.tenncc,
      "Mã số thuế người bán": item?.mstnban,
      "Giá trị HHDV mua vào chưa có thuế": convertToVnd(
        Number(item?.tgtcthue)
      ).toString(),
      "Thuế GTGT mua vào": convertToVnd(Number(item?.tgtthue)).toString(),
      "Trạng thái hóa đơn": item?.trangthaihd?.toString(),
      "Ghi chú": item?.gchu,
      "Trạng thái MST": item?.ttnmuamst,
      "Tổng tiền phí": convertToVnd(item?.tgtttbso)?.toString(),
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
  const totalHHDV = data.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.tgtcthue;
  }, 0);
  worksheet.getCell(`H${worksheet?.rowCount}`).value = isNumber(totalHHDV)
    ? convertToVnd(totalHHDV)
    : "0";

  // Tổng Thuế GTGT mua vào
  const totalGTGT = data.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.tgtthue;
  }, 0);
  worksheet.getCell(`I${worksheet?.rowCount}`).value = isNumber(totalGTGT)
    ? convertToVnd(totalGTGT)
    : "0";

  // Tổng Tổng tiền phí
  const total = data.reduce((accumulator: any, currentValue: any) => {
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

  //Value Tổng Giá trị HHDV mua vào chưa có thuế (**)
  worksheet.getCell(`E${worksheet?.rowCount}`).value = isNumber(totalHHDV)
    ? convertToVnd(totalHHDV)
    : "0";
  worksheet.getCell(`E${worksheet?.rowCount}`).font = {
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

  //Value Tổng số thuế GTGT của HHDV mua vào (***)
  worksheet.getCell(`E${worksheet?.rowCount}`).value = isNumber(totalGTGT)
    ? convertToVnd(totalGTGT)
    : "0";
  worksheet.getCell(`E${worksheet?.rowCount}`).font = {
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

  //Value Tổng tiền phí của HHDV mua vào
  worksheet.getCell(`E${worksheet?.rowCount}`).value = isNumber(total)
    ? convertToVnd(total)
    : "0";
  worksheet.getCell(`E${worksheet?.rowCount}`).font = {
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
      "Ký hiệu mẫu số": item?.khmshdon?.toString(),
      "Ký hiệu hóa đơn": item?.khhdon?.toString(),
      "Số hóa đơn": item?.shdon?.toString(),
      "Ngày, tháng, năm lập hóa đơn": item?.ntao,
      "Tên người mua": item?.tenncc,
      "Mã số thuế người mua": item?.nmmst,
      "Giá trị HHDV mua vào chưa có thuế": convertToVnd(
        Number(item?.tgtcthue)
      ).toString(),
      "Thuế GTGT mua vào": convertToVnd(Number(item?.tgtthue)).toString(),
      "Trạng thái hóa đơn": item?.trangthaihd?.toString(),
      "Ghi chú": item?.gchu,
      "Trạng thái MST": item?.ttnmuamst,
      "Tổng tiền phí": convertToVnd(item?.tgtttbso)?.toString(),
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
  const totalHHDV = data.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.tgtcthue;
  }, 0);
  worksheet.getCell(`H${worksheet?.rowCount}`).value = isNumber(totalHHDV)
    ? convertToVnd(totalHHDV)
    : "0";

  // Tổng Thuế GTGT mua vào
  const totalGTGT = data.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.tgtthue;
  }, 0);
  worksheet.getCell(`I${worksheet?.rowCount}`).value = isNumber(totalGTGT)
    ? convertToVnd(totalGTGT)
    : "0";

  // Tổng Tổng tiền phí
  const total = data.reduce((accumulator: any, currentValue: any) => {
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

  //Value Tổng Giá trị HHDV mua vào chưa có thuế (**)
  worksheet.getCell(`E${worksheet?.rowCount}`).value = isNumber(totalHHDV)
    ? convertToVnd(totalHHDV)
    : "0";
  worksheet.getCell(`E${worksheet?.rowCount}`).font = {
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

  //Value Tổng số thuế GTGT của HHDV mua vào (***)
  worksheet.getCell(`E${worksheet?.rowCount}`).value = isNumber(totalGTGT)
    ? convertToVnd(totalGTGT)
    : "0";
  worksheet.getCell(`E${worksheet?.rowCount}`).font = {
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

  //Value Tổng tiền phí của HHDV mua vào
  worksheet.getCell(`E${worksheet?.rowCount}`).value = isNumber(total)
    ? convertToVnd(total)
    : "0";
  worksheet.getCell(`E${worksheet?.rowCount}`).font = {
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
      "Ký hiệu mẫu số": item?.khmshdon?.toString(),
      "Ký hiệu hóa đơn": item?.khhdon?.toString(),
      "Số hóa đơn": item?.shdon?.toString(),
      "Ngày lập": item?.ntao,
      "MST người bán/MST người xuất hàng": item?.mstnban,
      "Tên người bán/Tên người xuất hàng": item?.tenncc,
      "Địa chỉ người bán": item?.nbdchi,
      "Tổng tiền chưa thuế": Number(item?.tgtcthue).toString(),
      "Tổng tiền thuế": Number(item?.tgtthue).toString(),
      "Tổng tiền chiết khấu thương mại": item?.ttcktmai?.toString(),
      "Tổng tiền phí": item?.tgtttbso?.toString(),
      "Tổng tiền thanh toán": item?.tgtttbso?.toString(),
      "Đơn vị tiền tệ": item?.dvtte,
      "Tỷ giá": item?.tgia,
      "Trạng thái hóa đơn": item?.trangthaihd?.toString(),
      "Kết quả kiểm tra hóa đơn": item?.kqKiemTra?.HDRuiro,
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
  worksheet.getColumn("I").width = 20;
  worksheet.getColumn("J").width = 20;
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
      "Ký hiệu mẫu số": item?.khmshdon?.toString(),
      "Ký hiệu hóa đơn": item?.khhdon?.toString(),
      "Số hóa đơn": item?.shdon?.toString(),
      "Ngày lập": item?.ntao,
      "MST người mua/MST người nhận hàng": item?.nmmst,
      "Tên người mua/Tên người nhận hàng": item?.nmten,
      "Địa chỉ người mua": item?.nmdchi,

      "Tổng tiền chưa thuế": Number(item?.tgtcthue).toString(),
      "Tổng tiền thuế": Number(item?.tgtthue).toString(),
      "Tổng tiền chiết khấu thương mại": item?.ttcktmai?.toString(),
      "Tổng tiền phí": item?.tgtttbso?.toString(),
      "Tổng tiền thanh toán": item?.tgtttbso?.toString(),
      "Đơn vị tiền tệ": item?.dvtte,
      "Tỷ giá": item?.tgia,
      "Trạng thái hóa đơn": item?.trangthaihd?.toString(),
      "Kết quả kiểm tra hóa đơn": item?.kqKiemTra?.HDRuiro,
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
  worksheet.getColumn("I").width = 20;
  worksheet.getColumn("J").width = 20;
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

  const mapDataFollowDsHangHoa = data?.flatMap((item: any) => {
    const { dshanghoa, ...rest } = item;
    return dshanghoa.map((dshanghoaItem: any) => ({
      ...rest,
      ...dshanghoaItem,
    }));
  });

  const excelData = mapDataFollowDsHangHoa?.map((item: any, index: string) => {
    return {
      "Mã ncc": "",
      "Tên nhà cung cấp": item?.tenncc,
      "Người giao hàng": "",
      "Ngày chứng từ": item?.ntao || "",
      "Số chứng từ": "",

      "Ngày hóa đơn": item?.ntao || "",
      "Số hóa đơn": item?.shdon || "",
      "Ký hiệu": item?.khhdon || "",
      "Diễn giải": item?.THHDVu || "",
      "Mã hàng": item?.MHHDVu || "",
      "Tên mặt hàng": item?.THHDVu || "",
      Đvt: item?.DVTinh || "",
      "Mã kho": "",

      "Số lượng": item?.SLuong || "",
      Giá: item?.DGia?.toString() || "",
      "Tiền hàng": item?.ThTien?.toString() || "",
      "Mã nt": "",
      "Tỷ giá": item?.tgia || "",
      "Tài khoản có": "",
      "Tài khoản nợ": "",
      "Mã thanh toán": "",
      "Mẫu báo cáo": "",
      "Mã tính chất": item?.TChat || "",
      "Mẫu hóa đơn": "",

      "Số hóa đơn ": item?.shdon || "",
      "Ký hiệu ": item?.khhdon || "",
      "Ngày hóa đơn ": item?.ntao || "",
      "Mã nhà cung cấp (Trong phần thuế)": "",
      "Tên nhà cung cấp (Trong phần thuế)": item?.tenncc || "",
      "Địa chỉ": item?.nbdchi || "",
      "Mã số thuế": item?.mstnban || "",
      "Tên hàng hóa - dịch vụ": item?.THHDVu || "",
      "Tiền hàng ": item?.ThTien?.toString() || "",
      "Mã thuế": "",
      "Tk thuế": item?.TSuat,
      Thuế: "",
      "Cục thuế": "",
      "Ghi chú": item?.gchu || "",
      "Vụ việc": "",
      "Bộ phận": "",
      Lsx: "",
      "Sản phẩm": "",
      "Hợp đồng": "",
      Phí: "",
      "Khế ước": "",
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
    O: 20,
    P: 20,
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
    AF: 20,
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

  let rowIndex = 2;
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

export const templateDauRaFAST = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  const mapDataFollowDsHangHoa = data?.flatMap((item: any) => {
    const { dshanghoa, ...rest } = item;
    return dshanghoa.map((dshanghoaItem: any) => ({
      ...rest,
      ...dshanghoaItem,
    }));
  });

  const excelData = mapDataFollowDsHangHoa?.map((item: any, index: string) => {
    return {
      "Quyển c.từ(ma_qs)": "",
      "Số hđ(so_ct)": item?.shdon,
      "Ngày hóa đơn": item?.ntao,
      "Mã khách": "",
      "Người mua": item?.nmten,
      "Mã hàng hóa": item?.MHHDVu,
      "Tên h.hóa, d.vụ(ten_vt)": item?.THHDVu,
      "Đvt(dvt)": item?.DVTinh,
      "Số lượng:Q(so_luong)": item?.SLuong,
      "Tỷ giá:R(ty_gia)": item?.tgia?.toString(),
      "Mã t.suất(ma_thue_i)": "",
      "Thuế suất(thue_suati)": item?.TSuat,
      "Đơn giá:P0(gia2)": item?.DGia?.toString(),
      "Thành tiền:N0(tien2)": item?.ThTien?.toString(),
      "Tiền thuế:N0(thue)": "",
    };
  });

  const response = await fetch("/template/HDDR_TEMPLATE_FAST.xlsx"); // Tải file từ thư mục public
  const arrayBuffer = await response.arrayBuffer(); // Chuyển đổi response thành ArrayBuffer

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);

  // Chọn worksheet đầu tiên
  const worksheet = workbook.worksheets[0];

  // Cập nhật dữ liệu vào template
  excelData.forEach((item: any, index: number) => {
    const rowIndex = index + 2;
    worksheet.getCell(`A${rowIndex}`).value = item["Quyển c.từ(ma_qs)"];
    worksheet.getCell(`B${rowIndex}`).value = item["Số hđ(so_ct)"];
    worksheet.getCell(`C${rowIndex}`).value = item["Ngày hóa đơn"];
    worksheet.getCell(`D${rowIndex}`).value = item["Mã khách"];
    worksheet.getCell(`E${rowIndex}`).value = item["Người mua"];
    worksheet.getCell(`F${rowIndex}`).value = item["Mã hàng hóa"];
    worksheet.getCell(`G${rowIndex}`).value = item["Tên h.hóa, d.vụ(ten_vt)"];
    worksheet.getCell(`H${rowIndex}`).value = item["Đvt(dvt)"];
    worksheet.getCell(`I${rowIndex}`).value = item["Số lượng:Q(so_luong)"];
    worksheet.getCell(`J${rowIndex}`).value = item["Tỷ giá:R(ty_gia)"];
    worksheet.getCell(`K${rowIndex}`).value = item["Mã t.suất(ma_thue_i)"];
    worksheet.getCell(`L${rowIndex}`).value = item["Thuế suất(thue_suati)"];
    worksheet.getCell(`M${rowIndex}`).value = item["Đơn giá:P0(gia2)"];
    worksheet.getCell(`N${rowIndex}`).value = item["Thành tiền:N0(tien2)"];
    worksheet.getCell(`O${rowIndex}`).value = item["Tiền thuế:N0(thue)"];
  });

  // Tạo file mới và lưu
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, `${fileName}.xlsx`);
};

export const templateDauVaoMISA = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  const mapDataFollowDsHangHoa = data?.flatMap((item: any) => {
    const { dshanghoa, ...rest } = item;
    return dshanghoa.map((dshanghoaItem: any) => ({
      ...rest,
      ...dshanghoaItem,
    }));
  });

  const excelData = mapDataFollowDsHangHoa?.map((item: any, index: string) => {
    return {
      "Hình thức thanh toán": "",
      "Phương thức thanh toán": item?.thtttoan,

      "Nhận kèm hóa đơn": "",
      "Ngày hạch toán (*)": "",
      "Ngày chứng từ (*)": "",
      "Số phiếu nhập (*)": "",
      "Số chứng từ ghi nợ/Số chứng từ thanh toán": "",
      "Mẫu số HĐ": item?.khmshdon,
      "Ký hiệu HĐ": item?.khhdon,
      "Số hóa đơn": item?.shdon,
      "Ngày hóa đơn": item?.ntao,
      "Số tài khoản chi": "",
      "Tên ngân hàng chi": "",
      "Mã nhà cung cấp": "",
      "Tên nhà cung cấp": item?.tenncc,
      "Địa chỉ": item?.nbdchi,
      "Mã số thuế": item?.mstnban,
      "Người giao hàng": "",
      "Diễn giải": item?.THHDVu,
      "Số tài khoản nhận": "",
      "Tên ngân hàng nhận": "",
      "Lý do chi/nội dung thanh toán": "",
      "Mã nhân viên mua hàng": "",

      "Số lượng chứng từ kèm theo": "",
      "Hạn thanh toán": "",
      "Loại tiền": item?.dvtte,
      "Tỷ giá": item?.tgia?.toString(),
      "Mã hàng (*)": item?.MHHDVu,
      "Tên hàng": item?.THHDVu,
      "Là dòng ghi chú": "",
      "Mã kho": "",
      "Hàng hóa giữ hộ/bán hộ": "",
      "TK kho/TK chi phí (*)": "",
      "TK công nợ/TK tiền (*)": "",
      ĐVT: item?.DVTinh,
      "Số lượng": item?.SLuong,
      "Đơn giá": item?.DGia?.toString(),
      "Thành tiền": item?.ThTien?.toString(),
      "Thành tiền quy đổi": "",

      "Tỷ lệ CK (%)": "",
      "Tiền chiết khấu": "",
      "Tiền chiết khấu quy đổi": "",
      "% thuế GTGT": item?.TSuat,
      "% thuế suất KHAC": "",
      "Tiền thuế GTGT": "",
      "Tiền thuế GTGT quy đổi": "",
      "TK thuế GTGT": "",
      "Phí hàng về kho/Chi phí mua hàng": "",
      "Nhóm HHDV mua vào": "",

      "Số Lệnh sản xuất": "",
      "Mã khoản mục chi phí": "",
      "Mã đơn vị": "",
      "Mã đối tượng THCP": "",
      "Mã công trình": "",
      "Số đơn đặt hàng": "",
      "Số đơn mua hàng": "",
      "Số hợp đồng mua": "",
      "Số hợp đồng bán": "",
      "Mã thống kê": "",
      "Số khế ước vay": "",
      "CP không hợp lý": "",
    };
  });

  const response = await fetch("/template/HDDV_TEMPLATE_MISA.xlsx"); // Tải file từ thư mục public

  const arrayBuffer = await response.arrayBuffer(); // Chuyển đổi response thành ArrayBuffer

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);

  // Chọn worksheet đầu tiên
  const worksheet = workbook.worksheets[0];

  // Cập nhật dữ liệu vào template
  excelData.forEach((item: any, index: number) => {
    const rowIndex = index + 2;
    worksheet.getCell(`A${rowIndex}`).value = item["Hình thức thanh toán"];
    worksheet.getCell(`B${rowIndex}`).value = item["Phương thức thanh toán"];
    worksheet.getCell(`C${rowIndex}`).value = item["Nhận kèm hóa đơn"];
    worksheet.getCell(`D${rowIndex}`).value = item["Ngày hạch toán (*)"];
    worksheet.getCell(`E${rowIndex}`).value = item["Ngày chứng từ (*)"];
    worksheet.getCell(`F${rowIndex}`).value = item["Số phiếu nhập (*)"];
    worksheet.getCell(`G${rowIndex}`).value =
      item["Số chứng từ ghi nợ/Số chứng từ thanh toán"];
    worksheet.getCell(`H${rowIndex}`).value = item["Mẫu số HĐ"];
    worksheet.getCell(`I${rowIndex}`).value = item["Ký hiệu HĐ"];
    worksheet.getCell(`J${rowIndex}`).value = item["Số hóa đơn"];
    worksheet.getCell(`K${rowIndex}`).value = item["Ngày hóa đơn"];
    worksheet.getCell(`L${rowIndex}`).value = item["Số tài khoản chi"];
    worksheet.getCell(`M${rowIndex}`).value = item["Tên ngân hàng chi"];
    worksheet.getCell(`N${rowIndex}`).value = item["Mã nhà cung cấp"];
    worksheet.getCell(`O${rowIndex}`).value = item["Tên nhà cung cấp"];
    worksheet.getCell(`P${rowIndex}`).value = item["Địa chỉ"];
    worksheet.getCell(`Q${rowIndex}`).value = item["Mã số thuế"];
    worksheet.getCell(`R${rowIndex}`).value = item["Người giao hàng"];
    worksheet.getCell(`S${rowIndex}`).value = item["Diễn giải"];
    worksheet.getCell(`T${rowIndex}`).value = item["Số tài khoản nhận"];
    worksheet.getCell(`U${rowIndex}`).value = item["Tên ngân hàng nhận"];
    worksheet.getCell(`V${rowIndex}`).value =
      item["Lý do chi/nội dung thanh toán"];
    worksheet.getCell(`W${rowIndex}`).value = item["Mã nhân viên mua hàng"];
    worksheet.getCell(`X${rowIndex}`).value =
      item["Số lượng chứng từ kèm theo"];
    worksheet.getCell(`Y${rowIndex}`).value = item["Hạn thanh toán"];
    worksheet.getCell(`Z${rowIndex}`).value = item["Loại tiền"];
    worksheet.getCell(`AA${rowIndex}`).value = item["Tỷ giá"];
    worksheet.getCell(`AB${rowIndex}`).value = item["Mã hàng (*)"];
    worksheet.getCell(`AC${rowIndex}`).value = item["Tên hàng"];
    worksheet.getCell(`AD${rowIndex}`).value = item["Là dòng ghi chú"];
    worksheet.getCell(`AE${rowIndex}`).value = item["Mã kho"];
    worksheet.getCell(`AF${rowIndex}`).value = item["Hàng hóa giữ hộ/bán hộ"];
    worksheet.getCell(`AG${rowIndex}`).value = item["TK kho/TK chi phí (*)"];
    worksheet.getCell(`AH${rowIndex}`).value = item["TK công nợ/TK tiền (*)"];
    worksheet.getCell(`AI${rowIndex}`).value = item["ĐVT"];
    worksheet.getCell(`AJ${rowIndex}`).value = item["Số lượng"];
    worksheet.getCell(`AK${rowIndex}`).value = item["Đơn giá"];
    worksheet.getCell(`AL${rowIndex}`).value = item["Thành tiền"];
    worksheet.getCell(`AM${rowIndex}`).value = item["Thành tiền quy đổi"];
    worksheet.getCell(`AN${rowIndex}`).value = item["Tỷ lệ CK (%)"];
    worksheet.getCell(`AO${rowIndex}`).value = item["Tiền chiết khấu"];
    worksheet.getCell(`AP${rowIndex}`).value = item["Tiền chiết khấu quy đổi"];
    worksheet.getCell(`AQ${rowIndex}`).value = item["% thuế GTGT"];
    worksheet.getCell(`AR${rowIndex}`).value = item["% thuế suất KHAC"];
    worksheet.getCell(`AS${rowIndex}`).value = item["Tiền thuế GTGT"];
    worksheet.getCell(`AT${rowIndex}`).value = item["Tiền thuế GTGT quy đổi"];
    worksheet.getCell(`AU${rowIndex}`).value = item["TK thuế GTGT"];
    worksheet.getCell(`AV${rowIndex}`).value =
      item["Phí hàng về kho/Chi phí mua hàng"];
    worksheet.getCell(`AW${rowIndex}`).value = item["Nhóm HHDV mua vào"];
    worksheet.getCell(`AX${rowIndex}`).value = item["Số Lệnh sản xuất"];
    worksheet.getCell(`AY${rowIndex}`).value = item["Mã khoản mục chi phí"];
    worksheet.getCell(`AZ${rowIndex}`).value = item["Mã đơn vị"];
    worksheet.getCell(`BA${rowIndex}`).value = item["Mã đối tượng THCP"];
    worksheet.getCell(`BB${rowIndex}`).value = item["Mã công trình"];
    worksheet.getCell(`BC${rowIndex}`).value = item["Số đơn đặt hàng"];
    worksheet.getCell(`BD${rowIndex}`).value = item["Số đơn mua hàng"];
    worksheet.getCell(`BE${rowIndex}`).value = item["Số hợp đồng mua"];
    worksheet.getCell(`BF${rowIndex}`).value = item["Số hợp đồng bán"];
    worksheet.getCell(`BG${rowIndex}`).value = item["Mã thống kê"];
    worksheet.getCell(`BH${rowIndex}`).value = item["Số khế ước vay"];
    worksheet.getCell(`BI${rowIndex}`).value = item["CP không hợp lý"];

    worksheet.getCell(`A${rowIndex}`).alignment = {
      wrapText: true,
    };
  });

  // Tạo file mới và lưu
  const updatedBuffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([updatedBuffer]), `${fileName}.xlsx`);
};

export const templateDauRaMISA = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  const mapDataFollowDsHangHoa = data?.flatMap((item: any) => {
    const { dshanghoa, ...rest } = item;
    return dshanghoa.map((dshanghoaItem: any) => ({
      ...rest,
      ...dshanghoaItem,
    }));
  });

  const excelData = mapDataFollowDsHangHoa?.map((item: any) => {
    return {
      "Ngày hạch toán (*)": "",
      "Ngày chứng từ (*)": "",
      "Số chứng từ (*)": "",
      "Mẫu số HĐ": item?.khmshdon?.toString(),
      "Ký hiệu HĐ": item?.khhdon?.toString(),
      "Số hóa đơn": item?.shdon?.toString(),
      "Ngày hóa đơn": item?.ntao,
      "Mã khách hàng": "",
      "Tên khách hàng": item?.nmten,
      "Địa chỉ": item?.nmdchi,
      "Mã số thuế": item?.nmmst,
      "Diễn giải": item?.THHDVu,
      "Mã hàng (*)": item?.MHHDVu,
      "Tên hàng": item?.THHDVu,
      "TK Tiền/Chi phí/Nợ (*)": "",
      "Hình thức thanh toán": item?.thtttoan,
      ĐVT: item?.DVTinh,
      "Số lượng": item?.SLuong,
      "Đơn giá": item?.DGia?.toString(),
      "Thành tiền": item?.ThTien?.toString(),
      "% thuế GTGT": item?.TSuat,
      "Tiền thuế GTGT": "",
      "TK thuế GTGT": "",
      "Tiền tệ": item?.dvtte,
      "Tỷ giá": item?.tgia?.toString(),
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

  let rowIndex = 2;
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

export const templateDauVao = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  const response = await fetch("/template/HDDV_TEMPLATE.xlsx"); // Tải file từ thư mục public

  const arrayBuffer = await response.arrayBuffer(); // Chuyển đổi response thành ArrayBuffer

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);

  // Chọn worksheet đầu tiên
  const worksheet = workbook.worksheets[0];

  const alignment: any = {
    wrapText: true,
    vertical: "top",
    horizontal: "left",
  };

  // Cập nhật dữ liệu vào template
  data.forEach((item: any, index: number) => {
    const rowIndex = index + 2;

    worksheet.getCell(`A${rowIndex}`).value = item["STT"];
    worksheet.getCell(`B${rowIndex}`).value = item["Thông tin người bán"];
    worksheet.getCell(`C${rowIndex}`).value = item["Mẫu số / Ký hiệu / Số HĐ"];
    worksheet.getCell(`D${rowIndex}`).value = item["Ngày lập"];
    worksheet.getCell(`E${rowIndex}`).value = item["Ngày ký"];
    worksheet.getCell(`F${rowIndex}`).value = item["Tổng tiền"];
    worksheet.getCell(`G${rowIndex}`).value = item["Ngày cấp mã CQT"];
    worksheet.getCell(`H${rowIndex}`).value = item["Hình thức HĐ"];
    worksheet.getCell(`I${rowIndex}`).value = item["Trạng thái MST người bán"];

    worksheet.getCell(`A${rowIndex}`).alignment = {
      wrapText: true,
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell(`B${rowIndex}`).alignment = alignment;
    worksheet.getCell(`C${rowIndex}`).alignment = alignment;
    worksheet.getCell(`D${rowIndex}`).alignment = alignment;
    worksheet.getCell(`E${rowIndex}`).alignment = alignment;
    worksheet.getCell(`F${rowIndex}`).alignment = alignment;
    worksheet.getCell(`G${rowIndex}`).alignment = alignment;
    worksheet.getCell(`H${rowIndex}`).alignment = alignment;
    worksheet.getCell(`I${rowIndex}`).alignment = alignment;
  });

  // Tạo file mới và lưu
  const updatedBuffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([updatedBuffer]), `${fileName}.xlsx`);
};

export const templateDanhMucNCC = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  const response = await fetch("/template/DANHMUC_NCC_TEMPLATE.xlsx"); // Tải file từ thư mục public

  const arrayBuffer = await response.arrayBuffer(); // Chuyển đổi response thành ArrayBuffer

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);

  // Chọn worksheet đầu tiên
  const worksheet = workbook.worksheets[0];

  const alignment: any = {
    wrapText: true,
    vertical: "top",
    horizontal: "left",
  };

  // Cập nhật dữ liệu vào template
  data.forEach((item: any, index: number) => {
    const rowIndex = index + 2;

    worksheet.getCell(`A${rowIndex}`).value = item["STT"];
    worksheet.getCell(`B${rowIndex}`).value = item["Tên nhà cung cấp"];
    worksheet.getCell(`C${rowIndex}`).value = item["Địa chỉ"];
    worksheet.getCell(`D${rowIndex}`).value = item["SL hoá đơn đầu vào"];
    worksheet.getCell(`E${rowIndex}`).value = item["SL hoá đơn đầu ra"];
    worksheet.getCell(`F${rowIndex}`).value = item["Ngày kiểm tra"];
    worksheet.getCell(`G${rowIndex}`).value = item["Kết quả kiểm tra"];
    worksheet.getCell(`H${rowIndex}`).value = item["Tình trạng hoạt động"];

    worksheet.getCell(`A${rowIndex}`).alignment = {
      wrapText: true,
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell(`B${rowIndex}`).alignment = alignment;
    worksheet.getCell(`C${rowIndex}`).alignment = alignment;
    worksheet.getCell(`D${rowIndex}`).alignment = alignment;
    worksheet.getCell(`E${rowIndex}`).alignment = alignment;
    worksheet.getCell(`F${rowIndex}`).alignment = alignment;
    worksheet.getCell(`G${rowIndex}`).alignment = alignment;
    worksheet.getCell(`H${rowIndex}`).alignment = alignment;
    worksheet.getCell(`I${rowIndex}`).alignment = alignment;
  });

  // Tạo file mới và lưu
  const updatedBuffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([updatedBuffer]), `${fileName}.xlsx`);
};

export const templateDanhMucKhachHang = async ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (isEmpty(data)) return;

  const response = await fetch("/template/DANHMUC_KHACHHANG_TEMPLATE.xlsx"); // Tải file từ thư mục public

  const arrayBuffer = await response.arrayBuffer(); // Chuyển đổi response thành ArrayBuffer

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(arrayBuffer);

  // Chọn worksheet đầu tiên
  const worksheet = workbook.worksheets[0];

  const alignment: any = {
    wrapText: true,
    vertical: "top",
    horizontal: "left",
  };

  // Cập nhật dữ liệu vào template
  data.forEach((item: any, index: number) => {
    const rowIndex = index + 2;

    worksheet.getCell(`A${rowIndex}`).value = item["STT"];
    worksheet.getCell(`B${rowIndex}`).value = item["Tên khách hàng"];
    worksheet.getCell(`C${rowIndex}`).value = item["Địa chỉ"];
    worksheet.getCell(`D${rowIndex}`).value = item["SL hoá đơn đầu vào"];
    worksheet.getCell(`E${rowIndex}`).value = item["SL hoá đơn đầu ra"];
    worksheet.getCell(`F${rowIndex}`).value = item["Ngày kiểm tra"];
    worksheet.getCell(`G${rowIndex}`).value = item["Kết quả kiểm tra"];
    worksheet.getCell(`H${rowIndex}`).value = item["Tình trạng hoạt động"];

    worksheet.getCell(`A${rowIndex}`).alignment = {
      wrapText: true,
      vertical: "middle",
      horizontal: "center",
    };
    worksheet.getCell(`B${rowIndex}`).alignment = alignment;
    worksheet.getCell(`C${rowIndex}`).alignment = alignment;
    worksheet.getCell(`D${rowIndex}`).alignment = alignment;
    worksheet.getCell(`E${rowIndex}`).alignment = alignment;
    worksheet.getCell(`F${rowIndex}`).alignment = alignment;
    worksheet.getCell(`G${rowIndex}`).alignment = alignment;
    worksheet.getCell(`H${rowIndex}`).alignment = alignment;
    worksheet.getCell(`I${rowIndex}`).alignment = alignment;
  });

  // Tạo file mới và lưu
  const updatedBuffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([updatedBuffer]), `${fileName}.xlsx`);
};
