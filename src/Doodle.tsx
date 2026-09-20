type DoodleKind = 'spark' | 'arrow' | 'flame' | 'bolt' | 'scribble' | 'circle' | 'drumstick' | 'splash' | 'fries' | 'drink'

const drawings: Record<DoodleKind, React.ReactNode> = {
  spark: <><path d="M51 8c-2 12-1 25-2 35M49 56c-2 13-2 23-3 35M9 47c13 2 24 2 34 3m14 1c12 0 22 2 34 5M18 17c8 9 17 20 26 27m12 13c10 9 17 17 25 26M82 15c-9 10-17 21-26 30M42 58c-9 8-17 17-27 23"/><path d="M47 12l1 12M87 56l-11-2" strokeWidth="2"/></>,
  arrow: <><path d="M9 78c18 4 29 0 41-10 11-9 19-23 27-42"/><path d="M58 29c7-4 16-5 24-6-2 10-1 19-5 28"/><path d="M13 85c12 2 23-1 31-6" strokeWidth="2.5"/></>,
  flame: <><path d="M49 92c-19-3-30-18-28-36 1-11 10-19 7-36 11 7 13 15 13 21C52 30 57 21 57 9c16 17 17 29 15 38 10-1 12-7 14-14 11 35-1 59-37 59Z"/><path d="M53 83c-9-3-13-9-10-17 3-7 9-9 12-17 7 10 15 17 13 24-1 5-7 9-15 10Z"/><path d="M30 60c-1 8 2 14 7 18" strokeWidth="2.5"/></>,
  bolt: <><path d="M53 7 20 55l24-2-9 39 44-55-25 3 11-32"/><path d="m13 45-5 8m73-23 8-6M56 90l8-10" strokeWidth="2.5"/></>,
  scribble: <><path d="M9 58c11-24 16-44 28-43 14 0-6 35-3 48 4 18 24-36 34-36 12 0-5 34-3 41 4 11 13-14 24-21"/><path d="M12 74c21 8 51 11 76-2" strokeWidth="2.5"/></>,
  circle: <><path d="M82 24C68 10 37 8 21 25 4 43 12 75 34 85c22 11 50-2 57-25 5-16-2-31-13-39"/><path d="M80 17C56 3 25 14 15 37M91 68C78 91 50 96 28 87" strokeWidth="2.5"/></>,
  drumstick: <><path d="M28 22c13-13 32-13 44 0 12 12 9 30-4 41L47 79c-6 5-9 2-11-2-8 5-18-2-16-9-7-6-1-17 7-17 2 0 5 1 7 2l9-14"/><path d="M42 24c8-6 17-6 23-1M26 67c3-3 6-3 9-1" strokeWidth="2.5"/></>,
  splash: <><path d="M51 22c10 8 12 16 22 18 12 2 11 14 2 19-9 6-13 19-28 19-12 0-16-11-26-14-11-4-9-15 1-20 9-4 12-19 29-22Z"/><path d="m15 23-4-6m73 6 6-7M16 82l-7 5m76-7 7 5" strokeWidth="2.5"/><circle cx="49" cy="49" r="5"/><circle cx="32" cy="54" r="2"/><circle cx="66" cy="53" r="2"/></>,
  fries: <><path d="M21 40 17 17l10-3 7 27M35 40l-1-29 11-1 1 29M49 39l7-29 11 3-8 28M62 42l13-25 9 6-13 24"/><path d="M16 43c22-6 48-5 70 3L77 83c-17 8-35 7-50 1Z"/><path d="M25 50c17-5 39-3 54 1M34 72c9 3 20 4 30 2" strokeWidth="2.5"/></>,
  drink: <><path d="M24 34c17-4 38-5 56 0L73 84c-13 6-28 5-42 0Z"/><path d="M22 34c18 4 41 5 60 0M28 48c16 4 33 4 49 0M60 33l9-22 16 1"/><path d="M19 26c7-9 15-13 24-12M23 24c4 7 10 11 17 13M36 19c-4 6-5 10-5 14" strokeWidth="2.5"/><path d="M39 70c5 3 10 4 15 3" strokeWidth="2.5"/></>,
}

export function Doodle({ kind, className = '' }: { kind: DoodleKind; className?: string }) {
  return <svg className={`doodle ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{drawings[kind]}</svg>
}

export function ArrowUpRight({ className = '' }: { className?: string }) {
  return <svg className={`ui-arrow ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 20 20 4M9 4h11v11" /></svg>
}
