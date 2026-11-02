import { useState } from 'react'
import { about, academicHistory, contact, courses, education, profile, researchInterests, socialLinks } from '../content'
import { Arrow, SectionHeading } from './UI'

function Portrait() {
  const [failed, setFailed] = useState(false)
  return <figure className="portrait">
    <div className="portrait-frame">{profile.photo && !failed
      ? <img src={profile.photo} srcSet={profile.photoSrcSet} sizes="(max-width: 600px) 220px, (max-width: 800px) 35vw, 320px" alt={profile.photoAlt} width="960" height="1050" fetchPriority="high" decoding="async" onError={() => setFailed(true)}/>
      : <div className="portrait-placeholder"><p>个人照片暂不可用</p></div>}
    </div>
    <figcaption><span>{profile.name} <span className="caption-divider">/</span> {profile.englishName.toUpperCase()}</span><span>学生 · 探索者</span></figcaption>
  </figure>
}
export function Home() {
  return <section id="home" className="hero container">
    <div className="hero-content">
      <p className="eyebrow"><span className="status-dot"/> SHANGHAI JIAO TONG UNIVERSITY</p>
      <h1 className="name-heading">{profile.name}<span className="name-period">。</span><span className="english-name">{profile.englishName.toUpperCase()}</span></h1>
      <p className="hero-english-identity">{profile.englishIdentity}</p>
      <p className="hero-identity">{profile.identity}</p>
      <p className="hero-tagline">{profile.tagline}</p>
      <p className="hero-intro">{profile.introduction}</p>
      <p className="hero-goal">{profile.goal}</p>
      <div className="hero-actions"><a className="button button-dark" href="#research" aria-label="了解研究兴趣 / Explore Research">Explore Research <Arrow/></a><a className="text-link" href="#projects" aria-label="查看项目 / View Projects">View Projects <span aria-hidden="true">↓</span></a><a className="text-link" href="#contact" aria-label="联系我 / Contact Me">Contact Me <Arrow/></a></div>
    </div>
    <Portrait/>
    <div className="hero-bottom"><span>FOUNDATIONS FIRST. CURIOSITY ALWAYS.</span><a href="#about">认识我 <span aria-hidden="true">↓</span></a></div>
  </section>
}
export function About() {
  return <section id="about" className="section container reveal">
    <SectionHeading eyebrow="01 / ABOUT · ACADEMIC PROFILE" title={about.title}/>
    <div className="about-content">{about.paragraphs.map((paragraph, i) => <p className={i === 0 ? 'lead' : undefined} key={paragraph}>{paragraph}</p>)}
      <p className="academic-quote">{about.closing}</p>
      <details className="life-details"><summary>课堂之外 <span>Football & Teamwork</span><span className="details-plus" aria-hidden="true">+</span></summary>
        <div className="life-content"><div className="football-note"><span className="football-icon" aria-hidden="true">⚽</span><div><p className="eyebrow">BEYOND THE CLASSROOM</p><h3>{about.footballTitle}</h3><p>{about.footballText}</p></div></div>
          <div className="tags">{about.traits.map(trait => <span key={trait}>{trait}</span>)}</div>
        </div>
      </details>
    </div>
  </section>
}
export function Research() {
  return <section id="research" className="section container reveal">
    <SectionHeading eyebrow="02 / RESEARCH INTERESTS" title={['关注复杂问题，', '也关注学科之间的联系。']}><p>目前，我正在探索以下三个相互关联的方向。这些方向代表我的学习兴趣与未来可能的研究方向，并非已完成的科研课题。</p></SectionHeading>
    <div className="interest-list">{researchInterests.map(item => <article className="interest-item" key={item.number}><span className="interest-number">{item.number}</span><div><h3>{item.title}</h3><p className="interest-english">{item.english}</p><p>{item.description}</p></div></article>)}</div>
  </section>
}
export function Education() {
  return <section id="education" className="section container reveal">
    <SectionHeading eyebrow="04 / ACADEMIC BACKGROUND" title={['从基础学科出发，', '为未来研究积累能力。']}><p>相关课程是目前正在学习或已经接触的内容，不代表已经精通。</p></SectionHeading>
    <div><div className="timeline">{education.map(item => <article className="education-item" key={item.school}><span className="timeline-dot current"/><p className="period">{item.period}</p><h3>{item.school}</h3><p className="degree">{item.training}</p><p>{item.description}</p><p className="training-note">{item.note}</p></article>)}</div>
      <div className="course-section"><h3>数理基础学习 <span>FOUNDATIONAL COURSEWORK</span></h3><ul className="course-list">{courses.map(course => <li key={course.name}><span>{course.name}</span><span>{course.english}</span></li>)}</ul></div>
      <details className="history-details"><summary>过往学习背景</summary><div><p>{academicHistory.originalMajor} · {academicHistory.context}</p><p>{academicHistory.rank}</p><p>{academicHistory.explanation}</p></div></details>
    </div>
  </section>
}
export function Contact() {
  const [copyState, setCopyState] = useState('')
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(contact.email); setCopyState('邮箱已复制 ✓') }
    catch { setCopyState(`请手动复制：${contact.email}`) }
  }
  const availableLinks = socialLinks.filter(link => link.url.trim())
  return <section id="contact" className="contact-section"><div className="container reveal"><p className="eyebrow">05 / LET’S CONNECT</p><div className="contact-layout"><div><h2>{contact.title.map(line => <span className="heading-line" key={line}>{line}</span>)}</h2>{contact.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><div className="contact-actions"><a className="email-link" href={`mailto:${contact.email}`}>{contact.email}<Arrow/></a><button className="copy-button" type="button" onClick={copyEmail}>复制邮箱 <span aria-hidden="true">⧉</span></button><p className="copy-status" role="status">{copyState}</p>{availableLinks.length > 0 && <ul className="social-links">{availableLinks.map(link => <li key={link.label}><a href={link.url}>{link.label} <Arrow/></a></li>)}</ul>}</div></div></div></section>
}
