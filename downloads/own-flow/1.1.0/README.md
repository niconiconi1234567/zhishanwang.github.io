# OWN / FLOW · Cloudflare deployment package

**v1.1.0 · 2026-11-01**

这是可直接上传到现有 Cloudflare Pages 项目的完整静态网站 ZIP，包含全部源码、本地依赖、示例与测试报告。ZIP 根目录为 `index.html`，没有额外父文件夹。不需要安装依赖、设置构建命令、API 密钥、数据库或服务端。

在现有 Pages 项目中新建一次资源上传部署，上传这个完整 ZIP。若本地检查，请通过 HTTP 静态服务打开；直接双击 HTML 不支持模块 Worker。你的原线上版本不会因下载这个文件自动变化。

## v1.1 改进

- **Match / 赛场**：移除 Experience。赛场扩大为主视图，下方分为球员、分析图层、比赛统计。全场、跟球、跟随选中球员；转播与战术镜头；均衡、细节、流畅三档渲染。
- **动作与空间**：位置和朝向插值、位移驱动步频、与实际传球/射门事件同步的动作包络，球衣细节、接地阴影、球体明暗。球的最小显示尺寸用于辨识，不改变碰撞半径或物理状态。球员局部视角的镜头始终跟随球员，避免通过追踪隐藏足球泄露信息。
- **球队系统框图**：战术和控制页面均可查看教练/协调器配置、重叠子系统、11 个独立闭环、实际通信边与共享物理世界。协调器下发配置，各球员仍独立计算指令；不是新增一个全知中央控制器。点击球员进入个人闭环。
- **真实负反馈框图**：reference → error → controller → compensator → custom algorithm → actuator limits → plant → sensing/feedback；分布式观测器连接邻居消息。积分和阻尼模式分别显示相应误差/速度反馈支路。点击模块查看公式、信号接口与当前值。
- **多智能体分析**：连通分量、拉普拉斯代数连通度、邻接矩阵、名义共识因子、实际关系残差与执行差距；将估计 RMSE 分解为共同偏差与估计分歧，逐球员显示跟踪误差。
- **算法效果分析**：可视化控制分项、实际/期望速度方向；保留有符号分量表。配对实验展示 A/B 均值、相对变化、95% 配对 t 区间及误差—指令代价权衡。支持三组均值/单组曲线、物理时间轴、单位和悬停精确读数。微小差异采用更高显示精度。
- **数学显示**：本地数学字体，原生上标/下标与 SVG 排版，减少依赖稀有 Unicode 修饰字符；无外部字体请求。

## 算法与指标的含义

算法工作室继续使用 `FlowController` JSON 有界表达式契约，示例见 `examples/FlowController.json`。不执行任意 JavaScript。物理 30 Hz、控制 10 Hz、通信 5 Hz、指标/回放 2 Hz。所有分析来自实际仿真，诊断真值不进入球员的局部控制接口。

- 目标残差：到当前角色目标的 RMS；真实足球任务可能需要偏离角色位置。
- 关系残差：沿战术边，实际相对位置与当前参考相对位置之差的 RMS。
- 估计 RMSE：局部中心估计相对于真实球队中心的误差。共同偏差与估计分歧满足平方分解，不能仅凭一致就判断准确。
- 指令均方幅值：平均 ‖u‖²，单位 m²/s²；累计指令代价为 ∫‖u‖²dt，单位 m²/s。二者均不是机械能。
- 图的谱指标描述当前配置拓扑，不计入随机丢包后的瞬时有效图。名义线性共识检查不能证明完整非线性比赛稳定。
- A/B 使用三个配对初态/随机状态，结果是当前场景和时长的经验统计。后续随机事件不保证一一对应；三组样本不足以得出通用算法排名。曲线保留最近 60 秒，汇总使用整个实验的采样。

## 文件与维护

| 文件 | 责任 |
|---|---|
| `index.html`, `app.js`, `style.css`, `refinement.css` | 双语界面、交互和布局 |
| `control-diagrams.js` | 球队结构与局部反馈 SVG 框图 |
| `analysis.js`, `insights.js`, `charts.js` | 只读诊断、统计、可视化与响应曲线 |
| `math-display.js` | 原生上标/下标排版 |
| `renderer.js`, `renderer-canvas.js`, `motion-visual.js` | WebGL / Canvas 渲染、镜头与动作 |
| `engine.js`, `sim-worker.js`, `benchmark-worker.js` | 确定性仿真和实验线程 |
| `algorithm.js`, `replay.js`, `storage.js` | 算法校验、回放与本地持久化 |
| `vendor/` | 本地 Three.js、数学字体及许可 |
| `examples/` | 球队配置和控制器示例 |
| `maintenance/` | 测试源码、运行日志与验收记录 |

本次不改变物理引擎、算法契约或存档结构。**应用版本为 1.1.0，兼容引擎标识保留 1.0.0**，现有 1.0.0 战术、算法、存档与回放仍沿用原校验和导入流程。浏览器内数据取决于相同站点来源；另换域名时应使用 JSON 导出/导入迁移。

解压后可在 Node.js 20+ 环境运行 `npm test`，无需下载依赖。完整结果见 `maintenance/TEST_REPORT.md` 和 `maintenance/test-output.txt`。源码为直接可维护的 ES modules；修改后重新打包根目录所有文件。`SHA256SUMS.txt` 记录交付文件摘要。

## 测试与边界

31 项自动测试全部通过，包括 3 个随机种子的完整 90 分钟比赛、精确存档续跑、通信延迟/丢包、算法实际改变轨迹、配对实验，以及新增谱指标、误差分解、统计符号、插值/暂停和局部镜头信息隔离测试。

本次在浏览器检查新增框图下钻、双语公式、Canvas 镜头/质量、实际 A/B 结果、单组曲线和采样提示；八个主页面以及新增分析布局检查了 375 px 容器。细节与测试限制见报告。

测试浏览器不支持 WebGL：真实 GPU 的 WebGL 光影/性能、Safari/iOS/Android 实机表现未验收。本包未自动上传到 Cloudflare。人物与动作仍为程序化模拟，不是商业足球游戏资产或动作捕捉；原有简化足球规则和有界算法接口未扩展为完整职业比赛或任意代码平台。

## English quick start

Upload this ZIP to your existing Cloudflare Pages static upload project. `index.html` is at the archive root; no build or server is required. The application is v1.1.0 while the compatible simulation/checkpoint engine remains v1.0.0. All dependencies are local. See `CHANGELOG.md` and the validation report for changes, executed tests and unverified real-device GPU behavior.
