# 个人学术网站 V6 · 上传说明

更新日期：2026 年 11 月 12 日。

使用 `zhishan-website-v6-full.zip`：解压后，把里面的全部文件与文件夹上传到原网站的发布目录，覆盖同名文件并保持目录结构。**上传解压后的内容，不是 ZIP 文件本身，也不要再套一层文件夹。** 发布目录应直接看到 `index.html`，以及 `assets/`、`media/`、`publications/`、`downloads/`、`archive/`。

图片、研究脉络图、论文 PDF、两篇 ICSC PDF、三个 Rescue 演示视频、六个版本的 OWN FLOW 源码包与研究指南均已包含。无需另传图片，也无需叠加旧补丁。原有网站设置、CNAME 和发布工作流请保留；继续使用原来配置的发布分支与目录。建议保留旧版备份。

## 这次新增内容

- OWN FLOW v1.0–v1.5 的连续版本目录，包含每版网址、功能、概念图、实验建议、源码和原始说明。
- 分别面向足球爱好者、控制研究者和多智能体/网络/任务研究者的使用路径。
- 从 formation control 到 network inference、mission policies 和 mission automata 的研究连续性说明。
- 固定种子下的实际故障复现、数据图、原始任务报告和研究复现指南。
- 首页、Projects、OWN1 与研究脉络同步指向当前版本。

当前足球平台： https://own-football-flow1p5.pages.dev/

个人网站的版本目录位于 `#/research/own-flow`；可从首页或 Projects 的 OWN FLOW 卡片进入。所有 Launch 链接打开已有平台，个人网站并未另建一套足球运行环境。

`https://own-football-flow2.pages.dev/` 实际显示 v1.1.0，因此列为 v1.1 的另一个部署地址，并非 v2.0。

## 上传后检查

1. 打开首页，进入 OWN FLOW 详情页，依次点击六个版本，确认显示相应介绍与链接。
2. 打开最新版本入口，试下载一个源码包与 Research Starter 指南。
3. 检查 Research evolution、Papers、Beyond the Lab 和 Rescue 视频。
4. 如果仍出现旧版，强制刷新浏览器；再检查发布任务是否完成。

`zhishan-website-v6-source.zip` 用于继续修改网站，其中 `dist/` 才是可直接上传的成品目录。维护说明在源码包根目录 `README.md`，完整审查记录在 `docs/REVIEW-V6-ZH.md`。

本包已完成本地构建、排版与交互审查；本次没有替你修改线上仓库或发布设置。
