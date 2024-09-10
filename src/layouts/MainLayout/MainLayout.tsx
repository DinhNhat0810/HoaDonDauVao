import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMAGES, ROUTE } from "../../libs/constants";
import { AppContext } from "../../contexts/app.context";
import ExpandIcon from "../../components/Icon/expand";
import ComputerIcon from "../../components/Icon/computer";
import DocumentIcon from "../../components/Icon/document";
import StatisticalIcon from "../../components/Icon/statistical";
import ProtectUserIcon from "../../components/Icon/protect-user";
import SettingIcon from "../../components/Icon/setting";
import Header from "./Header";
import { CaretDownOutlined } from "@ant-design/icons";
import { set } from "lodash";

type Props = {
  children?: React.ReactNode;
};

type ItemsType = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: ItemsType[];
};

const RenderIcon = ({
  active,
  ROUTE,
  icon: IconComponent,
  isFirstLoad,
}: {
  active: string | number;
  ROUTE: string;
  icon: React.ElementType;
  isFirstLoad: boolean;
}) => {
  return (
    <IconComponent
      className={`py-[13px] px-[12px] ${
        !isFirstLoad && active === ROUTE ? "bg-primary-color" : "bg-[#343436]"
      } rounded-md`}
    />
  );
};

const MainLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { mst, token } = useContext(AppContext);
  const [active, setActive] = useState<string | number>(ROUTE.HDMV);
  const [activeSubMenu, setActiveSubMenu] = useState<string | number>(
    ROUTE.TQ_HD
  );
  const [subMenu, setSubMenu] = useState<ItemsType[]>([]);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [menusSelected, setMenusSelected] = useState<string[]>([
    ROUTE.TQ,
    ROUTE.HD,
    ROUTE.BAOCAO,
    ROUTE.DANHMUC,
    ROUTE.HETHONG,
  ]);

  const items: ItemsType[] = [
    {
      key: ROUTE.TQ,
      label: "Tổng quan",
      icon: (
        <RenderIcon
          isFirstLoad={isFirstLoad}
          active={active}
          ROUTE={ROUTE.TQ}
          icon={ComputerIcon}
        />
      ),
      children: [
        {
          key: ROUTE.TQ_HD,
          label: "Tổng quan hóa đơn",
        },
      ],
    },
    {
      key: ROUTE.HD,
      label: "Hóa đơn",
      icon: (
        <RenderIcon
          isFirstLoad={isFirstLoad}
          active={active}
          ROUTE={ROUTE.HD}
          icon={DocumentIcon}
        />
      ),
      children: [
        {
          key: ROUTE.HDDV,
          label: "HĐ đầu vào",
        },
        {
          key: ROUTE.HDDV_MTT,
          label: "HĐ đầu vào máy tính tiền",
        },
        {
          key: ROUTE.HDDR,
          label: "HĐ đầu ra",
        },
        {
          key: ROUTE.HDDR_MTT,
          label: "HĐ đầu ra máy tính tiền",
        },
      ],
    },

    {
      key: ROUTE.BAOCAO,
      label: "Báo cáo",
      icon: (
        <RenderIcon
          isFirstLoad={isFirstLoad}
          active={active}
          ROUTE={ROUTE.BAOCAO}
          icon={StatisticalIcon}
        />
      ),

      children: [
        {
          key: ROUTE.BAOCAO_KXBKMV,
          label: "Kết xuất bảng kê mua vào",
        },
        {
          key: ROUTE.BAOCAO_KXBKBR,
          label: "Kết xuất bảng kê bán ra",
        },
        {
          key: ROUTE.BAOCAO_THKT,
          label: "Tổng hợp khai thuế",
        },
        {
          key: ROUTE.BAOCAO_HDRR,
          label: "Hóa đơn rủi ro",
        },
      ],
    },

    {
      key: ROUTE.DANHMUC,
      label: "Danh mục",
      icon: (
        <RenderIcon
          isFirstLoad={isFirstLoad}
          active={active}
          ROUTE={ROUTE.DANHMUC}
          icon={ProtectUserIcon}
        />
      ),
      children: [
        {
          key: ROUTE.DANHMUC_NCC,
          label: "Danh mục nhà cung cấp",
        },
        {
          key: ROUTE.DANHMUC_KH,
          label: "Danh mục khác hàng",
        },
      ],
    },

    {
      key: ROUTE.HETHONG,
      label: "Hệ thống",
      icon: (
        <RenderIcon
          isFirstLoad={isFirstLoad}
          active={active}
          ROUTE={ROUTE.HETHONG}
          icon={SettingIcon}
        />
      ),
      children: [
        {
          key: ROUTE.HETHONG_TTDN,
          label: "Thông tin doanh nghiệp",
        },
        {
          key: ROUTE.HETHONG_QLTN,
          label: "Quản lý tài nguyên",
        },
        {
          key: ROUTE.HETHONG_KNCQT,
          label: "Kết nối cơ quan thuế",
        },
        {
          key: ROUTE.HETHONG_NKTC,
          label: "Nhật ký truy cập",
        },
      ],
    },
  ];

  useEffect(() => {
    setActive("/" + location.pathname.split("/")[1]);

    setActiveSubMenu(location.pathname);

    setSubMenu(
      items.find((item) => item.key === "/" + location.pathname.split("/")[1])
        ?.children || []
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleSelectItem = (item: ItemsType) => {
    if (item.key) {
      navigate(item.children?.[0].key || "");
    }
    setIsFirstLoad(false);
  };

  const handleSelectSubMenu = (item: ItemsType) => {
    if (item.key) {
      navigate(item.key);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex sticky top-0">
        <div className="bg-black-color p-3 w-[88px] min-h-screen flex justify-between flex-col">
          <div className="flex justify-center py-3 mb-4">
            <ExpandIcon
              onClick={() => setCollapsed(!collapsed)}
              className="cursor-pointer"
            />
          </div>
          <ul className="flex-1">
            {items.map((item, index) => (
              <li
                className="text-[13px] font-semibold flex flex-col items-center cursor-pointer mb-4"
                key={index}
                onClick={() => handleSelectItem(item)}
              >
                <div
                  className={`relative ${
                    !isFirstLoad && active === item.key
                      ? "before:block"
                      : "before:hidden"
                  } before:content-[''] before:w-4 before:top-1 before:bottom-1 before:left-[-34px] before:rounded-md before:bg-primary-color before:absolute`}
                >
                  {item.icon}
                </div>
                <span className="text-white mt-2">{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="avatar"
              width="44"
              height="44"
              className="rounded-full"
            />
          </div>
        </div>
        <div
          className={`bg-[#343436] transition-width duration-200 ease-in-out ${
            collapsed ? "w-0" : "w-[200px]"
          } overflow-y-auto max-h-screen`}
        >
          <div className={`p-4`}>
            <img src={IMAGES.home.logo} alt="logo" className="" />
            <ul className="mt-8">
              {isFirstLoad
                ? items.map((item, index) => (
                    <li
                      className={`text-[13px] rounded-md font-semibold flex flex-col items-start cursor-pointer ${
                        activeSubMenu === item.key
                          ? "text-white bg-[#1E1E1E]"
                          : "text-[#ffffff80]"
                      }
                      `}
                      key={index}
                    >
                      <div
                        className="text-white w-full hover:text-white
                         py-3 leading-[14px] rounded-md font-semibold flex items-center cursor-pointer
                        "
                        onClick={() => {
                          setMenusSelected((prev) => {
                            if (prev.includes(item.key)) {
                              return prev.filter((x) => x !== item.key);
                            } else {
                              return [...prev, item.key];
                            }
                          });
                        }}
                      >
                        <CaretDownOutlined className="mx-2" />
                        {item.label}
                      </div>

                      <ul className="w-full">
                        {item.children?.map((child, index) => (
                          <li
                            className={`text-[13px] py-3 leading-[14px] rounded-md font-semibold flex flex-col items-start cursor-pointer hover:text-white ${
                              activeSubMenu === child.key
                                ? "text-white bg-[#1E1E1E]"
                                : "text-[#ffffff80]"
                            }`}
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectSubMenu(child);
                            }}
                          >
                            <span className="pl-2 w-full block">
                              {child.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))
                : subMenu.map((item, index) => (
                    <li
                      className={`text-[13px] py-3 leading-[14px] rounded-md font-semibold flex flex-col items-start cursor-pointer hover:text-white
                         ${
                           activeSubMenu === item.key
                             ? "text-white bg-[#1E1E1E]"
                             : "text-[#ffffff80]"
                         }`}
                      key={index}
                      onClick={() => handleSelectSubMenu(item)}
                    >
                      <span className="pl-2">{item.label}</span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col flex-grow-[1] overflow-y-auto relative">
        <Header collapsed={collapsed} />
        <div className="flex-1 p-4 mt-20">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
