'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  Clock3,
  Headphones,
  HelpCircle,
  LayoutDashboard,
  Menu,
  Mic2,
  MoreHorizontal,
  PenLine,
  Play,
  Search,
  Settings,
  Sparkles,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react'

const skills = [
  { name: 'Listening', score: 78, color: 'bg-teal-500', icon: Headphones, detail: 'Comprehension' },
  { name: 'Speaking', score: 64, color: 'bg-violet-500', icon: Mic2, detail: 'Fluency practice' },
  { name: 'Reading', score: 86, color: 'bg-amber-500', icon: BookOpen, detail: 'WPM + accuracy' },
  { name: 'Writing', score: 71, color: 'bg-rose-500', icon: PenLine, detail: 'Rubric score' },
]

const activities = [
  { title: 'Listening for main ideas', type: 'Listening Lab', time: '8 min', progress: 72, icon: Headphones, tone: 'teal' },
  { title: 'One-minute speaking challenge', type: 'Speaking Studio', time: '5 min', progress: 40, icon: Mic2, tone: 'violet' },
  { title: 'Vocabulary in context', type: 'Reading Room', time: '12 min', progress: 0, icon: BookOpen, tone: 'amber' },
]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Listening Lab', icon: Headphones },
  { label: 'Speaking Studio', icon: Mic2 },
  { label: 'Reading Room', icon: BookOpen },
  { label: 'Writing Workshop', icon: PenLine },
]

export default function Page() {
  const [active, setActive] = useState('Overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)
  const [completed, setCompleted] = useState(false)

  const moduleSelected = active !== 'Overview'
  const activeModule = active === 'Overview' ? null : navItems.find((item) => item.label === active)

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-[252px] flex-col bg-[#0d2340] px-4 py-5 text-white transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-3 px-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-teal-400 text-[#0d2340] shadow-lg shadow-teal-500/20"><Brain /></div>
          <div><p className="text-sm font-bold tracking-tight">ENGLISH FLUENCY</p><p className="text-xs font-medium text-teal-300">HUB</p></div>
          <button className="ml-auto lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close menu"><X /></button>
        </div>
        <div className="mt-10 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Learning space</div>
        <nav className="mt-3 flex flex-col gap-1" aria-label="Main navigation">
          {navItems.map(({ label, icon: Icon }) => <button key={label} onClick={() => { setActive(label); setSidebarOpen(false) }} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${active === label ? 'bg-teal-400 font-semibold text-[#0d2340]' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}><Icon className="size-[18px]" />{label}</button>)}
        </nav>
        <div className="mt-8 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Your progress</div>
        <nav className="mt-3 flex flex-col gap-1">
          {[['Fluency Assessment', Target], ['My Learning Path', Sparkles], ['Achievements', Trophy], ['My Progress', ArrowUpRight]].map(([label, Icon]) => <button key={label as string} onClick={() => setActive(label as string)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"><Icon className="size-[18px]" />{label as string}</button>)}
        </nav>
        <div className="mt-auto rounded-2xl bg-white/10 p-4"><div className="mb-2 flex items-center justify-between"><span className="text-xs font-medium text-slate-300">Weekly target</span><span className="text-xs font-bold text-teal-300">72%</span></div><div className="h-1.5 rounded-full bg-white/10"><div className="h-full w-[72%] rounded-full bg-teal-400" /></div><p className="mt-3 text-xs leading-relaxed text-slate-400">You&apos;re 3 activities away from your goal.</p></div>
        <div className="mt-5 flex items-center gap-3 border-t border-white/10 px-2 pt-5"><div className="flex size-9 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-800">AS</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Arun Selvan</p><p className="truncate text-xs text-slate-400">CSE · 22CSE014</p></div><MoreHorizontal className="size-4 text-slate-400" /></div>
      </aside>

      <div className="lg:pl-[252px]">
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200/80 bg-[#f6f8fb]/90 px-5 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3"><button className="rounded-lg p-2 hover:bg-white lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open menu"><Menu /></button><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Department of Languages · PMIST</p><h1 className="mt-1 text-lg font-bold tracking-tight text-[#0d2340] sm:text-xl">{moduleSelected ? active : 'Good morning, Arun'}</h1></div></div>
          <div className="flex items-center gap-2 sm:gap-5"><div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400 sm:flex"><Search className="size-4" />Search activities</div><button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-white" aria-label="Notifications"><Bell className="size-[19px]" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-rose-500" /></button><button className="rounded-xl p-2.5 text-slate-500 hover:bg-white" aria-label="Help"><HelpCircle className="size-[19px]" /></button><div className="hidden h-8 w-px bg-slate-200 sm:block" /><div className="flex items-center gap-2"><div className="flex size-9 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">AS</div><ChevronDown className="size-4 text-slate-400" /></div></div>
        </header>

        <main className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 sm:py-9">
          {moduleSelected ? <ModuleView name={active} icon={activeModule?.icon ?? BookOpen} completed={completed} setCompleted={setCompleted} /> : <>
            <section className="relative overflow-hidden rounded-[24px] bg-[#0d2340] px-6 py-7 text-white shadow-xl shadow-slate-200 sm:px-9 sm:py-8"><div className="relative z-10 max-w-xl"><div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-400/15 px-3 py-1.5 text-xs font-semibold text-teal-300"><Sparkles className="size-3.5" /> Tuesday, 20 October 2026</div><h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-[30px]">Build your confidence,<br /><span className="text-teal-300">one skill at a time.</span></h2><p className="mt-3 max-w-md text-sm leading-6 text-slate-300">Your consistent practice is paying off. Keep your momentum going and complete today&apos;s recommended activity.</p><div className="mt-6 flex flex-wrap gap-3"><button onClick={() => setActive('Listening Lab')} className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-4 py-3 text-sm font-bold text-[#0d2340] transition hover:bg-teal-300"><Play className="size-4 fill-current" />Continue learning</button><button onClick={() => setActive('Fluency Assessment')} className="rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Take assessment</button></div></div><div className="absolute -right-12 -top-24 size-80 rounded-full border-[32px] border-teal-400/10" /><div className="absolute -bottom-44 right-24 size-96 rounded-full border-[48px] border-white/5" /><div className="absolute right-12 top-9 hidden w-52 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur sm:block"><div className="flex items-center justify-between text-xs text-slate-300"><span>Overall fluency</span><ArrowUpRight className="size-4 text-teal-300" /></div><p className="mt-2 text-4xl font-bold">74<span className="text-xl text-slate-400">/100</span></p><div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="h-full w-[74%] rounded-full bg-teal-400" /></div><p className="mt-2 text-[11px] text-teal-300">+6 points this month</p></div></section>

            <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">{[['Practice streak','12 days',Zap,'text-amber-500'],['Practice time','4h 28m',Clock3,'text-violet-500'],['Activities done','28',Check,'text-teal-500'],['Words learned','184',BookOpen,'text-rose-500']].map(([label,value,Icon,color]) => <div key={label as string} className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-medium text-slate-500">{label as string}</span><Icon className={`size-4 ${color as string}`} /></div><p className="mt-3 text-xl font-bold text-[#0d2340]">{value as string}</p><p className="mt-1 text-[11px] text-slate-400">vs last week <span className="font-semibold text-teal-600">+12%</span></p></div>)}</section>

            <section className="mt-7 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]"><div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Skill overview</p><h3 className="mt-1 text-lg font-bold text-[#0d2340]">Your fluency balance</h3></div><button className="text-xs font-semibold text-teal-600 hover:text-teal-700">View details <ArrowUpRight className="ml-1 inline size-3" /></button></div><div className="mt-6 grid gap-5 sm:grid-cols-2">{skills.map(({ name,score,color,icon:Icon,detail }) => <div key={name} className="flex items-center gap-3"><div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${color}/10`}><Icon className={`size-[18px] ${color.replace('bg-', 'text-')}`} /></div><div className="min-w-0 flex-1"><div className="flex justify-between text-sm"><span className="font-semibold text-slate-700">{name}</span><span className="font-bold text-[#0d2340]">{score}%</span></div><div className="mt-2 h-2 rounded-full bg-slate-100"><div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} /></div><p className="mt-1.5 text-[11px] text-slate-400">{detail}</p></div></div>)}</div></div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">This week</p><h3 className="mt-1 text-lg font-bold text-[#0d2340]">Practice activity</h3></div><MoreHorizontal className="size-5 text-slate-400" /></div><div className="mt-6 flex h-28 items-end justify-between gap-2">{['M','T','W','T','F','S','S'].map((day,index) => <div key={`${day}-${index}`} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><div className={`w-full max-w-6 rounded-t-md ${index === 1 ? 'bg-teal-500' : 'bg-teal-100'}`} style={{ height: `${[48,86,62,72,35,18,8][index]}%` }} /><span className={`text-[11px] ${index === 1 ? 'font-bold text-teal-600' : 'text-slate-400'}`}>{day}</span></div>)}</div><div className="mt-5 flex items-center gap-2 text-xs text-slate-500"><span className="size-2 rounded-full bg-teal-500" /> 4h 28m total <span className="ml-auto font-semibold text-teal-600">Goal: 6h</span></div></div></section>
            <section className="mt-7 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]"><div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Your plan</p><h3 className="mt-1 text-lg font-bold text-[#0d2340]">Recommended for you</h3></div><button className="text-xs font-semibold text-teal-600">See all</button></div><div className="mt-4 flex flex-col gap-2">{activities.map(({title,type,time,progress,icon:Icon,tone}) => <div key={title} className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-50"><div className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-${tone}-50 text-${tone}-600`}><Icon className="size-[18px]" /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="truncate text-sm font-semibold text-slate-700">{title}</p>{progress > 0 && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">In progress</span>}</div><p className="mt-1 text-xs text-slate-400">{type} · {time}</p></div><div className="hidden w-20 sm:block"><div className="h-1.5 rounded-full bg-slate-100"><div className={`h-full rounded-full bg-${tone}-500`} style={{width:`${progress}%`}} /></div></div><button onClick={() => setActive(type)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-teal-600" aria-label={`Open ${title}`}><ArrowUpRight className="size-4" /></button></div>)}</div></div><div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm sm:p-6"><div className="flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><Trophy className="size-5" /></div><h3 className="mt-4 text-lg font-bold text-[#0d2340]">Keep your streak alive</h3><p className="mt-2 text-sm leading-6 text-slate-600">You&apos;re on a 12-day streak. Complete one activity today to unlock the <span className="font-semibold text-amber-700">Consistent Learner</span> badge.</p><div className="mt-5 flex items-center gap-1.5">{[1,2,3,4,5,6,7].map((n) => <div key={n} className={`flex size-7 items-center justify-center rounded-lg text-[10px] font-bold ${n < 6 ? 'bg-amber-400 text-amber-950' : 'border border-amber-200 bg-white text-amber-400'}`}>{n < 6 ? <Check className="size-3.5" /> : n}</div>)}</div><button onClick={() => setActive('Speaking Studio')} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-700">Practice now <ArrowUpRight className="size-4" /></button></div></section>
          </>}
        </main>
      </div>
    </div>
  )
}

function ModuleView({ name, icon: Icon, completed, setCompleted }: { name: string; icon: typeof BookOpen; completed: boolean; setCompleted: (value: boolean) => void }) {
  const [answer, setAnswer] = useState('')
  const [showTranscript, setShowTranscript] = useState(false)
  const isListening = name === 'Listening Lab'
  const isSpeaking = name === 'Speaking Studio'
  const title = isListening ? 'Listening for main ideas' : isSpeaking ? 'One-minute speaking challenge' : name === 'Reading Room' ? 'Vocabulary in context' : 'Write a clear professional email'
  return <div className="mx-auto max-w-5xl"><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><div className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700"><Icon className="size-3.5" /> {name}</div><h2 className="text-3xl font-bold tracking-tight text-[#0d2340]">{title}</h2><p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">A focused {name.toLowerCase()} practice activity designed for your current level.</p></div><div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-500"><Clock3 className="size-4" /> 8 min practice</div></div><div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]"><div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"><div className="flex items-center justify-between border-b border-slate-100 pb-5"><div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Activity 01 · Intermediate</p><h3 className="mt-2 text-xl font-bold text-[#0d2340]">{isSpeaking ? 'Talk about a place you want to visit.' : isListening ? 'Listen and identify the main idea.' : 'Read the passage and respond.'}</h3></div><div className="flex size-12 items-center justify-center rounded-full border-4 border-teal-100 text-sm font-bold text-teal-700">1/3</div></div>{isListening && <div className="mt-6 rounded-2xl bg-[#0d2340] p-5 text-white"><div className="flex items-center gap-4"><button className="flex size-12 items-center justify-center rounded-full bg-teal-400 text-[#0d2340]" aria-label="Play audio"><Play className="size-5 fill-current" /></button><div className="flex-1"><div className="flex justify-between text-xs text-slate-300"><span>Campus conversation</span><span>0:42 / 1:18</span></div><div className="mt-3 h-1.5 rounded-full bg-white/15"><div className="h-full w-[38%] rounded-full bg-teal-400" /></div></div></div><button onClick={() => setShowTranscript(!showTranscript)} className="mt-4 text-xs font-semibold text-teal-300 hover:text-teal-200">{showTranscript ? 'Hide transcript' : 'View transcript'}</button>{showTranscript && <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-6 text-slate-300">&quot;The student centre has introduced a new peer mentoring programme for first-year students...&quot;</p>}</div>}{isSpeaking && <div className="mt-6 flex flex-col items-center rounded-2xl bg-violet-50 px-5 py-8 text-center"><div className="flex size-20 items-center justify-center rounded-full bg-violet-500 text-white shadow-lg shadow-violet-200"><Mic2 className="size-8" /></div><p className="mt-4 text-sm font-bold text-violet-900">Ready when you are</p><p className="mt-1 text-xs text-violet-700">Speech recognition works best in Chrome or Edge.</p><button onClick={() => setCompleted(true)} className="mt-5 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-700">Start speaking</button></div>}{!isSpeaking && !isListening && <div className="mt-6 rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-700"><p className="font-semibold text-[#0d2340]">Campus life is full of opportunities to practise communication...</p><p className="mt-2">Students who read regularly develop stronger vocabulary and become more confident when expressing ideas in academic settings.</p></div>}<div className="mt-7"><p className="text-sm font-bold text-[#0d2340]">{isSpeaking ? 'How would you respond?' : 'Choose the best answer'}</p>{isSpeaking ? <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} className="mt-3 min-h-28 w-full resize-none rounded-xl border border-slate-200 p-3 text-sm outline-none ring-teal-400 focus:ring-2" placeholder="Write a few notes before you speak..." /> : <div className="mt-3 flex flex-col gap-2">{['It announces a new student support programme.','It explains how to register for courses.','It describes a campus sports event.'].map((option) => <button key={option} onClick={() => setAnswer(option)} className={`rounded-xl border p-3 text-left text-sm transition ${answer === option ? 'border-teal-400 bg-teal-50 font-semibold text-teal-800' : 'border-slate-200 text-slate-600 hover:border-teal-200'}`}>{answer === option && <Check className="mr-2 inline size-4" />}{option}</button>)}</div>}</div><div className="mt-7 flex justify-end"><button onClick={() => setCompleted(true)} className="rounded-xl bg-[#0d2340] px-5 py-3 text-sm font-bold text-white hover:bg-[#17385f]">{completed ? 'Completed' : 'Submit answer'}</button></div></div><aside className="flex flex-col gap-4"><div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Your progress</p><p className="mt-3 text-3xl font-bold text-[#0d2340]">74%</p><div className="mt-3 h-2 rounded-full bg-slate-100"><div className="h-full w-[74%] rounded-full bg-teal-500" /></div><p className="mt-3 text-xs leading-5 text-slate-500">You&apos;re making steady progress across all four skills.</p></div><div className="rounded-2xl border border-teal-100 bg-teal-50 p-5"><div className="flex items-center gap-2 text-sm font-bold text-teal-900"><Sparkles className="size-4" /> Helpful tip</div><p className="mt-3 text-sm leading-6 text-teal-800">Focus on the speaker&apos;s purpose first. Details become easier to remember once you understand the main idea.</p></div></aside></div></div>
}
