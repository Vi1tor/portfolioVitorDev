# Graph Report - portfolioVitorDev  (2026-10-25)

## Corpus Check
- 25 files · ~43,546 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 143 nodes · 223 edges · 13 communities (9 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c06131c0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- layout.tsx
- package.json
- Projects.tsx
- compilerOptions
- Hero.tsx
- data.ts
- next
- devDependencies
- dependencies
- vercel.json

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Reveal()` - 11 edges
3. `next` - 11 edges
4. `personal` - 7 edges
5. `Home()` - 6 edges
6. `Projects()` - 6 edges
7. `Contact()` - 5 edges
8. `Hero()` - 5 edges
9. `PhoneFrame()` - 5 edges
10. `lucide-react` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Hero()` --calls--> `fadeInUp()`  [EXTRACTED]
  components/Hero.tsx → lib/motion.ts
- `Reveal()` --calls--> `reveal()`  [EXTRACTED]
  components/Reveal.tsx → lib/motion.ts
- `RootLayout()` --calls--> `Header()`  [EXTRACTED]
  app/layout.tsx → components/Header.tsx
- `RootLayout()` --calls--> `MotionProvider()`  [EXTRACTED]
  app/layout.tsx → components/MotionProvider.tsx
- `Home()` --calls--> `About()`  [EXTRACTED]
  app/page.tsx → components/About.tsx

## Import Cycles
- None detected.

## Communities (13 total, 4 thin omitted)

### Community 0 - "layout.tsx"
Cohesion: 0.13
Nodes (15): metadata, mono, RootLayout(), sans, serif, viewport, Header(), links (+7 more)

### Community 1 - "package.json"
Cohesion: 0.10
Nodes (19): channels, name, private, scripts, build, dev, start, version (+11 more)

### Community 2 - "Projects.tsx"
Cohesion: 0.19
Nodes (16): Home(), About(), facts, Contact(), Hero(), PhoneFrame(), Props, BrowserFrame() (+8 more)

### Community 3 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "Hero.tsx"
Cohesion: 0.21
Nodes (9): fan, Props, clients, guides, stats, easeOut, fadeInUp(), reveal() (+1 more)

### Community 5 - "data.ts"
Cohesion: 0.18
Nodes (4): Guide, services, techStack, timeline

### Community 6 - "next"
Cohesion: 0.22
Nodes (8): alt, contentType, Image(), loadSerif(), OgFont, size, nextConfig, next

### Community 7 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, autoprefixer, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 8 - "dependencies"
Cohesion: 0.29
Nodes (7): dependencies, framer-motion, lucide-react, next, react, react-dom, @vercel/analytics

## Knowledge Gaps
- **62 isolated node(s):** `serif`, `sans`, `mono`, `metadata`, `viewport` (+57 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 79 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `layout.tsx`, `package.json`, `Projects.tsx`, `Hero.tsx`, `data.ts`?**
  _High betweenness centrality (0.261) - this node is a cross-community bridge._
- **What connects `serif`, `sans`, `mono` to the rest of the system?**
  _62 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13043478260869565 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._