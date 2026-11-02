import { useEffect, useState } from 'react'
import { navigation, profile } from './content'
import { About, Contact, Education, Home, Research } from './components/ProfileSections'
import Projects from './components/Projects'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main > section')
    const update = () => {
      let current = 'home'
      sections.forEach(section => { if (section.getBoundingClientRect().top <= 160) current = section.id })
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) current = 'contact'
      setActive(current)
    }
    let frame = 0
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(() => { update(); frame = 0 }) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); window.cancelAnimationFrame(frame); observer.disconnect() }
  }, [])
  return <>
    <a className="skip-link" href="#main">跳至正文</a>
    <header className="site-header"><div className="header-inner">
      <a className="brand" href="#home" aria-label="返回首页">{profile.name}<span>/ {profile.englishName.toUpperCase()}</span></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '关闭 ×' : '菜单 ☰'}</button>
      <nav id="navigation" aria-label="主导航" className={menuOpen ? 'open' : ''}>{navigation.map(link => <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{link.english}<span className="nav-chinese">{link.chinese}</span></a>)}</nav>
    </div></header>
    <main id="main"><Home/><About/><Research/><Projects/><Education/><Contact/></main>
    <footer className="container footer"><a className="brand" href="#home">{profile.name}<span>/ {profile.englishName.toUpperCase()}</span></a><p>© {new Date().getFullYear()} {profile.name} · 保持好奇，认真向前。</p><a href="#home" className="back-top">回到顶部 ↑</a></footer>
  </>
}
