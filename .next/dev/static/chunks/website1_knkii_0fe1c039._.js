(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/website1/knkii/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/website1/knkii/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/next@16.0.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.2_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/website1/knkii/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/website1/knkii/components/ui/accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/next@16.0.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1_55e9cf39c3997e318e9d0e43f1d2b60b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/@radix-ui+react-accordion@1_55e9cf39c3997e318e9d0e43f1d2b60b/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Accordion({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1_55e9cf39c3997e318e9d0e43f1d2b60b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/website1/knkii/components/ui/accordion.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Accordion;
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1_55e9cf39c3997e318e9d0e43f1d2b60b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-b last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/website1/knkii/components/ui/accordion.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1_55e9cf39c3997e318e9d0e43f1d2b60b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1_55e9cf39c3997e318e9d0e43f1d2b60b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180', className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/website1/knkii/components/ui/accordion.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/website1/knkii/components/ui/accordion.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/website1/knkii/components/ui/accordion.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1_55e9cf39c3997e318e9d0e43f1d2b60b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('pt-0 pb-4', className),
            children: children
        }, void 0, false, {
            fileName: "[project]/website1/knkii/components/ui/accordion.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/website1/knkii/components/ui/accordion.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/website1/knkii/components/CountUp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/next@16.0.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/framer-motion@12.23.24_reac_b1f8447cd6116051a30c21f5343628b6/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/framer-motion@12.23.24_reac_b1f8447cd6116051a30c21f5343628b6/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/framer-motion@12.23.24_reac_b1f8447cd6116051a30c21f5343628b6/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/next@16.0.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function CountUp({ to, from = 0, direction = 'up', delay = 0, duration = 2, className = '', startWhen = true, separator = '', onStart, onEnd }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const motionValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(direction === 'down' ? to : from);
    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);
    const springValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(motionValue, {
        damping,
        stiffness
    });
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '0px'
    });
    const getDecimalPlaces = (num)=>{
        const str = num.toString();
        if (str.includes('.')) {
            const decimals = str.split('.')[1];
            if (parseInt(decimals) !== 0) {
                return decimals.length;
            }
        }
        return 0;
    };
    const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));
    const formatValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CountUp.useCallback[formatValue]": (latest)=>{
            const hasDecimals = maxDecimals > 0;
            const options = {
                useGrouping: !!separator,
                minimumFractionDigits: hasDecimals ? maxDecimals : 0,
                maximumFractionDigits: hasDecimals ? maxDecimals : 0
            };
            const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
            return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
        }
    }["CountUp.useCallback[formatValue]"], [
        maxDecimals,
        separator
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            if (ref.current) {
                ref.current.textContent = formatValue(direction === 'down' ? to : from);
            }
        }
    }["CountUp.useEffect"], [
        from,
        to,
        direction,
        formatValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            if (isInView && startWhen) {
                if (typeof onStart === 'function') {
                    onStart();
                }
                const timeoutId = setTimeout({
                    "CountUp.useEffect.timeoutId": ()=>{
                        motionValue.set(direction === 'down' ? from : to);
                    }
                }["CountUp.useEffect.timeoutId"], delay * 1000);
                const durationTimeoutId = setTimeout({
                    "CountUp.useEffect.durationTimeoutId": ()=>{
                        if (typeof onEnd === 'function') {
                            onEnd();
                        }
                    }
                }["CountUp.useEffect.durationTimeoutId"], delay * 1000 + duration * 1000);
                return ({
                    "CountUp.useEffect": ()=>{
                        clearTimeout(timeoutId);
                        clearTimeout(durationTimeoutId);
                    }
                })["CountUp.useEffect"];
            }
        }
    }["CountUp.useEffect"], [
        isInView,
        startWhen,
        motionValue,
        direction,
        from,
        to,
        delay,
        onStart,
        onEnd,
        duration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            const unsubscribe = springValue.on('change', {
                "CountUp.useEffect.unsubscribe": (latest)=>{
                    if (ref.current) {
                        ref.current.textContent = formatValue(latest);
                    }
                }
            }["CountUp.useEffect.unsubscribe"]);
            return ({
                "CountUp.useEffect": ()=>unsubscribe()
            })["CountUp.useEffect"];
        }
    }["CountUp.useEffect"], [
        springValue,
        formatValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/website1/knkii/components/CountUp.tsx",
        lineNumber: 111,
        columnNumber: 10
    }, this);
}
_s(CountUp, "AYXSaBwN/l9GyMQgy4mUstgqGuA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = CountUp;
var _c;
__turbopack_context__.k.register(_c, "CountUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/website1/knkii/public/model.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/model.fc148a7b.jpeg");}),
"[project]/website1/knkii/public/model.jpeg.mjs { IMAGE => \"[project]/website1/knkii/public/model.jpeg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$public$2f$model$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/website1/knkii/public/model.jpeg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$public$2f$model$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1312,
    height: 736,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDd8Qfvb91cAhI/l9uM1wR6HS+p/9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/website1/knkii/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/next@16.0.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/framer-motion@12.23.24_reac_b1f8447cd6116051a30c21f5343628b6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$CountUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/website1/knkii/components/CountUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/website1/knkii/node_modules/.pnpm/lucide-react@0.454.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$public$2f$model$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$website1$2f$knkii$2f$public$2f$model$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/website1/knkii/public/model.jpeg.mjs { IMAGE => "[project]/website1/knkii/public/model.jpeg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
;
;
function LandingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md",
                style: {
                    borderColor: "#F0E6EB"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/kamkii-logo.png",
                                    alt: "Knkii Logo",
                                    className: "h-24 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#features",
                                        className: "text-sm text-gray-600 hover:text-[#E25092] transition-colors font-poppins",
                                        children: "Features"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#how-it-works",
                                        className: "text-sm text-gray-600 hover:text-[#E25092] transition-colors font-poppins",
                                        children: "How it Works"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#faq",
                                        className: "text-sm text-gray-600 hover:text-[#E25092] transition-colors font-poppins",
                                        children: "FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "text-gray-700 hover:text-[#E25092] font-poppins",
                                        children: "Log In"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        className: "text-white font-poppins font-medium",
                                        style: {
                                            backgroundColor: "#F07AAE"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#E25092",
                                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#F07AAE",
                                        children: "Sign Up"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/website1/knkii/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative flex flex-col lg:flex-row items-center justify-between py-16 sm:py-20 px-5 sm:px-8 lg:px-16 overflow-hidden",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$public$2f$model$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$website1$2f$knkii$2f$public$2f$model$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent lg:to-black/20"
                    }, void 0, false, {
                        fileName: "[project]/website1/knkii/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -30
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        },
                        viewport: {
                            once: true
                        },
                        className: "relative z-10 max-w-xl text-white space-y-6 lg:space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-fredoka",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-pink-400",
                                        children: "Your Fans, Your Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 77,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-200 font-poppins text-sm sm:text-base leading-relaxed",
                                children: "Build your personal brand, post exclusive content, and get paid directly by your fans. A safe and modern platform for creators to connect and grow."
                            }, void 0, false, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "bg-pink-400 text-gray-900 hover:bg-pink-500 font-semibold w-full sm:w-auto",
                                        children: "Get Started"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        className: "bg-white/20 text-white border-white hover:bg-white/30 w-full sm:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                className: "mr-2 h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 13
                                            }, this),
                                            "Watch Demo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-4 sm:gap-8 pt-4 sm:pt-6 text-sm sm:text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📸"
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 13
                                            }, this),
                                            " Post content"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "💰"
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 13
                                            }, this),
                                            " Earn subscriptions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🤝"
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 13
                                            }, this),
                                            " Engage fans"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 102,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/website1/knkii/app/page.tsx",
                        lineNumber: 70,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block w-1/2"
                    }, void 0, false, {
                        fileName: "[project]/website1/knkii/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                className: "pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white",
                style: {
                    backgroundImage: "linear-gradient(to bottom, #FCE4ED, #FFFFFF)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-5xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 font-poppins",
                            style: {
                                backgroundColor: "#F9B7D0",
                                borderColor: "#F07AAE"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "w-4 h-4",
                                    style: {
                                        color: "#E25092"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: "#E25092"
                                    },
                                    children: "Trusted by 50K+ Creators"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 font-fredoka",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#F07AAE"
                                    },
                                    children: "Connect, Create,"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Earn More"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-poppins",
                            children: "The all-in-one platform for creators to monetize their content, connect with fans, and build lasting relationships. Secure. Safe. Profitable."
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "text-white text-base font-poppins font-semibold",
                                    style: {
                                        backgroundColor: "#F07AAE"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#E25092",
                                    onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#F07AAE",
                                    children: "Start Earning Today"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    variant: "outline",
                                    className: "text-base font-poppins font-semibold bg-transparent",
                                    style: {
                                        borderColor: "#F0E6EB",
                                        color: "#F07AAE",
                                        backgroundColor: "transparent"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#FCE4ED",
                                    onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                                    children: "Explore Platform"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 rounded-2xl overflow-hidden h-96 flex items-center justify-center border",
                            style: {
                                backgroundColor: "#FCE4ED",
                                borderColor: "#F9B7D0"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/creator-platform-dashboard.jpg",
                                alt: "Platform Dashboard",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                className: "py-16 px-4 sm:px-6 lg:px-8 bg-white border-y",
                style: {
                    borderColor: "#F0E6EB"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-4 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl font-bold mb-2 font-fredoka",
                                        style: {
                                            color: "#F07AAE"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$CountUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                from: 0,
                                                to: 2.4,
                                                separator: ",",
                                                direction: "up",
                                                duration: 1,
                                                className: "count-up-text"
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 18
                                            }, this),
                                            "M+"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 font-poppins",
                                        children: "Paid to Creators"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl font-bold mb-2 font-fredoka",
                                        style: {
                                            color: "#F07AAE"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$CountUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                from: 0,
                                                to: 50,
                                                separator: ",",
                                                direction: "up",
                                                duration: 1,
                                                className: "count-up-text"
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            "K+"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 font-poppins",
                                        children: "Active Creators"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl font-bold mb-2 font-fredoka",
                                        style: {
                                            color: "#F07AAE"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$CountUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                from: 0,
                                                to: 500,
                                                separator: ",",
                                                direction: "up",
                                                duration: 1,
                                                className: "count-up-text"
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            "K+"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 font-poppins",
                                        children: "Verified Members"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl font-bold mb-2 font-fredoka",
                                        style: {
                                            color: "#F07AAE"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$CountUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                from: 0,
                                                to: 98,
                                                separator: ",",
                                                direction: "up",
                                                duration: 1,
                                                className: "count-up-text"
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 18
                                            }, this),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 font-poppins",
                                        children: "Satisfaction Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/website1/knkii/app/page.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                id: "features",
                className: "py-20 px-4 sm:px-6 lg:px-8",
                style: {
                    backgroundColor: "#FCE4ED"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-fredoka",
                                    children: "Powerful Features"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-600 max-w-2xl mx-auto font-poppins",
                                    children: "Everything you need to monetize your content and build a thriving community"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 rounded-xl bg-white border transition-all hover:shadow-lg",
                                    style: {
                                        borderColor: "#F0E6EB"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = "#F07AAE";
                                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(240, 122, 174, 0.1)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = "#F0E6EB";
                                        e.currentTarget.style.boxShadow = "";
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                                            style: {
                                                backgroundColor: "#F9B7D0"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                className: "w-6 h-6",
                                                style: {
                                                    color: "#E25092"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-2 font-fredoka",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 font-poppins",
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                id: "how-it-works",
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-white border-y",
                style: {
                    borderColor: "#F0E6EB"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-fredoka",
                                    children: "Simple Process"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-600 font-poppins",
                                    children: "Get started in minutes and start earning immediately"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-4 gap-6",
                            children: steps.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 font-fredoka text-lg",
                                            style: {
                                                backgroundColor: "#F07AAE"
                                            },
                                            children: idx + 1
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-2 font-fredoka",
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm font-poppins",
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this),
                                        idx < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-6 left-24 w-24 h-0.5 hidden md:block",
                                            style: {
                                                backgroundColor: "#F0E6EB"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                className: "py-20 px-4 sm:px-6 lg:px-8",
                style: {
                    backgroundColor: "#FCE4ED"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-bold text-gray-900 mb-6 font-fredoka",
                                        children: "Your Safety, Our Priority"
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-600 mb-8 font-poppins",
                                        children: "We take security and privacy seriously. Your content, your data, your control."
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4",
                                        children: securityFeatures.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-5 h-5 flex-shrink-0",
                                                        style: {
                                                            color: "#F07AAE"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700 font-poppins",
                                                        children: feature
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl overflow-hidden h-96 flex items-center justify-center border",
                                style: {
                                    backgroundColor: "#F9B7D0",
                                    borderColor: "#F07AAE"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-24 h-24",
                                    style: {
                                        color: "rgba(240, 122, 174, 0.3)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/website1/knkii/app/page.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-white border-y",
                style: {
                    borderColor: "#F0E6EB"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-fredoka",
                                    children: "Transparent Pricing"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-600 font-poppins",
                                    children: "No hidden fees. Scale at your own pace."
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: pricing.map((plan, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 rounded-xl border transition-all",
                                    style: plan.popular ? {
                                        backgroundColor: "#FCE4ED",
                                        borderColor: "#F07AAE",
                                        boxShadow: "0 15px 40px rgba(240, 122, 174, 0.15)",
                                        transform: "scale(1.05)"
                                    } : {
                                        backgroundColor: "#FFFFFF",
                                        borderColor: "#F0E6EB"
                                    },
                                    children: [
                                        plan.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block px-3 py-1 text-white text-xs font-semibold rounded-full mb-4 font-fredoka",
                                            style: {
                                                backgroundColor: "#F07AAE"
                                            },
                                            children: "MOST POPULAR"
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-gray-900 mb-2 font-fredoka",
                                            children: plan.name
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm mb-6 font-poppins",
                                            children: plan.description
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-4xl font-bold text-gray-900 font-fredoka",
                                                    children: plan.price
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600 ml-2 font-poppins",
                                                    children: plan.period
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "w-full mb-6 font-poppins font-semibold",
                                            style: plan.popular ? {
                                                backgroundColor: "#F07AAE",
                                                color: "#FFFFFF"
                                            } : {
                                                borderColor: "#F0E6EB",
                                                color: "#F07AAE",
                                                backgroundColor: "transparent"
                                            },
                                            onMouseEnter: (e)=>{
                                                if (plan.popular) {
                                                    e.currentTarget.style.backgroundColor = "#E25092";
                                                } else {
                                                    e.currentTarget.style.backgroundColor = "#FCE4ED";
                                                }
                                            },
                                            onMouseLeave: (e)=>{
                                                if (plan.popular) {
                                                    e.currentTarget.style.backgroundColor = "#F07AAE";
                                                } else {
                                                    e.currentTarget.style.backgroundColor = "transparent";
                                                }
                                            },
                                            children: plan.cta
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: plan.features.map((feature, fidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2 text-sm text-gray-700 font-poppins",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4 flex-shrink-0",
                                                            style: {
                                                                color: "#F07AAE"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 23
                                                        }, this),
                                                        feature
                                                    ]
                                                }, fidx, true, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false
                },
                id: "faq",
                className: "py-20 px-4 sm:px-6 lg:px-8",
                style: {
                    backgroundColor: "#FCE4ED"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-900 mb-4 font-fredoka",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                            type: "single",
                            collapsible: true,
                            className: "space-y-4",
                            children: faqs.map((faq, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                    value: `item-${idx}`,
                                    className: "border rounded-xl bg-white px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300",
                                    style: {
                                        borderColor: "#F0E6EB"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                            className: "font-semibold text-lg text-gray-900 font-fredoka hover:text-[#F07AAE] transition-colors",
                                            children: faq.q
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                            className: "text-gray-600 font-poppins pt-2",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 466,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 457,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                className: "py-20 px-4 sm:px-6 lg:px-8",
                style: {
                    background: "linear-gradient(135deg, #F07AAE 0%, #E25092 100%)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl font-bold text-white mb-6 font-fredoka",
                            children: "Ready to Start Earning?"
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 496,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-white mb-8 max-w-2xl mx-auto font-poppins",
                            style: {
                                opacity: 0.95
                            },
                            children: "Join thousands of creators already making real money on Knkii"
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 497,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "text-base font-poppins font-semibold",
                                    style: {
                                        backgroundColor: "#FFFFFF",
                                        color: "#F07AAE"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#F9F5F7",
                                    onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#FFFFFF",
                                    children: "Get Started Free"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "text-base font-poppins font-semibold text-white",
                                    style: {
                                        backgroundColor: "transparent",
                                        borderColor: "#FFFFFF",
                                        borderWidth: "2px"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)",
                                    onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                                    children: "Schedule Demo"
                                }, void 0, false, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white mt-8 font-poppins",
                            style: {
                                opacity: 0.9
                            },
                            children: "✓ No credit card required • ✓ 18+ verification included • ✓ Instant activation"
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 520,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 495,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$23$2e$24_reac_b1f8447cd6116051a30c21f5343628b6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].footer, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                className: "border-t bg-white",
                style: {
                    borderColor: "#F0E6EB"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-4 gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/kamkii-logo.png",
                                                alt: "Knkii Logo",
                                                className: "h-24 w-auto"
                                            }, void 0, false, {
                                                fileName: "[project]/website1/knkii/app/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 font-poppins",
                                            children: "Empower creators worldwide."
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 539,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-gray-900 mb-4 font-fredoka",
                                            children: "Product"
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 542,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-sm text-gray-600 font-poppins",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#E25092] transition",
                                                        children: "Features"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#E25092] transition",
                                                        children: "Pricing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#E25092] transition",
                                                        children: "Security"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-gray-900 mb-4 font-fredoka",
                                            children: "Company"
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-sm text-gray-600 font-poppins",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#E25092] transition",
                                                        children: "About"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#E25092] transition",
                                                        children: "Blog"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#E25092] transition",
                                                        children: "Careers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 563,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-gray-900 mb-4 font-fredoka",
                                            children: "Legal"
                                        }, void 0, false, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-sm text-gray-600 font-poppins",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#E25092] transition",
                                                        children: "Privacy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#E25092] transition",
                                                        children: "Terms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#E25092] transition",
                                                        children: "Contact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/website1/knkii/app/page.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/website1/knkii/app/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/website1/knkii/app/page.tsx",
                                    lineNumber: 581,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 534,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t pt-8 text-center text-sm text-gray-600 font-poppins",
                            style: {
                                borderColor: "#F0E6EB"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "© 2025 Knkii. All rights reserved. | Empowering creators, one connection at a time."
                            }, void 0, false, {
                                fileName: "[project]/website1/knkii/app/page.tsx",
                                lineNumber: 606,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/website1/knkii/app/page.tsx",
                            lineNumber: 602,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/website1/knkii/app/page.tsx",
                    lineNumber: 533,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/website1/knkii/app/page.tsx",
                lineNumber: 527,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/website1/knkii/app/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = LandingPage;
// Data
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Connect with Fans",
        description: "Build genuine relationships with your audience through direct messaging and exclusive content"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        title: "Multiple Revenue Streams",
        description: "Earn from paid chats, tips, subscriptions, and exclusive content all in one place"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        title: "Privacy Protected",
        description: "Encrypted chats, disappearing media, and complete control over your content"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
        title: "Creator Tools",
        description: "Professional editing tools, analytics dashboard, and performance insights"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Instant Payouts",
        description: "Withdraw to bank, PayPal, Venmo, or Cash App. No waiting, no hassle"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$website1$2f$knkii$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
        title: "Verified Badge",
        description: "18+ verification and safety checks keep your community trustworthy"
    }
];
const steps = [
    {
        title: "Sign Up",
        description: "Create your account in seconds"
    },
    {
        title: "Verify",
        description: "18+ verification for safety"
    },
    {
        title: "Create Profile",
        description: "Add bio, photos, and set rates"
    },
    {
        title: "Start Earning",
        description: "Connect and monetize today"
    }
];
const securityFeatures = [
    "256-bit encryption on all communications",
    "Age verification (18+) required",
    "Content moderation with AI detection",
    "Instant reporting and blocking tools",
    "GDPR & privacy law compliant",
    "Secure payment processing"
];
const pricing = [
    {
        name: "Starter",
        description: "Perfect for new creators",
        price: "Free",
        period: "",
        cta: "Get Started",
        features: [
            "Basic profile",
            "100% commission",
            "Free chat feature",
            "Community support",
            "1GB storage"
        ]
    },
    {
        name: "Creator",
        description: "For growing creators",
        price: "$9.99",
        period: "/month",
        cta: "Start Now",
        popular: true,
        features: [
            "Advanced analytics",
            "95% commission",
            "Priority support",
            "50GB storage",
            "Creator tools",
            "Referral program"
        ]
    },
    {
        name: "Pro",
        description: "For top creators",
        price: "$29.99",
        period: "/month",
        cta: "Upgrade",
        features: [
            "White-label options",
            "98% commission",
            "24/7 support",
            "Unlimited storage",
            "Advanced tools",
            "Dedicated manager"
        ]
    }
];
const faqs = [
    {
        q: "Is the platform really free?",
        a: "Yes! Starting is completely free. You only pay platform fees on earnings. On Starter tier, you keep 100% of your first earnings."
    },
    {
        q: "How do I withdraw my earnings?",
        a: "We support multiple withdrawal methods: bank transfer, PayPal, Venmo, Cash App, and direct deposit. Withdraw anytime with no minimum."
    },
    {
        q: "What about content safety?",
        a: "We use AI-powered content moderation and manual review. 18+ verification is required. We have strict community guidelines to ensure everyone is safe."
    },
    {
        q: "How does age verification work?",
        a: "Creators and members verify their age using secure third-party verification. It's quick, private, and complies with all regulations."
    },
    {
        q: "Can I control who sees my content?",
        a: "Absolutely. You decide which content is free or paid, who can message you, and you can block users anytime."
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, digital wallets, and bank transfers through our secure payment partner Stripe."
    }
];
var _c;
__turbopack_context__.k.register(_c, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=website1_knkii_0fe1c039._.js.map