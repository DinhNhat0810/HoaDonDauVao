import { convertXmlToJson } from "../libs/common";
import https from "../libs/https";

export const LuuTTHoadon = async ({
  username,
  passwd,
}: {
  username: string;
  passwd: string;
}) => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <LuutaikhoanTCT xmlns="http://tempuri.org/">
        <username>${username}</username>
        <passwd>${passwd}</passwd>
        </LuutaikhoanTCT>
    </soap12:Body>
    </soap12:Envelope>`;

    const response: any = await https({
      baseURL: `http://10.0.0.168:8010/apiquanlyhoadon.asmx`,
      method: "post",
      headers: {
        "Content-Type": "application/soap+xml;charset=UTF-8",
      },
      data: soapRequest,
    });

    const dataJson = convertXmlToJson(response);
    const DocumentElement =
      dataJson["soap:Envelope"]["soap:Body"]["LuutaikhoanTCTResponse"][
        "LuutaikhoanTCTResult"
      ];

    return DocumentElement;
  } catch (error: any) {
    console.log(error);
    return "0";
  }
};
