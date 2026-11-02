/** 常用资料只需修改此文件。课程是学习内容，项目标签是涉及的技术，均不代表熟练掌握。 */
export const profile = {
  name: '杨潇', englishName: 'Yang Xiao', university: '上海交通大学',
  role: '本科一年级', training: '溥渊未来平台', trainingNote: '培养信息表述，正式名称待核实',
  englishIdentity: 'Undergraduate Student at Shanghai Jiao Tong University',
  identity: '上海交通大学 · 大一本科生 · 溥渊未来平台',
  tagline: '从基础学习出发，探索脑健康与人工智能的交汇之处。',
  introduction: '你好，我是杨潇，目前就读于上海交通大学。我对脑健康、人工智能及跨学科研究抱有浓厚兴趣。现阶段，我正在通过高等数学、线性代数和大学物理等课程夯实数理基础，并希望逐步接触真实的科研问题，在实践中探索自己的研究方向。',
  goal: '目前，我期待获得科研训练与学术交流机会，在持续学习中积累研究经验。',
  photo: `${import.meta.env.BASE_URL}images/portrait-960.jpg`, photoSrcSet: `${import.meta.env.BASE_URL}images/portrait-480.jpg 480w, ${import.meta.env.BASE_URL}images/portrait-960.jpg 960w`, photoAlt: '杨潇的个人肖像照',
}

export const navigation = [
  { id: 'home', chinese: '首页', english: 'Home' },
  { id: 'about', chinese: '关于我', english: 'About' },
  { id: 'research', chinese: '研究兴趣', english: 'Research' },
  { id: 'projects', chinese: '项目实践', english: 'Projects' },
  { id: 'education', chinese: '教育背景', english: 'Education' },
  { id: 'contact', chinese: '联系我', english: 'Contact' },
]

export const about = {
  title: ['从好奇出发，', '在探索中寻找方向。'],
  paragraphs: [
    '我是一名上海交通大学的大一本科生，目前处于本科阶段的基础学习与学术探索时期。',
    '我对科学问题的兴趣不仅局限于单一学科。脑健康领域涉及生命科学、医学与工程技术，而人工智能的发展也为复杂问题的分析提供了新的可能性。这些学科之间的联系，让我对跨学科研究产生了浓厚兴趣。',
    '在现阶段，我将学习重点放在基础知识的积累上，通过高等数学、线性代数和大学物理等课程逐步建立数理基础。',
    '我希望未来有机会接触科研团队，参与真实问题的探索，从文献阅读、研究方法学习和项目实践开始，逐步培养独立思考与科学研究的能力。',
  ],
  closing: '真正深入的探索，始于对问题保持好奇，也离不开耐心和持续的积累。',
  footballTitle: '足球，是课堂之外的热爱。',
  footballText: '我是希望杯院队队员。在学习之外，足球是我生活中重要的一部分；我也希望把对团队的投入，带到今后的学习与实践中。',
  traits: ['保持好奇', '持续积累', '重视团队'],
}
export const education = [{
  school: '上海交通大学', period: '本科一年级 · 在读', training: '溥渊未来平台',
  note: '以上为目前提供的培养信息，尚未确认为学籍系统中的正式专业名称。',
  description: '从数理基础学习出发，为理解研究问题、阅读文献与后续科研训练逐步积累能力。',
}]
export const courses = [
  { name: '高等数学', english: 'Advanced Mathematics' },
  { name: '线性代数', english: 'Linear Algebra' },
  { name: '大学物理', english: 'University Physics' },
]
// 先前由本人确认的历史信息；不再作为当前培养信息或统计卡片展示。
export const academicHistory = {
  originalMajor: '环境科学与工程', context: '由原专业降转，目前为本科一年级。',
  rank: '原专业学积分排名前 22%',
  explanation: '此排名由本人提供并确认，仅针对原专业，不代表现培养平台或现年级排名；不展示 GPA 数值。',
}
export const researchInterests = [
  { number: '01', title: '脑健康', english: 'Brain Health', description: '我对人类大脑的健康问题以及影响脑功能的相关因素抱有兴趣。希望逐步了解脑科学与健康科学中的基础问题，学习相关研究方法，并探索如何通过跨学科技术手段，更好地理解脑健康问题。' },
  { number: '02', title: '人工智能', english: 'Artificial Intelligence', description: '人工智能为复杂数据的分析和现实问题的研究提供了新的工具与思路。我希望在打好数学基础的同时，逐步学习人工智能与机器学习的基本原理，理解这些方法能够解决什么问题，以及它们的应用边界。' },
  { number: '03', title: '跨学科探索', english: 'Interdisciplinary Research', description: '我尤其关注不同学科之间可能产生的联系。未来希望探索数学、计算方法与健康科学相结合的可能性，了解不同领域的知识和研究工具如何共同帮助人们认识复杂问题。' },
]

export type ProgressStatus = 'unconfirmed' | 'planned' | 'in-progress' | 'completed'
export const progressLabels: Record<ProgressStatus, string> = {
  unconfirmed: '进度待确认', planned: '计划开展', 'in-progress': '进行中', completed: '已完成',
}
// 仅在有本人确认与相应记录时更新。文档的“结果验收”是验收要求，不是验收结果。
export const projectProgress: Record<string, Record<string, ProgressStatus>> = {
  'parcel-rack': {
    simulation: 'unconfirmed', singleSlot: 'unconfirmed', fourSlots: 'unconfirmed',
    hardware: 'unconfirmed', web: 'unconfirmed', integration: 'unconfirmed',
  },
}

export const projects = [{
  id: 'parcel-rack', number: '01', title: '校园快递架智能快速定位系统',
  english: 'Smart Parcel Rack Localization System', category: 'ENGINEERING COURSE PROJECT',
  context: '工程学导论 · 课程项目', status: '设计方案与实施路线',
  summary: '以两层四格快递架为原型，探索格位状态感知、投件信息关联与 LED 辅助定位。',
  tags: ['ESP32-S3', 'HC-SR04', 'Embedded Systems', 'Arduino', 'Sensor Data Processing', 'State Machine', 'Wi-Fi / WebServer', 'LED Localization'],
  overview: '校园快递架中，包裹的快速定位与取件效率是值得关注的实际问题。本项目围绕快递存放状态感知、格位自动关联与取件定位展开，设计了一套基于 ESP32-S3 的智能快递架原型系统。',
  objective: '项目拟通过超声波传感器检测格位占用状态，利用 ESP32-S3 完成包裹与格位的信息关联，并通过本地网页和 LED 指示灯辅助用户找到对应包裹。',
  evidenceNote: '本页介绍设计方案与实施路线，不代表全部功能已实现或已通过验收。技术标签表示项目涉及或计划采用的方法。',
  // 内部溯源：不在网页中公开原始 Word 文件，也不复制其中的个人或内部信息。
  evidence: {
    facts: ['本人确认的工程学导论课程项目', '已提供初步设计方案与实施方案'],
    designSources: ['初步设计方案 §1—3.11', '实施方案 阶段1—12（含两项阶段1）'],
    completedResults: [] as string[],
    unverified: ['各阶段实际完成状态', '具体代码变更与分工', '硬件实物与测试记录', '整机性能与验收结果'],
  },
  hardware: [
    { title: '两层四格原型', detail: '两层连续层板，每层两个存放区域，编号 01—04；传感器与 LED 编号对应格位。' },
    { title: 'ESP32-S3 主控', detail: '拟由 5V / 3A Type-C 电源供电，引出独立的 5V、3.3V 母线与公共 GND。' },
    { title: '四路 HC-SR04', detail: '每格上方布置一个探头，向下测距。5V 供电；每路 Echo 经 1kΩ + 2kΩ 分压接入主控。' },
    { title: '四路 LED 模块', detail: '模块拟采用 3.3V 供电、共地，通过 GPIO 独立控制，不展示未经实物核对的引脚分配。' },
    { title: '供电与焊接布局', detail: '洞洞板分主控、电源、Echo 分压和接口区域，以母线加支路连接，使用 KF301 端子便于维护。' },
    { title: '电源缓冲', detail: '设计在 5V 母线上设置 470μF / 16V 电容，在 3.3V 母线上设置 100μF / 16V 电容。' },
  ],
  techniques: [
    { number: 'A', title: '超声波格位检测', text: 'Trig 产生约 10μs 触发脉冲，通过 Echo 高电平持续时间换算距离；比较空架基准距离与当前距离，判断是否可能存在包裹。' },
    { number: 'B', title: '稳定状态判断', text: '拟分别维护占用与空闲连续计数，只有连续多次读数满足条件才切换 occupied 状态，降低短暂遮挡与偶发波动的影响。' },
    { number: 'C', title: '多传感器轮询', text: '四个模块按格位依次触发，降低同时发射造成的串扰。主循环处理到期的传感器；Echo 读取设置超时边界，仍需验证其对网页响应的影响。' },
    { number: 'D', title: 'LED 定位控制', text: '四路 GPIO 分别控制格位 LED。计划以 millis() 调度闪烁，避免用长 delay() 阻塞轮询与网页请求。' },
    { number: 'E', title: '投件登记', text: '输入手机号后四位后保存当前稳定占用快照。仅在唯一格位新增稳定占用时建立关联；多个新增格位或等待超时均返回异常状态，不任意绑定。' },
    { number: 'F', title: '取件查询与候选切换', text: '网页输入寝室号和手机号后四位；按尾号查找候选格位。单候选直接定位，多候选顺序切换，切换时先熄灭上一格 LED。寝室号用于取件会话与记录，并非文档中已实现的身份验证。' },
    { number: 'G', title: '取件判定与本地记录', text: '计划以目标格位从 OCCUPIED 稳定变为 EMPTY 判定取件、释放关联。Preferences 保存关键关联、取件及异常记录；重启后恢复记录并重新测距核对。' },
  ],
  workflow: [
    { title: '采集', detail: '按时轮询 HC-SR04，处理 Echo 超时与异常读数。' },
    { title: '判断', detail: '比较空架基准，以连续计数确认稳定占用或空闲。' },
    { title: '管理', detail: '以 slots[4] 统一维护距离、状态、计数与格位关联。' },
    { title: '业务', detail: '投件快照比对、唯一新增格位绑定、候选查询与取件判定。' },
    { title: '交互', detail: '本地网页呈现状态，GPIO 驱动当前候选格位 LED。' },
  ],
  loopTasks: ['updateSensors()', 'handleWebServer()', 'updateLedBlink()', 'updateDepositTask()', 'updatePickupTask()', 'saveRecordsIfNeeded()'],
  roadmap: [
    { key: 'simulation', title: '仿真与环境学习', mapping: '原实施方案：浏览器仿真、ESP32 与 Arduino IDE 开发环境学习（两项阶段1）', tasks: 'Wokwi 中搭建单路测距与 LED；学习 GPIO、编译上传、串口及 setup() / loop()。', acceptance: '能够观察测距、控制 LED，并说明 Trig、Echo、delay() 与 millis() 的作用。' },
    { key: 'singleSlot', title: '单格位状态验证', mapping: '原实施方案：阶段2—3', tasks: '真实单格测距、Echo 分压、空架基准与稳定计数，连接单个定位 LED。', acceptance: '验证放入与取走的稳定状态转换，短暂手部遮挡不轻易改变状态。' },
    { key: 'fourSlots', title: '四格系统扩展', mapping: '原实施方案：阶段4—6', tasks: '四路 LED 独立控制与定时闪烁；从两路扩展至四路轮询，建立 SlotState slots[4]。', acceptance: '四格编号、测距、状态与 LED 对应一致；单个异常读数不阻塞其他任务。' },
    { key: 'hardware', title: '硬件集成', mapping: '原实施方案：阶段7', tasks: '完成电源母线、公共地、四组分压、端子、电容、洞洞板焊接及整体布线。', acceptance: '上电前检查短路，逐步验证电压与模块，检查线束连接稳定性。' },
    { key: 'web', title: '网页与业务逻辑', mapping: '原实施方案：阶段8—10', tasks: 'Wi-Fi AP、本地 WebServer、投件快照与异常状态、查询候选和顺序 LED 定位。', acceptance: '本地页面与格位状态一致，唯一新增占用才绑定，多候选可切换，定位可结束或超时。' },
    { key: 'integration', title: '系统联调', mapping: '原实施方案：阶段11—12', tasks: '集成取件判定、Preferences 恢复、异常记录与网页；进行连续操作及参数整定。', acceptance: '按方案验证同尾号、多件、偏放、短暂遮挡、重连、重启与定位超时，并留下测试记录。' },
  ],
  progressText: '已有设计方案与实施计划。各实施阶段的实际进度尚未逐项确认，目前不展示完成百分比或量化性能。路线中的验收要求用于后续验证，不是已通过的测试结果。',
  contributionLabel: '本人提供的参与范围',
  contributions: ['相关模块的学习与应用', '代码的改进', '硬件的搭建与测试'],
  contributionNote: '以上为参与范围说明；具体模块、代码变更、已完成工作与测试记录仍待补充，不据此推定整机已完成。',
  reflections: [
    { title: '如何让状态可靠？', text: '需要测试手部遮挡、包裹偏放和跨格摆放，依据实测调整占用阈值、连续确认次数与轮询间隔。' },
    { title: '如何让任务协同？', text: '需要验证 Echo 超时边界、传感器间隔与网页响应之间的平衡，避免单路异常拖慢整体调度。' },
    { title: '如何处理关联歧义？', text: '同尾号候选需要逐个确认；多格同时新增占用不自动绑定。匹配和异常处理边界比单次定位演示更值得验证。' },
    { title: '如何验证恢复一致性？', text: '需要核对重新上电后 Preferences 记录与实测占用是否一致，并保留异常取件和测试过程记录。' },
  ],
}]
export type Project = (typeof projects)[number]

export const contact = {
  email: 'yx050925@sjtu.edu.cn', title: ['期待一次交流，', '开启新的学习。'],
  paragraphs: [
    '我目前正处于本科阶段的学习与探索时期，希望有机会向不同领域的老师与同学学习。',
    '如果您愿意就脑健康、人工智能、跨学科研究或本科生科研训练进行交流，欢迎通过邮件联系我。期待在交流中拓展视野，也希望有机会参与真实科研问题的探索。',
  ],
}
// 只添加真实链接。没有链接就保持空字符串，对应入口不会显示。
export const socialLinks = [
  { label: 'Academic CV', url: '' }, { label: 'GitHub', url: '' },
  { label: 'Google Scholar', url: '' }, { label: 'ORCID', url: '' }, { label: 'LinkedIn', url: '' },
]
// 将来增加科研经历、论文、报告、获奖或更多项目时，可新增相应数据集合和展示组件；现在不生成空栏目。
