---
title: '2025-04-09-rag+multiagent调研'
date: '2025-04-09'
description:
---


我感觉要做agent rag的话，dify没啥优势。
![img](https://image.woshipm.com/2024/09/05/4ed790fe-6b2a-11ef-9237-00163e142b65.png)

reAct模式 think act observe, 什么时候停止
rewoo模式，plan task—list，action，结合 （ 不用一步步迭代，但对plan的要求很高
https://www.woshipm.com/ai/6109946.html
plan&Execute模式：



这个仓库是 `agents-course`，是 Hugging Face 的智能体课程仓库，旨在帮助学习者从智能体的基础知识逐步掌握到最终完成带有基准测试的作业。以下是对该仓库的详细介绍：

### 仓库内容概述
课程分为多个单元，涵盖了从智能体基础到不同框架应用，再到最终作业和基准测试的内容。具体单元如下：
| 单元 | 主题 | 描述 |
| --- | --- | --- |
| 0 | [课程欢迎](https://huggingface.co/learn/agents-course/en/unit0/introduction) | 欢迎信息、指南、必要工具和课程概述。 |
| 1 | [智能体简介](https://huggingface.co/learn/agents-course/en/unit1/introduction) | 智能体的定义、大型语言模型（LLMs）、模型家族树和特殊标记。 |
| 1 附加 | [为函数调用微调大型语言模型](https://huggingface.co/learn/agents-course/bonus-unit1/introduction) | 学习如何为函数调用微调大型语言模型。 |
| 2 | [AI 智能体框架](https://huggingface.co/learn/agents-course/unit2/introduction) | 概述 `smolagents`、`LangGraph` 和 `LlamaIndex` 框架。 |
| 2.1 | [Smolagents 框架](https://huggingface.co/learn/agents-course/unit2/smolagents/introduction) | 学习如何使用 `smolagents` 库构建有效的智能体。 |
| 2.2 | [LlamaIndex 框架](https://huggingface.co/learn/agents-course/unit2/llama-index/introduction) | 学习如何使用 `LlamaIndex` 工具包在数据上构建由大型语言模型驱动的智能体。 |
| 2.3 | [LangGraph 框架](https://huggingface.co/learn/agents-course/unit2/langgraph/introduction) | 学习如何使用 `LangGraph` 框架构建生产就绪的应用程序。 |
| 2 附加 | [可观测性和评估](https://huggingface.co/learn/agents-course/bonus-unit2/introduction) | 学习如何跟踪和评估智能体。 |
| 3 | [用例](units/en/unit3/README.md) | 使用各种框架的 SQL、代码、检索和设备上的智能体。 |
| 4 | [最终作业和基准测试](units/en/unit4/README.md) | 智能体的自动评估和学生结果排行榜。 |

### 目录结构
```
.gitignore
LICENSE
README.md
quiz/
 .python-version
 README.md
 data/
 push_questions.py
 pyproject.toml
 uv.lock
units/
 en/
 vi/
 zh-CN/
.github/
 ISSUE_TEMPLATE/
 workflows/
notebooks/
 bonus-unit1/
 bonus-unit2/
 unit1/
 unit2/
scripts/
 translation.py
 vi.py
```

### 主要文件和目录功能
1. **`README.md`**：仓库的主说明文件，包含课程概述、单元介绍、先决条件、贡献指南和引用信息。
2. **`quiz/`**：
    - `push_questions.py`：用于将测验问题推送到 Hugging Face Hub 的脚本。
    - `pyproject.toml`：定义项目依赖，包括 `datasets`、`huggingface-hub` 等。
3. **`units/`**：
    - `en/`：英文课程内容，包含每个单元的详细文档和 `_toctree.yml` 文件。
    - `vi/`：越南语课程内容。
    - `zh-CN/`：中文课程内容。
4. **`.github/workflows/`**：包含 GitHub Actions 工作流配置文件，如 `build_documentation.yml`，用于在 `main` 分支有推送时构建文档。
5. **`notebooks/`**：包含各个单元的 Jupyter Notebook 文件，用于实践和演示。
6. **`scripts/`**：
    - `translation.py`：用于自动翻译课程文档的脚本。

### 贡献指南
- **小错误和语法修正**：发现小的拼写或语法错误可自行修复并提交拉取请求。
- **新增单元**：创建问题描述新单元及添加原因，讨论通过后可进行协作。
- **现有单元工作**：不同单元有不同的贡献状态，可参考 `README.md` 中的表格。如有疑问，可在 [Discord](https://discord.gg/UrrTSsSyjb) 中讨论。

### 引用信息
在出版物中引用该仓库可使用以下 BibTeX 格式：
```bibtex
@misc{agents-course,
  author = {Burtenshaw, Ben and Thomas, Joffrey and Simonini, Thomas},
  title = {The Hugging Face Agents Course},
  year = {2025},
  howpublished = {\url{https://github.com/huggingface/agents-course}},
  note = {GitHub repository},
}
```

### 先决条件
- 具备 Python 基础知识。
- 了解大型语言模型（LLMs）的基础知识。



[1]   https://flowiseai.com/

[2]   https://autochain.forethought.ai/examples/

[3]   https://www.llamaindex.ai/