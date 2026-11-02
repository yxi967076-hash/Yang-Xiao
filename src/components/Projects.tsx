import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { projects } from '../content'
import type { Project } from '../content'
import { Arrow } from './UI'
import ProjectVisual from './ProjectVisual'

// 详细工程设计按需加载，不增加首屏阅读的下载与渲染负担。
const ProjectDetails = lazy(() => import('./ProjectDetails'))
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (!selected) return
    const previousOverflow = document.body.style.overflow
    const modal = dialog.current
    modal?.showModal()
    document.body.style.overflow = 'hidden'
    // 标题在窄屏可能换行，目录跟随实际标题高度，避免遮挡。
    const header = modal?.querySelector('.detail-header')
    const updateHeaderHeight = () => modal?.style.setProperty('--detail-header-height', `${header?.getBoundingClientRect().height ?? 100}px`)
    updateHeaderHeight()
    const observer = new ResizeObserver(updateHeaderHeight)
    if (header) observer.observe(header)
    return () => { observer.disconnect(); document.body.style.overflow = previousOverflow }
  }, [selected])
  const closeProject = () => dialog.current?.close()
  return <>
    <section id="projects" className="projects-section"><div className="container"><div className="projects-heading reveal"><div><p className="eyebrow">03 / ENGINEERING PRACTICE</p><h2>从一个真实问题开始。</h2></div><p>以工程设计学习问题分析，<br/>在实践中理解系统的联系。</p></div><div className="project-grid single-project">{projects.map(project => <button type="button" className="project-card reveal" key={project.id} onClick={event => { lastTrigger.current = event.currentTarget; setSelected(project) }} aria-label={`查看项目：${project.title}`}><ProjectVisual/><div className="project-summary"><div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div><p className="project-context">{project.context}</p><h3>{project.title}<Arrow/></h3><p className="project-english">{project.english}</p><p>{project.summary}</p><div className="project-tags">{project.tags.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-more">查看设计与实施路线 <span aria-hidden="true">→</span></span></div></button>)}</div><p className="example-note">主页呈现项目概览。详细架构、技术思路与实施路线见项目详情；计划功能不等同于已完成成果。</p></div></section>
    <dialog ref={dialog} className="project-dialog academic-dialog" aria-labelledby="project-dialog-title" onClick={event => { if (event.target === event.currentTarget) closeProject() }} onClose={() => { setSelected(null); lastTrigger.current?.focus() }}>
      {selected && <><header className="detail-header"><div><p className="eyebrow">ENGINEERING PROJECT / {selected.status}</p><h2 id="project-dialog-title">{selected.title}</h2></div><button type="button" className="dialog-close" onClick={closeProject} autoFocus aria-label="关闭项目详情">×</button></header><Suspense fallback={<p className="detail-loading" role="status">正在加载工程设计详情…</p>}><ProjectDetails project={selected}/></Suspense></>}
    </dialog>
  </>
}
