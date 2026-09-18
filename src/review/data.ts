export type ChapterKind =
  | 'hero'
  | 'menu'
  | 'request'
  | 'sources'
  | 'canvas'
  | 'apps'
  | 'workflow'
  | 'artifact'
  | 'evidence'
  | 'film'
  | 'closing';
export type Story =
  | 'launch'
  | 'research'
  | 'build'
  | 'operations'
  | 'travel'
  | 'writing';
export type Chapter = {
  kind: ChapterKind;
  name: string;
  title: string;
  body: string;
  motion: string;
  action: string;
};
export type Direction = {
  id: string;
  number: string;
  name: string;
  category: string;
  group: 'Light' | 'Dark' | 'Graphic' | 'ASCII';
  layout: string;
  header: 'glass' | 'line' | 'island' | 'solid';
  dark: boolean;
  image?: string;
  film?: string;
  graphic?: 'flock' | 'orbit' | 'weave' | 'contour' | 'grid';
  story: Story;
  result: 'brief' | 'table' | 'app' | 'schedule';
  headline: string;
  subtitle: string;
  thesis: string;
  source: string;
  borrow: string;
  palette: string[];
  signature: string;
  frames: Chapter[];
};
type Opening = {
  mode: 'product' | 'image' | 'type' | 'ascii' | 'gallery' | 'diagram';
  composition: string;
  motion: string;
  product?: ChapterKind;
};
export const openings: Record<string, Opening> = {
  horizon: {
    mode: 'product',
    product: 'hero',
    composition:
      'A centered coastal opening with a single native composer rising from the lower edge.',
    motion:
      'The coast moves continuously while the anchored composer opens into the next chapter.',
  },
  night: {
    mode: 'ascii',
    composition:
      'A vast character flock crosses the upper field. A low, centered headline belongs to the dark negative space beneath it.',
    motion:
      'Thousands of individual glyphs travel across a dense, continuous flock; the copy stays still.',
  },
  living: {
    mode: 'image',
    composition:
      'An oversized spectral paper form fills the lower-right field. The centered headline and open paper space carry the opening without an app window.',
    motion:
      'The filmed paper form slowly unfolds; its framing material returns around the later native workspace.',
  },
  common: {
    mode: 'product',
    product: 'canvas',
    composition:
      'Oversized centered typography hands directly into a broad native conversation and working task app.',
    motion:
      'The shared window expands under the headline; tabs and the task state remain interactive.',
  },
  monument: {
    mode: 'image',
    composition:
      'A monumental cobalt portal occupies the entire composition. Centered type crosses the sky, with an unobstructed architectural foreground.',
    motion:
      'A slow optical push towards the portal sets up the aperture reveal in the next product chapter.',
  },
  signal: {
    mode: 'diagram',
    composition:
      'An asymmetric editorial opening: a clear statement at left, a large populated source diagram at right.',
    motion:
      'Lines travel between named source points. The graphic becomes source inspection in the next chapter.',
  },
  afterglow: {
    mode: 'image',
    composition:
      'An uninterrupted dark coastal film. The centered invitation sits low against the dusk, leaving most of the scene to breathe.',
    motion:
      'The coast remains alive behind still typography; the next scene brings the first glass product surface into focus.',
  },
  estuary: {
    mode: 'image',
    composition:
      'A restrained serif headline across the top, a full painted estuary below. No interface covers the water.',
    motion:
      'Painted edges soften into the page, then give way to the source collection in the next chapter.',
  },
  skies: {
    mode: 'image',
    composition:
      'A pale-lilac editorial split: generous typography at left and a tall architectural image aperture at right.',
    motion:
      'The image aperture opens vertically before the site introduces its tools.',
  },
  threshold: {
    mode: 'image',
    composition:
      'Symmetric white architecture and a centered statement, set in a quiet strip above the reflecting water.',
    motion:
      'The architectural view gently moves forward while the headline stays pinned to the page.',
  },
  current: {
    mode: 'product',
    product: 'sources',
    composition:
      'A left-aligned statement beside a large, front-facing native source reader. Cyan optical material connects both halves.',
    motion:
      'The selected source changes within the reader, while the surrounding material shifts in soft focus.',
  },
  greenways: {
    mode: 'product',
    product: 'artifact',
    composition:
      'A bright centered introduction above a panoramic green landscape. One large document sits on the right of the lower scene.',
    motion:
      'The document rises from the landscape and expands into the review chapter.',
  },
  higher: {
    mode: 'image',
    composition:
      'Clouds fill a tall central image aperture. Typography stretches across its edges, creating a poster-like opening.',
    motion:
      'A slow upward drift through the cloud field precedes the native workspace.',
  },
  blackglass: {
    mode: 'image',
    composition:
      'A dark architectural film-still composition: oversized type on the left, a distant illuminated doorway on the right.',
    motion:
      'The doorway slowly sharpens as the page draws closer; the native workflow appears later.',
  },
  aperture: {
    mode: 'type',
    composition:
      'A black typographic poster with one enormous statement and a narrow horizontal window into the outside world.',
    motion:
      'The narrow image slit widens into the actual OpenSwarm recording in the later chapter.',
  },
  crossfade: {
    mode: 'image',
    composition:
      'Two deliberately different halves: spectral material in a tall panel at left and a clean typographic introduction at right.',
    motion:
      'The material crosses the central seam as the next chapter changes from references to writing.',
  },
  relay: {
    mode: 'diagram',
    composition:
      'A dark diagram occupies the upper-right field; a grounded headline at lower-left establishes the handoff story.',
    motion:
      'A visible pulse follows the diagram paths, making the direction of the handoff clear.',
  },
  folio: {
    mode: 'type',
    composition:
      'A large editorial serif opening, fine page rules and a small paper-fold illustration. The product is withheld until the source chapter.',
    motion:
      'The paper fold opens at the margin, establishing the later document spread.',
  },
  aurora: {
    mode: 'image',
    composition:
      'An expansive aurora and ocean, with the headline offset high on the right. The landscape retains the center of gravity.',
    motion:
      'The photographic light drifts across the sky with a slow layered movement.',
  },
  botanical: {
    mode: 'image',
    composition:
      'A centered botanical title surrounded by tall painted reeds. The cream paper and illustrated margins form one continuous page.',
    motion:
      'The two painted edges move apart subtly as the context chapter opens.',
  },
  assembly: {
    mode: 'product',
    product: 'apps',
    composition:
      'A compact centered title above a substantial app library. Functional modules carry the visual identity from the start.',
    motion:
      'Selecting an app changes the attached detail panel without moving the surrounding shell.',
  },
  tidal: {
    mode: 'image',
    composition:
      'A large coastline crop at left meets a paper column at right, with the headline and action arranged as a travel editorial.',
    motion:
      'The coastal film moves within its fixed crop; the planning interface enters in chapter two.',
  },
  prism: {
    mode: 'gallery',
    composition:
      'A graphic three-image index beneath a short centered introduction. Each image provides a different way into the product story.',
    motion:
      'The selected visual opens its corresponding chapter; the hero itself contains no app mockup.',
  },
  silhouette: {
    mode: 'ascii',
    composition:
      'A dense architectural arch made entirely from text characters frames a central statement. No floating windows.',
    motion:
      'The character arch builds and releases its edges while retaining a sharply defined central opening.',
  },
  daybreak: {
    mode: 'image',
    composition:
      'A bold left-aligned statement on white paper, separated from the lower coastal film by a clean horizontal edge.',
    motion: 'The dark film band expands upward when the work enters the story.',
  },
  weave: {
    mode: 'ascii',
    composition:
      'A fine woven character field fills the right side, balanced by a large left-aligned headline and clear action.',
    motion:
      'Glyph bands interlock along the right edge, then resolve into the workflow sequence.',
  },
  blueprint: {
    mode: 'image',
    composition:
      'A cinematic architectural panorama within a dark page frame. Headline and action sit low in the image, leaving the upper space open.',
    motion:
      'The architectural frame opens from the center; a soft foreground veil clears before the app chapter.',
  },
  airlight: {
    mode: 'product',
    product: 'canvas',
    composition:
      'The workspace is the hero: a concise centered introduction above the largest native canvas in the collection.',
    motion:
      'The two panes open directly into Focus and Canvas views, with a restrained cloud backdrop.',
  },
  continuum: {
    mode: 'image',
    composition:
      'Full-bleed cyan optical material and a short, centered statement. The opening is an immersive moving identity surface.',
    motion:
      'A slow optical drift carries into the later workspace without replacing the visual environment.',
  },
  confluence: {
    mode: 'gallery',
    composition:
      'An offset watercolor editorial spread with a large headline at upper-left and three painted apertures across the lower page.',
    motion:
      'The three image apertures lead to sources, the shared canvas and the resulting document.',
  },
};

const A = import.meta.env.BASE_URL + 'assets/';
const scenes = {
  coast: A + 'homepage-review/swarm-coast.webp',
  living: A + 'storyboards/living.webp',
  monument: A + 'storyboards/monument.webp',
  dusk: A + 'storyboards/afterglow.webp',
  estuary: A + 'storyboards/estuary.webp',
  skies: A + 'storyboards/skies.webp',
  green: A + 'storyboards-v3/green-folds.webp',
  arch: A + 'storyboards-v3/white-arch.webp',
  black: A + 'storyboards-v3/black-prism.webp',
  aurora: A + 'storyboards-v3/aurora.webp',
  current: A + 'storyboards-v3/cyan-current.webp',
  botanical: A + 'storyboards-v3/botanical.webp',
  cloud: A + 'storyboards-v3/cloud-sea.webp',
};
function c(
  kind: ChapterKind,
  name: string,
  title: string,
  body: string,
  motion: string,
  action: string,
): Chapter {
  return { kind, name, title, body, motion, action };
}
export const directions: Direction[] = [
  {
    id: 'horizon',
    number: '01',
    name: 'Open Horizon',
    category: 'Centered coast · frosted navigation',
    group: 'Light',
    layout: 'horizon',
    header: 'glass',
    dark: false,
    image: scenes.coast,
    film: A + 'homepage-review/swarm-coast-motion.mp4',
    story: 'launch',
    result: 'brief',
    headline: 'Ideas need\nopen space.',
    subtitle: 'Your agents, apps, and ideas. Together in one open workspace.',
    thesis:
      'A centered opening, a straight native workspace, and a coast that stays continuous as the work expands.',
    source: 'Tasklify / Nexora',
    borrow:
      'Cohere’s substantial product scale. Native OpenSwarm split views and composer.',
    palette: ['#f7f9fa', '#152b36', '#b6cbd6'],
    signature:
      'The centered composer opens downward into a full workspace. A soft foreground veil clears as context appears.',
    frames: [
      c(
        'hero',
        'The opening',
        'Ideas need open space.',
        'Your agents, apps, and ideas. Together in one open workspace.',
        'Centered copy settles above one straight, full-width product surface. The coast moves behind it.',
        'Start the sample request',
      ),
      c(
        'menu',
        'The platform',
        'Everything has a place.',
        'A spacious menu makes agents, apps, workflows and the canvas easy to understand.',
        'The frosted navigation expands from its own edge; the scene behind it gently defocuses.',
        'Open Platform and explore a capability',
      ),
      c(
        'request',
        'The first thought',
        'Start with what you want to do.',
        'Bring a question, a file, or an unfinished idea.',
        'The composer stays anchored while the conversation grows beneath it.',
        'Run the sample launch request',
      ),
      c(
        'canvas',
        'The bigger picture',
        'See the whole idea take shape.',
        'Conversation, research and the launch brief stay connected.',
        'One large flat workspace opens into two clear panes. No tilting or tiny floating documents.',
        'Switch between Focus and Canvas',
      ),
      c(
        'artifact',
        'The result',
        'A plan you can actually use.',
        'Review the launch plan alongside the sources that shaped it.',
        'The document expands from its existing pane while surrounding context recedes into soft focus.',
        'Inspect the brief or download it',
      ),
      c(
        'closing',
        'The next idea',
        'Make room for your next idea.',
        'Research, create and get things done with OpenSwarm.',
        'The workspace lowers into the landscape. A compact useful footer closes the page.',
        'Return to the opening',
      ),
    ],
  },
  {
    id: 'night',
    number: '02',
    name: 'Night School',
    category: 'Dark ASCII · dense living field',
    group: 'ASCII',
    layout: 'night',
    header: 'line',
    dark: true,
    graphic: 'flock',
    story: 'research',
    result: 'table',
    headline: 'Great work\nthinks together.',
    subtitle:
      'Bring every source, every question and every agent into the same conversation.',
    thesis:
      'A dense typographic flock behaves like collective intelligence. Native dark product surfaces provide the visual weight the previous version lacked.',
    source: 'Capy / Speakeasy',
    borrow: 'Actual glyph artwork; OpenSwarm tool groups and evidence tables.',
    palette: ['#0c1013', '#f1f1e9', '#819b9b'],
    signature:
      'The character field parts around the work, then gathers at the evidence that matters.',
    frames: [
      c(
        'hero',
        'Collective thought',
        'Great work thinks together.',
        'Bring every source and every agent into the same conversation.',
        'A complete, densely rendered ASCII wave surrounds the centered headline and dark composer.',
        'Begin the research example',
      ),
      c(
        'sources',
        'Evidence first',
        'Every answer has a starting point.',
        'Bring interviews, notes and web research into view.',
        'Source rows reveal in order; the glyph field shifts toward the active source.',
        'Select a source and inspect its content',
      ),
      c(
        'request',
        'Ask a better question',
        'Give your research a direction.',
        'Compare the alternatives and explain what matters.',
        'A legible tool group opens under the request; the input remains fixed.',
        'Run the comparison example',
      ),
      c(
        'canvas',
        'Work in parallel',
        'Different perspectives. Shared context.',
        'The research and synthesis agents work from the same evidence.',
        'Dark panes separate horizontally as connecting lines clarify their relationship.',
        'Focus either side of the workspace',
      ),
      c(
        'artifact',
        'Make the call',
        'The useful differences, in one place.',
        'Compare the options with their sources still within reach.',
        'A bright table resolves against the dark field, without replacing the workspace.',
        'Inspect the comparison table',
      ),
      c(
        'closing',
        'Keep going',
        'Good ideas deserve company.',
        'Give your next question room to become something useful.',
        'The character wave settles around a single centered call to action.',
        'Return to the first question',
      ),
    ],
  },
  {
    id: 'living',
    number: '03',
    name: 'Living Form',
    category: 'Spectral paper · native light surfaces',
    group: 'Light',
    layout: 'living',
    header: 'island',
    dark: false,
    image: scenes.living,
    film: A + 'storyboards/living-motion.mp4',
    story: 'writing',
    result: 'brief',
    headline: 'More minds.\nNew possibilities.',
    subtitle: 'A place to turn scattered thinking into work that takes shape.',
    thesis:
      'Spectral paper becomes a consistent framing material: opening, source collection, workspace and closing all belong to the same identity.',
    source: 'Meristem',
    borrow: 'Native file tabs; Cohere’s large product details.',
    palette: ['#fafaf8', '#26262b', '#b6c3ee', '#dfb9da'],
    signature:
      'The artwork unfolds at the edges while native tabs expand into a document spread.',
    frames: [
      c(
        'hero',
        'Potential',
        'More minds. New possibilities.',
        'A place to turn scattered thinking into work that takes shape.',
        'Translucent folds move behind the centered title. One broad composer rests on the clear paper center.',
        'Open a writing project',
      ),
      c(
        'menu',
        'A living system',
        'Tools that belong together.',
        'Explore the canvas, agents and apps as one connected product.',
        'The island navigation grows into a two-column product index with a spectral preview.',
        'Try the interactive mega menu',
      ),
      c(
        'sources',
        'Gather the pieces',
        'Start with the material you have.',
        'Notes, conversations and references become shared context.',
        'Files slide into a single native source drawer instead of floating as decorative cards.',
        'Inspect the source drawer',
      ),
      c(
        'canvas',
        'Find the shape',
        'Your thinking, side by side.',
        'Develop the outline while the original material stays close.',
        'The native window widens into a joined conversation and document spread.',
        'Toggle Focus and Canvas',
      ),
      c(
        'artifact',
        'Make it yours',
        'A first draft worth working on.',
        'Edit the structure, inspect the source and keep writing.',
        'The document surface comes forward; soft optical material frames its edges.',
        'Switch between document and source',
      ),
      c(
        'closing',
        'Next possibility',
        'See what takes shape next.',
        'One workspace for ideas at every stage.',
        'The fold opens wider around a compact footer and centered action.',
        'Start again',
      ),
    ],
  },
  {
    id: 'common',
    number: '04',
    name: 'Common Ground',
    category: 'Monochrome · product-led typography',
    group: 'Graphic',
    layout: 'common',
    header: 'solid',
    dark: false,
    graphic: 'grid',
    story: 'build',
    result: 'app',
    headline: 'One place.\nMore possible.',
    subtitle: 'Work with AI in a workspace built to hold the whole project.',
    thesis:
      'Large confident typography frames real work. The visual system comes from the product’s layout, with no ornamental environment.',
    source: 'Cohere / native OpenSwarm',
    borrow:
      'Expanding media from supplied motion references; readable native interface scale.',
    palette: ['#fbfbfa', '#18191b', '#d9dadb'],
    signature:
      'A typographic opening gives way to a large product window; tabs become full work surfaces.',
    frames: [
      c(
        'hero',
        'The premise',
        'One place. More possible.',
        'Work with AI in a workspace built to hold the whole project.',
        'Oversized type contracts to make room for a precise straight browser and chat surface.',
        'Explore the build example',
      ),
      c(
        'apps',
        'The building blocks',
        'Use the tools the work needs.',
        'Connect your apps or create a focused tool for the task.',
        'A native app library expands under the headline; selecting an app changes the detail pane.',
        'Choose an app',
      ),
      c(
        'request',
        'The brief',
        'Describe what you want to build.',
        'An idea becomes a visible plan with clear steps.',
        'The supplied ToolUI Plan updates as the request moves forward.',
        'Run the sample build',
      ),
      c(
        'film',
        'The actual canvas',
        'This is OpenSwarm.',
        'An actual product recording shows the spatial workspace.',
        'The full-width recording takes over the page at readable scale.',
        'Play or pause the native recording',
      ),
      c(
        'artifact',
        'The working result',
        'An idea you can use.',
        'A focused tool opens beside the conversation that created it.',
        'The browser preview expands in place, keeping its tabs and controls.',
        'Interact with the sample app',
      ),
      c(
        'closing',
        'The invitation',
        'Bring the whole idea.',
        'There is room for the work around it.',
        'A crisp black closing section uses a small brand mark and useful navigation.',
        'Return to the beginning',
      ),
    ],
  },
  {
    id: 'monument',
    number: '05',
    name: 'Monument',
    category: 'Cobalt architecture · aperture reveal',
    group: 'Dark',
    layout: 'monument',
    header: 'line',
    dark: true,
    image: scenes.monument,
    story: 'research',
    result: 'table',
    headline: 'Think beyond\nthe frame.',
    subtitle: 'A workspace that opens up as far as your thinking goes.',
    thesis:
      'The architectural opening is a mechanism: it frames the product, guides expansion, and returns in the closing composition.',
    source: 'Cobalt Dither Monumentalism',
    borrow:
      'Tasklify’s clear foreground; native OpenSwarm table and context anatomy.',
    palette: ['#143ba6', '#eff2fa', '#111d55'],
    signature:
      'A rectangular aperture reveals the workspace through a depth-of-field transition; every UI surface remains straight.',
    frames: [
      c(
        'hero',
        'The threshold',
        'Think beyond the frame.',
        'A workspace that opens up as far as your thinking goes.',
        'Centered type sits inside the architectural opening. The product rises from a masked lower edge.',
        'Open the research workspace',
      ),
      c(
        'menu',
        'Explore the structure',
        'One platform. Many ways in.',
        'Find the right entry point for the work you want to do.',
        'A wide menu aligns to the portal’s edges, with a useful product preview.',
        'Explore the platform menu',
      ),
      c(
        'sources',
        'The foundation',
        'Build on what you know.',
        'Put source material where every agent can use it.',
        'The source library occupies the opening, with one large document preview.',
        'Open a source',
      ),
      c(
        'canvas',
        'Open the frame',
        'Context without the walls.',
        'The research and analysis stay in view together.',
        'The aperture widens into a full workspace; a soft foreground blur clears at the edges.',
        'Switch workspace views',
      ),
      c(
        'artifact',
        'Clear perspective',
        'See what changes the decision.',
        'A comparison table makes the differences easy to review.',
        'The table expands to the center, framed by the architecture instead of boxed over it.',
        'Inspect the result',
      ),
      c(
        'closing',
        'The horizon',
        'Your next idea has room to grow.',
        'Make something worth opening up.',
        'The product lowers, revealing the same open horizon beneath a centered action.',
        'Return to the opening',
      ),
    ],
  },
  {
    id: 'signal',
    number: '06',
    name: 'Signal Atlas',
    category: 'Light linework · connected evidence',
    group: 'Graphic',
    layout: 'signal',
    header: 'solid',
    dark: false,
    graphic: 'orbit',
    story: 'research',
    result: 'table',
    headline: 'Find the thread.\nFollow it through.',
    subtitle: 'Connect the details that turn a question into a clear answer.',
    thesis:
      'A populated evidence map replaces the empty cartography. Labeled sources and useful product details give the graphic a reason to exist.',
    source: 'Cohere line drawings / OpenSwarm tethers',
    borrow:
      'Speakeasy’s character precision, without decorative typewriter captions.',
    palette: ['#fcfcfb', '#233538', '#acc4c5'],
    signature:
      'Selecting a source traces its path into the active answer, making context visible.',
    frames: [
      c(
        'hero',
        'The question',
        'Find the thread. Follow it through.',
        'Connect the details that turn a question into a clear answer.',
        'A dense SVG field of labeled source points frames a central native search composer.',
        'Start a research question',
      ),
      c(
        'sources',
        'The evidence map',
        'See where the answer comes from.',
        'Open a source without leaving the question behind.',
        'A selected connection brightens and its source opens in the adjacent pane.',
        'Select an evidence source',
      ),
      c(
        'canvas',
        'The connected view',
        'Follow the work, not the tabs.',
        'Keep the research and the answer visible together.',
        'The map contracts into the edges of a joined native workspace.',
        'Change workspace views',
      ),
      c(
        'workflow',
        'A repeatable method',
        'Keep the process that works.',
        'Turn a useful research sequence into a reusable workflow.',
        'A source-to-analysis timeline expands vertically into editable steps.',
        'Toggle workflow steps',
      ),
      c(
        'artifact',
        'The conclusion',
        'An answer with a clear trail.',
        'A structured comparison keeps the evidence close.',
        'The table comes forward while source connections remain visible at its edge.',
        'Inspect the comparison',
      ),
      c(
        'closing',
        'A new thread',
        'Where will your next question lead?',
        'Bring it into OpenSwarm.',
        'The linework converges around a centered prompt, with a clean compact footer.',
        'Start a new question',
      ),
    ],
  },
  {
    id: 'afterglow',
    number: '07',
    name: 'Afterglow',
    category: 'Dark coastal film · luminous product',
    group: 'Dark',
    layout: 'afterglow',
    header: 'glass',
    dark: true,
    image: scenes.dusk,
    film: A + 'storyboards/afterglow-motion.mp4',
    story: 'launch',
    result: 'brief',
    headline: 'Your next idea\nhas room to grow.',
    subtitle: 'A little space. A shared context. A whole new way to work.',
    thesis:
      'Retain the dark coast, but add a complete native product story and deliberate focus transitions so the atmosphere carries useful work.',
    source: 'Nexora / Capy',
    borrow:
      'OpenSwarm’s dark neutral surfaces; the sampled anchored workspace transitions.',
    palette: ['#111719', '#f4f4ec', '#8a9b9f'],
    signature:
      'The scene stays alive while a translucent outer frame brings the dark native workspace into focus.',
    frames: [
      c(
        'hero',
        'The atmosphere',
        'Your next idea has room to grow.',
        'A little space. A shared context. A whole new way to work.',
        'A centered title and luminous composer sit above the moving coast. The sea remains visible.',
        'Begin the launch example',
      ),
      c(
        'request',
        'First light',
        'Give the idea a starting point.',
        'Ask for the plan, then see the work begin.',
        'The composer opens into chat with the native ToolUI Plan, in a large dark surface.',
        'Run the sample request',
      ),
      c(
        'sources',
        'Bring the context',
        'Your files belong in the conversation.',
        'Keep notes, research and drafts together.',
        'A source drawer slides out from the workspace; the landscape behind it softens.',
        'Inspect project sources',
      ),
      c(
        'canvas',
        'A wider horizon',
        'Let the work open up.',
        'The same conversation and draft expand into a shared canvas.',
        'The outer glass frame widens; the two opaque reading surfaces remain straight and legible.',
        'Toggle Focus and Canvas',
      ),
      c(
        'artifact',
        'The useful outcome',
        'Something you can build on.',
        'A clear launch brief, ready for your judgment.',
        'The finished brief brightens against the dark scene while the chat remains nearby.',
        'Read or download the brief',
      ),
      c(
        'closing',
        'Another beginning',
        'There is more to make.',
        'Bring your next idea to OpenSwarm.',
        'The result recedes into the scene; the horizon and centered action close the story.',
        'Return to the opening',
      ),
    ],
  },
  {
    id: 'estuary',
    number: '08',
    name: 'The Estuary',
    category: 'Watercolor · source-to-result story',
    group: 'Light',
    layout: 'estuary',
    header: 'line',
    dark: false,
    image: scenes.estuary,
    story: 'writing',
    result: 'brief',
    headline: 'Many thoughts.\nOne clear direction.',
    subtitle: 'Bring your research together and find the work inside it.',
    thesis:
      'Hand-painted tributaries carry the visual metaphor from scattered sources to one clear document, using paper-native product surfaces.',
    source: 'SEOmade watercolor footer',
    borrow: 'Tasklify product hierarchy; the native file drawer.',
    palette: ['#fbfaf5', '#243e3d', '#9dbbb6'],
    signature:
      'The painted edge dissolves into a full document surface; sources gather along one side.',
    frames: [
      c(
        'hero',
        'The tributaries',
        'Many thoughts. One clear direction.',
        'Bring your research together and find the work inside it.',
        'Centered typography sits above a straight workspace emerging from the painted shoreline.',
        'Open a writing project',
      ),
      c(
        'sources',
        'Gather',
        'Bring the useful pieces together.',
        'Read notes and references from one source library.',
        'Sources move into a single orderly drawer, while the illustration continues outside the app.',
        'Choose a source',
      ),
      c(
        'request',
        'Find the current',
        'Give the material a direction.',
        'Turn the research into a first draft with a clear point of view.',
        'A native response appears above the task plan, without decorative typing.',
        'Run the writing example',
      ),
      c(
        'canvas',
        'Work in context',
        'Keep the source beside the sentence.',
        'Read, compare and write in the same workspace.',
        'The page opens like a spread, with a narrow context rail and large editable result.',
        'Inspect the shared workspace',
      ),
      c(
        'artifact',
        'The clear result',
        'A draft with something to say.',
        'Review the structure and decide what comes next.',
        'The painted surroundings soften as the document moves into focus.',
        'Download the draft',
      ),
      c(
        'closing',
        'The next current',
        'Let the next idea find its way.',
        'One workspace for your unfinished thinking.',
        'The same watercolor becomes the footer edge, with useful links and no giant wordmark.',
        'Return to the opening',
      ),
    ],
  },
  {
    id: 'skies',
    number: '09',
    name: 'Other Skies',
    category: 'Lilac architecture · layered portals',
    group: 'Light',
    layout: 'skies',
    header: 'island',
    dark: false,
    image: scenes.skies,
    story: 'build',
    result: 'app',
    headline: 'Open a different\nkind of workspace.',
    subtitle: 'Give your ideas the tools, context and space to become real.',
    thesis:
      'Different work surfaces occupy one inhabited landscape. Portals organize depth without tilting or shrinking the actual interface.',
    source: 'Decagon / Meristem',
    borrow:
      'Native browser and app surfaces; spatial continuity from the video references.',
    palette: ['#dad8f2', '#252441', '#c1bfdc'],
    signature:
      'Doorway-shaped masks open into full native panes; an app preview comes through the center.',
    frames: [
      c(
        'hero',
        'A new opening',
        'Open a different kind of workspace.',
        'Give your ideas the tools, context and space to become real.',
        'The centered heading sits in open sky; a straight product frame enters through the lower portal.',
        'Start the build example',
      ),
      c(
        'apps',
        'Find your tools',
        'Every idea needs a few good tools.',
        'Connect what you use or create the app you need.',
        'A native app grid fills the portal; selecting an app brings its details forward.',
        'Inspect an app',
      ),
      c(
        'request',
        'Make the request',
        'Describe the thing you wish existed.',
        'Start with the job it should help you do.',
        'The conversation opens from the composer into a large foreground window.',
        'Run the app-building example',
      ),
      c(
        'canvas',
        'The shared space',
        'Build with the whole idea in view.',
        'Conversation, files and browser live in the same workspace.',
        'The foreground window widens; a browser opens beside it at full reading scale.',
        'Switch workspace layouts',
      ),
      c(
        'artifact',
        'Try the result',
        'A useful idea, made tangible.',
        'Explore the small tool and shape what it does next.',
        'The browser preview expands through the center aperture.',
        'Use the sample task app',
      ),
      c(
        'closing',
        'Another doorway',
        'What would you make next?',
        'OpenSwarm gives the idea somewhere to go.',
        'The scene returns to its architectural depth around a centered action.',
        'Start again',
      ),
    ],
  },
  {
    id: 'threshold',
    number: '10',
    name: 'White Threshold',
    category: 'Chalk architecture · generous light',
    group: 'Light',
    layout: 'threshold',
    header: 'line',
    dark: false,
    image: scenes.arch,
    story: 'operations',
    result: 'schedule',
    headline: 'Open space.\nClear progress.',
    subtitle: 'Bring your team’s work into one connected view.',
    thesis:
      'White architecture and blue reflections create a structured light direction. A full product window fits the opening with architectural precision.',
    source: 'Cobalt monument reference / Cohere',
    borrow: 'Nexora’s section pacing; native workflow steps.',
    palette: ['#f8fafb', '#1d3445', '#a3bbd1'],
    signature:
      'Horizontal shutters uncover a workflow, then reveal its result at the same anchor point.',
    frames: [
      c(
        'hero',
        'The opening',
        'Open space. Clear progress.',
        'Bring your team’s work into one connected view.',
        'A centered introduction and aligned product window share the colonnade’s symmetry.',
        'Explore the operations story',
      ),
      c(
        'menu',
        'Find your way',
        'A clear path into the platform.',
        'Choose a capability by the job you want to do.',
        'The navigation opens into an architectural grid with product previews.',
        'Explore the mega menu',
      ),
      c(
        'sources',
        'Shared context',
        'Start with the same information.',
        'Keep project notes, schedules and updates together.',
        'A clear source drawer expands within the window, not over the landscape.',
        'Read a project source',
      ),
      c(
        'workflow',
        'A working rhythm',
        'Make the recurring work flow.',
        'Set the steps once and keep the process visible.',
        'A vertical workflow reveals each handoff as one connected sequence.',
        'Toggle workflow steps',
      ),
      c(
        'artifact',
        'A visible plan',
        'Know what happens next.',
        'A schedule connects the work to its next action.',
        'The schedule expands into the same central window with a soft contextual blur.',
        'Inspect the schedule',
      ),
      c(
        'closing',
        'Keep moving',
        'Make space for better work.',
        'Start with the work in front of you.',
        'The product recedes into the white opening; a compact footer follows the reflection line.',
        'Return to the first scene',
      ),
    ],
  },
];
const actionFor: Record<ChapterKind, string> = {
  hero: 'Start the example',
  menu: 'Open the Platform menu',
  request: 'Run the sample request',
  sources: 'Select and inspect a source',
  canvas: 'Switch Focus and Canvas',
  apps: 'Select an app and inspect its details',
  workflow: 'Toggle a workflow step',
  artifact: 'Explore or download the result',
  evidence: 'Switch between the supplied app captures and scroll to inspect',
  film: 'Play the native product recording',
  closing: 'Return to the opening',
};
type Extra = Omit<Direction, 'frames' | 'number' | 'palette'> & {
  palette?: string[];
  chapters: [ChapterKind, string, string, string][];
};
const extra: Extra[] = [
  {
    id: 'current',
    name: 'Current',
    category: 'Cyan optics · edge-to-edge product',
    group: 'Dark',
    layout: 'current',
    header: 'island',
    dark: true,
    image: scenes.current,
    story: 'research',
    result: 'table',
    headline: 'Follow the idea.\nKeep the context.',
    subtitle:
      'A connected workspace for questions that deserve a deeper answer.',
    thesis:
      'An optical current leads the eye into a wide native workspace. The imagery has a physical relationship to the active pane.',
    source: 'Meristem / Cohere',
    borrow: 'Spectral material with a crisp dark native interface.',
    signature:
      'A fluid mask uncovers the source drawer; the workspace stays fixed while its reading focus changes.',
    chapters: [
      [
        'hero',
        'The current',
        'Follow the idea. Keep the context.',
        'An optical ribbon frames a centered title and a broad straight app window.',
      ],
      [
        'sources',
        'Go deeper',
        'Open the source, stay with the question.',
        'The source drawer pushes the conversation aside, keeping both readable.',
      ],
      [
        'request',
        'Direct the research',
        'Ask for the differences that matter.',
        'A compact native tool group expands into a structured comparison plan.',
      ],
      [
        'canvas',
        'Keep both views',
        'The question and the evidence, together.',
        'The workspace divides along the curve of the background while panes stay rectangular.',
      ],
      [
        'artifact',
        'Find the signal',
        'A clear comparison emerges.',
        'The result table takes focus; the source column stays attached.',
      ],
      [
        'closing',
        'The next current',
        'Keep the good questions coming.',
        'The optical field passes behind a centered closing action and compact footer.',
      ],
    ],
  },
  {
    id: 'greenways',
    name: 'Greenways',
    category: 'Living green · wide photographic canvas',
    group: 'Light',
    layout: 'greenways',
    header: 'solid',
    dark: false,
    image: scenes.green,
    story: 'operations',
    result: 'schedule',
    headline: 'Good work\nfinds a way.',
    subtitle: 'Your tools, your team and your next step in one place.',
    thesis:
      'A rich landscape forms a broad lower stage while crisp white typography and product chapters supply structure.',
    source: 'Cohere North',
    borrow: 'Tasklify’s centered clarity; native workflow surfaces.',
    signature:
      'A landscape reveal follows the first scroll; workflow steps align with the visual path.',
    chapters: [
      [
        'hero',
        'The path',
        'Good work finds a way.',
        'A centered white opening leads into a wide green scene containing one native window.',
      ],
      [
        'apps',
        'Connected tools',
        'Bring the tools you already use.',
        'The app library opens in a full-width white section, with a focused detail rail.',
      ],
      [
        'workflow',
        'Set the rhythm',
        'Turn recurring work into a clear process.',
        'Steps reveal along one vertical line with visible state changes.',
      ],
      [
        'canvas',
        'The whole project',
        'A shared view of the work.',
        'The workflow opens beside the conversation in a large unified shell.',
      ],
      [
        'artifact',
        'The next step',
        'Make the plan easy to follow.',
        'A clear schedule moves forward while the green landscape softens behind it.',
      ],
      [
        'closing',
        'Keep moving',
        'A little more room to do good work.',
        'The landscape returns beneath centered copy and an understated footer.',
      ],
    ],
  },
  {
    id: 'higher',
    name: 'Higher Ground',
    category: 'Cloud panorama · soft optical depth',
    group: 'Light',
    layout: 'higher',
    header: 'glass',
    dark: false,
    image: scenes.cloud,
    story: 'writing',
    result: 'brief',
    headline: 'See the idea\nmore clearly.',
    subtitle: 'Space to research, write and connect the pieces.',
    thesis:
      'Cloud depth provides atmosphere while large, straight native windows establish clarity. Glass belongs to outer framing only.',
    source: 'Tasklify cloud world / Cohere',
    borrow: 'Meristem’s continuity through imagery and framing.',
    signature:
      'A foreground cloud veil clears from the app; the same document grows through the story.',
    chapters: [
      [
        'hero',
        'A clearer view',
        'See the idea more clearly.',
        'A centered title rests in the pale sky above a wide readable composer.',
      ],
      [
        'request',
        'Begin',
        'Tell OpenSwarm what you are working on.',
        'The app rises vertically from the cloud edge with no perspective tilt.',
      ],
      [
        'sources',
        'Gather context',
        'Bring the references along.',
        'A native source list and full preview replace floating decorative files.',
      ],
      [
        'canvas',
        'Make connections',
        'Think across the whole project.',
        'The shared window expands horizontally into a generous two-pane workspace.',
      ],
      [
        'artifact',
        'The draft',
        'A clear shape for the idea.',
        'The document comes forward while the cloud field remains soft and distant.',
      ],
      [
        'closing',
        'More possibility',
        'See what comes next.',
        'Clouds open around a centered action and a restrained practical footer.',
      ],
    ],
  },
  {
    id: 'blackglass',
    name: 'Black Glass',
    category: 'Obsidian architecture · sharp light',
    group: 'Dark',
    layout: 'blackglass',
    header: 'line',
    dark: true,
    image: scenes.black,
    story: 'build',
    result: 'app',
    headline: 'From a thought\nto a thing.',
    subtitle: 'A workspace for making the tools your work is missing.',
    thesis:
      'Dark architectural planes and a single luminous opening create a strong frame for a usable app-building story.',
    source: 'Cobalt architecture / Capy',
    borrow: 'Native browser panes and source-preserving transitions.',
    signature:
      'A hard rectangular mask opens around the product; soft blur separates the environment from the working app.',
    chapters: [
      [
        'hero',
        'The possibility',
        'From a thought to a thing.',
        'A centered headline precedes a product window framed by a luminous opening.',
      ],
      [
        'request',
        'The brief',
        'Describe the tool you need.',
        'The request develops into the real supplied ToolUI Plan at reading scale.',
      ],
      [
        'apps',
        'Choose the pieces',
        'Connect what the tool needs.',
        'App details appear beside the library instead of in a modal pile.',
      ],
      [
        'canvas',
        'Build in view',
        'Keep the build and the conversation together.',
        'The browser expands beside the chat in a stable native split layout.',
      ],
      [
        'artifact',
        'Use it',
        'Make the idea useful.',
        'The sample task app takes over the opening, with working controls.',
      ],
      [
        'closing',
        'The next opening',
        'There is another way to work.',
        'The dark threshold stays present around a small centered closing action.',
      ],
    ],
  },
  {
    id: 'aperture',
    name: 'Aperture',
    category: 'Black and white · expanding frame',
    group: 'Graphic',
    layout: 'aperture',
    header: 'solid',
    dark: true,
    graphic: 'grid',
    story: 'build',
    result: 'app',
    headline: 'Make room\nfor the work.',
    subtitle: 'A canvas that expands with the thing you are making.',
    thesis:
      'The website’s main frame behaves like the product: it opens, divides, reunites and brings the result into focus.',
    source: 'Cohere / supplied expanding-panel motion',
    borrow: 'OpenSwarm layout controls and window anatomy.',
    signature:
      'Black shutters retract into the edges of a single full-scale app frame.',
    chapters: [
      [
        'hero',
        'The frame',
        'Make room for the work.',
        'Large centered white type sits above an intentionally cropped native window.',
      ],
      [
        'menu',
        'The index',
        'Every part of the platform, in view.',
        'The solid masthead unfolds into a typographic mega menu and live preview.',
      ],
      [
        'request',
        'The starting point',
        'A useful tool starts with a clear need.',
        'The opening frame widens to reveal the composer and a real plan component.',
      ],
      [
        'film',
        'The native canvas',
        'Watch the workspace open up.',
        'Actual OpenSwarm footage replaces the illustrative surface within the same frame.',
      ],
      [
        'artifact',
        'The useful thing',
        'Now put the idea to work.',
        'The frame expands into a sample app with working task controls.',
      ],
      [
        'closing',
        'An open ending',
        'What will you make room for?',
        'A final black frame holds centered copy and a small useful footer.',
      ],
    ],
  },
  {
    id: 'crossfade',
    name: 'Crossfade',
    category: 'Spectral diptych · joined workspaces',
    group: 'Light',
    layout: 'crossfade',
    header: 'line',
    dark: false,
    image: scenes.living,
    story: 'writing',
    result: 'brief',
    headline: 'Different thoughts.\nShared direction.',
    subtitle: 'Bring independent thinking into one connected workspace.',
    thesis:
      'A two-part composition becomes one reading surface. Spectral material links the sections without washing over the native interface.',
    source: 'Meristem / Cohere split compositions',
    borrow: 'Native joined conversation and document views.',
    signature:
      'Two image fields slide apart as two native workspaces meet at a shared edge.',
    chapters: [
      [
        'hero',
        'Two perspectives',
        'Different thoughts. Shared direction.',
        'A centered headline bridges two cropped spectral image fields and one native composer.',
      ],
      [
        'sources',
        'The material',
        'Start with more than one point of view.',
        'The source drawer provides a clear switch between references.',
      ],
      [
        'request',
        'The synthesis',
        'Find the thread that connects them.',
        'A writing request opens into a structured native plan and visible source group.',
      ],
      [
        'canvas',
        'The meeting point',
        'Work across both sides of the idea.',
        'The two surfaces meet as one joined workspace with a shared header.',
      ],
      [
        'artifact',
        'The common shape',
        'Something neither thought could make alone.',
        'The finished document expands across the seam while context stays close.',
      ],
      [
        'closing',
        'A new conversation',
        'Bring another perspective.',
        'The diptych reconnects around a centered call to action.',
      ],
    ],
  },
  {
    id: 'relay',
    name: 'Relay',
    category: 'Dark linework · visible handoffs',
    group: 'Graphic',
    layout: 'relay',
    header: 'island',
    dark: true,
    graphic: 'orbit',
    story: 'operations',
    result: 'schedule',
    headline: 'Keep the work\nmoving together.',
    subtitle: 'Agents, tools and decisions connected from start to finish.',
    thesis:
      'The handoff is the visual identity. Labeled connections carry work between native surfaces and make each stage understandable.',
    source: 'OpenSwarm tethers / Cohere diagrams',
    borrow: 'Capy’s integrated dark workspace.',
    signature:
      'A traveling connection reaches a pane just as its state changes; motion explains the handoff.',
    chapters: [
      [
        'hero',
        'The handoff',
        'Keep the work moving together.',
        'A substantial connected network surrounds the centered composer.',
      ],
      [
        'workflow',
        'The sequence',
        'See how the pieces depend on each other.',
        'A native workflow opens with named steps and visible completion states.',
      ],
      [
        'apps',
        'The connections',
        'Give each step the right tools.',
        'Selecting an app brings its capabilities into the adjacent detail pane.',
      ],
      [
        'canvas',
        'The shared view',
        'Every handoff stays in context.',
        'The workflow and conversation align inside a unified dark window.',
      ],
      [
        'artifact',
        'The outcome',
        'A plan with a clear next action.',
        'The schedule comes forward while the final connection settles beside it.',
      ],
      [
        'closing',
        'The next run',
        'Keep a good process going.',
        'The connected field resolves into one centered action and useful links.',
      ],
    ],
  },
  {
    id: 'folio',
    name: 'Open Folio',
    category: 'Paper white · document-led composition',
    group: 'Light',
    layout: 'folio',
    header: 'line',
    dark: false,
    graphic: 'grid',
    story: 'writing',
    result: 'brief',
    headline: 'Give the idea\na place to land.',
    subtitle: 'Research, write and refine without losing the thread.',
    thesis:
      'Folded paper introduces the identity before the document becomes a working surface. A clean product anatomy gives the later chapters weight.',
    source: 'Cohere editorial scale / native file view',
    borrow: 'SEOmade’s restrained white page rhythm.',
    signature:
      'A real document tab unfolds into a full page while the chat stays in the margin.',
    chapters: [
      [
        'hero',
        'The blank page',
        'Give the idea a place to land.',
        'Centered type leads into one large native document and a compact attached composer.',
      ],
      [
        'sources',
        'The margin notes',
        'Keep the references within reach.',
        'The source drawer opens as a document margin with an adjacent preview.',
      ],
      [
        'request',
        'The first pass',
        'Turn the notes into a clear draft.',
        'The native plan develops above the composer without moving the page.',
      ],
      [
        'canvas',
        'The working spread',
        'Write with the context beside you.',
        'The page becomes a generous conversation/document spread.',
      ],
      [
        'artifact',
        'The finished shape',
        'A draft you can take further.',
        'The document expands to a readable full-width focus view.',
      ],
      [
        'closing',
        'Another page',
        'Start the next chapter.',
        'The final page closes into a quiet centered action and compact footer.',
      ],
    ],
  },
  {
    id: 'aurora',
    name: 'Aurora',
    category: 'Dark natural light · focused depth',
    group: 'Dark',
    layout: 'aurora',
    header: 'glass',
    dark: true,
    image: scenes.aurora,
    story: 'research',
    result: 'table',
    headline: 'Find clarity\nin the complex.',
    subtitle: 'Bring the details into focus with a connected AI workspace.',
    thesis:
      'A photographic ribbon of light creates atmosphere around a crisp dark interface. The product is the brightest readable object.',
    source: 'Nexora / Capy',
    borrow: 'Meristem’s material continuity and native source panels.',
    signature:
      'Focus passes from sources to synthesis as the background light stays continuous.',
    chapters: [
      [
        'hero',
        'The signal',
        'Find clarity in the complex.',
        'Centered type and a luminous native composer sit over the distant ocean.',
      ],
      [
        'sources',
        'The details',
        'Bring the evidence into view.',
        'A full source preview appears within the native window, with clear selected state.',
      ],
      [
        'request',
        'The question',
        'Ask for a useful comparison.',
        'Grouped tool activity opens below the request in a readable dark pane.',
      ],
      [
        'canvas',
        'The perspectives',
        'Look at the question from both sides.',
        'The joined workspace reveals research and synthesis without changing anchors.',
      ],
      [
        'artifact',
        'The clarity',
        'See the difference that matters.',
        'A neutral comparison table takes focus against the photographic light.',
      ],
      [
        'closing',
        'The next signal',
        'Bring your next question.',
        'The aurora continues above a centered call to action and small footer.',
      ],
    ],
  },
  {
    id: 'botanical',
    name: 'Growing Ideas',
    category: 'Botanical ink · connected branches',
    group: 'Light',
    layout: 'botanical',
    header: 'island',
    dark: false,
    image: scenes.botanical,
    story: 'launch',
    result: 'brief',
    headline: 'Give good ideas\nroom to grow.',
    subtitle: 'One connected place for the thinking and work around them.',
    thesis:
      'Botanical linework gives branching research an organic structure while the actual workspace stays familiar and precise.',
    source: 'SEOmade / Meristem',
    borrow: 'Native shared sources and file tabs.',
    signature:
      'Fine branch strokes meet the source drawer, then withdraw as the document takes focus.',
    chapters: [
      [
        'hero',
        'The seed',
        'Give good ideas room to grow.',
        'Centered copy sits in clear paper space framed by painted reeds and water.',
      ],
      [
        'menu',
        'The branches',
        'Find the part of OpenSwarm you need.',
        'A light island menu opens into purposeful capabilities and an illustrated preview.',
      ],
      [
        'sources',
        'The roots',
        'A stronger idea starts with context.',
        'The source library gathers notes and references in one native drawer.',
      ],
      [
        'canvas',
        'The growth',
        'Let the project open out.',
        'A straight workspace grows horizontally into a shared conversation and plan.',
      ],
      [
        'artifact',
        'The shape',
        'A clear plan for the next step.',
        'The result stays large while botanical edges dissolve into paper.',
      ],
      [
        'closing',
        'Keep growing',
        'There is more in that idea.',
        'Painted branches frame the centered closing action and useful footer.',
      ],
    ],
  },
  {
    id: 'assembly',
    name: 'Assembly',
    category: 'Dark modular · product architecture',
    group: 'Dark',
    layout: 'assembly',
    header: 'solid',
    dark: true,
    graphic: 'grid',
    story: 'build',
    result: 'app',
    headline: 'Put the pieces\nto work.',
    subtitle: 'Agents, apps and context. A workspace made for making.',
    thesis:
      'The page is assembled from substantial functional product surfaces. A modular graphic structure supports the build narrative.',
    source: 'Cohere / native OpenSwarm',
    borrow: 'Supplied anchored reflow videos.',
    signature:
      'Large modules dock into one shared shell, keeping their headers and content visible.',
    chapters: [
      [
        'hero',
        'The pieces',
        'Put the pieces to work.',
        'Centered bold type sits over a broad dark app shell with a visible composer.',
      ],
      [
        'apps',
        'The parts',
        'Choose what the job needs.',
        'A native application library opens with a clear selected-app detail view.',
      ],
      [
        'request',
        'The instructions',
        'Describe the missing tool.',
        'A build request becomes a concrete plan inside the same shell.',
      ],
      [
        'workflow',
        'The assembly',
        'See how the work comes together.',
        'Steps connect vertically and respond as their state changes.',
      ],
      [
        'artifact',
        'The working tool',
        'Now use what you made.',
        'The browser module becomes a usable task app while retaining its tab bar.',
      ],
      [
        'closing',
        'The next build',
        'Make something useful.',
        'The modular frame resolves into a centered invitation and compact navigation.',
      ],
    ],
  },
  {
    id: 'tidal',
    name: 'Tidal',
    category: 'Light coast · horizontal chapter rail',
    group: 'Light',
    layout: 'tidal',
    header: 'line',
    dark: false,
    image: scenes.coast,
    film: A + 'homepage-review/swarm-coast-motion.mp4',
    story: 'travel',
    result: 'schedule',
    headline: 'Bring the plan\ninto view.',
    subtitle: 'Gather the details, compare the options and make the next move.',
    thesis:
      'A wide coastal image and a horizontal page rhythm organize the planning story. Product details stay large and front-facing.',
    source: 'Tasklify / SEOmade',
    borrow: 'Native calendar and source list structure.',
    signature:
      'Each chapter moves along the horizon while the product’s selected tab stays anchored.',
    chapters: [
      [
        'hero',
        'The destination',
        'Bring the plan into view.',
        'Centered copy opens above a wide landscape and a native planning window.',
      ],
      [
        'request',
        'The request',
        'Tell OpenSwarm what the plan needs.',
        'The composer expands into a readable planning conversation.',
      ],
      [
        'sources',
        'The details',
        'Keep the useful information together.',
        'Options appear in one source drawer with a detailed selection view.',
      ],
      [
        'canvas',
        'The whole plan',
        'See the choices beside the schedule.',
        'The workspace expands into an aligned source and schedule split.',
      ],
      [
        'artifact',
        'The itinerary',
        'A plan that is easy to follow.',
        'The schedule comes forward with selectable days and clear details.',
      ],
      [
        'closing',
        'The next move',
        'Make room for what comes next.',
        'The coastline continues into a centered footer without interface overlays.',
      ],
    ],
  },
  {
    id: 'prism',
    name: 'Prism Index',
    category: 'Cobalt and paper · editorial image grid',
    group: 'Graphic',
    layout: 'prism',
    header: 'solid',
    dark: false,
    image: scenes.monument,
    story: 'research',
    result: 'table',
    headline: 'A clearer view\nof every possibility.',
    subtitle:
      'Research across your tools, then bring the useful differences together.',
    thesis:
      'A precise editorial index introduces the platform with bold cobalt image crops and neutral product detail panels.',
    source: 'Meristem brand grid / Cohere',
    borrow: 'Native table and source switching.',
    signature:
      'Image tiles become apertures for product details; one selected tile expands into the working view.',
    chapters: [
      [
        'hero',
        'The index',
        'A clearer view of every possibility.',
        'Centered type sits above a graphic cobalt-and-paper grid with a large app preview.',
      ],
      [
        'menu',
        'Choose a way in',
        'The platform, clearly organized.',
        'A structured mega menu pairs each capability with a useful visual preview.',
      ],
      [
        'sources',
        'Look closely',
        'Every source deserves a proper view.',
        'The selected source expands from a row into the adjacent reading pane.',
      ],
      [
        'canvas',
        'Put it together',
        'Compare with the context intact.',
        'The image grid resolves into a clear two-pane native workspace.',
      ],
      [
        'artifact',
        'The distinction',
        'Make the differences easy to see.',
        'A broad comparison table replaces the preview tile without changing its anchor.',
      ],
      [
        'closing',
        'A new view',
        'Open another possibility.',
        'The cobalt grid becomes a restrained footer frame around the final action.',
      ],
    ],
  },
  {
    id: 'silhouette',
    name: 'Silhouette',
    category: 'Black ASCII · architectural density',
    group: 'ASCII',
    layout: 'silhouette',
    header: 'line',
    dark: true,
    graphic: 'contour',
    story: 'build',
    result: 'app',
    headline: 'An open system\nfor your ideas.',
    subtitle:
      'Work with AI, build useful tools, and keep the whole project together.',
    thesis:
      'A dense character-built aperture gives the opening structure and scale. Later chapters reveal the product within the same architectural frame.',
    source: 'Speakeasy / cobalt monument reference',
    borrow: 'Native browser and chat anatomy; no pixel-game rendering.',
    signature:
      'The character aperture grows around the straight app window and settles at its edges.',
    chapters: [
      [
        'hero',
        'The silhouette',
        'An open system for your ideas.',
        'A large character-built frame surrounds the centered headline and native composer.',
      ],
      [
        'request',
        'The first instruction',
        'Start with a job worth doing.',
        'The composer develops into a readable chat and supplied plan component.',
      ],
      [
        'apps',
        'The tools',
        'Bring the right capabilities together.',
        'A native app library occupies the character aperture with clear selected state.',
      ],
      [
        'canvas',
        'The open view',
        'Keep the whole build visible.',
        'The app shell opens horizontally while the character field retains its density.',
      ],
      [
        'artifact',
        'The useful result',
        'A tool that belongs to your work.',
        'A working browser preview fills the aperture, with the chat still attached.',
      ],
      [
        'closing',
        'The next shape',
        'What will you build into it?',
        'The character frame closes around a centered call to action.',
      ],
    ],
  },
  {
    id: 'daybreak',
    name: 'Daybreak',
    category: 'White-to-dark coast · chapter contrast',
    group: 'Light',
    layout: 'daybreak',
    header: 'solid',
    dark: false,
    image: scenes.dusk,
    film: A + 'storyboards/afterglow-motion.mp4',
    story: 'launch',
    result: 'brief',
    headline: 'A new way\nto get there.',
    subtitle: 'From scattered thoughts to a clear next step, in one workspace.',
    thesis:
      'A bright editorial opening gives way to a dark scenic product chapter. Contrast creates pace while the same components provide continuity.',
    source: 'Nexora section rhythm / Cohere',
    borrow: 'OpenSwarm flat-to-canvas behavior.',
    signature:
      'A dark image band expands into a full scene as the native workspace grows from it.',
    chapters: [
      [
        'hero',
        'The first light',
        'A new way to get there.',
        'A large title sits above a wide dark coastal band, with the invitation aligned beside the copy.',
      ],
      [
        'request',
        'The starting point',
        'Put the idea into words.',
        'The native composer opens into a launch conversation inside the image band.',
      ],
      [
        'sources',
        'The context',
        'Bring what you already know.',
        'The app opens a source drawer without adding floating cards.',
      ],
      [
        'canvas',
        'The wider view',
        'Give the work room to happen.',
        'The dark scene fills the frame as the workspace expands to two panes.',
      ],
      [
        'artifact',
        'The clear step',
        'A plan worth moving forward with.',
        'The neutral document brightens against the dark coast.',
      ],
      [
        'closing',
        'The next morning',
        'Start something worth finishing.',
        'A white closing panel returns beneath the dark horizon with concise links.',
      ],
    ],
  },
  {
    id: 'weave',
    name: 'Weave',
    category: 'Light ASCII · structured collective motion',
    group: 'ASCII',
    layout: 'weave',
    header: 'glass',
    dark: false,
    graphic: 'weave',
    story: 'operations',
    result: 'schedule',
    headline: 'Separate threads.\nShared progress.',
    subtitle: 'Bring your tools and recurring work into one connected system.',
    thesis:
      'Dense flowing glyphs form woven bands around meaningful workflow surfaces. The layout has rhythm, density and real product content.',
    source: 'Speakeasy / OpenSwarm workflow tethers',
    borrow: 'Cohere’s light geometric diagrams.',
    signature:
      'Character bands interlock as workflow steps connect, then open around the result.',
    chapters: [
      [
        'hero',
        'The threads',
        'Separate threads. Shared progress.',
        'Woven character bands frame a centered title and a substantial native composer.',
      ],
      [
        'apps',
        'The connections',
        'Bring the tools into the same flow.',
        'A native app list opens with an adjacent capability detail panel.',
      ],
      [
        'workflow',
        'The pattern',
        'Build a process you can follow.',
        'Steps join into one vertical sequence with visible state changes.',
      ],
      [
        'canvas',
        'The shared work',
        'Keep every handoff in view.',
        'The workflow and chat dock into a wide stable workspace.',
      ],
      [
        'artifact',
        'The progress',
        'Know what happens next.',
        'The schedule resolves in the foreground while the weave stays at the edges.',
      ],
      [
        'closing',
        'Continue',
        'Keep the useful work connected.',
        'The glyph bands settle around a centered invitation and compact footer.',
      ],
    ],
  },
  {
    id: 'blueprint',
    name: 'Blue Hour',
    category: 'Architectural dusk · full-screen app stage',
    group: 'Dark',
    layout: 'bluehour',
    header: 'glass',
    dark: true,
    image: scenes.black,
    story: 'operations',
    result: 'schedule',
    headline: 'A clear space\nfor complex work.',
    subtitle: 'Agents and workflows that keep the context together.',
    thesis:
      'A cinematic architectural environment frames a product-heavy story. The interface occupies the center with confident scale.',
    source: 'Cobalt architecture / Nexora',
    borrow: 'Native dark workflow and layout anatomy.',
    signature:
      'A foreground veil clears around a large workspace; handoffs shift focus without moving the entire stage.',
    chapters: [
      [
        'hero',
        'The stage',
        'A clear space for complex work.',
        'Centered typography sits above a wide native workspace in the dark opening.',
      ],
      [
        'menu',
        'The entry points',
        'Find the tools for your work.',
        'A frosted mega menu reveals capabilities with an enlarged product preview.',
      ],
      [
        'workflow',
        'The process',
        'Put the recurring work in order.',
        'A native workflow fills the stage with clear steps and handoffs.',
      ],
      [
        'canvas',
        'The context',
        'Keep the bigger picture readable.',
        'The workflow joins its conversation inside one straight wide window.',
      ],
      [
        'artifact',
        'The next action',
        'A shared plan for what comes next.',
        'The schedule moves into focus while the surrounding scene remains softly lit.',
      ],
      [
        'closing',
        'The next project',
        'Bring the complicated part.',
        'The architecture opens around a centered closing action.',
      ],
    ],
  },
  {
    id: 'airlight',
    name: 'Airlight',
    category: 'Cloud and paper · expansive native product',
    group: 'Light',
    layout: 'airlight',
    header: 'island',
    dark: false,
    image: scenes.cloud,
    story: 'build',
    result: 'app',
    headline: 'Your ideas,\nwith more room.',
    subtitle: 'A place to research, build and make the next thing happen.',
    thesis:
      'A large white product shell floats within a broad cloud field. The design earns lightness through scale and clear hierarchy, not emptiness.',
    source: 'Tasklify / Cohere',
    borrow: 'Native sidebar, file tabs and app preview.',
    signature:
      'The centered composer expands into a full desktop shell; the cloud layer fades behind opaque reading surfaces.',
    chapters: [
      [
        'hero',
        'Room to begin',
        'Your ideas, with more room.',
        'A centered introduction leads into a broad white native shell over soft clouds.',
      ],
      [
        'request',
        'The possibility',
        'Describe the app you need.',
        'The composer opens vertically into chat, tool groups and a supplied plan.',
      ],
      [
        'sources',
        'The inputs',
        'Bring the details that make it yours.',
        'A file drawer opens inside the shell with a full preview.',
      ],
      [
        'film',
        'The workspace',
        'See how OpenSwarm holds the project.',
        'The actual canvas recording fills the same large frame.',
      ],
      [
        'artifact',
        'The working idea',
        'Make something you can use.',
        'A task app opens inside the native browser pane with working controls.',
      ],
      [
        'closing',
        'A little more space',
        'Make room for the next thing.',
        'The shell fades into the lower cloud bank beneath a centered action.',
      ],
    ],
  },
  {
    id: 'continuum',
    name: 'Continuum',
    category: 'Immersive cyan · persistent workspace',
    group: 'Dark',
    layout: 'continuum',
    header: 'line',
    dark: true,
    image: scenes.current,
    story: 'writing',
    result: 'brief',
    headline: 'Keep thinking.\nKeep the context.',
    subtitle:
      'A workspace that holds the whole thread, from research to finished work.',
    thesis:
      'A flowing optical opening leads into one continuous product surface. The background shifts its emphasis while the work retains its place.',
    source: 'Meristem / supplied continuity motion',
    borrow: 'Native context drawer and document split view.',
    signature:
      'The same window persists across every chapter; only its internal layout and focus change.',
    chapters: [
      [
        'hero',
        'The thread',
        'Keep thinking. Keep the context.',
        'Centered type and a large dark composer sit within a broad optical field.',
      ],
      [
        'request',
        'The first thought',
        'Start wherever the idea is.',
        'The same composer expands into a writing conversation.',
      ],
      [
        'sources',
        'The context',
        'Keep the reference with the thought.',
        'The source drawer opens from the current window, preserving the conversation.',
      ],
      [
        'canvas',
        'The continuation',
        'Write across the whole project.',
        'The document opens alongside the chat within one shared shell.',
      ],
      [
        'artifact',
        'The result',
        'A clearer version of the idea.',
        'The document takes focus while its source and conversation remain attached.',
      ],
      [
        'closing',
        'The next thread',
        'There is always more to connect.',
        'The same window settles beneath a centered closing action and compact footer.',
      ],
    ],
  },
  {
    id: 'confluence',
    name: 'Confluence',
    category: 'Painted landscape · rich product spread',
    group: 'Light',
    layout: 'confluence',
    header: 'solid',
    dark: false,
    image: scenes.botanical,
    story: 'research',
    result: 'table',
    headline: 'Bring it together.\nSee what changes.',
    subtitle: 'Connect independent sources and find a clearer way forward.',
    thesis:
      'A richly painted landscape anchors a dense, useful research story. Native sources and comparisons provide the structure.',
    source: 'SEOmade / Cohere editorial spreads',
    borrow: 'Native source previews and table comparison.',
    signature:
      'Sources gather along a painted river edge; the result grows into a full-width product spread.',
    chapters: [
      [
        'hero',
        'The meeting point',
        'Bring it together. See what changes.',
        'Centered typography sits above a painted panorama with a straight native research surface.',
      ],
      [
        'sources',
        'Different sources',
        'More than one way to understand it.',
        'The source library opens with clear selected states and a generous preview.',
      ],
      [
        'menu',
        'Explore the platform',
        'Find a useful way into the work.',
        'The solid header expands into a full capability index with a live visual preview.',
      ],
      [
        'canvas',
        'The connected picture',
        'Keep the differences in view.',
        'The source library and conversation form one expansive workspace.',
      ],
      [
        'artifact',
        'The useful distinction',
        'A comparison you can work with.',
        'The table expands along the river line while painted edges recede.',
      ],
      [
        'closing',
        'The next possibility',
        'See what comes together next.',
        'The landscape carries through the compact footer around a centered invitation.',
      ],
    ],
  },
];
extra.forEach((d, i) => {
  const { chapters, ...rest } = d;
  directions.push({
    ...rest,
    number: String(i + 11).padStart(2, '0'),
    palette:
      d.palette ??
      (d.dark
        ? ['#10171c', '#f4f5f6', '#82aab7']
        : ['#fafbf9', '#243333', '#a8bfcd']),
    frames: chapters.map(([kind, name, title, motion]) =>
      c(
        kind,
        name,
        title,
        kind === 'hero'
          ? d.subtitle
          : kind === 'closing'
            ? 'One workspace for your ideas, agents and apps.'
            : ({
                request:
                  'Give the work a clear starting point, then follow its progress.',
                sources:
                  'Keep the original material beside the work it informs.',
                canvas: 'Conversation, context and output stay connected.',
                apps: 'Connect your tools and create focused apps for the task.',
                workflow: 'Make every step and handoff visible.',
                artifact:
                  'Review the result with its sources still within reach.',
                menu: 'Explore the platform through the work you want to do.',
                film: 'Actual OpenSwarm product footage.',
                evidence: 'Inside the supplied OpenSwarm Evidence Lab.',
              }[kind] ?? ''),
        motion,
        actionFor[kind],
      ),
    ),
  });
});
// Additional real-product chapter, kept separate from illustrative interactions.
for (const direction of directions) {
  if (
    ['common', 'monument', 'signal', 'relay', 'prism', 'continuum'].includes(
      direction.id,
    )
  ) {
    direction.frames.splice(
      direction.frames.length - 1,
      0,
      c(
        'evidence',
        'Inside a real app',
        'The detail is the difference.',
        'A closer look at the supplied OpenSwarm Evidence Lab.',
        'The actual app capture opens at a useful scale. Switch between the two supplied views and scroll through the interface.',
        'Inspect both supplied Evidence Lab views',
      ),
    );
    direction.borrow +=
      ' Supplied Evidence Lab: dense, legible panels and a visible relationship between sources and results.';
  }
  if (
    ['afterglow', 'current', 'skies', 'aurora', 'blueprint', 'higher'].includes(
      direction.id,
    )
  ) {
    direction.borrow +=
      ' Spatial UI references: layered translucent chrome, detached rails, and soft depth around front-facing native content.';
  }
}
for (const direction of directions) {
  const opening = openings[direction.id];
  direction.frames[0].motion = opening.motion;
  direction.frames[0].body = opening.composition;
  direction.frames[0].action = opening.product
    ? 'Explore the native product surface'
    : 'Continue into the product story';
}
export const storyContent: Record<
  Story,
  {
    project: string;
    request: string;
    response: string;
    file: string;
    title: string;
    intro: string;
    steps: string[];
    sources: string[];
  }
> = {
  launch: {
    project: 'Product launch',
    request:
      'Turn these customer interviews into a launch plan. Keep the sources beside the brief.',
    response:
      'I’ll connect the research, identify the first audience and put the launch plan together.',
    file: 'Launch plan.md',
    title: 'A clear path to the first release',
    intro:
      'Start with a small group of design partners. Learn from the way they work, then shape the first release around what matters.',
    steps: [
      'Read the customer interviews',
      'Compare needs and alternatives',
      'Draft the launch plan',
    ],
    sources: ['Customer interviews', 'Product notes', 'Market overview'],
  },
  research: {
    project: 'Market research',
    request:
      'Compare these options. Show the meaningful differences and keep a link to each source.',
    response:
      'I’ll read the sources in parallel, compare the evidence and build a clear side-by-side view.',
    file: 'Comparison.md',
    title: 'The useful differences, in one place',
    intro:
      'Compare fit, effort and tradeoffs using the same criteria. Keep the underlying evidence close to the decision.',
    steps: [
      'Read the source material',
      'Compare the alternatives',
      'Summarize the tradeoffs',
    ],
    sources: ['Research notes', 'Product documentation', 'Team requirements'],
  },
  build: {
    project: 'Team task app',
    request:
      'Build a simple task app for our team. We need owners, priorities and a clear view of what is next.',
    response:
      'I’ll outline the workflow, connect the project context and create a focused task app.',
    file: 'Task app',
    title: 'A shared place for the next step',
    intro:
      'Keep the tasks, owners and decisions in view. Start with the smallest useful version, then refine it around the team.',
    steps: [
      'Understand the workflow',
      'Build the app interface',
      'Review the working preview',
    ],
    sources: ['Team workflow', 'Project requirements', 'Interface notes'],
  },
  operations: {
    project: 'Weekly planning',
    request:
      'Bring the project updates together and create a clear plan for the week. Flag anything that needs a decision.',
    response:
      'I’ll gather the updates, connect the dependencies and prepare a schedule you can review.',
    file: 'Weekly plan.md',
    title: 'A shared plan for the week ahead',
    intro:
      'Bring the recurring work into a clear rhythm. Keep decisions and dependencies visible so the next step is easy to understand.',
    steps: [
      'Gather the project updates',
      'Connect tasks and dependencies',
      'Prepare the weekly schedule',
    ],
    sources: ['Project updates', 'Team availability', 'Meeting notes'],
  },
  travel: {
    project: 'Trip planning',
    request:
      'Help plan three days away. Compare the options, keep the practical details and build an easy itinerary.',
    response:
      'I’ll bring the details together, compare the options and make a schedule you can adjust.',
    file: 'Itinerary.md',
    title: 'A little more space for the trip',
    intro:
      'Keep travel, stays and the day’s plans in one view. Leave room between commitments and keep the useful details close.',
    steps: [
      'Gather the travel details',
      'Compare places and options',
      'Build the three-day plan',
    ],
    sources: ['Travel details', 'Saved places', 'Planning notes'],
  },
  writing: {
    project: 'Research to draft',
    request:
      'Turn these notes into a clear first draft. Keep the sources visible so I can review the reasoning.',
    response:
      'I’ll read the material, find a useful structure and write a first draft with the sources beside it.',
    file: 'First draft.md',
    title: 'A clear shape for the idea',
    intro:
      'Start with the strongest point. Connect the evidence to the claim, then give the reader a useful next step.',
    steps: [
      'Read the notes and references',
      'Develop the outline',
      'Write the first draft',
    ],
    sources: ['Reference notes', 'Working outline', 'Background research'],
  },
};
