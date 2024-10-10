import { isEmpty } from "lodash";
import { convertXmlToJson } from "../libs/common";
import { API_URL } from "../libs/constants";
import https from "../libs/https";

export const GetBangkehoadon = async ({
  madv,
  loaiHD,
  tungay,
  denngay,
}: {
  madv: string;
  loaiHD: string;
  tungay: string;
  denngay: string;
}) => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GetBangkehoadon xmlns="http://tempuri.org/">
          <madonvi>${madv}</madonvi>
          <loaihd>${loaiHD}</loaihd>
          <tungay>${tungay}</tungay>
          <denngay>${denngay}</denngay>
        </GetBangkehoadon>
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
      dataJson["soap:Envelope"]["soap:Body"]["GetBangkehoadonResponse"][
        "GetBangkehoadonResult"
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

export const GetBaocaoDSHDRuiro = async () => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GetBaocaoDSHDRuiro xmlns="http://tempuri.org/">
        </GetBaocaoDSHDRuiro>
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
      dataJson["soap:Envelope"]["soap:Body"]["GetBaocaoDSHDRuiroResponse"][
        "GetBaocaoDSHDRuiroResult"
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

export const KiemtraTrangthaiMST = async ({ madv }: { madv: string }) => {
  try {
    const soapRequest = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
          <KiemtraTrangthaiMST xmlns="http://tempuri.org/">
            <mst>${madv}</mst>
          </KiemtraTrangthaiMST>
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
      dataJson["soap:Envelope"]["soap:Body"]["KiemtraTrangthaiMSTResponse"][
        "KiemtraTrangthaiMSTResult"
      ];

    console.log(DocumentElement);

    if (!isEmpty(DocumentElement)) {
      return DocumentElement;
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
