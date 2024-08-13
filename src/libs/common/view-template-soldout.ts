/* eslint-disable no-useless-escape */

export const viewTemplateBanRaTongHop = ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (!data || data.length === 0) return;

  const html = `
<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<style>
<!--table
 {mso-displayed-decimal-separator:"\.";
 mso-displayed-thousand-separator:"\,";}
@page
 {
 mso-header-data:"";
 mso-footer-data:"";
 margin:0.236220472440945in 0.393700787401575in 0.31496062992126in 0.393700787401575in;
 mso-header-margin:0in;
 mso-footer-margin:0in;
 mso-page-orientation:Landscape;
 }
tr
 {mso-height-source:auto;
 mso-ruby-visibility:none;}
col
 {mso-width-source:auto;
 mso-ruby-visibility:none;}
br
 {mso-data-placement:same-cell;}
ruby
 {ruby-align:left;}
.style0
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:Arial,sans-serif;
 mso-protection:locked visible;
 mso-style-name:Normal;
 mso-style-id:0;}
td
 {mso-style-parent:style0;
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:Arial,sans-serif;
 mso-protection:locked visible;
 mso-ignore:padding;}
.x15
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:Arial,sans-serif;
 mso-protection:locked visible;
 }
.x21
 {
 mso-number-format:General;
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x22
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x23
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x24
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x25
 {
 mso-number-format:General;
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x26
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:Arial,sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x27
 {
 mso-number-format:'\#\,\#\#0';
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x28
 {
 mso-number-format:'\#\,\#\#0';
 text-align:center;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:700;
 font-style:normal;
 font-family:Arial,sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x29
 {
 mso-number-format:'\#\,\#\#0';
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x30
 {
 mso-number-format:General;
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x31
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x32
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x33
 {
 mso-number-format:'\#\,\#\#0';
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x34
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:Arial,sans-serif;
 mso-protection:locked visible;
 }
.x35
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:none;
 border-right:1px solid windowtext;
 border-bottom:none;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x36
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:none;
 border-right:1px solid windowtext;
 border-bottom:none;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x37
 {
 mso-number-format:General;
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:none;
 border-right:1px solid windowtext;
 border-bottom:none;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x38
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:none;
 border-right:1px solid windowtext;
 border-bottom:none;
 border-left:none;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x39
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:Arial,sans-serif;
 border-top:none;
 border-right:none;
 border-bottom:none;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x40
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#FFFFFF;
 mso-pattern:auto none;
 color:#000000;
 font-size:9pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x41
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:#FFFFFF;
 mso-pattern:auto none;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:Arial,sans-serif;
 mso-protection:locked visible;
 }
.x42
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#D3D3D3;
 mso-pattern:auto none;
 color:#000000;
 font-size:9pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x43
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x44
 {
 mso-number-format:General;
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x45
 {
 mso-number-format:General;
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x46
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x47
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x48
 {
 mso-number-format:General;
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x49
 {
 mso-number-format:General;
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x50
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x51
 {
 mso-number-format:General;
 text-align:right;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:10pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x52
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:14pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
.x53
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#D3D3D3;
 mso-pattern:auto none;
 color:#000000;
 font-size:9pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
-->
</style>
</head>
<body link='blue' vlink='purple' >

<table border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse:collapse;
table-layout:fixed;'>
 <col class='x23' width='31' style='mso-width-source:userset;background:none;width:23.25pt'/>
 <col class='x23' width='52' style='mso-width-source:userset;background:none;width:39pt'/>
 <col class='x23' width='66' style='mso-width-source:userset;background:none;width:49.5pt'/>
 <col class='x24' width='113' style='mso-width-source:userset;background:none;width:84.75pt'/>
 <col class='x23' width='111' style='mso-width-source:userset;background:none;width:83.25pt'/>
 <col class='x25' width='203' style='mso-width-source:userset;background:none;width:152.25pt'/>
 <col class='x24' width='138' style='mso-width-source:userset;background:none;width:103.5pt'/>
 <col class='x24' width='124' style='mso-width-source:userset;background:none;width:93pt'/>
 <col class='x24' width='113' span='2' style='mso-width-source:userset;background:none;width:84.75pt'/>
 <col class='x25' width='64' style='mso-width-source:userset;background:none;width:48pt'/>
 <col class='x25' width='146' style='mso-width-source:userset;background:none;width:109.5pt'/>
 <col class='x26' width='136' style='mso-width-source:userset;background:none;width:102pt'/>
 <tr height='17' style='mso-height-source:userset;height:12.75pt'>
<td colspan='13' height='17' class='x21' width='1410' style='mso-ignore:colspan;height:12.75pt;'></td>
 </tr>
 <tr height='23' style='mso-height-source:userset;height:17.45pt'>
<td colspan='13' height='23' class='x52' style='height:17.45pt;'>BẢNG KÊ HOÁ ĐƠN, CHỨNG TỪ CỦA HÀNG HOÁ, DỊCH VỤ BÁN RA</td>
 </tr>
 <tr height='17' style='mso-height-source:userset;height:12.75pt'>
<td colspan='13' height='17' class='x21' style='mso-ignore:colspan;height:12.75pt;'></td>
 </tr>
 <tr height='17' style='mso-height-source:userset;height:12.75pt'>
<td rowspan='2' height='47' class='x53' style='border-bottom:1px solid windowtext;height:35.25pt;'>STT</td>
<td colspan='4' class='x53' style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;'>Hóa đơn, chứng từ, biên lai nộp thuế</td>
<td rowspan='2' height='47' class='x53' style='border-bottom:1px solid windowtext;height:35.25pt;'>Tên người mua</td>
<td rowspan='2' height='47' class='x53' style='border-bottom:1px solid windowtext;height:35.25pt;'>Mã số thuế người mua</td>
<td rowspan='2' height='47' class='x53' style='border-bottom:1px solid windowtext;height:35.25pt;'>Giá trị HHDV bán ra chưa có thuế</td>
<td rowspan='2' height='47' class='x53' style='border-bottom:1px solid windowtext;height:35.25pt;'>Thuế GTGT bán ra</td>
<td rowspan='2' height='47' class='x53' style='border-bottom:1px solid windowtext;height:35.25pt;'>Trạng thái hóa đơn</td>
<td rowspan='2' height='47' class='x53' style='border-bottom:1px solid windowtext;height:35.25pt;'>Ghi chú</td>
<td rowspan='2' height='47' class='x53' style='border-bottom:1px solid windowtext;height:35.25pt;'>Trạng thái MST</td>
<td rowspan='2' height='47' class='x53' style='border-bottom:1px solid windowtext;height:35.25pt;'>Tổng tiền phí</td>
 </tr>
 <tr height='32' style='mso-height-source:userset;height:24pt'>
<td class='x42'>Kí hiệu mẫu số</td>
<td class='x42'>Kí hiệu hóa đơn</td>
<td class='x42'>Số hóa đơn</td>
<td class='x42'>Ngày, tháng, năm lập hóa đơn</td>
 </tr>
${data
  .map(
    (item: any) => `
  <tr height='17' class='x41' style='mso-height-source:userset;height:12.75pt'>
<td height='15' class='x40' style='height:11.25pt;'>${item.key + 1}</td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x40'></td>
 </tr>
`
  )
  .join("")}
 <tr height='17' style='mso-height-source:userset;height:12.75pt'>
<td colspan='5' height='15' class='x45' style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:11.25pt;'>Tổng</td>
<td class='x44'></td>
<td class='x43'></td>
<td class='x27'>0</td>
<td class='x27'>0</td>
<td class='x43'></td>
<td class='x44'></td>
<td class='x44'></td>
<td class='x28'>0</td>
 </tr>
 <tr height='17' style='mso-height-source:userset;height:12.75pt'>
<td colspan='4' height='15' class='x48' style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:11.25pt;'>Tổng Giá trị HHDV bán ra chưa có thuế (**):</td>
<td class='x29'>0</td>
<td class='x44'></td>
<td class='x43'></td>
<td class='x43'></td>
<td class='x43'></td>
<td class='x43'></td>
<td class='x44'></td>
<td class='x44'></td>
<td class='x26'></td>
 </tr>
 <tr height='17' style='mso-height-source:userset;height:12.75pt'>
<td colspan='4' height='17' class='x49' style='height:12.75pt;'>Tổng số thuế GTGT của HHDV bán ra (***):</td>
<td class='x33'>0</td>
<td colspan='8' class='x30' style='mso-ignore:colspan;'></td>
 </tr>
 <tr height='17' style='mso-height-source:userset;height:12.75pt'>
<td colspan='4' height='17' class='x49' style='height:12.75pt;'>Tổng tiền phí của HHDV bán ra:</td>
<td class='x33'>0</td>
<td colspan='8' class='x30' style='mso-ignore:colspan;'></td>
 </tr>
</table>
</body>
</html>
`;

  const popupWindow = window.open("", "_blank", "width=1000,height=600");
  if (popupWindow) {
    const title = fileName; // Define your title here
    const htmlWithTitle = `<!DOCTYPE html><html><head><title>${title}</title></head><body>${html}</body></html>`;
    popupWindow.document.open();
    popupWindow.document.write(htmlWithTitle);
    popupWindow.document.close();
  }
};

export const viewTemplateBanRaTCT = ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (!data || data.length === 0) return;

  const html = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<style>
<!--table
 {mso-displayed-decimal-separator:"\.";
 mso-displayed-thousand-separator:"\,";}
@page
 {
 mso-header-data:"";
 mso-footer-data:"";
 margin:0.75in 0.7in 0.75in 0.7in;
 mso-header-margin:0.3in;
 mso-footer-margin:0.3in;
 mso-page-orientation:Portrait;
 }
tr
 {mso-height-source:auto;
 mso-ruby-visibility:none;}
col
 {mso-width-source:auto;
 mso-ruby-visibility:none;}
br
 {mso-data-placement:same-cell;}
ruby
 {ruby-align:left;}
.style0
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 mso-style-name:Normal;
 mso-style-id:0;}
td
 {mso-style-parent:style0;
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 mso-ignore:padding;}
.x15
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 }
.x21
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#FFCC00;
 mso-pattern:auto none;
 font-size:11pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x22
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x23
 {
 mso-number-format:'\@';
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x24
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x25
 {
 mso-number-format:'\#\,\#\#\#\.0\#\#\#\#\#\;\\-\#\,\#\#\#\.0\#\#\#\#\#\;0';
 text-align:center;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x26
 {
 mso-number-format:'\@';
 text-align:left;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x27
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 font-size:11pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 mso-protection:locked visible;
 }
.x28
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 }
.x29
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 font-size:11pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 mso-protection:locked visible;
 }
-->
</style>
</head>
<body link='blue' vlink='purple' >

<table border='0' cellpadding='0' cellspacing='0' width='2327' style='border-collapse:collapse;
table-layout:fixed;width:1745pt'>
 <col width='55' style='mso-width-source:userset;width:41.25pt'/>
 <col width='82' span='3' style='mso-width-source:userset;width:61.5pt'/>
 <col width='137' style='mso-width-source:userset;width:102.75pt'/>
 <col width='219' span='3' style='mso-width-source:userset;width:164.25pt'/>
 <col width='82' span='2' style='mso-width-source:userset;width:61.5pt'/>
 <col width='137' span='3' style='mso-width-source:userset;width:102.75pt'/>
 <col width='82' span='2' style='mso-width-source:userset;width:61.5pt'/>
 <col width='137' style='mso-width-source:userset;width:102.75pt'/>
 <col width='356' style='mso-width-source:userset;width:267pt'/>
 <tr height='40' style='mso-height-source:userset;height:30pt;mso-xlrowspan:2'>
<td colspan='17' height='20' width='2327' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='17' height='20' class='x27' style='height:15pt;'>DANH SÁCH HÓA ĐƠN</td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='17' height='20' class='x29' style='height:15pt;'>Từ ngày 01/07/2024 đến ngày 31/07/2024</td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='17' height='20' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='66' style='mso-height-source:userset;height:50.1pt'>
<td height='64' class='x21' style='height:48.6pt;'>STT</td>
<td class='x21'>Ký hiệu mẫu số</td>
<td class='x21'>Ký hiệu hóa đơn</td>
<td class='x21'>Số hóa đơn</td>
<td class='x21'>Ngày lập</td>
<td class='x21'>MST người mua/MST người nhận hàng</td>
<td class='x21'>Tên người mua/Tên người nhận hàng</td>
<td class='x21'>Địa chỉ người mua</td>
<td class='x21'>Tổng tiền chưa thuế</td>
<td class='x21'>Tổng tiền thuế</td>
<td class='x21'>Tổng tiền chiết khấu thương mại</td>
<td class='x21'>Tổng tiền phí</td>
<td class='x21'>Tổng tiền thanh toán</td>
<td class='x21'>Đơn vị tiền tệ</td>
<td class='x21'>Tỷ giá</td>
<td class='x21'>Trạng thái hóa đơn</td>
<td class='x21'>Kết quả kiểm tra hóa đơn</td>
 </tr>

 ${data
   .map(
     (item: any) => `
        <tr height='20' style='mso-height-source:userset;height:15pt'>
          <td height='18' class='x22' style='height:13.5pt;'>${
            item.key + 1
          }</td>
          <td class='x24'></td>
          <td class='x26'></td>
          <td class='x24'></td>
          <td class='x24'></td>
          <td class='x24'></td>
          <td class='x23'></td>
          <td class='x23'></td>
          <td class='x25'></td>
          <td class='x25'></td>
          <td class='x25'></td>
          <td class='x25'></td>
          <td class='x25'></td>
          <td class='x24'></td>
          <td class='x24'></td>
          <td class='x23'></td>
          <td class='x23'></td>
        </tr>
 `
   )
   .join("")}

</table>
</body>
</html>`;

  const popupWindow = window.open("", "_blank", "width=1000,height=600");
  if (popupWindow) {
    const title = fileName; // Define your title here
    const htmlWithTitle = `<!DOCTYPE html><html><head><title>${title}</title></head><body>${html}</body></html>`;
    popupWindow.document.open();
    popupWindow.document.write(htmlWithTitle);
    popupWindow.document.close();
  }
};

export const viewTemplateBanRaFAST = ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (!data || data.length === 0) return;

  const html = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<style>
<!--table
 {mso-displayed-decimal-separator:"\.";
 mso-displayed-thousand-separator:"\,";}
@page
 {
 mso-header-data:"";
 mso-footer-data:"";
 margin:1in 1in 1in 1in;
 mso-header-margin:0.3in;
 mso-footer-margin:0.3in;
 mso-page-orientation:Portrait;
 }
tr
 {mso-height-source:auto;
 mso-ruby-visibility:none;}
col
 {mso-width-source:auto;
 mso-ruby-visibility:none;}
br
 {mso-data-placement:same-cell;}
ruby
 {ruby-align:left;}
.style0
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 mso-style-name:Normal;
 mso-style-id:0;}
td
 {mso-style-parent:style0;
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 mso-ignore:padding;}
.x15
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 }
.x21
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#808080;
 mso-pattern:auto none;
 color:#FFFFFF;
 font-size:9pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 border-top:1px solid #A9A9A9;
 border-right:1px solid #A9A9A9;
 border-bottom:none;
 border-left:1px solid #A9A9A9;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x22
 {
 mso-number-format:'\@';
 text-align:left;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#FFFFFF;
 mso-pattern:auto none;
 color:#000000;
 font-size:9pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
.x23
 {
 mso-number-format:'\@';
 text-align:right;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#FFFFFF;
 mso-pattern:auto none;
 color:#000000;
 font-size:9pt;
 font-weight:400;
 font-style:normal;
 font-family:'Times New Roman',sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
-->
</style>
</head>
<body link='blue' vlink='purple' >

<table border='0' cellpadding='0' cellspacing='0' width='1743' style='border-collapse:collapse;
table-layout:fixed;width:1307pt'>
 <col width='105' style='mso-width-source:userset;width:78.75pt'/>
 <col width='69' style='mso-width-source:userset;width:51.75pt'/>
 <col width='79' style='mso-width-source:userset;width:59.25pt'/>
 <col width='70' style='mso-width-source:userset;width:52.5pt'/>
 <col width='230' style='mso-width-source:userset;width:172.5pt'/>
 <col width='73' style='mso-width-source:userset;width:54.75pt'/>
 <col width='300' style='mso-width-source:userset;width:225pt'/>
 <col width='50' style='mso-width-source:userset;width:37.5pt'/>
 <col width='122' style='mso-width-source:userset;width:91.5pt'/>
 <col width='93' style='mso-width-source:userset;width:69.75pt'/>
 <col width='117' style='mso-width-source:userset;width:87.75pt'/>
 <col width='118' style='mso-width-source:userset;width:88.5pt'/>
 <col width='96' style='mso-width-source:userset;width:72pt'/>
 <col width='116' style='mso-width-source:userset;width:87pt'/>
 <col width='105' style='mso-width-source:userset;width:78.75pt'/>
 <tr height='18' style='mso-height-source:userset;height:13.5pt'>
<td height='17' class='x21' width='105' style='height:12.75pt;width:78.75pt;'>Quyển c.từ(ma_qs)</td>
<td class='x21' width='69' style='width:51.75pt;'>Số hđ(so_ct)</td>
<td class='x21' width='79' style='width:59.25pt;'>Ngày hóa đơn</td>
<td class='x21' width='70' style='width:52.5pt;'>Mã khách</td>
<td class='x21' width='230' style='width:172.5pt;'>Người mua</td>
<td class='x21' width='73' style='width:54.75pt;'>Mã hàng hóa</td>
<td class='x21' width='300' style='width:225pt;'>Tên h.hóa, d.vụ(ten_vt)</td>
<td class='x21' width='50' style='width:37.5pt;'>Đvt(dvt)</td>
<td class='x21' width='122' style='width:91.5pt;'>Số lượng:Q(so_luong)</td>
<td class='x21' width='93' style='width:69.75pt;'>Tỷ giá:R(ty_gia)</td>
<td class='x21' width='117' style='width:87.75pt;'>Mã t.suất(ma_thue_i)</td>
<td class='x21' width='118' style='width:88.5pt;'>Thuế suất(thue_suati)</td>
<td class='x21' width='96' style='width:72pt;'>Đơn giá:P0(gia2)</td>
<td class='x21' width='116' style='width:87pt;'>Thành tiền:N0(tien2)</td>
<td class='x21' width='105' style='width:78.75pt;'>Tiền thuế:N0(thue)</td>
 </tr>
${data
  .map(
    (item: any) => `
   <tr height='33' style='mso-height-source:userset;height:24.75pt'>
<td height='31' class='x22' style='height:23.25pt;'>${item.key + 1}</td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x23'></td>
<td class='x23'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x23'></td>
<td class='x23'></td>
<td class='x22'></td>
 </tr>
`
  )
  .join("")}
</table>
</body>
</html>

  `;

  const popupWindow = window.open("", "_blank", "width=1000,height=600");
  if (popupWindow) {
    const title = fileName; // Define your title here
    const htmlWithTitle = `<!DOCTYPE html><html><head><title>${title}</title></head><body>${html}</body></html>`;
    popupWindow.document.open();
    popupWindow.document.write(htmlWithTitle);
    popupWindow.document.close();
  }
};

export const viewTemplateBanRaMISA = ({
  data,
  fileName,
}: {
  data: any;
  fileName: string;
}) => {
  if (!data || data.length === 0) return;

  const html = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<style>
<!--table
 {mso-displayed-decimal-separator:"\.";
 mso-displayed-thousand-separator:"\,";}
@page
 {
 mso-header-data:"";
 mso-footer-data:"";
 margin:0.75in 0.7in 0.75in 0.7in;
 mso-header-margin:0.3in;
 mso-footer-margin:0.3in;
 mso-page-orientation:Portrait;
 }
tr
 {mso-height-source:auto;
 mso-ruby-visibility:none;}
col
 {mso-width-source:auto;
 mso-ruby-visibility:none;}
br
 {mso-data-placement:same-cell;}
ruby
 {ruby-align:left;}
.style0
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 mso-style-name:Normal;
 mso-style-id:0;}
td
 {mso-style-parent:style0;
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 mso-ignore:padding;}
.x15
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 mso-protection:locked visible;
 }
.x62
 {
 mso-number-format:'MM\/dd\/yyyy';
 text-align:center;
 vertical-align:middle;
 white-space:nowrap;
 background:#CCCCFF;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid #000000;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x63
 {
 mso-number-format:'MM\/dd\/yyyy';
 text-align:center;
 vertical-align:middle;
 white-space:nowrap;
 background:#CCCCFF;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid #000000;
 border-bottom:1px solid windowtext;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x64
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:middle;
 white-space:nowrap;
 background:#CCCCFF;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid #000000;
 border-bottom:1px solid windowtext;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x65
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#FFFF00;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid #000000;
 border-bottom:1px solid windowtext;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x66
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:middle;
 white-space:nowrap;
 background:#FFFF00;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid #000000;
 border-bottom:1px solid windowtext;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x67
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:middle;
 white-space:nowrap;
 background:#FFFF00;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid #000000;
 border-bottom:1px solid windowtext;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x68
 {
 mso-number-format:'\#\,\#\#0\.0000\\ \;\[Red\]\\-\#\,\#\#0\.0000\\ ';
 text-align:center;
 vertical-align:middle;
 white-space:nowrap;
 background:#FFFF00;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid #000000;
 border-bottom:1px solid windowtext;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x69
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:middle;
 white-space:nowrap;
 background:#FFFF00;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x70
 {
 mso-number-format:General;
 text-align:general;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 color:#000000;
 font-size:11pt;
 font-weight:400;
 font-style:normal;
 font-family:Calibri,sans-serif;
 border-top:1px solid windowtext;
 border-right:1px solid windowtext;
 border-bottom:1px solid windowtext;
 border-left:1px solid windowtext;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked visible;
 }
-->
</style>
</head>
<body link='blue' vlink='purple' >

<table border='0' cellpadding='0' cellspacing='0' width='3247' style='border-collapse:collapse;
table-layout:fixed;width:2435pt'>
 <col width='212' style='mso-width-source:userset;width:159pt'/>
 <col width='134' style='mso-width-source:userset;width:100.5pt'/>
 <col width='240' style='mso-width-source:userset;width:180pt'/>
 <col width='116' style='mso-width-source:userset;width:87pt'/>
 <col width='222' style='mso-width-source:userset;width:166.5pt'/>
 <col width='108' style='mso-width-source:userset;width:81pt'/>
 <col width='134' style='mso-width-source:userset;width:100.5pt'/>
 <col width='120' style='mso-width-source:userset;width:90pt'/>
 <col width='119' style='mso-width-source:userset;width:89.25pt'/>
 <col width='64' style='width:48pt'/>
 <col width='139' style='mso-width-source:userset;width:104.25pt'/>
 <col width='113' style='mso-width-source:userset;width:84.75pt'/>
 <col width='86' style='mso-width-source:userset;width:64.5pt'/>
 <col width='99' style='mso-width-source:userset;width:74.25pt'/>
 <col width='182' span='2' style='mso-width-source:userset;width:136.5pt'/>
 <col width='64' style='width:48pt'/>
 <col width='145' span='3' style='mso-width-source:userset;width:108.75pt'/>
 <col width='112' style='mso-width-source:userset;width:84pt'/>
 <col width='123' style='mso-width-source:userset;width:92.25pt'/>
 <col width='115' style='mso-width-source:userset;width:86.25pt'/>
 <col width='64' span='2' style='width:48pt'/>
 <tr height='21' style='mso-height-source:userset;height:15.75pt'>
<td height='19' class='x62' width='212' style='height:14.25pt;width:159pt;'>Ngày hạch toán (*)</td>
<td class='x63' width='134' style='width:100.5pt;'>Ngày chứng từ (*)</td>
<td class='x64' width='240' style='width:180pt;'>Số chứng từ (*)</td>
<td class='x64' width='116' style='width:87pt;'>Mẫu số HĐ</td>
<td class='x64' width='222' style='width:166.5pt;'>Ký hiệu HĐ</td>
<td class='x64' width='108' style='width:81pt;'>Số hóa đơn</td>
<td class='x63' width='134' style='width:100.5pt;'>Ngày hóa đơn</td>
<td class='x64' width='120' style='width:90pt;'>Mã khách hàng</td>
<td class='x64' width='119' style='width:89.25pt;'>Tên khách hàng</td>
<td class='x64' width='64' style='width:48pt;'>Địa chỉ</td>
<td class='x64' width='139' style='width:104.25pt;'>Mã số thuế</td>
<td class='x65' width='113' style='width:84.75pt;'>Diễn giải</td>
<td class='x66' width='86' style='width:64.5pt;'>Mã hàng (*)</td>
<td class='x66' width='99' style='width:74.25pt;'>Tên hàng</td>
<td class='x66' width='182' style='width:136.5pt;'>TK Tiền/Chi phí/Nợ (*)</td>
<td class='x66' width='182' style='width:136.5pt;'>Hình thức thanh toán</td>
<td class='x66' width='64' style='width:48pt;'>ĐVT</td>
<td class='x67' width='145' style='width:108.75pt;'>Số lượng</td>
<td class='x68' width='145' style='width:108.75pt;'>Đơn giá</td>
<td class='x68' width='145' style='width:108.75pt;'>Thành tiền</td>
<td class='x66' width='112' style='width:84pt;'>% thuế GTGT</td>
<td class='x67' width='123' style='width:92.25pt;'>Tiền thuế GTGT</td>
<td class='x69' width='115' style='width:86.25pt;'>TK thuế GTGT</td>
<td class='x67' width='64' style='width:48pt;'>Tiền tệ</td>
<td class='x67' width='64' style='width:48pt;'>Tỷ giá</td>
 </tr>
 ${data
   .map(
     (item: any) => `
  <tr height='20' style='mso-height-source:userset;height:15pt'>
<td height='18' class='x70' style='height:13.5pt;'>${item.key + 1}</td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70' style='mso-ignore:style;height:14pt;font-size:11pt;color:#000000;font-weight:400;text-decoration:none;text-line-through:none;font-family:Calibri,sans-serif;background:none;mso-pattern:auto;border-top:1px solid windowtext;border-right:1px solid windowtext;border-bottom:1px solid windowtext;border-left:1px solid windowtext;'></td>
<td class='x70' style='mso-ignore:style;height:14pt;font-size:11pt;color:#000000;font-weight:400;text-decoration:none;text-line-through:none;font-family:Calibri,sans-serif;background:none;mso-pattern:auto;border-top:1px solid windowtext;border-right:1px solid windowtext;border-bottom:1px solid windowtext;border-left:1px solid windowtext;'></td>
<td class='x70' style='mso-ignore:style;height:14pt;font-size:11pt;color:#000000;font-weight:400;text-decoration:none;text-line-through:none;font-family:Calibri,sans-serif;background:none;mso-pattern:auto;border-top:1px solid windowtext;border-right:1px solid windowtext;border-bottom:1px solid windowtext;border-left:1px solid windowtext;'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
<td class='x70'></td>
 </tr>
 `
   )
   .join("")}
</table>
</body>
</html>
  
  `;

  const popupWindow = window.open("", "_blank", "width=1000,height=600");
  if (popupWindow) {
    const title = fileName; // Define your title here
    const htmlWithTitle = `<!DOCTYPE html><html><head><title>${title}</title></head><body>${html}</body></html>`;
    popupWindow.document.open();
    popupWindow.document.write(htmlWithTitle);
    popupWindow.document.close();
  }
};
