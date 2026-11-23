import Layout from "../../components/layout";
import { PageIntro, CaseGrid, ContactPanel } from "../../components/studio";
import s from "../../styles/studio.module.css";
export default function Cases(){return <Layout wide title="项目案例"><PageIntro label="PROJECT EXPERIENCE" title="真实业务场景，真实工程经验">红书营销与企业智脑是我们的核心方向，语音交互则展示了我们在实时 Agent 系统中的工程经验。</PageIntro><CaseGrid/><p className={s.note}>以下为创始人过往参与的项目经验，均已脱敏，不代表工作室成立后签约客户。</p><ContactPanel/></Layout>}
