# 个人学术网站 V3：更新与上传说明

版本日期：2026-10-28。

## 上传方法

解压 full.zip，把里面的全部内容上传至网站根目录。根目录应直接有 index.html，而不是再套一层文件夹。assets、media、publications、archive 及 PDF 均须一起上传；图片和三段 Rescue 视频都在完整包中，无须从素材包另行补传。保留服务器现有的域名、HTTPS、CNAME 等配置；先备份旧版再覆盖网站文件。上传后刷新浏览器缓存，检查首页、Research、Papers、Beyond the Lab 及 Rescue 视频。

这是静态网站，无须安装后端或运行构建命令。源码包用于以后修改；素材包是独立取用图片/视频的便利副本，不是部署必需步骤。

## 本次主要改动

- Research spectrum 改为三条主线、十条研究线、三十个具体分支。覆盖 OWN2、OWN2 Plus、OGT1、Behavior as information、The Lonely Observer、Strategic participation、OWN Tactic、Team racing、Mission-to-Control 与 Search & rescue。点击后显示研究问题、方法、进展、边界、论文与关联研究。连线表示思想联系，不冒充理论依赖或发表时间顺序。手机端点击后聚焦详情，并可返回分支。
- 同步提供可缩放 SVG 与 2700×2580 PNG 研究全景图，网站内可下载。精确文字与结构用矢量绘图完成。
- 首页照片进一步放大，保持自然比例；增加 Google Scholar 与 ORCID 0009-0002-4649-1311；当前身份写作 PhD student。
- Beyond the Lab 进入主导航；加入 Chelsea 官方队徽、三部电影海报及来源、Kodaline/My Chemical Romance 简介、广州天河中学—大连海事—Purdue—NTU 足迹。Goodfellas 与 The Irishman 标注 Martin Scorsese，Once Upon a Time in America 标注 Sergio Leone。
- 加强 RIM Lab 邀请与合作方向，扩写研究兴趣、项目与论文说明。
- 两篇 ICSC 论文标记 Submitted，并补入原稿图、方法说明与结果解读。旧版赛车稿中的图明确标记 Earlier-manuscript figure，不冒充最终提交版本。
- Rescue 展示三段原始模拟视频、框架图、原始结果图及 observation—confidence—evidence—rule activation—mission extension—execution 概念流程。视频不自动播放，离开所在页面时暂停。
- 保留原有论文 PDF 和历史档案；独立审查确认八个基线 PDF 字节一致。

## 论文状态与明确保留的缺口

已记录：ICARCV 一篇 Accepted；AAMAS Main Track 一篇 Submitted；ISCS 一篇 Submitted；ICSC 两篇 Submitted；ICAC 两篇 Submitted。不包括 AAMAS Blue Sky。

目前已能对应标题和研究内容的五篇论文有独立详情页。用户确认两篇 ICAC 已提交，但现有材料中仍未核实这两篇的精确标题与原稿，因此将其作为两篇已提交记录单独列出，没有编造标题、作者或详情页。提供标题/原稿后可以准确补齐。理论草稿与发展中项目没有擅自标为已提交。

## 验证记录

- 静态检查：28 个唯一路由、66 个图片引用、内部链接、本地文件、图片固有尺寸、论文状态边界、图谱节点/连线/论文入口和档案哈希通过。
- 浏览器布局：28 页面 × 5 种宽度（360/390/768/1024/1440）× 2 种主题，共 280 组，未发现页面横向溢出或图片加载/零高度异常。此检查不等同于每个视觉细节的自动审美评价。
- 人工查看首页、研究图、手机详情、Beyond the Lab 海报排版；确认 OWN2 节点展示两篇正确论文链接。最后的手机焦点与返回交互另行实测。
- 三段视频均为浏览器可播放 H.264；已分别验证播放。离开 Rescue 页面后，全部视频 paused=true。
- 独立代码审查未发现严重或重要缺陷；修复源码说明版本号及图谱渲染依赖缺失时可能保留旧 PNG 的问题。临时 qa.html 从部署包移除。
- 发布包解压检查通过；源码包在独立目录重建后 index.html 字节一致，静态检查再次通过。结果记录在 release-checks.txt。

外部个人资料链接使用用户给定地址，未将无法访问的 Scholar/ORCID 页面内容当作已核实履历。外部图片来源见素材包 credits；海报及队徽权利归原权利人。
