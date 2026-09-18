'use client';
import { asset } from '@/lib/assets';
import { useState, useId, type ReactNode } from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  Folder,
  GitBranch,
  Globe,
  Grid2X2,
  LayoutPanelLeft,
  ListChecks,
  MessageSquare,
  Mic,
  MoreHorizontal,
  PanelLeft,
  Plus,
  Search,
  Shield,
  SquarePen,
  Store,
  Workflow,
  Download,
  ExternalLink,
  CalendarDays,
} from 'lucide-react';
import { PlanCompact } from '@/components/product/toolui/plan/plan';
import { storyContent, type Direction, type ChapterKind } from './data';
import s from './storyboards.module.css';
type Props = {
  direction: Direction;
  kind: ChapterKind;
  preview?: boolean;
  onAdvance?: () => void;
};
function IconButton({
  label,
  children,
  onClick,
}: {
  label: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button type="button" aria-label={label} title={label} onClick={onClick}>
      {children}
    </button>
  );
}
export function Product({
  direction: d,
  kind,
  preview = false,
  onAdvance,
}: Props) {
  const content = storyContent[d.story];
  const [tab, setTab] = useState('Preview');
  const [source, setSource] = useState(0);
  const [app, setApp] = useState(0);
  const [sent, setSent] = useState(false);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'Focus' | 'Canvas'>('Canvas');
  const [done, setDone] = useState([true, false, false, false, false]);
  const [added, setAdded] = useState(false);
  const id = useId();
  const isHero = kind === 'hero';
  const compact = isHero || kind === 'closing';
  const isSources = kind === 'sources';
  const isApps = kind === 'apps';
  const isWorkflow = kind === 'workflow';
  const artifact = kind === 'artifact';
  const split = kind === 'canvas';
  const request = kind === 'request';
  const showResult = artifact || split;
  const progressed = sent || split || artifact || isWorkflow;
  const submit = () => {
    setSent(true);
    setInput('');
    if (onAdvance && isHero) onAdvance();
  };
  const download = () => {
    const url = URL.createObjectURL(
      new Blob(
        [
          `# ${content.title}\n\n${content.intro}\n\n${content.steps.map((v, i) => `${i + 1}. ${v}`).join('\n')}\n\nIllustrative website example.\n`,
        ],
        { type: 'text/markdown' },
      ),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = content.file.endsWith('.md')
      ? content.file
      : 'Project brief.md';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const apps = [
    ['Notion', 'Notes and shared knowledge', 'notion'],
    ['Slack', 'Team conversations and updates', 'slack'],
    ['Google Workspace', 'Files, mail and calendars', 'google-workspace'],
    ['GitHub', 'Code and project context', 'github'],
  ];
  const composer = (
    <form
      className={s.composer}
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <label className={s.srOnly} htmlFor={id}>
        Sample request
      </label>
      <input
        id={id}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={
          compact ? 'What would you like to work on?' : 'Ask a follow-up…'
        }
        autoComplete="off"
      />
      <div>
        <span>
          <Plus />
          <Shield />
          Auto
          <ChevronDown />
        </span>
        <span>
          Choose model
          <ChevronDown />
          <Mic />
          <button type="submit" aria-label="Run sample request">
            <ArrowUp />
          </button>
        </span>
      </div>
    </form>
  );
  const chat = (
    <div className={s.chatPane} data-native-pane="conversation">
      <div className={s.paneHead}>
        <MessageSquare />
        <span>{content.project}</span>
        <MoreHorizontal />
      </div>
      <div
        className={s.chatContent}
        tabIndex={preview ? -1 : 0}
        role="region"
        aria-label="Conversation history"
      >
        <div className={s.userBubble}>
          {content.request}
          <span>
            <FileText />
            {content.sources[0]}
          </span>
        </div>
        <div className={s.agentLabel}>
          <img src={asset('openswarm-mark.png')} alt="" />
          OpenSwarm
        </div>
        <p>{content.response}</p>
        <div className={s.toolGroup}>
          <Check /> {progressed ? 'Research connected' : 'Context ready'}{' '}
          <span>3 sources</span>
          <ChevronDown />
        </div>
        <div className={s.nativePlan}>
          <PlanCompact
            id={`plan-${d.id}`}
            title="Project plan"
            todos={content.steps.map((label, i) => ({
              id: String(i),
              label,
              status: progressed || i === 0 ? 'completed' : 'pending',
            }))}
          />
        </div>
        {sent && (
          <p className={s.responseNotice} role="status">
            The sample is ready. Open the result to continue.
          </p>
        )}
      </div>
      <div className={s.chatBottom}>
        <span>
          <GitBranch />
          main{' '}
          <span>
            workspace / {content.project.toLowerCase().replaceAll(' ', '-')}
          </span>
        </span>
        {composer}
      </div>
    </div>
  );
  const result = (
    <div className={s.resultPane} data-native-pane="result">
      <div className={s.paneHead}>
        <FileText />
        <span>{content.file}</span>
        <IconButton label="Download sample result" onClick={download}>
          <Download />
        </IconButton>
      </div>
      <div className={s.resultToolbar}>
        <span>
          workspace <ChevronRight />
          {content.file}
        </span>
        <div>
          {['Preview', 'Source'].map((t) => (
            <button key={t} onClick={() => setTab(t)} aria-pressed={tab === t}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className={s.resultBody}>
        {tab === 'Source' ? (
          <div className={s.sourceArticle}>
            <h3>Source context</h3>
            {content.sources.map((v, i) => (
              <section key={v}>
                <h4>{v}</h4>
                <p>
                  {
                    [
                      'The project begins with the needs and constraints captured in these notes.',
                      'Use the same criteria to compare the alternatives and make the tradeoffs visible.',
                      'Keep the next version small enough to review, then refine it with the team.',
                    ][i]
                  }
                </p>
              </section>
            ))}
          </div>
        ) : d.result === 'table' ? (
          <>
            <h3>{content.title}</h3>
            <p>Compare the options against the same needs.</p>
            <table>
              <thead>
                <tr>
                  <th>Approach</th>
                  <th>Best fit</th>
                  <th>Next step</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Focused pilot', 'Learn quickly', 'Test with the team'],
                  ['Connected workflow', 'Recurring work', 'Map the handoffs'],
                  ['Custom app', 'Specific process', 'Build a first version'],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((x, i) => (
                      <td key={x}>{i === 0 ? <strong>{x}</strong> : x}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={s.citationRow}>
              <FileText />
              Based on 3 project sources{' '}
              <button onClick={() => setTab('Source')}>
                View sources
                <ArrowUpRight />
              </button>
            </div>
          </>
        ) : d.result === 'app' ? (
          <>
            <div className={s.appTitle}>
              <div>
                <span>Team workspace</span>
                <h3>What’s next</h3>
              </div>
              <button onClick={() => setAdded(true)}>
                <Plus />
                New task
              </button>
            </div>
            <div className={s.appTabs}>
              <span>All tasks</span>
              <span>My work</span>
              <span>Completed</span>
            </div>
            {[...content.steps, ...(added ? ['Review the next idea'] : [])].map(
              (x, i) => (
                <button
                  className={s.taskRow}
                  aria-pressed={Boolean(done[i])}
                  key={x}
                  onClick={() =>
                    setDone((v) => v.map((t, n) => (n === i ? !t : t)))
                  }
                >
                  <span className={s.taskCheck} data-done={Boolean(done[i])}>
                    {done[i] && <Check />}
                  </span>
                  <span>{x}</span>
                  <span className={s.taskOwner}>
                    {['AL', 'MK', 'JS', 'AL'][i]}
                  </span>
                  <ChevronRight />
                </button>
              ),
            )}
            <p className={s.appHint}>Select a task to change its state.</p>
          </>
        ) : d.result === 'schedule' ? (
          <>
            <h3>{content.title}</h3>
            <p>
              {d.story === 'travel'
                ? 'Three days, with space between the plans.'
                : 'The next steps, without losing the bigger picture.'}
            </p>
            <div className={s.schedule}>
              {['Monday', 'Tuesday', 'Wednesday'].map((day, i) => (
                <button
                  key={day}
                  onClick={() => setSource(i)}
                  data-selected={source === i}
                >
                  <span>{day}</span>
                  <strong>{content.steps[i]}</strong>
                  <small>
                    {
                      [
                        'Review the context',
                        'Work through the details',
                        'Share the result',
                      ][i]
                    }
                  </small>
                </button>
              ))}
            </div>
            <div className={s.scheduleDetail}>
              <CalendarDays />
              <div>
                <strong>{content.steps[source]}</strong>
                <p>
                  {
                    [
                      'Start with the shared material and agree what matters.',
                      'Keep decisions and dependencies close to the work.',
                      'Review the result and decide the next useful action.',
                    ][source]
                  }
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={s.docByline}>
              <img src={asset('openswarm-mark.png')} alt="" /> {content.project}{' '}
              <span>Draft for review</span>
            </div>
            <h3>{content.title}</h3>
            <p>{content.intro}</p>
            <div className={s.docSection}>
              <h4>Start with the useful question</h4>
              <p>
                Bring the original context into view. Make the assumptions
                explicit and keep the work connected to the evidence.
              </p>
            </div>
            <div className={s.docSection}>
              <h4>Make the next step concrete</h4>
              <p>
                Choose a focused first version. Review it in context, then
                decide what to improve.
              </p>
            </div>
            <div className={s.citationRow}>
              <FileText />3 sources attached{' '}
              <button onClick={() => setTab('Source')}>
                View sources
                <ArrowUpRight />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
  if (compact)
    return (
      <div
        className={`${s.product} ${s.compactProduct}`}
        data-dark={d.dark}
        data-kind={kind}
      >
        <div className={s.compactChrome}>
          <span className={s.lights}>
            <i />
            <i />
            <i />
          </span>
          <span>
            <img src={asset('openswarm-mark.png')} alt="" />
            OpenSwarm
          </span>
          <PanelLeft />
        </div>
        <div className={s.compactBody}>
          <div className={s.compactSidebar}>
            <SquarePen />
            New chat
            <Globe />
            Browser
            <Grid2X2 />
            Apps
            <Workflow />
            Workflows
          </div>
          <div className={s.compactMain}>
            <h3>Where should we begin?</h3>
            {composer}
            <div className={s.suggestions}>
              {['Research a topic', 'Build an app', 'Plan a project'].map(
                (x, i) => (
                  <button
                    key={x}
                    onClick={() => {
                      setInput(
                        [
                          content.request,
                          'Build a simple app for my project.',
                          'Help me organize the next steps.',
                        ][i],
                      );
                    }}
                  >
                    <span>
                      {
                        [
                          <Search key="s" />,
                          <Grid2X2 key="g" />,
                          <ListChecks key="l" />,
                        ][i]
                      }
                    </span>
                    {x}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div
      className={s.product}
      data-dark={d.dark}
      data-kind={kind}
      data-mode={mode}
      data-preview={preview}
    >
      <div className={s.productChrome}>
        <span className={s.lights}>
          <i />
          <i />
          <i />
        </span>
        <span>
          <PanelLeft />
          OpenSwarm <ChevronRight />
          {content.project}
        </span>
        <div>
          {(['Focus', 'Canvas'] as const).map((v) => (
            <button
              key={v}
              aria-pressed={mode === v}
              onClick={() => setMode(v)}
            >
              <LayoutPanelLeft />
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className={s.productBody}>
        <aside className={s.productSidebar}>
          <strong>
            <img src={asset('openswarm-mark.png')} alt="" />
            OpenSwarm
            <ChevronDown />
          </strong>
          <button
            onClick={() => {
              setSent(false);
              setInput('');
            }}
          >
            <SquarePen />
            New chat
          </button>
          <span>
            <Globe />
            Browser
          </span>
          <span>
            <Grid2X2 />
            Apps
          </span>
          <span>
            <Workflow />
            Workflows
          </span>
          <span>
            <Store />
            Marketplace
          </span>
          <p>Projects</p>
          <div className={s.projectSelected}>
            <ChevronDown />
            {content.project}
          </div>
          <span className={s.projectThread}>
            <MessageSquare />
            {d.story === 'build'
              ? 'Build the first version'
              : 'Research and plan'}
          </span>
          <span>
            <FileText />
            {content.file}
          </span>
          <p className={s.sidebarFooter}>
            Shared context <Shield />
          </p>
        </aside>
        <div className={s.productWork}>
          {isSources ? (
            <>
              <div className={s.sourceList}>
                <div className={s.paneHead}>
                  <Folder />
                  <span>Project sources</span>
                  <Plus />
                </div>
                <div className={s.sourceSearch}>
                  <Search />
                  Find in this project
                </div>
                {content.sources.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSource(i)}
                    aria-pressed={source === i}
                  >
                    <FileText />
                    <span>
                      {v}
                      <small>
                        {
                          [
                            'Notes · 4 pages',
                            'Document · 2 pages',
                            'Research · 6 sources',
                          ][i]
                        }
                      </small>
                    </span>
                    <ChevronRight />
                  </button>
                ))}
                <div className={s.sourceAttached}>
                  <Check />
                  Available to your agents
                </div>
              </div>
              <div className={s.sourcePreview}>
                <div className={s.paneHead}>
                  <FileText />
                  <span>{content.sources[source]}</span>
                  <ExternalLink />
                </div>
                <div>
                  <span className={s.documentBadge}>Project context</span>
                  <h3>{content.sources[source]}</h3>
                  <p>{content.intro}</p>
                  <h4>What matters for this project</h4>
                  {content.steps.map((v, i) => (
                    <p key={v} className={s.evidenceLine}>
                      <span>{i + 1}</span>
                      {v}
                    </p>
                  ))}
                  <blockquote>
                    Keep the original context close to the decision.
                  </blockquote>
                </div>
              </div>
            </>
          ) : isApps ? (
            <>
              <div className={s.appLibrary}>
                <div className={s.paneHead}>
                  <Grid2X2 />
                  <span>Your apps</span>
                  <Search />
                </div>
                <h3>Connected to your work.</h3>
                <p>Bring the context from the tools you use.</p>
                <div>
                  {apps.map((a, i) => (
                    <button
                      key={a[0]}
                      onClick={() => setApp(i)}
                      aria-pressed={app === i}
                    >
                      <img src={asset(`integrations/${a[2]}.svg`)} alt="" />
                      <strong>{a[0]}</strong>
                      <span>{a[1]}</span>
                      <ChevronRight />
                    </button>
                  ))}
                </div>
              </div>
              <div className={s.appDetail}>
                <img src={asset(`integrations/${apps[app][2]}.svg`)} alt="" />
                <h3>{apps[app][0]}</h3>
                <p>{apps[app][1]} in the same workspace as your agents.</p>
                <div>
                  <Check />
                  Read shared context
                </div>
                <div>
                  <Check />
                  Keep sources attached
                </div>
                <div>
                  <Check />
                  Use across projects
                </div>
                <span className={s.sampleStatus}>Connection preview</span>
              </div>
            </>
          ) : isWorkflow ? (
            <>
              <div className={s.workflowPane}>
                <div className={s.paneHead}>
                  <Workflow />
                  <span>{content.project} workflow</span>
                  <MoreHorizontal />
                </div>
                <h3>A process you can follow.</h3>
                <p>Keep the steps and handoffs visible.</p>
                <div className={s.workflowSteps}>
                  {[
                    'Bring in project context',
                    ...content.steps,
                    'Review the result',
                  ].map((x, i) => (
                    <button
                      key={x}
                      onClick={() =>
                        setDone((v) => {
                          const n = [...v];
                          n[i] = !n[i];
                          return n;
                        })
                      }
                      aria-pressed={Boolean(done[i])}
                    >
                      <span className={s.workflowDot}>
                        {done[i] ? <Check /> : i + 1}
                      </span>
                      <span>
                        <strong>{x}</strong>
                        <small>
                          {i === 0
                            ? 'Trigger · project update'
                            : i === 4
                              ? 'Review · your decision'
                              : 'Agent step · shared context'}
                        </small>
                      </span>
                      <ChevronRight />
                    </button>
                  ))}
                </div>
              </div>
              <div className={s.workflowSummary}>
                <CalendarDays />
                <h3>Your next run, in context.</h3>
                <p>
                  The workflow keeps the same sources and makes each handoff
                  visible.
                </p>
                <div>
                  <FileText /> {content.sources[0]}
                </div>
                <div>
                  <MessageSquare /> {content.project}
                </div>
                <div>
                  <Check /> Ready to review
                </div>
              </div>
            </>
          ) : (
            <>
              {!artifact && chat}
              {showResult && result}
              {request && (
                <div className={s.requestContext}>
                  <h3>Keep the context close.</h3>
                  <p>Files and references stay beside the conversation.</p>
                  {content.sources.map((x) => (
                    <div key={x}>
                      <FileText />
                      {x}
                      <Check />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
