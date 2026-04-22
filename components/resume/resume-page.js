import React, { useRef, useState } from "react";
import Markdown from "markdown-to-jsx";
import { CompanyItem } from "./experience";
import * as defaultConfig from "./config";

const resumeStyles = `
  :root {
    --primary-color: #333;
    --text-color: #333;
    --light-text: #666;
    --background: #fff;
    --border-radius: 4px;
    --accent-color: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  body {
    background-color: #f6f6f6;
    color: var(--text-color);
    line-height: 1.5;
    padding: 20px;
    font-size: 14px;
  }

  .container {
    max-width: 850px;
    margin: 0 auto;
    background-color: #fff;
    padding: 40px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  /* Header */
  .top-section {
    margin-bottom: 4px;
    padding-bottom: 4px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .header-text {
    flex: 1;
  }

  .header-photo-wrapper {
    width: 90px;
    height: 120px;
    margin-left: 20px;
    border-radius: 4px;
    border: 1px solid #eee;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
  }

  .header-photo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: auto;
    max-width: none;
    display: block;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 4px;
    font-weight: 600;
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .contact-info {
    font-size: 13px;
    color: var(--light-text);
  }
  
  .contact-info a {
    color: inherit;
    text-decoration: none;
  }

  .profile-tags {
    margin-top: 8px;
    font-size: 13px;
    font-weight: 500;
  }

  /* Main Sections */
  h2 {
    font-size: 18px;
    color: var(--primary-color);
    border-bottom: 1px solid #ddd;
    padding-bottom: 4px;
    margin-top: 24px;
    margin-bottom: 12px;
    font-weight: 600;
  }

  .section {
    margin-bottom: 20px;
  }

  .summary-card {
    font-size: 14px;
  }

  /* Experience & Education */
  .company-block {
    margin-bottom: 20px;
  }

  .company-name, .school-name {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
  }

  .time-tag {
    font-size: 13px;
    font-weight: 400;
    color: var(--light-text);
  }

  .experience-item {
    margin-top: 12px;
  }

  .job-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .job-info {
    font-size: 13px;
    color: var(--light-text);
    margin-bottom: 4px;
  }
  
  .project-tags {
    font-size: 13px;
    margin-bottom: 8px;
  }

  .achievements {
    margin-top: 8px;
  }

  ul {
    padding-left: 18px;
    list-style-type: disc;
  }

  li {
    margin-bottom: 4px;
  }

  .education-item {
    margin-bottom: 16px;
  }

  .degree-info {
    font-size: 14px;
    color: var(--text-color);
    margin-bottom: 4px;
  }

  /* Navigation */
  .navigation {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 100;
  }

  .nav-links {
    display: none;
  }

  .export-btn {
    background: #fff;
    border: 1px solid #ccc;
    color: #333;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius: 4px;
  }

  .export-btn:hover {
    background: #f9f9f9;
  }

  @media print {
    body {
      padding: 0;
      background: #fff;
    }
    .container {
      box-shadow: none;
      padding: 0;
      max-width: 100%;
    }
    .navigation {
      display: none;
    }
    .section {
      page-break-inside: avoid;
    }
  }
`;;

export default function ResumePage({ config = defaultConfig }) {
  const {
    educationData,
    experienceData,
    projectData,
    skillsData,
    headlineTags = [],
    resumeFooter,
    resumeProfile,
    summaryText,
    experienceTitle = "工作与实习经历",
  } = config;

  const containerRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    if (isExporting) return;

    setIsExporting(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const element = containerRef.current;
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        imageTimeout: 20000,
        foreignObjectRendering: false
      });

      const pdfWidth = 210;
      const pdfPageHeight = 297;
      // 每一页对应的 canvas 像素高度
      const pxPerPage = (canvas.width * pdfPageHeight) / pdfWidth;

      const pdf = new jsPDF("p", "mm", "a4");
      const totalPages = Math.ceil(canvas.height / pxPerPage);

      // 按页切片，避免重复嵌入整张长图
      for (let i = 0; i < totalPages; i++) {
        const sliceCanvas = document.createElement("canvas");
        const sliceHeight = Math.min(pxPerPage, canvas.height - i * pxPerPage);
        sliceCanvas.width = canvas.width;
        sliceCanvas.height = sliceHeight;
        const ctx = sliceCanvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
        ctx.drawImage(
          canvas,
          0, i * pxPerPage, canvas.width, sliceHeight,
          0, 0, canvas.width, sliceHeight
        );
        const sliceImgHeight = (sliceHeight * pdfWidth) / canvas.width;
        if (i > 0) pdf.addPage();
        pdf.addImage(
          sliceCanvas.toDataURL("image/jpeg", 0.92),
          "JPEG",
          0,
          0,
          pdfWidth,
          sliceImgHeight
        );
      }

      pdf.save(resumeProfile.pdfFileName);
    } catch (error) {
      console.error("PDF 导出失败:", error);
      alert("导出失败，请重试");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{resumeProfile.documentTitle}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style dangerouslySetInnerHTML={{ __html: resumeStyles }} />
      <div className="container" ref={containerRef}>
        <div className="top-section">
          <div className="header-text">
            <h1>{resumeProfile.name}</h1>
            <div className="title">{resumeProfile.jobTitle}</div>
            <div className="contact-info">
              {resumeProfile.contactItems.map((item, index) => (
                <React.Fragment key={item.text}>
                  {index > 0 ? " | " : null}
                  {item.href ? <a href={item.href}>{item.text}</a> : item.text}
                </React.Fragment>
              ))}
            </div>
            <div className="profile-tags">
              {headlineTags.join(" | ")}
            </div>
          </div>
          <div className="header-photo-wrapper">
            <img
              src={resumeProfile.photoSrc}
              alt={resumeProfile.photoAlt}
              className="header-photo"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        <nav className="navigation">
          <button className="export-btn" onClick={exportToPDF} disabled={isExporting}>
            {isExporting ? "导出中..." : "导出 PDF"}
          </button>
        </nav>

        <div className="main-content">
          <section id="summary" className="section">
            <h2 style={{ marginTop: "0" }}>个人总结</h2>
            <div className="summary-card">
              <Markdown>{summaryText}</Markdown>
            </div>
          </section>
          <section id="education" className="section">
            <h2>教育经历</h2>
            {educationData.map((education) => (
              <div className="education-item" key={education.school}>
                <div className="school-name">
                  {education.school}
                  <span className="time-tag">{education.timeTag}</span>
                </div>
                <div className="degree-info">{education.degreeInfo}</div>
                <div className="achievements">
                  <ul>
                    {education.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
          {experienceData?.length ? (
            <section id="experience" className="section">
              <h2>{experienceTitle}</h2>
              {experienceData.map((exp, index) => (
                <CompanyItem key={index} {...exp} />
              ))}
            </section>
          ) : null}
          {projectData?.length ? (
            <section id="projects" className="section">
              <h2>项目经历</h2>
              {projectData.map((exp, index) => (
                <CompanyItem key={index} {...exp} />
              ))}
            </section>
          ) : null}
          {skillsData?.length ? (
            <section id="skills" className="section">
              <h2>技能/证书及其他</h2>
              <div className="other-info">
                {skillsData.map((item) => (
                  <p key={item.label} style={{ marginBottom: "4px" }}>
                    <strong>{item.label}：</strong>{item.value}
                  </p>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
      <footer style={{ textAlign: "center", fontSize: "13px", color: "#888", marginTop: "2rem" }}>
        <a
          href={resumeFooter.icpHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {resumeFooter.icpLabel}
        </a>
      </footer>
    </div>
  );
}
