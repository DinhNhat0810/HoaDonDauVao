import { XMLParser } from "fast-xml-parser";
import { isEmpty } from "lodash";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export function getDataFromXml(xmlDoc: any, key: any) {
  try {
    const resultNode = xmlDoc.getElementsByTagName(key)[0];
    const resultValue = resultNode?.textContent || resultNode?.innerHTML;
    return resultValue;
  } catch (error) {
    console.log(error);
  }
}
export function convertXmlToJson(xmlData: string) {
  const options: any = {
    attributeNamePrefix: "",
    ignoreAttributes: false,
  };

  const parser = new XMLParser();
  return parser.parse(xmlData, options);
}

export const convertToVnd = (value: number | string) => {
  if (!value || value === 0) return "0";

  return value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export const convertCksNguoiBan = (jsonString: string) => {
  // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
  const jsObject = JSON.parse(jsonString);

  // Hàm phân tích chuỗi Subject để lấy các giá trị
  const parseSubject = (subject: any) => {
    const result: any = {};
    // Biểu thức chính quy để tách các phần tử
    const regex = /(\w+)=(".*?"|[^,]*)/g;
    let match;

    while ((match = regex.exec(subject)) !== null) {
      const [_, key, value] = match;
      // Xóa dấu ngoặc kép nếu có và thêm vào đối tượng kết quả
      result[key] = value.replace(/^"|"$/g, "");
    }

    return result;
  };

  // Hàm kết hợp các giá trị từ đối tượng JSON và chuỗi Subject
  const extractValuesAsObject = (obj: any) => {
    const result: any = {};

    // Thêm các thuộc tính khác vào đối tượng kết quả
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (key === "Subject") {
          // Phân tích chuỗi Subject và kết hợp với đối tượng kết quả
          Object.assign(result, parseSubject(obj[key]));
        } else {
          // Thêm thuộc tính khác vào đối tượng kết quả
          result[key] = obj[key];
        }
      }
    }

    return result;
  };

  const allValuesObject = extractValuesAsObject(jsObject);

  return allValuesObject;
};

export const exportToExcel = (data: any, fileName: string) => {
  if (isEmpty(data)) return;

  const worksheet: any = XLSX.utils.json_to_sheet(data);

  worksheet["!cols"] = [
    {
      wch: 6,
    },
    {
      wch: 40,
    },
    { wch: 25 },
    { wch: 18 },
    { wch: 18 },
    { wch: 15 },
    { wch: 15 },
    { wch: 18 },
    { wch: 20 },
    { wch: 30 },
  ];

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, `${fileName}.xlsx`);
};
