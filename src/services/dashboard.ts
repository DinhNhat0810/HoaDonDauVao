import { convertXmlToJson } from "../libs/common";
import https from "../libs/https";

export const Thongtintainguyen = async ({ mstnban }: { mstnban: string }) => {
  try {
    const soapRequest = `
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
        <Thongtintainguyen  xmlns="http://tempuri.org/">
        <mstnban>${mstnban}</mstnban>
        </Thongtintainguyen >
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
      dataJson["soap:Envelope"]["soap:Body"]["ThongtintainguyenResponse"][
        "ThongtintainguyenResult"
      ];

    console.log(DocumentElement);

    return DocumentElement;
  } catch (error: any) {
    console.log(error);
    return "0";
  }
};

export const TongHDDaxuly = async ({
  madonvi,
  tungay,
  denngay,
}: {
  madonvi: string;
  tungay: string;
  denngay: string;
}) => {
  try {
    const soapRequest = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
          <TongHDDaxuly xmlns="http://tempuri.org/">
            <madonvi>${madonvi}</madonvi>
            <tungay>${tungay}</tungay>
            <denngay>${denngay}</denngay>
          </TongHDDaxuly>
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
      dataJson["soap:Envelope"]["soap:Body"]["TongHDDaxulyResponse"][
        "TongHDDaxulyResult"
      ];

    if (DocumentElement) {
      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const TongHDKhonghople = async ({
  madonvi,
  tungay,
  denngay,
}: {
  madonvi: string;
  tungay: string;
  denngay: string;
}) => {
  try {
    const soapRequest = `
        <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
            <TongHDKhonghople xmlns="http://tempuri.org/">
              <madonvi>${madonvi}</madonvi>
              <tungay>${tungay}</tungay>
              <denngay>${denngay}</denngay>
            </TongHDKhonghople>
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
      dataJson["soap:Envelope"]["soap:Body"]["TongHDKhonghopleResponse"][
        "TongHDKhonghopleResult"
      ];

    if (DocumentElement) {
      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const TongHDHople = async ({
  madonvi,
  tungay,
  denngay,
}: {
  madonvi: string;
  tungay: string;
  denngay: string;
}) => {
  try {
    const soapRequest = `
        <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
            <TongHDHople xmlns="http://tempuri.org/">
              <madonvi>${madonvi}</madonvi>
              <tungay>${tungay}</tungay>
              <denngay>${denngay}</denngay>
            </TongHDHople>
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
      dataJson["soap:Envelope"]["soap:Body"]["TongHDHopleResponse"][
        "TongHDHopleResult"
      ];

    if (DocumentElement) {
      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const BieudoSSGTHDon = async ({
  madonvi,
  tungay,
  denngay,
}: {
  madonvi: string;
  tungay: string;
  denngay: string;
}) => {
  try {
    const soapRequest = `
          <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
          <soap12:Body>
              <BieudoSSGTHDon xmlns="http://tempuri.org/">
                <madonvi>${madonvi}</madonvi>
                <tungay>${tungay}</tungay>
                <denngay>${denngay}</denngay>
              </BieudoSSGTHDon>
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
      dataJson["soap:Envelope"]["soap:Body"]["BieudoSSGTHDonResponse"][
        "BieudoSSGTHDonResult"
      ];

    if (DocumentElement) {
      // return JSON.parse(DocumentElement);

      return {
        ...JSON.parse(DocumentElement),
        TongHDDaura: 1000000000,
      };
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const BieudoSSTongGTHDon_NCC = async ({
  madonvi,
  tungay,
  denngay,
}: {
  madonvi: string;
  tungay: string;
  denngay: string;
}) => {
  try {
    const soapRequest = `
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
            <soap12:Body>
                <BieudoSSTongGTHDon_NCC xmlns="http://tempuri.org/">
                  <madonvi>${madonvi}</madonvi>
                  <tungay>${tungay}</tungay>
                  <denngay>${denngay}</denngay>
                </BieudoSSTongGTHDon_NCC>
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
      dataJson["soap:Envelope"]["soap:Body"]["BieudoSSTongGTHDon_NCCResponse"][
        "BieudoSSTongGTHDon_NCCResult"
      ];

    if (DocumentElement) {
      // return JSON.parse(DocumentElement);

      return JSON.parse(DocumentElement).map((item) => {
        return {
          ...item,
          TongtienTTHD: item.TongtienTTHD == 0 ? 100000000 : item.TongtienTTHD,
        };
      });
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const BieudonhanHD = async ({
  madonvi,
  tungay,
  denngay,
}: {
  madonvi: string;
  tungay: string;
  denngay: string;
}) => {
  try {
    const soapRequest = `
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <BieudonhanHD xmlns="http://tempuri.org/">
      <madonvi>${madonvi}</madonvi>
      <tungay>${tungay}</tungay>
      <denngay>${denngay}</denngay>
    </BieudonhanHD>
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
      dataJson["soap:Envelope"]["soap:Body"]["BieudonhanHDResponse"][
        "BieudonhanHDResult"
      ];

    if (DocumentElement) {
      return JSON.parse(DocumentElement);
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
