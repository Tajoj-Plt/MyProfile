/**
 * Model: skill groups shown in the "Tools & technologies" carousel.
 * Each tag is [label, Bootstrap icon class, icon color]. Edit freely.
 */
export const SKILLS = [
  {
    title: 'AI & Data', icon: 'bi-stars', tint: '#ecebff', color: '#4830e8',
    tags: [['LLM APIs', 'bi-cpu', '#4830e8'], ['RAG', 'bi-search', '#8f69e3'], ['Prompt Design', 'bi-chat-square-text', '#0ea5e9'],
      ['Embeddings', 'bi-grid-3x3-gap', '#66ddd7'], ['Python', 'bi-filetype-py', '#3776ab'], ['Analytics', 'bi-graph-up', '#16a34a'],
      ['ActivityInfo', 'bi-bar-chart-line-fill', '#1a73e8'], ['ArcGIS', 'bi-globe-americas', '#2c7ac9'], ['Power BI', 'bi-bar-chart-fill', '#e6b800'], ['KoboToolbox', 'bi-clipboard2-data-fill', '#2095f3']],
  },
  {
    title: 'Cross-Platform', icon: 'bi-phone', tint: '#e3f0ff', color: '#1e6fd9',
    tags: [['React Native', 'bi-phone', '#1e88e5'], ['TypeScript', 'bi-filetype-tsx', '#3178c6'], ['Flutter', 'bi-feather', '#02569b'],
      ['Redux', 'bi-diagram-3', '#764abc'], ['Navigation', 'bi-signpost-split', '#6b7280'], ['RTL/LTR', 'bi-arrow-left-right', '#6b7280'],
      ['Localization', 'bi-translate', '#d97b2b']],
  },
  {
    title: 'Native Android', icon: 'bi-android2', tint: '#e5f8ec', color: '#3ddc84',
    tags: [['Kotlin', 'bi-code-slash', '#7f52ff'], ['Jetpack Compose', 'bi-hexagon', '#4285f4'], ['Coroutines/Flow', 'bi-lightning-charge', '#f59e0b'],
      ['Room', 'bi-database', '#555'], ['Retrofit', 'bi-hdd-network', '#22a35a'], ['Hilt', 'bi-puzzle', '#8d6e63']],
  },
  {
    title: 'Native iOS', icon: 'bi-apple', tint: '#f1f1f3', color: '#111',
    tags: [['Swift', 'bi-fire', '#f05138'], ['SwiftUI', 'bi-layers', '#1e88e5'], ['UIKit', 'bi-phone', '#111'],
      ['Combine', 'bi-bezier2', '#9333ea'], ['Core Data', 'bi-database', '#555'], ['TestFlight', 'bi-send', '#16a34a']],
  },
  {
    title: 'Backend, Data & Security', icon: 'bi-shield-lock', tint: '#fdeeee', color: '#b45353',
    tags: [['REST/JSON', 'bi-braces', '#555'], ['GraphQL', 'bi-diagram-3', '#e10098'], ['Node.js', 'bi-hexagon-fill', '#3c873a'],
      ['Firebase', 'bi-fire', '#ffa000'], ['Supabase', 'bi-lightning', '#3ecf8e'], ['OAuth/JWT', 'bi-key', '#d97b2b'], ['OWASP', 'bi-shield-check', '#555']],
  },
  {
    title: 'Quality & Delivery', icon: 'bi-check2-circle', tint: '#e6f6e9', color: '#2e7d32',
    tags: [['Unit/UI Testing', 'bi-check2-square', '#555'], ['Jest', 'bi-bug', '#c21325'], ['Sentry', 'bi-activity', '#362d59'],
      ['Git/GitHub', 'bi-github', '#111'], ['CI/CD', 'bi-arrow-repeat', '#555'], ['Fastlane', 'bi-rocket-takeoff', '#00a0e3'], ['Agile/Scrum', 'bi-kanban', '#d97b2b']],
  },
];
