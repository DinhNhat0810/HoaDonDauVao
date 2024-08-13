import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function usePopupWindow() {
  const [container, setContainer] = useState(null);
  const [windowRef, setWindowRef] = useState<any>(null);

  useEffect(() => {
    // Khi component được mount, không làm gì cả vì chúng ta cần một hành động để mở cửa sổ
    return () => {
      // Khi component unmount, đóng cửa sổ nếu nó vẫn mở
      if (windowRef) {
        windowRef.close();
      }
    };
  }, [windowRef]);

  const openPopup = () => {
    const newWindow: any = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    );
    setWindowRef(newWindow);
    const newContainer = newWindow.document.createElement("div");
    newWindow.document.body.appendChild(newContainer);
    setContainer(newContainer);
  };

  return { container, openPopup };
}

export default usePopupWindow;
