import { zhTW } from '../data/zh-tw.js?v=20261008-14';

export const LANGUAGE_STORAGE_KEY = 'portfolio-language';
const ATTRIBUTES = ['alt', 'aria-label', 'title', 'placeholder'];
const SKIP = 'script, style, code, pre, [data-no-translate]';
const normalize = value => value.replace(/\s+/g, ' ').trim();
const headingPhrases = /從構想到實作|打造智慧產品|智慧穿戴式|阻力訓練系統|嵌入式系統|手語影像辨識|深度旅行探索/g;
const wordSegmenter = typeof Intl.Segmenter === 'function'
  ? new Intl.Segmenter('zh-TW', { granularity: 'word' }) : null;
const joinWord = word => [...word].join('\u2060');

// Word joiners protect short Chinese words without changing visible text or DOM.
// Only display headings use these hints; metadata, English, and paragraphs do not.
export function formatChineseHeading(text) {
  const parts = text.split(headingPhrases);
  const phrases = [...text.matchAll(headingPhrases)];
  return parts.map((part, index) => {
    const words = wordSegmenter ? [...wordSegmenter.segment(part)].map(({ segment, isWordLike }) =>
      isWordLike && /[\u3400-\u9fff]/.test(segment) ? joinWord(segment) : segment
    ).join('') : part;
    return words + (phrases[index] ? joinWord(phrases[index][0]) : '');
  }).join('');
}

export function preferredLanguage(storage, languages = []) {
  try {
    const saved = storage?.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'en' || saved === 'zh-TW') return saved;
  } catch { /* Browser language remains available when storage is blocked. */ }
  return languages[0]?.toLowerCase().startsWith('zh') ? 'zh-TW' : 'en';
}

export function translate(value, language) {
  if (language !== 'zh-TW') return value;
  const source = normalize(value);
  let result = zhTW[source];
  if (result === undefined) {
    // Generated labels combine project names and shared interface text.
    const suffix = source.match(/^(.*) (project gallery|project images)$/);
    if (suffix) result = `${translate(suffix[1], language)}專案圖片`;
    else if (source.startsWith('Show ')) result = `顯示${translate(source.slice(5), language)}`;
    else if (/^Feature \d+$/.test(source)) result = source.replace('Feature', '功能');
    else if (/ · | — /.test(source)) result = source.split(/( · | — )/).map(part => zhTW[part] ?? part).join('');
  }
  return result === undefined ? value : value.replace(/\S[\s\S]*\S|\S/, () => result);
}

export function initLanguageSwitcher(root = document, host = window) {
  let storage;
  try { storage = host.localStorage; } catch { /* Optional storage. */ }
  let language = preferredLanguage(storage, host.navigator.languages || [host.navigator.language]);
  const originals = new WeakMap();
  const attributeOriginals = new WeakMap();
  const toggle = root.createElement('button');
  toggle.type = 'button';
  toggle.className = 'language-toggle';
  toggle.dataset.noTranslate = '';
  toggle.dataset.languageToggle = '';
  root.querySelector('.theme-toggle, .nav-toggle')?.before(toggle);

  function updateValue(owner, key, current, write, registry) {
    const values = registry.get(owner) || {};
    const previous = values[key];
    // Keep original English, but adopt fresh text inserted by interactive controls.
    const source = previous && previous.rendered === current ? previous.source : current;
    let rendered = translate(source, language);
    if (language === 'zh-TW' && key === 'text' && owner.parentElement?.closest('h1, h2, h3, h4')) {
      rendered = formatChineseHeading(rendered);
    }
    values[key] = { source, rendered };
    registry.set(owner, values);
    if (current !== rendered) write(rendered);
  }

  function apply() {
    observer.disconnect();
    root.documentElement.lang = language;
    toggle.textContent = language === 'zh-TW' ? 'English' : '繁中';
    toggle.lang = language === 'zh-TW' ? 'en' : 'zh-TW';
    toggle.setAttribute('aria-label', language === 'zh-TW' ? 'Switch to English' : '切換為繁體中文');
    toggle.title = toggle.getAttribute('aria-label');

    const walker = root.createTreeWalker(root.documentElement, 4 /* SHOW_TEXT */);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement?.closest(SKIP) && node.nodeValue.trim()) {
        const text = node;
        updateValue(text, 'text', text.nodeValue, value => { text.nodeValue = value; }, originals);
      }
    }
    root.querySelectorAll('[alt], [aria-label], [title], [placeholder], meta[name="description"]').forEach(element => {
      if (element.closest(SKIP)) return;
      const attributes = element.matches('meta[name="description"]') ? ['content'] : ATTRIBUTES;
      attributes.forEach(attribute => {
        if (element.hasAttribute(attribute)) {
          updateValue(element, attribute, element.getAttribute(attribute), value => element.setAttribute(attribute, value), attributeOriginals);
        }
      });
    });
    observer.observe(root.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...ATTRIBUTES, 'content'] });
  }

  const observer = new host.MutationObserver(apply);
  toggle.addEventListener('click', () => {
    language = language === 'zh-TW' ? 'en' : 'zh-TW';
    try { storage?.setItem(LANGUAGE_STORAGE_KEY, language); } catch { /* The current page still switches. */ }
    apply();
  });
  apply();
  return { apply, get language() { return language; }, disconnect: () => observer.disconnect() };
}
