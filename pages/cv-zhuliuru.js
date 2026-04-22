import ResumePage from "../components/resume";
import * as zhuliuruConfig from "../components/resume/config-zhuliuru";
import Link from "next/link";

export default function CVZhuliuru() {
  return (
    <div>
      <Link
        href="/"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          padding: "8px 15px",
          backgroundColor: "#3498db",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      >
        <i className="fas fa-arrow-left" style={{ marginRight: "8px" }} />
        返回首页
      </Link>
      <ResumePage config={zhuliuruConfig} />
    </div>
  );
}
