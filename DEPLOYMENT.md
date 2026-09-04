# 原网址部署说明

目标网址：https://niconiconi1234567.github.io/zhishanwang.github.io/

目标仓库：https://github.com/niconiconi1234567/zhishanwang.github.io

这个包是可以由 GitHub Pages 直接发布的静态网站，不需要安装 Node.js，也不需要构建。

## 上线步骤

1. 在仓库的 Settings → Pages 查看当前 Source、Branch 和 Folder。保留原发布位置。当前包没有读取到你的账号内 Pages 设置，因此没有假定发布分支是 main 或发布目录是根目录。
2. 更新之前，先从仓库 Code → Download ZIP 下载旧版，并保留一份本地备份。随包的 archive 是本次设计时保存的旧站快照；如果你在此后又更新过旧站，应先把最新旧站完整复制到 archive，再覆盖新主页。
3. 解压本发布包，把文件和文件夹的内容上传到步骤 1 对应的发布目录。可以使用 Add file → Upload files；上传的是解压后的内容，不是 ZIP 本身，也不是额外包裹的一层文件夹。保留其他既有文件。
4. 提交更新。如果原站使用 Deploy from a branch，这次更新将触发发布。如果原站使用 GitHub Actions，请先检查它发布的是哪个目录，然后将文件放进那个目录，保留原有工作流。
5. 在 Actions 查看 Pages 发布任务，等它成功后打开原网址。新主页在原网址，旧站在原网址后加 archive/。

如果需要新设置，最简单的配置是：Settings → Pages → Source: Deploy from a branch → 选择实际存放网站文件的分支 → 选择 /(root) 或 /docs → Save。不要在没有检查文件位置时改变现有设置。

## 上线后检查

- 原网址显示新头像和 NTU 学术介绍。
- Research 的图片、详情页和演变图可用。
- Past Projects 的赛车、Lunar Lander、心率传感器可用。
- CV 中六个学期的 Dean’s List 可以展开。
- Archive 打开旧版主页，并能打开其中的 CV 和项目 PDF。
- 手机布局可用；浏览器后退和前进能切换新站页面。

## 以后更新哪些文件

- index.html：个人介绍、CV、论文、项目和 Personal 文本。
- research-evolution.js：研究脉络的 stages、nodes 和 edges。添加节点时使用唯一 id，stage 必须对应已有阶段；topic 和 past 必须对应网站已有详情页。
- assets/：新站头像与配图。
- style.css：全站外观。
- app.js：导航与研究脉络图交互。
- archive/：旧站历史快照。常规内容更新无需修改它。

根目录保留了三个旧 PDF 的副本，供此前分享出去的 PDF 直链继续使用。archive 内有独立副本，供旧站使用。

正式页面已移除设计调节面板；所有新站资源使用相对路径，适用于当前 GitHub Pages 子目录。页面用 #/research 等地址支持直接分享和浏览器前进、后退。

官方发布设置说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
