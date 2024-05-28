import { markRaw, defineComponent, inject, unref, watch, getCurrentInstance, onMounted, onBeforeUnmount, h, withDirectives, ref, computed, reactive, provide, version, watchEffect, useSSRContext, createApp, effectScope, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, hasInjectionContext, toRef, defineAsyncComponent, mergeProps, shallowRef, shallowReactive, isReadonly, resolveComponent, withCtx, isRef, isShallow, isReactive, toRaw } from 'file:///var/www/test_nuxt/node_modules/vue/index.mjs';
import { $fetch } from 'file:///var/www/test_nuxt/node_modules/ofetch/dist/node.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file:///var/www/test_nuxt/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///var/www/test_nuxt/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1 } from 'file:///var/www/test_nuxt/node_modules/h3/dist/index.mjs';
import { getActiveHead } from 'file:///var/www/test_nuxt/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin, composableNames } from 'file:///var/www/test_nuxt/node_modules/@unhead/shared/dist/index.mjs';
import { createMemoryHistory, createRouter, START_LOCATION } from 'file:///var/www/test_nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import { withQuery, hasProtocol, parseURL, isScriptProtocol, joinURL, isSamePath } from 'file:///var/www/test_nuxt/node_modules/ufo/dist/index.mjs';
import { toRouteMatcher, createRouter as createRouter$1 } from 'file:///var/www/test_nuxt/node_modules/radix3/dist/index.mjs';
import { defuFn, defu } from 'file:///var/www/test_nuxt/node_modules/defu/dist/defu.mjs';
import { klona } from 'file:///var/www/test_nuxt/node_modules/klona/dist/index.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'file:///var/www/test_nuxt/node_modules/vue/server-renderer/index.mjs';

const lang = {
  isoName: 'en-US',
  nativeName: 'English (US)',
  label: {
    clear: 'Clear',
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    set: 'Set',
    select: 'Select',
    reset: 'Reset',
    remove: 'Remove',
    update: 'Update',
    create: 'Create',
    search: 'Search',
    filter: 'Filter',
    refresh: 'Refresh',
    expand: label => (label ? `Expand "${ label }"` : 'Expand'),
    collapse: label => (label ? `Collapse "${ label }"` : 'Collapse')
  },
  date: {
    days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    firstDayOfWeek: 0, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false,
    pluralDay: 'days'
  },
  table: {
    noData: 'No data available',
    noResults: 'No matching records found',
    loading: 'Loading...',
    selectedRecords: rows => (
      rows === 1
        ? '1 record selected.'
        : (rows === 0 ? 'No' : rows) + ' records selected.'
    ),
    recordsPerPage: 'Records per page:',
    allRows: 'All',
    pagination: (start, end, total) => start + '-' + end + ' of ' + total,
    columns: 'Columns'
  },
  editor: {
    url: 'URL',
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    underline: 'Underline',
    unorderedList: 'Unordered List',
    orderedList: 'Ordered List',
    subscript: 'Subscript',
    superscript: 'Superscript',
    hyperlink: 'Hyperlink',
    toggleFullscreen: 'Toggle Fullscreen',
    quote: 'Quote',
    left: 'Left align',
    center: 'Center align',
    right: 'Right align',
    justify: 'Justify align',
    print: 'Print',
    outdent: 'Decrease indentation',
    indent: 'Increase indentation',
    removeFormat: 'Remove formatting',
    formatting: 'Formatting',
    fontSize: 'Font Size',
    align: 'Align',
    hr: 'Insert Horizontal Rule',
    undo: 'Undo',
    redo: 'Redo',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    heading4: 'Heading 4',
    heading5: 'Heading 5',
    heading6: 'Heading 6',
    paragraph: 'Paragraph',
    code: 'Code',
    size1: 'Very small',
    size2: 'A bit small',
    size3: 'Normal',
    size4: 'Medium-large',
    size5: 'Big',
    size6: 'Very big',
    size7: 'Maximum',
    defaultFont: 'Default Font',
    viewSource: 'View Source'
  },
  tree: {
    noNodes: 'No nodes available',
    noResults: 'No matching nodes found'
  }
};

const iconSet = {
  name: 'material-icons',
  type: {
    positive: 'check_circle',
    negative: 'warning',
    info: 'info',
    warning: 'priority_high'
  },
  arrow: {
    up: 'arrow_upward',
    right: 'arrow_forward',
    down: 'arrow_downward',
    left: 'arrow_back',
    dropdown: 'arrow_drop_down'
  },
  chevron: {
    left: 'chevron_left',
    right: 'chevron_right'
  },
  colorPicker: {
    spectrum: 'gradient',
    tune: 'tune',
    palette: 'style'
  },
  pullToRefresh: {
    icon: 'refresh'
  },
  carousel: {
    left: 'chevron_left',
    right: 'chevron_right',
    up: 'keyboard_arrow_up',
    down: 'keyboard_arrow_down',
    navigationIcon: 'lens'
  },
  chip: {
    remove: 'cancel',
    selected: 'check'
  },
  datetime: {
    arrowLeft: 'chevron_left',
    arrowRight: 'chevron_right',
    now: 'access_time',
    today: 'today'
  },
  editor: {
    bold: 'format_bold',
    italic: 'format_italic',
    strikethrough: 'strikethrough_s',
    underline: 'format_underlined',
    unorderedList: 'format_list_bulleted',
    orderedList: 'format_list_numbered',
    subscript: 'vertical_align_bottom',
    superscript: 'vertical_align_top',
    hyperlink: 'link',
    toggleFullscreen: 'fullscreen',
    quote: 'format_quote',
    left: 'format_align_left',
    center: 'format_align_center',
    right: 'format_align_right',
    justify: 'format_align_justify',
    print: 'print',
    outdent: 'format_indent_decrease',
    indent: 'format_indent_increase',
    removeFormat: 'format_clear',
    formatting: 'text_format',
    fontSize: 'format_size',
    align: 'format_align_left',
    hr: 'remove',
    undo: 'undo',
    redo: 'redo',
    heading: 'format_size',
    code: 'code',
    size: 'format_size',
    font: 'font_download',
    viewSource: 'code'
  },
  expansionItem: {
    icon: 'keyboard_arrow_down',
    denseIcon: 'arrow_drop_down'
  },
  fab: {
    icon: 'add',
    activeIcon: 'close'
  },
  field: {
    clear: 'cancel',
    error: 'error'
  },
  pagination: {
    first: 'first_page',
    prev: 'keyboard_arrow_left',
    next: 'keyboard_arrow_right',
    last: 'last_page'
  },
  rating: {
    icon: 'grade'
  },
  stepper: {
    done: 'check',
    active: 'edit',
    error: 'warning'
  },
  tabs: {
    left: 'chevron_left',
    right: 'chevron_right',
    up: 'keyboard_arrow_up',
    down: 'keyboard_arrow_down'
  },
  table: {
    arrowUp: 'arrow_upward',
    warning: 'warning',
    firstPage: 'first_page',
    prevPage: 'chevron_left',
    nextPage: 'chevron_right',
    lastPage: 'last_page'
  },
  tree: {
    icon: 'play_arrow'
  },
  uploader: {
    done: 'done',
    clear: 'clear',
    add: 'add_box',
    upload: 'cloud_upload',
    removeQueue: 'clear_all',
    removeUploaded: 'done_all'
  }
};

/* eslint-disable no-useless-escape */


/**
 * __ QUASAR_SSR __            -> runs on SSR on client or server
 * __ QUASAR_SSR_SERVER __     -> runs on SSR on server
 * __ QUASAR_SSR_CLIENT __     -> runs on SSR on client
 * __ QUASAR_SSR_PWA __        -> built with SSR+PWA; may run on SSR on client or on PWA client
 *                              (needs runtime detection)
 */

const isRuntimeSsrPreHydration = { value: true }
  ;

function getMatch (userAgent, platformMatch) {
  const match = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(userAgent)
    || /(opr)[\/]([\w.]+)/.exec(userAgent)
    || /(vivaldi)[\/]([\w.]+)/.exec(userAgent)
    || /(chrome|crios)[\/]([\w.]+)/.exec(userAgent)
    || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent)
    || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent)
    || /(firefox|fxios)[\/]([\w.]+)/.exec(userAgent)
    || /(webkit)[\/]([\w.]+)/.exec(userAgent)
    || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent)
    || [];

  return {
    browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || '',
    version: match[ 4 ] || match[ 2 ] || '0',
    platform: platformMatch[ 0 ] || ''
  }
}

function getPlatformMatch (userAgent) {
  return /(ipad)/.exec(userAgent)
    || /(ipod)/.exec(userAgent)
    || /(windows phone)/.exec(userAgent)
    || /(iphone)/.exec(userAgent)
    || /(kindle)/.exec(userAgent)
    || /(silk)/.exec(userAgent)
    || /(android)/.exec(userAgent)
    || /(win)/.exec(userAgent)
    || /(mac)/.exec(userAgent)
    || /(linux)/.exec(userAgent)
    || /(cros)/.exec(userAgent)
    // TODO: Remove BlackBerry detection. BlackBerry OS, BlackBerry 10, and BlackBerry PlayBook OS
    // is officially dead as of January 4, 2022 (https://www.blackberry.com/us/en/support/devices/end-of-life)
    || /(playbook)/.exec(userAgent)
    || /(bb)/.exec(userAgent)
    || /(blackberry)/.exec(userAgent)
    || []
}

function getPlatform (UA) {
  const
    userAgent = UA.toLowerCase(),
    platformMatch = getPlatformMatch(userAgent),
    matched = getMatch(userAgent, platformMatch),
    browser = {};

  if (matched.browser) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.version, 10);
  }

  if (matched.platform) {
    browser[ matched.platform ] = true;
  }

  const knownMobiles = browser.android
    || browser.ios
    || browser.bb
    || browser.blackberry
    || browser.ipad
    || browser.iphone
    || browser.ipod
    || browser.kindle
    || browser.playbook
    || browser.silk
    || browser[ 'windows phone' ];

  // These are all considered mobile platforms, meaning they run a mobile browser
  if (
    knownMobiles === true
    || userAgent.indexOf('mobile') !== -1
  ) {
    browser.mobile = true;
  }
  // If it's not mobile we should consider it's desktop platform, meaning it runs a desktop browser
  // It's a workaround for anonymized user agents
  // (browser.cros || browser.mac || browser.linux || browser.win)
  else {
    browser.desktop = true;
  }

  if (browser[ 'windows phone' ]) {
    browser.winphone = true;
    delete browser[ 'windows phone' ];
  }

  if (browser.edga || browser.edgios || browser.edg) {
    browser.edge = true;
    matched.browser = 'edge';
  }
  else if (browser.crios) {
    browser.chrome = true;
    matched.browser = 'chrome';
  }
  else if (browser.fxios) {
    browser.firefox = true;
    matched.browser = 'firefox';
  }

  // Set iOS if on iPod, iPad or iPhone
  if (browser.ipod || browser.ipad || browser.iphone) {
    browser.ios = true;
  }

  if (browser.vivaldi) {
    matched.browser = 'vivaldi';
    browser.vivaldi = true;
  }

  // TODO: The assumption about WebKit based browsers below is not completely accurate.
  // Google released Blink(a fork of WebKit) engine on April 3, 2013, which is really different than WebKit today.
  // Today, one might want to check for WebKit to deal with its bugs, which is used on all browsers on iOS, and Safari browser on all platforms.
  if (
    // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
    browser.chrome
    || browser.opr
    || browser.safari
    || browser.vivaldi
    // we expect unknown, non iOS mobile browsers to be webkit based
    || (
      browser.mobile === true
      && browser.ios !== true
      && knownMobiles !== true
    )
  ) {
    browser.webkit = true;
  }

  // Opera 15+ are identified as opr
  if (browser.opr) {
    matched.browser = 'opera';
    browser.opera = true;
  }

  // Some browsers are marked as Safari but are not
  if (browser.safari) {
    if (browser.blackberry || browser.bb) {
      matched.browser = 'blackberry';
      browser.blackberry = true;
    }
    else if (browser.playbook) {
      matched.browser = 'playbook';
      browser.playbook = true;
    }
    else if (browser.android) {
      matched.browser = 'android';
      browser.android = true;
    }
    else if (browser.kindle) {
      matched.browser = 'kindle';
      browser.kindle = true;
    }
    else if (browser.silk) {
      matched.browser = 'silk';
      browser.silk = true;
    }
  }

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;

  return browser
}

const ssrClient = {
  has: {
    touch: false,
    webStorage: false
  },
  within: { iframe: false }
};

// We export "client" for hydration error-free parts,
// like touch directives who do not (and must NOT) wait
// for the client takeover;
// Do NOT import this directly in your app, unless you really know
// what you are doing.
const client = ssrClient
  ;

const Platform = {
  install (opts) {
    const { $q } = opts;

    {
      $q.platform = this.parseSSR(opts.ssrContext);
    }
  }
};

{
  Platform.parseSSR = (ssrContext) => {
    const userAgent = ssrContext.req.headers[ 'user-agent' ] || ssrContext.req.headers[ 'User-Agent' ] || '';
    return {
      ...client,
      userAgent,
      is: getPlatform(userAgent)
    }
  };
}

function createComponent (raw) { return markRaw(defineComponent(raw)) }
function createDirective (raw) { return markRaw(raw) }

const createReactivePlugin = (state, plugin) => {
      Object.assign(plugin, state);
      return plugin
    }
  ;

const listenOpts = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true
};

try {
  const opts = Object.defineProperty({}, 'passive', {
    get () {
      Object.assign(listenOpts, {
        hasPassive: true,
        passive: { passive: true },
        notPassive: { passive: false },
        passiveCapture: { passive: true, capture: true },
        notPassiveCapture: { passive: false, capture: true }
      });
    }
  });
  window.addEventListener('qtest', null, opts);
  window.removeEventListener('qtest', null, opts);
}
catch (_) {}

function noop () {}

function getEventPath (e) {
  if (e.path) {
    return e.path
  }
  if (e.composedPath) {
    return e.composedPath()
  }

  const path = [];
  let el = e.target;

  while (el) {
    path.push(el);

    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path
    }

    el = el.parentElement;
  }
}

function stop (e) {
  e.stopPropagation();
}

function prevent (e) {
  e.cancelable !== false && e.preventDefault();
}

function stopAndPrevent (e) {
  e.cancelable !== false && e.preventDefault();
  e.stopPropagation();
}

const Screen = createReactivePlugin({
  width: 0,
  height: 0,
  name: 'xs',

  sizes: {
    sm: 600,
    md: 1024,
    lg: 1440,
    xl: 1920
  },

  lt: {
    sm: true,
    md: true,
    lg: true,
    xl: true
  },
  gt: {
    xs: false,
    sm: false,
    md: false,
    lg: false
  },

  xs: true,
  sm: false,
  md: false,
  lg: false,
  xl: false
}, {
  setSizes: noop,
  setDebounce: noop,

  install ({ $q, onSSRHydrated }) {
    $q.screen = this;

    return
  }
});

const Plugin$2 = createReactivePlugin({
  isActive: false,
  mode: false
}, {
  __media: void 0,

  set (val) {
    return
  },

  toggle () {
  },

  install ({ $q, ssrContext }) {
    const { dark } = $q.config;

    {
      this.isActive = dark === true;

      $q.dark = {
        isActive: false,
        mode: false,
        set: val => {
          ssrContext._meta.bodyClasses = ssrContext._meta.bodyClasses
            .replace(' body--light', '')
            .replace(' body--dark', '') + ` body--${ val === true ? 'dark' : 'light' }`;

          $q.dark.isActive = val === true;
          $q.dark.mode = val;
        },
        toggle: () => {
          $q.dark.set($q.dark.isActive === false);
        }
      };

      $q.dark.set(dark);
      return
    }
  }
});

function getMobilePlatform (is) {
  if (is.ios === true) return 'ios'
  if (is.android === true) return 'android'
}

function getBodyClasses ({ is, has, within }, cfg) {
  const cls = [
    is.desktop === true ? 'desktop' : 'mobile',
    `${ has.touch === false ? 'no-' : '' }touch`
  ];

  if (is.mobile === true) {
    const mobile = getMobilePlatform(is);
    mobile !== void 0 && cls.push('platform-' + mobile);
  }

  if (is.nativeMobile === true) {
    const type = is.nativeMobileWrapper;

    cls.push(type);
    cls.push('native-mobile');

    if (
      is.ios === true
      && (cfg[ type ] === void 0 || cfg[ type ].iosStatusBarPadding !== false)
    ) {
      cls.push('q-ios-padding');
    }
  }
  else if (is.electron === true) {
    cls.push('electron');
  }
  else if (is.bex === true) {
    cls.push('bex');
  }

  within.iframe === true && cls.push('within-iframe');

  return cls
}

const Body = {
  install (opts) {
    {
      const { $q, ssrContext } = opts;
      const cls = getBodyClasses($q.platform, $q.config);

      if ($q.config.screen !== void 0 && $q.config.screen.bodyClass === true) {
        cls.push('screen--xs');
      }

      ssrContext._meta.bodyClasses += cls.join(' ');

      const brand = $q.config.brand;
      if (brand !== void 0) {
        const vars = Object.keys(brand)
          .map(key => `--q-${ key }:${ brand[ key ] };`)
          .join('');

        ssrContext._meta.endingHeadTags += `<style>:root{${ vars }}</style>`;
      }

      return
    }
  }
};

const History = {
  __history: [],
  add: noop,
  remove: noop,

  install ({ $q }) {
    return
  }
};

function getLocale () {
  return
}

const Plugin$1 = createReactivePlugin({
  __qLang: {}
}, {
  // props: object
  // __langConfig: object

  getLocale,

  set (langObject = lang, ssrContext) {
    const lang = {
      ...langObject,
      rtl: langObject.rtl === true,
      getLocale
    };

    {
      if (ssrContext === void 0) {
        console.error('SSR ERROR: second param required: Lang.set(lang, ssrContext)');
        return
      }

      lang.set = ssrContext.$q.lang.set;

      if (ssrContext.$q.config.lang === void 0 || ssrContext.$q.config.lang.noHtmlAttrs !== true) {
        const dir = lang.rtl === true ? 'rtl' : 'ltr';
        const attrs = `lang=${ lang.isoName } dir=${ dir }`;

        ssrContext._meta.htmlAttrs = ssrContext.__qPrevLang !== void 0
          ? ssrContext._meta.htmlAttrs.replace(ssrContext.__qPrevLang, attrs)
          : attrs;

        ssrContext.__qPrevLang = attrs;
      }

      ssrContext.$q.lang = lang;
    }
  },

  install ({ $q, lang: lang$1, ssrContext }) {
    {
      const initialLang = lang$1 || lang;

      $q.lang = {};
      $q.lang.set = langObject => {
        this.set(langObject, ssrContext);
      };

      $q.lang.set(initialLang);

      // one-time SSR server operation
      if (
        this.props === void 0
        || this.props.isoName !== initialLang.isoName
      ) {
        this.props = { ...initialLang };
      }
    }
  }
});

const Plugin = createReactivePlugin({
  iconMapFn: null,
  __qIconSet: {}
}, {
  // props: object

  set (setObject, ssrContext) {
    const def = { ...setObject };

    {
      if (ssrContext === void 0) {
        console.error('SSR ERROR: second param required: IconSet.set(iconSet, ssrContext)');
        return
      }

      def.set = ssrContext.$q.iconSet.set;
      Object.assign(ssrContext.$q.iconSet, def);
    }
  },

  install ({ $q, iconSet: iconSet$1, ssrContext }) {
    {
      const initialSet = iconSet$1 || iconSet;

      $q.iconMapFn = ssrContext.$q.config.iconMapFn || this.iconMapFn || null;
      $q.iconSet = {};
      $q.iconSet.set = setObject => {
        this.set(setObject, ssrContext);
      };

      $q.iconSet.set(initialSet);

      // one-time SSR server operation
      if (
        this.props === void 0
        || this.props.name !== initialSet.name
      ) {
        this.props = { ...initialSet };
      }
    }
  }
});

const quasarKey = '_q_';
const layoutKey = '_q_l_';
const pageContainerKey = '_q_pc_';

function emptyRenderFn () {}

// not perfect, but what we ARE interested is for Arrays not to slip in
// as spread operator will mess things up in various areas
function isObject (v) {
  return v !== null && typeof v === 'object' && Array.isArray(v) !== true
}

/**
 * If the list below changes, make sure
 * to also edit /ui/testing/specs/generators/generator.plugin.js
 * on the "autoInstalledPlugins" array
 */
const autoInstalledPlugins = [
  Platform,
  Body,
  Plugin$2,
  Screen,
  History,
  Plugin$1,
  Plugin
];

function installPlugins (pluginOpts, pluginList) {
  pluginList.forEach(Plugin => {
    Plugin.install(pluginOpts);
    Plugin.__installed = true;
  });
}

function prepareApp (app, uiOpts, pluginOpts) {
  app.config.globalProperties.$q = pluginOpts.$q;
  app.provide(quasarKey, pluginOpts.$q);

  installPlugins(pluginOpts, autoInstalledPlugins);

  uiOpts.components !== void 0 && Object.values(uiOpts.components).forEach(c => {
    if (isObject(c) === true && c.name !== void 0) {
      app.component(c.name, c);
    }
  });

  uiOpts.directives !== void 0 && Object.values(uiOpts.directives).forEach(d => {
    if (isObject(d) === true && d.name !== void 0) {
      app.directive(d.name, d);
    }
  });

  uiOpts.plugins !== void 0 && installPlugins(
    pluginOpts,
    Object.values(uiOpts.plugins).filter(
      p => typeof p.install === 'function' && autoInstalledPlugins.includes(p) === false
    )
  );

  if (isRuntimeSsrPreHydration.value === true) {
    pluginOpts.$q.onSSRHydrated = () => {
      pluginOpts.onSSRHydrated.forEach(fn => { fn(); });
      pluginOpts.$q.onSSRHydrated = () => {};
    };
  }
}

const installQuasar = function (parentApp, opts = {}, ssrContext) {
    const $q = {
      version: '2.16.4',
      config: opts.config || {}
    };

    Object.assign(ssrContext, {
      $q,
      _meta: {
        htmlAttrs: '',
        headTags: '',
        endingHeadTags: '',
        bodyClasses: '',
        bodyAttrs: 'data-server-rendered',
        bodyTags: ''
      }
    });

    if (ssrContext._modules === void 0) {
      // not OK. means the SSR build is not using @quasar/ssr-helpers,
      // but we shouldn't crash the app
      ssrContext._modules = [];
    }

    if (ssrContext.onRendered === void 0) {
      // not OK. means the SSR build is not using @quasar/ssr-helpers,
      // but we shouldn't crash the app
      ssrContext.onRendered = () => {};
    }

    parentApp.config.globalProperties.ssrContext = ssrContext;

    prepareApp(parentApp, opts, {
      parentApp,
      $q,
      lang: opts.lang,
      iconSet: opts.iconSet,
      ssrContext
    });
  }

const Quasar = {
  name: 'Quasar',
  version: '2.16.4',

  install: installQuasar,

  // TODO: remove in Qv3 (should only be used through the plugin)
  // We provide a deprecated fallback here
  lang: Plugin$1,

  // TODO: remove in Qv3 (should only be used through the plugin)
  // We provide a deprecated fallback here
  iconSet: Plugin
};

/**
 * Returns the $q instance.
 * Equivalent to `this.$q` inside templates.
 */
function useQuasar () {
  return inject(quasarKey)
}

function css (element, css) {
  const style = element.style;

  for (const prop in css) {
    style[ prop ] = css[ prop ];
  }
}

// internal
function getElement (el) {
  if (el === void 0 || el === null) {
    return void 0
  }

  if (typeof el === 'string') {
    try {
      return document.querySelector(el) || void 0
    }
    catch (err) {
      return void 0
    }
  }

  const target = unref(el);
  if (target) {
    return target.$el || target
  }
}

const scrollTargetProp = {} /* SSR does not know about Element */
  ;

const scrollTargets = []
  ;

function getScrollTarget (el, targetEl) {
  let target = getElement(targetEl);

  if (target === void 0) {
    if (el === void 0 || el === null) {
      return window
    }

    target = el.closest('.scroll,.scroll-y,.overflow-auto');
  }

  return scrollTargets.includes(target)
    ? window
    : target
}

function getVerticalScrollPosition (scrollTarget) {
  return scrollTarget === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : scrollTarget.scrollTop
}

function getHorizontalScrollPosition (scrollTarget) {
  return scrollTarget === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : scrollTarget.scrollLeft
}

let size;
function getScrollbarWidth () {
  if (size !== undefined) {
    return size
  }

  const
    inner = document.createElement('p'),
    outer = document.createElement('div');

  css(inner, {
    width: '100%',
    height: '200px'
  });
  css(outer, {
    position: 'absolute',
    top: '0px',
    left: '0px',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  const w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  let w2 = inner.offsetWidth;

  if (w1 === w2) {
    w2 = outer.clientWidth;
  }

  outer.remove();
  size = w1 - w2;

  return size
}

function hasScrollbar (el, onY = true) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) {
    return false
  }

  return onY
    ? (
        el.scrollHeight > el.clientHeight && (
          el.classList.contains('scroll')
          || el.classList.contains('overflow-auto')
          || [ 'auto', 'scroll' ].includes(window.getComputedStyle(el)[ 'overflow-y' ])
        )
      )
    : (
        el.scrollWidth > el.clientWidth && (
          el.classList.contains('scroll')
          || el.classList.contains('overflow-auto')
          || [ 'auto', 'scroll' ].includes(window.getComputedStyle(el)[ 'overflow-x' ])
        )
      )
}

const { passive } = listenOpts;
const axisValues = [ 'both', 'horizontal', 'vertical' ];

const QScrollObserver = createComponent({
  name: 'QScrollObserver',

  props: {
    axis: {
      type: String,
      validator: v => axisValues.includes(v),
      default: 'vertical'
    },

    debounce: [ String, Number ],

    scrollTarget: scrollTargetProp
  },

  emits: [ 'scroll' ],

  setup (props, { emit }) {
    const scroll = {
      position: {
        top: 0,
        left: 0
      },

      direction: 'down',
      directionChanged: false,

      delta: {
        top: 0,
        left: 0
      },

      inflectionPoint: {
        top: 0,
        left: 0
      }
    };

    let clearTimer = null, localScrollTarget, parentEl;

    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });

    function emitEvent () {
      clearTimer !== null && clearTimer();

      const top = Math.max(0, getVerticalScrollPosition(localScrollTarget));
      const left = getHorizontalScrollPosition(localScrollTarget);

      const delta = {
        top: top - scroll.position.top,
        left: left - scroll.position.left
      };

      if (
        (props.axis === 'vertical' && delta.top === 0)
        || (props.axis === 'horizontal' && delta.left === 0)
      ) {
        return
      }

      const curDir = Math.abs(delta.top) >= Math.abs(delta.left)
        ? (delta.top < 0 ? 'up' : 'down')
        : (delta.left < 0 ? 'left' : 'right');

      scroll.position = { top, left };
      scroll.directionChanged = scroll.direction !== curDir;
      scroll.delta = delta;

      if (scroll.directionChanged === true) {
        scroll.direction = curDir;
        scroll.inflectionPoint = scroll.position;
      }

      emit('scroll', { ...scroll });
    }

    function configureScrollTarget () {
      localScrollTarget = getScrollTarget(parentEl, props.scrollTarget);
      localScrollTarget.addEventListener('scroll', trigger, passive);
      trigger(true);
    }

    function unconfigureScrollTarget () {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener('scroll', trigger, passive);
        localScrollTarget = void 0;
      }
    }

    function trigger (immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === '0') {
        emitEvent();
      }
      else if (clearTimer === null) {
        const [ timer, fn ] = props.debounce
          ? [ setTimeout(emitEvent, props.debounce), clearTimeout ]
          : [ requestAnimationFrame(emitEvent), cancelAnimationFrame ];

        clearTimer = () => {
          fn(timer);
          clearTimer = null;
        };
      }
    }

    const { proxy } = getCurrentInstance();

    watch(() => proxy.$q.lang.rtl, emitEvent);

    onMounted(() => {
      parentEl = proxy.$el.parentNode;
      configureScrollTarget();
    });

    onBeforeUnmount(() => {
      clearTimer !== null && clearTimer();
      unconfigureScrollTarget();
    });

    // expose public methods
    Object.assign(proxy, {
      trigger,
      getPosition: () => scroll
    });

    return noop
  }
});

const QResizeObserver = createComponent({
  name: 'QResizeObserver',

  props: {
    debounce: {
      type: [ String, Number ],
      default: 100
    }
  },

  emits: [ 'resize' ],

  setup (props, { emit }) {
    { return noop }
  }
});

function hSlot (slot, otherwise) {
  return slot !== void 0
    ? slot() || otherwise
    : otherwise
}

function hUniqueSlot (slot, otherwise) {
  if (slot !== void 0) {
    const vnode = slot();
    if (vnode !== void 0 && vnode !== null) {
      return vnode.slice()
    }
  }

  return otherwise
}

/**
 * Source definitely exists,
 * so it's merged with the possible slot
 */
function hMergeSlot (slot, source) {
  return slot !== void 0
    ? source.concat(slot())
    : source
}

/**
 * Merge with possible slot,
 * even if source might not exist
 */
function hMergeSlotSafely (slot, source) {
  if (slot === void 0) {
    return source
  }

  return source !== void 0
    ? source.concat(slot())
    : slot()
}

/*
 * (String)  key       - unique vnode key
 * (Boolean) condition - should change ONLY when adding/removing directive
 */
function hDir (
  tag,
  data,
  children,
  key,
  condition,
  getDirsFn
) {
  data.key = key + condition;

  const vnode = h(tag, data, children);

  return condition === true
    ? withDirectives(vnode, getDirsFn())
    : vnode
}

const __nuxt_component_0 = createComponent({
  name: 'QLayout',

  props: {
    container: Boolean,
    view: {
      type: String,
      default: 'hhh lpr fff',
      validator: v => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
    },

    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },

  setup (props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();

    const rootRef = ref(null);

    // page related
    const height = ref($q.screen.height);
    const width = ref(props.container === true ? 0 : $q.screen.width);
    const scroll = ref({ position: 0, direction: 'down', inflectionPoint: 0 });

    // container only prop
    const containerHeight = ref(0);
    const scrollbarWidth = ref(isRuntimeSsrPreHydration.value === true ? 0 : getScrollbarWidth());

    const classes = computed(() =>
      'q-layout q-layout--'
      + (props.container === true ? 'containerized' : 'standard')
    );

    const style = computed(() => (
      props.container === false
        ? { minHeight: $q.screen.height + 'px' }
        : null
    ));

    // used by container only
    const targetStyle = computed(() => (
      scrollbarWidth.value !== 0
        ? { [ $q.lang.rtl === true ? 'left' : 'right' ]: `${ scrollbarWidth.value }px` }
        : null
    ));

    const targetChildStyle = computed(() => (
      scrollbarWidth.value !== 0
        ? {
            [ $q.lang.rtl === true ? 'right' : 'left' ]: 0,
            [ $q.lang.rtl === true ? 'left' : 'right' ]: `-${ scrollbarWidth.value }px`,
            width: `calc(100% + ${ scrollbarWidth.value }px)`
          }
        : null
    ));

    function onPageScroll (data) {
      if (props.container === true || document.qScrollPrevented !== true) {
        const info = {
          position: data.position.top,
          direction: data.direction,
          directionChanged: data.directionChanged,
          inflectionPoint: data.inflectionPoint.top,
          delta: data.delta.top
        };

        scroll.value = info;
        props.onScroll !== void 0 && emit('scroll', info);
      }
    }

    function onPageResize (data) {
      const { height: newHeight, width: newWidth } = data;
      let resized = false;

      if (height.value !== newHeight) {
        resized = true;
        height.value = newHeight;
        props.onScrollHeight !== void 0 && emit('scrollHeight', newHeight);
        updateScrollbarWidth();
      }
      if (width.value !== newWidth) {
        resized = true;
        width.value = newWidth;
      }

      if (resized === true && props.onResize !== void 0) {
        emit('resize', data);
      }
    }

    function onContainerResize ({ height }) {
      if (containerHeight.value !== height) {
        containerHeight.value = height;
        updateScrollbarWidth();
      }
    }

    function updateScrollbarWidth () {
      if (props.container === true) {
        const width = height.value > containerHeight.value
          ? getScrollbarWidth()
          : 0;

        if (scrollbarWidth.value !== width) {
          scrollbarWidth.value = width;
        }
      }
    }

    let animateTimer = null;

    const $layout = {
      instances: {},
      view: computed(() => props.view),
      isContainer: computed(() => props.container),

      rootRef,

      height,
      containerHeight,
      scrollbarWidth,
      totalWidth: computed(() => width.value + scrollbarWidth.value),

      rows: computed(() => {
        const rows = props.view.toLowerCase().split(' ');
        return {
          top: rows[ 0 ].split(''),
          middle: rows[ 1 ].split(''),
          bottom: rows[ 2 ].split('')
        }
      }),

      header: reactive({ size: 0, offset: 0, space: false }),
      right: reactive({ size: 300, offset: 0, space: false }),
      footer: reactive({ size: 0, offset: 0, space: false }),
      left: reactive({ size: 300, offset: 0, space: false }),

      scroll,

      animate () {
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
        }
        else {
          document.body.classList.add('q-body--layout-animate');
        }

        animateTimer = setTimeout(() => {
          animateTimer = null;
          document.body.classList.remove('q-body--layout-animate');
        }, 155);
      },

      update (part, prop, val) {
        $layout[ part ][ prop ] = val;
      }
    };

    provide(layoutKey, $layout);

    return () => {
      const content = hMergeSlot(slots.default, [
        h(QScrollObserver, { onScroll: onPageScroll }),
        h(QResizeObserver, { onResize: onPageResize })
      ]);

      const layout = h('div', {
        class: classes.value,
        style: style.value,
        ref: props.container === true ? void 0 : rootRef,
        tabindex: -1
      }, content);

      if (props.container === true) {
        return h('div', {
          class: 'q-layout-container overflow-hidden',
          ref: rootRef
        }, [
          h(QResizeObserver, { onResize: onContainerResize }),
          h('div', {
            class: 'absolute-full',
            style: targetStyle.value
          }, [
            h('div', {
              class: 'scroll',
              style: targetChildStyle.value
            }, [ layout ])
          ])
        ])
      }

      return layout
    }
  }
});

const __nuxt_component_1 = createComponent({
  name: 'QPageContainer',

  setup (_, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QPageContainer needs to be child of QLayout');
      return emptyRenderFn
    }

    provide(pageContainerKey, true);

    const style = computed(() => {
      const css = {};

      if ($layout.header.space === true) {
        css.paddingTop = `${ $layout.header.size }px`;
      }
      if ($layout.right.space === true) {
        css[ `padding${ $q.lang.rtl === true ? 'Left' : 'Right' }` ] = `${ $layout.right.size }px`;
      }
      if ($layout.footer.space === true) {
        css.paddingBottom = `${ $layout.footer.size }px`;
      }
      if ($layout.left.space === true) {
        css[ `padding${ $q.lang.rtl === true ? 'Right' : 'Left' }` ] = `${ $layout.left.size }px`;
      }

      return css
    });

    return () => h('div', {
      class: 'q-page-container',
      style: style.value
    }, hSlot(slots.default))
  }
});

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.11.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const inlineConfig = {
  "nuxt": {
    "buildId": "87c481ea-b9e3-4b1a-b4bf-1f756f4c2292"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const appPageTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const _routes = [
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./index-CLelMQTh.mjs').then((m) => m.default || m)
  }
];
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    useError();
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.fullPath !== initialURL && (to.redirectedFrom || !isSamePath(to.fullPath, initialURL))) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const componentsWithDefaults = {};
const appConfigKey = "nuxtQuasar";
const quasarNuxtConfig = {
  lang,
  iconSet,
  components: { "defaults": {} },
  plugins: {}
};
function omit(object, keys) {
  return Object.keys(object).reduce((output, key) => {
    if (!keys.includes(key)) {
      output[key] = object[key];
    }
    return output;
  }, {});
}
const plugin_IFbScM8fhe = /* @__PURE__ */ defineNuxtPlugin((nuxt) => {
  const quasarAppConfig = useAppConfig()[appConfigKey];
  const { lang: lang2, iconSet: iconSet2, plugins: plugins2, components } = quasarNuxtConfig;
  let ssrContext;
  let quasarProxy;
  let config = defuFn(quasarAppConfig, omit(quasarNuxtConfig.config || {}, ["brand"]));
  {
    const BRAND_RE = /--q-(?:.+?):(?:.+?);/g;
    const meta = reactive({
      bodyClasses: "",
      htmlAttrs: "",
      endingHeadTags: ""
    });
    const htmlAttrsRecord = computed(
      () => Object.fromEntries(
        meta.htmlAttrs.split(" ").map((attr) => attr.split("="))
      )
    );
    const bodyStyles = computed(() => {
      return [...meta.endingHeadTags.matchAll(BRAND_RE)].map((match) => match[0]).join("");
    });
    useHead(
      computed(() => ({
        bodyAttrs: {
          class: meta.bodyClasses,
          style: bodyStyles.value
        },
        htmlAttrs: htmlAttrsRecord.value
      }))
    );
    ssrContext = {
      req: nuxt.ssrContext.event.node.req,
      res: nuxt.ssrContext.event.node.res
    };
    quasarProxy = {
      install({ ssrContext: ssrContext2 }) {
        meta.bodyClasses = ssrContext2._meta.bodyClasses;
        meta.htmlAttrs = ssrContext2._meta.htmlAttrs;
        meta.endingHeadTags = ssrContext2._meta.endingHeadTags;
        ssrContext2._meta = new Proxy({}, {
          get(target, key) {
            return meta[key] ?? target[key];
          },
          set(target, key, value) {
            if (typeof meta[key] === "string") {
              meta[key] = value;
            } else {
              target[key] = value;
            }
            return true;
          }
        });
      }
    };
  }
  nuxt.vueApp.use(Quasar, {
    lang: lang2,
    iconSet: iconSet2,
    plugins: {
      quasarProxy,
      ...plugins2
    },
    config
    // @ts-expect-error Private Argument
  }, ssrContext);
  const quasar = useQuasar();
  const asDefault = (value) => value && typeof value === "object" ? () => value : value;
  for (const [name, propDefaults] of Object.entries(components.defaults || {})) {
    const component = componentsWithDefaults[name];
    for (const [propName, defaultValue] of Object.entries(propDefaults)) {
      const propConfig = component.props[propName];
      if (Array.isArray(propConfig) || typeof propConfig === "function") {
        component.props[propName] = {
          type: propConfig,
          default: asDefault(defaultValue)
        };
      } else if (typeof propConfig === "object") {
        propConfig.default = asDefault(defaultValue);
      } else {
        throw new TypeError(`Unexpected prop definition type used at ${name}.props.${propName}, please open an issue.`);
      }
    }
  }
  return {
    provide: {
      q: quasar
    }
  };
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  plugin_IFbScM8fhe
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_q_layout = __nuxt_component_0;
  const _component_q_page_container = __nuxt_component_1;
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_q_layout, mergeProps({ view: "hHh lpR fFf" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_page_container, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_router_view, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_router_view)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_q_page_container, null, {
            default: withCtx(() => [
              createVNode(_component_router_view)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-BT3sED98.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./error-500-Dog3YfpA.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  _: _export_sfc,
  a: useRuntimeConfig,
  b: navigateTo,
  c: useHead,
  default: entry$1,
  n: nuxtLinkDefaults,
  u: useRouter
});

export { History as H, QResizeObserver as Q, _export_sfc as _, hSlot as a, hMergeSlot as b, createComponent as c, hMergeSlotSafely as d, emptyRenderFn as e, createDirective as f, stop as g, hUniqueSlot as h, listenOpts as i, client as j, getHorizontalScrollPosition as k, layoutKey as l, getVerticalScrollPosition as m, getEventPath as n, hasScrollbar as o, prevent as p, hDir as q, useRouter as r, stopAndPrevent as s, nuxtLinkDefaults as t, useHead as u, useRuntimeConfig as v, navigateTo as w, server as x };
//# sourceMappingURL=server.mjs.map
