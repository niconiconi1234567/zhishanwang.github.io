# Zhishan Wang 学术网站 · 全面加强版 V2

更新日期：2026 年 10 月 26 日。

## 上传方法

使用 **zhishan-website-v2-full.zip**。解压后，把里面的 `index.html`、`assets/`、`publications/`、`archive/`、PDF 等文件和文件夹一起放到当前网站的发布根目录，覆盖同名文件并保留目录结构。`index.html` 必须位于网站根目录；不要再套一层 ZIP 文件名对应的文件夹。

**全部网站图片和新照片都在 full ZIP 里，不需要另外上传 visuals ZIP。** 网站无需安装依赖或执行构建命令。图片包供单独取图使用；source ZIP 供以后维护代码使用，不用于直接上传。

如果使用 GitHub Pages，仍采用当前仓库的发布分支和目录。上传后等待发布完成，再用 Ctrl+F5 刷新。此次 CSS 和 JavaScript 与首页合并在同一份 HTML 内，新图片采用新的路径，避免新页面混用旧版样式或脚本。

## 这次实际改动

- 重新设计全站的字体层级、页面宽度、导航、留白和颜色，提供明暗主题，并调整手机上的图文顺序。
- 用最新白底照片替换当前网站照片。首页宽度从 64px 增至 108px，手机为 96px，个人简介页为 168px；均保留原始比例。
- 重写首页研究定位，用六个研究兴趣组织分布式控制、集体可辨识性、信息获取、行为学习、知识驱动任务和策略交互。
- 重建 Research spectrum & evolution：连接 OWN2、OWN2 Plus、OGT1、The Lonely Observer、Mission-to-Control 与行为推断，支持节点选择和相关研究链接，手机也能阅读连接关系。
- 重写九个研究方向详情，并建立六个主要项目的统一目录。每个方向说明问题、核心思想、当前进展、适用边界、后续问题和具体合作切入点。
- 加入 Lonely Observer 的双向策略探测新分支，以及 OGT1 的当前理论稿件介绍。未完成的理论目标明确标为发展中的方向。
- 重做 Papers：五篇 featured paper 均有可点击的独立介绍页，包括研究问题、机制示意、核心思想、结果解读和版本说明；支持标题、作者、主题词及投稿状态搜索。
- 新增六幅主题概念插画、九幅可缩放的机制示意图，并从现有稿件提取六幅真实论文图。论文原图可以直接点击打开；概念插画、示意图与真实实验图明确区分。
- 首页、研究页和个人简介加入 RIM Lab 的介绍、官网入口，以及欢迎访问实验室网站、交流与合作的邀请。
- 同步检查个人兴趣、旧项目入口、教育与荣誉、技术报告和归档网站。历史 archive 文件保持原样。

## 论文状态与资料边界

| 论文 | 本版显示状态 |
| --- | --- |
| Task-Conditioned Distributed Relational Formation Control… | ICARCV 2026 · Accepted |
| How to Interpret, What to Use, and What to Forward… | AAMAS 2027 Research/Main Track · Submitted |
| Inferring Hidden States and Decision-Relevant Information… | ISCS 2027 · Submitted |
| From Private Cognition to Collective Estimation… | Research manuscript |
| Translating Team Strategy into Closed-Loop Vehicle Control… | Research manuscript |

按已有可核实材料区分接收、已投递和研究稿件；没有把目标会议或写作计划写成已投稿。AAMAS Blue Sky Track 未收录。ICARCV 与 ISCS 的公开 PDF 保留现有稿件版本；AAMAS 图注明来自可用工作稿，未把它称为最终提交版本。新理论稿件放在相关研究方向下，没有计入已投稿列表。

## 审查与测试

- 静态检查覆盖 27 个路由、49 处图片引用、所有本地资源与站内跳转、唯一页面标识和图片尺寸声明。
- 在浏览器中检查 360、390、768、1024px 视口及明暗主题，共 216 个页面/视口/主题组合；无横向溢出、破图或零尺寸图片。
- 实际查看桌面首页、手机首页、研究谱系、项目目录、论文详情和个人简介的排版。
- 检验状态筛选、关键词搜索、键盘 Enter 导航、研究节点选择、相关研究链接、浏览器前进/返回，以及论文图片打开原图。
- 独立审查发现的主题搜索遗漏和手机图谱连接说明缺失均已修复。对论文标题整块点击区域及懒加载图片尺寸问题进行了修正和复测。
- 最终 full ZIP 解压后再检查资源、路由与历史 archive 完整性；source ZIP 的构建输出与交付首页一致。

测试基于当前 Chromium 浏览器和模拟视口，不等同于所有手机浏览器或外部网站的可用性保证。本次没有替你发布或覆盖线上网站。
