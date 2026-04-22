import React, { useRef, useState } from "react";
import Markdown from "markdown-to-jsx";
import { CompanyItem } from "./experience";
import {
  educationData,
  experienceData,
  headlineTags,
  otherInfo,
  resumeFooter,
  resumeProfile,
  summaryText,
} from "./config";

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
    margin-bottom: 24px;
    border-bottom: 2px solid #333;
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .header-text {
    flex: 1;
  }

  .header-photo {
    width: 90px;
    height: 120px;
    object-fit: cover;
    margin-left: 20px;
    border-radius: 4px;
    border: 1px solid #eee;
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

export default function ResumePage() {
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
        backgroundColor: "#ffffff"
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      const pdf = new jsPDF("p", "mm", "a4");
      let position = 0;

      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
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
          <img
            src={resumeProfile.photoSrc}
            alt={resumeProfile.photoAlt}
            className="header-photo"
          />
        </div>

        <nav className="navigation">
          <button className="export-btn" onClick={exportToPDF} disabled={isExporting}>
            {isExporting ? "导出中..." : "导出 PDF"}
          </button>
        </nav>

        <div className="main-content">
          <section id="summary" className="section">
            <h2>个人总结</h2>
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
          <section id="experience" className="section">
            <h2>工作与实习经历</h2>
            {experienceData.map((exp, index) => (
              <CompanyItem key={index} {...exp} />
            ))}
          </section>



          {/* <section id="others" className="section">
            <h2>其他</h2>
            <div className="other-info">
              {otherInfo.map((item) => (
                <p key={item.label}>
                  <strong>{item.label}：</strong> {item.value}
                </p>
              ))}
            </div>
          </section> */}
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
