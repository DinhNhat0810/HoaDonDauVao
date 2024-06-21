import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Trang bạn đang tìm không tồn tại."
    extra={
      <Link to="/">
        <Button type="primary">Trở về trang chủ</Button>
      </Link>
    }
  />
);

export default NotFound;
