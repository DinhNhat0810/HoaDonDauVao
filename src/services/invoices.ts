import { isEmpty } from "lodash";
import { convertXmlToJson } from "../libs/common";
import { API_URL } from "../libs/constants";
import https from "../libs/https";
import dayjs from "dayjs";

export const LayTGDongboDLcuoi = async ({ madv }: { madv: string }) => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <LayTGDongboDLcuoi xmlns="http://tempuri.org/">
        <madv>${madv}</madv>
        </LayTGDongboDLcuoi>
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
      dataJson["soap:Envelope"]["soap:Body"]["LayTGDongboDLcuoiResponse"][
        "LayTGDongboDLcuoiResult"
      ];

    if (!isEmpty(DocumentElement)) {
      return DocumentElement;
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const Luulogtruyxuatdl = async ({ madv }: { madv: string }) => {
  try {
    const soapRequest = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
          <Luulogtruyxuatdl xmlns="http://tempuri.org/">
          <madv>${madv}</madv>
          </Luulogtruyxuatdl>
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
      dataJson["soap:Envelope"]["soap:Body"]["LuulogtruyxuatdlResponse"][
        "LuulogtruyxuatdlResult"
      ];

    if (!isEmpty(DocumentElement)) {
      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const getInvoices = async ({
  type = "purchase",
  date,
  ttxly,
  state,
  taikhoanthue,
  typeInvoice = "hddt",
}: {
  type: string;
  date: any;
  ttxly: string;
  state?: string | null;
  taikhoanthue: any;
  typeInvoice?: string;
}) => {
  try {
    const hdmaytinhtien: {
      [key: string]: number;
    } = {
      hddt: 0,
      hdmtt: 1,
    };

    const soapRequest = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <GetDuLieuTuThue xmlns="http://tempuri.org/">
            <ttxly>${ttxly}</ttxly>
            <tungay>${dayjs(date[0]).format("DD/MM/YYYY")}T00:00:00</tungay>
            <denngay>${dayjs(date[1]).format("DD/MM/YYYY")}T23:59:59</denngay>
            <code>${state || ""}</code>
            <token>${taikhoanthue?.token}</token>
            <type>${type}</type>
            <madv>${taikhoanthue?.mst}</madv>
            <hdmaytinhtien>${hdmaytinhtien[typeInvoice]}</hdmaytinhtien>
          </GetDuLieuTuThue>
        </soap12:Body>
      </soap12:Envelope>
    `;

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
      dataJson["soap:Envelope"]["soap:Body"]["GetDuLieuTuThueResponse"][
        "GetDuLieuTuThueResult"
      ];

    if (!isEmpty(DocumentElement)) {
      if (JSON.parse(DocumentElement)?.status === 401) {
        return {
          status: 401,
          message:
            "Phiên làm việc đã hết hạn, vui lòng đăng nhập lại bằng tài khoản thuế",
        };
      }

      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    if (error?.response?.data?.status === 401) {
      return {
        status: 401,
        message:
          "Phiên làm việc đã hết hạn, vui lòng đăng nhập lại bằng tài khoản thuế",
      };
    }

    return null;
  }
};

export const GetDLT6 = async ({
  type = "purchase",
  date,
  ttxly,
  state,
  taikhoanthue,
  typeInvoice = "hddt",
}: {
  type: string;
  date: any;
  ttxly: string;
  state?: string | null;
  taikhoanthue: any;
  typeInvoice?: string;
}) => {
  try {
    const hdmaytinhtien: {
      [key: string]: number;
    } = {
      hddt: 0,
      hdmtt: 1,
    };

    const soapRequest = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <GetDLT6 xmlns="http://tempuri.org/">
            <ttxly>${ttxly}</ttxly>
            <tungay>${dayjs(date[0]).format("DD/MM/YYYY")}T00:00:00</tungay>
            <denngay>${dayjs(date[1]).format("DD/MM/YYYY")}T23:59:59</denngay>
            <code>${state || ""}</code>
            <token>${taikhoanthue?.token}</token>
            <type>${type}</type>
            <madv>${taikhoanthue?.mst}</madv>
            <hdmaytinhtien>${hdmaytinhtien[typeInvoice]}</hdmaytinhtien>
          </GetDLT6>
        </soap12:Body>
      </soap12:Envelope>
    `;

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
      dataJson["soap:Envelope"]["soap:Body"]["GetDLT6Response"][
        "GetDLT6Result"
      ];

    if (!isEmpty(DocumentElement)) {
      if (JSON.parse(DocumentElement)?.status === 401) {
        return {
          status: 401,
          message:
            "Phiên làm việc đã hết hạn, vui lòng đăng nhập lại bằng tài khoản thuế",
        };
      }

      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    if (error?.response?.data?.status === 401) {
      return {
        status: 401,
        message:
          "Phiên làm việc đã hết hạn, vui lòng đăng nhập lại bằng tài khoản thuế",
      };
    }

    return null;
  }
};

export const GetInvoiceDataAsync = async ({
  nbmst,
  khhdon,
  shdon,
  khmshdon,
  token,
}: {
  nbmst: string;
  khhdon: string;
  shdon: string;
  khmshdon: string;
  token: string;
}) => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <GetInvoiceDataAsync xmlns="http://tempuri.org/">
        <nbmst>${nbmst}</nbmst>
        <khhdon>${khhdon}</khhdon>
        <shdon>${shdon}</shdon>
        <khmshdon>${khmshdon}</khmshdon>
        <token>${token}</token>

        </GetInvoiceDataAsync>
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
      dataJson["soap:Envelope"]["soap:Body"]["GetInvoiceDataAsyncResponse"][
        "GetInvoiceDataAsyncResult"
      ];

    if (!isEmpty(DocumentElement)) {
      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const LuuTTHoadon = async ({
  jslstHoadon,
  hdmaytinhtien,
}: {
  jslstHoadon: string;
  hdmaytinhtien: number;
}) => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <LuuTTHoadon xmlns="http://tempuri.org/">
        <jslstHoadon>${jslstHoadon}</jslstHoadon>
        <hdmaytinhtien>${hdmaytinhtien}</hdmaytinhtien>
        </LuuTTHoadon>
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
      dataJson["soap:Envelope"]["soap:Body"]["LuuTTHoadonResponse"][
        "LuuTTHoadonResult"
      ];

    return DocumentElement;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
