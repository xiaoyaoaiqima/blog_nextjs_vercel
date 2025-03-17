import React from "react";
import ExperienceItem from "./exp";
const experienceData = [
  {
    companyName: "网易云音乐 创新工程部",
    timeTag: "2024年11月 - 至今",
    jobTitle: "大模型应用开发",
    description: "工作描述：1. 在社交聊天应用场景，基于dify框架开发大模型评测系统，探索LLM应用构建SOP。2. 基于dify建立智能客服系统，涵盖用户鉴权、需求提交，解决平台运维迭代不规范、不透明和低效的问题。",
    achievements: [
      "<strong>大模型评测系统：</strong>1. 搭建原始数据链路。2. 搭建数据打标平台，积累评测样本。3. prompt+模型选择+测试找badcase+优化，梳理大模型评测原理和逻辑。4. 迭代数据打标和评测的方法论。5. 深度了解业务，记忆系统，角色认知，亲密度",
      "<strong>智能客服系统：</strong>1. 智能交互漏斗设计。2. dify+workflow+RAG，实现语义理解增强引擎；3，服务执行中枢，工单自动化，会话群组创建，知识库精准回复；3. 基于Fastap搭建web应用，建立聊天和工单管理系统，追踪服务质量，积累badcase"
    ]
  },
  {
    companyName: "网易 智企",
    timeTag: "2024年07月 - 2024年11月",
    jobTitle: "数据开发",
    description: "工作描述：基于大数据平台的数据报表制作与自动化处理，基于爬虫Web端自动化治理",
    achievements: [
      "<strong>数据报表：</strong>目的是预测商机，展示重要数据。首先要理解业务数据指标，再写SQL取数",
      "<strong>办公自动化：</strong>对离线文件进行批量化处理；通过爬虫程序模拟人工操作，完成数据采集、配置修改等任务"
    ]
  },
  {
    companyName: "字节跳动",
    timeTag: "2024年05月 - 2024年07月",
    jobTitle: "数据开发",
    description: "工作描述：广告投放机器学习模型评测系统",
    achievements: [
      "使用Flask+Vue，搭建Web应用，作为可视化模型训练平台的基础架构；主要功能是可视化调整损失函数，模型超参数",
      "实践了Linux服务器部署，Vue项目build后用nginx配置，supervisor运行Flask，编写conf配置文件。具备快速项目上线能力"
    ]
  },
  {
    companyName: "恒生电子股份有限公司",
    timeTag: "2024年02月 - 2024年05月",
    jobTitle: "后端开发 TA创新研发部",
    description: "工作描述：流量入口高并发处理，业务层缓存异常处理，支付接口\n技术栈包括：springboot，vue，redis，消息队列，分布式锁，设计模式",
    achievements: [
      "应对数据库过载：利用Redis缓存setex过期时间，实践装饰器模式，完善日志逻辑，修改数据库配置；经历数据库事故修复",
      "前端安全措施：利用Vue Router的导航守卫和Vuex管理用户权限，动态控制页面访问和操作按钮的显示",
      "分布式一致性：使用redission分布式锁保证多客户端不冲突；使用evalsha保证多redis操作的原子性"
    ]
  }
];

export default function MyCV() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>邬臻林 - 个人简历</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style dangerouslySetInnerHTML={{ __html: "\n        :root {\n            --primary-color: #2c3e50;\n            --accent-color: #3498db;\n            --text-color: #333;\n            --light-text: #7f8c8d;\n            --background: #f5f5f5;\n            --card-bg: #fff;\n            --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n            --border-radius: 8px;\n        }\n\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: 'Segoe UI', 'Arial', sans-serif;\n        }\n\n        html {\n            scroll-behavior: smooth;\n        }\n\n        body {\n            background-color: var(--background);\n            color: var(--text-color);\n            line-height: 1.6;\n            padding: 20px;\n            font-size: 16px;\n        }\n\n        .container {\n            max-width: 900px;\n            margin: 0 auto;\n            background-color: var(--card-bg);\n            border-radius: var(--border-radius);\n            box-shadow: var(--shadow);\n            position: relative;\n        }\n\n        .top-section {\n            display: flex;\n            align-items: center;\n            padding: 40px;\n            background-color: var(--primary-color);\n            color: white;\n            border-radius: var(--border-radius) var(--border-radius) 0 0;\n        }\n\n        .photo {\n            width: 150px;\n            height: 150px;\n            border-radius: 50%;\n            border: 4px solid white;\n            box-shadow: var(--shadow);\n            object-fit: cover;\n            margin-right: 30px;\n            flex-shrink: 0;\n        }\n\n        .name-title {\n            flex: 1;\n        }\n\n        h1 {\n            font-size: 36px;\n            margin-bottom: 10px;\n            font-weight: 600;\n        }\n\n        .title {\n            font-size: 18px;\n            color: rgba(255, 255, 255, 0.85);\n            font-weight: 300;\n            margin-bottom: 15px;\n        }\n\n        .contact-info {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 15px;\n        }\n\n        .contact-item {\n            display: flex;\n            align-items: center;\n            color: rgba(255, 255, 255, 0.9);\n        }\n\n        .contact-item i {\n            margin-right: 8px;\n            font-size: 14px;\n        }\n\n        .navigation {\n            background-color: var(--accent-color);\n            padding: 12px 40px;\n            position: sticky;\n            top: 0;\n            z-index: 100;\n        }\n\n        .nav-links {\n            display: flex;\n            list-style: none;\n            overflow-x: auto;\n            padding-bottom: 5px;\n        }\n\n        .nav-links li {\n            margin-right: 25px;\n            white-space: nowrap;\n        }\n\n        .nav-links a {\n            color: white;\n            text-decoration: none;\n            font-weight: 500;\n            transition: opacity 0.2s ease;\n            font-size: 14px;\n        }\n\n        .nav-links a:hover {\n            opacity: 0.8;\n        }\n\n        .main-content {\n            padding: 5px 40px;\n        }\n\n        h2 {\n            font-size: 24px;\n            color: var(--primary-color);\n            padding-bottom: 10px;\n            border-bottom: 2px solid var(--accent-color);\n            margin-bottom: 20px;\n            margin-top: 40px;\n            font-weight: 600;\n            display: flex;\n            align-items: center;\n        }\n\n        h2 i {\n            margin-right: 10px;\n            color: var(--accent-color);\n        }\n\n        .section {\n            margin-bottom: 40px;\n        }\n\n        .education-item,\n        .experience-item {\n            margin-bottom: 30px;\n            position: relative;\n        }\n\n        .school-name,\n        .company-name {\n            font-size: 20px;\n            font-weight: 600;\n            color: var(--primary-color);\n            display: flex;\n            justify-content: space-between;\n            align-items: flex-start;\n        }\n\n        .degree-info,\n        .job-info {\n            font-style: italic;\n            color: var(--light-text);\n            margin-bottom: 12px;\n            font-size: 15px;\n        }\n\n        .achievements {\n            margin-top: 12px;\n        }\n\n        ul {\n            padding-left: 20px;\n            list-style-type: circle;\n        }\n\n        li {\n            margin-bottom: 10px;\n            position: relative;\n        }\n\n        .job-title {\n            font-weight: 600;\n            color: var(--accent-color);\n            margin: 10px 0;\n            font-size: 17px;\n        }\n\n        .skills-container {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 20px;\n        }\n\n        .skill-category {\n            flex: 1;\n            min-width: 250px;\n        }\n\n        .skill-category h3 {\n            font-size: 18px;\n            color: var(--primary-color);\n            margin-bottom: 15px;\n        }\n\n        .skill-item {\n            margin-bottom: 15px;\n        }\n\n        .skill-name {\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 5px;\n            font-weight: 500;\n        }\n\n        .skill-bar {\n            height: 8px;\n            background-color: #e0e0e0;\n            border-radius: 4px;\n            overflow: hidden;\n        }\n\n        .skill-level {\n            height: 100%;\n            background-color: var(--accent-color);\n        }\n\n        .other-info {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: space-between;\n        }\n\n        .other-info div {\n            flex: 0 0 48%;\n            margin-bottom: 15px;\n            background-color: rgba(52, 152, 219, 0.05);\n            padding: 12px 15px;\n            border-radius: 6px;\n            border-left: 3px solid var(--accent-color);\n        }\n\n        .experience-item {\n            padding-left: 20px;\n            border-left: 2px solid #e0e0e0;\n        }\n\n        .experience-item::before {\n            content: '';\n            position: absolute;\n            left: -9px;\n            top: 0;\n            width: 16px;\n            height: 16px;\n            border-radius: 50%;\n            background-color: var(--accent-color);\n            border: 2px solid white;\n        }\n\n        .time-tag {\n            background-color: rgba(52, 152, 219, 0.1);\n            color: var(--accent-color);\n            padding: 3px 8px;\n            border-radius: 4px;\n            font-size: 14px;\n            font-weight: 500;\n        }\n\n        @media print {\n            body {\n                padding: 0;\n                background-color: white;\n            }\n\n            .container {\n                box-shadow: none;\n                max-width: 100%;\n            }\n\n            .navigation {\n                display: none;\n            }\n        }\n\n        @media (max-width: 768px) {\n            .top-section {\n                flex-direction: column;\n                text-align: center;\n            }\n\n            .photo {\n                margin-right: 0;\n                margin-bottom: 20px;\n            }\n\n            .contact-info {\n                justify-content: center;\n            }\n\n            .main-content, .top-section {\n                padding: 5px 20px;\n            }\n\n            .other-info div {\n                flex: 0 0 100%;\n            }\n        }\n\n        .skills-grid {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 30px;\n            margin-top: 20px;\n        }\n\n        .skills-column {\n            flex: 1;\n            min-width: 250px;\n        }\n\n        .skills-column h3 {\n            font-size: 18px;\n            color: var(--primary-color);\n            margin-bottom: 15px;\n            border-bottom: 1px solid #eaeaea;\n            padding-bottom: 5px;\n        }\n\n        .skills-list {\n            list-style: none;\n            padding: 0;\n        }\n\n        .skills-list li {\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 12px;\n            padding-bottom: 5px;\n            border-bottom: 1px dotted #eaeaea;\n        }\n\n        .skill-name {\n            font-weight: 500;\n        }\n\n        .skill-dots {\n            color: var(--accent-color);\n            letter-spacing: 2px;\n        }\n\n        @media (max-width: 600px) {\n            .skills-column {\n                flex: 0 0 100%;\n            }\n        }\n    " }} />
      <div className="container">
        <div className="top-section">
          <img src="me.png" alt="邬臻林的照片" className="photo" />
          <div className="name-title">
            <h1>邬臻林</h1>
            <div className="title">大模型应用开发工程师</div>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone" /> 19858312003
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope" /> 1428293926@qq.com
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt" /> 杭州
              </div>
            </div>
          </div>
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li><a href="#summary"><i className="fas fa-user" /> 个人总结</a></li>
            <li><a href="#skills"><i className="fas fa-code" /> 技能专长</a></li>
            <li><a href="#experience"><i className="fas fa-briefcase" /> 工作经历</a></li>
            <li><a href="#education"><i className="fas fa-graduation-cap" /> 教育经历</a></li>
            <li><a href="#others"><i className="fas fa-plus-circle" /> 其他信息</a></li>
          </ul>
        </nav>
        <div className="main-content">
          <section id="summary" className="section">
            <h2><i className="fas fa-user" /> 个人总结</h2>
            <p>1. 开发背景丰富，经历岗位多，包括大模型应用开发、前后端Web开发、数据分析和爬虫。
              <br />2. 学习能力强，由兴趣驱动。有owner到1项目经验，包括项目策划、开发、测试、上线全流程，积极沟通，勇于暴露问题。</p>
          </section>
          <section id="experience" className="section">
            <h2><i className="fas fa-briefcase" /> 工作与实习经历</h2>
            {experienceData.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </section>
          <section id="education" className="section">
            <h2><i className="fas fa-graduation-cap" /> 教育经历</h2>
            <div className="education-item">
              <div className="school-name">
                杭州电子科技大学
                <span className="time-tag">2021年09月 - 2025年07月</span>
              </div>
              <div className="degree-info">计算机类 数字媒体技术 本科 （杭州）</div>
              <div className="achievements">
                <ul>
                  <li>GPA：4.3 / 5.00（专业前10%）</li>
                  <li>荣誉：大学生创新创业训练项目（国家级）、互联网+创业大赛省金奖、乡村振兴电子商务竞赛省奖</li>
                  <li>学生工作：体育协会外联部，负责宣传招新与商业合作（寻求校外资金，联系校友企业）</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="others" className="section">
            <h2><i className="fas fa-plus-circle" /> 其他</h2>
            <div className="other-info">
              <div>
                <strong><i className="fas fa-language" /> 语言技能：</strong> 托福100+，熟练听说读写
              </div>
              <div>
                <strong><i className="fas fa-heart" /> 爱好：</strong> 健身，骑行，球类运动
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
