# OWN / FLOW · Cloudflare deployment package

Version 1.0.0 · 2026-11-01

## 直接部署到 Cloudflare Pages

1. 登录 Cloudflare，打开 **Workers & Pages**，创建 **Pages** 项目，选择 **Direct Upload / 上传资源**。
2. 上传本 ZIP。压缩包根目录就是 `index.html`，不要再套一层文件夹。
3. 输入项目名称，点击部署。打开 Cloudflare 返回的 HTTPS 地址。

这是完整的静态站点包。**不需要 npm install、构建命令、API 密钥、数据库、Pages Functions 或服务端进程。** 如果界面要求填写 JavaScript Worker 的入口脚本，请返回并选择 Pages 的静态资源上传流程。

后续维护：修改对应源码，重新把根目录所有文件压缩，再向同一 Pages 项目上传新版本。不要只上传一个 HTML 文件。正式站点使用 HTTPS；直接双击本地 HTML 不支持模块 Worker。

Cloudflare 官方说明：<https://developers.cloudflare.com/pages/get-started/direct-upload/>。

## 已实现的工作流

- **Match Experience**：22 名具名自主球员，程序化人形、跑动/踢球/扑救动画，草皮、球门、看台，独立足球物理。转播/战术镜头、缩放、暂停、单步、速度和分析图层。
- **Tactics Studio**：4 种基础阵型，宽度/纵深/朝向/参考中心，压迫和节奏，独立战术图与通信图，可重叠子系统，自定义球队与球员能力。
- **Control Laboratory**：参考—局部观测—分布式观测器—关系控制—补偿—物理执行的闭环。团队参数与个人覆盖、阻尼/低通/有界积分、实际控制分项与曲线。
- **Agent Perspective**：当前可见球员、足球证据、消息来源/时效和局部估计。视图隐藏不可见球员与未直接观察到的球；“隐藏状态假设”是明确标记的启发式，未声称校准概率。
- **Diagnostics**：逐项解释实际控制指令，区分预测、历史、当前控制、实际速度；中心估计准确性与估计间一致性分别度量。
- **Tactical Library**：战术保存、版本、导入/导出。把自己的旧设定加载到另一队，开始新设定对旧设定的自对抗。
- **Algorithm Studio**：上传或编辑 FlowController JSON，解析局部输入，编译为有界算术表达式，再部署到所选球队的 11 个独立 agent。控制器实际参与每个控制步。
- **Research Benchmark**：阵型恢复、时变参考、足球自对抗；3 组配对 A/B，单一蓝队干预，实际结果、95% 配对 t 区间、可复现实验输入、遥测导出及状态回放。

默认界面为英语，右上角可全局切换中文；球员、球队和用户命名的策略是数据，不自动翻译。

## 比赛与保存

默认 90 分钟比赛，比赛时钟为物理时间的 6 倍，因此在 1× 仿真速度下实际约 15 分钟。新比赛可选 30/60/90 分钟，以及 1×/3×/6× 比赛时钟。半场换边和终场按实际仿真时钟执行；浏览器隐藏时自动暂停，不在后台抢跑。

战术保存于本浏览器的 localStorage；比赛进度存于 IndexedDB。运行时每 30 秒自动保存。进入网站时若已经有存档，该存档会受到保护，直到你选择恢复、新比赛或手动保存。**需要返回旧比赛时，先点击“恢复存档”。** 刷新页面会载入当前战术并展示新的比赛实例，不自动续播旧比赛。

比赛进度 JSON 保存物理状态、随机生成器、球员控制器记忆、在途消息及配置，支持确定性续赛。战术 JSON 仅保存可重复使用的策略配置。清除浏览器存储、换设备或更换站点域名不会自动迁移数据，请先导出 JSON。

回放保留最近 180 秒物理时间、每秒 2 帧；时间轴用于状态检查，不是视频。回放同时冻结当时的预测、统计和战术，导出时数值保留 4 位小数；精确继续仿真请使用比赛进度。默认 180 秒回放约 20 MiB，导入上限 32 MiB，其他 JSON 上限 20 MiB。

## 算法接口

可直接参考 `examples/FlowController.json`。使用 `kind: FlowController`、`schema: 1`、`sampleTime: 0.1`，提供 x/y 输出公式、最多 16 个参数、`blend` 融合权重和 `maxOutput` 输出上限。

可用输入：自身位置和速度、原生局部控制输出 base、角色参考 target、局部中心估计 centroid、中心参考 reference、允许的足球证据 ball、仿真时间 time、上一次自定义输出 memory。球未知时 `ball.known=0`，位置设为自身位置，速度为 0。每名球员拥有独立记忆。

支持 `+ - * /`、括号和 `abs/sqrt/sin/cos/tanh/min/max/clamp`。每个表达式最多 160 个符号，深度 24，输出有限并限幅。不使用 eval，不支持网络或文件访问。

**本版本不直接执行任意 Python、MATLAB、JavaScript、神经网络模型文件、论文或自然语言。** 可以把控制公式转为此 JSON 契约，再观察其实际运动效果；本地编译器不会自动把任意研究论文转换为控制器。速度型输出单位为 m/s，写公式时需自行核对量纲。

## 实现与维护

| 文件 | 责任 |
|---|---|
| `index.html`, `style.css`, `app.js` | 界面、双语、交互、图表与文件导入 |
| `engine.js` | 确定性物理、足球规则、感知、通信、局部控制、指标 |
| `sim-worker.js` | 独立仿真线程：30 Hz 物理、10 Hz 控制、5 Hz 通信 |
| `benchmark-worker.js` | 独立 A/B 实验线程 |
| `algorithm.js` | 算法契约校验、表达式解析和有界执行 |
| `replay.js` | 回放结构校验 |
| `renderer.js` | Three.js / WebGL 2 三维渲染 |
| `renderer-canvas.js` | 无 WebGL 设备的透视兼容渲染 |
| `storage.js` | 浏览器持久化和 JSON 下载 |
| `vendor/` | 随包附带的 Three.js 与 MIT 许可，无 CDN 请求 |
| `_headers` | Cloudflare 安全与缓存响应头 |
| `maintenance/` | 自动测试、测试结果和验收说明 |

核心源码是可读的 ES modules，不依赖构建工具。修改引擎状态格式时同步更新 ENGINE_VERSION 和导入校验，避免误读旧存档。算法、配置和存档经过输入校验；网页部署不需要连接外部模型服务。

可在具备 Node.js 20+ 的开发环境运行 `npm test`。测试不需要下载依赖。测试报告由命令写入当前目录的 `qa-results/`；它不是网站运行依赖。浏览器功能测试请通过 HTTP/HTTPS 静态服务进行。

## 本次测试范围与限制

**22 项自动测试通过**，包括 3 个随机种子的完整 90 分钟比赛、确定性重放、精确存档续赛、算法实际影响、通信延迟与丢包、球权事件、物理限幅、回放冻结与校验、3 类 A/B 和可复现实验输入。详细记录见 `maintenance/TEST_REPORT.md`。

已在浏览器实际检查上传/部署 JSON 控制器、保存与重载战术、旧策略自对抗、存档导出导入、回放导出导入、镜头与图层、实时控制编辑、A/B 结果，以及 375 px 窄屏的 8 个主要页面。

测试浏览器不支持 WebGL，实际视觉与流程检查使用自动兼容渲染；WebGL 分支完成语法/资源检查，**未完成真实 GPU、Safari/iOS/Android 实机视觉与性能验收**。未替你登录或实际上传到 Cloudflare，完成的是静态包结构、资源依赖与 Direct Upload 条件检查。部署后的自定义域名、账户配置和硬件表现仍取决于使用环境。

这是程序化三维足球科研模拟器，非商业足球游戏级人物资产或动作捕捉。规则简化：已实现传射、争抢、扑救、进球、界外球、角球、球门球、基础接球越位、中场与终场；未实现犯规/红黄牌、换人、伤病、补时、完整 IFAB 裁判逻辑或多人联网。

科研层面，目标残差不是纯粹关系形状误差；置信区间是有限样本的经验统计。A/B 匹配初始状态与随机状态，不保证分歧后的随机事件一一对齐。整场混合足球仿真不具有定理级稳定性保证，不应把演示数据当作论文实验结论。

## English quick start

Upload this ZIP directly to a **Cloudflare Pages Direct Upload** project. The root contains `index.html`; no installation, build, database, secrets or Functions are required. All runtime dependencies are included locally. Use the English/中文 switch in the header.

Export tactics and match checkpoints as portable JSON backups. Controllers use the bounded FlowController JSON expression language; arbitrary programs are not executed. The simulation runs locally in the visitor's browser. See the validation report for tests and explicitly unverified GPU/deployment behavior.
