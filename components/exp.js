// ExperienceItem.js
import React from 'react';

const ExperienceItem = ({ 
  companyName, 
  timeTag, 
  jobTitle, 
  description, 
  achievements 
}) => {
  return (
    <div className="experience-item">
      <div className="company-name">
        {companyName}
        <span className="time-tag">{timeTag}</span>
      </div>
      <div className="job-title">{jobTitle}</div>
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

