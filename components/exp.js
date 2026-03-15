// ExperienceItem.js
import React from 'react';

// 公司级别组件
export const CompanyItem = ({ company, role, timeTag, projects }) => (
  <div className="company-block">
    <div className="company-name">
      {company}
      <span className="time-tag">{timeTag}</span>
    </div>
    {role && <div className="job-info">{role}</div>}
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
  focusTags,
  description,
  achievements
}) => {
  return (
    <div className="experience-item">
      <div className="job-title">
        <span>{projectName}</span>
        <span className="time-tag">{timeTag}</span>
      </div>
      {jobTitle && <div className="job-info">{jobTitle}</div>}
      {techStack && <div className="job-info"><strong>技术栈：</strong>{techStack}</div>}
      {focusTags?.length ? (
        <div className="project-tags">
          <strong>核心产出：</strong>{focusTags.join(", ")}
        </div>
      ) : null}
      <div className="achievements">
        <p style={{marginBottom: "4px"}}>{description}</p>
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
        <p style={{marginBottom: "4px"}}>{description}</p>
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
