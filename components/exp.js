// ExperienceItem.js
import React from 'react';

// 公司级别组件
export const CompanyItem = ({ company, timeTag, projects }) => (
  <div className="company-block" style={{ marginBottom: '30px' }}>
    <div className="company-name">
      {company}
      <span className="time-tag">{timeTag}</span>
    </div>
    {projects.map((project, index) => (
      <ProjectItem key={index} {...project} />
    ))}
  </div>
);

// 项目级别组件
const ProjectItem = ({
  projectName,
  jobTitle,
  timeTag,
  techStack,
  description,
  achievements
}) => {
  return (
    <div className="experience-item" style={{ marginTop: '20px' }}>
      <div className="job-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>{projectName}</span>
        <span className="time-tag">{timeTag}</span>
      </div>
      {jobTitle && <div className="job-info">{jobTitle}</div>}
      {techStack && <div className="job-info">技术栈：{techStack}</div>}
      <div className="achievements">
        <p>{description}</p>
        <ul>
          {achievements.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

// 兼容旧版扁平结构
const ExperienceItem = ({
  type = "work",
  company,
  department,
  projectName,
  timeTag,
  jobTitle,
  techStack,
  description,
  achievements
}) => {
  const isProject = type === "project";

  const displayName = isProject ? projectName : `${company}${department ? ` · ${department}` : ''}`;
  const subtitleText = isProject ? techStack : jobTitle;

  return (
    <div className="experience-item">
      <div className="company-name">
        {displayName}
        <span className="time-tag">{timeTag}</span>
      </div>
      <div className="job-title">{subtitleText}</div>
      <div className="achievements">
        <p>{description}</p>
        <ul>
          {achievements.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;

