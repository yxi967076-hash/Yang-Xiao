import type { Project } from '../content'
import { projectProgress, progressLabels } from '../content'

const detailSections = [
  ['overview', 'Project Overview', '项目概览'], ['architecture', 'System Architecture', '系统架构'],
  ['hardware', 'Hardware Design', '硬件设计'], ['software', 'Software Workflow', '软件流程'],
  ['roadmap', 'Development Roadmap', '实施路线'], ['progress', 'Current Progress', '进度与参与'],
  ['reflections', 'Challenges & Reflections', '待验证的问题'],
]
function sectionId(id: string) { return `project-${id}` }
function DetailHeading({ number, english, chinese }: { number: string; english: string; chinese: string }) {
  return <div className="detail-section-heading"><p className="eyebrow">{number} / {english.toUpperCase()}</p><h3>{chinese}</h3></div>
}
function SystemArchitecture() {
  return <figure className="architecture-figure">
    <div className="architecture-grid" role="group" aria-label="ESP32-S3 连接四路超声波、四路 LED、本地 Wi-Fi 网页及 Preferences 存储的设计架构">
      <div className="architecture-node"><p className="node-kicker">SENSE / 感知</p><strong>HC-SR04 × 4</strong><p>Trig / Echo · 依次测距</p><div className="rack-cells">{['01', '02', '03', '04'].map(n => <span key={n}>格位 {n}</span>)}</div><small>两层四格 · 每格一个探头</small></div>
      <span className="architecture-arrow" aria-hidden="true">→</span>
      <div className="architecture-node architecture-controller"><p className="node-kicker">CONTROL / 控制</p><strong>ESP32-S3</strong><p>状态判断 · 格位管理<br/>投件 / 取件状态机</p><code>slots[4]</code><small>持续调度，协同运行</small></div>
      <span className="architecture-arrow" aria-hidden="true">↔</span>
      <div className="architecture-outputs"><div className="architecture-node"><strong>LED × 4</strong><p>GPIO 独立控制 · 定位提示</p></div><div className="architecture-node"><strong>Wi-Fi AP + WebServer</strong><p>本地网页 · 查询与操作</p></div><div className="architecture-node"><strong>Preferences</strong><p>关键关联与事件记录保存</p></div></div>
    </div>
    <figcaption>依据设计方案重绘的功能架构示意，省略底层引脚分配；不表示硬件已经完成。</figcaption>
  </figure>
}
export default function ProjectDetails({ project }: { project: Project }) {
  function goToSection(id: string) {
    const section = document.getElementById(sectionId(id))
    section?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
    section?.focus({ preventScroll: true })
  }
  return <div className="detail-layout">
    <nav className="detail-nav" aria-label="项目详情目录">{detailSections.map(([id, english, chinese], i) => <button key={id} type="button" onClick={() => goToSection(id)}><span>{String(i + 1).padStart(2, '0')}</span><span>{chinese}<small>{english}</small></span></button>)}</nav>
    <div className="detail-content">
      <section id={sectionId('overview')} className="detail-section" tabIndex={-1}>
        <DetailHeading number="01" english="Project Overview" chinese="一个校园问题，一套系统思路。"/>
        <p className="detail-english-name">{project.english}</p><p>{project.overview}</p><h4>设计目标</h4><p>{project.objective}</p><p className="evidence-note">{project.evidenceNote}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </section>
      <section id={sectionId('architecture')} className="detail-section" tabIndex={-1}>
        <DetailHeading number="02" english="System Architecture" chinese="让感知、控制与交互协同。"/>
        <p>硬件负责测距与定位提示；软件持续维护四格状态，网页负责输入和显示，不在收到网页请求时才临时采集传感器。</p>
        <SystemArchitecture/>
        <ol className="workflow-flow">{project.workflow.map((step, i) => <li key={step.title}><span>{String(i + 1).padStart(2, '0')}</span><strong>{step.title}</strong><p>{step.detail}</p></li>)}</ol>
      </section>
      <section id={sectionId('hardware')} className="detail-section" tabIndex={-1}>
        <DetailHeading number="03" english="Hardware Design" chinese="两层四格的硬件设计。"/>
        <p>以下为拟采用的配置与连接思路，来自初步设计方案。实物连接和电气参数需在搭建与测试中核对。</p><dl className="hardware-list">{project.hardware.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.detail}</dd></div>)}</dl>
      </section>
      <section id={sectionId('software')} className="detail-section" tabIndex={-1}>
        <DetailHeading number="04" english="Software Workflow" chinese="状态管理，是系统的核心。"/>
        <p>拟在 Arduino-ESP32 框架中开发。setup() 负责初始化、加载记录、建立热点与启动 WebServer；loop() 持续处理到期任务。</p>
        <div className="loop-tasks" aria-label="主循环的计划任务">{project.loopTasks.map(task => <code key={task}>{task}</code>)}</div>
        <div className="technical-list">{project.techniques.map(item => <article key={item.number}><span className="technical-letter">{item.number}</span><div><h4>{item.title}</h4><p>{item.text}</p></div></article>)}</div>
        <div className="state-design"><div><h4>投件登记路径</h4><p>保存稳定状态快照 → 等待放入 → 唯一新增占用时绑定；超时或多格变化时返回异常。</p></div><div><h4>取件定位路径</h4><p>输入信息 → 筛选候选 → 定位或切换 → 稳定变为空闲后记录；主动结束或超时则关闭定位灯。</p></div></div>
      </section>
      <section id={sectionId('roadmap')} className="detail-section" tabIndex={-1}>
        <DetailHeading number="05" english="Development Roadmap" chinese="由单格验证，走向系统联调。"/>
        <p>六个展示阶段映射原实施方案的细分任务。下列“验收要求”是后续需要验证的条件，不是测试通过记录。</p>
        <ol className="roadmap-list">{project.roadmap.map((phase, i) => <li key={phase.key}><div className="phase-heading"><span className="phase-number">{String(i + 1).padStart(2, '0')}</span><h4>{phase.title}</h4><span className="phase-status">{progressLabels[projectProgress[project.id]?.[phase.key] ?? 'unconfirmed']}</span></div><p className="phase-mapping">{phase.mapping}</p><p>{phase.tasks}</p><details><summary>查看验收要求</summary><p>{phase.acceptance}</p></details></li>)}</ol>
      </section>
      <section id={sectionId('progress')} className="detail-section" tabIndex={-1}>
        <DetailHeading number="06" english="Current Progress" chinese="如实记录现在的起点。"/>
        <p>{project.progressText}</p><h4>{project.contributionLabel}</h4><ul className="contribution-list">{project.contributions.map(item => <li key={item}>{item}</li>)}</ul><p className="evidence-note">{project.contributionNote}</p>
        {project.evidence.completedResults.length > 0 && <><h4>已有成果</h4><ul>{project.evidence.completedResults.map(result => <li key={result}>{result}</li>)}</ul></>}
      </section>
      <section id={sectionId('reflections')} className="detail-section" tabIndex={-1}>
        <DetailHeading number="07" english="Challenges & Reflections" chinese="接下来，需要认真验证什么？"/>
        <p>以下问题由设计与验收要求归纳，供后续搭建、测试与复盘使用，尚非实测结论。</p><div className="reflection-list">{project.reflections.map(item => <article key={item.title}><h4>{item.title}</h4><p>{item.text}</p></article>)}</div><p className="detail-source-note">内容依据本人提供的初步设计方案与实施方案整理。架构图为网页重新绘制，未公开原始工程文档。</p>
      </section>
    </div>
  </div>
}
