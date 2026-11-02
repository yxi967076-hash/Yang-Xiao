import type { ReactNode } from 'react'

export function Arrow() { return <span aria-hidden="true">↗</span> }
export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string[]; children?: ReactNode }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title.map((line, i) => <span className="heading-line" key={i}>{line}</span>)}</h2>{children && <div className="section-aside">{children}</div>}</div>
}
