import { defineComponent, ref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import __nuxt_component_0 from "quasar/src/components/header/QHeader.js";
import __nuxt_component_1 from "quasar/src/components/toolbar/QToolbar.js";
import __nuxt_component_2 from "quasar/src/components/toolbar/QToolbarTitle.js";
import __nuxt_component_3 from "quasar/src/components/avatar/QAvatar.js";
import __nuxt_component_4 from "quasar/src/components/btn/QBtn.js";
import __nuxt_component_5 from "quasar/src/components/drawer/QDrawer.js";
import __nuxt_component_6 from "quasar/src/components/img/QImg.js";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "quasar/lang/en-US.js";
import "quasar/icon-set/material-icons.js";
import "quasar/src/vue-plugin.js";
import "quasar/src/composables/use-quasar/use-quasar.js";
import "quasar/src/components/layout/QLayout.js";
import "quasar/src/components/page/QPageContainer.js";
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
export {
  index as default
};
//# sourceMappingURL=index-CLelMQTh.js.map
