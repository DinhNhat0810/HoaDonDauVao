import { isEmpty } from "lodash";
import { convertXmlToJson } from "../libs/common";
import { API_URL } from "../libs/constants";
import https from "../libs/https";

export const GetDanhMuc = async ({
  madv,
  loaiHD,
}: {
  madv: string;
  loaiHD: string;
}) => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GetDanhMuc xmlns="http://tempuri.org/">
          <madonvi>${madv}</madonvi>
          <loaiHD>${loaiHD}</loaiHD>
        </GetDanhMuc>
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
      dataJson["soap:Envelope"]["soap:Body"]["GetDanhMucResponse"][
        "GetDanhMucResult"
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
