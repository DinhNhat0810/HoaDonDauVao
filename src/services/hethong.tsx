import { isEmpty } from "lodash";
import { convertXmlToJson } from "../libs/common";
import { API_URL } from "../libs/constants";
import https from "../libs/https";

export const GetThongTinDanhNghiep = async ({ madv }: { madv: string }) => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GetThongTinDanhNghiep xmlns="http://tempuri.org/">
          <madonvi>${madv}</madonvi>
        </GetThongTinDanhNghiep>
    </soap12:Body>
    </soap12:Envelope>`;

    const response: any = await https({
      baseURL: API_URL,
      method: "post",
      headers: {
        "Content-Type": "application/soap+xml;charset=UTF-8",
      },
      data: soapRequest,
    });

    const dataJson = convertXmlToJson(response);
    const DocumentElement =
      dataJson["soap:Envelope"]["soap:Body"]["GetThongTinDanhNghiepResponse"][
        "GetThongTinDanhNghiepResult"
      ];

    if (!isEmpty(JSON.parse(DocumentElement))) {
      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const GetLichsudangkyGDV = async () => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GetLichsudangkyGDV xmlns="http://tempuri.org/">
        </GetLichsudangkyGDV>
    </soap12:Body>
    </soap12:Envelope>`;

    const response: any = await https({
      baseURL: API_URL,
      method: "post",
      headers: {
        "Content-Type": "application/soap+xml;charset=UTF-8",
      },
      data: soapRequest,
    });

    const dataJson = convertXmlToJson(response);
    const DocumentElement =
      dataJson["soap:Envelope"]["soap:Body"]["GetLichsudangkyGDVResponse"][
        "GetLichsudangkyGDVResult"
      ];

    if (!isEmpty(JSON.parse(DocumentElement))) {
      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const GetThongtintainguyen = async () => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GetThongtintainguyen xmlns="http://tempuri.org/">
        </GetThongtintainguyen>
    </soap12:Body>
    </soap12:Envelope>`;

    const response: any = await https({
      baseURL: API_URL,
      method: "post",
      headers: {
        "Content-Type": "application/soap+xml;charset=UTF-8",
      },
      data: soapRequest,
    });

    const dataJson = convertXmlToJson(response);
    const DocumentElement =
      dataJson["soap:Envelope"]["soap:Body"]["GetThongtintainguyenResponse"][
        "GetThongtintainguyenResult"
      ];

    if (!isEmpty(JSON.parse(DocumentElement))) {
      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
