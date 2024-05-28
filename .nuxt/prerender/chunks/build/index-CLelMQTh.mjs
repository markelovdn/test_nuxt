import { getCurrentInstance, inject, ref, computed, watch, onBeforeUnmount, h, Transition, withDirectives, onMounted, nextTick, onDeactivated, useSSRContext, defineComponent, withCtx, createVNode, createTextVNode } from 'file:///var/www/test_nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///var/www/test_nuxt/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file:///var/www/test_nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import { c as createComponent, l as layoutKey, e as emptyRenderFn, h as hUniqueSlot, Q as QResizeObserver, a as hSlot, b as hMergeSlot, d as hMergeSlotSafely, f as createDirective, s as stopAndPrevent, p as prevent, g as stop, i as listenOpts, H as History, j as client, k as getHorizontalScrollPosition, m as getVerticalScrollPosition, n as getEventPath, o as hasScrollbar, q as hDir, _ as _export_sfc } from './server.mjs';
import 'file:///var/www/test_nuxt/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///var/www/test_nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///var/www/test_nuxt/node_modules/h3/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/devalue/index.js';
import 'file:///var/www/test_nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///var/www/test_nuxt/node_modules/destr/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/klona/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/scule/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///var/www/test_nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///var/www/test_nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///var/www/test_nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///var/www/test_nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///var/www/test_nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///var/www/test_nuxt/node_modules/unctx/dist/index.mjs';

function shouldIgnoreKey (evt) {
  return evt !== Object(evt)
    || evt.isComposing === true
    || evt.qKeyEvent === true
}

function isKeyCode (evt, keyCodes) {
  return shouldIgnoreKey(evt) === true
    ? false
    : [].concat(keyCodes).includes(evt.keyCode)
}

const __nuxt_component_0 = createComponent({
  name: 'QHeader',

  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,

    heightHint: {
      type: [ String, Number ],
      default: 50
    }
  },

  emits: [ 'reveal', 'focusin' ],

  setup (props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QHeader needs to be child of QLayout');
      return emptyRenderFn
    }

    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);

    const fixed = computed(() =>
      props.reveal === true
      || $layout.view.value.indexOf('H') !== -1
      || ($q.platform.is.ios && $layout.isContainer.value === true)
    );

    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0
      }
      const offset = size.value - $layout.scroll.value.position;
      return offset > 0 ? offset : 0
    });

    const hidden = computed(() => props.modelValue !== true
      || (fixed.value === true && revealed.value !== true)
    );

    const revealOnFocus = computed(() =>
      props.modelValue === true && hidden.value === true && props.reveal === true
    );

    const classes = computed(() =>
      'q-header q-layout__section--marginal '
      + (fixed.value === true ? 'fixed' : 'absolute') + '-top'
      + (props.bordered === true ? ' q-header--bordered' : '')
      + (hidden.value === true ? ' q-header--hidden' : '')
      + (props.modelValue !== true ? ' q-layout--prevent-focus' : '')
    );

    const style = computed(() => {
      const
        view = $layout.rows.value.top,
        css = {};

      if (view[ 0 ] === 'l' && $layout.left.space === true) {
        css[ $q.lang.rtl === true ? 'right' : 'left' ] = `${ $layout.left.size }px`;
      }
      if (view[ 2 ] === 'r' && $layout.right.space === true) {
        css[ $q.lang.rtl === true ? 'left' : 'right' ] = `${ $layout.right.size }px`;
      }

      return css
    });

    function updateLayout (prop, val) {
      $layout.update('header', prop, val);
    }

    function updateLocal (prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }

    function onResize ({ height }) {
      updateLocal(size, height);
      updateLayout('size', height);
    }

    function onFocusin (evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }

      emit('focusin', evt);
    }

    watch(() => props.modelValue, val => {
      updateLayout('space', val);
      updateLocal(revealed, true);
      $layout.animate();
    });

    watch(offset, val => {
      updateLayout('offset', val);
    });

    watch(() => props.reveal, val => {
      val === false && updateLocal(revealed, props.modelValue);
    });

    watch(revealed, val => {
      $layout.animate();
      emit('reveal', val);
    });

    watch($layout.scroll, scroll => {
      props.reveal === true && updateLocal(revealed,
        scroll.direction === 'up'
        || scroll.position <= props.revealOffset
        || scroll.position - scroll.inflectionPoint < 100
      );
    });

    const instance = {};

    $layout.instances.header = instance;
    props.modelValue === true && updateLayout('size', size.value);
    updateLayout('space', props.modelValue);
    updateLayout('offset', offset.value);

    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout('size', 0);
        updateLayout('offset', 0);
        updateLayout('space', false);
      }
    });

    return () => {
      const child = hUniqueSlot(slots.default, []);

      props.elevated === true && child.push(
        h('div', {
          class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events'
        })
      );

      child.push(
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      );

      return h('header', {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child)
    }
  }
});

const __nuxt_component_1 = createComponent({
  name: 'QToolbar',

  props: {
    inset: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-toolbar row no-wrap items-center'
      + (props.inset === true ? ' q-toolbar--inset' : '')
    );

    return () => h('div', { class: classes.value, role: 'toolbar' }, hSlot(slots.default))
  }
});

const __nuxt_component_2 = createComponent({
  name: 'QToolbarTitle',

  props: {
    shrink: Boolean
  },

  setup (props, { slots }) {
    const classes = computed(() =>
      'q-toolbar__title ellipsis'
      + (props.shrink === true ? ' col-shrink' : '')
    );

    return () => h('div', { class: classes.value }, hSlot(slots.default))
  }
});

const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};

const useSizeProps = {
  size: String
};

function useSize (props, sizes = useSizeDefaults) {
  // return sizeStyle
  return computed(() => (
    props.size !== void 0
      ? { fontSize: props.size in sizes ? `${ sizes[ props.size ] }px` : props.size }
      : null
  ))
}

const defaultViewBox = '0 0 24 24';

const sameFn = i => i;
const ionFn = i => `ionicons ${ i }`;

const libMap = {
  'mdi-': i => `mdi ${ i }`,
  'icon-': sameFn, // fontawesome equiv
  'bt-': i => `bt ${ i }`,
  'eva-': i => `eva ${ i }`,
  'ion-md': ionFn,
  'ion-ios': ionFn,
  'ion-logo': ionFn,
  'iconfont ': sameFn,
  'ti-': i => `themify-icon ${ i }`,
  'bi-': i => `bootstrap-icons ${ i }`
};

const matMap = {
  o_: '-outlined',
  r_: '-round',
  s_: '-sharp'
};

const symMap = {
  sym_o_: '-outlined',
  sym_r_: '-rounded',
  sym_s_: '-sharp'
};

const libRE = new RegExp('^(' + Object.keys(libMap).join('|') + ')');
const matRE = new RegExp('^(' + Object.keys(matMap).join('|') + ')');
const symRE = new RegExp('^(' + Object.keys(symMap).join('|') + ')');
const mRE = /^[Mm]\s?[-+]?\.?\d/;
const imgRE = /^img:/;
const svgUseRE = /^svguse:/;
const ionRE = /^ion-/;
const faRE = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;

const QIcon = createComponent({
  name: 'QIcon',

  props: {
    ...useSizeProps,

    tag: {
      type: String,
      default: 'i'
    },

    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },

  setup (props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props);

    const classes = computed(() =>
      'q-icon'
      + (props.left === true ? ' on-left' : '') // TODO Qv3: drop this
      + (props.right === true ? ' on-right' : '')
      + (props.color !== void 0 ? ` text-${ props.color }` : '')
    );

    const type = computed(() => {
      let cls;
      let icon = props.name;

      if (icon === 'none' || !icon) {
        return { none: true }
      }

      if ($q.iconMapFn !== null) {
        const res = $q.iconMapFn(icon);
        if (res !== void 0) {
          if (res.icon !== void 0) {
            icon = res.icon;
            if (icon === 'none' || !icon) {
              return { none: true }
            }
          }
          else {
            return {
              cls: res.cls,
              content: res.content !== void 0
                ? res.content
                : ' '
            }
          }
        }
      }

      if (mRE.test(icon) === true) {
        const [ def, viewBox = defaultViewBox ] = icon.split('|');

        return {
          svg: true,
          viewBox,
          nodes: def.split('&&').map(path => {
            const [ d, style, transform ] = path.split('@@');
            return h('path', { style, d, transform })
          })
        }
      }

      if (imgRE.test(icon) === true) {
        return {
          img: true,
          src: icon.substring(4)
        }
      }

      if (svgUseRE.test(icon) === true) {
        const [ def, viewBox = defaultViewBox ] = icon.split('|');

        return {
          svguse: true,
          src: def.substring(7),
          viewBox
        }
      }

      let content = ' ';
      const matches = icon.match(libRE);

      if (matches !== null) {
        cls = libMap[ matches[ 1 ] ](icon);
      }
      else if (faRE.test(icon) === true) {
        cls = icon;
      }
      else if (ionRE.test(icon) === true) {
        cls = `ionicons ion-${ $q.platform.is.ios === true ? 'ios' : 'md' }${ icon.substring(3) }`;
      }
      else if (symRE.test(icon) === true) {
        // "notranslate" class is for Google Translate
        // to avoid tampering with Material Symbols ligature font
        //
        // Caution: To be able to add suffix to the class name,
        // keep the 'material-symbols' at the end of the string.
        cls = 'notranslate material-symbols';

        const matches = icon.match(symRE);
        if (matches !== null) {
          icon = icon.substring(6);
          cls += symMap[ matches[ 1 ] ];
        }

        content = icon;
      }
      else {
        // "notranslate" class is for Google Translate
        // to avoid tampering with Material Icons ligature font
        //
        // Caution: To be able to add suffix to the class name,
        // keep the 'material-icons' at the end of the string.
        cls = 'notranslate material-icons';

        const matches = icon.match(matRE);
        if (matches !== null) {
          icon = icon.substring(2);
          cls += matMap[ matches[ 1 ] ];
        }

        content = icon;
      }

      return {
        cls,
        content
      }
    });

    return () => {
      const data = {
        class: classes.value,
        style: sizeStyle.value,
        'aria-hidden': 'true',
        role: 'presentation'
      };

      if (type.value.none === true) {
        return h(props.tag, data, hSlot(slots.default))
      }

      if (type.value.img === true) {
        return h(props.tag, data, hMergeSlot(slots.default, [
          h('img', { src: type.value.src })
        ]))
      }

      if (type.value.svg === true) {
        return h(props.tag, data, hMergeSlot(slots.default, [
          h('svg', {
            viewBox: type.value.viewBox || '0 0 24 24'
          }, type.value.nodes)
        ]))
      }

      if (type.value.svguse === true) {
        return h(props.tag, data, hMergeSlot(slots.default, [
          h('svg', {
            viewBox: type.value.viewBox
          }, [
            h('use', { 'xlink:href': type.value.src })
          ])
        ]))
      }

      if (type.value.cls !== void 0) {
        data.class += ' ' + type.value.cls;
      }

      return h(props.tag, data, hMergeSlot(slots.default, [
        type.value.content
      ]))
    }
  }
});

const __nuxt_component_3 = createComponent({
  name: 'QAvatar',

  props: {
    ...useSizeProps,

    fontSize: String,

    color: String,
    textColor: String,

    icon: String,
    square: Boolean,
    rounded: Boolean
  },

  setup (props, { slots }) {
    const sizeStyle = useSize(props);

    const classes = computed(() =>
      'q-avatar'
      + (props.color ? ` bg-${ props.color }` : '')
      + (props.textColor ? ` text-${ props.textColor } q-chip--colored` : '')
      + (
        props.square === true
          ? ' q-avatar--square'
          : (props.rounded === true ? ' rounded-borders' : '')
      )
    );

    const contentStyle = computed(() => (
      props.fontSize
        ? { fontSize: props.fontSize }
        : null
    ));

    return () => {
      const icon = props.icon !== void 0
        ? [ h(QIcon, { name: props.icon }) ]
        : void 0;

      return h('div', {
        class: classes.value,
        style: sizeStyle.value
      }, [
        h('div', {
          class: 'q-avatar__content row flex-center overflow-hidden',
          style: contentStyle.value
        }, hMergeSlotSafely(slots.default, icon))
      ])
    }
  }
});

const useSpinnerProps = {
  size: {
    type: [ String, Number ],
    default: '1em'
  },
  color: String
};

function useSpinner (props) {
  return {
    cSize: computed(() => (
      props.size in useSizeDefaults
        ? `${ useSizeDefaults[ props.size ] }px`
        : props.size
    )),

    classes: computed(() =>
      'q-spinner' + (props.color ? ` text-${ props.color }` : '')
    )
  }
}

const QSpinner = createComponent({
  name: 'QSpinner',

  props: {
    ...useSpinnerProps,

    thickness: {
      type: Number,
      default: 5
    }
  },

  setup (props) {
    const { cSize, classes } = useSpinner(props);

    return () => h('svg', {
      class: classes.value + ' q-spinner-mat',
      width: cSize.value,
      height: cSize.value,
      viewBox: '25 25 50 50'
    }, [
      h('circle', {
        class: 'path',
        cx: '50',
        cy: '50',
        r: '20',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': props.thickness,
        'stroke-miterlimit': '10'
      })
    ])
  }
});

const getSSRProps = () => ({});

const Ripple = createDirective({ name: 'ripple', getSSRProps }
  
);

const alignMap = {
  left: 'start',
  center: 'center',
  right: 'end',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  stretch: 'stretch'
};

const alignValues = Object.keys(alignMap);

const useAlignProps = {
  align: {
    type: String,
    validator: v => alignValues.includes(v)
  }
};

function useAlign (props) {
  // return alignClass
  return computed(() => {
    const align = props.align === void 0
      ? props.vertical === true ? 'stretch' : 'left'
      : props.align;

    return `${ props.vertical === true ? 'items' : 'justify' }-${ alignMap[ align ] }`
  })
}

// copied to docs too

function vmHasRouter (vm) {
  return vm.appContext.config.globalProperties.$router !== void 0
}

function vmIsDestroyed (vm) {
  return vm.isUnmounted === true || vm.isDeactivated === true
}

/*
 * Inspired by RouterLink from Vue Router
 *  --> API should match!
 */


// Get the original path value of a record by following its aliasOf
function getOriginalPath (record) {
  return record
    ? (
        record.aliasOf
          ? record.aliasOf.path
          : record.path
      ) : ''
}

function isSameRouteRecord (a, b) {
  // since the original record has an undefined value for aliasOf
  // but all aliases point to the original record, this will always compare
  // the original record
  return (a.aliasOf || a) === (b.aliasOf || b)
}

function includesParams (outer, inner) {
  for (const key in inner) {
    const
      innerValue = inner[ key ],
      outerValue = outer[ key ];

    if (typeof innerValue === 'string') {
      if (innerValue !== outerValue) {
        return false
      }
    }
    else if (
      Array.isArray(outerValue) === false
      || outerValue.length !== innerValue.length
      || innerValue.some((value, i) => value !== outerValue[ i ])
    ) {
      return false
    }
  }

  return true
}

function isEquivalentArray (a, b) {
  return Array.isArray(b) === true
    ? a.length === b.length && a.every((value, i) => value === b[ i ])
    : a.length === 1 && a[ 0 ] === b
}

function isSameRouteLocationParamsValue (a, b) {
  return Array.isArray(a) === true
    ? isEquivalentArray(a, b)
    : (
        Array.isArray(b) === true
          ? isEquivalentArray(b, a)
          : a === b
      )
}

function isSameRouteLocationParams (a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false
  }

  for (const key in a) {
    if (isSameRouteLocationParamsValue(a[ key ], b[ key ]) === false) {
      return false
    }
  }

  return true
}

const useRouterLinkNonMatchingProps = {
  // router-link
  to: [ String, Object ],
  replace: Boolean,

  // regular <a> link
  href: String,
  target: String,

  // state
  disable: Boolean
};

// external props: type, tag

function useRouterLink ({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
  const vm = getCurrentInstance();
  const { props, proxy, emit } = vm;

  const hasRouter = vmHasRouter(vm);
  const hasHrefLink = computed(() => props.disable !== true && props.href !== void 0);

  // for perf reasons, we use minimum amount of runtime work
  const hasRouterLinkProps = useDisableForRouterLinkProps === true
    ? computed(() =>
      hasRouter === true
      && props.disable !== true
      && hasHrefLink.value !== true
      && props.to !== void 0 && props.to !== null && props.to !== ''
    )
    : computed(() =>
      hasRouter === true
      && hasHrefLink.value !== true
      && props.to !== void 0 && props.to !== null && props.to !== ''
    );

  const resolvedLink = computed(() => (
    hasRouterLinkProps.value === true
      ? getLink(props.to)
      : null
  ));

  const hasRouterLink = computed(() => resolvedLink.value !== null);
  const hasLink = computed(() => hasHrefLink.value === true || hasRouterLink.value === true);

  const linkTag = computed(() => (
    props.type === 'a' || hasLink.value === true
      ? 'a'
      : (props.tag || fallbackTag || 'div')
  ));

  const linkAttrs = computed(() => (
    hasHrefLink.value === true
      ? {
          href: props.href,
          target: props.target
        }
      : (
          hasRouterLink.value === true
            ? {
                href: resolvedLink.value.href,
                target: props.target
              }
            : {}
        )
  ));

  const linkActiveIndex = computed(() => {
    if (hasRouterLink.value === false) {
      return -1
    }

    const
      { matched } = resolvedLink.value,
      { length } = matched,
      routeMatched = matched[ length - 1 ];

    if (routeMatched === void 0) {
      return -1
    }

    const currentMatched = proxy.$route.matched;

    if (currentMatched.length === 0) {
      return -1
    }

    const index = currentMatched.findIndex(
      isSameRouteRecord.bind(null, routeMatched)
    );

    if (index !== -1) {
      return index
    }

    // possible parent record
    const parentRecordPath = getOriginalPath(matched[ length - 2 ]);

    return (
      // we are dealing with nested routes
      length > 1
      // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      && getOriginalPath(routeMatched) === parentRecordPath
      // avoid comparing the child with its parent
      && currentMatched[ currentMatched.length - 1 ].path !== parentRecordPath
        ? currentMatched.findIndex(
          isSameRouteRecord.bind(null, matched[ length - 2 ])
        )
        : index
    )
  });

  const linkIsActive = computed(() =>
    hasRouterLink.value === true
    && linkActiveIndex.value !== -1
    && includesParams(proxy.$route.params, resolvedLink.value.params)
  );

  const linkIsExactActive = computed(() =>
    linkIsActive.value === true
      && linkActiveIndex.value === proxy.$route.matched.length - 1
      && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params)
  );

  const linkClass = computed(() => (
    hasRouterLink.value === true
      ? (
          linkIsExactActive.value === true
            ? ` ${ props.exactActiveClass } ${ props.activeClass }`
            : (
                props.exact === true
                  ? ''
                  : (linkIsActive.value === true ? ` ${ props.activeClass }` : '')
              )
        )
      : ''
  ));

  function getLink (to) {
    try { return proxy.$router.resolve(to) }
    catch (_) {}

    return null
  }

  /**
   * @returns Promise<RouterError | false | undefined>
   */
  function navigateToRouterLink (
    e,
    { returnRouterError, to = props.to, replace = props.replace } = {}
  ) {
    if (props.disable === true) {
      // ensure native navigation is prevented in all cases,
      // like when useDisableForRouterLinkProps === false (QRouteTab)
      e.preventDefault();
      return Promise.resolve(false)
    }

    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      e.metaKey || e.altKey || e.ctrlKey || e.shiftKey

      // don't redirect on right click
      || (e.button !== void 0 && e.button !== 0)

      // don't redirect if it should open in a new window
      || props.target === '_blank'
    ) {
      return Promise.resolve(false)
    }

    // hinder the native navigation
    e.preventDefault();

    // then() can also return a "soft" router error (Vue Router behavior)
    const promise = proxy.$router[ replace === true ? 'replace' : 'push' ](to);

    return returnRouterError === true
      ? promise
      // else catching hard errors and also "soft" ones - then(err => ...)
      : promise.then(() => {}).catch(() => {})
  }

  // warning! ensure that the component using it has 'click' included in its 'emits' definition prop
  function navigateOnClick (e) {
    if (hasRouterLink.value === true) {
      const go = opts => navigateToRouterLink(e, opts);

      emit('click', e, go);
      e.defaultPrevented !== true && go();
    }
    else {
      emit('click', e);
    }
  }

  return {
    hasRouterLink,
    hasHrefLink,
    hasLink,

    linkTag,
    resolvedLink,
    linkIsActive,
    linkIsExactActive,
    linkClass,
    linkAttrs,

    getLink,
    navigateToRouterLink,
    navigateOnClick
  }
}

const btnPadding = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};

const defaultSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};

const formTypes = [ 'button', 'submit', 'reset' ];
const mediaTypeRE = /[^\s]\/[^\s]/;

const btnDesignOptions = [ 'flat', 'outline', 'push', 'unelevated' ];

function getBtnDesign (props, defaultValue) {
  if (props.flat === true) return 'flat'
  if (props.outline === true) return 'outline'
  if (props.push === true) return 'push'
  if (props.unelevated === true) return 'unelevated'
  return defaultValue
}

const nonRoundBtnProps = {
  ...useSizeProps,
  ...useRouterLinkNonMatchingProps,

  type: {
    type: String,
    default: 'button'
  },

  label: [ Number, String ],
  icon: String,
  iconRight: String,

  ...btnDesignOptions.reduce(
    (acc, val) => (acc[ val ] = Boolean) && acc,
    {}
  ),

  square: Boolean,
  rounded: Boolean,
  glossy: Boolean,

  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,

  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,

  tabindex: [ Number, String ],

  ripple: {
    type: [ Boolean, Object ],
    default: true
  },

  align: {
    ...useAlignProps.align,
    default: 'center'
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};

const useBtnProps = {
  ...nonRoundBtnProps,
  round: Boolean
};

function useBtn (props) {
  const sizeStyle = useSize(props, defaultSizes);
  const alignClass = useAlign(props);
  const { hasRouterLink, hasLink, linkTag, linkAttrs, navigateOnClick } = useRouterLink({
    fallbackTag: 'button'
  });

  const style = computed(() => {
    const obj = props.fab === false && props.fabMini === false
      ? sizeStyle.value
      : {};

    return props.padding !== void 0
      ? Object.assign({}, obj, {
        padding: props.padding
          .split(/\s+/)
          .map(v => (v in btnPadding ? btnPadding[ v ] + 'px' : v))
          .join(' '),
        minWidth: '0',
        minHeight: '0'
      })
      : obj
  });

  const isRounded = computed(() =>
    props.rounded === true || props.fab === true || props.fabMini === true
  );

  const isActionable = computed(() =>
    props.disable !== true && props.loading !== true
  );

  const tabIndex = computed(() => (
    isActionable.value === true ? props.tabindex || 0 : -1
  ));

  const design = computed(() => getBtnDesign(props, 'standard'));

  const attributes = computed(() => {
    const acc = { tabindex: tabIndex.value };

    if (hasLink.value === true) {
      Object.assign(acc, linkAttrs.value);
    }
    else if (formTypes.includes(props.type) === true) {
      acc.type = props.type;
    }

    if (linkTag.value === 'a') {
      if (props.disable === true) {
        acc[ 'aria-disabled' ] = 'true';
      }
      else if (acc.href === void 0) {
        acc.role = 'button';
      }

      if (hasRouterLink.value !== true && mediaTypeRE.test(props.type) === true) {
        acc.type = props.type;
      }
    }
    else if (props.disable === true) {
      acc.disabled = '';
      acc[ 'aria-disabled' ] = 'true';
    }

    if (props.loading === true && props.percentage !== void 0) {
      Object.assign(acc, {
        role: 'progressbar',
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': props.percentage
      });
    }

    return acc
  });

  const classes = computed(() => {
    let colors;

    if (props.color !== void 0) {
      if (props.flat === true || props.outline === true) {
        colors = `text-${ props.textColor || props.color }`;
      }
      else {
        colors = `bg-${ props.color } text-${ props.textColor || 'white' }`;
      }
    }
    else if (props.textColor) {
      colors = `text-${ props.textColor }`;
    }

    const shape = props.round === true
      ? 'round'
      : `rectangle${ isRounded.value === true ? ' q-btn--rounded' : (props.square === true ? ' q-btn--square' : '') }`;

    return `q-btn--${ design.value } q-btn--${ shape }`
      + (colors !== void 0 ? ' ' + colors : '')
      + (isActionable.value === true ? ' q-btn--actionable q-focusable q-hoverable' : (props.disable === true ? ' disabled' : ''))
      + (props.fab === true ? ' q-btn--fab' : (props.fabMini === true ? ' q-btn--fab-mini' : ''))
      + (props.noCaps === true ? ' q-btn--no-uppercase' : '')
      + (props.dense === true ? ' q-btn--dense' : '')
      + (props.stretch === true ? ' no-border-radius self-stretch' : '')
      + (props.glossy === true ? ' glossy' : '')
      + (props.square ? ' q-btn--square' : '')
  });

  const innerClasses = computed(() =>
    alignClass.value + (props.stack === true ? ' column' : ' row')
    + (props.noWrap === true ? ' no-wrap text-no-wrap' : '')
    + (props.loading === true ? ' q-btn__content--hidden' : '')
  );

  return {
    classes,
    style,
    innerClasses,
    attributes,
    hasLink,
    linkTag,
    navigateOnClick,
    isActionable
  }
}

const { passiveCapture } = listenOpts;

let
  touchTarget = null,
  keyboardTarget = null,
  mouseTarget = null;

const __nuxt_component_4 = createComponent({
  name: 'QBtn',

  props: {
    ...useBtnProps,

    percentage: Number,
    darkPercentage: Boolean,

    onTouchstart: [ Function, Array ]
  },

  emits: [ 'click', 'keydown', 'mousedown', 'keyup' ],

  setup (props, { slots, emit }) {
    const { proxy } = getCurrentInstance();

    const {
      classes, style, innerClasses,
      attributes,
      hasLink, linkTag, navigateOnClick,
      isActionable
    } = useBtn(props);

    const rootRef = ref(null);
    const blurTargetRef = ref(null);

    let localTouchTargetEl = null, avoidMouseRipple, mouseTimer = null;

    const hasLabel = computed(() =>
      props.label !== void 0 && props.label !== null && props.label !== ''
    );

    const ripple = computed(() => (
      props.disable === true || props.ripple === false
        ? false
        : {
            keyCodes: hasLink.value === true ? [ 13, 32 ] : [ 13 ],
            ...(props.ripple === true ? {} : props.ripple)
          }
    ));

    const rippleProps = computed(() => ({ center: props.round }));

    const percentageStyle = computed(() => {
      const val = Math.max(0, Math.min(100, props.percentage));
      return val > 0
        ? { transition: 'transform 0.6s', transform: `translateX(${ val - 100 }%)` }
        : {}
    });

    const onEvents = computed(() => {
      if (props.loading === true) {
        return {
          onMousedown: onLoadingEvt,
          onTouchstart: onLoadingEvt,
          onClick: onLoadingEvt,
          onKeydown: onLoadingEvt,
          onKeyup: onLoadingEvt
        }
      }

      if (isActionable.value === true) {
        const acc = {
          onClick,
          onKeydown,
          onMousedown
        };

        if (proxy.$q.platform.has.touch === true) {
          const suffix = props.onTouchstart !== void 0
            ? ''
            : 'Passive';

          acc[ `onTouchstart${ suffix }` ] = onTouchstart;
        }

        return acc
      }

      return {
        // needed; especially for disabled <a> tags
        onClick: stopAndPrevent
      }
    });

    const nodeProps = computed(() => ({
      ref: rootRef,
      class: 'q-btn q-btn-item non-selectable no-outline ' + classes.value,
      style: style.value,
      ...attributes.value,
      ...onEvents.value
    }));

    function onClick (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      if (e !== void 0) {
        if (e.defaultPrevented === true) {
          return
        }

        const el = document.activeElement;
        // focus button if it came from ENTER on form
        // prevent the new submit (already done)
        if (
          props.type === 'submit'
          && el !== document.body
          && rootRef.value.contains(el) === false
          // required for iOS and desktop Safari
          && el.contains(rootRef.value) === false
        ) {
          rootRef.value.focus();

          const onClickCleanup = () => {
            document.removeEventListener('keydown', stopAndPrevent, true);
            document.removeEventListener('keyup', onClickCleanup, passiveCapture);
            rootRef.value !== null && rootRef.value.removeEventListener('blur', onClickCleanup, passiveCapture);
          };

          document.addEventListener('keydown', stopAndPrevent, true);
          document.addEventListener('keyup', onClickCleanup, passiveCapture);
          rootRef.value.addEventListener('blur', onClickCleanup, passiveCapture);
        }
      }

      navigateOnClick(e);
    }

    function onKeydown (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      emit('keydown', e);

      if (isKeyCode(e, [ 13, 32 ]) === true && keyboardTarget !== rootRef.value) {
        keyboardTarget !== null && cleanup();

        if (e.defaultPrevented !== true) {
          // focus external button if the focus helper was focused before
          rootRef.value.focus();

          keyboardTarget = rootRef.value;
          rootRef.value.classList.add('q-btn--active');
          document.addEventListener('keyup', onPressEnd, true);
          rootRef.value.addEventListener('blur', onPressEnd, passiveCapture);
        }

        stopAndPrevent(e);
      }
    }

    function onTouchstart (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      emit('touchstart', e);

      if (e.defaultPrevented === true) return

      if (touchTarget !== rootRef.value) {
        touchTarget !== null && cleanup();
        touchTarget = rootRef.value;

        localTouchTargetEl = e.target;
        localTouchTargetEl.addEventListener('touchcancel', onPressEnd, passiveCapture);
        localTouchTargetEl.addEventListener('touchend', onPressEnd, passiveCapture);
      }

      // avoid duplicated mousedown event
      // triggering another early ripple
      avoidMouseRipple = true;
      mouseTimer !== null && clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        mouseTimer = null;
        avoidMouseRipple = false;
      }, 200);
    }

    function onMousedown (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      e.qSkipRipple = avoidMouseRipple === true;
      emit('mousedown', e);

      if (e.defaultPrevented !== true && mouseTarget !== rootRef.value) {
        mouseTarget !== null && cleanup();
        mouseTarget = rootRef.value;
        rootRef.value.classList.add('q-btn--active');
        document.addEventListener('mouseup', onPressEnd, passiveCapture);
      }
    }

    function onPressEnd (e) {
      // is it already destroyed?
      if (rootRef.value === null) return

      // needed for IE (because it emits blur when focusing button from focus helper)
      if (e !== void 0 && e.type === 'blur' && document.activeElement === rootRef.value) {
        return
      }

      if (e !== void 0 && e.type === 'keyup') {
        if (keyboardTarget === rootRef.value && isKeyCode(e, [ 13, 32 ]) === true) {
          // for click trigger
          const evt = new MouseEvent('click', e);
          evt.qKeyEvent = true;
          e.defaultPrevented === true && prevent(evt);
          e.cancelBubble === true && stop(evt);
          rootRef.value.dispatchEvent(evt);

          stopAndPrevent(e);

          // for ripple
          e.qKeyEvent = true;
        }

        emit('keyup', e);
      }

      cleanup();
    }

    function cleanup (destroying) {
      const blurTarget = blurTargetRef.value;

      if (
        destroying !== true
        && (touchTarget === rootRef.value || mouseTarget === rootRef.value)
        && blurTarget !== null
        && blurTarget !== document.activeElement
      ) {
        blurTarget.setAttribute('tabindex', -1);
        blurTarget.focus();
      }

      if (touchTarget === rootRef.value) {
        if (localTouchTargetEl !== null) {
          localTouchTargetEl.removeEventListener('touchcancel', onPressEnd, passiveCapture);
          localTouchTargetEl.removeEventListener('touchend', onPressEnd, passiveCapture);
        }
        touchTarget = localTouchTargetEl = null;
      }

      if (mouseTarget === rootRef.value) {
        document.removeEventListener('mouseup', onPressEnd, passiveCapture);
        mouseTarget = null;
      }

      if (keyboardTarget === rootRef.value) {
        document.removeEventListener('keyup', onPressEnd, true);
        rootRef.value !== null && rootRef.value.removeEventListener('blur', onPressEnd, passiveCapture);
        keyboardTarget = null;
      }

      rootRef.value !== null && rootRef.value.classList.remove('q-btn--active');
    }

    function onLoadingEvt (evt) {
      stopAndPrevent(evt);
      evt.qSkipRipple = true;
    }

    onBeforeUnmount(() => {
      cleanup(true);
    });

    // expose public methods
    Object.assign(proxy, {
      click: e => {
        if (isActionable.value === true) {
          onClick(e);
        }
      }
    });

    return () => {
      let inner = [];

      props.icon !== void 0 && inner.push(
        h(QIcon, {
          name: props.icon,
          left: props.stack !== true && hasLabel.value === true,
          role: 'img',
          'aria-hidden': 'true'
        })
      );

      hasLabel.value === true && inner.push(
        h('span', { class: 'block' }, [ props.label ])
      );

      inner = hMergeSlot(slots.default, inner);

      if (props.iconRight !== void 0 && props.round === false) {
        inner.push(
          h(QIcon, {
            name: props.iconRight,
            right: props.stack !== true && hasLabel.value === true,
            role: 'img',
            'aria-hidden': 'true'
          })
        );
      }

      const child = [
        h('span', {
          class: 'q-focus-helper',
          ref: blurTargetRef
        })
      ];

      if (props.loading === true && props.percentage !== void 0) {
        child.push(
          h('span', {
            class: 'q-btn__progress absolute-full overflow-hidden' + (props.darkPercentage === true ? ' q-btn__progress--dark' : '')
          }, [
            h('span', {
              class: 'q-btn__progress-indicator fit block',
              style: percentageStyle.value
            })
          ])
        );
      }

      child.push(
        h('span', {
          class: 'q-btn__content text-center col items-center q-anchor--skip ' + innerClasses.value
        }, inner)
      );

      props.loading !== null && child.push(
        h(Transition, {
          name: 'q-transition--fade'
        }, () => (
          props.loading === true
            ? [
                h('span', {
                  key: 'loading',
                  class: 'absolute-full flex flex-center'
                }, slots.loading !== void 0 ? slots.loading() : [ h(QSpinner) ])
              ]
            : null
        ))
      );

      return withDirectives(
        h(
          linkTag.value,
          nodeProps.value,
          child
        ),
        [ [
          Ripple,
          ripple.value,
          void 0,
          rippleProps.value
        ] ]
      )
    }
  }
});

function useHistory (showing, hide, hideOnRouteChange) {
  let historyEntry;

  function removeFromHistory () {
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
  }

  onBeforeUnmount(() => {
    showing.value === true && removeFromHistory();
  });

  return {
    removeFromHistory,

    addToHistory () {
      historyEntry = {
        condition: () => hideOnRouteChange.value === true,
        handler: hide
      };

      History.add(historyEntry);
    }
  }
}

const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  },

  'onUpdate:modelValue': [ Function, Array ]
};

const useModelToggleEmits = [
  'beforeShow', 'show', 'beforeHide', 'hide'
];

// handleShow/handleHide -> removeTick(), self (& emit show)

function useModelToggle ({
  showing,
  canShow, // optional
  hideOnRouteChange, // optional
  handleShow, // optional
  handleHide, // optional
  processOnMount // optional
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;

  let payload;

  function toggle (evt) {
    if (showing.value === true) ;
    else {
      show(evt);
    }
  }

  function show (evt) {
    if (
      props.disable === true
      || (evt !== void 0 && evt.qAnchorHandled === true)
      || (canShow !== void 0 && canShow(evt) !== true)
    ) {
      return
    }

    const listener = props[ 'onUpdate:modelValue' ] !== void 0;

    if (listener === true && true !== true) {
      emit('update:modelValue', true);
      payload = evt;
      nextTick(() => {
        if (payload === evt) {
          payload = void 0;
        }
      });
    }

    if (props.modelValue === null || listener === false || true) {
      processShow(evt);
    }
  }

  function processShow (evt) {
    if (showing.value === true) {
      return
    }

    showing.value = true;

    emit('beforeShow', evt);

    if (handleShow !== void 0) {
      handleShow(evt);
    }
    else {
      emit('show', evt);
    }
  }

  function hide (evt) {
    {
      return
    }
  }

  function processHide (evt) {
    if (showing.value === false) {
      return
    }

    showing.value = false;

    emit('beforeHide', evt);

    if (handleHide !== void 0) {
      handleHide(evt);
    }
    else {
      emit('hide', evt);
    }
  }

  function processModelChange (val) {
    if (props.disable === true && val === true) {
      if (props[ 'onUpdate:modelValue' ] !== void 0) {
        emit('update:modelValue', false);
      }
    }
    else if ((val === true) !== showing.value) {
      const fn = val === true ? processShow : processHide;
      fn(payload);
    }
  }

  watch(() => props.modelValue, processModelChange);

  if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) {
    watch(() => proxy.$route.fullPath, () => {
      if (hideOnRouteChange.value === true && showing.value === true) ;
    });
  }

  processOnMount === true && onMounted(() => {
    processModelChange(props.modelValue);
  });

  // expose public methods
  const publicMethods = { show, hide, toggle };
  Object.assign(proxy, publicMethods);

  return publicMethods
}

let
  registered = 0,
  scrollPositionX,
  scrollPositionY,
  maxScrollTop,
  vpPendingUpdate = false,
  bodyLeft,
  bodyTop,
  href,
  closeTimer = null;

function onWheel (e) {
  if (shouldPreventScroll(e)) {
    stopAndPrevent(e);
  }
}

function shouldPreventScroll (e) {
  if (e.target === document.body || e.target.classList.contains('q-layout__backdrop')) {
    return true
  }

  const
    path = getEventPath(e),
    shift = e.shiftKey && !e.deltaX,
    scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    delta = shift || scrollY ? e.deltaY : e.deltaX;

  for (let index = 0; index < path.length; index++) {
    const el = path[ index ];

    if (hasScrollbar(el, scrollY)) {
      return scrollY
        ? (
            delta < 0 && el.scrollTop === 0
              ? true
              : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight
          )
        : (
            delta < 0 && el.scrollLeft === 0
              ? true
              : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth
          )
    }
  }

  return true
}

function onAppleScroll (e) {
  if (e.target === document) {
    // required, otherwise iOS blocks further scrolling
    // until the mobile scrollbar dissappears
    document.scrollingElement.scrollTop = document.scrollingElement.scrollTop; // eslint-disable-line
  }
}

function onAppleResize (evt) {
  if (vpPendingUpdate === true) {
    return
  }

  vpPendingUpdate = true;

  requestAnimationFrame(() => {
    vpPendingUpdate = false;

    const
      { height } = evt.target,
      { clientHeight, scrollTop } = document.scrollingElement;

    if (maxScrollTop === void 0 || height !== window.innerHeight) {
      maxScrollTop = clientHeight - height;
      document.scrollingElement.scrollTop = scrollTop;
    }

    if (scrollTop > maxScrollTop) {
      document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
    }
  });
}

function apply (action) {
  const
    body = document.body,
    hasViewport = window.visualViewport !== void 0;

  if (action === 'add') {
    const { overflowY, overflowX } = window.getComputedStyle(body);

    scrollPositionX = getHorizontalScrollPosition(window);
    scrollPositionY = getVerticalScrollPosition(window);
    bodyLeft = body.style.left;
    bodyTop = body.style.top;

    href = window.location.href;

    body.style.left = `-${ scrollPositionX }px`;
    body.style.top = `-${ scrollPositionY }px`;

    if (overflowX !== 'hidden' && (overflowX === 'scroll' || body.scrollWidth > window.innerWidth)) {
      body.classList.add('q-body--force-scrollbar-x');
    }
    if (overflowY !== 'hidden' && (overflowY === 'scroll' || body.scrollHeight > window.innerHeight)) {
      body.classList.add('q-body--force-scrollbar-y');
    }

    body.classList.add('q-body--prevent-scroll');
    document.qScrollPrevented = true;

    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.scrollTo(0, 0);
        window.visualViewport.addEventListener('resize', onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.addEventListener('scroll', onAppleResize, listenOpts.passiveCapture);
        window.scrollTo(0, 0);
      }
      else {
        window.addEventListener('scroll', onAppleScroll, listenOpts.passiveCapture);
      }
    }
  }

  if (client.is.desktop === true && client.is.mac === true) {
    // ref. https://developers.google.com/web/updates/2017/01/scrolling-intervention
    window[ `${ action }EventListener` ]('wheel', onWheel, listenOpts.notPassive);
  }

  if (action === 'remove') {
    if (client.is.ios === true) {
      if (hasViewport === true) {
        window.visualViewport.removeEventListener('resize', onAppleResize, listenOpts.passiveCapture);
        window.visualViewport.removeEventListener('scroll', onAppleResize, listenOpts.passiveCapture);
      }
      else {
        window.removeEventListener('scroll', onAppleScroll, listenOpts.passiveCapture);
      }
    }

    body.classList.remove('q-body--prevent-scroll');
    body.classList.remove('q-body--force-scrollbar-x');
    body.classList.remove('q-body--force-scrollbar-y');

    document.qScrollPrevented = false;

    body.style.left = bodyLeft;
    body.style.top = bodyTop;

    // scroll back only if route has not changed
    if (window.location.href === href) {
      window.scrollTo(scrollPositionX, scrollPositionY);
    }

    maxScrollTop = void 0;
  }
}

function preventScroll (state) {
  let action = 'add';

  if (state === true) {
    registered++;

    if (closeTimer !== null) {
      clearTimeout(closeTimer);
      closeTimer = null;
      return
    }

    if (registered > 1) {
      return
    }
  }
  else {
    if (registered === 0) {
      return
    }

    registered--;

    if (registered > 0) {
      return
    }

    action = 'remove';

    if (client.is.ios === true && client.is.nativeMobile === true) {
      closeTimer !== null && clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        apply(action);
        closeTimer = null;
      }, 100);
      return
    }
  }

  apply(action);
}

function usePreventScroll () {
  let currentState;

  return {
    preventBodyScroll (state) {
      if (
        state !== currentState
        && (currentState !== void 0 || state === true)
      ) {
        currentState = state;
        preventScroll(state);
      }
    }
  }
}

/*
 * Usage:
 *    registerTimeout(fn[, delay])
 *    removeTimeout()
 */

function useTimeout () {
  let timer = null;
  const vm = getCurrentInstance();

  function removeTimeout () {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }

  onDeactivated(removeTimeout);
  onBeforeUnmount(removeTimeout);

  return {
    removeTimeout,

    registerTimeout (fn, delay) {
      removeTimeout();

      if (vmIsDestroyed(vm) === false) {
        timer = setTimeout(() => {
          timer = null;
          fn();
        }, delay);
      }
    }
  }
}

const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};

function useDark (props, $q) {
  // return isDark
  return computed(() => (
    props.dark === null
      ? $q.dark.isActive
      : props.dark
  ))
}

const TouchPan = createDirective({ name: 'touch-pan', getSSRProps }
  
);

function between (v, min, max) {
  return max <= min
    ? min
    : Math.min(max, Math.max(min, v))
}

const duration = 150;

const __nuxt_component_5 = createComponent({
  name: 'QDrawer',

  inheritAttrs: false,

  props: {
    ...useModelToggleProps,
    ...useDarkProps,

    side: {
      type: String,
      default: 'left',
      validator: v => [ 'left', 'right' ].includes(v)
    },

    width: {
      type: Number,
      default: 300
    },

    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    noMiniAnimation: Boolean,

    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,

    behavior: {
      type: String,
      validator: v => [ 'default', 'desktop', 'mobile' ].includes(v),
      default: 'default'
    },

    bordered: Boolean,
    elevated: Boolean,

    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },

  emits: [
    ...useModelToggleEmits,
    'onLayout', 'miniState'
  ],

  setup (props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;

    const isDark = useDark(props, $q);
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout, removeTimeout } = useTimeout();

    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error('QDrawer needs to be child of QLayout');
      return emptyRenderFn
    }

    let lastDesktopState, timerMini = null, layoutTotalWidthWatcher;

    const belowBreakpoint = ref(
      props.behavior === 'mobile'
      || (props.behavior !== 'desktop' && $layout.totalWidth.value <= props.breakpoint)
    );

    const isMini = computed(() =>
      props.mini === true && belowBreakpoint.value !== true
    );

    const size = computed(() => (
      isMini.value === true
        ? props.miniWidth
        : props.width
    ));

    const showing = ref(
      props.showIfAbove === true && belowBreakpoint.value === false
        ? true
        : props.modelValue === true
    );

    const hideOnRouteChange = computed(() =>
      props.persistent !== true
      && (belowBreakpoint.value === true || onScreenOverlay.value === true)
    );

    function handleShow (evt, noEvent) {
      addToHistory();

      evt !== false && $layout.animate();
      applyPosition(0);

      if (belowBreakpoint.value === true) {
        const otherInstance = $layout.instances[ otherSide.value ];
        if (otherInstance !== void 0 && otherInstance.belowBreakpoint === true) {
          otherInstance.hide(false);
        }

        applyBackdrop(1);
        $layout.isContainer.value !== true && preventBodyScroll(true);
      }
      else {
        applyBackdrop(0);
        evt !== false && setScrollable(false);
      }

      registerTimeout(() => {
        evt !== false && setScrollable(true);
        noEvent !== true && emit('show', evt);
      }, duration);
    }

    function handleHide (evt, noEvent) {
      removeFromHistory();

      evt !== false && $layout.animate();

      applyBackdrop(0);
      applyPosition(stateDirection.value * size.value);

      cleanup();

      if (noEvent !== true) {
        registerTimeout(() => { emit('hide', evt); }, duration);
      }
      else {
        removeTimeout();
      }
    }

    const { show, hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide
    });

    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);

    const instance = {
      belowBreakpoint,
      hide
    };

    const rightSide = computed(() => props.side === 'right');

    const stateDirection = computed(() =>
      ($q.lang.rtl === true ? -1 : 1) * (rightSide.value === true ? 1 : -1)
    );

    const flagBackdropBg = ref(0);
    const flagPanning = ref(false);
    const flagMiniAnimate = ref(false);
    const flagContentPosition = ref( // starting with "hidden" for SSR
      size.value * stateDirection.value
    );

    const otherSide = computed(() => (rightSide.value === true ? 'left' : 'right'));
    const offset = computed(() => (
      showing.value === true && belowBreakpoint.value === false && props.overlay === false
        ? (props.miniToOverlay === true ? props.miniWidth : size.value)
        : 0
    ));

    const fixed = computed(() =>
      props.overlay === true
      || props.miniToOverlay === true
      || $layout.view.value.indexOf(rightSide.value ? 'R' : 'L') !== -1
      || ($q.platform.is.ios === true && $layout.isContainer.value === true)
    );

    const onLayout = computed(() =>
      props.overlay === false
      && showing.value === true
      && belowBreakpoint.value === false
    );

    const onScreenOverlay = computed(() =>
      props.overlay === true
      && showing.value === true
      && belowBreakpoint.value === false
    );

    const backdropClass = computed(() =>
      'fullscreen q-drawer__backdrop'
      + (showing.value === false && flagPanning.value === false ? ' hidden' : '')
    );

    const backdropStyle = computed(() => ({
      backgroundColor: `rgba(0,0,0,${ flagBackdropBg.value * 0.4 })`
    }));

    const headerSlot = computed(() => (
      rightSide.value === true
        ? $layout.rows.value.top[ 2 ] === 'r'
        : $layout.rows.value.top[ 0 ] === 'l'
    ));

    const footerSlot = computed(() => (
      rightSide.value === true
        ? $layout.rows.value.bottom[ 2 ] === 'r'
        : $layout.rows.value.bottom[ 0 ] === 'l'
    ));

    const aboveStyle = computed(() => {
      const css = {};

      if ($layout.header.space === true && headerSlot.value === false) {
        if (fixed.value === true) {
          css.top = `${ $layout.header.offset }px`;
        }
        else if ($layout.header.space === true) {
          css.top = `${ $layout.header.size }px`;
        }
      }

      if ($layout.footer.space === true && footerSlot.value === false) {
        if (fixed.value === true) {
          css.bottom = `${ $layout.footer.offset }px`;
        }
        else if ($layout.footer.space === true) {
          css.bottom = `${ $layout.footer.size }px`;
        }
      }

      return css
    });

    const style = computed(() => {
      const style = {
        width: `${ size.value }px`,
        transform: `translateX(${ flagContentPosition.value }px)`
      };

      return belowBreakpoint.value === true
        ? style
        : Object.assign(style, aboveStyle.value)
    });

    const contentClass = computed(() =>
      'q-drawer__content fit '
      + ($layout.isContainer.value !== true ? 'scroll' : 'overflow-auto')
    );

    const classes = computed(() =>
      `q-drawer q-drawer--${ props.side }`
      + (flagMiniAnimate.value === true ? ' q-drawer--mini-animate' : '')
      + (props.bordered === true ? ' q-drawer--bordered' : '')
      + (isDark.value === true ? ' q-drawer--dark q-dark' : '')
      + (
        flagPanning.value === true
          ? ' no-transition'
          : (showing.value === true ? '' : ' q-layout--prevent-focus')
      )
      + (
        belowBreakpoint.value === true
          ? ' fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding'
          : ` q-drawer--${ isMini.value === true ? 'mini' : 'standard' }`
          + (fixed.value === true || onLayout.value !== true ? ' fixed' : '')
          + (props.overlay === true || props.miniToOverlay === true ? ' q-drawer--on-top' : '')
          + (headerSlot.value === true ? ' q-drawer--top-padding' : '')
      )
    );

    const openDirective = computed(() => {
      // if props.noSwipeOpen !== true
      const dir = $q.lang.rtl === true ? props.side : otherSide.value;

      return [ [
        TouchPan,
        onOpenPan,
        void 0,
        {
          [ dir ]: true,
          mouse: true
        }
      ] ]
    });

    const contentCloseDirective = computed(() => {
      // if belowBreakpoint.value === true && props.noSwipeClose !== true
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;

      return [ [
        TouchPan,
        onClosePan,
        void 0,
        {
          [ dir ]: true,
          mouse: true
        }
      ] ]
    });

    const backdropCloseDirective = computed(() => {
      // if showing.value === true && props.noSwipeBackdrop !== true
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;

      return [ [
        TouchPan,
        onClosePan,
        void 0,
        {
          [ dir ]: true,
          mouse: true,
          mouseAllDir: true
        }
      ] ]
    });

    function updateBelowBreakpoint () {
      updateLocal(belowBreakpoint, (
        props.behavior === 'mobile'
        || (props.behavior !== 'desktop' && $layout.totalWidth.value <= props.breakpoint)
      ));
    }

    watch(belowBreakpoint, val => {
      if (val === true) { // from lg to xs
        lastDesktopState = showing.value;
        showing.value === true && hide(false);
      }
      else if (
        props.overlay === false
        && props.behavior !== 'mobile'
        && lastDesktopState !== false
      ) { // from xs to lg
        if (showing.value === true) {
          applyPosition(0);
          applyBackdrop(0);
          cleanup();
        }
        else {
          show(false);
        }
      }
    });

    watch(() => props.side, (newSide, oldSide) => {
      if ($layout.instances[ oldSide ] === instance) {
        $layout.instances[ oldSide ] = void 0;
        $layout[ oldSide ].space = false;
        $layout[ oldSide ].offset = 0;
      }

      $layout.instances[ newSide ] = instance;
      $layout[ newSide ].size = size.value;
      $layout[ newSide ].space = onLayout.value;
      $layout[ newSide ].offset = offset.value;
    });

    watch($layout.totalWidth, () => {
      if ($layout.isContainer.value === true || document.qScrollPrevented !== true) {
        updateBelowBreakpoint();
      }
    });

    watch(
      () => props.behavior + props.breakpoint,
      updateBelowBreakpoint
    );

    watch($layout.isContainer, val => {
      showing.value === true && preventBodyScroll(val !== true);
      val === true && updateBelowBreakpoint();
    });

    watch($layout.scrollbarWidth, () => {
      applyPosition(showing.value === true ? 0 : void 0);
    });

    watch(offset, val => { updateLayout('offset', val); });

    watch(onLayout, val => {
      emit('onLayout', val);
      updateLayout('space', val);
    });

    watch(rightSide, () => { applyPosition(); });

    watch(size, val => {
      applyPosition();
      updateSizeOnLayout(props.miniToOverlay, val);
    });

    watch(() => props.miniToOverlay, val => {
      updateSizeOnLayout(val, size.value);
    });

    watch(() => $q.lang.rtl, () => { applyPosition(); });

    watch(() => props.mini, () => {
      if (props.noMiniAnimation) return
      if (props.modelValue === true) {
        animateMini();
        $layout.animate();
      }
    });

    watch(isMini, val => { emit('miniState', val); });

    function applyPosition (position) {
      if (position === void 0) {
        nextTick(() => {
          position = showing.value === true ? 0 : size.value;
          applyPosition(stateDirection.value * position);
        });
      }
      else {
        if (
          $layout.isContainer.value === true
          && rightSide.value === true
          && (belowBreakpoint.value === true || Math.abs(position) === size.value)
        ) {
          position += stateDirection.value * $layout.scrollbarWidth.value;
        }

        flagContentPosition.value = position;
      }
    }

    function applyBackdrop (x) {
      flagBackdropBg.value = x;
    }

    function setScrollable (v) {
      const action = v === true
        ? 'remove'
        : ($layout.isContainer.value !== true ? 'add' : '');

      action !== '' && document.body.classList[ action ]('q-body--drawer-toggle');
    }

    function animateMini () {
      timerMini !== null && clearTimeout(timerMini);

      if (vm.proxy && vm.proxy.$el) {
        // need to speed it up and apply it immediately,
        // even faster than Vue's nextTick!
        vm.proxy.$el.classList.add('q-drawer--mini-animate');
      }

      flagMiniAnimate.value = true;
      timerMini = setTimeout(() => {
        timerMini = null;
        flagMiniAnimate.value = false;
        if (vm && vm.proxy && vm.proxy.$el) {
          vm.proxy.$el.classList.remove('q-drawer--mini-animate');
        }
      }, 150);
    }

    function onOpenPan (evt) {
      if (showing.value !== false) {
        // some browsers might capture and trigger this
        // even if Drawer has just been opened (but animation is still pending)
        return
      }

      const
        width = size.value,
        position = between(evt.distance.x, 0, width);

      if (evt.isFinal === true) {
        const opened = position >= Math.min(75, width);

        if (opened === true) {
          show();
        }
        else {
          $layout.animate();
          applyBackdrop(0);
          applyPosition(stateDirection.value * width);
        }

        flagPanning.value = false;
        return
      }

      applyPosition(
        ($q.lang.rtl === true ? rightSide.value !== true : rightSide.value)
          ? Math.max(width - position, 0)
          : Math.min(0, position - width)
      );
      applyBackdrop(
        between(position / width, 0, 1)
      );

      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }

    function onClosePan (evt) {
      if (showing.value !== true) {
        // some browsers might capture and trigger this
        // even if Drawer has just been closed (but animation is still pending)
        return
      }

      const
        width = size.value,
        dir = evt.direction === props.side,
        position = ($q.lang.rtl === true ? dir !== true : dir)
          ? between(evt.distance.x, 0, width)
          : 0;

      if (evt.isFinal === true) {
        const opened = Math.abs(position) < Math.min(75, width);

        if (opened === true) {
          $layout.animate();
          applyBackdrop(1);
          applyPosition(0);
        }
        else {
          hide();
        }

        flagPanning.value = false;
        return
      }

      applyPosition(stateDirection.value * position);
      applyBackdrop(between(1 - position / width, 0, 1));

      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }

    function cleanup () {
      preventBodyScroll(false);
      setScrollable(true);
    }

    function updateLayout (prop, val) {
      $layout.update(props.side, prop, val);
    }

    function updateLocal (prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }

    function updateSizeOnLayout (miniToOverlay, size) {
      updateLayout('size', miniToOverlay === true ? props.miniWidth : size);
    }

    $layout.instances[ props.side ] = instance;
    updateSizeOnLayout(props.miniToOverlay, size.value);
    updateLayout('space', onLayout.value);
    updateLayout('offset', offset.value);

    if (
      props.showIfAbove === true
      && props.modelValue !== true
      && showing.value === true
      && props[ 'onUpdate:modelValue' ] !== void 0
    ) {
      emit('update:modelValue', true);
    }

    onMounted(() => {
      emit('onLayout', onLayout.value);
      emit('miniState', isMini.value);

      lastDesktopState = props.showIfAbove === true;

      const fn = () => {
        const action = showing.value === true ? handleShow : handleHide;
        action(false, true);
      };

      if ($layout.totalWidth.value !== 0) {
        // make sure that all computed properties
        // have been updated before calling handleShow/handleHide()
        nextTick(fn);
        return
      }

      layoutTotalWidthWatcher = watch($layout.totalWidth, () => {
        layoutTotalWidthWatcher();
        layoutTotalWidthWatcher = void 0;

        if (showing.value === false && props.showIfAbove === true && belowBreakpoint.value === false) {
          show(false);
        }
        else {
          fn();
        }
      });
    });

    onBeforeUnmount(() => {
      layoutTotalWidthWatcher !== void 0 && layoutTotalWidthWatcher();

      if (timerMini !== null) {
        clearTimeout(timerMini);
        timerMini = null;
      }

      showing.value === true && cleanup();

      if ($layout.instances[ props.side ] === instance) {
        $layout.instances[ props.side ] = void 0;
        updateLayout('size', 0);
        updateLayout('offset', 0);
        updateLayout('space', false);
      }
    });

    return () => {
      const child = [];

      if (belowBreakpoint.value === true) {
        props.noSwipeOpen === false && child.push(
          withDirectives(
            h('div', {
              key: 'open',
              class: `q-drawer__opener fixed-${ props.side }`,
              'aria-hidden': 'true'
            }),
            openDirective.value
          )
        );

        child.push(
          hDir(
            'div',
            {
              ref: 'backdrop',
              class: backdropClass.value,
              style: backdropStyle.value,
              'aria-hidden': 'true',
              onClick: hide
            },
            void 0,
            'backdrop',
            props.noSwipeBackdrop !== true && showing.value === true,
            () => backdropCloseDirective.value
          )
        );
      }

      const mini = isMini.value === true && slots.mini !== void 0;
      const content = [
        h('div', {
          ...attrs,
          key: '' + mini, // required otherwise Vue will not diff correctly
          class: [
            contentClass.value,
            attrs.class
          ]
        }, mini === true
          ? slots.mini()
          : hSlot(slots.default)
        )
      ];

      if (props.elevated === true && showing.value === true) {
        content.push(
          h('div', {
            class: 'q-layout__shadow absolute-full overflow-hidden no-pointer-events'
          })
        );
      }

      child.push(
        hDir(
          'aside',
          { ref: 'content', class: classes.value, style: style.value },
          content,
          'contentclose',
          props.noSwipeClose !== true && belowBreakpoint.value === true,
          () => contentCloseDirective.value
        )
      );

      return h('div', { class: 'q-drawer-container' }, child)
    }
  }
});

const useRatioProps = {
  ratio: [ String, Number ]
};

function useRatio (props, naturalRatio) {
  // return ratioStyle
  return computed(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );

    return isNaN(ratio) !== true && ratio > 0
      ? { paddingBottom: `${ 100 / ratio }%` }
      : null
  })
}

const defaultRatio = 1.7778; /* 16/9 */

const __nuxt_component_6 = createComponent({
  name: 'QImg',

  props: {
    ...useRatioProps,

    src: String,
    srcset: String,
    sizes: String,

    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,

    draggable: Boolean,

    loading: {
      type: String,
      default: 'lazy'
    },
    loadingShowDelay: {
      type: [ Number, String ],
      default: 0
    },

    fetchpriority: {
      type: String,
      default: 'auto'
    },
    width: String,
    height: String,
    initialRatio: {
      type: [ Number, String ],
      default: defaultRatio
    },

    placeholderSrc: String,
    errorSrc: String,

    fit: {
      type: String,
      default: 'cover'
    },
    position: {
      type: String,
      default: '50% 50%'
    },

    imgClass: String,
    imgStyle: Object,

    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,

    spinnerColor: String,
    spinnerSize: String
  },

  emits: [ 'load', 'error' ],

  setup (props, { slots, emit }) {
    const naturalRatio = ref(props.initialRatio);
    const ratioStyle = useRatio(props, naturalRatio);
    const vm = getCurrentInstance();

    const { registerTimeout: registerLoadTimeout, removeTimeout: removeLoadTimeout } = useTimeout();
    const { registerTimeout: registerLoadShowTimeout, removeTimeout: removeLoadShowTimeout } = useTimeout();

    const placeholderImg = computed(() => (
      props.placeholderSrc !== void 0
        ? { src: props.placeholderSrc }
        : null
    ));

    const errorImg = computed(() => (
      props.errorSrc !== void 0
        ? { src: props.errorSrc, __qerror: true }
        : null
    ));

    const images = [
      ref(null),
      ref(placeholderImg.value)
    ];

    const position = ref(0);

    const isLoading = ref(false);
    const hasError = ref(false);

    const classes = computed(() =>
      `q-img q-img--${ props.noNativeMenu === true ? 'no-' : '' }menu`
    );

    const style = computed(() => ({
      width: props.width,
      height: props.height
    }));

    const imgClass = computed(() =>
      `q-img__image ${ props.imgClass !== void 0 ? props.imgClass + ' ' : '' }`
      + `q-img__image--with${ props.noTransition === true ? 'out' : '' }-transition`
      + ' q-img__image--'
    );

    const imgStyle = computed(() => ({
      ...props.imgStyle,
      objectFit: props.fit,
      objectPosition: props.position
    }));

    function clearLoading () {
      removeLoadShowTimeout();
      isLoading.value = false;
    }

    function onLoad ({ target }) {
      if (vmIsDestroyed(vm) === false) {
        removeLoadTimeout();

        naturalRatio.value = target.naturalHeight === 0
          ? 0.5
          : target.naturalWidth / target.naturalHeight;

        waitForCompleteness(target, 1);
      }
    }

    function waitForCompleteness (target, count) {
      // protect against running forever
      if (count === 1000 || vmIsDestroyed(vm) === true) return

      if (target.complete === true) {
        onReady(target);
      }
      else {
        registerLoadTimeout(() => {
          waitForCompleteness(target, count + 1);
        }, 50);
      }
    }

    function onReady (target) {
      if (vmIsDestroyed(vm) === true) return

      position.value = position.value ^ 1;
      images[ position.value ].value = null;

      clearLoading();

      if (target.getAttribute('__qerror') !== 'true') {
        hasError.value = false;
      }

      emit('load', target.currentSrc || target.src);
    }

    function onError (err) {
      removeLoadTimeout();
      clearLoading();

      hasError.value = true;
      images[ position.value ].value = errorImg.value;
      images[ position.value ^ 1 ].value = placeholderImg.value;

      emit('error', err);
    }

    function getImage (index) {
      const img = images[ index ].value;

      const data = {
        key: 'img_' + index,
        class: imgClass.value,
        style: imgStyle.value,
        alt: props.alt,
        crossorigin: props.crossorigin,
        decoding: props.decoding,
        referrerpolicy: props.referrerpolicy,
        height: props.height,
        width: props.width,
        loading: props.loading,
        fetchpriority: props.fetchpriority,
        'aria-hidden': 'true',
        draggable: props.draggable,
        ...img
      };

      if (position.value === index) {
        Object.assign(data, {
          class: data.class + 'current',
          onLoad,
          onError
        });
      }
      else {
        data.class += 'loaded';
      }

      return h(
        'div',
        { class: 'q-img__container absolute-full', key: 'img' + index },
        h('img', data)
      )
    }

    function getContent () {
      if (isLoading.value === false) {
        return h('div', {
          key: 'content',
          class: 'q-img__content absolute-full q-anchor--skip'
        }, hSlot(slots[ hasError.value === true ? 'error' : 'default' ]))
      }

      return h('div', {
        key: 'loading',
        class: 'q-img__loading absolute-full flex flex-center'
      }, (
        slots.loading !== void 0
          ? slots.loading()
          : (
              props.noSpinner === true
                ? void 0
                : [
                    h(QSpinner, {
                      color: props.spinnerColor,
                      size: props.spinnerSize
                    })
                  ]
            )
      ))
    }

    return () => {
      const content = [];

      if (ratioStyle.value !== null) {
        content.push(
          h('div', { key: 'filler', style: ratioStyle.value })
        );
      }

      if (images[ 0 ].value !== null) {
        content.push(
          getImage(0)
        );
      }

      if (images[ 1 ].value !== null) {
        content.push(
          getImage(1)
        );
      }

      content.push(
        h(Transition, { name: 'q-transition--fade' }, getContent)
      );

      return h('div', {
        key: 'main',
        class: classes.value,
        style: style.value,
        role: 'img',
        'aria-label': props.alt
      }, content)
    }
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const rightDrawerOpen = ref(false);
    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_header = __nuxt_component_0;
      const _component_q_toolbar = __nuxt_component_1;
      const _component_q_toolbar_title = __nuxt_component_2;
      const _component_q_avatar = __nuxt_component_3;
      const _component_q_btn = __nuxt_component_4;
      const _component_q_drawer = __nuxt_component_5;
      const _component_q_img = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_q_header, {
        reveal: "",
        class: "bg-transparent text-black header"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_toolbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_toolbar_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_avatar, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" data-v-5e109bef${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Title `);
                      } else {
                        return [
                          createVNode(_component_q_avatar, null, {
                            default: withCtx(() => [
                              createVNode("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" })
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Title ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_btn, {
                    dense: "",
                    flat: "",
                    round: "",
                    icon: "menu",
                    onClick: toggleRightDrawer
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_toolbar_title, null, {
                      default: withCtx(() => [
                        createVNode(_component_q_avatar, null, {
                          default: withCtx(() => [
                            createVNode("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" })
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Title ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_btn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "menu",
                      onClick: toggleRightDrawer
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_toolbar, null, {
                default: withCtx(() => [
                  createVNode(_component_q_toolbar_title, null, {
                    default: withCtx(() => [
                      createVNode(_component_q_avatar, null, {
                        default: withCtx(() => [
                          createVNode("img", { src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" })
                        ]),
                        _: 1
                      }),
                      createTextVNode(" Title ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_btn, {
                    dense: "",
                    flat: "",
                    round: "",
                    icon: "menu",
                    onClick: toggleRightDrawer
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_q_drawer, {
        modelValue: rightDrawerOpen.value,
        "onUpdate:modelValue": ($event) => rightDrawerOpen.value = $event,
        side: "right",
        overlay: "",
        behavior: "mobile",
        elevated: ""
      }, null, _parent));
      _push(`<div class="content-below-header" data-v-5e109bef>`);
      _push(ssrRenderComponent(_component_q_img, { src: "img/tild3035-3064-4862-b438-633135376463__119785244_6641036542.jpg" }, null, _parent));
      _push(`</div><div data-v-5e109bef>`);
      _push(ssrRenderComponent(_component_q_img, { src: "img/11.jpg" }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e109bef"]]);

export { index as default };
//# sourceMappingURL=index-CLelMQTh.mjs.map
