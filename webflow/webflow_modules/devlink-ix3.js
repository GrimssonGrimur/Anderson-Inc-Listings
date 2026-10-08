/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

var js = Object.create;
var ht = Object.defineProperty;
var Vs = Object.getOwnPropertyDescriptor;
var Bs = Object.getOwnPropertyNames;
var Gs = Object.getPrototypeOf,
  Us = Object.prototype.hasOwnProperty;
var $s = (n, e, t) =>
  e in n
    ? ht(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var v = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var qs = (n, e, t, r) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let o of Bs(e))
      !Us.call(n, o) &&
        o !== t &&
        ht(n, o, {
          get: () => e[o],
          enumerable: !(r = Vs(e, o)) || r.enumerable,
        });
  return n;
};
var Kr = (n, e, t) => (
  (t = n != null ? js(Gs(n)) : {}),
  qs(
    e || !n || !n.__esModule
      ? ht(t, "default", { value: n, enumerable: !0 })
      : t,
    n
  )
);
var Ne = (n, e, t) => ($s(n, typeof e != "symbol" ? e + "" : e, t), t);
var Qr = v((Tt) => {
  "use strict";
  Object.defineProperty(Tt, "__esModule", { value: !0 });
  function Hs(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hs(Tt, {
    CORE_OPERATORS: function () {
      return yt;
    },
    DEFAULTS: function () {
      return vt;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return Ks;
    },
    EASE_DEFAULTS: function () {
      return Zr;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return Xs;
    },
    RELATIONSHIP_TYPES: function () {
      return bt;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return Zs;
    },
    TimelineControlType: function () {
      return gt;
    },
    TweenType: function () {
      return mt;
    },
    isValidControlType: function () {
      return zs;
    },
    tweenTypeFromName: function () {
      return Ws;
    },
    tweenTypeToName: function () {
      return Ys;
    },
  });
  var gt;
  (function (n) {
    (n.STANDARD = "standard"),
      (n.SCROLL = "scroll"),
      (n.LOAD = "load"),
      (n.CONTINUOUS = "continuous");
  })(gt || (gt = {}));
  function zs(n) {
    return (
      n === "standard" || n === "scroll" || n === "load" || n === "continuous"
    );
  }
  var mt;
  (function (n) {
    (n[(n.To = 0)] = "To"),
      (n[(n.From = 1)] = "From"),
      (n[(n.FromTo = 2)] = "FromTo"),
      (n[(n.Set = 3)] = "Set");
  })(mt || (mt = {}));
  function Ws(n) {
    switch (n) {
      case "to":
        return 0;
      case "from":
        return 1;
      case "both":
        return 2;
      case "set":
        return 3;
    }
  }
  function Ys(n) {
    switch (n) {
      case 0:
        return "to";
      case 1:
        return "from";
      case 2:
        return "both";
      case 3:
        return "set";
      default:
        return null;
    }
  }
  var yt;
  (function (n) {
    (n.AND = "wf:and"), (n.OR = "wf:or");
  })(yt || (yt = {}));
  var vt;
  (function (n) {
    n[(n.DURATION = 0.5)] = "DURATION";
  })(vt || (vt = {}));
  var Xs = 1,
    bt;
  (function (n) {
    (n.NONE = "none"),
      (n.WITHIN = "within"),
      (n.DIRECT_CHILD_OF = "direct-child-of"),
      (n.CONTAINS = "contains"),
      (n.DIRECT_PARENT_OF = "direct-parent-of"),
      (n.NEXT_TO = "next-to"),
      (n.NEXT_SIBLING_OF = "next-sibling-of"),
      (n.PREV_SIBLING_OF = "prev-sibling-of");
  })(bt || (bt = {}));
  var Zr = {
      back: { type: "back", curve: "out", power: 1.7 },
      elastic: { type: "elastic", curve: "out", amplitude: 1, period: 0.3 },
      steps: { type: "steps", stepCount: 6 },
      rough: {
        type: "rough",
        templateCurve: "none.inOut",
        points: 20,
        strength: 1,
        taper: "none",
        randomizePoints: !0,
        clampPoints: !1,
      },
      slowMo: { type: "slowMo", linearRatio: 0.7, power: 0.7, yoyoMode: !1 },
      expoScale: {
        type: "expoScale",
        startingScale: 0.05,
        endingScale: 1,
        templateCurve: "none.inOut",
      },
      customWiggle: {
        type: "customWiggle",
        wiggles: 10,
        wiggleType: "easeOut",
      },
      customBounce: {
        type: "customBounce",
        strength: 0.7,
        squash: 1,
        endAtStart: !1,
      },
      customEase: {
        type: "customEase",
        bezierCurve: "M0,160 C40,160 24,96 80,96 136,96 120,0 160,0",
      },
    },
    Ks = Zr.back,
    Zs = [
      "restart",
      "play",
      "reverse",
      "reverseFlipEase",
      "pause",
      "resume",
      "togglePlayReverse",
      "togglePlayReverseFlipEase",
      "stop",
      "none",
    ];
});
var Jr = v((St) => {
  "use strict";
  Object.defineProperty(St, "__esModule", { value: !0 });
  Object.defineProperty(St, "RuntimeBuilder", {
    enumerable: !0,
    get: function () {
      return wt;
    },
  });
  var wt = class {
    baseInfo;
    extensions = [];
    lifecycle = {};
    constructor(e) {
      this.baseInfo = e;
    }
    addTrigger(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "trigger",
          id: r,
          triggerType: r,
          implementation: t,
        }),
        this
      );
    }
    addAction(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "action",
          id: r,
          actionType: r,
          implementation: t,
        }),
        this
      );
    }
    addTargetResolver(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "targetResolver",
          id: r,
          resolverType: r,
          implementation: t,
        }),
        this
      );
    }
    addCondition(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "condition",
          id: r,
          conditionType: r,
          implementation: t,
        }),
        this
      );
    }
    onInitialize(e) {
      return (this.lifecycle.initialize = e), this;
    }
    onActivate(e) {
      return (this.lifecycle.activate = e), this;
    }
    onDeactivate(e) {
      return (this.lifecycle.deactivate = e), this;
    }
    onDispose(e) {
      return (this.lifecycle.dispose = e), this;
    }
    createManifest() {
      let e = this.extensions.map((t) => `${t.extensionPoint}:${t.id}`);
      return {
        id: [this.baseInfo.namespace, this.baseInfo.pluginId],
        version: this.baseInfo.version,
        name: this.baseInfo.displayName || this.baseInfo.pluginId,
        description: this.baseInfo.description || "",
        dependencies: this.baseInfo.dependencies,
        features: e,
      };
    }
    buildRuntime() {
      return {
        manifest: this.createManifest(),
        extensions: this.extensions,
        ...this.lifecycle,
      };
    }
  };
});
var ei = v((It) => {
  "use strict";
  Object.defineProperty(It, "__esModule", { value: !0 });
  function Qs(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Qs(It, {
    ConditionCategoryBuilder: function () {
      return je;
    },
    DesignBuilder: function () {
      return Mt;
    },
    TargetCategoryBuilder: function () {
      return Le;
    },
    TriggerCategoryBuilder: function () {
      return De;
    },
  });
  var Et = class {
      categoryBuilder;
      groupConfig;
      properties;
      constructor(e, t) {
        (this.categoryBuilder = e),
          (this.groupConfig = t),
          (this.properties = []);
      }
      addProperty(e, t, r) {
        return (
          this.properties.push({
            id: e,
            schema: { ...t, description: r?.description || t.description },
          }),
          this
        );
      }
      addGroup(e) {
        return (
          this.categoryBuilder.finalizeGroup({
            ...this.groupConfig,
            properties: this.properties,
          }),
          this.categoryBuilder.clearCurrentGroupBuilder(),
          this.categoryBuilder.addGroup(e)
        );
      }
      getGroupData() {
        return { ...this.groupConfig, properties: this.properties };
      }
    },
    Ct = class {
      categoryId;
      config;
      displayGroups;
      currentGroupBuilder;
      constructor(e, t) {
        (this.categoryId = e),
          (this.config = t),
          (this.displayGroups = []),
          (this.currentGroupBuilder = null);
      }
      addGroup(e) {
        return (
          this.currentGroupBuilder &&
            this.finalizeGroup(this.currentGroupBuilder.getGroupData()),
          (this.currentGroupBuilder = new Et(this, e)),
          this.currentGroupBuilder
        );
      }
      finalizeGroup(e) {
        this.displayGroups.push(e);
      }
      clearCurrentGroupBuilder() {
        this.currentGroupBuilder = null;
      }
      getDefinition() {
        this.currentGroupBuilder &&
          (this.finalizeGroup(this.currentGroupBuilder.getGroupData()),
          (this.currentGroupBuilder = null));
        let e = this.displayGroups.flatMap((t) => t.properties);
        return {
          id: this.categoryId,
          properties: e,
          propertyType: this.config.propertyType || "tween",
          displayGroups: this.displayGroups,
        };
      }
    },
    Le = class {
      categoryId;
      config;
      targets;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.targets = []);
      }
      addTargetSchema(e, t) {
        return this.targets.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          targets: this.targets,
        };
      }
    },
    De = class {
      categoryId;
      config;
      triggers;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.triggers = []);
      }
      addTriggerSchema(e, t) {
        return this.triggers.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          triggers: this.triggers,
        };
      }
    },
    je = class {
      categoryId;
      config;
      conditions;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.conditions = []);
      }
      addConditionSchema(e, t) {
        return this.conditions.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          conditions: this.conditions,
        };
      }
    },
    Mt = class {
      baseInfo;
      categories = new Map();
      targetCategories = new Map();
      triggerCategories = new Map();
      conditionCategories = new Map();
      actionPresets = new Map();
      reducerHooks = [];
      constructor(e) {
        this.baseInfo = e;
      }
      addCategory(e, t = {}) {
        let r = new Ct(e, t);
        return this.categories.set(e, r), r;
      }
      addTargetCategory(e, t) {
        let r = new Le(e, t);
        return this.targetCategories.set(e, r), r;
      }
      addTriggerCategory(e, t) {
        let r = new De(e, t);
        return this.triggerCategories.set(e, r), r;
      }
      addConditionCategory(e, t) {
        let r = new je(e, t);
        return this.conditionCategories.set(e, r), r;
      }
      addActionPreset(e, t) {
        let r = `${this.baseInfo.namespace}:${e}`;
        return (
          this.actionPresets.set(r, {
            id: r,
            name: t.name,
            description: t.description,
            icon: t.icon,
            timelineIcon: t.timelineIcon,
            type: "plugin",
            categoryId: t.categoryId,
            action: t.action,
            customEditor: t.customEditor,
            targetFilter: t.targetFilter,
            designerTargetFilter: t.designerTargetFilter,
            customTargetComponent: t.customTargetComponent,
          }),
          this
        );
      }
      addReducerHooks(e) {
        return this.reducerHooks.push(e), this;
      }
      buildDesign() {
        let e = [];
        for (let [, s] of this.categories) e.push(s.getDefinition());
        let t = [];
        for (let [, s] of this.targetCategories) t.push(s.getDefinition());
        let r = [];
        for (let [, s] of this.triggerCategories) r.push(s.getDefinition());
        let o = [];
        for (let [, s] of this.conditionCategories) o.push(s.getDefinition());
        let i = [];
        for (let [, s] of this.actionPresets) i.push(s);
        return {
          namespace: this.baseInfo.namespace,
          pluginId: this.baseInfo.pluginId,
          version: this.baseInfo.version,
          displayName: this.baseInfo.displayName,
          description: this.baseInfo.description,
          categories: e.length > 0 ? e : void 0,
          targetCategories: t.length > 0 ? t : void 0,
          triggerCategories: r.length > 0 ? r : void 0,
          conditionCategories: o.length > 0 ? o : void 0,
          actionPresets: i.length > 0 ? i : void 0,
          reducerHooks:
            this.reducerHooks.length > 0 ? [...this.reducerHooks] : void 0,
        };
      }
    };
});
var ti = v((Rt) => {
  "use strict";
  Object.defineProperty(Rt, "__esModule", { value: !0 });
  Object.defineProperty(Rt, "TransformBuilder", {
    enumerable: !0,
    get: function () {
      return At;
    },
  });
  var At = class {
    baseInfo;
    triggerTransforms = new Map();
    targetTransforms = new Map();
    conditionTransforms = new Map();
    actionTransforms = new Map();
    constructor(e) {
      this.baseInfo = e;
    }
    addTargetTransform(e, t) {
      return (
        this.targetTransforms.set(
          this.createExtensionKey(e),
          function (o, i, s) {
            return t(o, i, s);
          }
        ),
        this
      );
    }
    addTriggerTransform(e, t) {
      return (
        this.triggerTransforms.set(
          this.createExtensionKey(e),
          function (o, i, s) {
            return t(o, i, s);
          }
        ),
        this
      );
    }
    addConditionTransform(e, t) {
      return (
        this.conditionTransforms.set(
          this.createExtensionKey(e),
          function (o, i, s) {
            return t(o, i, s);
          }
        ),
        this
      );
    }
    addActionTransform(e, t) {
      return (
        this.actionTransforms.set(
          this.createExtensionKey(e),
          function (o, i, s) {
            return t(o, i, s);
          }
        ),
        this
      );
    }
    createExtensionKey(e) {
      return `${this.baseInfo.namespace}:${e}`;
    }
    buildTransform() {
      return {
        namespace: this.baseInfo.namespace,
        pluginId: this.baseInfo.pluginId,
        version: this.baseInfo.version,
        displayName: this.baseInfo.displayName,
        description: this.baseInfo.description,
        triggerTransforms: this.triggerTransforms,
        targetTransforms: this.targetTransforms,
        conditionTransforms: this.conditionTransforms,
        actionTransforms: this.actionTransforms,
      };
    }
  };
});
var ri = v((ni) => {
  "use strict";
  Object.defineProperty(ni, "__esModule", { value: !0 });
});
var W = v((oe) => {
  "use strict";
  Object.defineProperty(oe, "__esModule", { value: !0 });
  function Js(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Js(oe, {
    CORE_OPERATORS: function () {
      return G.CORE_OPERATORS;
    },
    DEFAULTS: function () {
      return G.DEFAULTS;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return G.DEFAULT_CUSTOM_EASE;
    },
    EASE_DEFAULTS: function () {
      return G.EASE_DEFAULTS;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return G.PERCENT_CANVAS_DURATION_S;
    },
    RELATIONSHIP_TYPES: function () {
      return G.RELATIONSHIP_TYPES;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return G.STANDARD_TRIGGER_ALLOWED_CONTROLS;
    },
    TimelineControlType: function () {
      return G.TimelineControlType;
    },
    TweenType: function () {
      return G.TweenType;
    },
    isValidControlType: function () {
      return G.isValidControlType;
    },
    tweenTypeFromName: function () {
      return G.tweenTypeFromName;
    },
    tweenTypeToName: function () {
      return G.tweenTypeToName;
    },
  });
  var G = Qr();
  Ve(Jr(), oe);
  Ve(ei(), oe);
  Ve(ti(), oe);
  Ve(ri(), oe);
  function Ve(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
});
var te = v((_t) => {
  "use strict";
  Object.defineProperty(_t, "__esModule", { value: !0 });
  function ea(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ea(_t, {
    EASING_NAMES: function () {
      return la;
    },
    buildCustomEaseId: function () {
      return aa;
    },
    buildEaseContextId: function () {
      return sa;
    },
    debounce: function () {
      return ia;
    },
    defaultSplitClass: function () {
      return ra;
    },
    isValidControlType: function () {
      return ta;
    },
    throttle: function () {
      return oa;
    },
    toSeconds: function () {
      return na;
    },
  });
  var Be = W();
  function ta(n) {
    return (
      n === Be.TimelineControlType.STANDARD ||
      n === Be.TimelineControlType.SCROLL ||
      n === Be.TimelineControlType.LOAD ||
      n === Be.TimelineControlType.CONTINUOUS
    );
  }
  function na(n) {
    return typeof n == "string" ? parseFloat(n) / 1e3 : n;
  }
  function ra(n) {
    return `gsap_split_${n}++`;
  }
  var ia = (
      n,
      e = 0,
      { leading: t = !1, trailing: r = !0, maxWait: o } = {}
    ) => {
      let i,
        s = 0,
        a,
        l,
        c = () => {
          (s = 0), (i = void 0), r && n.apply(a, l);
        };
      function u(...d) {
        (a = this), (l = d), s || ((s = performance.now()), t && n.apply(a, l));
        let f = performance.now() - s;
        if (o && f >= o) {
          clearTimeout(i), c();
          return;
        }
        clearTimeout(i), (i = setTimeout(c, e));
      }
      return (
        (u.cancel = () => {
          clearTimeout(i), (i = void 0), (s = 0);
        }),
        u
      );
    },
    oa = (n, e = 0, { leading: t = !0, trailing: r = !0, maxWait: o } = {}) => {
      let i = 0,
        s,
        a,
        l,
        c = (d) => {
          (i = d), (s = void 0), n.apply(a, l);
        };
      function u(...d) {
        let f = performance.now();
        !i && !t && (i = f);
        let p = e - (f - i);
        (a = this),
          (l = d),
          p <= 0 || (o && f - i >= o)
            ? (s && (clearTimeout(s), (s = void 0)), c(f))
            : r && !s && (s = setTimeout(() => c(performance.now()), p));
      }
      return (
        (u.cancel = () => {
          clearTimeout(s), (s = void 0), (i = 0);
        }),
        u
      );
    };
  function sa(n, e) {
    return `${n}-${e}`;
  }
  function aa(n, e) {
    return e ? `${n}-${e}` : n;
  }
  var la = [
    "none",
    "power1.in",
    "power1.out",
    "power1.inOut",
    "power2.in",
    "power2.out",
    "power2.inOut",
    "power3.in",
    "power3.out",
    "power3.inOut",
    "power4.in",
    "power4.out",
    "power4.inOut",
    "back.in",
    "back.out",
    "back.inOut",
    "bounce.in",
    "bounce.out",
    "bounce.inOut",
    "circ.in",
    "circ.out",
    "circ.inOut",
    "elastic.in",
    "elastic.out",
    "elastic.inOut",
    "expo.in",
    "expo.out",
    "expo.inOut",
    "sine.in",
    "sine.out",
    "sine.inOut",
  ];
});
var ii = v((Ot) => {
  "use strict";
  Object.defineProperty(Ot, "__esModule", { value: !0 });
  Object.defineProperty(Ot, "EventManager", {
    enumerable: !0,
    get: function () {
      return Ge;
    },
  });
  var Se = te(),
    he = class {
      elementHandlers = new WeakMap();
      eventTypeHandlers = new Map();
      customEventTypes = new Map();
      delegatedHandlers = new Map();
      batchedEvents = new Map();
      batchFrameId = null;
      defaultMaxBatchSize = 10;
      defaultMaxBatchAge = 100;
      defaultErrorHandler = (e, t) =>
        console.error("[EventManager] Error handling event:", e, t);
      constructor() {}
      static getInstance() {
        return he.instance || (he.instance = new he()), he.instance;
      }
      addEventListener(e, t, r, o) {
        try {
          let i = o?.kind === "custom",
            s = {
              ...(i ? { delegate: !1, passive: !0, batch: !1 } : ua[t] || {}),
              ...o,
              errorHandler: o?.errorHandler || this.defaultErrorHandler,
            };
          if (!i && t === "load" && "complete" in e && e.complete)
            return (
              setTimeout(() => {
                try {
                  r(new Event("load"), e);
                } catch (u) {
                  s.errorHandler?.(u, new Event("load"));
                }
              }, 0),
              () => {}
            );
          if (!e || !e.addEventListener)
            throw new Error("Invalid element provided to addEventListener");
          let a = this.createWrappedHandler(r, s, e),
            l = this.registerHandler(e, t, r, a.handler, s, i, a.cleanup);
          if (i)
            return () => {
              this.removeHandler(e, t, r, !0), l.cleanup?.();
            };
          let c = new AbortController();
          return (
            this.ensureDelegatedHandler(t),
            s.delegate ||
              (ca(s) || e).addEventListener(t, l.wrappedHandler, {
                passive: s.passive,
                signal: c.signal,
              }),
            () => {
              c.abort(), this.removeHandler(e, t, r, !1);
            }
          );
        } catch (i) {
          return o?.errorHandler?.(i, new Event(t)), () => {};
        }
      }
      emit(e, t, r, o) {
        try {
          let i = this.customEventTypes.get(e);
          if (!i?.size) return;
          let s = new CustomEvent(e, {
            detail: t,
            bubbles: o?.bubbles ?? !0,
            cancelable: !0,
          });
          for (let a of i)
            if (!r || r === a.element || a.element.contains(r))
              try {
                a.wrappedHandler(s);
              } catch (l) {
                console.error(`[EventManager] Error emitting ${e}:`, l);
              }
        } catch (i) {
          console.error(`[EventManager] Error emitting custom event ${e}:`, i);
        }
      }
      dispose() {
        this.batchFrameId !== null &&
          (cancelAnimationFrame(this.batchFrameId),
          (this.batchFrameId = null),
          this.batchedEvents.clear());
        for (let [, e] of this.delegatedHandlers) e.controller.abort();
        for (let [, e] of this.eventTypeHandlers)
          for (let t of e) t.cleanup?.();
        for (let [, e] of this.customEventTypes) for (let t of e) t.cleanup?.();
        this.delegatedHandlers.clear(),
          (this.elementHandlers = new WeakMap()),
          this.eventTypeHandlers.clear(),
          this.customEventTypes.clear();
      }
      createWrappedHandler(e, t, r) {
        let o = (i) => {
          try {
            let s =
              t.target === "window"
                ? window
                : t.target === "document"
                ? document
                : r;
            e(i, s);
          } catch (s) {
            (t.errorHandler || this.defaultErrorHandler)(s, i);
          }
        };
        if (t.batch) {
          let i = (s) => {
            let a = s.type || "unknown";
            this.batchedEvents.has(a) || this.batchedEvents.set(a, []),
              this.batchedEvents
                .get(a)
                .push({
                  event: s,
                  target: r,
                  timestamp: s.timeStamp || performance.now(),
                }),
              this.batchFrameId == null &&
                (this.batchFrameId = requestAnimationFrame(() =>
                  this.processBatchedEvents()
                ));
          };
          if (t.throttleMs && t.throttleMs > 0) {
            let s = (0, Se.throttle)(o, t.throttleMs);
            return { handler: i, cleanup: s.cancel };
          }
          if (t.debounceMs && t.debounceMs > 0) {
            let s = (0, Se.debounce)(o, t.debounceMs);
            return { handler: i, cleanup: s.cancel };
          }
          return { handler: i };
        }
        if (t.throttleMs && t.throttleMs > 0) {
          let i = (0, Se.throttle)(o, t.throttleMs);
          if (t.debounceMs && t.debounceMs > 0) {
            let s = (0, Se.debounce)(i, t.debounceMs);
            return {
              handler: s,
              cleanup: () => {
                s.cancel?.(), i.cancel?.();
              },
            };
          }
          return { handler: i, cleanup: i.cancel };
        }
        if (t.debounceMs && t.debounceMs > 0) {
          let i = (0, Se.debounce)(o, t.debounceMs);
          return { handler: i, cleanup: i.cancel };
        }
        return { handler: o };
      }
      processBatchedEvents() {
        if (this.batchFrameId === null) return;
        this.batchFrameId = null;
        let e = performance.now();
        for (let [t, r] of this.batchedEvents) {
          let o = this.eventTypeHandlers.get(t);
          if (!o?.size) continue;
          let i = r.filter((a) => e - a.timestamp < this.defaultMaxBatchAge);
          if (!i.length) continue;
          i.sort((a, l) => a.timestamp - l.timestamp);
          let s =
            i.length <= this.defaultMaxBatchSize
              ? i
              : i.slice(-this.defaultMaxBatchSize);
          for (let { event: a, target: l } of s) {
            let c = a;
            (c.batchTimestamp = e), (c.batchSize = s.length);
            for (let u of o)
              try {
                (u.config.delegate ||
                  u.config.target === "window" ||
                  u.config.target === "document" ||
                  l === a.target ||
                  l.contains(a.target)) &&
                  u.wrappedHandler(c);
              } catch (d) {
                (u.config.errorHandler || this.defaultErrorHandler)(d, c);
              }
          }
        }
        this.batchedEvents.clear();
      }
      ensureDelegatedHandler(e) {
        if (this.delegatedHandlers.has(e)) return;
        let t = new AbortController(),
          r = (i) => {
            let s = this.eventTypeHandlers.get(e);
            if (!s?.size) return;
            let a = i.composedPath
              ? i.composedPath()
              : i.target
              ? [i.target]
              : [];
            for (let l of a)
              if (l instanceof Element) {
                for (let c of s) {
                  if (!c.config.delegate) continue;
                  if (c.element === l || c.element.contains(l))
                    try {
                      c.wrappedHandler(i);
                    } catch (d) {
                      console.error(`[EventDelegator] Error for ${e}:`, d);
                    }
                }
                if (!i.bubbles) break;
              }
          },
          o = [
            "focus",
            "blur",
            "focusin",
            "focusout",
            "mouseenter",
            "mouseleave",
          ].includes(e);
        document.addEventListener(e, r, {
          passive: !1,
          capture: o,
          signal: t.signal,
        }),
          this.delegatedHandlers.set(e, { handler: r, controller: t });
      }
      registerHandler(e, t, r, o, i, s, a) {
        let l = {
          element: e,
          originalHandler: r,
          wrappedHandler: o,
          config: i,
          cleanup: a,
        };
        if (s) {
          let c = this.customEventTypes.get(t) || new Set();
          c.add(l), this.customEventTypes.set(t, c);
        } else {
          let c = this.elementHandlers.get(e) || new Set();
          c.add(l), this.elementHandlers.set(e, c);
          let u = this.eventTypeHandlers.get(t) || new Set();
          u.add(l), this.eventTypeHandlers.set(t, u);
        }
        return l;
      }
      removeHandler(e, t, r, o) {
        if (o) {
          let i = this.customEventTypes.get(t);
          if (!i?.size) return;
          for (let s of i)
            if (s.element === e && s.originalHandler === r) {
              i.delete(s),
                i.size || this.customEventTypes.delete(t),
                s.cleanup?.();
              break;
            }
        } else {
          let i = this.eventTypeHandlers.get(t);
          if (!i?.size) return;
          let s = this.elementHandlers.get(e);
          if (!s?.size) return;
          let a;
          for (let l of s)
            if (l.originalHandler === r) {
              a = l;
              break;
            }
          if (a) {
            if ((s.delete(a), i.delete(a), !i.size)) {
              this.eventTypeHandlers.delete(t);
              let l = this.delegatedHandlers.get(t);
              l && (l.controller.abort(), this.delegatedHandlers.delete(t));
            }
            a.cleanup?.();
          }
        }
      }
    },
    Ge = he;
  Ne(Ge, "instance");
  function ca(n) {
    return n.target === "window"
      ? window
      : n.target === "document"
      ? document
      : null;
  }
  var ua = {
    load: { delegate: !1, passive: !0 },
    DOMContentLoaded: { target: "document", passive: !0 },
    readystatechange: { target: "document", passive: !0 },
    beforeunload: { target: "window", passive: !1 },
    unload: { target: "window", passive: !1 },
    pageshow: { target: "window", passive: !0 },
    pagehide: { target: "window", passive: !0 },
    click: { delegate: !0, passive: !1 },
    dblclick: { delegate: !0, passive: !0 },
    mousedown: { delegate: !0, passive: !0 },
    mouseup: { delegate: !0, passive: !0 },
    mousemove: { delegate: !0, batch: !0, passive: !0 },
    mouseenter: { delegate: !1, passive: !0 },
    mouseleave: { delegate: !1, passive: !0 },
    mouseout: { delegate: !0, passive: !0 },
    contextmenu: { delegate: !0, passive: !1 },
    wheel: { delegate: !0, throttleMs: 16, passive: !0, batch: !0 },
    touchstart: { delegate: !0, passive: !0 },
    touchend: { delegate: !0, passive: !1 },
    touchmove: { delegate: !0, batch: !0, passive: !0 },
    touchcancel: { delegate: !0, passive: !0 },
    pointerdown: { delegate: !0, passive: !0 },
    pointerup: { delegate: !0, passive: !0 },
    pointermove: { delegate: !0, batch: !0, passive: !0 },
    pointerenter: { delegate: !1, passive: !0 },
    pointerleave: { delegate: !1, passive: !0 },
    pointercancel: { delegate: !0, passive: !0 },
    keydown: { delegate: !0, passive: !1 },
    keyup: { delegate: !0, passive: !1 },
    keypress: { delegate: !0, passive: !1 },
    input: { delegate: !0, passive: !1 },
    change: { delegate: !0, passive: !1 },
    focus: { delegate: !1, passive: !0 },
    blur: { delegate: !1, passive: !0 },
    focusin: { delegate: !0, passive: !0 },
    focusout: { delegate: !0, passive: !0 },
    submit: { delegate: !0, passive: !1 },
    reset: { delegate: !0, passive: !1 },
    select: { delegate: !0, passive: !0 },
    selectionchange: { target: "document", passive: !0 },
    dragstart: { delegate: !0, passive: !1 },
    drag: { delegate: !0, passive: !0 },
    dragenter: { delegate: !0, passive: !1 },
    dragleave: { delegate: !0, passive: !0 },
    dragover: { delegate: !0, passive: !1 },
    drop: { delegate: !0, passive: !1 },
    dragend: { delegate: !0, passive: !0 },
    play: { delegate: !0, passive: !0 },
    pause: { delegate: !0, passive: !0 },
    ended: { delegate: !0, passive: !0 },
    timeupdate: { delegate: !0, batch: !0, passive: !0 },
    canplay: { delegate: !0, passive: !0 },
    canplaythrough: { delegate: !0, passive: !0 },
    loadeddata: { delegate: !0, passive: !0 },
    animationstart: { delegate: !0, passive: !0 },
    animationend: { delegate: !0, passive: !0 },
    animationiteration: { delegate: !0, passive: !0 },
    transitionstart: { delegate: !0, passive: !0 },
    transitionend: { delegate: !0, passive: !0 },
    transitionrun: { delegate: !0, passive: !0 },
    transitioncancel: { delegate: !0, passive: !0 },
    scroll: { delegate: !1, throttleMs: 16, passive: !0 },
    resize: { target: "window", throttleMs: 16, passive: !0 },
    intersection: { delegate: !1, passive: !0 },
    orientationchange: { target: "window", passive: !0 },
    visibilitychange: { target: "document", passive: !0 },
    storage: { target: "window", passive: !0 },
    online: { target: "window", passive: !0 },
    offline: { target: "window", passive: !0 },
    hashchange: { target: "window", passive: !0 },
    popstate: { target: "window", passive: !0 },
    copy: { delegate: !0, passive: !1 },
    cut: { delegate: !0, passive: !1 },
    paste: { delegate: !0, passive: !1 },
    compositionstart: { delegate: !0, passive: !1 },
    compositionupdate: { delegate: !0, passive: !1 },
    compositionend: { delegate: !0, passive: !1 },
    beforeinput: { delegate: !0, passive: !1 },
  };
});
var oi = v((Pt) => {
  "use strict";
  Object.defineProperty(Pt, "__esModule", { value: !0 });
  Object.defineProperty(Pt, "PluginRuntimeBridge", {
    enumerable: !0,
    get: function () {
      return xt;
    },
  });
  var xt = class {
    intervalHandlers = new Map();
    channelSubscribers = new Map();
    registerIntervalHandler(e, t) {
      let r = this.intervalHandlers.get(e);
      r !== t &&
        (r !== void 0 &&
          console.warn(
            "IX3: registerIntervalHandler called twice. The previous handler is being replaced; verify the plugin is registered exactly once (or use a unique pluginKey per concurrent handler).",
            { pluginKey: e }
          ),
        this.intervalHandlers.set(e, t));
    }
    fireInterval(e) {
      for (let [t, r] of this.intervalHandlers)
        try {
          r(e);
        } catch (o) {
          console.error(
            "IX3: interval handler threw. Continuing with the remaining handlers. Investigate the plugin to prevent silent data drift.",
            { pluginKey: t },
            o
          );
        }
    }
    publish(e, t, r) {
      let o = this.channelSubscribers.get(e);
      if (o) {
        for (let i of o.values())
          for (let s of i.slice())
            if (!(s.element && r && s.element !== r))
              try {
                s.cb(t);
              } catch (a) {
                console.error(
                  "IX3: channel subscriber threw. Continuing with remaining subscribers.",
                  { channel: e },
                  a
                );
              }
      }
    }
    subscribe(e, t, r, o) {
      let i = this.channelSubscribers.get(t);
      i || ((i = new Map()), this.channelSubscribers.set(t, i));
      let s = i.get(e) ?? [],
        a = { element: r, cb: o };
      return (
        s.push(a),
        i.set(e, s),
        () => {
          let l = this.channelSubscribers.get(t)?.get(e);
          if (!l) return;
          let c = l.indexOf(a);
          c !== -1 && l.splice(c, 1),
            l.length === 0 &&
              (this.channelSubscribers.get(t)?.delete(e),
              this.channelSubscribers.get(t)?.size === 0 &&
                this.channelSubscribers.delete(t));
        }
      );
    }
    destroyTimeline(e) {
      for (let [t, r] of this.channelSubscribers)
        r.delete(e), r.size === 0 && this.channelSubscribers.delete(t);
    }
  };
});
var si = v((Ft) => {
  "use strict";
  Object.defineProperty(Ft, "__esModule", { value: !0 });
  Object.defineProperty(Ft, "RuntimeMotionDriver", {
    enumerable: !0,
    get: function () {
      return kt;
    },
  });
  var kt = class {
    env;
    constructor(e) {
      this.env = e;
    }
    hasGsap() {
      return this.env.win.gsap != null;
    }
    hasObserver() {
      return this.env.win.Observer != null;
    }
    timeline() {
      return this.env.win.gsap?.timeline() ?? null;
    }
    to(...e) {
      return this.env.win.gsap?.to(...e) ?? null;
    }
    set(...e) {
      this.env.win.gsap?.set(...e);
    }
    getProperty(...e) {
      return this.env.win.gsap?.getProperty(...e) ?? 0;
    }
    quickSetter(...e) {
      return this.env.win.gsap?.quickSetter(...e) ?? null;
    }
    quickTo(...e) {
      return this.env.win.gsap?.quickTo(...e) ?? null;
    }
    addTicker(e) {
      let t = this.env.win.gsap;
      if (t?.ticker)
        return (
          t.ticker.add(e),
          () => {
            try {
              t.ticker?.remove(e);
            } catch {}
          }
        );
      let r = this.env.win,
        o = 0,
        i = !0,
        s = () => {
          i && (e(), i && (o = r.requestAnimationFrame(s)));
        };
      return (
        (o = r.requestAnimationFrame(s)),
        () => {
          (i = !1), r.cancelAnimationFrame(o);
        }
      );
    }
    createObserver(...e) {
      return this.env.win.Observer?.create(...e) ?? null;
    }
  };
});
var Dt = v((Lt) => {
  "use strict";
  Object.defineProperty(Lt, "__esModule", { value: !0 });
  function da(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  da(Lt, {
    analyzeSharedTimelineGroups: function () {
      return pa;
    },
    triggerEmitsCallbackRole: function () {
      return _a;
    },
    triggerRoutesByCallbackRole: function () {
      return Ee;
    },
  });
  var li = W(),
    fa = 10;
  function pa(n, e, t, r, o, i) {
    let s = n.timelineIds ?? [];
    if (s.length < 2) return [];
    let a = 0,
      l = 0;
    for (let [m, y, C] of n.triggers) {
      if (y?.controlType === li.TimelineControlType.CONTINUOUS) return [];
      if (Ca(m, y)) return [];
      if (Ea(m, y)) return [];
      Ee(m, y) && (a++, (l += C ? new Set(t(C, {}, n)).size : 0));
    }
    if (
      s.some((m) => {
        let y = e.get(m),
          C = y?.settings?.control;
        return y?.triggerMetadata?.role != null && C != null && wa.has(C);
      })
    )
      return [];
    if (a > 1) return [];
    let c = l > 1;
    if (Oa(n.triggers, t, n)) return [];
    let u = [],
      d = new Map();
    for (let m of s) {
      let y = e.get(m);
      if (!y || y.reuse || !y.actions?.length || Pa(y, r)) continue;
      if (o?.(y, n)) {
        let b = y.triggerMetadata?.role ? ha(y, i) : void 0;
        if (b !== void 0) {
          let w = d.get(b);
          w ? w.push(m) : d.set(b, [m]);
        }
        continue;
      }
      if (c) continue;
      let C = new Set();
      for (let b of y.actions)
        if (b.targets)
          for (let w of b.targets) for (let S of t(w, {}, n)) C.add(S);
      u.push({ id: m, targets: C });
    }
    let f = [],
      p = (m) => {
        let y = m;
        for (let C = 0; C <= fa; C++) {
          let b = e.get(y)?.reuse?.sourceTimelineId;
          if (!b) return y;
          y = b;
        }
        return y;
      },
      h = (m, y) => {
        let C = new Set(m),
          b = new Set(),
          w = new Set(),
          S = (E) => {
            let R = E?.groupId;
            if (R != null) {
              if (b.has(R)) return !1;
              b.add(R);
            }
            let P = E?.triggerMetadata?.role;
            if (P != null) {
              if (w.has(P)) return !1;
              w.add(P);
            }
            return !0;
          };
        for (let E of m) if (!S(e.get(E))) return;
        for (let E of s) {
          if (C.has(E)) continue;
          let R = e.get(E);
          if (R?.reuse && C.has(p(E)) && !S(R)) return;
        }
        let M = new Map();
        for (let E of m)
          for (let [R, P] of ga(e.get(E), (O) => t(O, {}, n), y)) {
            let O = M.get(R);
            if (O !== void 0 && O !== P) return;
            M.set(R, P);
          }
        let T = new Map(m.map((E) => [E, ma(e.get(E), r, y)])),
          A = new Map();
        for (let E of s) for (let [R, P] of T.get(E) ?? []) A.set(R, P);
        if (A.size > 0) {
          let E = m.find((P) => {
            let O = T.get(P);
            if (O.size !== A.size) return !1;
            for (let [_, V] of O) if (A.get(_) !== V) return !1;
            return !0;
          });
          if (!E) return;
          let R = m.indexOf(E);
          if (R > 0) {
            let [P] = m.splice(R, 1);
            m.unshift(P);
          }
        }
        f.push({ primary: m[0], members: m });
      },
      g = new Set();
    for (let m = 0; m < u.length; m++) {
      if (g.has(m)) continue;
      let y = [u[m].id],
        C = new Set(u[m].targets);
      g.add(m);
      let b = !0;
      for (; b; ) {
        b = !1;
        for (let w = m + 1; w < u.length; w++)
          if (!g.has(w) && di(C, u[w].targets)) {
            y.push(u[w].id);
            for (let S of u[w].targets) C.add(S);
            g.add(w), (b = !0);
          }
      }
      y.length >= 2 && h(y);
    }
    for (let [m, y] of d) y.length >= 2 && h(y, m);
    return f;
  }
  function ha(n, e) {
    if (!e || !n.actions?.length) return;
    let t;
    for (let r of n.actions) {
      if (!r.targets?.length) return;
      for (let o of r.targets) {
        let i = e(o);
        if (i === void 0) return;
        if (t === void 0) t = i;
        else if (t !== i) return;
      }
    }
    return t;
  }
  function ga(n, e, t) {
    let r = [];
    for (let o of n?.actions ?? []) {
      if (!o?.splitText) continue;
      let i = typeof o.splitText == "string" ? void 0 : o.splitText.mask,
        s = i ? `mask_${i}` : "none";
      if (t !== void 0) {
        r.push([t, s]);
        continue;
      }
      for (let a of o.targets ?? []) {
        let l = e(a);
        if (l.length === 0) r.push([JSON.stringify(a), s]);
        else for (let c of l) r.push([c, s]);
      }
    }
    return r;
  }
  function ma(n, e, t) {
    let r = new Map();
    if (!n?.actions) return r;
    let o = new Map();
    for (let i of n.actions) {
      if (!i) continue;
      let s = i.tt ?? 0,
        a = i.splitText
          ? typeof i.splitText == "string"
            ? i.splitText
            : i.splitText.type
          : "none",
        l = a === "none" ? "" : `_split_${a}`,
        c = JSON.stringify(i.targets) + l,
        u =
          i.splitText && typeof i.splitText != "string"
            ? i.splitText.mask
            : void 0,
        d = u ? `_mask_${u}` : "",
        f = o.get(c) ?? new Set();
      o.set(c, f);
      let p = !1;
      for (let h of Object.values(i.properties ?? {}))
        for (let g of Object.keys(h || {})) f.has(g) ? (p = !0) : f.add(g);
      if ((s === 1 || s === 2) && !p) {
        let h = (t === void 0 ? c : t + l) + d;
        for (let [g, m] of ya(i, e)) r.set(`${h} ${g}`, m);
      }
    }
    return r;
  }
  function ya(n, e) {
    let t = [];
    for (let r in n.properties) {
      let o = e(r),
        i = n.properties[r];
      if (!(!o?.createTweenConfig || !i))
        try {
          let s = o.createTweenConfig(i);
          for (let [a, l] of Object.entries(s.from ?? {}))
            t.push([a, ba(l, i)]);
        } catch {}
    }
    return t;
  }
  var va = 0;
  function ba(n, e) {
    if (typeof n == "number" && Number.isNaN(n))
      return `NaN(${JSON.stringify(e) ?? ""})`;
    if (typeof n == "function") {
      let { legacyExpression: t } = n;
      return typeof t == "string" ? `fn(${t})` : `fn#${va++}`;
    }
    return JSON.stringify(n) ?? "undefined";
  }
  var Ta = new Set(["resume", "reverse", "reverseFlipEase", "pause", "stop"]),
    wa = new Set(["resume", "pause", "stop"]),
    Sa = new Set(["togglePlayReverse", "togglePlayReverseFlipEase"]);
  function Ea(n, e) {
    if (!e) return !1;
    let t = Ee(n, e),
      r = (s) => !!(s && (Ta.has(s) || (!t && Sa.has(s))));
    if (r(e.control)) return !0;
    let { ifTrue: o, ifFalse: i } = e.conditionalLogic ?? {};
    return r(o?.control) || r(i?.control);
  }
  function Ca(n, e) {
    return !e ||
      (e.controlType !== void 0 &&
        e.controlType !== li.TimelineControlType.STANDARD)
      ? !0
      : !(
          (e.assignedGroupId !== void 0 && e.assignedGroupId !== "") ||
          e.assignedTimelineRole ||
          Ee(n, e)
        );
  }
  function Ma(n, e) {
    return (
      n === Nt && typeof e == "object" && e !== null && e.multiTimeline === !0
    );
  }
  var Nt = "wf:hover",
    ci = new Set(["wf:navbar", "wf:dropdown"]),
    ai = new Set(["wf:focus", "wf:blur"]),
    Ia = new Map([
      [Nt, new Set(["mouseEnter", "mouseLeave"])],
      ["wf:navbar", new Set(["open", "close"])],
      ["wf:dropdown", new Set(["open", "close"])],
    ]);
  function Ee(n, e) {
    return ci.has(n) || Ma(n, e?.pluginConfig);
  }
  function Aa(n) {
    return typeof n?.assignedGroupId == "string" && n.assignedGroupId !== ""
      ? n.assignedGroupId
      : void 0;
  }
  function Ra(n) {
    let e = Aa(n);
    return e !== void 0
      ? `group:${e}`
      : n?.assignedTimelineRole
      ? `role:${n.assignedTimelineRole}`
      : void 0;
  }
  function ui(n, e) {
    if (n !== Nt) return;
    let t = e?.pluginConfig;
    if (typeof t == "object" && t !== null) {
      let r = t.eventMode;
      return r === "enter" || r === "leave" ? r : void 0;
    }
  }
  function _a(n, e, t) {
    if (Ia.get(n)?.has(t) === !1) return !1;
    if (ci.has(n)) {
      let o = e?.pluginConfig,
        i = typeof o == "object" && o !== null ? o.event : void 0;
      return i ? t === i : !0;
    }
    let r = ui(n, e);
    return r === "enter"
      ? t !== "mouseLeave"
      : r === "leave"
      ? t !== "mouseEnter"
      : !0;
  }
  function Oa(n, e, t) {
    let r = [];
    for (let [o, i, s] of n) {
      let a = Ee(o, i) ? `callback:${r.length}` : Ra(i);
      a !== void 0 &&
        r.push({
          route: a,
          key: o,
          eventMode: ui(o, i),
          reactive: i.conditionalLogic != null,
          elements: s ? new Set(e(s, {}, t)) : new Set(),
        });
    }
    for (let o = 0; o < r.length; o++)
      for (let i = o + 1; i < r.length; i++) {
        if (r[o].route === r[i].route) continue;
        let s = r[o].eventMode,
          a = r[i].eventMode,
          l = di(r[o].elements, r[i].elements),
          c = s !== void 0 && a !== void 0,
          u = r[o].reactive || r[i].reactive,
          d = r[o].reactive && r[i].reactive,
          f = r[o].key !== r[i].key && ai.has(r[o].key) && ai.has(r[i].key);
        if (l) {
          if (!(c && s !== a && !u)) return !0;
        } else if (c || f || d || xa(r[o].elements, r[i].elements)) return !0;
      }
    return !1;
  }
  function di(n, e) {
    let [t, r] = n.size <= e.size ? [n, e] : [e, n];
    for (let o of t) if (r.has(o)) return !0;
    return !1;
  }
  function xa(n, e) {
    for (let t of n)
      for (let r of e)
        if (t !== r && (t.contains(r) || r.contains(t))) return !0;
    return !1;
  }
  function Pa(n, e) {
    for (let t of n.actions ?? [])
      for (let r in t.properties) if (e(r)?.createCustomTween) return !0;
    return !1;
  }
});
var gi = v((jt) => {
  "use strict";
  Object.defineProperty(jt, "__esModule", { value: !0 });
  function ka(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ka(jt, {
    MAX_ALIAS_DEPTH: function () {
      return pi;
    },
    resolveSourceTimelineId: function () {
      return hi;
    },
    shouldFlipEaseForTimeline: function () {
      return Fa;
    },
  });
  var fi = Dt(),
    pi = 10;
  function hi(n, e) {
    let t = e;
    for (let r = 0; r <= pi; r++) {
      let i = n.get(t)?.reuse?.sourceTimelineId;
      if (!i) return t;
      t = i;
    }
    return (
      console.warn(
        `IX3: Timeline reuse chain exceeded max depth for "${e}". Possible circular reference.`
      ),
      t
    );
  }
  function Fa(n, e, t, r) {
    let {
        getInteractionsForTimelines: o,
        getReuseAliasesForSource: i,
        timelineGroupsEnabled: s,
      } = r,
      a = hi(n, t),
      l = new Set([a, ...i(a)]),
      c = !1,
      u = (f) => {
        if (f === "reverseFlipEase" || f === "togglePlayReverseFlipEase")
          c = !0;
        else if (f === "reverse" || f === "togglePlayReverse") return !0;
        return !1;
      },
      d = new Map();
    if (s) for (let f of o(l)) d.set(f.id, f);
    else
      for (let f of l) {
        let p = e(f);
        p && d.set(p.id, p);
      }
    for (let f of d.values()) {
      let p = f.timelineIds ?? [];
      for (let [h, g] of f.triggers) {
        let m = g?.assignedGroupId,
          y = (0, fi.triggerRoutesByCallbackRole)(h, g);
        if (m === null && !y) continue;
        let C = g?.assignedTimelineRole,
          b =
            C != null
              ? p.filter((T) => n.get(T)?.triggerMetadata?.role === C)
              : null,
          w;
        if (y)
          w = p.filter((T) => {
            let A = n.get(T)?.triggerMetadata?.role;
            return A != null && (0, fi.triggerEmitsCallbackRole)(h, g, A);
          });
        else if (m != null) {
          let T = p.filter((A) => n.get(A)?.groupId === m);
          if (T.length === 0) continue;
          w = T;
        } else w = b;
        let S = (T) =>
            (T != null ? [T] : p).filter(
              (E) => (w == null || w.includes(E)) && l.has(E)
            ),
          M = g?.conditionalLogic;
        if (M) {
          for (let T of [M.ifTrue, M.ifFalse])
            if (T && S(T.targetTimelineId ?? void 0).length > 0 && u(T.control))
              return !1;
        } else
          for (let T of S()) {
            let A = n.get(T),
              E = (s ? A?.triggerMetadata?.role != null : A?.triggerMetadata)
                ? A?.settings?.control
                : g?.control;
            if (u(E)) return !1;
          }
      }
    }
    return c;
  }
});
var yi = v((Gt) => {
  "use strict";
  Object.defineProperty(Gt, "__esModule", { value: !0 });
  function Na(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Na(Gt, {
    SplitTextManager: function () {
      return Bt;
    },
    getSplitTextType: function () {
      return mi;
    },
  });
  var Vt = te(),
    Bt = class {
      collectTargets;
      onAutoSplit;
      onSplitExtended;
      onSplitReused;
      globalSplitRegistry;
      constructor(e, t, r, o) {
        (this.collectTargets = e),
          (this.onAutoSplit = t),
          (this.onSplitExtended = r),
          (this.onSplitReused = o),
          (this.globalSplitRegistry = new Map());
      }
      splitForActions(e, t, r, o, i, s) {
        let a = this.analyzeSplitRequirements(e, t, r, s);
        for (let [l, { types: c, masks: u }] of a)
          this.doSplitText({ type: La(c), mask: Da(u) }, [l], o, i);
      }
      analyzeSplitRequirements(e, t, r, o) {
        let i = new Map();
        for (let s of e) {
          let a = mi(s);
          if (a === "none") continue;
          let l = typeof s.splitText == "object" ? s.splitText.mask : void 0;
          for (let c of this.collectTargets(s, t, r, o)) {
            if (c === document.body) continue;
            let u = i.get(c) || { types: new Set(), masks: new Set() };
            i.set(c, u), u.types.add(a), l && u.masks.add(l);
          }
        }
        return i;
      }
      doSplitText(e, t, r, o) {
        try {
          let i = Ue(e.type);
          for (let s of t) {
            let a = this.globalSplitRegistry.get(s);
            if (a) {
              let p = new Set(Ue(a.splitTextConfig.type));
              if (i.every((g) => p.has(g))) {
                (a.owner = r),
                  p.has("lines") &&
                    (this.onSplitReused(r), (r.timeline.data.splitLines = !0));
                continue;
              }
              a.splitInstance.revert(),
                this.globalSplitRegistry.delete(s),
                (e = {
                  type: [...new Set([...p, ...i])].join(", "),
                  mask: e.mask || a.splitTextConfig.mask,
                });
            }
            let l = { splitInstance: void 0, splitTextConfig: e, owner: r },
              c = { type: e.type, tag: "span" },
              u = Ue(e.type),
              { mask: d } = e;
            u.includes("lines") &&
              ((r.timeline.data.splitLines = !0),
              (c.linesClass = (0, Vt.defaultSplitClass)("line")),
              (c.autoSplit = !0),
              (c.onSplit = (p) => {
                this.applySplitElementStyles(p, d),
                  this.onAutoSplit(l.owner, s);
              })),
              u.includes("words") &&
                (c.wordsClass = (0, Vt.defaultSplitClass)("word")),
              u.includes("chars") &&
                (c.charsClass = (0, Vt.defaultSplitClass)("letter")),
              d && (c.mask = d);
            let f = new o([s], c);
            this.applySplitElementStyles(f, d),
              (l.splitInstance = f),
              this.globalSplitRegistry.set(s, l),
              a && this.onSplitExtended(s);
          }
        } catch (i) {
          console.error("Error splitting text:", i);
        }
      }
      applySplitElementStyles(e, t) {
        let r = [
          [e.lines, "block"],
          [e.words, "inline-block"],
          [e.chars, "inline-block"],
        ];
        t && r.push([e.masks, t === "lines" ? "block" : "inline-block"]);
        for (let [o, i] of r)
          for (let s of o) {
            let { style: a } = s;
            (a.position = "relative"), (a.display = i);
          }
      }
      getSplitElements(e, t) {
        let r = [];
        for (let o of e) {
          let i = this.globalSplitRegistry.get(o);
          if (i && Ue(i.splitTextConfig.type).includes(t)) {
            let a = i.splitInstance[t];
            a?.length && r.push(...a);
          }
        }
        return r.length > 0 ? r : e;
      }
      revertAll() {
        for (let [, e] of this.globalSplitRegistry) e.splitInstance.revert();
        this.globalSplitRegistry.clear();
      }
    };
  function La(n) {
    return (
      n.has("chars") && !n.has("words") && (n = new Set([...n, "words"])),
      ["lines", "words", "chars"].filter((r) => n.has(r)).join(", ")
    );
  }
  function Da(n) {
    if (n.size !== 0) {
      if (n.has("lines")) return "lines";
      if (n.has("words")) return "words";
      if (n.has("chars")) return "chars";
    }
  }
  function mi(n) {
    return n.splitText
      ? typeof n.splitText == "string"
        ? n.splitText
        : n.splitText.type
      : "none";
  }
  function Ue(n) {
    return n.split(", ");
  }
});
var $t = v((Ut) => {
  "use strict";
  Object.defineProperty(Ut, "__esModule", { value: !0 });
  function ja(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ja(Ut, {
    convertEaseConfigToGSAP: function () {
      return bi;
    },
    convertEaseConfigToLinear: function () {
      return Ba;
    },
    isAdvancedEase: function () {
      return Ga;
    },
    isBasicEase: function () {
      return Ua;
    },
  });
  var Ce = te();
  function vi() {
    return {
      gsap: window.gsap,
      CustomEase: window.CustomEase,
      CustomWiggle: window.CustomWiggle,
      CustomBounce: window.CustomBounce,
    };
  }
  function bi(n, e = vi(), t) {
    return n == null
      ? "none"
      : typeof n == "number"
      ? Ce.EASING_NAMES[n] || "none"
      : Va(n, e, t);
  }
  function Va(n, e, t) {
    switch (n.type) {
      case "back":
        return `back.${n.curve}(${n.power})`;
      case "elastic":
        return `elastic.${n.curve}(${n.amplitude}, ${n.period})`;
      case "steps":
        return `steps(${n.stepCount})`;
      case "rough": {
        let {
          templateCurve: r,
          points: o,
          strength: i,
          taper: s,
          randomizePoints: a,
          clampPoints: l,
        } = n;
        return `rough({ template: ${r}, strength: ${i}, points: ${o}, taper: ${s}, randomize: ${a}, clamp: ${l} })`;
      }
      case "slowMo":
        return `slow(${n.linearRatio}, ${n.power}, ${n.yoyoMode})`;
      case "expoScale":
        return `expoScale(${n.startingScale}, ${n.endingScale}, ${n.templateCurve})`;
      case "customWiggle": {
        let { CustomWiggle: r } = e;
        return r
          ? r.create((0, Ce.buildCustomEaseId)("customIX3Wiggle", t), {
              wiggles: n.wiggles,
              type: n.wiggleType,
            })
          : null;
      }
      case "customBounce": {
        let { CustomBounce: r } = e;
        return r
          ? r.create((0, Ce.buildCustomEaseId)("customIX3Bounce", t), {
              strength: n.strength,
              endAtStart: n.endAtStart,
              squash: n.squash,
              squashID: (0, Ce.buildCustomEaseId)("customIX3Squash", t),
            })
          : null;
      }
      case "customEase": {
        let { CustomEase: r } = e;
        return r
          ? r.create(
              (0, Ce.buildCustomEaseId)("customIX3Ease", t),
              n.bezierCurve
            )
          : null;
      }
      default:
        return "none";
    }
  }
  function Ba(n, e = vi(), t = 20) {
    if (n == null) return "linear";
    let r = bi(n, e);
    if (r === null) return "linear";
    if (typeof n == "object" && n.type === "steps")
      return `steps(${n.stepCount})`;
    let { gsap: o } = e;
    if (!o) return "linear";
    let i = o.parseEase(r);
    if (typeof i != "function") return "linear";
    let s = [];
    for (let a = 0; a <= t; a++) {
      let l = a / t,
        c = i(l);
      s.push({ t: Number(l.toFixed(4)), value: Number(c.toFixed(4)) });
    }
    return (
      "linear(" +
      s.map((a) => `${a.value} ${Math.round(a.t * 100)}%`).join(", ") +
      ")"
    );
  }
  function Ga(n) {
    return typeof n == "object" && n !== null;
  }
  function Ua(n) {
    return typeof n == "number";
  }
});
var Si = v((Ht) => {
  "use strict";
  Object.defineProperty(Ht, "__esModule", { value: !0 });
  function $a(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  $a(Ht, {
    applyEase: function () {
      return qt;
    },
    configHasVolatileValue: function () {
      return Ha;
    },
    convertToGsapDefaults: function () {
      return za;
    },
    getStaggerConfig: function () {
      return wi;
    },
    isVolatileGsapValue: function () {
      return Ti;
    },
  });
  var se = te(),
    qa = $t();
  function Ti(n) {
    return (
      typeof n == "function" ||
      (typeof n == "string" &&
        (n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(")))
    );
  }
  function Ha(n) {
    for (let e of [n.to, n.from])
      if (e) {
        for (let t in e) if (Ti(e[t])) return !0;
      }
    return !1;
  }
  function qt(n, e, t) {
    let r = (0, qa.convertEaseConfigToGSAP)(e, void 0, t);
    r != null && (n.ease = r);
  }
  var wi = (n, e) => {
    if (!n) return;
    let { ease: t, amount: r, from: o, grid: i, axis: s, each: a } = n,
      l = {};
    return (
      r != null && (l.amount = (0, se.toSeconds)(r)),
      a != null && (l.each = (0, se.toSeconds)(a)),
      o != null && (l.from = o),
      i != null && (l.grid = i),
      s != null && (l.axis = s),
      t != null && qt(l, t, e),
      l
    );
  };
  function za(n, e) {
    let t = {},
      r = e ? (0, se.buildEaseContextId)(e, "defaults") : void 0,
      o = e ? (0, se.buildEaseContextId)(e, "defaults-stagger") : void 0;
    if (
      (n.duration != null && (t.duration = (0, se.toSeconds)(n.duration)),
      n.ease != null && qt(t, n.ease, r),
      n.delay != null &&
        (t.delay =
          typeof n.delay == "number" ? n.delay : (0, se.toSeconds)(n.delay)),
      n.repeat != null && (t.repeat = n.repeat),
      n.repeatDelay != null &&
        (t.repeatDelay = (0, se.toSeconds)(n.repeatDelay)),
      n.stagger != null)
    ) {
      let i = wi(n.stagger, o);
      i && (t.stagger = i);
    }
    return n.yoyo != null && (t.yoyo = n.yoyo), t;
  }
});
var Ei = v((zt) => {
  "use strict";
  Object.defineProperty(zt, "__esModule", { value: !0 });
  Object.defineProperty(zt, "createToggleActionHandlers", {
    enumerable: !0,
    get: function () {
      return Wa;
    },
  });
  function Wa(n, e, t = !1) {
    let [r, o, i, s] = n,
      a = (c) => () => {
        if (c !== void 0)
          switch (c) {
            case "play":
              t && e.progress() === 0 && e.invalidate(), e.play();
              break;
            case "pause":
              e.pause();
              break;
            case "resume":
              t && e.progress() === 0 && e.invalidate(), e.resume();
              break;
            case "reverse":
              e.reverse();
              break;
            case "restart":
              t && e.invalidate(), e.restart();
              break;
            case "reset":
              e.pause(0);
              break;
            case "complete":
              t && e.progress() === 0 && e.invalidate(), e.progress(1);
              break;
            case "none":
              break;
            default: {
              let u = c;
              break;
            }
          }
      },
      l = {};
    return (
      r !== "none" && (l.onEnter = a(r)),
      o !== "none" && (l.onLeave = a(o)),
      i !== "none" && (l.onEnterBack = a(i)),
      s !== "none" && (l.onLeaveBack = a(s)),
      l
    );
  }
});
var Ci = v((Wt) => {
  "use strict";
  Object.defineProperty(Wt, "__esModule", { value: !0 });
  Object.defineProperty(Wt, "buildGSAPConfig", {
    enumerable: !0,
    get: function () {
      return Ka;
    },
  });
  var Ya = Ei();
  function Xa(n, e, t) {
    let r = {},
      o = (i) =>
        i && (i.parentElement === document.body || i === document.body);
    if (n.pin !== void 0)
      if (typeof n.pin == "boolean") n.pin && !o(e) && (r.pin = n.pin);
      else {
        let i = t(n.pin, { triggerElement: e });
        i.length > 0 && !o(i[0]) && (r.pin = i[0]);
      }
    if (n.endTrigger) {
      let i = t(n.endTrigger, { triggerElement: e });
      i.length > 0 && (r.endTrigger = i[0]);
    }
    if (n.scroller) {
      let i = t(n.scroller, { triggerElement: e });
      i.length > 0 ? (r.scroller = i[0]) : (r.scroller = window);
    }
    return r;
  }
  function Ka(n, e, t, r, o, i = !1) {
    let s = Xa(n, e, o),
      a = [
        n.enter || "none",
        n.leave || "none",
        n.enterBack || "none",
        n.leaveBack || "none",
      ],
      l = {
        trigger: e,
        markers: n.showMarkers ?? !1,
        start: n.clamp ? `clamp(${n.start})` : n.start || "top bottom",
        end: n.clamp ? `clamp(${n.end})` : n.end || "bottom top",
        scrub: n.scrub ?? !1,
        horizontal: n.horizontal || !1,
        toggleActions: a.join(" "),
        id: t,
        ...s,
      };
    if (l.scrub !== !1) l.animation = r;
    else {
      let c = (0, Ya.createToggleActionHandlers)(a, r, i);
      Object.assign(l, c);
    }
    return l;
  }
});
var Ii = v((Zt) => {
  "use strict";
  Object.defineProperty(Zt, "__esModule", { value: !0 });
  Object.defineProperty(Zt, "AnimationCoordinator", {
    enumerable: !0,
    get: function () {
      return Kt;
    },
  });
  var Yt = W(),
    ge = te(),
    Za = oi(),
    Qa = si(),
    Xt = gi(),
    Mi = yi(),
    Me = Si(),
    Ja = Ci(),
    Kt = class {
      timelineDefs;
      getHandler;
      getTargetResolver;
      resolveFn;
      getInteractionForTimeline;
      getInteractionsForTimelines;
      env;
      subs;
      dynamicFlags;
      cleanupFns;
      scrollTriggers;
      aliases;
      flipEaseBySource;
      pluginRuntimeBridge;
      animation;
      sharedGroups;
      rewindSharedRefire;
      timelineGroupsEnabled;
      resolveAlias(e, t = 0) {
        if (t > Xt.MAX_ALIAS_DEPTH)
          return (
            console.warn(
              `IX3: Timeline alias chain exceeded max depth for "${e}". Possible circular reference.`
            ),
            e
          );
        let r = this.aliases.get(e);
        return r ? this.resolveAlias(r, t + 1) : e;
      }
      reuseAliasIndex;
      invalidateReuseAliasIndex() {
        this.reuseAliasIndex = null;
      }
      buildReuseAliasIndex() {
        let e = new Map();
        for (let [t] of this.timelineDefs) {
          let r = this.resolveSourceTimelineId(t);
          if (r === t) continue;
          let o = e.get(r);
          o ? o.push(t) : e.set(r, [t]);
        }
        return e;
      }
      getReuseAliasesForSource(e) {
        return (
          this.reuseAliasIndex ||
            (this.reuseAliasIndex = this.buildReuseAliasIndex()),
          this.reuseAliasIndex.get(e) ?? []
        );
      }
      shouldFlipEaseForTimeline(e) {
        return (0, Xt.shouldFlipEaseForTimeline)(
          this.timelineDefs,
          this.getInteractionForTimeline,
          e,
          {
            getInteractionsForTimelines: this.getInteractionsForTimelines,
            getReuseAliasesForSource: (t) => this.getReuseAliasesForSource(t),
            timelineGroupsEnabled: this.timelineGroupsEnabled,
          }
        );
      }
      recomputeFlipEaseForSource(e) {
        let t = this.resolveSourceTimelineId(e),
          r = this.subs.get(t);
        if (!r) return;
        let o = this.shouldFlipEaseForTimeline(t);
        if (o !== this.flipEaseBySource.get(t)) {
          this.flipEaseBySource.set(t, o);
          for (let i of r.values()) this.scheduleRebuild(i);
        }
      }
      resolveSourceTimelineId(e) {
        return (0, Xt.resolveSourceTimelineId)(this.timelineDefs, e);
      }
      splitText;
      timelineTargetsCache;
      constructor(e, t, r, o, i, s, a) {
        (this.timelineDefs = e),
          (this.getHandler = t),
          (this.getTargetResolver = r),
          (this.resolveFn = o),
          (this.getInteractionForTimeline = i),
          (this.getInteractionsForTimelines = s),
          (this.env = a),
          (this.subs = new Map()),
          (this.dynamicFlags = new Map()),
          (this.cleanupFns = new Map()),
          (this.scrollTriggers = new Map()),
          (this.aliases = new Map()),
          (this.flipEaseBySource = new Map()),
          (this.pluginRuntimeBridge = new Za.PluginRuntimeBridge()),
          (this.sharedGroups = new Map()),
          (this.rewindSharedRefire = !1),
          (this.timelineGroupsEnabled = !1),
          (this.reuseAliasIndex = null),
          (this.splitText = new Mi.SplitTextManager(
            (l, c, u, d) => this.collectTargets(l, c, u, d),
            (l, c) => {
              l.rebuildState !== "init"
                ? this.scheduleRebuildForElement(c)
                : (l.rebuildState = "idle");
            },
            (l) => this.scheduleRebuildForElement(l),
            (l) => {
              l.rebuildState = "idle";
            }
          )),
          (this.timelineTargetsCache = new WeakMap()),
          (this.animation = new Qa.RuntimeMotionDriver(a));
      }
      registerSharedGroup(e, t) {
        if (t.length < 2) return;
        let r = new Set();
        for (let i of t) {
          let s = this.sharedGroups.get(i);
          s && r.add(s);
        }
        if (r.size > 0) {
          for (let i of r) this.dissolveSharedGroup(i);
          return;
        }
        let o = { primary: e };
        for (let i of t)
          this.sharedGroups.set(i, o), i !== e && this.aliases.set(i, e);
      }
      dissolveSharedGroupForTimeline(e) {
        let t = this.sharedGroups.get(e);
        return t ? this.dissolveSharedGroup(t) : [];
      }
      dissolveSharedGroup(e) {
        let t = [];
        for (let [l, c] of this.sharedGroups) c === e && t.push(l);
        let r = t.indexOf(e.primary);
        r >= 0 && t.push(...t.splice(r, 1));
        let o = [],
          i = this.subs.get(e.primary);
        if (i)
          for (let [l, c] of i) {
            let u = c.timeline.totalProgress(),
              d = c.timeline.paused() === !0,
              f = u <= 0 && d,
              p = c.timeline.timeScale();
            o.push({
              id: c.timelineId,
              el: l,
              progress: u,
              reversed: c.timeline.reversed() === !0,
              paused: d,
              timeScale: typeof p == "number" && p !== 0 ? Math.abs(p) : 1,
              controlTypes: c.controlTypes,
              owningInteraction: c.owningInteraction,
              dormant: f,
            });
          }
        for (let l of t)
          this.sharedGroups.delete(l),
            this.aliases.get(l) === e.primary && this.aliases.delete(l);
        let s = [];
        for (let l of t) {
          let c = this.getInteractionForTimeline(l);
          c &&
            (this.createTimeline(l, c, { revertGlobalSplits: !1 }), s.push(l));
        }
        for (let { el: l, controlTypes: c, owningInteraction: u } of o)
          if (l != null)
            for (let d of t) {
              if (this.dynamicFlags.get(d) !== !0) continue;
              let f = this.ensureSubs(d);
              if (f.has(l)) continue;
              let p = this.buildSubTimeline(d, l, c, u);
              p && f.set(l, p);
            }
        let a = new Set(s);
        for (let {
          id: l,
          el: c,
          progress: u,
          reversed: d,
          paused: f,
          timeScale: p,
          dormant: h,
        } of o) {
          if (h) continue;
          let g = this.getSubOrNull(l, c)?.timeline;
          g &&
            (g.timeScale(p),
            g.reversed(d),
            g.totalProgress(u),
            a.add(l),
            !f && (d ? g.reverse() : g.play()));
        }
        return [...a];
      }
      createTimeline(e, t, r) {
        let o = this.timelineDefs.get(e);
        if (this.aliases.has(e)) return;
        let i = this.sharedGroups.get(e);
        if (
          (this.destroy(e, {
            reassignSharedPrimary: !1,
            revertGlobalSplits: r?.revertGlobalSplits,
          }),
          !o)
        )
          return;
        if ((i && this.sharedGroups.set(e, i), o.reuse?.sourceTimelineId)) {
          this.aliases.set(e, o.reuse.sourceTimelineId),
            this.recomputeFlipEaseForSource(o.reuse.sourceTimelineId);
          return;
        }
        let s = this.isDynamicTimeline(o, t);
        this.dynamicFlags.set(e, s);
        let a = new Set(),
          l = new Set();
        for (let [, c, u] of t.triggers) {
          if (u) for (let f of this.resolveFn(u, {}, t)) l.add(f);
          let d = c?.controlType;
          d && (0, ge.isValidControlType)(d) && a.add(d);
        }
        if (!l.size || !s) {
          let c = this.buildSubTimeline(e, null, a, t);
          c && this.ensureSubs(e).set(null, c);
        }
        if (l.size) {
          let c = this.ensureSubs(e);
          for (let u of l)
            if (!c.has(u)) {
              let d = s
                ? this.buildSubTimeline(e, u, a, t)
                : this.getSub(e, null);
              s && d && c.set(u, d);
            }
        }
        this.flipEaseBySource.set(e, this.shouldFlipEaseForTimeline(e));
      }
      getTimeline(e, t) {
        return this.prepareIfShared(e, t), this.getSub(e, t)?.timeline;
      }
      prepareIfShared(e, t, r = !1) {
        let o = this.sharedGroups.get(e);
        if (!o) {
          let d = this.resolveSourceTimelineId(e);
          d !== e && this.sharedGroups.has(d) && this.prepareIfShared(d, t, r);
          return;
        }
        let i = this.timelineDefs.get(e);
        if (!i) return;
        let s = this.getSub(o.primary, t);
        if (!s) return;
        if (s.timelineId === e) {
          r && this.rewindExhausted(s);
          return;
        }
        let a = s.timelineId;
        me(s.cleanupFns), me(this.cleanupFns.get(a));
        let l = s.timeline;
        l.clear(), l.progress(0);
        let c = (0, Me.convertToGsapDefaults)(i.settings || {}, e);
        l.repeat(typeof c.repeat == "number" ? c.repeat : 0),
          l.repeatDelay(typeof c.repeatDelay == "number" ? c.repeatDelay : 0),
          l.yoyo(c.yoyo === !0);
        let u = typeof c.delay == "number" ? c.delay : 0;
        if (
          (l.delay(u),
          l.reversed(!!i.playInReverse),
          l.timeScale(
            typeof i.settings?.speed == "number" ? i.settings.speed : 1
          ),
          u > 0 && this.rewindSharedRefire && l.totalTime(-u),
          (s.timelineDef = { ...i, actions: i.actions || [] }),
          (s.timelineId = e),
          this.timelineTargetsCache.delete(s),
          this.env.win.SplitText && i.actions?.length)
        ) {
          let d = s.rebuildState;
          (s.rebuildState = "building"),
            this.splitText.splitForActions(
              i.actions,
              t,
              e,
              s,
              this.env.win.SplitText,
              s.owningInteraction
            );
          let f = s.rebuildState;
          s.rebuildState = f === "rebuild_pending" || f === "idle" ? "idle" : d;
        }
        (s.hasVolatileValues = !1), this.buildTimeline(s);
      }
      rewindExhausted(e) {
        if (!(e.timeline.totalProgress() >= 1)) return;
        e.hasVolatileValues && e.timeline.invalidate(),
          e.timeline.totalProgress(0);
        let r = e.timeline.delay();
        r > 0 && e.timeline.totalTime(-r);
      }
      getAllTimelines(e) {
        let t = this.resolveAlias(e),
          r = this.subs.get(t);
        if (!r) return [];
        for (let o of r.keys()) this.prepareIfShared(e, o);
        return Array.from(r.values()).map((o) => o.timeline);
      }
      invalidateVolatileFromStart(e, t) {
        let r = t != null ? t === 0 : e.timeline.progress() === 0;
        e.hasVolatileValues && r && e.timeline.invalidate();
      }
      setTimelineGroups(e) {
        this.timelineGroupsEnabled = e;
      }
      setRewindSharedRefire(e) {
        this.rewindSharedRefire = e;
      }
      play(e, t, r) {
        this.prepareIfShared(e, t, r == null && this.rewindSharedRefire);
        let o = this.getSub(e, t);
        o &&
          (this.invalidateVolatileFromStart(o, r),
          o.timeline.play(r ?? void 0));
      }
      pause(e, t, r) {
        this.prepareIfShared(e, t);
        let o = this.getSubOrNull(e, t);
        o && (r !== void 0 ? o.timeline.pause(r) : o.timeline.pause());
      }
      resume(e, t, r) {
        this.prepareIfShared(e, t);
        let o = this.getSubOrNull(e, t);
        o && (this.invalidateVolatileFromStart(o, r), o.timeline.resume(r));
      }
      reverse(e, t, r) {
        this.prepareIfShared(e, t), this.getSub(e, t)?.timeline.reverse(r);
      }
      restart(e, t) {
        this.prepareIfShared(e, t);
        let r = this.getSub(e, t);
        r &&
          (r.hasVolatileValues && r.timeline.invalidate(),
          r.timeline.restart());
      }
      getTriggerMetadata(e) {
        return this.timelineDefs.get(e)?.triggerMetadata ?? null;
      }
      fireInterval(e, t, r = {}) {
        this.pluginRuntimeBridge.fireInterval({
          coordinator: this,
          timelineId: e,
          element: t,
          options: r,
          animation: this.animation,
        });
      }
      registerIntervalHandler(e, t) {
        this.pluginRuntimeBridge.registerIntervalHandler(e, t);
      }
      getOneShotTimelineContext(e) {
        let t = this.getTimelineDef(e);
        return t
          ? {
              timelineId: e,
              timelineDef: t,
              getFirstActionTargets: (r) => this.getFirstActionTargets(e, r),
              getActionTweenConfig: (r, o, i) =>
                this.getActionTweenConfig(r, o, i),
              buildActionTimeline: (r) => this.buildOneShotActionTimeline(e, r),
              registerCleanup: (r) => this.registerCleanup(e, r),
            }
          : null;
      }
      getTimelineDef(e) {
        return this.timelineDefs.get(this.resolveAlias(e));
      }
      getFirstActionTargets(e, t) {
        let o = this.getTimelineDef(e)?.actions?.[0];
        return o ? this.collectTargets(o, t, e) : [];
      }
      getActionTweenConfig(e, t, r) {
        let o = this.getHandler(t);
        if (!o?.createTweenConfig) return null;
        let i = e.properties[t] || {};
        return o.createTweenConfig(i, r);
      }
      registerCleanup(e, t) {
        let r = this.cleanupFns.get(e) ?? new Set();
        return (
          this.cleanupFns.set(e, r),
          r.add(t),
          () => {
            r.delete(t);
          }
        );
      }
      publishChannel(e, t, r) {
        this.pluginRuntimeBridge.publish(e, t, r);
      }
      subscribeChannel(e, t, r, o) {
        return this.pluginRuntimeBridge.subscribe(e, t, r, o);
      }
      buildOneShotActionTimeline(e, t) {
        let r = this.getTimelineDef(e);
        if (!r?.actions?.length) return null;
        let o = this.animation.timeline();
        if (!o) return null;
        t.beforeTweens?.(o);
        for (let i of r.actions)
          this.buildTweensForAction(
            i,
            t.targets,
            o,
            e,
            !1,
            t.varsTransform,
            void 0,
            void 0,
            void 0,
            t.cleanupBucket
          );
        return o;
      }
      togglePlayReverse(e, t) {
        this.prepareIfShared(e, t);
        let r = this.getSub(e, t);
        if (!r) return;
        let o = r.timeline,
          i = o.progress();
        this.invalidateVolatileFromStart(r),
          i === 0
            ? o.play()
            : i === 1
            ? o.reverse()
            : o.reversed()
            ? o.play()
            : o.reverse();
      }
      seek(e, t, r) {
        this.getSubOrNull(e, r)?.timeline.seek(t);
      }
      setTimeScale(e, t, r) {
        this.prepareIfShared(e, r),
          (this.timelineGroupsEnabled
            ? this.getSub(e, r)
            : this.getSubOrNull(e, r)
          )?.timeline.timeScale(t);
      }
      setTotalProgress(e, t, r) {
        this.getSubOrNull(e, r)?.timeline.totalProgress(t);
      }
      setContinuousProgress(e, t, r) {
        this.getSub(e, r)?.timeline.progress(Math.max(0, Math.min(1, t)));
      }
      isPlaying(e, t) {
        return !!this.getSubOrNull(e, t)?.timeline.isActive();
      }
      isPaused(e, t) {
        return !!this.getSubOrNull(e, t)?.timeline.paused();
      }
      destroy(e, t) {
        this.aliases.delete(e);
        let r = this.sharedGroups.get(e);
        if ((t?.reassignSharedPrimary ?? !0) && r && r.primary === e) {
          let a;
          for (let [l, c] of this.sharedGroups)
            if (c === r && l !== e) {
              a = l;
              break;
            }
          if (a) {
            (r.primary = a), this.aliases.delete(a);
            for (let [u, d] of this.sharedGroups)
              d === r && u !== e && u !== a && this.aliases.set(u, a);
            let l = this.timelineDefs.get(a),
              c = this.getInteractionForTimeline(a);
            this.dynamicFlags.set(
              a,
              !!(l && c && this.isDynamicTimeline(l, c))
            );
          }
        }
        let o = r && r.primary !== e ? r.primary : void 0;
        if (o) {
          let a = this.subs.get(o);
          if (a) {
            for (let l of a.values())
              if (l.timelineId === e) {
                for (let c of l.cleanupFns ?? []) c();
                l.cleanupFns?.clear(),
                  l.timeline.revert({ kill: !1 }),
                  l.timeline.clear(),
                  (l.rebuildState = l.timeline.data?.splitLines
                    ? "idle"
                    : "init"),
                  this.timelineTargetsCache.delete(l);
              }
          }
        }
        this.pluginRuntimeBridge.destroyTimeline(e);
        let i = this.subs.get(e),
          s = new Set();
        if (i) {
          for (let [, a] of i) {
            if (
              (a.timelineId !== e && s.add(a.timelineId),
              (a.rebuildState = "init"),
              a.timeline && (a.timeline.revert(), a.timeline.kill()),
              a.scrollTriggerIds)
            ) {
              for (let l of a.scrollTriggerIds) this.cleanupScrollTrigger(l);
              a.scrollTriggerIds.clear();
            }
            a.scrollTriggerConfigs && a.scrollTriggerConfigs.clear(),
              me(a.cleanupFns),
              this.timelineTargetsCache.delete(a);
          }
          (t?.revertGlobalSplits ?? !0) && this.splitText.revertAll();
        }
        me(this.cleanupFns.get(e));
        for (let a of s) me(this.cleanupFns.get(a)), this.cleanupFns.delete(a);
        if (
          (this.cleanupFns.delete(e),
          this.subs.delete(e),
          this.dynamicFlags.delete(e),
          this.flipEaseBySource.delete(e),
          this.sharedGroups.delete(e),
          (t?.reassignSharedPrimary ?? !0) && r)
        ) {
          let a,
            l = 0;
          for (let [c, u] of this.sharedGroups)
            if (u === r && ((a = c), ++l > 1)) break;
          if (l === 1 && a !== void 0) {
            let c = this.subs.get(a);
            if (c)
              for (let [u, d] of c)
                d.timelineId !== a && this.prepareIfShared(a, u);
            this.sharedGroups.delete(a);
          }
        }
      }
      isDynamicTimeline(e, t) {
        let r = t.triggers.some(
          ([, i]) => i?.controlType !== Yt.TimelineControlType.LOAD
        );
        if (t.scope?.type === "component" && r) return !0;
        let o = e.actions;
        if (!o?.length) return !1;
        for (let i of o) {
          for (let s of i.targets ?? []) {
            if (this.getTargetResolver(s)?.isDynamic) return !0;
            if (s.length === 3 && s[2]) {
              let l = s[2];
              if (
                l.filterBy &&
                l.relationship !== "none" &&
                this.getTargetResolver(l.filterBy)?.isDynamic
              )
                return !0;
            }
          }
          if (r) {
            for (let s in i.properties)
              if (this.getHandler(s)?.requiresTriggerElementContext) return !0;
          }
        }
        return !1;
      }
      ensureSubs(e) {
        return (
          this.subs.has(e) || this.subs.set(e, new Map()), this.subs.get(e)
        );
      }
      getSub(e, t) {
        let r = this.resolveAlias(e),
          o = this.ensureSubs(r),
          i = this.dynamicFlags.get(r),
          s = o.get(i ? t : null);
        return (
          s || ((s = this.buildSubTimeline(r, t)), s && o.set(i ? t : null, s)),
          s
        );
      }
      getSubOrNull(e, t) {
        let r = this.resolveAlias(e),
          o = this.dynamicFlags.get(r);
        return this.subs.get(r)?.get(o ? t ?? null : null);
      }
      buildSubTimeline(e, t, r, o) {
        let i = this.timelineDefs.get(e),
          s = i?.actions,
          a = i?.settings,
          l = this.env.win.gsap;
        if (!l) return;
        let c = l.timeline({
            ...(0, Me.convertToGsapDefaults)(a || {}, e),
            paused: !0,
            reversed: !!i?.playInReverse,
            data: { id: e, triggerEl: t || void 0 },
          }),
          u = i
            ? { ...i, actions: s || [] }
            : { id: e, pageId: "", deleted: !1, actions: [] },
          d = {
            timeline: c,
            timelineId: e,
            elementContext: t,
            timelineDef: u,
            rebuildState: "init",
            controlTypes: r,
            owningInteraction: o,
          };
        return (
          s?.length &&
            (this.env.win.SplitText &&
              this.splitText.splitForActions(
                s,
                t,
                e,
                d,
                this.env.win.SplitText,
                o
              ),
            this.buildTimeline(d),
            this.padTimelineToCanvas(d)),
          d
        );
      }
      padTimelineToCanvas(e) {
        let { canvasDuration: t } = e.timelineDef;
        if (t == null) return;
        let r = e.timeline;
        r.duration() < t && r.to({}, { duration: 0 }, t);
      }
      buildTimeline(e) {
        let t = e.timelineDef,
          r = e.elementContext,
          o = e.timeline,
          i = e.timelineId,
          s = new Map();
        for (let a = 0; a < t.actions.length; a++) {
          let l = t.actions[a];
          if (!l) continue;
          let c = JSON.stringify(l.targets),
            u = !0,
            d = (0, Mi.getSplitTextType)(l),
            f = d === "none" ? c : `${c}_split_${d}`,
            p = (l.tt ?? 0) !== 0;
          for (let m of Object.values(l.properties ?? {})) {
            let y = s.get(f) || new Set();
            s.set(f, y);
            for (let C of Object.keys(m || {}))
              y.has(C) ? p && (u = !1) : y.add(C);
          }
          let h = this.collectTargets(l, r, i, e.owningInteraction);
          if (!h.length) {
            let m = !1;
            for (let y in l.properties)
              if (this.getHandler(y)?.createCustomTween) {
                m = !0;
                break;
              }
            if (!m) continue;
          }
          let g = h;
          (d !== "none" &&
            h.length > 0 &&
            this.env.win.SplitText &&
            ((g = this.splitText.getSplitElements(h, d)), g.length === 0)) ||
            this.buildTweensForAction(
              l,
              g,
              o,
              i,
              u,
              void 0,
              r,
              t.triggerMetadata?.role,
              e
            );
        }
      }
      collectTargets(e, t, r, o) {
        if (!e.targets) return [];
        let i = [],
          s = o ?? this.getInteractionForTimeline(r);
        for (let a of e.targets ?? []) {
          let l = this.resolveFn(a, t ? { triggerElement: t } : {}, s);
          i.push(...l);
        }
        return i;
      }
      buildTweensForAction(e, t, r, o, i, s, a, l, c, u) {
        let d = this.shouldFlipEaseForTimeline(o),
          f = c?.timelineDef.canvasDuration != null;
        for (let p in e.properties) {
          let h = p,
            g = this.getHandler(h);
          if (!g) continue;
          let m = e.properties[h] || {};
          try {
            let y = e.timing?.position;
            y =
              typeof y == "string" && y.endsWith("ms")
                ? (0, ge.toSeconds)(y)
                : y ?? 0;
            let C = e.timing?.duration ?? Yt.DEFAULTS.DURATION,
              b = (0, Me.getStaggerConfig)(
                e.timing?.stagger,
                (0, ge.buildEaseContextId)(e.id, "stagger")
              );
            b && C === 0 && (C = 0.001);
            let w = { id: e.id, presetId: e.presetId, color: e.color },
              S = {
                force3D: !0,
                ...(!i && { immediateRender: i }),
                data: w,
                ...(e.tt !== 3 && { duration: (0, ge.toSeconds)(C) }),
                ...(e.timing?.repeat != null && {
                  repeat: f && e.timing.repeat < 0 ? 0 : e.timing.repeat,
                }),
                ...(e.timing?.repeatDelay != null && {
                  repeatDelay: (0, ge.toSeconds)(e.timing.repeatDelay),
                }),
                ...(e.timing?.yoyo != null && { yoyo: e.timing.yoyo }),
                ...(b && { stagger: b }),
              };
            if (
              (e.timing?.ease != null &&
                (0, Me.applyEase)(
                  S,
                  e.timing.ease,
                  (0, ge.buildEaseContextId)(e.id, "timing")
                ),
              d && (S.easeReverse = !0),
              g.createTweenConfig)
            ) {
              let M = g.createTweenConfig(m, t);
              s?.(h, e, M),
                M.modifiers &&
                  (S.modifiers = { ...S.modifiers, ...M.modifiers }),
                c &&
                  !c.hasVolatileValues &&
                  (0, Me.configHasVolatileValue)(M) &&
                  (c.hasVolatileValues = !0);
              let T = Object.keys(M.from || {}).length > 0,
                A = Object.keys(M.to || {}).length > 0,
                E = e.tt ?? 0;
              if (E === 0 && !A) continue;
              if (E === 1 && !T) continue;
              if (E === 2 && !T && !A) continue;
              if (E === 3 && !A) continue;
              E === 1
                ? r.from(t, { ...S, ...M.from }, y)
                : E === 2
                ? r.fromTo(t, { ...M.from }, { ...S, ...M.to }, y)
                : E === 3
                ? r.set(t, { ...S, ...M.to }, y)
                : r.to(t, { ...S, ...M.to }, y);
            } else if (g.createCustomTween) {
              let M = g.createCustomTween(r, e, m, S, t, y || 0, {
                triggerElement: a ?? null,
                timelineRole: l,
                subscribeChannel: (T, A) =>
                  this.subscribeChannel(o, T, a ?? null, A),
                animation: this.animation,
              });
              if (M)
                if (u != null) u.add(M);
                else if (c != null) {
                  let T = c.cleanupFns ?? new Set();
                  (c.cleanupFns = T), T.add(M);
                } else this.registerCleanup(o, M);
            }
          } catch (y) {
            console.error("Error building tween:", y);
          }
        }
      }
      scheduleRebuild(e) {
        if (
          e.rebuildState === "building" ||
          e.rebuildState === "rebuild_pending"
        ) {
          e.rebuildState = "rebuild_pending";
          return;
        }
        (e.rebuildState = "building"),
          this.timelineTargetsCache.delete(e),
          this.rebuildTimelineOnTheFly(e);
      }
      rebuildTimelineOnTheFly(e) {
        let t = e.timeline.totalProgress(),
          r = e.controlTypes?.has(Yt.TimelineControlType.LOAD) && t !== 1,
          o = e.timeline.isActive() || r,
          i = e.timeline.reversed() === !0;
        if (
          (e.timeline.pause(),
          e.timeline.revert({ kill: !1 }),
          e.timeline.clear(),
          me(e.cleanupFns),
          this.buildTimeline(e),
          this.padTimelineToCanvas(e),
          e.timeline.totalProgress(t),
          e.scrollTriggerIds && e.scrollTriggerConfigs)
        )
          for (let s of e.scrollTriggerIds) {
            let a = this.scrollTriggers.get(s),
              l = e.scrollTriggerConfigs.get(s);
            if (a && l) {
              let c = { ...l, animation: e.timeline };
              if ((a.kill(), this.env.win.ScrollTrigger)) {
                let u = this.env.win.ScrollTrigger.create(c);
                this.scrollTriggers.set(s, u);
              }
            }
          }
        else o && (i ? e.timeline.reverse() : e.timeline.play());
        e.rebuildState === "rebuild_pending"
          ? ((e.rebuildState = "building"), this.rebuildTimelineOnTheFly(e))
          : (e.rebuildState = "idle");
      }
      setupScrollControl(e, t, r, o) {
        if (typeof this.env.win.ScrollTrigger > "u") {
          console.warn("ScrollTrigger plugin is not available.");
          return;
        }
        let i = `st_${e}_${t}_${
          o.id || window.crypto.randomUUID().slice(0, 8)
        }`;
        this.cleanupScrollTrigger(i);
        let s = this.getTimeline(e, o);
        if (!s) {
          console.warn(`Timeline ${e} not found`);
          return;
        }
        let a = (0, Ja.buildGSAPConfig)(
          r,
          o,
          i,
          s,
          this.resolveFn,
          this.getSubOrNull(e, o)?.hasVolatileValues ?? !1
        );
        try {
          let l = this.env.win.ScrollTrigger.create(a);
          this.scrollTriggers.set(i, l);
          let c = this.getSub(e, o);
          c.scrollTriggerIds || (c.scrollTriggerIds = new Set()),
            c.scrollTriggerConfigs || (c.scrollTriggerConfigs = new Map()),
            c.scrollTriggerIds.add(i),
            c.scrollTriggerConfigs.set(i, a);
        } catch (l) {
          console.error("Failed to create ScrollTrigger:", l);
        }
      }
      cleanupScrollTrigger(e) {
        let t = this.scrollTriggers.get(e);
        t && (t.kill(), this.scrollTriggers.delete(e));
      }
      getScrollTriggers() {
        return this.scrollTriggers;
      }
      getTimelineTargets(e) {
        let t = this.timelineTargetsCache.get(e);
        if (t) return t;
        t = new WeakSet();
        for (let r of e.timelineDef.actions ?? [])
          for (let o of this.collectTargets(
            r,
            e.elementContext,
            e.timelineId,
            e.owningInteraction
          ))
            t.add(o);
        return this.timelineTargetsCache.set(e, t), t;
      }
      scheduleRebuildForElement(e) {
        for (let [, t] of this.subs)
          for (let [, r] of t)
            this.getTimelineTargets(r).has(e) && this.scheduleRebuild(r);
      }
    };
  function me(n) {
    if (n) {
      for (let e of n) e();
      n.clear();
    }
  }
});
var Ai = v((Jt) => {
  "use strict";
  Object.defineProperty(Jt, "__esModule", { value: !0 });
  Object.defineProperty(Jt, "ConditionEvaluator", {
    enumerable: !0,
    get: function () {
      return Qt;
    },
  });
  var ye = W(),
    Qt = class {
      getConditionEvaluator;
      sharedObservers = new Map();
      conditionCache = new Map();
      CACHE_TTL = 100;
      constructor(e) {
        this.getConditionEvaluator = e;
      }
      evaluateConditionsForTrigger = async (e, t) => {
        if (!e?.length) return !0;
        let r = e.some(([o]) => o === ye.CORE_OPERATORS.OR);
        return this.evaluateCondition(
          [r ? ye.CORE_OPERATORS.OR : ye.CORE_OPERATORS.AND, { conditions: e }],
          t
        );
      };
      observeConditionsForTrigger = (e, t) => {
        if (!e?.length) return () => {};
        let r = [],
          o = [];
        for (let s of e)
          this.getConditionEvaluator(s)?.isReactive ?? !1
            ? r.push(s)
            : o.push(s[0]);
        if (r.length === 0) return () => {};
        let i = r.map((s) => this.getOrCreateSharedObserver(s, t));
        return () => {
          for (let s of i) s();
        };
      };
      disposeSharedObservers = () => {
        for (let [e, t] of this.sharedObservers)
          try {
            t.cleanup();
          } catch (r) {
            console.error("Error disposing shared observer: %s", e, r);
          }
        this.sharedObservers.clear(), this.conditionCache.clear();
      };
      observeCondition = (e, t) => {
        let r = this.getEvaluator(e);
        if (r?.observe)
          try {
            return r.observe(e, t);
          } catch (o) {
            console.error("Error setting up condition observer:", o);
          }
      };
      getEvaluator = (e) => {
        let [t] = e;
        return t === ye.CORE_OPERATORS.AND || t === ye.CORE_OPERATORS.OR
          ? this.getLogicalEvaluator(t)
          : this.getConditionEvaluator(e);
      };
      getLogicalEvaluator = (e) => ({
        evaluate: async (t, r) => {
          let [, o, i] = t,
            { conditions: s } = o || {};
          if (!Array.isArray(s)) return !1;
          if (!s.length) return !0;
          let a = e === ye.CORE_OPERATORS.OR,
            l = i === 1;
          for (let c of s) {
            let u = await this.evaluateCondition(c, r);
            if (a ? u : !u) return a ? !l : !!l;
          }
          return a ? !!l : !l;
        },
        observe: (t, r) => {
          let [, o] = t,
            { conditions: i } = o || {};
          if (!Array.isArray(i)) return () => {};
          let s = i.map((a) =>
            this.observeCondition(a, async () =>
              r(await this.evaluateCondition(t))
            )
          );
          return () => s.forEach((a) => a && a());
        },
      });
      evaluateCondition = async (e, t) => {
        let r = this.generateConditionCacheKey(e, t),
          o = Date.now(),
          i = this.conditionCache.get(r);
        if (i && o - i.timestamp < this.CACHE_TTL) return i.result;
        let s = this.getEvaluator(e);
        if (!s)
          return (
            console.warn(`No evaluator found for condition type '${e[0]}'`), !1
          );
        try {
          let a = await s.evaluate(e, t);
          return this.conditionCache.set(r, { result: a, timestamp: o }), a;
        } catch (a) {
          return console.error("Error evaluating condition:", a), !1;
        }
      };
      generateConditionCacheKey = (e, t) => {
        let [r, o, i] = e,
          s = o ? JSON.stringify(o) : "",
          a = i ? ":negate" : "",
          l = t ? `:ctx:${t.id}` : "";
        return `${r}:${s}${a}${l}`;
      };
      invalidateConditionCache = (e) => {
        let [t] = e,
          r = [];
        for (let o of this.conditionCache.keys())
          o.startsWith(`${t}:`) && r.push(o);
        r.forEach((o) => this.conditionCache.delete(o));
      };
      generateObserverKey = (e) => {
        let [t, r, o] = e,
          i = r ? JSON.stringify(r) : "";
        return `${t}:${i}${o ? ":negate" : ""}`;
      };
      getOrCreateSharedObserver = (e, t) => {
        let r = this.generateObserverKey(e),
          o = this.sharedObservers.get(r);
        if (!o) {
          let i = this.getEvaluator(e);
          if (!i?.observe) return () => {};
          let s = new Set(),
            a = i.observe(e, async () => {
              this.invalidateConditionCache(e);
              let l = Array.from(s, async (c) => {
                try {
                  await c();
                } catch (u) {
                  console.error("Error in shared observer callback:", u);
                }
              });
              await Promise.allSettled(l);
            });
          if (!a) return () => {};
          (o = { cleanup: a, refCount: 0, callbacks: s }),
            this.sharedObservers.set(r, o);
        }
        return (
          o.callbacks.add(t),
          o.refCount++,
          () => this.releaseSharedObserver(r, t)
        );
      };
      releaseSharedObserver = (e, t) => {
        let r = this.sharedObservers.get(e);
        if (
          !(!r || !r.callbacks.delete(t)) &&
          ((r.refCount = Math.max(0, r.refCount - 1)),
          r.refCount <= 0 && r.callbacks.size === 0)
        ) {
          try {
            r.cleanup();
          } catch (i) {
            console.error("Error cleaning up shared observer:", i);
          }
          this.sharedObservers.delete(e);
        }
      };
    };
});
var Ri = v((tn) => {
  "use strict";
  Object.defineProperty(tn, "__esModule", { value: !0 });
  Object.defineProperty(tn, "ConditionalPlaybackManager", {
    enumerable: !0,
    get: function () {
      return en;
    },
  });
  var el = W(),
    en = class {
      matchMediaInstances = new Map();
      setupConditionalContext = (e, t, r) => {
        let { conditionalPlayback: o, triggers: i, id: s } = e;
        if (!o || o.length === 0) {
          t(null);
          return;
        }
        this.cleanup(s);
        let a = window.gsap?.matchMedia();
        if (!a) {
          t(null);
          return;
        }
        this.matchMediaInstances.set(s, a);
        let l = !0,
          c = i.some(
            ([, { controlType: u }]) => u === el.TimelineControlType.LOAD
          );
        a.add(this.buildConditionsObject(o), (u) => {
          if (c && !l) return !1;
          l = !1;
          let d = this.evaluateConditions(u.conditions || {}, o);
          return (!d || d.behavior === "skip-to-end") && t(d), r;
        });
      };
      cleanup = (e) => {
        let t = this.matchMediaInstances.get(e);
        t && (t.revert(), this.matchMediaInstances.delete(e));
      };
      destroy = () => {
        for (let [e] of this.matchMediaInstances) this.cleanup(e);
        this.matchMediaInstances.clear();
      };
      buildConditionsObject = (e) => {
        let t = {};
        for (let r of e)
          switch (r.type) {
            case "prefers-reduced-motion": {
              t.prefersReduced = "(prefers-reduced-motion: reduce)";
              break;
            }
            case "breakpoint": {
              (r.breakpoints || []).forEach((i) => {
                let s = tl[i];
                s && (t[`breakpoint_${i}`] = s);
              });
              break;
            }
            default:
              break;
          }
        return (t.fallback = "(min-width: 0px)"), t;
      };
      evaluateConditions(e, t) {
        let r = [];
        for (let s of t)
          s.type === "prefers-reduced-motion" &&
            e.prefersReduced &&
            r.push({ condition: s, type: "prefers-reduced-motion" }),
            s.type === "breakpoint" &&
              (s.breakpoints || []).some((c) => e[`breakpoint_${c}`]) &&
              r.push({ condition: s, type: "breakpoint" });
        if (r.length === 0) return null;
        let o = r.find(({ condition: s }) => s.behavior === "dont-animate");
        if (o)
          return {
            behavior: "dont-animate",
            matchedConditions: {
              prefersReduced: o.type === "prefers-reduced-motion",
              breakpointMatched: o.type === "breakpoint",
            },
          };
        let i = r[0];
        return {
          behavior: i.condition.behavior,
          matchedConditions: {
            prefersReduced: i.type === "prefers-reduced-motion",
            breakpointMatched: i.type === "breakpoint",
          },
        };
      }
    },
    tl = {
      tiny: "(max-width: 479px) and (min-width: 0px)",
      small: "(max-width: 767px) and (min-width: 480px)",
      medium: "(max-width: 991px) and (min-width: 768px)",
      main: "(min-width: 992px)",
    };
});
var Oi = v((rn) => {
  "use strict";
  Object.defineProperty(rn, "__esModule", { value: !0 });
  Object.defineProperty(rn, "PluginRegistry", {
    enumerable: !0,
    get: function () {
      return nn;
    },
  });
  var nn = class {
    plugins = new Map();
    extensionsByPoint = new Map();
    activePlugins = new Set();
    pluginStorage = new Map();
    constructor() {
      ["trigger", "action", "targetResolver", "condition"].forEach((e) =>
        this.extensionsByPoint.set(e, new Map())
      );
    }
    async registerPlugin(e) {
      let t = _i(e.manifest.id);
      if (this.plugins.has(t))
        throw new Error(`Plugin ${t} is already registered`);
      let r = Object.entries(e.manifest.dependencies ?? {});
      for (let [o] of r)
        if (!this.plugins.has(o))
          throw new Error(`Missing dependency: ${o} required by ${t}`);
      this.plugins.set(t, e), e.initialize && (await e.initialize());
      for (let o of e.extensions) this.registerExtension(o);
      r.length || (await this.activatePlugin(t));
    }
    registerExtension(e) {
      this.extensionsByPoint.has(e.extensionPoint) ||
        this.extensionsByPoint.set(e.extensionPoint, new Map());
      let t = this.extensionsByPoint.get(e.extensionPoint),
        r = e.id;
      if (t.has(r))
        throw new Error(
          `Extension ${r} is already registered for point ${e.extensionPoint}`
        );
      t.set(r, e);
    }
    async activatePlugin(e) {
      if (this.activePlugins.has(e)) return;
      let t = this.plugins.get(e);
      if (!t) throw new Error(`Cannot activate unknown plugin: ${e}`);
      let r = Object.keys(t.manifest.dependencies ?? {});
      for (let o of r) await this.activatePlugin(o);
      t.activate && (await t.activate()), this.activePlugins.add(e);
    }
    async deactivatePlugin(e) {
      if (!this.activePlugins.has(e)) return;
      let t = this.plugins.get(e);
      if (!t) throw new Error(`Cannot deactivate unknown plugin: ${e}`);
      t.deactivate && (await t.deactivate()), this.activePlugins.delete(e);
    }
    async unregisterPlugin(e, t) {
      let r = _i([e, t]),
        o = this.plugins.get(r);
      if (o) {
        this.activePlugins.has(r) && (await this.deactivatePlugin(r));
        for (let i of o.extensions)
          i.extensionPoint === "condition" &&
            i.implementation.dispose &&
            (await i.implementation.dispose()),
            this.extensionsByPoint
              .get(i.extensionPoint)
              ?.delete(`${r}:${i.id}`);
        o.dispose && (await o.dispose()),
          this.plugins.delete(r),
          this.pluginStorage.delete(r);
      }
    }
    getExtensions(e) {
      return this.extensionsByPoint.get(e) || new Map();
    }
    getExtensionImpl(e, t) {
      return this.getExtensions(t).get(e)?.implementation;
    }
    getTriggerHandler([e]) {
      return this.getExtensionImpl(e, "trigger");
    }
    getActionHandler(e) {
      return this.getExtensionImpl(e, "action");
    }
    getTargetResolver([e]) {
      return this.getExtensionImpl(e, "targetResolver");
    }
    getConditionEvaluator([e]) {
      return this.getExtensionImpl(e, "condition");
    }
    getAllPlugins() {
      return this.plugins.values();
    }
  };
  function _i(n) {
    return `${n[0]}:${n[1]}`;
  }
});
var Ie = v((sn) => {
  "use strict";
  Object.defineProperty(sn, "__esModule", { value: !0 });
  Object.defineProperty(sn, "BaseTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return on;
    },
  });
  var on = class {
    runTrigger;
    runTimelineAction;
    skipToEndState;
    constructor(e, t, r) {
      (this.runTrigger = e),
        (this.runTimelineAction = t),
        (this.skipToEndState = r);
    }
  };
});
var xi = v((ln) => {
  "use strict";
  Object.defineProperty(ln, "__esModule", { value: !0 });
  Object.defineProperty(ln, "StandardTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return an;
    },
  });
  var nl = Ie();
  function rl(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "timeline-role" && typeof e.role == "string";
  }
  function il(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "playback-control" && typeof e.control == "string";
  }
  var an = class extends nl.BaseTriggerStrategy {
    getTimelineIdsForRole;
    resolveAssignedTimelineIds;
    constructor(e, t, r, o, i) {
      super(e, t, r),
        (this.getTimelineIdsForRole = o),
        (this.resolveAssignedTimelineIds = i);
    }
    bind(e, t, r) {
      let {
          interactionId: o,
          elements: i,
          triggerHandler: s,
          eventManager: a,
          conditionalContext: l,
          cleanupMap: c,
          delay: u,
        } = r,
        d = e[1];
      for (let f of i) {
        if (!f) continue;
        let p = c.get(f);
        p || ((p = new Set()), c.set(f, p));
        let h = null,
          g,
          m = s(e, f, a, (y) => {
            let C = il(y) ? y.control : void 0,
              b;
            if (
              (rl(y)
                ? (b = this.getTimelineIdsForRole(t, y.role))
                : (b = this.resolveAssignedTimelineIds(e, t)),
              b?.length === 0)
            )
              return;
            if (l !== null) {
              l.behavior === "skip-to-end" &&
                this.skipToEndState(t, null, d, b, C);
              return;
            }
            let w = () => {
              this.runTrigger(e, f, o, b, C).catch((S) =>
                console.error("Error in trigger execution:", S)
              );
            };
            d.conditionalLogic || !u
              ? w()
              : (h == null || C !== g) &&
                (h != null && clearTimeout(h),
                (g = C),
                (h = setTimeout(() => {
                  (h = null), w();
                }, u * 1e3)));
          });
        m && p.add(m),
          p.add(() => {
            h != null && (clearTimeout(h), (h = null));
          });
      }
    }
  };
});
var Pi = v((un) => {
  "use strict";
  Object.defineProperty(un, "__esModule", { value: !0 });
  Object.defineProperty(un, "LoadTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return cn;
    },
  });
  var ol = Ie(),
    cn = class extends ol.BaseTriggerStrategy {
      loadInteractions;
      getTimeline;
      constructor(e, t, r, o, i) {
        super(e, t, r), (this.loadInteractions = o), (this.getTimeline = i);
      }
      bind(e, t, r) {
        if (window.__wf_ix3) return;
        let { conditionalContext: o, delay: i } = r,
          s = e[1];
        this.loadInteractions.push(() => {
          if (o !== null) {
            o.behavior === "skip-to-end" && this.skipToEndState(t, null);
            return;
          }
          let a = () => {
            for (let l of t.timelineIds ?? []) {
              let c = this.getTimeline(l, null);
              c &&
                (c.data.splitLines
                  ? document.fonts.ready.then(() => {
                      this.runTimelineAction(l, s, null);
                    })
                  : this.runTimelineAction(l, s, null));
            }
          };
          i ? setTimeout(a, i * 1e3) : a();
        });
      }
    };
});
var ki = v((fn) => {
  "use strict";
  Object.defineProperty(fn, "__esModule", { value: !0 });
  Object.defineProperty(fn, "ScrollTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return dn;
    },
  });
  var sl = Ie(),
    dn = class extends sl.BaseTriggerStrategy {
      setupScrollControl;
      constructor(e, t, r, o) {
        super(e, t, r), (this.setupScrollControl = o);
      }
      bind(e, t, r) {
        let { interactionId: o, elements: i, conditionalContext: s } = r,
          a = e[1].scrollTriggerConfig;
        if (a) {
          for (let l of i)
            if (l) {
              if (s !== null) {
                s.behavior === "skip-to-end" && this.skipToEndState(t, l);
                continue;
              }
              for (let c of t.timelineIds ?? [])
                this.setupScrollControl(c, o, a, l);
            }
        }
      }
    };
});
var Fi = v((gn) => {
  "use strict";
  Object.defineProperty(gn, "__esModule", { value: !0 });
  Object.defineProperty(gn, "ContinuousChannelManager", {
    enumerable: !0,
    get: function () {
      return pn;
    },
  });
  var pn = class {
      coordinator;
      resolveRole;
      channels;
      animation;
      constructor(e, t) {
        (this.coordinator = e),
          (this.resolveRole = t),
          (this.channels = new Map()),
          (this.animation = e.animation);
      }
      isPreviewEnabled() {
        return !(window.__wf_ix3 && window.__wf_ix3_continuous_preview === !1);
      }
      registerChannel(e) {
        let t = this.resolveRole(e.role);
        if (!t)
          return (
            console.warn(
              `IX3 Continuous: Failed to resolve role '${e.role}' to timeline ID. Channel registration skipped.`
            ),
            null
          );
        let r = new hn(
          {
            timelineId: t,
            initialValue: e.initialValue,
            element: e.element,
            smoothing: e.smoothing,
            animation: this.animation,
            isPreviewEnabled: () => this.isPreviewEnabled(),
          },
          this.coordinator
        );
        return this.channels.set(t, r), r;
      }
      fireInterval(e, t) {
        let r = this.resolveRole(e);
        r &&
          this.coordinator.fireInterval(r, t.element ?? null, {
            targetIndex: t.targetIndex,
            pluginPayload: t.pluginPayload,
          });
      }
      registerIntervalHandler(e, t) {
        this.coordinator.registerIntervalHandler(e, t);
      }
      getMetadata(e) {
        let t = this.resolveRole(e);
        return t ? this.coordinator.getTriggerMetadata(t) : null;
      }
      publishChannel(e, t, r) {
        this.coordinator.publishChannel(e, t, r);
      }
      cleanup() {
        for (let e of this.channels.values()) e.destroy();
        this.channels.clear();
      }
    },
    al = "power2.out",
    hn = class {
      coordinator;
      proxy;
      setter;
      timelineId;
      element;
      isPreviewEnabled;
      constructor(e, t) {
        (this.coordinator = t),
          (this.proxy = { p: e.initialValue }),
          (this.timelineId = e.timelineId),
          (this.element = e.element ?? null),
          (this.isPreviewEnabled = e.isPreviewEnabled);
        let r = (e.smoothing ?? 0) / 1e3;
        (this.setter =
          r > 0
            ? e.animation.quickTo(this.proxy, "p", {
                duration: r,
                ease: al,
                onUpdate: () => this.updateTimeline(this.proxy.p),
              })
            : null),
          this.updateTimeline(e.initialValue);
      }
      setProgress(e) {
        this.setter
          ? this.setter(e)
          : ((this.proxy.p = e), this.updateTimeline(e));
      }
      setImmediate(e) {
        this.setter
          ? this.setter(e, e)
          : ((this.proxy.p = e), this.updateTimeline(e));
      }
      destroy() {
        this.setter?.tween.kill();
      }
      updateTimeline(e) {
        this.isPreviewEnabled() &&
          this.coordinator.setContinuousProgress(
            this.timelineId,
            e,
            this.element
          );
      }
    };
});
var Ni = v((yn) => {
  "use strict";
  Object.defineProperty(yn, "__esModule", { value: !0 });
  Object.defineProperty(yn, "ContinuousTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return mn;
    },
  });
  var ll = Ie(),
    cl = Fi();
  function ul(n) {
    return n != null && "type" in n && n.type === "continuous";
  }
  var mn = class extends ll.BaseTriggerStrategy {
    continuousCleanups;
    triggerCleanupFunctions;
    coordinator;
    getTimelineIdForRole;
    constructor(e, t, r, o, i, s, a) {
      super(e, t, r),
        (this.continuousCleanups = o),
        (this.triggerCleanupFunctions = i),
        (this.coordinator = s),
        (this.getTimelineIdForRole = a);
    }
    bind(e, t, r) {
      let {
        interactionId: o,
        elements: i,
        triggerHandler: s,
        conditionalContext: a,
      } = r;
      for (let l of i) {
        if (!l) continue;
        if (a !== null) {
          a.behavior === "skip-to-end" && this.skipToEndState(t, l);
          continue;
        }
        let c = (f) => this.getTimelineIdForRole(t, f),
          u = new cl.ContinuousChannelManager(this.coordinator, c),
          d = s(e, l, r.eventManager, (f) => {
            if (ul(f)) {
              let p = f.setup(u),
                h = this.continuousCleanups.get(o);
              h || ((h = new Map()), this.continuousCleanups.set(o, h)),
                h.set(l, () => {
                  p(), u.cleanup();
                });
            }
          });
        if (d) {
          let f = this.triggerCleanupFunctions.get(o);
          f || ((f = new Map()), this.triggerCleanupFunctions.set(o, f));
          let p = f.get(l);
          p || ((p = new Set()), f.set(l, p)), p.add(d);
        }
      }
    }
  };
});
var ji = v((vn) => {
  "use strict";
  Object.defineProperty(vn, "__esModule", { value: !0 });
  Object.defineProperty(vn, "IX3", {
    enumerable: !0,
    get: function () {
      return $e;
    },
  });
  var ae = W(),
    dl = ii(),
    fl = Ii(),
    Li = Dt(),
    pl = Ai(),
    hl = Ri(),
    gl = Oi(),
    z = te(),
    ml = xi(),
    yl = Pi(),
    vl = ki(),
    bl = Ni(),
    Tl = 200,
    Di = 210,
    bn = class {
      env;
      pluginReg;
      timelineDefs;
      interactions;
      triggeredElements;
      features;
      lastRoutedTimelineIds;
      triggerCleanupFunctions;
      continuousCleanups;
      conditionalPlaybackManager;
      triggerStrategies;
      windowSize;
      prevWindowSize;
      windowResizeSubscribers;
      debouncedWindowResize;
      bodyResizeObserver;
      triggerObservers;
      timelineRefCounts;
      interactionTimelineRefs;
      timelineToInteractionId;
      activeInteractionIds;
      reactiveCallbackQueues;
      debouncedReactiveCallback;
      pendingReactiveUpdates;
      reactiveExecutionContext;
      componentScopeSelectors;
      eventMgr;
      loadInteractions;
      coordinator;
      conditionEval;
      constructor(e) {
        (this.env = e),
          (this.pluginReg = new gl.PluginRegistry()),
          (this.timelineDefs = new Map()),
          (this.interactions = new Map()),
          (this.triggeredElements = new Map()),
          (this.features = {}),
          (this.lastRoutedTimelineIds = new WeakMap()),
          (this.triggerCleanupFunctions = new Map()),
          (this.continuousCleanups = new Map()),
          (this.windowSize = { w: 0, h: 0 }),
          (this.prevWindowSize = { w: 0, h: 0 }),
          (this.windowResizeSubscribers = new Set()),
          (this.debouncedWindowResize = (0, z.debounce)(() => {
            for (let t of this.windowResizeSubscribers) t();
          }, Tl)),
          (this.bodyResizeObserver = null),
          (this.triggerObservers = new Map()),
          (this.timelineRefCounts = new Map()),
          (this.interactionTimelineRefs = new Map()),
          (this.timelineToInteractionId = new Map()),
          (this.activeInteractionIds = new Set()),
          (this.reactiveCallbackQueues = new Map()),
          (this.pendingReactiveUpdates = new Map()),
          (this.reactiveExecutionContext = new Set()),
          (this.componentScopeSelectors = new Map()),
          (this.eventMgr = dl.EventManager.getInstance()),
          (this.loadInteractions = []),
          (this.addEventListener = this.eventMgr.addEventListener.bind(
            this.eventMgr
          )),
          (this.emit = this.eventMgr.emit.bind(this.eventMgr)),
          (this.resolveTargets = (t, r, o) => {
            let i = o?.scope?.type === "component" ? o.scope : null,
              s = i?.componentId
                ? this.getComponentScopeSelector(i.componentId)
                : null,
              a = i?.variants?.length ? i.variants : null,
              l = this.resolveTargetsImpl(t, r, o, s),
              c =
                s && r.triggerElement
                  ? this.filterByInstance(l, s, r.triggerElement)
                  : l;
            return a && s ? this.filterByVariant(c, s, a) : c;
          }),
          (this.isTargetDynamic = (t) =>
            !!this.pluginReg.getTargetResolver(t)?.isDynamic),
          (this.getInteractionForTimeline = (t) => {
            let r = this.timelineToInteractionId.get(t);
            if (r) return this.interactions.get(r);
          }),
          (this.getInteractionsForTimelines = (t) => {
            let r = [];
            for (let [o, i] of this.interactionTimelineRefs) {
              if (!this.activeInteractionIds.has(o)) continue;
              let s = !1;
              for (let l of t)
                if (i.has(l)) {
                  s = !0;
                  break;
                }
              if (!s) continue;
              let a = this.interactions.get(o);
              a && r.push(a);
            }
            return r;
          }),
          window.addEventListener("resize", this.debouncedWindowResize),
          (this.coordinator = new fl.AnimationCoordinator(
            this.timelineDefs,
            this.pluginReg.getActionHandler.bind(this.pluginReg),
            this.pluginReg.getTargetResolver.bind(this.pluginReg),
            this.resolveTargets,
            this.getInteractionForTimeline,
            this.getInteractionsForTimelines,
            e
          )),
          (this.conditionEval = new pl.ConditionEvaluator(
            this.pluginReg.getConditionEvaluator.bind(this.pluginReg)
          )),
          (this.conditionalPlaybackManager =
            new hl.ConditionalPlaybackManager()),
          (this.triggerStrategies = new Map([
            [
              ae.TimelineControlType.STANDARD,
              new ml.StandardTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.getTimelineIdsForRole.bind(this),
                this.resolveAssignedTimelineIds.bind(this)
              ),
            ],
            [
              ae.TimelineControlType.LOAD,
              new yl.LoadTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.loadInteractions,
                this.coordinator.getTimeline.bind(this.coordinator)
              ),
            ],
            [
              ae.TimelineControlType.SCROLL,
              new vl.ScrollTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.coordinator.setupScrollControl.bind(this.coordinator)
              ),
            ],
            [
              ae.TimelineControlType.CONTINUOUS,
              new bl.ContinuousTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.continuousCleanups,
                this.triggerCleanupFunctions,
                this.coordinator,
                this.getTimelineIdForRole.bind(this)
              ),
            ],
          ])),
          (this.debouncedReactiveCallback = (0, z.debounce)(
            () => this.processPendingReactiveUpdates(),
            16,
            { leading: !1, trailing: !0, maxWait: 100 }
          ));
      }
      getCoordinator() {
        return this.coordinator;
      }
      setFeatures(e) {
        (this.features = { ...this.features, ...e }),
          this.coordinator.setRewindSharedRefire(
            this.features.timelineGroups === !0
          ),
          this.coordinator.setTimelineGroups(
            this.features.timelineGroups === !0
          );
      }
      addEventListener;
      emit;
      static async init(e) {
        return (this.instance = new bn(e)), this.instance;
      }
      async registerPlugin(e) {
        await this.pluginReg.registerPlugin(e);
      }
      register(e, t) {
        if (t?.length) {
          for (let r of t) this.timelineDefs.set(r.id, r);
          this.coordinator.invalidateReuseAliasIndex();
        }
        if (e?.length) {
          for (let r of e) {
            if (this.interactions.has(r.id)) {
              console.warn(
                `Interaction with ID ${r.id} already exists. Use update() to modify it.`
              );
              continue;
            }
            this.interactions.set(r.id, r);
            let o = new Set();
            this.interactionTimelineRefs.set(r.id, o),
              this.conditionalPlaybackManager.setupConditionalContext(
                r,
                (i) => {
                  i?.behavior !== "skip-to-end" &&
                    this.activeInteractionIds.add(r.id);
                  for (let f of r.timelineIds ?? [])
                    o.add(f),
                      this.incrementTimelineRefCount(f),
                      this.timelineToInteractionId.set(f, r.id);
                  let s = new Set(),
                    a = new Set(),
                    l = new Set(r.timelineIds ?? []),
                    c = (f) =>
                      this.coordinator.getReuseAliasesForSource(f).some((p) => {
                        let h = this.timelineRefCounts.get(p) ?? 0,
                          g = l.has(p) ? 1 : 0;
                        return h - g > 0;
                      }),
                    u = (f) => {
                      if (
                        !(
                          (this.timelineRefCounts.get(f) ?? 0) <=
                            (l.has(f) ? 1 : 0) && !c(f)
                        )
                      ) {
                        s.add(f);
                        for (let h of this.coordinator.dissolveSharedGroupForTimeline(
                          f
                        ))
                          a.add(h);
                      }
                    };
                  for (let f of l) {
                    u(f);
                    let p = this.coordinator.resolveSourceTimelineId(f);
                    p !== f && u(p);
                  }
                  let d = (0, Li.analyzeSharedTimelineGroups)(
                    r,
                    this.timelineDefs,
                    this.resolveTargets,
                    this.pluginReg.getActionHandler.bind(this.pluginReg),
                    this.coordinator.isDynamicTimeline.bind(this.coordinator),
                    this.features.timelineGroups
                      ? (f) =>
                          this.pluginReg
                            .getTargetResolver(f)
                            ?.instanceSharingKey?.(f)
                      : void 0
                  );
                  for (let f of d)
                    f.members.some((p) => s.has(p)) ||
                      this.coordinator.registerSharedGroup(
                        f.primary,
                        f.members
                      );
                  for (let f of r.timelineIds ?? [])
                    a.has(f) || this.coordinator.createTimeline(f, r);
                  for (let f of r.triggers ?? []) this.bindTrigger(f, r, i);
                  this.recomputeFlipEaseForOwnSources(r);
                },
                () => {
                  this.cleanupInteractionAnimations(r.id);
                }
              );
          }
          for (let r of this.loadInteractions) r();
          if (
            ((this.loadInteractions.length = 0),
            this.coordinator.getScrollTriggers().size > 0)
          ) {
            this.windowResizeSubscribers.add(() => {
              (this.windowSize.h = window.innerHeight),
                (this.windowSize.w = window.innerWidth);
            });
            let r = (0, z.debounce)(
                () => {
                  (this.prevWindowSize.h = this.windowSize.h),
                    (this.prevWindowSize.w = this.windowSize.w);
                },
                Di,
                { leading: !0, trailing: !1 }
              ),
              o = (0, z.debounce)(() => {
                if (
                  !(
                    this.windowSize.h !== this.prevWindowSize.h ||
                    this.windowSize.w !== this.prevWindowSize.w
                  )
                )
                  for (let a of this.coordinator.getScrollTriggers().values())
                    a.refresh();
              }, Di),
              i = (s) => {
                for (let a of s) a.target === document.body && (r(), o());
              };
            (this.bodyResizeObserver = new ResizeObserver(i)),
              document.body && this.bodyResizeObserver.observe(document.body);
          }
        }
        return this;
      }
      remove(e) {
        let t = Array.isArray(e) ? e : [e];
        for (let r of t) {
          if (!this.interactions.has(r)) {
            console.warn(
              `Interaction with ID ${r} not found, skipping removal.`
            );
            continue;
          }
          this.cleanupTriggerObservers(r),
            this.unbindAllTriggers(r),
            this.cleanupContinuousControlsForInteraction(r);
          let o = this.decrementTimelineReferences(r);
          this.cleanupUnusedTimelines(o);
          let i = this.interactions.get(r);
          for (let s of i?.triggers ?? []) this.lastRoutedTimelineIds.delete(s);
          this.interactions.delete(r),
            this.triggeredElements.delete(r),
            this.interactionTimelineRefs.delete(r),
            this.activeInteractionIds.delete(r),
            i && this.recomputeFlipEaseForOwnSources(i),
            this.conditionalPlaybackManager.cleanup(r);
        }
        return this;
      }
      update(e, t) {
        let r = Array.isArray(e) ? e : [e],
          o = t ? (Array.isArray(t) ? t : [t]) : [];
        o.length && this.register([], o);
        for (let i of r) {
          let { id: s } = i;
          if (!this.interactions.has(s)) {
            console.warn(
              `Interaction with ID ${s} not found, registering as new.`
            ),
              this.register([i], []);
            continue;
          }
          this.remove(s), this.register([i], []);
        }
        return this;
      }
      destroyTimelineInstance(e) {
        this.coordinator.destroy(e);
        let t = `st_${e}_`;
        for (let [r, o] of this.coordinator.getScrollTriggers().entries())
          r.startsWith(t) &&
            (o.kill(), this.coordinator.getScrollTriggers().delete(r));
      }
      cleanupUnusedTimelines(e) {
        let t = new Set();
        for (let r of e)
          this.timelineDefs.get(r)?.reuse?.sourceTimelineId &&
            t.add(this.coordinator.resolveSourceTimelineId(r));
        for (let r of e)
          this.destroyTimelineInstance(r), this.timelineDefs.delete(r);
        this.coordinator.invalidateReuseAliasIndex();
        for (let r of t)
          e.has(r) || this.coordinator.recomputeFlipEaseForSource(r);
      }
      destroy() {
        let e = Array.from(this.interactions.keys());
        this.remove(e),
          (this.loadInteractions.length = 0),
          this.env.win.ScrollTrigger &&
            (this.env.win.ScrollTrigger.getAll().forEach((t) => t.kill()),
            this.bodyResizeObserver?.disconnect(),
            (this.bodyResizeObserver = null)),
          window.removeEventListener("resize", this.debouncedWindowResize),
          this.cleanupAllContinuousControls();
        try {
          this.debouncedReactiveCallback.cancel();
        } catch (t) {
          console.error(
            "Error canceling debounced callback during destroy:",
            t
          );
        }
        this.pendingReactiveUpdates.clear(),
          this.reactiveCallbackQueues.clear(),
          this.reactiveExecutionContext.clear(),
          this.conditionEval.disposeSharedObservers(),
          this.conditionalPlaybackManager.destroy(),
          this.windowResizeSubscribers.clear(),
          this.timelineDefs.clear(),
          this.coordinator.invalidateReuseAliasIndex(),
          this.interactions.clear(),
          this.triggeredElements.clear(),
          this.triggerCleanupFunctions.clear(),
          this.triggerObservers.clear(),
          this.interactionTimelineRefs.clear(),
          this.activeInteractionIds.clear(),
          this.timelineToInteractionId.clear(),
          this.componentScopeSelectors.clear();
      }
      bindTrigger(e, t, r) {
        let o = t.id,
          i = this.pluginReg.getTriggerHandler(e),
          s = e[1];
        if (!i) {
          console.warn("No trigger handler:", e[0]);
          return;
        }
        let a = this.triggerCleanupFunctions.get(o) || new Map();
        this.triggerCleanupFunctions.set(o, a);
        let { delay: l = 0, controlType: c } = s,
          u = (0, z.toSeconds)(l),
          d = this.eventMgr,
          f = e[2],
          p = [];
        f && (p = this.resolveTargets(f, {}, t));
        let h =
            c && (0, z.isValidControlType)(c)
              ? c
              : ae.TimelineControlType.STANDARD,
          g = this.triggerStrategies.get(h);
        g
          ? g.bind(e, t, {
              interactionId: o,
              elements: p,
              triggerHandler: i,
              eventManager: d,
              conditionalContext: r,
              cleanupMap: a,
              delay: u || 0,
            })
          : console.warn("No strategy found for control type:", c),
          s.conditionalLogic && this.setupTriggerReactiveMonitoring(e, t);
      }
      setupTriggerReactiveMonitoring(e, t) {
        let { conditionalLogic: r } = e[1];
        if (!r) return;
        let o = `${t.id}:${t.triggers.indexOf(e)}`;
        try {
          let i = this.conditionEval.observeConditionsForTrigger(
              r.conditions,
              async () => {
                await this.executeReactiveCallbackSafely(t.id, o, async () => {
                  let l =
                    (await this.conditionEval.evaluateConditionsForTrigger(
                      r.conditions,
                      t
                    ))
                      ? r.ifTrue
                      : r.ifFalse;
                  if (l) {
                    let c = this.triggeredElements.get(t.id);
                    if (!c) return;
                    let u = this.features.timelineGroups === !0,
                      d =
                        u && (0, Li.triggerRoutesByCallbackRole)(e[0], e[1])
                          ? void 0
                          : this.resolveAssignedTimelineIds(e, t);
                    if (d?.length === 0) return;
                    let f = u ? this.lastRoutedTimelineIds.get(e) : void 0,
                      p = (g) => (u ? f?.get(g) : d ?? t.timelineIds ?? []),
                      h = [];
                    for (let g of c)
                      for (let m of p(g) ?? [])
                        h.push({
                          timelineId: m,
                          element: g,
                          action: "pause-reset",
                        });
                    await this.executeTimelineOperationsAsync(h),
                      c.forEach((g) => {
                        let m = u ? p(g) : d;
                        (u && !m) || this.executeConditionalOutcome(l, g, t, m);
                      });
                  }
                });
              }
            ),
            s = this.triggerObservers.get(t.id);
          s || ((s = new Map()), this.triggerObservers.set(t.id, s)),
            s.set(o, i);
        } catch (i) {
          console.error("Error setting up trigger reactive monitoring:", i);
        }
      }
      async executeReactiveCallbackSafely(e, t, r) {
        this.reactiveExecutionContext.has(t) ||
          (this.pendingReactiveUpdates.set(t, r),
          this.debouncedReactiveCallback());
      }
      async processPendingReactiveUpdates() {
        if (this.pendingReactiveUpdates.size === 0) return;
        let e = new Map(this.pendingReactiveUpdates);
        this.pendingReactiveUpdates.clear();
        let t = new Map();
        for (let [r, o] of e) {
          let i = r.split(":")[0];
          t.has(i) || t.set(i, []),
            t.get(i).push({ triggerKey: r, callback: o });
        }
        for (let [r, o] of t)
          await this.processInteractionReactiveUpdates(r, o);
      }
      async processInteractionReactiveUpdates(e, t) {
        let r = this.reactiveCallbackQueues.get(e);
        if (r)
          try {
            await r;
          } catch (i) {
            console.error("Error waiting for pending reactive callback:", i);
          }
        let o = this.executeInteractionUpdates(t);
        this.reactiveCallbackQueues.set(e, o);
        try {
          await o;
        } finally {
          this.reactiveCallbackQueues.get(e) === o &&
            this.reactiveCallbackQueues.delete(e);
        }
      }
      async executeInteractionUpdates(e) {
        for (let { triggerKey: t, callback: r } of e) {
          this.reactiveExecutionContext.add(t);
          try {
            await r();
          } catch (o) {
            console.error("Error in reactive callback for %s:", t, o);
          } finally {
            this.reactiveExecutionContext.delete(t);
          }
        }
      }
      async executeTimelineOperationsAsync(e) {
        if (e.length)
          return new Promise((t) => {
            Promise.resolve().then(() => {
              e.forEach(({ timelineId: r, element: o, action: i }) => {
                try {
                  if (!this.timelineDefs.has(r)) {
                    console.warn(`Timeline ${r} not found, skipping operation`);
                    return;
                  }
                  if (!o.isConnected) {
                    console.warn(
                      "Element no longer in DOM, skipping timeline operation"
                    );
                    return;
                  }
                  switch (i) {
                    case "pause-reset":
                      this.coordinator.pause(r, o, 0);
                      break;
                    default:
                      console.warn(`Unknown timeline action: ${i}`);
                  }
                } catch (s) {
                  console.error(
                    "Error executing timeline operation: %s, %s",
                    i,
                    r,
                    s
                  );
                }
              }),
                t();
            });
          });
      }
      getTimelineIdsForRole(e, t) {
        let r = e.timelineIds ?? [],
          o = r.filter(
            (i) => this.timelineDefs.get(i)?.triggerMetadata?.role === t
          );
        if (o.length === 0 && r.length > 0) {
          let i = r
            .map(
              (s) => this.timelineDefs.get(s)?.triggerMetadata?.role || "none"
            )
            .join(", ");
          console.warn(
            `IX3: No timelines found for role '${t}' in interaction '${e.id}'. Available roles: [${i}]`
          );
        }
        return o;
      }
      getTimelineIdForRole(e, t) {
        return this.getTimelineIdsForRole(e, t)[0];
      }
      getTimelineIdsForGroup(e, t) {
        return (e.timelineIds ?? []).filter(
          (r) => this.timelineDefs.get(r)?.groupId === t
        );
      }
      resolveAssignedTimelineIds(e, t) {
        let r = e[1];
        if (r.assignedGroupId === null) return [];
        if (r.assignedGroupId)
          return this.getTimelineIdsForGroup(t, r.assignedGroupId);
        if (r.assignedTimelineRole)
          return this.getTimelineIdsForRole(t, r.assignedTimelineRole);
      }
      async runTrigger(e, t, r, o, i) {
        if (window.__wf_ix3) return;
        let s = e[1],
          a = this.triggeredElements.get(r);
        a || this.triggeredElements.set(r, (a = new Set())), a.add(t);
        let l = this.interactions.get(r);
        if (!l || !l.triggers.includes(e)) return;
        let c = o ?? l.timelineIds ?? [],
          u = this.lastRoutedTimelineIds.get(e);
        if (
          (u || this.lastRoutedTimelineIds.set(e, (u = new WeakMap())),
          u.set(t, c),
          s.conditionalLogic)
        )
          try {
            let f = (await this.conditionEval.evaluateConditionsForTrigger(
              s.conditionalLogic.conditions,
              l
            ))
              ? s.conditionalLogic.ifTrue
              : s.conditionalLogic.ifFalse;
            f && this.executeConditionalOutcome(f, t, l, c);
          } catch (d) {
            console.error("Error evaluating trigger conditional logic:", d),
              c.forEach((f) => this.runTimelineAction(f, s, t, i));
          }
        else c.forEach((d) => this.runTimelineAction(d, s, t, i));
      }
      skipToEndState(e, t, r, o, i) {
        (o ?? e.timelineIds ?? []).forEach((a) => {
          let l =
              i ?? (r ? this.getEffectivePlaybackConfig(a, r).control : void 0),
            c = this.features.timelineGroups === !0,
            u = c ? void 0 : this.coordinator.getTimeline(a, t);
          if (
            (!c && !u) ||
            l === "pause" ||
            l === "stop" ||
            l === "none" ||
            ((u ??= this.coordinator.getTimeline(a, t)), !u)
          )
            return;
          let d;
          switch (l) {
            case "reverse":
            case "reverseFlipEase":
              d = 0;
              break;
            case "togglePlayReverse":
            case "togglePlayReverseFlipEase":
              d = Math.round(1 - u.totalProgress());
              break;
            case "resume":
              d = u.reversed() ? 0 : 1;
              break;
            case "play":
            case "restart":
            case void 0:
              d = 1;
              break;
            default: {
              let f = l;
              d = 1;
              break;
            }
          }
          this.coordinator.setTotalProgress(a, d, t ?? null);
        });
      }
      executeConditionalOutcome(e, t, r, o) {
        let {
            control: i,
            targetTimelineId: s,
            speed: a,
            jump: l,
            delay: c = 0,
          } = e,
          u = (0, z.toSeconds)(c);
        if (i === "none") return;
        let d = r.timelineIds ?? [],
          f;
        if (s) {
          if (!d.includes(s)) {
            console.warn(
              `Target timeline '${s}' not found in interaction '${
                r.id
              }'. Available timelines: ${d.join(", ")}`
            );
            return;
          }
          f = [s];
        } else f = d;
        if (o) {
          let h = new Set(o);
          f = f.filter((g) => h.has(g));
        }
        if (f.length === 0) return;
        let p = () => {
          f.forEach((h) => {
            a !== void 0 &&
              (this.features.timelineGroups !== !0 ||
                (i !== "pause" && i !== "stop")) &&
              this.coordinator.setTimeScale(h, a, t);
            let g = (0, z.toSeconds)(l);
            switch (i) {
              case "play":
                this.coordinator.play(h, t, g);
                break;
              case "pause":
                this.coordinator.pause(h, t, g);
                break;
              case "resume":
                this.coordinator.resume(h, t, g);
                break;
              case "reverse":
              case "reverseFlipEase":
                this.coordinator.reverse(h, t, g);
                break;
              case "restart":
                this.coordinator.restart(h, t);
                break;
              case "stop":
                this.coordinator.pause(h, t, g);
                break;
              case "togglePlayReverse":
              case "togglePlayReverseFlipEase":
                this.coordinator.togglePlayReverse(h, t);
                break;
              default: {
                this.coordinator.restart(h, t);
                let m = i;
                break;
              }
            }
          });
        };
        u
          ? setTimeout(() => {
              p();
            }, u * 1e3)
          : p();
      }
      getEffectivePlaybackConfig(e, t) {
        let r = this.timelineDefs.get(e);
        if (
          r &&
          (this.features.timelineGroups === !0
            ? r.triggerMetadata?.role != null
            : r.triggerMetadata)
        ) {
          let i = r.settings;
          return {
            control: i?.control,
            delay: i?.delay,
            jump: i?.jump,
            speed: i?.speed,
          };
        }
        let o =
          t.controlType && (0, z.isValidControlType)(t.controlType)
            ? t.controlType
            : ae.TimelineControlType.STANDARD;
        if (r?.groupId && o === ae.TimelineControlType.STANDARD) {
          let i = r.settings;
          return {
            control: t.control,
            delay: void 0,
            jump: i?.jump,
            speed: i?.speed,
          };
        }
        return {
          control: t.control,
          delay: void 0,
          jump: t.jump,
          speed: t.speed,
        };
      }
      runTimelineAction(e, t, r, o) {
        let {
            control: i,
            delay: s,
            jump: a,
            speed: l,
          } = this.getEffectivePlaybackConfig(e, t),
          c = o ?? i,
          u = this.timelineDefs.get(e);
        if (u?.reuse) {
          let p = u.reuse.sourceTimelineId;
          if (!this.timelineDefs.has(p)) {
            console.warn(`Timeline reuse: source '${p}' not found for '${e}'`);
            return;
          }
          e = p;
        }
        let d = () => {
            let p = this.features.timelineGroups === !0;
            if (p && c === "none") return;
            (!p || (c !== "pause" && c !== "stop")) &&
              this.coordinator.setTimeScale(e, l ?? 1, r);
            let h = (0, z.toSeconds)(a);
            switch (c) {
              case "play":
                this.coordinator.play(e, r, h);
                break;
              case "pause":
                this.coordinator.pause(e, r, h);
                break;
              case "resume":
                this.coordinator.resume(e, r, h);
                break;
              case "reverse":
              case "reverseFlipEase":
                this.coordinator.reverse(e, r, h);
                break;
              case "restart":
                this.coordinator.restart(e, r);
                break;
              case "togglePlayReverse":
              case "togglePlayReverseFlipEase":
                this.coordinator.togglePlayReverse(e, r);
                break;
              case "stop":
                this.coordinator.pause(e, r, h);
                break;
              case "none":
                break;
              case void 0:
                this.coordinator.restart(e, r);
                break;
              default: {
                let g = c;
                this.coordinator.restart(e, r);
                break;
              }
            }
          },
          f = (0, z.toSeconds)(s);
        f && f > 0 ? setTimeout(d, f * 1e3) : d();
      }
      resolveTargets;
      isTargetDynamic;
      getComponentScopeSelector(e) {
        let t = this.componentScopeSelectors.get(e);
        return (
          t ||
            ((t = `[data-wf-component-id="${CSS.escape(e)}"]`),
            this.componentScopeSelectors.set(e, t)),
          t
        );
      }
      resolveTargetsImpl(e, t, r, o) {
        let [i, s, a] = e;
        if (s === "*" && a && a.filterBy) {
          let d = this.resolveUniversalSelectorOptimized(a, t, r, o);
          if (d) return d;
        }
        let l = this.pluginReg.getTargetResolver([i, s]);
        if (!l) return [];
        let c = l.resolve([i, s], t),
          u = o ? this.filterByScope(c, o) : c;
        return !u.length || !a || a.relationship === "none" || !a.filterBy
          ? u
          : this.applyRelationshipFilter(
              u,
              a.relationship,
              this.resolveTargetsImpl(a.filterBy, t, r, o),
              a.firstMatchOnly
            );
      }
      resolveUniversalSelectorOptimized(e, t, r, o) {
        if (!e.filterBy) return null;
        let i = this.resolveTargetsImpl(e.filterBy, t, r, o),
          s = i.length;
        if (!s) return [];
        let a = !!e.firstMatchOnly;
        switch (e.relationship) {
          case "direct-child-of": {
            let l = [];
            for (let c = 0; c < s; c++) {
              let u = i[c];
              if (!u) continue;
              let d = u.children;
              for (let f = 0; f < d.length; f++)
                if ((l.push(d[f]), a)) return l;
            }
            return l;
          }
          case "within": {
            let l = [];
            for (let c = 0; c < s; c++) {
              let u = i[c];
              if (!u) continue;
              let d = u.querySelectorAll("*");
              for (let f = 0; f < d.length; f++)
                if ((l.push(d[f]), a)) return l;
            }
            return l;
          }
          case "direct-parent-of": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < s; u++) {
              let d = i[u];
              if (!d) continue;
              let f = d.parentElement;
              if (f && !l.has(f) && (l.add(f), c.push(f), a)) break;
            }
            return o ? this.filterByScope(c, o) : c;
          }
          case "next-sibling-of": {
            let l = [];
            for (let c = 0; c < s; c++) {
              let u = i[c];
              if (!u) continue;
              let d = u.nextElementSibling;
              if (d && (l.push(d), a)) break;
            }
            return o ? this.filterByScope(l, o) : l;
          }
          case "prev-sibling-of": {
            let l = [];
            for (let c = 0; c < s; c++) {
              let u = i[c];
              if (!u) continue;
              let d = u.previousElementSibling;
              if (d && (l.push(d), a)) break;
            }
            return o ? this.filterByScope(l, o) : l;
          }
          case "next-to": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < s; u++) {
              let d = i[u];
              if (!d) continue;
              let f = d.parentElement;
              if (f) {
                let p = f.children;
                for (let h = 0; h < p.length; h++) {
                  let g = p[h];
                  if (g !== d && !l.has(g) && (l.add(g), c.push(g), a)) break;
                }
                if (a && c.length) break;
              }
            }
            return o ? this.filterByScope(c, o) : c;
          }
          case "contains": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < s; u++) {
              let d = i[u];
              if (!d) continue;
              let f = d.parentElement;
              for (; f && !(l.has(f) || (l.add(f), c.push(f), a)); )
                f = f.parentElement;
              if (a && c.length) break;
            }
            return o ? this.filterByScope(c, o) : c;
          }
          default:
            return null;
        }
      }
      applyRelationshipFilter(e, t, r, o) {
        if (!e.length || !r.length) return [];
        if (t === "none") return e;
        let i = [],
          s = new Set();
        switch (t) {
          case "direct-child-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (
                !s.has(c) &&
                c.parentElement &&
                a.has(c.parentElement) &&
                (s.add(c), i.push(c), o)
              )
                return i;
            }
            return i;
          }
          case "direct-parent-of": {
            let a = new Set();
            for (let l = 0; l < r.length; l++) {
              let c = r[l].parentElement;
              c && a.add(c);
            }
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (!s.has(c) && a.has(c) && (s.add(c), i.push(c), o)) return i;
            }
            return i;
          }
          case "next-sibling-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (s.has(c)) continue;
              let u = c.previousElementSibling;
              if (u && a.has(u) && (s.add(c), i.push(c), o)) return i;
            }
            return i;
          }
          case "prev-sibling-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (s.has(c)) continue;
              let u = c.nextElementSibling;
              if (u && a.has(u) && (s.add(c), i.push(c), o)) return i;
            }
            return i;
          }
          case "next-to": {
            let a = new Set(r),
              l = new Map();
            for (let c = 0; c < r.length; c++) {
              let u = r[c].parentElement;
              u && l.set(u, (l.get(u) ?? 0) + 1);
            }
            for (let c = 0; c < e.length; c++) {
              let u = e[c];
              if (s.has(u) || !u.parentElement) continue;
              let d = l.get(u.parentElement);
              if (d && !(a.has(u) && d <= 1) && (s.add(u), i.push(u), o))
                return i;
            }
            return i;
          }
          case "within": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (s.has(c)) continue;
              let u = c.parentElement;
              for (; u; ) {
                if (a.has(u)) {
                  if ((s.add(c), i.push(c), o)) return i;
                  break;
                }
                u = u.parentElement;
              }
            }
            return i;
          }
          case "contains": {
            let a = new Set();
            for (let l = 0; l < r.length; l++) {
              let c = r[l].parentElement;
              for (; c && !a.has(c); ) a.add(c), (c = c.parentElement);
            }
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (!s.has(c) && a.has(c) && (s.add(c), i.push(c), o)) return i;
            }
            return i;
          }
          default:
            return [];
        }
      }
      filterByInstance(e, t, r) {
        if (!e.length) return e;
        let o = r.closest(t);
        if (!o) return e;
        let i = -1;
        for (let a = 0; a < e.length; a++)
          if (e[a]?.closest(t) !== o) {
            i = a;
            break;
          }
        if (i === -1) return e;
        let s = e.slice(0, i);
        for (let a = i + 1; a < e.length; a++) {
          let l = e[a];
          l?.closest(t) === o && s.push(l);
        }
        return s;
      }
      filterByScope(e, t) {
        if (!e.length) return e;
        let r = -1;
        for (let i = 0; i < e.length; i++)
          if (!e[i]?.closest(t)) {
            r = i;
            break;
          }
        if (r === -1) return e;
        let o = e.slice(0, r);
        for (let i = r + 1; i < e.length; i++) {
          let s = e[i];
          s?.closest(t) && o.push(s);
        }
        return o;
      }
      filterByVariant(e, t, r) {
        if (!e.length) return e;
        let o = (a) => {
            let l = a.closest(t);
            if (!l) return !1;
            let c = l.getAttribute("data-wf-variant-state");
            return c != null && r.includes(c);
          },
          i = -1;
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          if (!l || !o(l)) {
            i = a;
            break;
          }
        }
        if (i === -1) return e;
        let s = e.slice(0, i);
        for (let a = i + 1; a < e.length; a++) {
          let l = e[a];
          l && o(l) && s.push(l);
        }
        return s;
      }
      getInteractionForTimeline;
      getInteractionsForTimelines;
      recomputeFlipEaseForOwnSources(e) {
        if (this.features.timelineGroups !== !0) return;
        let t = new Set();
        for (let r of e.timelineIds ?? [])
          this.timelineDefs.has(r) &&
            t.add(this.coordinator.resolveSourceTimelineId(r));
        for (let r of t) this.coordinator.recomputeFlipEaseForSource(r);
      }
      incrementTimelineRefCount(e) {
        let t = this.timelineRefCounts.get(e) || 0;
        this.timelineRefCounts.set(e, t + 1);
      }
      decrementTimelineRefCount(e) {
        let t = this.timelineRefCounts.get(e) || 0,
          r = Math.max(0, t - 1);
        return this.timelineRefCounts.set(e, r), r;
      }
      decrementTimelineReferences(e) {
        let t = new Set(),
          r = this.interactionTimelineRefs.get(e);
        if (!r) return t;
        for (let o of r) this.decrementTimelineRefCount(o) === 0 && t.add(o);
        return t;
      }
      unbindAllTriggers(e) {
        let t = this.triggerCleanupFunctions.get(e);
        if (t) {
          for (let [, r] of t)
            for (let o of r)
              try {
                o();
              } catch (i) {
                console.error("Error during trigger cleanup:", i);
              }
          this.triggerCleanupFunctions.delete(e);
        }
      }
      cleanupTriggerObservers(e) {
        let t = this.triggerObservers.get(e);
        if (t) {
          for (let [r, o] of t) {
            try {
              o();
            } catch (i) {
              console.error("Error during trigger observer cleanup:", i);
            }
            this.pendingReactiveUpdates.delete(r),
              this.reactiveExecutionContext.delete(r);
          }
          this.reactiveCallbackQueues.delete(e),
            this.triggerObservers.delete(e);
        }
      }
      cleanupContinuousControlsForInteraction(e) {
        let t = this.continuousCleanups.get(e);
        if (t) {
          for (let [, r] of t)
            try {
              r();
            } catch (o) {
              console.error("Error during continuous control cleanup:", o);
            }
          this.continuousCleanups.delete(e);
        }
      }
      cleanupAllContinuousControls() {
        for (let [, e] of this.continuousCleanups)
          for (let [, t] of e)
            try {
              t();
            } catch (r) {
              console.error("Error during continuous control cleanup:", r);
            }
        this.continuousCleanups.clear();
      }
      cleanupInteractionAnimations(e) {
        this.unbindAllTriggers(e),
          this.activeInteractionIds.delete(e),
          this.cleanupContinuousControlsForInteraction(e);
        let t = this.interactionTimelineRefs.get(e);
        if (t)
          for (let o of t)
            this.decrementTimelineRefCount(o) === 0 &&
              this.destroyTimelineInstance(o);
        let r = this.interactions.get(e);
        r && this.recomputeFlipEaseForOwnSources(r),
          this.triggeredElements.delete(e);
        for (let o of this.interactions.get(e)?.triggers ?? [])
          this.lastRoutedTimelineIds.delete(o);
      }
    },
    $e = bn;
  Ne($e, "instance");
});
var Bi = v((Tn) => {
  "use strict";
  Object.defineProperty(Tn, "__esModule", { value: !0 });
  function wl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  wl(Tn, {
    EASING_NAMES: function () {
      return El.EASING_NAMES;
    },
    IX3: function () {
      return Sl.IX3;
    },
    convertEaseConfigToGSAP: function () {
      return Vi.convertEaseConfigToGSAP;
    },
    convertEaseConfigToLinear: function () {
      return Vi.convertEaseConfigToLinear;
    },
  });
  var Sl = ji(),
    El = te(),
    Vi = $t();
});
var Cn = v((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: !0 });
  function Cl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Cl(En, {
    COMPONENT_TIMELINE_ROLES: function () {
      return Bl;
    },
    DEFAULT_MOUSE_FOLLOW_ANCHOR: function () {
      return Rl;
    },
    DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE: function () {
      return _l;
    },
    HOVER_TIMELINE_ROLES: function () {
      return Gl;
    },
    IX3_WF_EXTENSION_KEYS: function () {
      return wn;
    },
    MOUSE_MOVE_CHANNELS: function () {
      return jl;
    },
    MOUSE_MOVE_TIMELINE_ROLES: function () {
      return Ol;
    },
    TIMELINE_ROLE_NAMES: function () {
      return j;
    },
    TargetScope: function () {
      return Sn;
    },
    VELOCITY_CAPABLE_PROPS: function () {
      return Gi;
    },
    canUseVelocityInfluenceProperty: function () {
      return Pl;
    },
    getEffectiveFollowMode: function () {
      return Il;
    },
    getMouseFollowConfig: function () {
      return Ml;
    },
    getMouseMoveTimelineContext: function () {
      return qe;
    },
    getOppositeMouseFollowAxis: function () {
      return Nl;
    },
    getSingleAxisMouseFollowMode: function () {
      return Al;
    },
    isMouseMoveIntervalRole: function () {
      return kl;
    },
    isVelocityInfluenceEnabled: function () {
      return xl;
    },
    mouseFollowAxisToRole: function () {
      return Ll;
    },
    mouseFollowRoleToAxis: function () {
      return Fl;
    },
    mouseFollowRoleToSiblingRole: function () {
      return Dl;
    },
    narrowMouseMoveIntervalPayload: function () {
      return Vl;
    },
  });
  var wn;
  (function (n) {
    (n.CLASS = "wf:class"),
      (n.BODY = "wf:body"),
      (n.ID = "wf:id"),
      (n.TRIGGER_ONLY = "wf:trigger-only"),
      (n.TRIGGER_ONLY_PARENT = "wf:trigger-only-parent"),
      (n.SELECTOR = "wf:selector"),
      (n.ATTRIBUTE = "wf:attribute"),
      (n.INST = "wf:inst"),
      (n.ANY_ELEMENT = "wf:any-element"),
      (n.VIEWPORT = "wf:viewport"),
      (n.STYLE = "wf:style"),
      (n.TRANSFORM = "wf:transform"),
      (n.LOTTIE = "wf:lottie"),
      (n.SPLINE = "wf:spline"),
      (n.VARIABLE = "wf:variable"),
      (n.RIVE = "wf:rive"),
      (n.ANIMATE_RIVE = "wf:animate-rive"),
      (n.MOUSE_FOLLOW = "wf:mouse-follow"),
      (n.CLICK = "wf:click"),
      (n.HOVER = "wf:hover"),
      (n.LOAD = "wf:load"),
      (n.FOCUS = "wf:focus"),
      (n.BLUR = "wf:blur"),
      (n.SCROLL = "wf:scroll"),
      (n.CUSTOM = "wf:custom"),
      (n.CHANGE = "wf:change"),
      (n.MOUSE_MOVE = "wf:mouse-move"),
      (n.NAVBAR = "wf:navbar"),
      (n.DROPDOWN = "wf:dropdown"),
      (n.PREFERS_REDUCED_MOTION = "wf:prefersReducedMotion"),
      (n.WEBFLOW_BREAKPOINTS = "wf:webflowBreakpoints"),
      (n.CUSTOM_MEDIA_QUERY = "wf:customMediaQuery"),
      (n.COLOR_SCHEME = "wf:colorScheme"),
      (n.ELEMENT_DATA_ATTRIBUTE = "wf:elementDataAttribute"),
      (n.CURRENT_TIME = "wf:currentTime"),
      (n.ELEMENT_STATE = "wf:elementState");
  })(wn || (wn = {}));
  var Sn;
  (function (n) {
    (n.ALL = "all"),
      (n.PARENT = "parent"),
      (n.CHILDREN = "children"),
      (n.SIBLINGS = "siblings"),
      (n.NEXT = "next"),
      (n.PREVIOUS = "previous"),
      (n.FIRST_ANCESTOR = "first-ancestor"),
      (n.FIRST_DESCENDANT = "first-descendant"),
      (n.DESCENDANTS = "descendants"),
      (n.ANCESTORS = "ancestors");
  })(Sn || (Sn = {}));
  function Ml(n) {
    let e = n?.properties?.["wf:mouse-follow"];
    if (!(typeof e != "object" || e === null || Array.isArray(e))) return e;
  }
  function Il(n) {
    return n?.followMode ?? "full";
  }
  function Al(n) {
    return n === "x" ? "x-only" : "y-only";
  }
  var Rl = "50% 50%",
    _l = 100,
    j = {
      MOUSE_X: "mouseX",
      MOUSE_Y: "mouseY",
      INTERVAL: "interval",
      OPEN: "open",
      CLOSE: "close",
      MOUSE_ENTER: "mouseEnter",
      MOUSE_LEAVE: "mouseLeave",
    };
  function qe(n) {
    return n === j.MOUSE_X
      ? { kind: "mouse-x", role: n, axis: "x", siblingRole: j.MOUSE_Y }
      : n === j.MOUSE_Y
      ? { kind: "mouse-y", role: n, axis: "y", siblingRole: j.MOUSE_X }
      : n === j.INTERVAL
      ? { kind: "interval", role: n }
      : { kind: "other", role: n ?? void 0 };
  }
  var Ol = {
      MOUSE_X: { role: j.MOUSE_X, label: "Mouse X", usePercentCanvas: !0 },
      MOUSE_Y: { role: j.MOUSE_Y, label: "Mouse Y", usePercentCanvas: !0 },
      INTERVAL: { role: j.INTERVAL, label: "Interval" },
    },
    Gi = new Set([
      "x",
      "y",
      "scale",
      "scaleX",
      "scaleY",
      "rotation",
      "skewX",
      "skewY",
      "opacity",
    ]);
  function xl(n) {
    return (
      n?.pluginConfig?.type === "mouseMove" &&
      !!n.pluginConfig.velocityInfluence
    );
  }
  function Pl(n) {
    return Gi.has(n);
  }
  function kl(n) {
    return qe(n).kind === "interval";
  }
  function Fl(n) {
    let e = qe(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.axis : null;
  }
  function Nl(n) {
    return n === "x" ? "y" : "x";
  }
  function Ll(n) {
    return n === "x" ? j.MOUSE_X : j.MOUSE_Y;
  }
  function Dl(n) {
    let e = qe(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.siblingRole : null;
  }
  var jl = { POSITION: "wf:mouse-move:position", LEAVE: "wf:mouse-move:leave" };
  function Vl(n) {
    if (typeof n != "object" || n === null) return {};
    let e = n,
      t = {},
      r = e.cursorPos;
    return (
      typeof r == "object" &&
        r !== null &&
        typeof r.x == "number" &&
        typeof r.y == "number" &&
        (t.cursorPos = { x: r.x, y: r.y }),
      typeof e.velocityFactor == "number" &&
        (t.velocityFactor = e.velocityFactor),
      typeof e.dirX == "number" && (t.dirX = e.dirX),
      typeof e.dirY == "number" && (t.dirY = e.dirY),
      t
    );
  }
  var Bl = {
      OPEN: {
        role: j.OPEN,
        label: "Open",
        allowedControls: ["play", "restart"],
        defaultControl: "play",
      },
      CLOSE: {
        role: j.CLOSE,
        label: "Close",
        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
        allowedControlsWhenReusing: ["reverse", "reverseFlipEase"],
        defaultControl: "play",
        defaultControlWhenReusing: "reverseFlipEase",
        autoReusesRole: j.OPEN,
      },
    },
    Gl = {
      MOUSE_ENTER: {
        role: j.MOUSE_ENTER,
        label: "Hover in actions",
        allowedControls: ["play", "restart"],
        defaultControl: "play",
      },
      MOUSE_LEAVE: {
        role: j.MOUSE_LEAVE,
        label: "Hover out actions",
        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
        defaultControl: "play",
      },
    };
});
var zi = v((An) => {
  "use strict";
  Object.defineProperty(An, "__esModule", { value: !0 });
  function Ul(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ul(An, {
    createLoadedMouseFollowActionNormalizer: function () {
      return Kl;
    },
    forTestSuite: function () {
      return Zl;
    },
    getGroupedMouseFollowConfig: function () {
      return In;
    },
    getUnpairedMouseFollowAction: function () {
      return Hl;
    },
    getUnpairedMouseFollowConfig: function () {
      return Ui;
    },
    remapMouseFollowActionGroupsInTimelines: function () {
      return Xl;
    },
    setGroupedMouseFollowActionConfig: function () {
      return ql;
    },
    setMouseFollowActionConfig: function () {
      return $i;
    },
    stripMouseFollowActionInstanceIds: function () {
      return zl;
    },
    stripMouseFollowConfigInstanceIds: function () {
      return Mn;
    },
  });
  var He = Cn();
  function Mn(n) {
    let { groupId: e, syncedActionId: t, ...r } = n;
    return r;
  }
  function $l(n, e) {
    return { ...Mn(n), groupId: e };
  }
  function In(n, e, t) {
    let r = $l(n, e);
    return (
      t?.axis !== void 0 && (r.axis = t.axis),
      t?.followMode !== void 0 && (r.followMode = t.followMode),
      r
    );
  }
  function Ui(n, e = n.axis) {
    let { syncedActionId: t, ...r } = n,
      o =
        r.followMode === "full" && e
          ? (0, He.getSingleAxisMouseFollowMode)(e)
          : r.followMode;
    return { ...r, ...(o !== void 0 ? { followMode: o } : {}) };
  }
  function ze(n, e) {
    let t = (0, He.getMouseFollowConfig)(n);
    if (!t) return n;
    let r = e(t);
    return r === t
      ? n
      : {
          ...n,
          properties: {
            ...n.properties,
            [He.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: r,
          },
        };
  }
  function $i(n, e) {
    return {
      ...n,
      properties: {
        ...n.properties,
        [He.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: e,
      },
    };
  }
  function ql(n, e, t, r) {
    return $i(n, In(e, t, r));
  }
  function Hl(n, e) {
    return ze(n, (t) => Ui(t, e));
  }
  function zl(n) {
    return ze(n, Mn);
  }
  function Wl(n, e, t) {
    return t[e] ? [n, e].sort().join(":") : `single:${n}`;
  }
  function Yl(n, e, t) {
    return (
      e.groupId ??
      (e.syncedActionId ? Wl(n, e.syncedActionId, t) : `single:${n}`)
    );
  }
  function qi(n, e) {
    let t = {};
    return (r, o = r.id) =>
      ze(r, (i) => {
        let s = Yl(o, i, e),
          a = t[s] ?? n(s);
        return (t[s] = a), In(i, a);
      });
  }
  function Hi(n, e, t) {
    let r = t ?? Object.fromEntries(n.map((i) => [i.id, i.id])),
      o = qi(() => e(), r);
    return (i, s) => o(i, s ?? i.id);
  }
  function Xl(
    n,
    { generateGroupId: e, actionIdMap: t, mapAction: r = (o) => o }
  ) {
    let o = Hi(
      n.flatMap((i) => i.actions ?? []),
      e,
      t
    );
    return n.map((i) => {
      let s = !1,
        a = i.actions?.map((l) => {
          let c = l.id,
            u = r(l),
            d = o(u, c);
          return (s = s || d !== l), d;
        });
      return s && a ? { ...i, actions: a } : i;
    });
  }
  function Kl(n) {
    let e = Object.fromEntries(n.map((r) => [r.id, r.id])),
      t = qi((r) => r, e);
    return (r, o) => {
      let i = t(r);
      return o ? ze(i, (s) => (s.axis ? s : { ...s, axis: o })) : i;
    };
  }
  var Zl = { createMouseFollowActionGroupRemapper: Hi };
});
var Yi = v((Rn) => {
  "use strict";
  Object.defineProperty(Rn, "__esModule", { value: !0 });
  function Ql(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ql(Rn, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Wi;
    },
    isTransientIX3Clone: function () {
      return Jl;
    },
  });
  var Wi = "data-ix3-clone",
    Jl = (n) => !!n.closest?.(`[${Wi}]`);
});
var Y = v((ve) => {
  "use strict";
  Object.defineProperty(ve, "__esModule", { value: !0 });
  Object.defineProperty(ve, "CORE_PLUGIN_INFO", {
    enumerable: !0,
    get: function () {
      return ec;
    },
  });
  _n(Cn(), ve);
  _n(zi(), ve);
  _n(Yi(), ve);
  function _n(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
  var ec = { namespace: "wf", pluginId: "core", version: "1.0.0" };
});
var Ae = v((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: !0 });
  function tc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  tc(xn, {
    getScrollY: function () {
      return ic;
    },
    initScrollCache: function () {
      return rc;
    },
    noop: function () {
      return nc;
    },
  });
  var nc = () => {},
    On = 0,
    We = 0,
    be = null;
  function rc() {
    (We += 1),
      be ||
        ((be = () => {
          On = window.scrollY;
        }),
        (On = window.scrollY),
        window.addEventListener("scroll", be, { passive: !0 }));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (We = Math.max(0, We - 1)),
        We === 0 &&
          be &&
          (window.removeEventListener("scroll", be), (be = null)));
    };
  }
  function ic() {
    return On;
  }
});
var Ki = v((kn) => {
  "use strict";
  Object.defineProperty(kn, "__esModule", { value: !0 });
  Object.defineProperty(kn, "TouchScrollGuard", {
    enumerable: !0,
    get: function () {
      return Pn;
    },
  });
  var Xi = Ae();
  function oc(n) {
    let e = n;
    for (; e && e !== document.body && e !== document.documentElement; ) {
      if (e instanceof HTMLElement) {
        let t = getComputedStyle(e).overflowY;
        if (
          (t === "auto" || t === "scroll" || t === "overlay") &&
          e.scrollHeight > e.clientHeight
        )
          return e;
      }
      e = e.parentElement;
    }
    return null;
  }
  var Pn = class {
    isScrolling = !1;
    toleranceDeg;
    refX = 0;
    refY = 0;
    lastY = 0;
    locked = null;
    effectFromBoundary = !1;
    scroller = null;
    maxScroll = 0;
    constructor(e, t, r) {
      this.toleranceDeg = r?.tolerance ?? 18;
      let o = (0, Xi.initScrollCache)();
      t.addEventListener("abort", o);
      let i = (l) => {
          let c = l.touches[0];
          c &&
            ((this.refX = c.clientX),
            (this.refY = c.clientY),
            (this.lastY = c.clientY),
            (this.locked = null),
            (this.effectFromBoundary = !1),
            (this.isScrolling = !1),
            (this.scroller = oc(l.target ?? e)),
            (this.maxScroll = this.scroller
              ? this.scroller.scrollHeight - this.scroller.clientHeight
              : document.documentElement.scrollHeight - window.innerHeight));
        },
        s = (l) => {
          let c = l.touches[0];
          if (!c) return;
          let u = c.clientY,
            d = c.clientX - this.refX,
            f = u - this.refY,
            p = u > this.lastY,
            h = u < this.lastY,
            g = this.scroller ? this.scroller.scrollTop : (0, Xi.getScrollY)(),
            m = this.maxScroll,
            y = g <= 1 && p,
            C = m > 0 && g >= m - 1 && h;
          this.locked === null && this.decide(d, f, y || C),
            this.locked === "scroll" &&
              (y || C) &&
              ((this.refX = c.clientX),
              (this.refY = u),
              (this.locked = "effect"),
              (this.effectFromBoundary = !0)),
            this.locked === "effect" &&
              this.effectFromBoundary &&
              !(y || C) &&
              ((this.refX = c.clientX),
              (this.refY = u),
              (this.locked = null),
              (this.effectFromBoundary = !1)),
            (this.lastY = u),
            (this.isScrolling =
              this.locked === "scroll" ||
              this.locked === null ||
              (this.locked === "effect" && !l.cancelable && !(y || C))),
            this.locked === "effect" && l.cancelable && l.preventDefault();
        },
        a = () => {
          (this.locked = null), (this.isScrolling = !1);
        };
      e.addEventListener("touchstart", i, { passive: !0, signal: t }),
        e.addEventListener("touchmove", s, { passive: !1, signal: t }),
        e.addEventListener("touchend", a, { passive: !0, signal: t }),
        e.addEventListener("touchcancel", a, { passive: !0, signal: t });
    }
    decide(e, t, r) {
      if (Math.abs(e) < 10 && Math.abs(t) < 10) return;
      Math.atan2(Math.abs(e), Math.abs(t)) * (180 / Math.PI) > this.toleranceDeg
        ? ((this.locked = "effect"), (this.effectFromBoundary = !1))
        : r
        ? ((this.locked = "effect"), (this.effectFromBoundary = !0))
        : (this.locked = "scroll");
    }
  };
});
var Zi = v((Nn) => {
  "use strict";
  Object.defineProperty(Nn, "__esModule", { value: !0 });
  Object.defineProperty(Nn, "VelocityController", {
    enumerable: !0,
    get: function () {
      return Fn;
    },
  });
  var sc = {
    adaptiveMax: 2800,
    adaptAlpha: 0.05,
    adaptDecay: 0.99,
    hardMin: 600,
    hardMax: 4e3,
  };
  function ac(n, e) {
    let t = Math.max(e.hardMin, Math.min(e.hardMax, n));
    (e.adaptiveMax = Math.max(t, e.adaptiveMax * e.adaptDecay)),
      (e.adaptiveMax += (t - e.adaptiveMax) * e.adaptAlpha),
      (e.adaptiveMax = Math.max(e.hardMin, Math.min(e.hardMax, e.adaptiveMax)));
  }
  var lc = (n) => n * n;
  function cc(n, e, t, r) {
    let o = Math.hypot(n, e);
    ac(o, t);
    let i = Math.max(1, t.adaptiveMax),
      s = lc(Math.min(1, o / i)),
      a = 0,
      l = 0;
    return (
      r.x && r.y
        ? o > 0 && ((a = n / o), (l = e / o))
        : r.x
        ? n !== 0 && (a = Math.sign(n))
        : r.y && e !== 0 && (l = Math.sign(e)),
      { n: s, dirX: a, dirY: l }
    );
  }
  var Fn = class {
    config;
    velState;
    lastDirX;
    lastDirY;
    lastNormVelocity;
    get dirX() {
      return this.lastDirX;
    }
    get dirY() {
      return this.lastDirY;
    }
    constructor(e) {
      (this.config = e),
        (this.velState = { ...sc }),
        (this.lastDirX = 0),
        (this.lastDirY = 0),
        (this.lastNormVelocity = 0);
    }
    update(e, t) {
      let {
        n: r,
        dirX: o,
        dirY: i,
      } = cc(e, t, this.velState, this.config.axes);
      (this.lastNormVelocity = r), (this.lastDirX = o), (this.lastDirY = i);
    }
    reset() {
      (this.lastDirX = 0), (this.lastDirY = 0), (this.lastNormVelocity = 0);
    }
    destroy() {
      this.reset();
    }
  };
});
var Qi = v((Dn) => {
  "use strict";
  Object.defineProperty(Dn, "__esModule", { value: !0 });
  Object.defineProperty(Dn, "IntervalController", {
    enumerable: !0,
    get: function () {
      return Ln;
    },
  });
  var uc = Y(),
    dc = 16,
    Ln = class {
      config;
      accum;
      lastX;
      lastY;
      initialized;
      cycleIndex;
      destroyed;
      constructor(e) {
        (this.config = e),
          (this.accum = 0),
          (this.lastX = 0),
          (this.lastY = 0),
          (this.initialized = !1),
          (this.cycleIndex = 0),
          (this.destroyed = !1),
          document.addEventListener(
            "visibilitychange",
            () => {
              document.visibilityState === "visible" && this.reset();
            },
            { signal: this.config.signal }
          );
      }
      get isActive() {
        return this.config.distance > 0;
      }
      update(e) {
        if (this.destroyed || !this.isActive) return;
        let { x: t, y: r, velocityFactor: o, dirX: i, dirY: s } = e;
        if (!this.initialized) {
          (this.lastX = t), (this.lastY = r), (this.initialized = !0);
          return;
        }
        let a = t - this.lastX,
          l = r - this.lastY;
        (this.lastX = t), (this.lastY = r);
        let { axes: c, distance: u } = this.config;
        c.x && c.y
          ? (this.accum += Math.hypot(a, l))
          : c.x
          ? (this.accum += Math.abs(a))
          : c.y && (this.accum += Math.abs(l));
        let d = 0;
        for (; this.accum >= u && d < dc; ) {
          this.accum -= u;
          let f = {
            cursorPos: { x: t, y: r },
            velocityFactor: o,
            dirX: i,
            dirY: s,
          };
          this.config.channelManager.fireInterval?.(
            uc.TIMELINE_ROLE_NAMES.INTERVAL,
            {
              targetIndex: this.cycleIndex++,
              element: this.config.element,
              pluginPayload: f,
            }
          ),
            d++;
        }
        this.accum >= u && (this.accum %= u);
      }
      reset() {
        (this.accum = 0), (this.initialized = !1), (this.cycleIndex = 0);
      }
      destroy() {
        (this.destroyed = !0), this.reset();
      }
    };
});
var Ye = v((jn) => {
  "use strict";
  Object.defineProperty(jn, "__esModule", { value: !0 });
  function fc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  fc(jn, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Ji.TRANSIENT_IX3_CLONE_ATTR;
    },
    isTransientIX3Clone: function () {
      return Ji.isTransientIX3Clone;
    },
  });
  var Ji = Y();
});
var lo = v((Bn) => {
  "use strict";
  Object.defineProperty(Bn, "__esModule", { value: !0 });
  Object.defineProperty(Bn, "fireMouseMoveInterval", {
    enumerable: !0,
    get: function () {
      return Ic;
    },
  });
  var pc = Y(),
    ao = Ye(),
    Vn = new Set(["x", "y"]),
    hc = new Set(["scale", "scaleX", "scaleY"]),
    eo = new WeakMap(),
    to = new WeakMap();
  function gc(n) {
    let e = eo.get(n);
    return (
      e ||
        ((e = {
          activeIntervalEls: new Map(),
          intervalClones: new Set(),
          baselineValues: new Map(),
        }),
        eo.set(n, e)),
      e
    );
  }
  function mc(n, e, t, r) {
    let o = to.get(n);
    o || ((o = new Set()), to.set(n, o)),
      !o.has(t) &&
        (o.add(t),
        r(() => {
          let i = e.activeIntervalEls.get(t);
          if (i)
            for (let s of i)
              e.intervalClones.has(s) &&
                (s.isConnected && s.remove(), e.intervalClones.delete(s));
          e.activeIntervalEls.delete(t),
            e.baselineValues.delete(t),
            o.delete(t);
        }));
  }
  function no(n) {
    if (n)
      for (let e in n) {
        if (!Vn.has(e)) continue;
        let t = n[e];
        (typeof t == "string" && (t.startsWith("+=") || t.startsWith("-="))) ||
          ((typeof t == "number" || typeof t == "string") && (n[e] = `+=${t}`));
      }
  }
  var yc = /^random\((.*)\)([a-z%]*)$/i,
    vc = /^-?\d*\.?\d+$/;
  function bc(n, e) {
    let t = yc.exec(n);
    if (!t) return null;
    let r = t[1] ?? "",
      o = t[2] ?? "",
      i = r.startsWith("[") && r.endsWith("]"),
      a = (i ? r.slice(1, -1) : r).split(",").map((c) => c.trim());
    if (!a.every((c) => vc.test(c))) return null;
    let l = a
      .map((c, u) => {
        let d = Number(c);
        return !i && u >= 2 ? Math.abs(e(d) - e(0)) : e(d);
      })
      .join(", ");
    return `random(${i ? `[${l}]` : l})${o}`;
  }
  function ro(n, e, t, r) {
    if (n)
      for (let o in n) {
        let i = n[o];
        if (typeof i != "number" && typeof i != "string") continue;
        let s = !1,
          a = typeof i == "string" ? i : "";
        typeof i == "string" &&
          (i.startsWith("+=") || i.startsWith("-=")) &&
          ((s = !0), (a = (i.startsWith("-=") ? "-" : "") + i.slice(2)));
        let l, c;
        if (Vn.has(o)) {
          let p = o === "y" ? r : t;
          (l = (h) => h * e * p), (c = !0);
        } else if (o === "rotation") {
          let p = Math.abs(t) >= Math.abs(r) ? t : -r;
          (l = (h) => h * e * p), (c = s);
        } else
          hc.has(o)
            ? ((l = s ? (p) => p * e : (p) => 1 + (p - 1) * e), (c = s))
            : ((l = (p) => p * e), (c = s));
        if (typeof i == "string" && a.startsWith("random(")) {
          let p = bc(a, l);
          if (p == null) continue;
          n[o] = c ? `+=${p}` : p;
          continue;
        }
        let u,
          d = "";
        if (typeof i == "number") u = i;
        else {
          if (((u = parseFloat(a)), isNaN(u))) continue;
          d = a.replace(/^-?[\d.]+/, "");
        }
        let f = l(u);
        n[o] = c ? `+=${f}${d}` : f;
      }
  }
  function Tc(n, e) {
    let t = n.getOneShotTimelineContext(e),
      r = t?.timelineDef;
    if (!t || !r?.actions?.length) return null;
    let o = r.triggerMetadata,
      i = o?.pluginConfig?.type === "mouseMove" ? o.pluginConfig : void 0;
    return o?.role !== "interval" && !i
      ? null
      : {
          oneShot: t,
          mouseMoveMeta: i ?? { type: "mouseMove" },
          axes: o?.axes,
        };
  }
  function wc(n, e, t, r, o) {
    let i = n.cloneNode(!0);
    i.removeAttribute("style"),
      i.removeAttribute("id"),
      i.removeAttribute("data-w-id"),
      i.setAttribute(ao.TRANSIENT_IX3_CLONE_ATTR, "true"),
      (i.style.position = "absolute"),
      (i.style.margin = "0"),
      (i.style.pointerEvents = "none"),
      n.insertAdjacentElement("beforebegin", i);
    let s = e.baselineValues.get(o)?.get(n);
    return s && r.set(i, { ...s }), e.intervalClones.add(i), t.add(i), i;
  }
  function Sc(n, e) {
    let t = [],
      r = new Set();
    for (let o of n.timelineDef.actions)
      for (let i in o.properties) {
        let s = n.getActionTweenConfig(o, i, [e]);
        if (s) {
          for (let a of [s.to, s.from])
            if (a)
              for (let l of Object.keys(a)) Vn.has(l) ? t.push(l) : r.add(l);
        }
      }
    return { clearProps: t, baselineProps: r };
  }
  function Ec(n, e, t, r, o) {
    let { clearProps: i, baselineProps: s } = Sc(n, t);
    if (s.size > 0) {
      let a = {};
      for (let c of s) a[c] = e.getProperty(t, c);
      let l = r.baselineValues.get(o);
      l || ((l = new WeakMap()), r.baselineValues.set(o, l)), l.set(t, a);
    }
    i.length !== 0 && e.set(t, { clearProps: i.join(",") });
  }
  function io(n) {
    if (n)
      for (let e in n) {
        let t = n[e];
        typeof t == "function" &&
          "legacyExpression" in t &&
          (n[e] = t.legacyExpression);
      }
  }
  function Cc(n, e, t) {
    return (r, o, i) => {
      io(i.to),
        io(i.from),
        (
          o.pluginConfig?.type === "mouseMove"
            ? o.pluginConfig.velocityInfluence
            : !1
        )
          ? n != null && (ro(i.to, n, e, t), i.from && ro(i.from, n, e, t))
          : (no(i.to), i.from && no(i.from));
    };
  }
  function Mc(n, e, t, r, o, i, s, a) {
    let [l] = t;
    if (l && (n.set(l, { zIndex: r + 1 + o }, 0), !(!i || (!s && !a))))
      for (let c of t) {
        let u = c.getBoundingClientRect(),
          d = {};
        if (s) {
          let f = Number(e.getProperty(c, "x")) || 0;
          d.x = i.x - (u.left + u.width / 2 - f);
        }
        if (a) {
          let f = Number(e.getProperty(c, "y")) || 0;
          d.y = i.y - (u.top + u.height / 2 - f);
        }
        n.set(c, d, 0);
      }
  }
  function oo(n) {
    for (let e of n) e();
    n.clear();
  }
  function so(n, e, t) {
    n.activeIntervalEls.get(e)?.delete(t),
      n.intervalClones.has(t) &&
        (t.isConnected && t.remove(), n.intervalClones.delete(t));
  }
  var Ic = ({
    coordinator: n,
    timelineId: e,
    element: t,
    options: r,
    animation: o,
  }) => {
    if (!o.hasGsap()) return;
    let i = r.targetIndex;
    if (i == null) return;
    let s = Tc(n, e);
    if (!s) return;
    let { oneShot: a, mouseMoveMeta: l, axes: c } = s,
      u = gc(n),
      d = a
        .getFirstActionTargets(t)
        .filter((V) => !(0, ao.isTransientIX3Clone)(V));
    if (!d.length) return;
    let f = [d[i % d.length]],
      p = f,
      h = f[0],
      g = u.activeIntervalEls.get(e);
    g || ((g = new Set()), u.activeIntervalEls.set(e, g)),
      g.has(h) ? (p = [wc(h, u, g, o, e)]) : (Ec(a, o, h, u, e), g.add(h));
    let m = p[0],
      y = c?.x === !1 && c?.y === !1,
      C = y || (c?.x ?? l?.setMouseX ?? !0),
      b = y || (c?.y ?? l?.setMouseY ?? !0),
      w = (0, pc.narrowMouseMoveIntervalPayload)(r.pluginPayload),
      S = w.cursorPos,
      M = w.velocityFactor,
      T = w.dirX ?? 0,
      A = w.dirY ?? 0,
      E = new Set(),
      R = a.buildActionTimeline({
        targets: p,
        cleanupBucket: E,
        varsTransform: Cc(M, T, A),
        beforeTweens: (V) => {
          Mc(V, o, p, d.length, i, S, C, b);
        },
      });
    if (!R) {
      oo(E), so(u, e, m);
      return;
    }
    let P = null,
      O = !1,
      _ = (V) => {
        O || ((O = !0), P?.(), V && R.kill(), oo(E), so(u, e, m));
      };
    (P = a.registerCleanup(() => _(!0))),
      R.eventCallback("onComplete", () => {
        _(!1);
      }),
      mc(n, u, e, a.registerCleanup);
  };
});
var go = v(($n) => {
  "use strict";
  Object.defineProperty($n, "__esModule", { value: !0 });
  Object.defineProperty($n, "buildMouseMove", {
    enumerable: !0,
    get: function () {
      return Lc;
    },
  });
  var ne = Y(),
    Re = Ae(),
    Ac = Ki(),
    Rc = Zi(),
    _c = Qi(),
    Oc = lo(),
    xc = 50,
    co = 50,
    Gn = null;
  function Pc() {
    return (
      Gn === null &&
        (Gn = "ontouchstart" in window || navigator.maxTouchPoints > 0),
      Gn
    );
  }
  var po = 0,
    ho = 0,
    Xe = 0,
    le = null;
  function kc() {
    (Xe += 1),
      le ||
        ((le = () => {
          (po = window.innerWidth), (ho = window.innerHeight);
        }),
        le(),
        window.addEventListener("resize", le));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (Xe = Math.max(0, Xe - 1)),
        Xe === 0 &&
          le &&
          (window.removeEventListener("resize", le), (le = null)));
    };
  }
  var Ke = (n) => Math.max(0, Math.min(1, n));
  function Fc(n, e, t) {
    return e === t || n === t || (n < t && e > t) || (n > t && e < t);
  }
  function _e(n, e, t) {
    let r = n.tween;
    (n.tween = null),
      (n.takeoverTarget = null),
      (n.proxy.value = e),
      (n.lastValue = e),
      n.channel?.setProgress(e),
      t && r?.kill();
  }
  function uo(n, e) {
    if (n.tween) {
      if (n.proxy.value === e) {
        _e(n, e, !0);
        return;
      }
      let t = n.tweenTarget - n.proxy.value,
        r = e - n.proxy.value;
      if (t * r < 0) {
        _e(n, e, !0);
        return;
      }
      n.takeoverTarget = e;
      return;
    }
    (n.proxy.value = e), (n.lastValue = e), n.channel?.setProgress(e);
  }
  function Un(n) {
    let e = n.tween;
    (n.tween = null), (n.takeoverTarget = null), e?.kill();
  }
  function fo(n, e, t, r) {
    Un(e), (e.lastValue = e.proxy.value), (e.tweenTarget = t);
    let o = n.to(e.proxy, {
      value: t,
      duration: r,
      ease: "power2.out",
      onUpdate: () => {
        let i = e.proxy.value,
          s = e.takeoverTarget;
        if (s != null && Fc(e.lastValue, i, s)) {
          _e(e, s, !0);
          return;
        }
        (e.lastValue = i), e.channel?.setImmediate(i);
      },
      onComplete: () => {
        let i = e.takeoverTarget;
        (e.tween = null), (e.takeoverTarget = null), i != null && _e(e, i, !1);
      },
    });
    if (!o) {
      _e(e, t, !1);
      return;
    }
    e.tween = o;
  }
  function Nc(n, e, t, r) {
    let o = Math.abs(t - n),
      i = Math.abs(r - e),
      s = Math.max(o, i);
    return 0.1 + Math.min(s / 0.5, 1) * 0.5;
  }
  function Lc(n) {
    n.addTrigger("mouse-move", (e, t, r, o) => {
      let i = e[1].pluginConfig,
        s = e[2]?.[0] === ne.IX3_WF_EXTENSION_KEYS.VIEWPORT;
      return (
        o({
          type: "continuous",
          setup: (a) => {
            let { animation: l } = a;
            if (!l.hasGsap() || !l.hasObserver()) return Re.noop;
            let c = s ? kc() : Re.noop;
            a.registerIntervalHandler(
              ne.IX3_WF_EXTENSION_KEYS.MOUSE_MOVE,
              Oc.fireMouseMoveInterval
            );
            let u = i?.smoothness ?? xc,
              d = (i?.restingState?.x ?? co) / 100,
              f = (i?.restingState?.y ?? co) / 100,
              p = a.registerChannel({
                role: ne.TIMELINE_ROLE_NAMES.MOUSE_X,
                initialValue: d,
                element: t,
                smoothing: u,
              }),
              h = a.registerChannel({
                role: ne.TIMELINE_ROLE_NAMES.MOUSE_Y,
                initialValue: f,
                element: t,
                smoothing: u,
              }),
              g = new AbortController(),
              { signal: m } = g,
              y = a.getMetadata(ne.TIMELINE_ROLE_NAMES.INTERVAL),
              C = {
                x: y?.axes?.x !== !1 || y?.axes?.y === !1,
                y: y?.axes?.y !== !1 || y?.axes?.x === !1,
              },
              b = y
                ? new _c.IntervalController({
                    distance:
                      y.distance ?? ne.DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE,
                    axes: C,
                    channelManager: a,
                    element: t,
                    signal: m,
                  })
                : null,
              w = b ? new Rc.VelocityController({ axes: C }) : null,
              S = {
                proxy: { value: d },
                channel: p,
                tween: null,
                takeoverTarget: null,
                lastValue: d,
                tweenTarget: d,
              },
              M = {
                proxy: { value: f },
                channel: h,
                tween: null,
                takeoverTarget: null,
                lastValue: f,
                tweenTarget: f,
              },
              T = !1,
              A = (N, $) => {
                let q = Nc(S.proxy.value, M.proxy.value, N, $);
                fo(l, S, N, q), fo(l, M, $, q);
              },
              E = Pc(),
              R = s ? document.documentElement : t,
              P = null;
            E && (P = new Ac.TouchScrollGuard(R, m));
            let O = null,
              _ = () => {
                O = null;
              },
              V = () => (O || (O = t.getBoundingClientRect()), O);
            if (!s) {
              let N = new ResizeObserver(_);
              N.observe(t),
                m.addEventListener("abort", () => N.disconnect()),
                window.addEventListener("scroll", _, {
                  passive: !0,
                  capture: !0,
                  signal: m,
                }),
                window.visualViewport &&
                  window.visualViewport.addEventListener("resize", _, {
                    signal: m,
                  });
            }
            let J;
            try {
              if (
                ((J = l.createObserver({
                  target: R,
                  type: E ? "pointer,touch" : "pointer",
                  tolerance: 0,
                  onMove: (N) => {
                    if (P?.isScrolling || !a.isPreviewEnabled()) return;
                    let $ = N.x ?? 0,
                      q = N.y ?? 0,
                      H,
                      fe;
                    if (s)
                      (H = Ke($ / Math.max(1, po))),
                        (fe = Ke(q / Math.max(1, ho)));
                    else {
                      let K = V();
                      (H = Ke(($ - K.left) / Math.max(1, K.width))),
                        (fe = Ke((q - K.top) / Math.max(1, K.height)));
                    }
                    T ? (uo(S, H), uo(M, fe)) : ((T = !0), A(H, fe)),
                      a.publishChannel(
                        ne.MOUSE_MOVE_CHANNELS.POSITION,
                        { x: $, y: q, triggerEl: t, isViewport: s },
                        t
                      ),
                      w &&
                        (w.update(N.velocityX, N.velocityY),
                        b.update({
                          x: $,
                          y: q,
                          velocityFactor: w.lastNormVelocity,
                          dirX: w.dirX,
                          dirY: w.dirY,
                        }));
                  },
                })),
                !J)
              )
                return b?.destroy(), w?.destroy(), g.abort(), c(), Re.noop;
            } catch {
              return b?.destroy(), w?.destroy(), g.abort(), c(), Re.noop;
            }
            let U = () => {
              a.isPreviewEnabled() &&
                ((T = !1),
                A(d, f),
                w?.reset(),
                a.publishChannel(ne.MOUSE_MOVE_CHANNELS.LEAVE, void 0, t),
                b?.reset());
            };
            return (
              s
                ? (R.addEventListener("mouseleave", U, { signal: m }),
                  window.addEventListener("blur", U, { signal: m }))
                : t.addEventListener("mouseleave", U, { signal: m }),
              R.addEventListener("touchend", U, { signal: m, passive: !0 }),
              R.addEventListener("touchcancel", U, { signal: m, passive: !0 }),
              () => {
                J.kill(),
                  g.abort(),
                  Un(S),
                  Un(M),
                  b?.destroy(),
                  w?.destroy(),
                  c();
              }
            );
          },
        }),
        Re.noop
      );
    });
  }
});
var vo = v((qn) => {
  "use strict";
  Object.defineProperty(qn, "__esModule", { value: !0 });
  Object.defineProperty(qn, "build", {
    enumerable: !0,
    get: function () {
      return jc;
    },
  });
  var mo = Y(),
    Oe = Ae(),
    Dc = go();
  function jc(n) {
    Vc(n),
      Bc(n),
      (0, Dc.buildMouseMove)(n),
      Gc(n),
      Uc(n),
      n.addTrigger("load", (e, t, r, o) => {
        let i = e[1],
          s = !1,
          a = () => {
            s || ((s = !0), o({ target: t }));
          };
        switch (i.pluginConfig?.triggerPoint) {
          case "immediate":
            return a(), Oe.noop;
          case "fullyLoaded":
            return document.readyState === "complete"
              ? (a(), Oe.noop)
              : r.addEventListener(window, "load", a);
          case "DOMContentLoaded":
          default:
            return document.readyState === "complete" ||
              document.readyState === "interactive"
              ? (a(), Oe.noop)
              : r.addEventListener(document, "DOMContentLoaded", a);
        }
      }),
      n.addTrigger("focus", (e, t, r, o) => {
        let i = e[1];
        return r.addEventListener(
          t,
          i.pluginConfig?.useFocusWithin ? "focusin" : "focus",
          o,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      }),
      n.addTrigger("blur", (e, t, r, o) => {
        let i = e[1];
        return r.addEventListener(
          t,
          i.pluginConfig?.useFocusWithin ? "focusout" : "blur",
          o,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      }),
      n.addTrigger("scroll", (e, t, r, o) => (o({ target: t }), Oe.noop)),
      n.addTrigger("custom", (e, t, r, o) => {
        let s = e[1].pluginConfig?.eventName;
        return s
          ? r.addEventListener(t, s, o, { delegate: !1, kind: "custom" })
          : Oe.noop;
      }),
      n.addTrigger("change", (e, t, r, o) =>
        r.addEventListener(t, "change", o)
      );
  }
  function Vc(n) {
    let e = new WeakMap();
    n.addTrigger("click", (t, r, o, i) => {
      let [, s] = t,
        a = o.addEventListener(
          r,
          "click",
          (l) => {
            let c = s.pluginConfig?.click,
              u = e.get(r) || new WeakMap();
            e.set(r, u);
            let f = (u.get(t) || 0) + 1;
            switch ((u.set(t, f), c)) {
              case "each": {
                i(l);
                break;
              }
              case "first": {
                f === 1 && i(l);
                break;
              }
              case "second": {
                f === 2 && i(l);
                break;
              }
              case "odd": {
                f % 2 === 1 && i(l);
                break;
              }
              case "even": {
                f % 2 === 0 && i(l);
                break;
              }
              case "custom": {
                let p = s.pluginConfig?.custom;
                p && f === p && i(l);
                break;
              }
              default:
                i(l);
            }
          },
          { delegate: !0 }
        );
      return () => {
        a(), e.delete(r);
      };
    });
  }
  function Bc(n) {
    let e = new WeakMap();
    n.addTrigger("hover", (t, r, o, i) => {
      let [, s] = t,
        a = [],
        l = s.pluginConfig?.multiTimeline,
        c = s.pluginConfig?.eventMode,
        u = c !== "leave",
        d = c !== "enter";
      if (l === !0)
        return (
          u &&
            a.push(
              o.addEventListener(r, "mouseenter", () =>
                i({
                  type: "timeline-role",
                  role: mo.TIMELINE_ROLE_NAMES.MOUSE_ENTER,
                })
              )
            ),
          d &&
            a.push(
              o.addEventListener(r, "mouseleave", () =>
                i({
                  type: "timeline-role",
                  role: mo.TIMELINE_ROLE_NAMES.MOUSE_LEAVE,
                })
              )
            ),
          () => {
            a.forEach((p) => p()), (a.length = 0);
          }
        );
      if (l === !1) {
        if (
          s.control === void 0 ||
          s.control === "togglePlayReverse" ||
          s.control === "togglePlayReverseFlipEase"
        ) {
          let h =
            s.control === "togglePlayReverseFlipEase"
              ? "reverseFlipEase"
              : "reverse";
          if (
            (u &&
              a.push(
                o.addEventListener(r, "mouseenter", () =>
                  i({ type: "playback-control", control: "play" })
                )
              ),
            d)
          ) {
            let g = u ? h : "play";
            a.push(
              o.addEventListener(r, "mouseleave", () =>
                i({ type: "playback-control", control: g })
              )
            );
          }
        } else
          u && a.push(o.addEventListener(r, "mouseenter", (h) => i(h))),
            d && a.push(o.addEventListener(r, "mouseleave", (h) => i(h)));
        return () => {
          a.forEach((h) => h()), (a.length = 0);
        };
      }
      let f = (p, h) => {
        if ((s.pluginConfig?.type ?? "mouseenter") !== h) return;
        let m = s.pluginConfig?.hover || "each",
          y = e.get(r) || new Map();
        e.set(r, y);
        let b = (y.get(h) || 0) + 1;
        switch ((y.set(h, b), m)) {
          case "each": {
            i(p);
            break;
          }
          case "first": {
            b === 1 && i(p);
            break;
          }
          case "second": {
            b === 2 && i(p);
            break;
          }
          case "odd": {
            b % 2 === 1 && i(p);
            break;
          }
          case "even": {
            b % 2 === 0 && i(p);
            break;
          }
          case "custom": {
            let w = s.pluginConfig?.custom;
            w && b === w && i(p);
            break;
          }
          default:
            i(p);
        }
      };
      return (
        a.push(
          o.addEventListener(r, "mouseenter", (p) => {
            f(p, "mouseenter");
          })
        ),
        a.push(
          o.addEventListener(r, "mouseover", (p) => {
            f(p, "mouseover");
          })
        ),
        a.push(
          o.addEventListener(r, "mouseleave", (p) => {
            f(p, "mouseleave");
          })
        ),
        () => {
          a.forEach((p) => p()), (a.length = 0), e.delete(r);
        }
      );
    });
  }
  function yo(n, e) {
    n.addTrigger(e, (t, r, o, i) => {
      let s = t[1].pluginConfig?.event,
        a = "IX3_COMPONENT_STATE_CHANGE";
      return o.addEventListener(r, a, (l) => {
        let c = l.detail;
        if (!c || typeof c != "object") return;
        let { component: u, state: d } = c;
        u !== e ||
          !d ||
          (s && d !== s) ||
          i({ type: "timeline-role", role: d });
      });
    });
  }
  function Gc(n) {
    yo(n, "navbar");
  }
  function Uc(n) {
    yo(n, "dropdown");
  }
});
var Te = v((Hn) => {
  "use strict";
  Object.defineProperty(Hn, "__esModule", { value: !0 });
  function $c(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  $c(Hn, {
    resolveToNumber: function () {
      return qc;
    },
    resolveToString: function () {
      return Hc;
    },
  });
  function qc(n, e) {
    if (typeof n == "number") return n;
    if (typeof n == "string") {
      let t = n;
      if (t.startsWith("var(")) {
        let o = t.slice(4, -1).split(",")[0]?.trim() ?? "";
        if (!o || ((t = getComputedStyle(e).getPropertyValue(o).trim()), !t))
          return;
      }
      let r = parseFloat(t);
      return isNaN(r) ? void 0 : r;
    }
  }
  function Hc(n, e) {
    if (typeof n == "string") {
      if (n.startsWith("var(")) {
        let t = n.slice(4, -1).split(",")[0]?.trim() ?? "";
        return (t && getComputedStyle(e).getPropertyValue(t).trim()) || void 0;
      }
      return n;
    }
  }
});
var So = v((Yn) => {
  "use strict";
  Object.defineProperty(Yn, "__esModule", { value: !0 });
  function zc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  zc(Yn, {
    buildMouseFollowAction: function () {
      return Qc;
    },
    forTestSuite: function () {
      return Kc;
    },
  });
  var zn = Y(),
    Ze = Ae(),
    Wc = 0.5,
    Qe = 50;
  function Yc(n) {
    let e = 2166136261;
    for (let t = 0; t < n.length; t++)
      (e ^= n.charCodeAt(t)), (e = Math.imul(e, 16777619));
    return e >>> 0;
  }
  function Xc(n) {
    let e = n >>> 0;
    return () => {
      e = (e + 1831565813) | 0;
      let t = Math.imul(e ^ (e >>> 15), 1 | e);
      return (
        (t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)),
        ((t ^ (t >>> 14)) >>> 0) / 4294967296
      );
    };
  }
  function bo(n, e, t) {
    if (n <= 1) return [0];
    if (typeof e == "number") {
      let r = Math.max(0, Math.min(n - 1, Math.floor(e))),
        o = [r];
      for (let i = 1; o.length < n; i++)
        r + i < n && o.push(r + i), r - i >= 0 && o.push(r - i);
      return o;
    }
    switch (e) {
      case "start":
        return Array.from({ length: n }, (r, o) => o);
      case "center": {
        let r = [],
          o = Math.floor((n - 1) / 2);
        r.push(o);
        for (let i = 1; r.length < n; i++)
          o + i < n && r.push(o + i), o - i >= 0 && r.push(o - i);
        return r;
      }
      case "random": {
        let r = t != null && t !== "" ? Xc(Yc(t)) : Math.random,
          o = Array.from({ length: n }, (i, s) => s);
        for (let i = n - 1; i > 0; i--) {
          let s = Math.floor(r() * (i + 1));
          [o[i], o[s]] = [o[s], o[i]];
        }
        return o;
      }
      case "edges": {
        let r = [],
          o = 0,
          i = n - 1;
        for (; o <= i; ) r.push(o), o !== i && r.push(i), o++, i--;
        return r;
      }
      case "end":
      default:
        return Array.from({ length: n }, (r, o) => n - 1 - o);
    }
  }
  function Wn(n) {
    if (n == null) return Qe;
    let e = typeof n == "number" ? n * 1e3 : parseFloat(n);
    return Number.isFinite(e) && e >= 0 ? e : Qe;
  }
  var xe = (n) => {
      if (typeof n != "string") return 0.5;
      let e = /^(-?\d+(?:\.\d+)?)%$/.exec(n.trim());
      if (e) return Math.max(0, Math.min(1, parseFloat(e[1]) / 100));
      let t = n.trim().toLowerCase();
      return t === "left" || t === "top"
        ? 0
        : t === "right" || t === "bottom"
        ? 1
        : 0.5;
    },
    To = (n, e) => {
      if (n?.amount != null) {
        let t = Wn(n.amount),
          r = e > 1 ? t / (e - 1) : Qe;
        return Math.max(1, r);
      }
      return n?.each != null ? Math.max(1, Wn(n.each)) : 1;
    },
    wo = (n) => {
      if (!n) return { x: 0.5, y: 0.5 };
      if (typeof n == "string") {
        let [e, t] = n.trim().split(/\s+/);
        return { x: xe(e ?? "50%"), y: xe(t ?? "50%") };
      }
      return { x: xe(n.x), y: xe(n.y) };
    },
    Kc = {
      DEFAULT_STAGGER_MS: Qe,
      computeMouseFollowSmoothingMs: To,
      getChainOrder: bo,
      parseAnchor: wo,
      parseAnchorAxis: xe,
      staggerEachToMs: Wn,
    };
  function Zc(n, e, t, r) {
    if (!t.length) return;
    let o = r?.animation;
    if (!o?.hasGsap()) return;
    let i =
        typeof window < "u" &&
        typeof window.matchMedia == "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      s = e,
      a = s?.leaveBehavior ?? "return",
      l = s?.onEnter ?? "animate",
      c = r?.timelineRole,
      u = c === "mouseX" ? "x" : c === "mouseY" ? "y" : s?.axis ?? "x",
      d = u,
      f = s?.followMode;
    if (
      f != null &&
      f !== "full" &&
      f !== (0, zn.getSingleAxisMouseFollowMode)(u)
    )
      return;
    let p = wo(s?.anchor),
      h = u === "x" ? p.x : p.y,
      g = t.map((I) => o.getProperty(I, d)),
      m = t.map((I) => o.quickSetter(I, d, "px"));
    if (m.some((I) => I == null)) return;
    let y = m,
      C = (0, Ze.initScrollCache)(),
      b = t.map((I) => {
        let x = I.getBoundingClientRect();
        return u === "x"
          ? x.left + x.width * h
          : x.top + x.height * h + (0, Ze.getScrollY)();
      }),
      w = n.timing?.stagger,
      S = t.length,
      M = To(w, S),
      T = w?.from,
      E = bo(
        S,
        typeof T == "number" ||
          T === "start" ||
          T === "center" ||
          T === "edges" ||
          T === "end" ||
          T === "random"
          ? T
          : "end",
        s?.groupId ?? s?.syncedActionId
      );
    if (E.length === 0) return;
    let R = new Float64Array(S),
      P = E[0],
      O = { value: b[P] ?? 0 },
      _ = null,
      V = !1,
      J = 0,
      U = null,
      N = !1,
      $ = null,
      q = performance.now(),
      H = 0,
      fe = () => {
        let I = performance.now(),
          x = Math.min(I - q, 100);
        q = I;
        let B = 1 - Math.exp(-x / M),
          L = !1;
        for (let D = 0; D < E.length; D++) {
          let F = E[D],
            pe;
          if (D === 0) pe = O.value;
          else {
            let Xr = E[D - 1];
            pe = b[Xr] + R[Xr];
          }
          let Yr = pe - b[F],
            pt = Yr - R[F];
          Math.abs(pt) > Wc
            ? ((R[F] = R[F] + pt * B), y[F](R[F]), (L = !0))
            : pt !== 0 && ((R[F] = Yr), y[F](R[F]));
        }
        _?.isActive() && (L = !0), L || K();
      },
      K = () => {
        N && ($?.(), ($ = null), (N = !1));
      },
      zr = (I) => {
        _?.kill(), (_ = null), (H = 0), (O.value = I);
        for (let x = 0; x < E.length; x++) {
          let B = E[x],
            L = I - b[B];
          (R[B] = L), y[B](L);
        }
        K();
      },
      Os = () => {
        _?.kill(), (_ = null), (H = 0), (O.value = b[P] ?? 0);
        for (let I = 0; I < E.length; I++) {
          let x = E[I];
          (R[x] = 0), y[x](0);
        }
        K();
      },
      ee = () => {
        N || ((q = performance.now()), ($ = o.addTicker(fe)), (N = !0));
      },
      xs = (I, x) => {
        (U = I),
          (J = x
            ? u === "x"
              ? window.innerWidth
              : window.innerHeight
            : u === "x"
            ? I.offsetWidth
            : I.offsetHeight);
      },
      Ps = (I) => {
        U || xs(I.triggerEl, I.isViewport);
        let x = u === "x" ? I.x : I.y + (0, Ze.getScrollY)();
        if (i) {
          (V = !0), zr(x);
          return;
        }
        if (V)
          if (_) {
            let B = Math.max(H - performance.now(), 50);
            _.kill();
            let L = o.to(O, {
              value: x,
              duration: B / 1e3,
              ease: "power2.out",
              onUpdate: ee,
              onComplete: () => {
                _ === L && ((_ = null), (H = 0));
              },
            });
            if (!L) {
              (O.value = x), ee();
              return;
            }
            _ = L;
          } else O.value = x;
        else {
          if (((V = !0), l === "snap")) {
            zr(x);
            return;
          }
          let B = Math.abs(x - O.value),
            D = 0.1 + Math.min(B / (J || 1), 1) * 0.5;
          (H = performance.now() + D * 1e3), _?.kill();
          let F = o.to(O, {
            value: x,
            duration: D,
            ease: "power2.out",
            onUpdate: ee,
            onComplete: () => {
              _ === F && ((_ = null), (H = 0));
            },
          });
          if (!F) {
            (O.value = x), ee();
            return;
          }
          _ = F;
        }
        ee();
      },
      ks = () => {
        if (((V = !1), a === "stay")) {
          ee();
          return;
        }
        if (i) {
          Os();
          return;
        }
        let I = b[P] ?? 0,
          x = Math.abs(O.value - I),
          L = 0.1 + Math.min(x / (J || 1), 1) * 0.5;
        _?.kill();
        let D = o.to(O, {
          value: I,
          duration: L,
          ease: "power2.out",
          onUpdate: ee,
          onComplete: () => {
            _ === D && (_ = null);
          },
        });
        if (!D) {
          (O.value = I), ee();
          return;
        }
        _ = D;
      },
      Fs = r?.subscribeChannel?.(zn.MOUSE_MOVE_CHANNELS.POSITION, Ps),
      Ns = r?.subscribeChannel?.(zn.MOUSE_MOVE_CHANNELS.LEAVE, ks),
      Wr = new AbortController(),
      { signal: Ls } = Wr,
      ft = 0,
      Ds = () => {
        clearTimeout(ft),
          (ft = window.setTimeout(() => {
            U && (J = u === "x" ? U.offsetWidth : U.offsetHeight);
            for (let I = 0; I < t.length; I++) {
              let x = t[I],
                B = o.getProperty(x, d),
                L = typeof B == "number" ? B : parseFloat(String(B)),
                D = Number.isFinite(L) ? L : 0,
                F = x.getBoundingClientRect(),
                pe = u === "x" ? F.left + F.width * h : F.top + F.height * h;
              (b[I] = u === "x" ? pe - D : pe - D + (0, Ze.getScrollY)()),
                (R[I] = D);
            }
            if (!V) {
              let I = b[P];
              I !== void 0 &&
                (_?.isActive() && (_.kill(), (_ = null)), (O.value = I));
            }
          }, 250));
      };
    return (
      window.addEventListener("resize", Ds, { signal: Ls }),
      () => {
        _?.kill(), K(), clearTimeout(ft), Wr.abort(), Fs?.(), Ns?.(), C();
        for (let I = 0; I < t.length; I++) o.set(t[I], { [d]: g[I] });
      }
    );
  }
  function Qc(n) {
    n.addAction("mouse-follow", {
      requiresTriggerElementContext: !0,
      createCustomTween: (e, t, r, o, i, s, a) => Zc(t, r, i, a),
    });
  }
});
var Io = v((Zn) => {
  "use strict";
  Object.defineProperty(Zn, "__esModule", { value: !0 });
  function Jc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Jc(Zn, {
    applyAdditive: function () {
      return ou;
    },
    formatRandom: function () {
      return Kn;
    },
    formatRandomArray: function () {
      return Co;
    },
    isAdditiveValue: function () {
      return eu;
    },
    isRandomArrayValue: function () {
      return tu;
    },
    isRandomValue: function () {
      return Xn;
    },
    makeClamp: function () {
      return su;
    },
    makeRandomArrayPicker: function () {
      return iu;
    },
    makeRandomPicker: function () {
      return ru;
    },
  });
  function Xn(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random" &&
      typeof e.min == "number" &&
      typeof e.max == "number" &&
      (e.step === void 0 || typeof e.step == "number") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function eu(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-additive" &&
      (typeof e.value == "number" || Xn(e.value)) &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function tu(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random-array" &&
      Array.isArray(e.values) &&
      e.values.every((t) => typeof t == "number" || typeof t == "string") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function Kn(n, e) {
    let t = n.unit ?? e ?? "",
      r = n.step != null ? `, ${n.step}` : "";
    return `random(${n.min}, ${n.max}${r})${t}`;
  }
  function Co(n, e) {
    let t = n.unit ?? e ?? "";
    return `random([${n.values.join(", ")}])${t}`;
  }
  function Eo(n) {
    let [e = "", t] = String(n).split("e"),
      r = (e.split(".")[1] || "").length;
    return t === void 0 ? r : Math.max(0, r - Number(t));
  }
  function nu(n, e) {
    if (n <= 1) return 0;
    if (e === void 0) return Math.floor(Math.random() * n);
    let t = Math.floor(Math.random() * (n - 1));
    return t < e ? t : t + 1;
  }
  function Mo(n, e, t) {
    let r = new WeakMap(),
      o = (i, s) => {
        let a = nu(n, r.get(s));
        return r.set(s, a), e(a);
      };
    return (o.legacyExpression = t), o;
  }
  function ru(n) {
    let e = n.unit ?? "",
      t = (u) => (e ? `${u}${e}` : u),
      r = Kn(n);
    if (!n.step) {
      let { min: u, max: d } = n,
        f = (p, h) => t(u + Math.random() * (d - u));
      return (f.legacyExpression = r), f;
    }
    let o = Math.abs(n.step),
      i = Math.min(n.min, n.max),
      s = Math.max(n.min, n.max),
      a = Math.round((s - i) / o),
      l = Math.max(Eo(i), Eo(o)),
      c = 10 ** l;
    return Mo(
      a + 1,
      (u) => {
        let d = i + u * o,
          f = l ? Math.round(d * c) / c : d;
        return t(Math.min(s, Math.max(i, f)));
      },
      r
    );
  }
  function iu(n) {
    let e = n.unit ?? "",
      t = [...new Set(n.values)];
    return Mo(
      t.length,
      (r) => {
        let o = t[r] ?? 0;
        return typeof o == "number" && e ? `${o}${e}` : o;
      },
      Co(n)
    );
  }
  function ou(n, e) {
    let t = n.unit ?? e ?? "";
    return Xn(n.value) ? `+=${Kn(n.value, t)}` : `+=${n.value}${t}`;
  }
  function su(n, e) {
    let t = (r) => (r < n ? n : r > e ? e : r);
    return (r) => {
      if (typeof r == "number") return t(r);
      let o = parseFloat(r);
      if (Number.isNaN(o)) return r;
      let i = t(o);
      return i === o
        ? r
        : `${i}${r.replace(/^\s*[+-]?[\d.]+(?:e[+-]?\d+)?/i, "")}`;
    };
  }
});
var Oo = v((Qn) => {
  "use strict";
  Object.defineProperty(Qn, "__esModule", { value: !0 });
  Object.defineProperty(Qn, "build", {
    enumerable: !0,
    get: function () {
      return du;
    },
  });
  var Pe = Te(),
    au = So(),
    k = Io();
  function Ao(n, e) {
    return e != null && typeof n == "string" && n.startsWith("var(")
      ? (0, Pe.resolveToString)(n, e) ?? n
      : n;
  }
  var Ro = new Set(["opacity", "autoAlpha"]),
    lu = new Set(["scale", "scaleX", "scaleY", "z", "transformPerspective"]),
    cu = new Set(["xPercent", "yPercent"]),
    _o = new Set(["width", "height"]);
  function Je(n) {
    return n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(");
  }
  function uu(n) {
    if (Ro.has(n)) return (0, k.makeClamp)(0, 1);
    if (lu.has(n) || _o.has(n)) return (0, k.makeClamp)(0, Number.MAX_VALUE);
  }
  function et(n) {
    return (
      (0, k.isRandomValue)(n) ||
      (0, k.isAdditiveValue)(n) ||
      (0, k.isRandomArrayValue)(n)
    );
  }
  function tt(n, e) {
    let t = Ro.has(n) ? 100 : 1,
      r = t !== 1 || cu.has(n),
      o = (i) => ({
        type: "ix3-random",
        min: i.min / t,
        max: i.max / t,
        step: i.step != null ? i.step / t : void 0,
      });
    if ((0, k.isRandomArrayValue)(e)) {
      let i = r
        ? {
            type: "ix3-random-array",
            values: e.values.map((s) => (typeof s == "number" ? s / t : s)),
          }
        : e;
      return (0, k.makeRandomArrayPicker)(i);
    }
    if ((0, k.isRandomValue)(e)) return (0, k.makeRandomPicker)(r ? o(e) : e);
    if (r) {
      let i = (0, k.isRandomValue)(e.value) ? o(e.value) : e.value / t;
      return (0, k.applyAdditive)({ type: "ix3-additive", value: i });
    }
    return (0, k.applyAdditive)(e);
  }
  function du(n) {
    (0, au.buildMouseFollowAction)(n),
      n
        .addAction("class", {
          createCustomTween: (e, t, r, o, i, s) => {
            let a = r.class,
              l = a?.selectors || [],
              c = a?.operation,
              u = l
                ? i.map((f) => ({ element: f, classList: [...f.classList] }))
                : [],
              d = () => {
                if (!(!c || !l))
                  for (let f of i)
                    c === "addClass"
                      ? l.forEach((p) => f.classList.add(p))
                      : c === "removeClass"
                      ? l.forEach((p) => f.classList.remove(p))
                      : c === "toggleClass" &&
                        l.forEach((p) => f.classList.toggle(p));
              };
            return (
              e.to(
                {},
                { duration: 0.001, onComplete: d, onReverseComplete: d },
                !s || s === 0 ? 0.001 : s
              ),
              () => {
                if (l) {
                  for (let f of u)
                    if (
                      f.element &&
                      (f.element instanceof HTMLElement &&
                        (f.element.className = ""),
                      f.element.classList)
                    )
                      for (let p of f.classList) f.element.classList.add(p);
                }
              }
            );
          },
        })
        .addAction("style", {
          createTweenConfig: (e, t) => {
            let r = { to: {}, from: {} },
              o = t?.[0];
            for (let i in e) {
              let s = e[i],
                a = Array.isArray(s) ? s[1] : s,
                l = Array.isArray(s) ? s[0] : void 0,
                c = et(a) ? tt(i, a) : Ao(a, o),
                u = et(l) ? tt(i, l) : l !== void 0 ? Ao(l, o) : void 0;
              c != null && (r.to[i] = c),
                u != null && !(0, k.isAdditiveValue)(a) && (r.from[i] = u),
                _o.has(i) &&
                  (et(a) || et(l)) &&
                  (r.modifiers || (r.modifiers = {}),
                  (r.modifiers[i] = (0, k.makeClamp)(0, Number.MAX_VALUE)));
            }
            return r;
          },
        })
        .addAction("transform", {
          createTweenConfig: (e, t) => {
            let r = { to: {}, from: {} },
              o = t?.[0];
            for (let i in e) {
              let s = e[i],
                a = Array.isArray(s) ? s[1] : s,
                l = Array.isArray(s) ? s[0] : void 0,
                c = (0, k.isAdditiveValue)(a),
                u =
                  (0, k.isRandomValue)(a) || (0, k.isRandomArrayValue)(a) || c,
                d =
                  (0, k.isRandomValue)(l) ||
                  (0, k.isRandomArrayValue)(l) ||
                  (0, k.isAdditiveValue)(l);
              if (u || d) {
                let f = uu(i);
                f &&
                  (r.modifiers || (r.modifiers = {}),
                  (r.modifiers[i] = f),
                  i === "autoAlpha" && (r.modifiers.opacity = f),
                  i === "scale" &&
                    ((r.modifiers.scaleX = f), (r.modifiers.scaleY = f))),
                  u && (a = tt(i, a)),
                  d && (l = tt(i, l));
              }
              switch (i) {
                case "autoAlpha":
                case "opacity": {
                  if (a != null && typeof a == "string" && !Je(a)) {
                    let f = o ? (0, Pe.resolveToNumber)(a, o) : parseFloat(a);
                    a = f !== void 0 ? f / 100 : a;
                  }
                  if (l != null && typeof l == "string" && !Je(l)) {
                    let f = o ? (0, Pe.resolveToNumber)(l, o) : parseFloat(l);
                    l = f !== void 0 ? f / 100 : l;
                  }
                  break;
                }
                case "transformOrigin": {
                  typeof s == "string"
                    ? ((a = a || s), (l = a))
                    : typeof l == "string"
                    ? (a = l)
                    : typeof a == "string" && (l = a);
                  break;
                }
                case "xPercent":
                case "yPercent": {
                  if (a != null && typeof a == "string" && !Je(a)) {
                    let f = o ? (0, Pe.resolveToNumber)(a, o) : parseFloat(a);
                    a = f !== void 0 ? f : a;
                  }
                  if (l != null && typeof l == "string" && !Je(l)) {
                    let f = o ? (0, Pe.resolveToNumber)(l, o) : parseFloat(l);
                    l = f !== void 0 ? f : l;
                  }
                  break;
                }
              }
              a != null && (r.to[i] = a), l != null && !c && (r.from[i] = l);
            }
            return r;
          },
        });
  }
});
var ko = v((Jn) => {
  "use strict";
  Object.defineProperty(Jn, "__esModule", { value: !0 });
  Object.defineProperty(Jn, "buildLottieAction", {
    enumerable: !0,
    get: function () {
      return pu;
    },
  });
  var fu = Te();
  function pu(n) {
    n.addAction("lottie", {
      createCustomTween: (e, t, r, o, i, s) => {
        let a = r.lottie;
        if (!a || !i.length || !window.Webflow) return;
        let l = window.Webflow.require?.("lottie");
        if (!l) return;
        let c = [],
          u = !1;
        for (let d of i) {
          let f = Po(a.from, d, xo.FROM),
            p = Po(a.to, d, xo.TO),
            h = l.createInstance(d);
          if (!h) continue;
          c.push(h);
          let g = () => {
            if (u) return;
            let m = h.frames,
              y = Math.round(f * m),
              C = Math.round(p * m);
            h.gsapFrame === null && (h.gsapFrame = y);
            let b = o;
            b.ease || (b = { ...b, ease: "none" }),
              e.fromTo(h, { gsapFrame: y }, { gsapFrame: C, ...b }, s || 0);
          };
          h.isLoaded ? g() : h.onDataReady(g);
        }
        return () => {
          u = !0;
          for (let d of c) d.goToFrameAndStop(0), (d.gsapFrame = null);
        };
      },
    });
  }
  var xo = { DURATION: 1, FROM: 0, TO: 1 };
  function Po(n, e, t) {
    if (typeof n == "number") return n;
    let r = (0, fu.resolveToNumber)(n, e);
    return r !== void 0 ? r / 100 : t;
  }
});
var tr = v((er) => {
  "use strict";
  Object.defineProperty(er, "__esModule", { value: !0 });
  Object.defineProperty(er, "RIVE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return hu;
    },
  });
  var hu = { MINIMUM_TIME: 0.001, MAX_BYTE_VALUE: 255 };
});
var ir = v((rr) => {
  "use strict";
  Object.defineProperty(rr, "__esModule", { value: !0 });
  function gu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  gu(rr, {
    clearSurfaceCache: function () {
      return mu;
    },
    surfaceCache: function () {
      return nr;
    },
  });
  var nr = new WeakMap();
  function mu(n, e) {
    if (!e) return;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = nr.get(n);
    r && (r.delete(t), r.size === 0 && nr.delete(n));
  }
});
var ke = v((or) => {
  "use strict";
  Object.defineProperty(or, "__esModule", { value: !0 });
  function yu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  yu(or, {
    parseVmKey: function () {
      return Tu;
    },
    vmKey: function () {
      return vu;
    },
  });
  function vu(n, e, t) {
    return `vm:${n}:${e}:${t}`;
  }
  var bu = new Set([
    "string",
    "number",
    "boolean",
    "color",
    "enum",
    "trigger",
    "artboard",
  ]);
  function Tu(n) {
    if (!n.startsWith("vm:")) return null;
    let e = n.lastIndexOf(":"),
      t = n.slice(e + 1);
    if (!bu.has(t)) return null;
    let r = n.slice(3, e),
      o = r.indexOf(":");
    return o === -1
      ? null
      : { vmName: r.slice(0, o), propName: r.slice(o + 1), propType: t };
  }
});
var nt = v((sr) => {
  "use strict";
  Object.defineProperty(sr, "__esModule", { value: !0 });
  function wu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  wu(sr, {
    getVmiProperty: function () {
      return Fo;
    },
    storeOriginalValues: function () {
      return Eu;
    },
  });
  var Su = ke();
  function Eu(n, e) {
    let t = { viewModelProperties: {} };
    for (let r of n) Cu(e, r.propertyName, r.propertyType, t);
    return t;
  }
  function Cu(n, e, t, r) {
    let o = (0, Su.vmKey)(n.name, e, t);
    if (!(o in r.viewModelProperties)) {
      if (t === "artboard") {
        let s = n.riveInstance.viewModelInstance?.artboard?.(e)?.name;
        s != null && (r.viewModelProperties[o] = s);
        return;
      }
      let i = n.riveInstance.viewModelInstance
        ? Mu(n.riveInstance.viewModelInstance, t, e)
        : null;
      i != null && (r.viewModelProperties[o] = i);
    }
  }
  function Fo(n, e, t) {
    switch (e) {
      case "number":
        return n.number(t);
      case "boolean":
        return n.boolean(t);
      case "string":
        return n.string(t);
      case "color":
        return n.color(t);
      case "enum":
        return n.enum(t);
      default:
        return null;
    }
  }
  function Mu(n, e, t) {
    let r = Fo(n, e, t);
    return r ? r.value : void 0;
  }
});
var lr = v((ar) => {
  "use strict";
  Object.defineProperty(ar, "__esModule", { value: !0 });
  Object.defineProperty(ar, "parseColorToAARRGGBB", {
    enumerable: !0,
    get: function () {
      return Au;
    },
  });
  var Iu = tr();
  function Au(n) {
    let e = n.trim();
    if (!e) return null;
    try {
      let { red: t, green: r, blue: o, alpha: i } = _u(e);
      return t === void 0 || r === void 0 || o === void 0
        ? null
        : ((Math.round(i * Iu.RIVE_CONSTANTS.MAX_BYTE_VALUE) << 24) |
            (t << 16) |
            (r << 8) |
            o) >>>
            0;
    } catch {
      return null;
    }
  }
  var ce = null;
  function Ru(n) {
    if (!ce) {
      let e = document.createElement("canvas");
      if (((e.width = 1), (e.height = 1), (ce = e.getContext("2d")), !ce))
        return null;
    }
    return (
      (ce.fillStyle = "#000000"),
      (ce.fillStyle = n),
      ce.fillStyle === "#000000" && n.toLowerCase() !== "black"
        ? null
        : ce.fillStyle
    );
  }
  function No(n, e, t) {
    let r = (1 - Math.abs(2 * t - 1)) * e,
      o = r * (1 - Math.abs(((n / 60) % 2) - 1)),
      i = t - r / 2,
      s,
      a,
      l;
    return (
      n >= 0 && n < 60
        ? ((s = r), (a = o), (l = 0))
        : n >= 60 && n < 120
        ? ((s = o), (a = r), (l = 0))
        : n >= 120 && n < 180
        ? ((s = 0), (a = r), (l = o))
        : n >= 180 && n < 240
        ? ((s = 0), (a = o), (l = r))
        : n >= 240 && n < 300
        ? ((s = o), (a = 0), (l = r))
        : ((s = r), (a = 0), (l = o)),
      {
        red: Math.round((s + i) * 255),
        green: Math.round((a + i) * 255),
        blue: Math.round((l + i) * 255),
      }
    );
  }
  function _u(n) {
    let e,
      t,
      r,
      o = 1,
      i = n.replace(/\s/g, "").toLowerCase(),
      s = i;
    if (!s.startsWith("#") && !s.startsWith("rgb") && !s.startsWith("hsl")) {
      let a = Ru(i);
      a && (s = a);
    }
    if (s.startsWith("#")) {
      let a = s.substring(1);
      a.length === 3 || a.length === 4
        ? ((e = parseInt(a.charAt(0) + a.charAt(0), 16)),
          (t = parseInt(a.charAt(1) + a.charAt(1), 16)),
          (r = parseInt(a.charAt(2) + a.charAt(2), 16)),
          a.length === 4 && (o = parseInt(a.charAt(3) + a.charAt(3), 16) / 255))
        : (a.length === 6 || a.length === 8) &&
          ((e = parseInt(a.substring(0, 2), 16)),
          (t = parseInt(a.substring(2, 4), 16)),
          (r = parseInt(a.substring(4, 6), 16)),
          a.length === 8 && (o = parseInt(a.substring(6, 8), 16) / 255));
    } else if (s.startsWith("rgba")) {
      let a = s.match(/rgba\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10)),
        (o = parseFloat(a?.[3] ?? ""));
    } else if (s.startsWith("rgb")) {
      let a = s.match(/rgb\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10));
    } else if (s.startsWith("hsla")) {
      let a = s.match(/hsla\(([^)]+)\)/)?.[1]?.split(","),
        l = parseFloat(a?.[0] ?? ""),
        c = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      (o = parseFloat(a?.[3] ?? "")),
        ({ red: e, green: t, blue: r } = No(l, c, u));
    } else if (s.startsWith("hsl")) {
      let a = s.match(/hsl\(([^)]+)\)/)?.[1]?.split(","),
        l = parseFloat(a?.[0] ?? ""),
        c = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      ({ red: e, green: t, blue: r } = No(l, c, u));
    }
    if (
      Number.isNaN(e) ||
      Number.isNaN(t) ||
      Number.isNaN(r) ||
      Number.isNaN(o)
    )
      throw new Error(`Invalid color value: '${n}'`);
    return { red: e, green: t, blue: r, alpha: o };
  }
});
var ur = v((cr) => {
  "use strict";
  Object.defineProperty(cr, "__esModule", { value: !0 });
  Object.defineProperty(cr, "setVmiValue", {
    enumerable: !0,
    get: function () {
      return ku;
    },
  });
  var Ou = ke(),
    xu = nt(),
    Pu = lr();
  function ku(n, e, t, r, o, i) {
    let s = n.riveInstance.viewModelInstance;
    if (e === "trigger") {
      if (i) return;
      s?.trigger?.(t)?.fire?.();
      return;
    }
    if (!s) return;
    let a = (0, xu.getVmiProperty)(s, e, t);
    if (!a) return;
    let l = o?.viewModelProperties[(0, Ou.vmKey)(n.name, t, e)],
      c = i ? l ?? r : r,
      u = `${e}:${t}`;
    switch (e) {
      case "number":
        typeof c == "number" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "boolean":
        typeof c == "boolean" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "string":
        typeof c == "string" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "enum":
        typeof c == "string" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "color": {
        let d =
          typeof c == "number"
            ? c
            : typeof c == "string"
            ? (0, Pu.parseColorToAARRGGBB)(c)
            : null;
        d != null && ((a.value = d), (n.currentValues[u] = d));
        return;
      }
      default:
        return;
    }
  }
});
var Do = v((dr) => {
  "use strict";
  Object.defineProperty(dr, "__esModule", { value: !0 });
  function Fu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Fu(dr, {
    createCleanupFunction: function () {
      return ju;
    },
    restoreViewModelProperties: function () {
      return Lo;
    },
  });
  var Nu = ke(),
    Lu = ur(),
    Du = ir();
  function Lo(n, e, t) {
    let r = n.viewModelInstance ?? null;
    if (r)
      for (let [o, i] of Object.entries(t.viewModelProperties)) {
        let s = (0, Nu.parseVmKey)(o);
        if (!s || s.vmName !== e) continue;
        let a = { name: e, riveInstance: n, currentValues: {} };
        if (s.propType === "artboard") {
          if (typeof i != "string") continue;
          let l = r.artboard?.(s.propName),
            c = n.getArtboard?.(i);
          l && c && (l.value = c);
          continue;
        }
        (0, Lu.setVmiValue)(a, s.propType, s.propName, i);
      }
  }
  function ju(n, e, t) {
    return () => {
      !e || !n || (Lo(n, e.name, t), (0, Du.clearSurfaceCache)(n, e));
    };
  }
});
var Bo = v((fr) => {
  "use strict";
  Object.defineProperty(fr, "__esModule", { value: !0 });
  function Vu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Vu(fr, {
    interpolateAARRGGBB: function () {
      return Vo;
    },
    setupAnimateTimeline: function () {
      return Uu;
    },
  });
  var Bu = nt(),
    Gu = lr(),
    jo = Te();
  function Vo(n, e, t) {
    let r = (n >>> 24) & 255,
      o = (n >>> 16) & 255,
      i = (n >>> 8) & 255,
      s = n & 255,
      a = (e >>> 24) & 255,
      l = (e >>> 16) & 255,
      c = (e >>> 8) & 255,
      u = e & 255,
      d = Math.round(r + (a - r) * t),
      f = Math.round(o + (l - o) * t),
      p = Math.round(i + (c - i) * t),
      h = Math.round(s + (u - s) * t);
    return ((d << 24) | (f << 16) | (p << 8) | h) >>> 0;
  }
  function Uu(n, e, t, r, o, i) {
    if (t.length === 0) return;
    let s = e.riveInstance.viewModelInstance;
    if (s)
      for (let a of t) {
        if (
          a.value === null ||
          a.value === void 0 ||
          !(0, Bu.getVmiProperty)(s, a.propertyType, a.propertyName)
        )
          continue;
        let c,
          u = a.value;
        if (typeof u == "string" && u.startsWith("var(")) {
          if (
            (a.propertyType === "number"
              ? (c = (0, jo.resolveToNumber)(u, i))
              : a.propertyType === "color" &&
                (c = (0, jo.resolveToString)(u, i)),
            c === void 0)
          )
            continue;
        } else c = u;
        a.propertyType === "number"
          ? $u(e, n, a.propertyName, c, r, o)
          : a.propertyType === "color" && qu(e, n, a.propertyName, c, r, o);
      }
  }
  function $u(n, e, t, r, o, i) {
    let s = n.riveInstance.viewModelInstance;
    if (!s) return;
    let a = s.number(t);
    if (!a) return;
    let l = typeof r == "number" ? r : parseFloat(String(r));
    if (isNaN(l)) return;
    let c = { v: a.value };
    e.to(
      c,
      {
        ...o,
        v: l,
        onStart() {
          let u = n.currentValues[`number:${t}`];
          (c.v = typeof u == "number" ? u : a.value), this.invalidate();
        },
        onUpdate: () => {
          a.value = c.v;
        },
      },
      i ?? 0
    );
  }
  function qu(n, e, t, r, o, i) {
    let s = n.riveInstance.viewModelInstance;
    if (!s) return;
    let a = s.color(t);
    if (!a) return;
    let l = typeof r == "number" ? r : (0, Gu.parseColorToAARRGGBB)(String(r));
    if (l == null) return;
    let c = { fromPacked: a.value },
      u = { t: 0 };
    e.fromTo(
      u,
      { t: 0 },
      {
        ...o,
        t: 1,
        onStart() {
          let d = n.currentValues[`color:${t}`];
          (c.fromPacked = typeof d == "number" ? d : a.value),
            this.invalidate();
        },
        onUpdate: () => {
          a.value = Vo(c.fromPacked, l, u.t);
        },
      },
      i ?? 0
    );
  }
});
var Ho = v((gr) => {
  "use strict";
  Object.defineProperty(gr, "__esModule", { value: !0 });
  function Hu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hu(gr, {
    resolveSurfaceArea: function () {
      return hr;
    },
    setupAnimateAnimation: function () {
      return Zu;
    },
    setupAnimation: function () {
      return Ku;
    },
    setupTimeline: function () {
      return qo;
    },
  });
  var Go = tr(),
    pr = ir(),
    Uo = nt(),
    $o = Do(),
    zu = ur(),
    Wu = Bo(),
    Yu = ke(),
    rt = Te();
  function hr(n, e) {
    if (!e) return null;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = pr.surfaceCache.get(n)?.get(t);
    if (r) return r;
    let i =
      (n.viewModelByName?.(e.name) ?? void 0)?.instanceByName?.(
        e.instanceName ?? ""
      ) ?? null;
    n.bindViewModelInstance?.(i);
    let s = { name: e.name, riveInstance: n, currentValues: {} },
      a = pr.surfaceCache.get(n);
    return a || ((a = new Map()), pr.surfaceCache.set(n, a)), a.set(t, s), s;
  }
  function qo(n, e, t, r, o, i) {
    if (t.length === 0) return;
    for (let l of t) {
      if (
        l.propertyType === "trigger" ||
        l.propertyType === "artboard" ||
        l.value === null ||
        l.value === void 0
      )
        continue;
      let c = l.value,
        u;
      typeof c == "string" && c.startsWith("var(")
        ? (u =
            l.propertyType === "number"
              ? (0, rt.resolveToNumber)(c, i)
              : l.propertyType === "color"
              ? (0, rt.resolveToString)(c, i)
              : void 0)
        : (u = c),
        u !== void 0 &&
          (e.currentValues[`${l.propertyType}:${l.propertyName}`] = u);
    }
    let s = (l) => {
        for (let c of t) {
          if (
            (c.propertyType !== "trigger" && c.value === null) ||
            c.value === void 0
          )
            continue;
          let u,
            d = c.value;
          if (typeof d == "string" && d.startsWith("var(")) {
            if (
              (c.propertyType === "number"
                ? (u = (0, rt.resolveToNumber)(d, i))
                : c.propertyType === "color" &&
                  (u = (0, rt.resolveToString)(d, i)),
              u === void 0)
            )
              continue;
          } else u = d;
          Xu(e, c.propertyName, c.propertyType, u, r, l);
        }
      },
      a = { int: 0 };
    n.to(
      a,
      {
        int: 1,
        duration: Go.RIVE_CONSTANTS.MINIMUM_TIME,
        onStart: () => {
          s(!1);
        },
        onReverseComplete: () => {
          s(!0);
        },
      },
      o ?? Go.RIVE_CONSTANTS.MINIMUM_TIME
    );
  }
  function Xu(n, e, t, r, o, i) {
    if (t === "artboard") {
      if (typeof r != "string") return;
      let s = n.riveInstance.viewModelInstance?.artboard?.(e);
      if (!s) return;
      if (i) {
        let l = (0, Yu.vmKey)(n.name, e, t),
          c = o?.viewModelProperties[l];
        if (typeof c == "string") {
          let u = n.riveInstance.getArtboard?.(c);
          u && (s.value = u);
        }
        return;
      }
      let a = n.riveInstance.getArtboard?.(r);
      if (!a) return;
      s.value = a;
      return;
    }
    (0, zu.setVmiValue)(n, t, e, r, o, i);
  }
  function Ku(n, e, t, r, o) {
    let i = e.animationSource,
      s = hr(n, i);
    if (!s) return;
    let a = e.addedProperties ?? {},
      l = Object.values(a),
      c = (0, Uo.storeOriginalValues)(l, s);
    return qo(t, s, l, c, r, o), (0, $o.createCleanupFunction)(n, i, c);
  }
  function Zu(n, e, t, r, o, i) {
    let s = e.animationSource,
      a = hr(n, s);
    if (!a) return;
    let l = e.addedProperties ?? {},
      c = Object.values(l),
      u = (0, Uo.storeOriginalValues)(c, a);
    return (
      (0, Wu.setupAnimateTimeline)(t, a, c, r, o, i),
      (0, $o.createCleanupFunction)(n, s, u)
    );
  }
});
var Zo = v((mr) => {
  "use strict";
  Object.defineProperty(mr, "__esModule", { value: !0 });
  function Qu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Qu(mr, {
    buildAnimateRiveAction: function () {
      return td;
    },
    buildRiveAction: function () {
      return ed;
    },
  });
  var Yo = Ho();
  function zo(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      "loaded" in n &&
      typeof n.loaded == "boolean"
    );
  }
  function Wo(n) {
    !n.isPlaying && n.play && n.play();
  }
  function Ju(n, e, t) {
    let o = e.getInstance(n)?.rive,
      i = zo(o) ? o : null;
    if (i?.loaded) return Wo(i), t(i, n);
    let s,
      a = !1,
      l = () => {
        if (a || !n.isConnected) return;
        let u = e.getInstance(n)?.rive,
          d = zo(u) ? u : null;
        d?.loaded && (Wo(d), (s = t(d, n))),
          n.removeEventListener("w-rive-load", l);
      };
    return (
      n.addEventListener("w-rive-load", l),
      () => {
        (a = !0), n.removeEventListener("w-rive-load", l), s?.();
      }
    );
  }
  function Xo(n, e, t) {
    let r = [];
    for (let o of n) {
      let i = Ju(o, e, t);
      i && r.push(i);
    }
    if (r.length !== 0)
      return () => {
        for (let o of r) o();
      };
  }
  function Ko() {
    return window.Webflow ? window.Webflow.require?.("rive") ?? null : null;
  }
  function ed(n) {
    n.addAction("rive", {
      createCustomTween: (e, t, r, o, i, s) => {
        let a = r.rive;
        if (!a || !i.length) return;
        let l = Ko();
        if (l) return Xo(i, l, (c, u) => (0, Yo.setupAnimation)(c, a, e, s, u));
      },
    });
  }
  function td(n) {
    n.addAction("animate-rive", {
      createCustomTween: (e, t, r, o, i, s) => {
        let a = r.rive;
        if (!a || !i.length) return;
        let l = Ko();
        if (l)
          return Xo(i, l, (c, u) =>
            (0, Yo.setupAnimateAnimation)(c, a, e, o, s, u)
          );
      },
    });
  }
});
var ue = v((yr) => {
  "use strict";
  Object.defineProperty(yr, "__esModule", { value: !0 });
  function nd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  nd(yr, {
    checkTt: function () {
      return ad;
    },
    hasBBoxUpdate: function () {
      return od;
    },
    hasIntensity: function () {
      return rd;
    },
    hasMatrixUpdate: function () {
      return sd;
    },
    hasRenderOrder: function () {
      return id;
    },
  });
  var it = W(),
    rd = (n) => "intensity" in n,
    id = (n) => "renderOrder" in n,
    od = (n) => "singleBBoxNeedsUpdate" in n && "recursiveBBoxNeedsUpdate" in n,
    sd = (n) => "updateMatrix" in n && "updateMatrixWorld" in n,
    ad = (n, e) =>
      e === "from"
        ? n === it.TweenType.From || n === it.TweenType.FromTo
        : n === it.TweenType.To || n === it.TweenType.FromTo;
});
var br = v((vr) => {
  "use strict";
  Object.defineProperty(vr, "__esModule", { value: !0 });
  Object.defineProperty(vr, "colorDataToCss", {
    enumerable: !0,
    get: function () {
      return ld;
    },
  });
  var ld = ({ r: n, g: e, b: t, a: r }) => {
    let o = (c) => Math.round(Math.min(1, Math.max(0, c)) * 255),
      i = o(n),
      s = o(e),
      a = o(t);
    if (r === void 0 || r >= 1) return `rgba(${i}, ${s}, ${a}, 1)`;
    let l = Math.min(1, Math.max(0, r));
    return `rgba(${i}, ${s}, ${a}, ${l})`;
  };
});
var Qo = v((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  Object.defineProperty(Tr, "storeOriginalState", {
    enumerable: !0,
    get: function () {
      return dd;
    },
  });
  var cd = ue(),
    ud = br(),
    dd = (n, e, t) => {
      let r = n.material,
        o = Array.isArray(r) ? r : r ? [r] : [],
        i = e.spline._scene.entityByUuid[t]?.color,
        s = i ? (0, ud.colorDataToCss)(i) : void 0,
        a = n.rotation;
      return {
        position: { ...n.position },
        rotation: { x: a._x ?? 0, y: a._y ?? 0, z: a._z ?? 0 },
        scale: { ...n.scale },
        ...(s ? { color: s } : {}),
        intensity: n.intensity,
        renderOrder: (0, cd.hasRenderOrder)(n) ? n.renderOrder : void 0,
        materials: o?.map((l) => ({
          transparent: l.transparent,
          depthWrite: l.depthWrite,
          alpha: l.alpha,
          layers: (l.layers ?? []).map((c) => ({
            visible: c.visible,
            alpha: c.alpha,
            alphaOverride: c.alphaOverride,
            ior: c.ior,
            thickness: c.thickness,
          })),
        })),
      };
    };
});
var Fe = v((wr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: !0 });
  Object.defineProperty(wr, "SPLINE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return fd;
    },
  });
  var fd = {
    OPACITY_RENDER_ORDER: 999,
    TRANSITION_END_OFFSET: 0.001,
    DEFAULT_TRANSITION_DURATION: 0.5,
    OPACITY_TRANSPARENCY_THRESHOLD: 0.01,
    DEFAULT_TRANSMISSION_IOR: 1.3,
    DEFAULT_TRANSMISSION_THICKNESS: 10,
    MIN_ZOOM_VALUE: 1e-4,
  };
});
var ot = v((Sr) => {
  "use strict";
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  function pd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  pd(Sr, {
    getAppZoom: function () {
      return gd;
    },
    setAppZoom: function () {
      return md;
    },
  });
  var hd = Fe(),
    gd = (n) => {
      let e = n._camera;
      return e._cameraType === "OrthographicCamera"
        ? e.orthoCamera.zoom
        : e.perspCamera.zoom;
    },
    md = (n, e) => {
      let t = e > 0 ? e : hd.SPLINE_CONSTANTS.MIN_ZOOM_VALUE;
      n.setZoom?.(t);
    };
});
var Cr = v((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: !0 });
  Object.defineProperty(Er, "createCleanupFunction", {
    enumerable: !0,
    get: function () {
      return vd;
    },
  });
  var yd = ot(),
    st = ue(),
    vd = (n, e, t, r, o, i) => () => {
      if (!(!n || !t)) {
        if (
          (i && (n.state = void 0),
          Object.assign(n.position, t.position),
          Object.assign(n.rotation, {
            x: t.rotation.x,
            y: t.rotation.y,
            z: t.rotation.z,
          }),
          Object.assign(n.scale, t.scale),
          t.color && (n.color = t.color),
          r.spline?.intensity &&
            typeof r.spline.intensity == "object" &&
            t.intensity !== void 0 &&
            (0, st.hasIntensity)(n) &&
            (n.intensity = t.intensity),
          r.spline?.zoom && typeof r.spline.zoom == "object")
        ) {
          let s = e.spline;
          typeof s?.setZoom == "function" && (0, yd.setAppZoom)(s, o ?? 1);
        }
        if (t.materials) {
          let s = n.material,
            a = Array.isArray(s) ? s : s ? [s] : [];
          (0, st.hasRenderOrder)(n) && (n.renderOrder = t.renderOrder ?? 0);
          let l = Math.min(a.length, t.materials.length);
          for (let c = 0; c < l; c++) {
            let u = a[c],
              d = t.materials[c];
            if (!u || !d) continue;
            (u.transparent = d.transparent),
              (u.depthWrite = d.depthWrite),
              d.alpha !== void 0 && (u.alpha = d.alpha);
            let f = u.layers ?? [];
            for (let p = 0; p < f.length; p++) {
              let h = f[p],
                g = d.layers[p];
              !h ||
                !g ||
                ((h.visible = g.visible),
                g.alpha !== void 0 && (h.alpha = g.alpha),
                g.alphaOverride !== void 0 &&
                  (h.alphaOverride = g.alphaOverride),
                g.ior !== void 0 && (h.ior = g.ior),
                g.thickness !== void 0 && (h.thickness = g.thickness));
            }
          }
        }
        (0, st.hasMatrixUpdate)(n) &&
          (n.updateMatrix(), n.updateMatrixWorld(!0)),
          (0, st.hasBBoxUpdate)(n) &&
            ((n.singleBBoxNeedsUpdate = !0), (n.recursiveBBoxNeedsUpdate = !0)),
          e.spline.requestRender();
      }
    };
});
var Jo = v((Mr) => {
  "use strict";
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  function bd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  bd(Mr, {
    warnNoObjectId: function () {
      return Td;
    },
    warnNoObjectsFound: function () {
      return Sd;
    },
    warnObjectNotFound: function () {
      return wd;
    },
  });
  var Td = () => {},
    wd = (n) => {},
    Sd = (n) => {};
});
var ns = v((Ir) => {
  "use strict";
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  Object.defineProperty(Ir, "animateStateTransitions", {
    enumerable: !0,
    get: function () {
      return Cd;
    },
  });
  var es = Fe(),
    Ed = Cr(),
    ts = ue(),
    Cd = (n, e, t, r, o, i, s, a, l, c) => {
      let u = [];
      n.forEach((f) => {
        if (!f.transition) {
          u.push(null);
          return;
        }
        let p = l.duration ?? es.SPLINE_CONSTANTS.DEFAULT_TRANSITION_DURATION,
          h = f.transition({
            from:
              e.stateName?.from && (0, ts.checkTt)(a, "from")
                ? e.stateName.from
                : void 0,
            to:
              e.stateName?.to && (0, ts.checkTt)(a, "to")
                ? e.stateName.to
                : null,
            autoPlay: !1,
            duration: p,
            delay: 0,
          });
        u.push(h);
        let g = { time: 0 };
        s.fromTo(
          g,
          { time: 0 },
          {
            ...l,
            time: p - es.SPLINE_CONSTANTS.TRANSITION_END_OFFSET,
            onUpdate: () => {
              h.seek(g.time);
            },
          },
          c || 0
        );
      });
      let d = n.map((f, p) =>
        (0, Ed.createCleanupFunction)(f, t, r[p], o, i, u[p])
      );
      return () => d.forEach((f) => f?.());
    };
});
var is = v((Ar) => {
  "use strict";
  Object.defineProperty(Ar, "__esModule", { value: !0 });
  function Md(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Md(Ar, {
    animateColor: function () {
      return _d;
    },
    animateIntensity: function () {
      return Ad;
    },
    animateZoom: function () {
      return Rd;
    },
  });
  var rs = ot(),
    Id = br(),
    de = ue(),
    Ad = (n, e, t, r, o, i) => {
      let s = e.intensity;
      if (!s || typeof s != "object") return;
      let a = n.intensity ?? 0,
        l = s.from && (0, de.checkTt)(r, "from") ? s.from : a,
        c = s.to && (0, de.checkTt)(r, "to") ? s.to : a,
        u = { v: l };
      t.fromTo(
        u,
        { v: l },
        {
          ...o,
          v: c,
          onUpdate: () => {
            (0, de.hasIntensity)(n) && (n.intensity = u.v);
          },
        },
        i || 0
      );
    },
    Rd = (n, e, t, r, o, i) => {
      let s = e.zoom;
      if (!s || typeof s != "object" || typeof n.spline?.setZoom != "function")
        return;
      let a = (0, rs.getAppZoom)(n.spline),
        l = s.from && (0, de.checkTt)(r, "from") ? s.from : a,
        c = s.to && (0, de.checkTt)(r, "to") ? s.to : a,
        u = { v: l };
      t.fromTo(
        u,
        { v: l },
        {
          ...o,
          v: c,
          onUpdate: () => {
            (0, rs.setAppZoom)(n.spline, u.v);
          },
        },
        i || 0
      );
    },
    _d = (n, e, t, r, o, i, s, a) => {
      let l = e.color;
      if (!l || typeof l != "object" || (!l.from && !l.to)) return;
      let c = s.spline._scene.entityByUuid[a]?.color,
        u = (0, Id.colorDataToCss)(c ?? { r: 255, g: 255, b: 255 }),
        d = l.from && (0, de.checkTt)(r, "from") ? l.from : u,
        f = l.to && (0, de.checkTt)(r, "to") ? l.to : u,
        p = window.gsap.utils.interpolate(d, f),
        h = { t: 0 };
      t.fromTo(
        h,
        { t: 0 },
        {
          ...o,
          t: 1,
          onUpdate: function () {
            n.color = p(h.t);
          },
        },
        i || 0
      );
    };
});
var ss = v((Rr) => {
  "use strict";
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  function Od(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Od(Rr, {
    createPropertyObject: function () {
      return os;
    },
    createTransformTargets: function () {
      return xd;
    },
  });
  var os = (n, e, t) => {
      let r = {},
        o = t[e];
      return (
        ["X", "Y", "Z"].forEach((i) => {
          let s = `${e}${i}`,
            a = n[s],
            l = i.toLowerCase(),
            c = o[l];
          a &&
            typeof a == "object" &&
            (r[l] = { from: a.from ?? c, to: a.to ?? c });
        }),
        { props: r }
      );
    },
    xd = (n, e) => {
      let t = ["position", "rotation", "scale"],
        r = [];
      return (
        t.forEach((o) => {
          let { props: i } = os(e, o, n);
          Object.keys(i).length > 0 && r.push({ object: n[o], props: i });
        }),
        r
      );
    };
});
var as = v((Or) => {
  "use strict";
  Object.defineProperty(Or, "__esModule", { value: !0 });
  Object.defineProperty(Or, "fadeObject", {
    enumerable: !0,
    get: function () {
      return Ld;
    },
  });
  var at = Fe(),
    _r = ue(),
    Pd = (n, e, t, r, o, i) => {
      r.fromTo(n, { alpha: e }, { ...o, alpha: t }, i);
    },
    kd = (n, e, t, r, o, i) => {
      let s = n.ior ?? at.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_IOR,
        a = n.thickness ?? at.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_THICKNESS;
      r.fromTo(
        n,
        { alpha: e, ior: s, thickness: a },
        {
          ...o,
          alpha: 1 - t,
          ior: window.gsap.utils.interpolate(s, 1, 1 - t),
          thickness: window.gsap.utils.interpolate(a, 0, 1 - t),
          onUpdate: () => {
            n.visible =
              n.alpha > at.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD;
          },
        },
        i
      );
    },
    Fd = (n, e, t, r, o, i) => {
      n.alphaOverride !== void 0 &&
        r.fromTo(n, { alphaOverride: e }, { ...o, alphaOverride: t }, i);
    },
    Nd = (n, e, t, r, o, i) => {
      if (!n.visible) return;
      let s = n.type;
      s === "color" || s === "depth" || s === "outline"
        ? Pd(n, e, t, r, o, i)
        : s === "transmission"
        ? kd(n, e, t, r, o, i)
        : s === "light" && Fd(n, e, t, r, o, i);
    },
    Ld = (n, e, t, r, o, i) => {
      if (!n) return;
      let s = n.material,
        a = s?.layers;
      if (a) {
        (s.transparent = !0),
          (0, _r.hasRenderOrder)(n) &&
            (n.renderOrder = at.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
        for (let l of a) {
          let c = l.type === "light" ? l.alphaOverride ?? 1 : l.alpha ?? 1,
            u = e.from !== void 0 && (0, _r.checkTt)(r, "from") ? e.from : c,
            d = e.to !== void 0 && (0, _r.checkTt)(r, "to") ? e.to : c;
          Nd(l, u, d, t, o, i);
        }
      }
    };
});
var cs = v((kr) => {
  "use strict";
  Object.defineProperty(kr, "__esModule", { value: !0 });
  Object.defineProperty(kr, "setupAnimation", {
    enumerable: !0,
    get: function () {
      return $d;
    },
  });
  var Dd = Qo(),
    jd = Cr(),
    Vd = ot(),
    xr = Jo(),
    Bd = ns(),
    Pr = is(),
    Gd = ss(),
    Ud = as(),
    lt = ue(),
    ls = Fe(),
    $d = (n, e, t, r, o, i) => {
      t.ease || (t = { ...t, ease: "none" });
      let { force3D: s, ...a } = t;
      if (((t = { ...a }), !n.spline?.findObjectById)) return;
      let l = e.spline,
        c = (e.objectId || "").split(",").filter(Boolean);
      if (c.length === 0) {
        (0, xr.warnNoObjectId)();
        return;
      }
      let u = c.flatMap((g) => {
        let m = n.spline.findObjectById?.(g);
        return m || ((0, xr.warnObjectNotFound)(g), []);
      });
      if (u.length === 0) {
        (0, xr.warnNoObjectsFound)(c);
        return;
      }
      let d = u.map((g) => (0, Dd.storeOriginalState)(g, n, c[0] ?? "")),
        f = (0, Vd.getAppZoom)(n.spline);
      if (
        e.animatingState &&
        l?.stateName &&
        (l.stateName.from || l.stateName.to)
      )
        return (0, Bd.animateStateTransitions)(u, l, n, d, e, f, r, o, t, i);
      if (!l) return;
      let p = Object.keys(l);
      if (p.length === 0 || (p.length === 1 && p[0] === "stateName")) return;
      u.forEach((g) => {
        (0, Pr.animateIntensity)(g, l, r, o, t, i),
          (0, Pr.animateZoom)(n, l, r, o, t, i),
          (0, Pr.animateColor)(g, l, r, o, t, i, n, c[0] ?? "");
        let m = l.opacity && typeof l.opacity == "object" ? l.opacity : void 0;
        if (m !== void 0) {
          let C = {
              from: m.from !== void 0 ? m.from / 100 : void 0,
              to: m.to !== void 0 ? m.to / 100 : void 0,
            },
            b =
              t.immediateRender !== !1 &&
              C.from !== void 0 &&
              (0, lt.checkTt)(o, "from")
                ? C.from
                : void 0;
          if (((0, Ud.fadeObject)(g, C, r, o, t, i), b !== void 0)) {
            let w = g.material,
              S = Array.isArray(w) ? w : w ? [w] : [];
            for (let M of S)
              (M.transparent = !0),
                (M.depthWrite =
                  b > ls.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD);
            (0, lt.hasRenderOrder)(g) &&
              (g.renderOrder = ls.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
          }
        }
        (0, Gd.createTransformTargets)(g, l).forEach(
          ({ object: C, props: b }) => {
            if (Object.keys(b).length === 0) return;
            let w = {},
              S = {};
            Object.keys(b).forEach((M) => {
              let T = b[M];
              T &&
                typeof T == "object" &&
                ((w[M] =
                  (0, lt.checkTt)(o, "from") && T.from ? T.from : C[M] ?? 0),
                (S[M] = (0, lt.checkTt)(o, "to") && T.to ? T.to : C[M] ?? 0));
            }),
              !(Object.keys(w).length === 0 && Object.keys(S).length === 0) &&
                r.fromTo(C, w, { ...t, ...S }, i || 0);
          }
        );
      });
      let h = u.map((g, m) => (0, jd.createCleanupFunction)(g, n, d[m], e, f));
      return () => h.forEach((g) => g?.());
    };
});
var fs = v((Fr) => {
  "use strict";
  Object.defineProperty(Fr, "__esModule", { value: !0 });
  Object.defineProperty(Fr, "buildSplineAction", {
    enumerable: !0,
    get: function () {
      return Yd;
    },
  });
  var us = cs(),
    ct = Te(),
    qd = new Set(["color", "stateName"]),
    Hd = new Set(["rotationX", "rotationY", "rotationZ"]),
    ds = Math.PI / 180;
  function zd(n, e) {
    if (!n.spline) return n;
    let t = n.spline,
      r = {},
      o = !1;
    for (let [i, s] of Object.entries(t)) {
      if (!s || typeof s != "object") {
        r[i] = s;
        continue;
      }
      let a = s;
      if (qd.has(i)) {
        let l = a.from !== void 0 ? (0, ct.resolveToString)(a.from, e) : void 0,
          c = a.to !== void 0 ? (0, ct.resolveToString)(a.to, e) : void 0;
        (l !== a.from || c !== a.to) && (o = !0), (r[i] = { from: l, to: c });
      } else {
        let l = a.from !== void 0 ? (0, ct.resolveToNumber)(a.from, e) : void 0,
          c = a.to !== void 0 ? (0, ct.resolveToNumber)(a.to, e) : void 0,
          u = l !== a.from,
          d = c !== a.to;
        (u || d) && (o = !0),
          Hd.has(i)
            ? (r[i] = {
                from: l !== void 0 && u ? l * ds : l,
                to: c !== void 0 && d ? c * ds : c,
              })
            : (r[i] = { from: l, to: c });
      }
    }
    return o ? { ...n, spline: r } : n;
  }
  function Wd(n, e, t, r, o, i, s) {
    let a = e.getInstance(n);
    if (a) return (0, us.setupAnimation)(a, t, r, o, i, s);
    let l,
      c = () => {
        let u = e.getInstance(n);
        u && (l = (0, us.setupAnimation)(u, t, r, o, i, s)),
          n.removeEventListener("w-spline-load", c);
      };
    return (
      n.addEventListener("w-spline-load", c),
      () => {
        n.removeEventListener("w-spline-load", c), l?.();
      }
    );
  }
  function Yd(n) {
    n.addAction("spline", {
      createCustomTween: (e, t, r, o, i, s) => {
        let a = t.tt ?? 0;
        if (!i.length || !window.Webflow || !r.objectId) return;
        let l = window.Webflow.require?.("spline");
        if (!l) return;
        let c = [];
        for (let u of i) {
          let d = zd(r, u),
            f = Wd(u, l, d, o, e, a, s);
          f && c.push(f);
        }
        if (c.length !== 0)
          return () => {
            for (let u of c) u?.();
          };
      },
    });
  }
});
var bs = v((Lr) => {
  "use strict";
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  Object.defineProperty(Lr, "buildVariableAction", {
    enumerable: !0,
    get: function () {
      return Xd;
    },
  });
  var Nr = W();
  function Xd(n) {
    n.addAction("variable", {
      createCustomTween: (e, t, r, o, i, s) => {
        let a = r.variable;
        if (!a) return;
        let l = Object.keys(a),
          c = l.length;
        if (c === 0) return;
        let u = (t.targets?.length ?? 0) > 0;
        if (u && i.length === 0) return;
        let d = u ? Array.from(new Set(i)) : Kd(l),
          f = d.length,
          p = new Array(f),
          h = new Array(f);
        for (let S = 0; S < f; S++) {
          let M = d[S].style;
          p[S] = M;
          let T = new Array(c);
          for (let A = 0; A < c; A++) {
            let E = l[A];
            (T[A] = M.getPropertyValue(E)), M.removeProperty(E);
          }
          h[S] = T;
        }
        let g = t.tt ?? Nr.TweenType.To,
          m = s || 0,
          { force3D: y, ...C } = o,
          b = l.some((S) => a[S].startsWith("var(")),
          w = (S) => {
            let M = {};
            for (let T = 0; T < c; T++) {
              let A = l[T],
                E = a[A];
              M[A] = gs(
                (S &&
                  E.startsWith("var(") &&
                  S.getPropertyValue(E.slice(4, -1)).trim()) ||
                  E
              );
            }
            return M;
          };
        if (u)
          for (let S = 0; S < f; S++) {
            let M = d[S],
              T = w(b ? getComputedStyle(M) : null);
            ps(e, g, M, { ...T, ...C }, m, l);
          }
        else {
          let M = {
            ...w(b ? getComputedStyle(document.documentElement) : null),
            ...C,
          };
          for (let T = 0; T < f; T++) ps(e, g, d[T], M, m, l);
        }
        return () => {
          for (let S = 0; S < f; S++) {
            let M = p[S],
              T = h[S];
            for (let A = 0; A < c; A++) {
              let E = T[A];
              E ? M.setProperty(l[A], E) : M.removeProperty(l[A]);
            }
          }
        };
      },
    });
  }
  function Kd(n) {
    let e = [document.documentElement];
    if (n.length === 0) return e;
    let t = Qd(n) ?? Jd(n);
    for (let r = 0; r < t.length; r++) e.push(t[r]);
    return e;
  }
  function gs(n) {
    return n.replace(/(^|[^\d.])\.(\d)/g, "$10.$2");
  }
  function Zd(n, e) {
    let t = getComputedStyle(n),
      r = null;
    for (let o = 0; o < e.length; o++) {
      let i = e[o],
        s = t.getPropertyValue(i).trim(),
        a = gs(s);
      a !== s && ((r ??= {})[i] = a);
    }
    return r;
  }
  function ps(n, e, t, r, o, i) {
    e === Nr.TweenType.From
      ? n.from(t, r, o)
      : e === Nr.TweenType.Set
      ? n.set(t, r, o)
      : (n.add(() => {
          let s = Zd(t, i);
          s && window.gsap.set(t, s);
        }, o),
        n.to(t, r, o));
  }
  function Qd(n) {
    let e = new Set([document.documentElement]),
      t = [],
      r = new Map();
    try {
      let o = document.styleSheets;
      for (let i = 0; i < o.length; i++) ms(o[i].cssRules, n, t, e, r);
      return t;
    } catch {
      return null;
    }
  }
  function ms(n, e, t, r, o) {
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (s instanceof CSSMediaRule) {
        let l = s.conditionText,
          c = o.get(l);
        c === void 0 && ((c = matchMedia(l).matches), o.set(l, c)),
          c && ms(s.cssRules, e, t, r, o);
        continue;
      }
      if (!(s instanceof CSSStyleRule)) continue;
      let a = s.style;
      for (let l = 0; l < e.length; l++)
        if (a.getPropertyValue(e[l])) {
          try {
            let c = document.querySelectorAll(s.selectorText);
            for (let u = 0; u < c.length; u++) {
              let d = c[u];
              r.has(d) || (r.add(d), t.push(d));
            }
          } catch {}
          break;
        }
    }
  }
  var ys = "__ix3__";
  function Jd(n) {
    let e = document.documentElement,
      t = document.body,
      r = [],
      o = n.length,
      i = [],
      s = [];
    vs(e, n, o, i, s), hs(t, n, o, r, i, s);
    let a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT),
      l;
    for (; (l = a.nextNode()); ) hs(l, n, o, r, i, s);
    for (let c = 0; c < i.length; c++) {
      let u = i[c].style,
        d = s[c];
      for (let f = 0; f < o; f++) {
        let p = d[f];
        p ? u.setProperty(n[f], p) : u.removeProperty(n[f]);
      }
    }
    return r;
  }
  function vs(n, e, t, r, o) {
    let i = n.style,
      s = new Array(t);
    for (let a = 0; a < t; a++) {
      let l = e[a];
      (s[a] = i.getPropertyValue(l)), i.setProperty(l, ys);
    }
    r.push(n), o.push(s);
  }
  function hs(n, e, t, r, o, i) {
    let s = getComputedStyle(n);
    for (let a = 0; a < t; a++)
      if (s.getPropertyValue(e[a]) !== ys) {
        r.push(n), vs(n, e, t, o, i);
        return;
      }
  }
});
var Ts = v((Dr) => {
  "use strict";
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  function ef(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ef(Dr, {
    getFirst: function () {
      return tf;
    },
    getSecond: function () {
      return nf;
    },
    pair: function () {
      return rf;
    },
  });
  var tf = (n) => n[0],
    nf = (n) => n[1],
    rf = (n, e) => [n, e];
});
var Vr = v((jr) => {
  "use strict";
  Object.defineProperty(jr, "__esModule", { value: !0 });
  function of(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  of(jr, {
    elementTargetSelector: function () {
      return df;
    },
    safeClosest: function () {
      return cf;
    },
    safeGetElementById: function () {
      return sf;
    },
    safeMatches: function () {
      return uf;
    },
    safeQuerySelector: function () {
      return lf;
    },
    safeQuerySelectorAll: function () {
      return af;
    },
  });
  var ut = Ye(),
    sf = (n) => {
      try {
        let e = document.getElementById(n);
        return e && !(0, ut.isTransientIX3Clone)(e) ? e : null;
      } catch {
        return null;
      }
    },
    af = (n, e) => {
      try {
        let t = e.querySelectorAll(n);
        if (t.length === 0) return [];
        let r = [];
        for (let o of t) (0, ut.isTransientIX3Clone)(o) || r.push(o);
        return r;
      } catch {
        return null;
      }
    },
    lf = (n, e) => {
      try {
        let t = e.querySelector(n);
        if (!t) return null;
        if (!(0, ut.isTransientIX3Clone)(t)) return t;
        let r = e.querySelectorAll(n);
        for (let o of r) if (!(0, ut.isTransientIX3Clone)(o)) return o;
        return null;
      } catch {
        return null;
      }
    },
    cf = (n, e) => {
      try {
        return n.closest(e);
      } catch {
        return null;
      }
    },
    uf = (n, e) => {
      try {
        return n.matches(e);
      } catch {
        return null;
      }
    },
    df = (n) => `[data-wf-target*="${CSS.escape(`[${JSON.stringify(n)}`)}"]`;
});
var ws = v((Br) => {
  "use strict";
  Object.defineProperty(Br, "__esModule", { value: !0 });
  Object.defineProperty(Br, "applyScope", {
    enumerable: !0,
    get: function () {
      return pf;
    },
  });
  var Z = Y(),
    dt = Vr(),
    ff = Ye(),
    X = (n) => n.filter((e) => !(0, ff.isTransientIX3Clone)(e)),
    pf = (n, e) => {
      let t = X(n);
      if (!e) return t;
      if (Array.isArray(e)) {
        let [r, o] = e,
          i = [];
        switch (r) {
          case Z.TargetScope.FIRST_ANCESTOR:
            for (let s of t) {
              let a = o ? (0, dt.safeClosest)(s, o) : null;
              a && i.push(a);
            }
            return X(i);
          case Z.TargetScope.FIRST_DESCENDANT:
            for (let s of t) {
              let a = o ? (0, dt.safeQuerySelector)(o, s) : s.firstElementChild;
              a && i.push(a);
            }
            return X(i);
          case Z.TargetScope.DESCENDANTS:
            for (let s of t)
              i.push(...((0, dt.safeQuerySelectorAll)(o, s) || []));
            return X(i);
          case Z.TargetScope.ANCESTORS:
            for (let s of t) {
              let a = s.parentElement;
              for (; a; )
                (!o || (0, dt.safeMatches)(a, o)) && i.push(a),
                  (a = a.parentElement);
            }
            return X(i);
        }
      }
      switch (e) {
        case Z.TargetScope.CHILDREN:
          return X(t.flatMap((r) => [...r.children]));
        case Z.TargetScope.PARENT:
          return X(t.map((r) => r.parentElement).filter(Boolean));
        case Z.TargetScope.SIBLINGS:
          return X(
            t.flatMap((r) =>
              r.parentElement
                ? [...r.parentElement.children].filter((o) => o !== r)
                : []
            )
          );
        case Z.TargetScope.NEXT:
          return X(t.flatMap((r) => r.nextElementSibling || []));
        case Z.TargetScope.PREVIOUS:
          return X(t.flatMap((r) => r.previousElementSibling || []));
        default:
          return t;
      }
    };
});
var Cs = v(($r) => {
  "use strict";
  Object.defineProperty($r, "__esModule", { value: !0 });
  Object.defineProperty($r, "build", {
    enumerable: !0,
    get: function () {
      return hf;
    },
  });
  var re = Ts(),
    Es = Y(),
    we = Vr(),
    ie = ws(),
    Ur = (n) => JSON.stringify(n === Es.TargetScope.ALL ? null : n ?? null),
    Gr = (n) => !!n?.filterBy && n?.relationship !== "none",
    Ss = (n) => `trigger-parent|${Ur(n)}`;
  function hf(n) {
    let e = [];
    n.addTargetResolver("id", {
      resolve: ([, t]) => {
        let [r, o] = Array.isArray(t) ? t : [t],
          i = r ? (0, we.safeGetElementById)(r) : null;
        return i ? (0, ie.applyScope)([i], o) : e;
      },
    })
      .addTargetResolver("trigger-only", {
        resolve: ([, t], { triggerElement: r }) =>
          r ? (0, ie.applyScope)([r], Array.isArray(t) ? t[1] : void 0) : e,
        isDynamic: !0,
        instanceSharingKey: ([, t, r]) => {
          if (Gr(r)) return;
          let o = Array.isArray(t) ? t[1] : void 0;
          return o === Es.TargetScope.PARENT ? Ss(void 0) : `trigger|${Ur(o)}`;
        },
      })
      .addTargetResolver("trigger-only-parent", {
        resolve: ([, t], { triggerElement: r }) => {
          if (!r) return e;
          let o = r.parentElement;
          return o instanceof HTMLElement
            ? (0, ie.applyScope)([o], Array.isArray(t) ? t[1] : void 0)
            : e;
        },
        isDynamic: !0,
        instanceSharingKey: ([, t, r]) =>
          Gr(r) ? void 0 : Ss(Array.isArray(t) ? t[1] : void 0),
      })
      .addTargetResolver("inst", {
        resolve: ([, t], { triggerElement: r }) => {
          if (!Array.isArray(t)) return e;
          let [o, i] = t,
            s = Array.isArray(o),
            a = s ? (0, re.pair)(o[0], o[1]) : (0, re.pair)(o, i),
            l = (0, we.safeQuerySelectorAll)(
              (0, we.elementTargetSelector)(a),
              document
            );
          if (!l?.length) return e;
          let c = [...l];
          if (!r) return (0, ie.applyScope)(c, s ? i : void 0);
          let u = r.dataset.wfTarget;
          if (!u) return c;
          try {
            let d = JSON.parse(u),
              f = (0, re.getFirst)(a),
              p = d.find((h) => (0, re.getFirst)((0, re.getFirst)(h)) === f);
            return p
              ? (0, ie.applyScope)(
                  c.filter((h) =>
                    (h.dataset.wfTarget || "").includes(
                      `${JSON.stringify((0, re.getSecond)(p))}]`
                    )
                  ),
                  s ? i : void 0
                )
              : e;
          } catch {
            return e;
          }
        },
        isDynamic: !0,
        instanceSharingKey: ([, t, r]) => {
          if (Gr(r) || !Array.isArray(t)) return;
          let [o, i] = t,
            s = Array.isArray(o),
            a = s ? (0, re.pair)(o[0], o[1]) : (0, re.pair)(o, i);
          return `inst|${JSON.stringify(a)}|${Ur(s ? i : void 0)}`;
        },
      })
      .addTargetResolver("class", {
        resolve: ([, t]) => {
          let [r, o] = Array.isArray(t) ? t : [t],
            i = r ? (0, we.safeQuerySelectorAll)(`.${r}`, document) : null;
          return i ? (0, ie.applyScope)([...i], o) : e;
        },
      })
      .addTargetResolver("selector", {
        resolve: ([, t]) => {
          let [r, o] = Array.isArray(t) ? t : [t],
            i = r ? (0, we.safeQuerySelectorAll)(r, document) : null;
          return i ? (0, ie.applyScope)([...i], o) : e;
        },
      })
      .addTargetResolver("body", { resolve: () => [document.body] })
      .addTargetResolver("attribute", {
        resolve: ([, t]) => {
          let [r, o] = Array.isArray(t) ? t : [t],
            i = r ? (0, we.safeQuerySelectorAll)(r, document) : null;
          return i ? (0, ie.applyScope)([...i], o) : e;
        },
      })
      .addTargetResolver("any-element", { resolve: () => e })
      .addTargetResolver("viewport", {
        resolve: () => [document.documentElement],
      });
  }
});
var Is = v((qr) => {
  "use strict";
  Object.defineProperty(qr, "__esModule", { value: !0 });
  Object.defineProperty(qr, "plugin", {
    enumerable: !0,
    get: function () {
      return Ef;
    },
  });
  var gf = vo(),
    mf = Oo(),
    yf = ko(),
    Ms = Zo(),
    vf = fs(),
    bf = bs(),
    Tf = Cs(),
    wf = W(),
    Sf = Y(),
    Q = new wf.RuntimeBuilder(Sf.CORE_PLUGIN_INFO);
  (0, gf.build)(Q);
  (0, mf.build)(Q);
  (0, yf.buildLottieAction)(Q);
  (0, Ms.buildRiveAction)(Q);
  (0, Ms.buildAnimateRiveAction)(Q);
  (0, vf.buildSplineAction)(Q);
  (0, bf.buildVariableAction)(Q);
  (0, Tf.build)(Q);
  var Ef = Q.buildRuntime();
});
var As = v((Hr) => {
  "use strict";
  Object.defineProperty(Hr, "__esModule", { value: !0 });
  Object.defineProperty(Hr, "plugin", {
    enumerable: !0,
    get: function () {
      return Cf.plugin;
    },
  });
  var Cf = Is();
});
var Rs = Kr(Bi()),
  _s = Kr(As());
async function Mf() {
  try {
    let n = await Rs.IX3.init({ doc: document, win: window });
    return (
      await n.registerPlugin(_s.plugin),
      { register: (e, t) => n.register(e, t), destroy: () => n.destroy() }
    );
  } catch (n) {
    throw (console.error("[Devlink IX3] Engine initialization failed:", n), n);
  }
}
var Zp = { createIX3Engine: Mf };
export { Mf as createIX3Engine, Zp as default };
