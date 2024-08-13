/* eslint-disable no-useless-escape */

export const viewTemplateMuaVaoTongHop = ({
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
  .x22
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
  .x23
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
  .x24
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
  .x25
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
  .x26
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
  .x27
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
  .x28
   {
   mso-number-format:General;
   text-align:general;
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
  .x30
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
  .x31
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
  .x32
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
  .x33
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
  .x34
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
  .x35
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
  .x36
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
  .x37
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
  .x38
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
  .x39
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
  .x40
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
  .x41
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
   border-bottom:none;
   border-left:1px solid windowtext;
   mso-diagonal-down:none;
   mso-diagonal-up:none;
   mso-protection:locked visible;
   }
  .x44
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
   border-top:none;
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
   border-right:none;
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
   border-right:none;
   border-bottom:1px solid windowtext;
   border-left:none;
   mso-diagonal-down:none;
   mso-diagonal-up:none;
   mso-protection:locked visible;
   }
  .x47
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
   border-left:none;
   mso-diagonal-down:none;
   mso-diagonal-up:none;
   mso-protection:locked visible;
   }
  .x48
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
   border-top:1px solid windowtext;
   border-right:1px solid windowtext;
   border-bottom:1px solid windowtext;
   border-left:1px solid windowtext;
   mso-diagonal-down:none;
   mso-diagonal-up:none;
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
   border-top:1px solid windowtext;
   border-right:1px solid windowtext;
   border-bottom:1px solid windowtext;
   border-left:1px solid windowtext;
   mso-diagonal-down:none;
   mso-diagonal-up:none;
   mso-protection:locked visible;
   }
  .x52
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
  .x53
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
  .x54
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
  .x55
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
  .x56
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
  .x57
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
   border-top:none;
   border-right:1px solid windowtext;
   border-bottom:1px solid windowtext;
   border-left:1px solid windowtext;
   mso-diagonal-down:none;
   mso-diagonal-up:none;
   mso-protection:locked visible;
   }
  .x58
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
  -->
  </style>
  </head>
  <body link='blue' vlink='purple' >
  
  <table border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse:collapse;
  table-layout:fixed'>
   <col class='x24' width='31' style='mso-width-source:userset;background:none;width:23.25pt'/>
   <col class='x24' width='52' style='mso-width-source:userset;background:none;width:39pt'/>
   <col class='x24' width='66' style='mso-width-source:userset;background:none;width:49.5pt'/>
   <col class='x25' width='113' style='mso-width-source:userset;background:none;width:84.75pt'/>
   <col class='x24' width='111' style='mso-width-source:userset;background:none;width:83.25pt'/>
   <col class='x26' width='203' style='mso-width-source:userset;background:none;width:152.25pt'/>
   <col class='x25' width='138' style='mso-width-source:userset;background:none;width:103.5pt'/>
   <col class='x25' width='124' style='mso-width-source:userset;background:none;width:93pt'/>
   <col class='x25' width='113' span='2' style='mso-width-source:userset;background:none;width:84.75pt'/>
   <col class='x26' width='64' style='mso-width-source:userset;background:none;width:48pt'/>
   <col class='x26' width='146' style='mso-width-source:userset;background:none;width:109.5pt'/>
   <col class='x27' width='136' style='mso-width-source:userset;background:none;width:102pt'/>
   <tr height='17' style='mso-height-source:userset;height:13.15pt'>
  <td colspan='12' height='17' class='x22' width='1274' style='mso-ignore:colspan;height:13.15pt;'></td>
  <td class='x27' width='136' style='width:102pt;'></td>
   </tr>
   <tr height='23' style='mso-height-source:userset;height:17.45pt'>
  <td colspan='12' height='23' class='x48' style='height:17.45pt;'>BẢNG KÊ HOÁ ĐƠN, CHỨNG TỪ CỦA HÀNG HOÁ, DỊCH VỤ MUA VÀO</td>
  <td class='x28'></td>
   </tr>
   <tr height='17' style='mso-height-source:userset;height:13.15pt'>
  <td colspan='12' height='17' class='x22' style='mso-ignore:colspan;height:13.15pt;'></td>
  <td class='x27'></td>
   </tr>
   <tr height='17' style='mso-height-source:userset;height:12.75pt'>
  <td rowspan='2' height='45' class='x42' style='border-bottom:1px solid windowtext;height:33.75pt;'>STT</td>
  <td colspan='4' class='x45' style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;'>Hóa đơn, chứng từ, biên lai nộp thuế</td>
  <td rowspan='2' height='46' class='x43' style='border-bottom:1px solid windowtext;height:34.5pt;'>Tên người bán</td>
  <td rowspan='2' height='45' class='x42' style='border-bottom:1px solid windowtext;height:33.75pt;'>Mã số thuế người bán</td>
  <td rowspan='2' height='45' class='x42' style='border-bottom:1px solid windowtext;height:33.75pt;'>Giá trị HHDV mua vào chưa có thuế</td>
  <td rowspan='2' height='45' class='x42' style='border-bottom:1px solid windowtext;height:33.75pt;'>Thuế GTGT mua vào</td>
  <td rowspan='2' height='46' class='x43' style='border-bottom:1px solid windowtext;height:34.5pt;'>Trạng thái hóa đơn</td>
  <td rowspan='2' height='45' class='x42' style='border-bottom:1px solid windowtext;height:33.75pt;'>Ghi chú</td>
  <td rowspan='2' height='45' class='x42' style='border-bottom:1px solid windowtext;height:33.75pt;'>Trạng thái MST</td>
  <td rowspan='2' height='45' class='x42' style='border-bottom:1px solid windowtext;height:33.75pt;'>Tổng tiền phí</td>
   </tr>
   <tr height='30' style='mso-height-source:userset;height:22.5pt'>
  <td class='x21'>Kí hiệu mẫu số</td>
  <td class='x21'>Kí hiệu hóa đơn</td>
  <td class='x21'>Số hóa đơn</td>
  <td class='x21'>Ngày, tháng, năm lập hóa đơn</td>
   </tr>
  ${data
    ?.map((item: any) => {
      return `
   <tr height='17' class='x58' style='mso-height-source:userset;height:12.75pt'>
  <td height='15' class='x56' style='height:11.25pt'>${item.key + 1}</td>
  <td class='x56'>${item?.thongTinHoaDon?.khmshdon?.toString()}</td>
  <td class='x56'>${item?.thongTinHoaDon?.khhdon?.toString()}</td>
  <td class='x56'>${item?.thongTinHoaDon?.shdon?.toString()}</td>
  <td class='x56'>${item?.thongTinHoaDon?.ntao}</td>
  <td class='x57'>${item?.thongTinNguoiBan?.nbten}</td>
  <td class='x56'>${item?.thongTinNguoiBan?.mst}</td>
  <td class='x56'>${item?.tongTruocThue?.toString()}</td>
  <td class='x56'>${item?.thueSuat?.tsuat}</td>
  <td class='x57'>${item?.tthai?.toString()}</td>
  <td class='x56'>${item?.nky}</td>
  <td class='x56'>${item?.nky}</td>
  <td class='x56'>${item?.tongThanhToan?.toString()}</td>
   </tr>`;
    })
    .join("")}
   <tr height='17' style='mso-height-source:userset;height:13.15pt'>
  <td colspan='5' height='15' class='x49' style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:11.65pt;'>Tổng</td>
  <td class='x26'></td>
  <td class='x25'></td>
  <td class='x29'>0</td>
  <td class='x29'>0</td>
  <td class='x25'></td>
  <td class='x26'></td>
  <td class='x26'></td>
  <td class='x30'>0</td>
   </tr>
   <tr height='17' style='mso-height-source:userset;height:13.15pt'>
  <td colspan='4' height='15' class='x52' style='border-right:1px solid windowtext;border-bottom:1px solid windowtext;height:11.65pt;'>Tổng Giá trị HHDV mua vào chưa có thuế (**):</td>
  <td class='x31'>0</td>
  <td class='x26'></td>
  <td class='x25'></td>
  <td class='x25'></td>
  <td class='x25'></td>
  <td class='x25'></td>
  <td class='x26'></td>
  <td class='x26'></td>
  <td class='x27'></td>
   </tr>
   <tr height='17' style='mso-height-source:userset;height:13.15pt'>
  <td colspan='4' height='17' class='x53' style='height:13.15pt;'>Tổng số thuế GTGT của HHDV mua vào (***):</td>
  <td class='x35'>0</td>
  <td colspan='8' class='x32' style='mso-ignore:colspan;'></td>
   </tr>
   <tr height='17' style='mso-height-source:userset;height:13.15pt'>
  <td colspan='4' height='17' class='x53' style='height:13.15pt;'>Tổng tiền phí của HHDV mua vào:</td>
  <td class='x35'>0</td>
  <td colspan='8' class='x32' style='mso-ignore:colspan;'></td>
   </tr>
  <![if supportMisalignedColumns]>
   <tr height='0' style='display:none'>
    <td width='31' style='width:23.25pt;'></td>
    <td width='52' style='width:39pt;'></td>
    <td width='66' style='width:49.5pt;'></td>
    <td width='113' style='width:84.75pt;'></td>
    <td width='111' style='width:83.25pt;'></td>
    <td width='203' style='width:152.25pt;'></td>
    <td width='138' style='width:103.5pt;'></td>
    <td width='124' style='width:93pt;'></td>
    <td width='226' colspan='2' style='width:169.5pt;mso-ignore:colspan;'></td>
    <td width='64' style='width:48pt;'></td>
    <td width='146' style='width:109.5pt;'></td>
    <td width='136' style='width:102pt;'></td>
   </tr>
   <![endif]>
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

export const viewTemplateMuaVaoTCT = ({
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
 font-family:'Times New Roman',serif;
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
 font-family:'Times New Roman',serif;
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
 mso-number-format:'\@';
 text-align:center;
 vertical-align:bottom;
 white-space:normal;word-wrap:break-word;
 background:auto;
 mso-pattern:auto;
 font-size:11pt;
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
 mso-number-format:'\#\,\#\#\#\.0\#\#\#\#\#\;\\-\#\,\#\#\#\.0\#\#\#\#\#\;0';
 text-align:center;
 vertical-align:bottom;
 white-space:nowrap;
 background:auto;
 mso-pattern:auto;
 font-size:11pt;
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
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#FFCC00;
 mso-pattern:auto none;
 font-size:11pt;
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
 font-family:'Times New Roman',serif;
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
 font-family:'Times New Roman',serif;
 mso-protection:locked visible;
 }
-->
</style>
<!--[if gte mso 9]><xml>
 <x:ExcelWorkbook>
  <x:ExcelWorksheets>
   <x:ExcelWorksheet>
    <x:Name>sheet 1</x:Name>
<x:WorksheetOptions>
 <x:StandardWidth>2048</x:StandardWidth>
 <x:Print>
  <x:ValidPrinterInfo/>
  <x:PaperSizeIndex>1</x:PaperSizeIndex>
  <x:HorizontalResolution>600</x:HorizontalResolution>
  <x:VerticalResolution>600</x:VerticalResolution>
 </x:Print>
 <x:Selected/>
</x:WorksheetOptions>
   </x:ExcelWorksheet>
  </x:ExcelWorksheets>
  <x:WindowHeight>16440</x:WindowHeight>
  <x:WindowWidth>28110</x:WindowWidth>
  <x:WindowTopX>810</x:WindowTopX>
  <x:WindowTopY>-120</x:WindowTopY>
  <x:RefModeR1C1/>
  <x:TabRatio>600</x:TabRatio>
  <x:ActiveSheet>0</x:ActiveSheet>
 </x:ExcelWorkbook>
</xml><![endif]-->
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
<td colspan='17' height='20' class='x29' style='height:15pt;'>Từ ngày 08/07/2024 đến ngày 07/08/2024</td>
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
<td class='x21'>MST người bán/MST người xuất hàng</td>
<td class='x26'>Tên người bán/Tên người xuất hàng</td>
<td class='x26'>Địa chỉ người bán</td>
<td class='x21'>Tổng tiền chưa thuế</td>
<td class='x26'>Tổng tiền thuế</td>
<td class='x26'>Tổng tiền chiết khấu thương mại</td>
<td class='x21'>Tổng tiền phí</td>
<td class='x21'>Tổng tiền thanh toán</td>
<td class='x21'>Đơn vị tiền tệ</td>
<td class='x21'>Tỷ giá</td>
<td class='x21'>Trạng thái hóa đơn</td>
<td class='x21'>Kết quả kiểm tra hóa đơn</td>
 </tr>
 ${data
   .map((item: any) => {
     return ` <tr height='20' style='mso-height-source:userset;height:15pt'>
<td height='18' class='x22' style='height:13.5pt;'>${item.key + 1}</td>
<td class='x24'></td>
<td class='x23'></td>
<td class='x24'></td>
<td class='x24'></td>
<td class='x22'></td>
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
 </tr>`;
   })
   .join("")}
</table>
</body>
</html>
    
      `;
  const popupWindow = window.open("", "_blank", "width=1200,height=800");
  if (popupWindow) {
    const title = fileName; // Define your title here
    const htmlWithTitle = `<!DOCTYPE html><html><head><title>${title}</title></head><body>${html}</body></html>`;
    popupWindow.document.open();
    popupWindow.document.write(htmlWithTitle);
    popupWindow.document.close();
  }
};

export const viewTemplateMuaVaoFAST = ({
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
 background:#C5D9F1;
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

<table border='0' cellpadding='0' cellspacing='0' width='4382' style='border-collapse:collapse;
table-layout:fixed;width:3286pt'>
 <col width='64' style='width:48pt'/>
 <col width='280' style='mso-width-source:userset;width:210pt'/>
 <col width='126' span='2' style='mso-width-source:userset;width:94.5pt'/>
 <col width='140' style='mso-width-source:userset;width:105pt'/>
 <col width='126' style='mso-width-source:userset;width:94.5pt'/>
 <col width='112' style='mso-width-source:userset;width:84pt'/>
 <col width='84' style='mso-width-source:userset;width:63pt'/>
 <col width='168' style='mso-width-source:userset;width:126pt'/>
 <col width='98' style='mso-width-source:userset;width:73.5pt'/>
 <col width='168' style='mso-width-source:userset;width:126pt'/>
 <col width='70' style='mso-width-source:userset;width:52.5pt'/>
 <col width='64' span='7' style='width:48pt'/>
 <col width='105' style='mso-width-source:userset;width:78.75pt'/>
 <col width='84' style='mso-width-source:userset;width:63pt'/>
 <col width='64' style='width:48pt'/>
 <col width='84' style='mso-width-source:userset;width:63pt'/>
 <col width='105' span='4' style='mso-width-source:userset;width:78.75pt'/>
 <col width='140' style='mso-width-source:userset;width:105pt'/>
 <col width='224' style='mso-width-source:userset;width:168pt'/>
 <col width='168' style='mso-width-source:userset;width:126pt'/>
 <col width='105' span='3' style='mso-width-source:userset;width:78.75pt'/>
 <col width='64' span='12' style='width:48pt'/>
 <tr height='66' style='mso-height-source:userset;height:50pt'>
<td height='64' class='x21' width='64' style='height:48.5pt;width:48pt;'>Mã ncc</td>
<td class='x21' width='280' style='width:210pt;'>Tên nhà cung cấp</td>
<td class='x21' width='126' style='width:94.5pt;'>Người giao hàng</td>
<td class='x21' width='126' style='width:94.5pt;'>Ngày chứng từ</td>
<td class='x21' width='140' style='width:105pt;'>Số chứng từ</td>
<td class='x21' width='126' style='width:94.5pt;'>Ngày hóa đơn</td>
<td class='x21' width='112' style='width:84pt;'>Số hóa đơn</td>
<td class='x21' width='84' style='width:63pt;'>Ký hiệu</td>
<td class='x21' width='168' style='width:126pt;'>Diễn giải</td>
<td class='x21' width='98' style='width:73.5pt;'>Mã hàng</td>
<td class='x21' width='168' style='width:126pt;'>Tên mặt hàng</td>
<td class='x21' width='70' style='width:52.5pt;'>Đvt</td>
<td class='x21' width='64' style='width:48pt;'>Mã kho</td>
<td class='x21' width='64' style='width:48pt;'>Số lượng</td>
<td class='x21' width='64' style='width:48pt;'>Giá</td>
<td class='x21' width='64' style='width:48pt;'>Tiền hàng</td>
<td class='x21' width='64' style='width:48pt;'>Mã nt</td>
<td class='x21' width='64' style='width:48pt;'>Tỷ giá</td>
<td class='x21' width='64' style='width:48pt;'>Tài khoản có</td>
<td class='x21' width='105' style='width:78.75pt;'>Tài khoản nợ</td>
<td class='x21' width='84' style='width:63pt;'>Mã thanh toán</td>
<td class='x21' width='64' style='width:48pt;'>Mẫu báo cáo</td>
<td class='x21' width='84' style='width:63pt;'>Mã tính chất</td>
<td class='x21' width='105' style='width:78.75pt;'>Mẫu hóa đơn</td>
<td class='x21' width='105' style='width:78.75pt;'>Số hóa đơn</td>
<td class='x21' width='105' style='width:78.75pt;'>Ký hiệu</td>
<td class='x21' width='105' style='width:78.75pt;'>Ngày hóa đơn</td>
<td class='x21' width='140' style='width:105pt;'>Mã nhà cung cấp (Trong phần thuế)</td>
<td class='x21' width='224' style='width:168pt;'>Tên nhà cung cấp (Trong phần thuế)</td>
<td class='x21' width='168' style='width:126pt;'>Địa chỉ</td>
<td class='x21' width='105' style='width:78.75pt;'>Mã số thuế</td>
<td class='x21' width='105' style='width:78.75pt;'>Tên hàng hóa - dịch vụ</td>
<td class='x21' width='105' style='width:78.75pt;'>Tiền hàng</td>
<td class='x21' width='64' style='width:48pt;'>Mã thuế</td>
<td class='x21' width='64' style='width:48pt;'>Tk thuế</td>
<td class='x21' width='64' style='width:48pt;'>Thuế</td>
<td class='x21' width='64' style='width:48pt;'>Cục thuế</td>
<td class='x21' width='64' style='width:48pt;'>Ghi chú</td>
<td class='x21' width='64' style='width:48pt;'>Vụ việc</td>
<td class='x21' width='64' style='width:48pt;'>Bộ phận</td>
<td class='x21' width='64' style='width:48pt;'>Lsx</td>
<td class='x21' width='64' style='width:48pt;'>Sản phẩm</td>
<td class='x21' width='64' style='width:48pt;'>Hợp đồng</td>
<td class='x21' width='64' style='width:48pt;'>Phí</td>
<td class='x21' width='64' style='width:48pt;'>Khế ước</td>
 </tr>


 ${data
   .map((item: any) => {
     return `<tr height='20' style='mso-height-source:userset;height:15pt'>
<td height='18' class='x22' style='height:13.5pt;'>${item.key + 1}</td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
<td class='x22'></td>
 </tr>`;
   })
   .join("")}


<![if supportMisalignedColumns]>
 <tr height='0' style='display:none'>
  <td width='64' style='width:48pt;'></td>
  <td width='280' style='width:210pt;'></td>
  <td width='252' colspan='2' style='width:189pt;mso-ignore:colspan;'></td>
  <td width='140' style='width:105pt;'></td>
  <td width='126' style='width:94.5pt;'></td>
  <td width='112' style='width:84pt;'></td>
  <td width='84' style='width:63pt;'></td>
  <td width='168' style='width:126pt;'></td>
  <td width='98' style='width:73.5pt;'></td>
  <td width='168' style='width:126pt;'></td>
  <td width='70' style='width:52.5pt;'></td>
  <td width='448' colspan='7' style='width:336pt;mso-ignore:colspan;'></td>
  <td width='105' style='width:78.75pt;'></td>
  <td width='84' style='width:63pt;'></td>
  <td width='64' style='width:48pt;'></td>
  <td width='84' style='width:63pt;'></td>
  <td width='420' colspan='4' style='width:315pt;mso-ignore:colspan;'></td>
  <td width='140' style='width:105pt;'></td>
  <td width='224' style='width:168pt;'></td>
  <td width='168' style='width:126pt;'></td>
  <td width='315' colspan='3' style='width:236.25pt;mso-ignore:colspan;'></td>
  <td width='768' colspan='12' style='width:576pt;mso-ignore:colspan;'></td>
 </tr>
 <![endif]>
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

export const viewTemplateMuaVaoMISA = ({
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
 margin:0.75in 0.7in 0.75in 0.7in;
 mso-header-margin:0.511805555555556in;
 mso-footer-margin:0.511805555555556in;
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
.x22
 {
 mso-number-format:'\[$-F800\]dddd\0o022\, \0o022mmmm\\ dd\0o022\, \0o022yyyy';
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
.x23
 {
 mso-number-format:'\@';
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
.x24
 {
 mso-number-format:'0\.00';
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
.x25
 {
 mso-number-format:'0';
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
.x26
 {
 mso-number-format:'\#\,\#\#0';
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
.x27
 {
 mso-number-format:'\#\,\#\#0\.\#\#';
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
.x28
 {
 mso-number-format:General;
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#CCFFFF;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid #000000;
 border-right:1px solid #000000;
 border-bottom:none;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x29
 {
 mso-number-format:'\[$-F800\]dddd\0o022\, \0o022mmmm\\ dd\0o022\, \0o022yyyy';
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#CCFFFF;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid #000000;
 border-right:1px solid #000000;
 border-bottom:none;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x30
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#CCFFFF;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid #000000;
 border-right:1px solid #000000;
 border-bottom:none;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x31
 {
 mso-number-format:'0\.00';
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#CCFFFF;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid #000000;
 border-right:1px solid #000000;
 border-bottom:none;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x32
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#CCFFCC;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid #000000;
 border-right:1px solid #000000;
 border-bottom:none;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x33
 {
 mso-number-format:'0';
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#CCFFCC;
 mso-pattern:auto none;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid #000000;
 border-right:1px solid #000000;
 border-bottom:none;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x34
 {
 mso-number-format:'\@';
 text-align:center;
 vertical-align:middle;
 white-space:normal;word-wrap:break-word;
 background:#CCFFCC;
 mso-pattern:auto none;
 color:#000000;
 font-size:12pt;
 font-weight:700;
 font-style:normal;
 font-family:'Times New Roman',serif;
 border-top:1px solid #000000;
 border-right:1px solid #000000;
 border-bottom:none;
 border-left:1px solid #000000;
 mso-diagonal-down:none;
 mso-diagonal-up:none;
 mso-protection:locked hidden;
 }
.x35
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
.x36
 {
 mso-number-format:'\[$-F800\]dddd\0o022\, \0o022mmmm\\ dd\0o022\, \0o022yyyy';
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
.x37
 {
 mso-number-format:'\@';
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
.x38
 {
 mso-number-format:'0\.00';
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
.x39
 {
 mso-number-format:'0';
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
.x40
 {
 mso-number-format:'\#\,\#\#0';
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

<table border='0' cellpadding='0' cellspacing='0' width='7059' style='border-collapse:collapse;
table-layout:fixed;width:5294pt'>
 <col class='x21' width='141' style='mso-width-source:userset;background:none;width:105.75pt'/>
 <col class='x21' width='131' span='2' style='mso-width-source:userset;background:none;width:98.25pt'/>
 <col class='x22' width='142' style='mso-width-source:userset;background:none;width:106.5pt'/>
 <col class='x22' width='135' style='mso-width-source:userset;background:none;width:101.25pt'/>
 <col class='x21' width='120' span='2' style='mso-width-source:userset;background:none;width:90pt'/>
 <col class='x23' width='120' span='3' style='mso-width-source:userset;background:none;width:90pt'/>
 <col class='x22' width='120' style='mso-width-source:userset;background:none;width:90pt'/>
 <col class='x23' width='122' style='mso-width-source:userset;background:none;width:91.5pt'/>
 <col class='x22' width='129' style='mso-width-source:userset;background:none;width:96.75pt'/>
 <col class='x21' width='142' style='mso-width-source:userset;background:none;width:106.5pt'/>
 <col class='x21' width='170' style='mso-width-source:userset;background:none;width:127.5pt'/>
 <col class='x21' width='120' style='mso-width-source:userset;background:none;width:90pt'/>
 <col class='x23' width='120' style='mso-width-source:userset;background:none;width:90pt'/>
 <col class='x21' width='120' style='mso-width-source:userset;background:none;width:90pt'/>
 <col class='x21' width='144' style='mso-width-source:userset;background:none;width:108pt'/>
 <col class='x23' width='131' style='mso-width-source:userset;background:none;width:98.25pt'/>
 <col class='x21' width='143' style='mso-width-source:userset;background:none;width:107.25pt'/>
 <col class='x21' width='129' style='mso-width-source:userset;background:none;width:96.75pt'/>
 <col class='x21' width='109' style='mso-width-source:userset;background:none;width:81.75pt'/>
 <col class='x21' width='90' style='mso-width-source:userset;background:none;width:67.5pt'/>
 <col class='x21' width='109' span='2' style='mso-width-source:userset;background:none;width:81.75pt'/>
 <col class='x24' width='103' style='mso-width-source:userset;background:none;width:77.25pt'/>
 <col class='x23' width='123' span='2' style='mso-width-source:userset;background:none;width:92.25pt'/>
 <col class='x23' width='74' style='mso-width-source:userset;background:none;width:55.5pt'/>
 <col class='x23' width='101' style='mso-width-source:userset;background:none;width:75.75pt'/>
 <col class='x23' width='128' style='mso-width-source:userset;background:none;width:96pt'/>
 <col class='x23' width='120' style='mso-width-source:userset;background:none;width:90pt'/>
 <col class='x23' width='102' span='2' style='mso-width-source:userset;background:none;width:76.5pt'/>
 <col class='x25' width='102' span='2' style='mso-width-source:userset;background:none;width:76.5pt'/>
 <col class='x25' width='143' style='mso-width-source:userset;background:none;width:107.25pt'/>
 <col class='x25' width='102' span='3' style='mso-width-source:userset;background:none;width:76.5pt'/>
 <col class='x25' width='118' style='mso-width-source:userset;background:none;width:88.5pt'/>
 <col class='x21' width='119' style='mso-width-source:userset;background:none;width:89.25pt'/>
 <col class='x21' width='118' style='mso-width-source:userset;background:none;width:88.5pt'/>
 <col class='x25' width='118' span='2' style='mso-width-source:userset;background:none;width:88.5pt'/>
 <col class='x23' width='118' span='2' style='mso-width-source:userset;background:none;width:88.5pt'/>
 <col class='x21' width='107' span='2' style='mso-width-source:userset;background:none;width:80.25pt'/>
 <col class='x21' width='109' style='mso-width-source:userset;background:none;width:81.75pt'/>
 <col class='x21' width='102' style='mso-width-source:userset;background:none;width:76.5pt'/>
 <col class='x21' width='100' style='mso-width-source:userset;background:none;width:75pt'/>
 <col class='x21' width='101' span='4' style='mso-width-source:userset;background:none;width:75.75pt'/>
 <col class='x21' width='103' style='mso-width-source:userset;background:none;width:77.25pt'/>
 <col class='x21' width='100' span='2' style='mso-width-source:userset;background:none;width:75pt'/>
 <col class='x21' width='84' style='mso-width-source:userset;background:none;width:63pt'/>
 <tr height='63' style='mso-height-source:userset;height:47.25pt'>
<td height='62' class='x28' width='141' style='height:46.5pt;width:105.75pt;'>Hình thức mua hàng</td>
<td class='x28' width='131' style='width:98.25pt;'>Phương thức thanh toán</td>
<td class='x28' width='131' style='width:98.25pt;'>Nhận kèm hóa đơn</td>
<td class='x29' width='142' style='width:106.5pt;'>Ngày hạch toán (*)</td>
<td class='x29' width='135' style='width:101.25pt;'>Ngày chứng từ (*)</td>
<td class='x30' width='120' style='width:90pt;'>Số phiếu nhập (*)</td>
<td class='x30' width='120' style='width:90pt;'>Số chứng từ ghi nợ/Số chứng từ thanh toán</td>
<td class='x30' width='120' style='width:90pt;'>Mẫu số HĐ</td>
<td class='x30' width='120' style='width:90pt;'>Ký hiệu HĐ</td>
<td class='x30' width='120' style='width:90pt;'>Số hóa đơn</td>
<td class='x29' width='120' style='width:90pt;'>Ngày hóa đơn</td>
<td class='x30' width='122' style='width:91.5pt;'>Số tài khoản chi</td>
<td class='x29' width='129' style='width:96.75pt;'>Tên ngân hàng chi</td>
<td class='x30' width='142' style='width:106.5pt;'>Mã nhà cung cấp</td>
<td class='x30' width='170' style='width:127.5pt;'>Tên nhà cung cấp</td>
<td class='x30' width='120' style='width:90pt;'>Địa chỉ</td>
<td class='x30' width='120' style='width:90pt;'>Mã số thuế</td>
<td class='x30' width='120' style='width:90pt;'>Người giao hàng</td>
<td class='x30' width='144' style='width:108pt;'>Diễn giải</td>
<td class='x30' width='131' style='width:98.25pt;'>Số tài khoản nhận</td>
<td class='x30' width='143' style='width:107.25pt;'>Tên ngân hàng nhận</td>
<td class='x30' width='129' style='width:96.75pt;'>Lý do chi/nội dung thanh toán</td>
<td class='x30' width='109' style='width:81.75pt;'>Mã nhân viên mua hàng</td>
<td class='x30' width='90' style='width:67.5pt;'>Số lượng chứng từ kèm theo</td>
<td class='x30' width='109' style='width:81.75pt;'>Hạn thanh toán</td>
<td class='x30' width='109' style='width:81.75pt;'>Loại tiền</td>
<td class='x31' width='103' style='width:77.25pt;'>Tỷ giá</td>
<td class='x32' width='123' style='width:92.25pt;'>Mã hàng (*)</td>
<td class='x32' width='123' style='width:92.25pt;'>Tên hàng</td>
<td class='x32' width='74' style='width:55.5pt;'>Là dòng ghi chú</td>
<td class='x32' width='101' style='width:75.75pt;'>Mã kho</td>
<td class='x32' width='128' style='width:96pt;'>Hàng hóa giữ hộ/bán hộ</td>
<td class='x32' width='120' style='width:90pt;'>TK kho/TK chi phí (*)</td>
<td class='x32' width='102' style='width:76.5pt;'>TK công nợ/TK tiền (*)</td>
<td class='x32' width='102' style='width:76.5pt;'>ĐVT</td>
<td class='x33' width='102' style='width:76.5pt;'>Số lượng</td>
<td class='x33' width='102' style='width:76.5pt;'>Đơn giá</td>
<td class='x33' width='143' style='width:107.25pt;'>Thành tiền</td>
<td class='x33' width='102' style='width:76.5pt;'>Thành tiền quy đổi</td>
<td class='x33' width='102' style='width:76.5pt;'>Tỷ lệ CK (%)</td>
<td class='x33' width='102' style='width:76.5pt;'>Tiền chiết khấu</td>
<td class='x33' width='118' style='width:88.5pt;'>Tiền chiết khấu quy đổi</td>
<td class='x32' width='119' style='width:89.25pt;'>% thuế GTGT</td>
<td class='x34' width='118' style='width:88.5pt;'>% thuế suất KHAC</td>
<td class='x33' width='118' style='width:88.5pt;'>Tiền thuế GTGT</td>
<td class='x33' width='118' style='width:88.5pt;'>Tiền thuế GTGT quy đổi</td>
<td class='x32' width='118' style='width:88.5pt;'>TK thuế GTGT</td>
<td class='x33' width='118' style='width:88.5pt;'>Phí hàng về kho/Chi phí mua hàng</td>
<td class='x32' width='107' style='width:80.25pt;'>Nhóm HHDV mua vào</td>
<td class='x32' width='107' style='width:80.25pt;'>Số Lệnh sản xuất</td>
<td class='x32' width='109' style='width:81.75pt;'>Mã khoản mục chi phí</td>
<td class='x32' width='102' style='width:76.5pt;'>Mã đơn vị</td>
<td class='x32' width='100' style='width:75pt;'>Mã đối tượng THCP</td>
<td class='x32' width='101' style='width:75.75pt;'>Mã công trình</td>
<td class='x32' width='101' style='width:75.75pt;'>Số đơn đặt hàng</td>
<td class='x32' width='101' style='width:75.75pt;'>Số đơn mua hàng</td>
<td class='x32' width='101' style='width:75.75pt;'>Số hợp đồng mua</td>
<td class='x32' width='103' style='width:77.25pt;'>Số hợp đồng bán</td>
<td class='x32' width='100' style='width:75pt;'>Mã thống kê</td>
<td class='x32' width='100' style='width:75pt;'>Số khế ước vay</td>
<td class='x32' width='84' style='width:63pt;'>CP không hợp lý</td>
 </tr>

 ${data
   .map((item: any) => {
     return `<tr height='20' style='mso-height-source:userset;height:15pt'>
<td height='18' class='x35' style='height:13.5pt;'>${item.key + 1}</td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x36'></td>
<td class='x36'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x36'></td>
<td class='x37'></td>
<td class='x36'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x37'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x37'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x38'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x39'></td>
<td class='x40'></td>
<td class='x40'></td>
<td class='x39'></td>
<td class='x39'></td>
<td class='x40'></td>
<td class='x39'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x40'></td>
<td class='x39'></td>
<td class='x37'></td>
<td class='x37'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
<td class='x35'></td>
 </tr>`;
   })
   .join("")}
 
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
 </tr>
 <tr height='20' style='mso-height-source:userset;height:15pt'>
<td colspan='61' height='20' class='x21' style='mso-ignore:colspan;height:15pt;'></td>
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
