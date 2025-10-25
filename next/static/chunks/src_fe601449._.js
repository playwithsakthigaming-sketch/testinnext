(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/driver-hub/(hub)/data:3bb097 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"005c4aca74e95a78a5d7582311757fb35021d9dcc1":"getLiveDrivers"},"src/app/driver-hub/(hub)/actions.ts",""] */ __turbopack_context__.s({
    "getLiveDrivers": (()=>getLiveDrivers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getLiveDrivers = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("005c4aca74e95a78a5d7582311757fb35021d9dcc1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getLiveDrivers"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHR5cGUgeyBWdGNTdGF0cywgTGVhZGVyYm9hcmRVc2VyLCBKb2IsIExpdmVEcml2ZXIsIERyaXZlciwgU2tpbGwsIERyaXZlclNraWxsLCBSb3V0ZSwgTGl2ZURlbGl2ZXJ5IH0gZnJvbSAnQC9saWIvdHJ1Y2tlcnNodWItdHlwZXMnO1xuXG5jb25zdCBWVENfSUQgPSAnMTYwMCc7XG5cbnR5cGUgQXBpUmVzcG9uc2U8VD4gPSB7XG4gICAgc3RhdHVzPzogYm9vbGVhbjtcbiAgICByZXNwb25zZT86IFQ7XG4gICAgZHJpdmVycz86IERyaXZlcltdOyAvLyBmb3IgZHJpdmVycyBlbmRwb2ludFxuICAgIGpvYnM/OiBKb2JbXTsgLy8gZm9yIGpvYnMgZW5kcG9pbnRcbiAgICBza2lsbHM/OiBTa2lsbFtdIHwgRHJpdmVyU2tpbGxbXTsgLy8gZm9yIHNraWxscyBlbmRwb2ludFxuICAgIHJvdXRlcz86IFJvdXRlW107XG4gICAgdnRjPzogeyBqb2JzPzogSm9iW10sIGRyaXZlcnM/OiBEcml2ZXJbXSwgZGVsaXZlcmllcz86IExpdmVEZWxpdmVyeVtdLCBkcml2ZXJzX2xpdmU/OiBMaXZlRHJpdmVyW10gfTsgLy8gZm9yIHZ0Yy8gZW5kcG9pbnRzXG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBleGVjdXRlZCBvbiB0aGUgc2VydmVyIHdoZXJlIHByb2Nlc3MuZW52IGlzIGF2YWlsYWJsZS5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRnJvbVRydWNrZXJzSHViPFQ+KGVuZHBvaW50OiBzdHJpbmcsIHBhcmFtcz86IFVSTFNlYXJjaFBhcmFtcyk6IFByb21pc2U8VCB8IG51bGw+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5UUlVDS0VSU0hVQl9BUElfS0VZO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUUlVDS0VSU0hVQl9BUElfS0VZIGlzIG5vdCBzZXQuXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGBodHRwczovL2FwaS50cnVja2Vyc2h1Yi5pbi92MS8ke2VuZHBvaW50fWApO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBwYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpLCB7XG4gICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ1VzZXItQWdlbnQnOiAnVGFtaWxQYXNhbmdhVlRDLzEuMCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dDogeyByZXZhbGlkYXRlOiAzMDAgfSAvLyBSZXZhbGlkYXRlIGV2ZXJ5IDUgbWludXRlc1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggZnJvbSBUcnVja2Vyc0h1YiAoJHtlbmRwb2ludH0pOmAsIHJlcy5zdGF0dXMsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICBpZiAoZW5kcG9pbnQuc3RhcnRzV2l0aCgndnRjLycpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudnRjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmRwb2ludC5lbmRzV2l0aCgnL2pvYnMnKSkgcmV0dXJuIGRhdGEudnRjLmpvYnMgYXMgVDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50LmVuZHNXaXRoKCcvZHJpdmVycycpKSByZXR1cm4gZGF0YS52dGMuZHJpdmVycyBhcyBUO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kcG9pbnQuZW5kc1dpdGgoJy9kZWxpdmVyaWVzL2xpdmUnKSkgcmV0dXJuIGRhdGEudnRjLmRlbGl2ZXJpZXMgYXMgVDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50LmVuZHNXaXRoKCcvZHJpdmVycy9saXZlJykpIHJldHVybiBkYXRhLnZ0Yy5kcml2ZXJzX2xpdmUgYXMgVDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudnRjIGFzIFQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlKSByZXR1cm4gZGF0YS5yZXNwb25zZSBhcyBUO1xuICAgICAgICAgICAgaWYgKGRhdGEuam9icykgcmV0dXJuIGRhdGEuam9icyBhcyBUO1xuICAgICAgICAgICAgaWYgKGRhdGEuZHJpdmVycykgcmV0dXJuIGRhdGEuZHJpdmVycyBhcyBUO1xuICAgICAgICAgICAgaWYgKGRhdGEuc2tpbGxzKSByZXR1cm4geyBza2lsbHM6IGRhdGEuc2tpbGxzIH0gYXMgVDtcbiAgICAgICAgICAgIGlmIChkYXRhLnJvdXRlcykgcmV0dXJuIGRhdGEucm91dGVzIGFzIFQ7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkgcmV0dXJuIGRhdGEgYXMgVDtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDIgfHwgKGVuZHBvaW50ICE9PSAnbGl2ZS9kZWxpdmVyeScgJiYgIWVuZHBvaW50LmluY2x1ZGVzKCd2dGMnKSkpIHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVHJ1Y2tlcnNIdWIgQVBJIHJldHVybmVkIHN0YXR1cyBmYWxzZSBmb3IgJHtlbmRwb2ludH06YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgYXMgVDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBmcm9tIFRydWNrZXJzSHViICgke2VuZHBvaW50fSk6YCwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhc2hib2FyZERhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW3N0YXRzRGF0YSwgYWxsVGltZSwgbW9udGhseSwgam9icywgbGl2ZURyaXZlcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8VnRjU3RhdHM+KGB2dGMvJHtWVENfSUR9YCksXG4gICAgICAgICAgICBmZXRjaEZyb21UcnVja2Vyc0h1YjxMZWFkZXJib2FyZFVzZXJbXT4oJ2xlYWRlcmJvYXJkL2FsbHRpbWUnKSxcbiAgICAgICAgICAgIGZldGNoRnJvbVRydWNrZXJzSHViPExlYWRlcmJvYXJkVXNlcltdPignbGVhZGVyYm9hcmQvbW9udGhseScpLFxuICAgICAgICAgICAgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8Sm9iW10+KGB2dGMvJHtWVENfSUR9L2pvYnNgKSxcbiAgICAgICAgICAgIGZldGNoRnJvbVRydWNrZXJzSHViPExpdmVEcml2ZXJbXT4oYHZ0Yy8ke1ZUQ19JRH0vZHJpdmVycy9saXZlYCksXG4gICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVjZW50Sm9icyA9IGpvYnMgfHwgW107XG4gICAgICAgIFxuICAgICAgICByZXR1cm4geyBzdGF0czogc3RhdHNEYXRhLCBhbGxUaW1lLCBtb250aGx5LCBqb2JzOiByZWNlbnRKb2JzLCBsaXZlRHJpdmVycyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGFzaGJvYXJkIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3RhdHM6IG51bGwsIGFsbFRpbWU6IG51bGwsIG1vbnRobHk6IG51bGwsIGpvYnM6IG51bGwsIGxpdmVEcml2ZXJzOiBudWxsIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVnRjSm9icyhtb250aD86IHN0cmluZywgeWVhcj86IHN0cmluZyk6IFByb21pc2U8Sm9iW10+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgaWYgKG1vbnRoKSBwYXJhbXMuYXBwZW5kKCdtb250aCcsIG1vbnRoKTtcbiAgICBpZiAoeWVhcikgcGFyYW1zLmFwcGVuZCgneWVhcicsIHllYXIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEZyb21UcnVja2Vyc0h1YjxKb2JbXT4oYHZ0Yy8ke1ZUQ19JRH0vam9ic2AsIHBhcmFtcyk7XG4gICAgcmV0dXJuIGRhdGEgfHwgW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNeUpvYnMoc3RlYW1JZDogc3RyaW5nKTogUHJvbWlzZTxKb2JbXT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEZyb21UcnVja2Vyc0h1YjxKb2JbXT4oYGRyaXZlcnMvJHtzdGVhbUlkfS9qb2JzYCk7XG4gICAgcmV0dXJuIGRhdGEgfHwgW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JEZXRhaWxzKGpvYklkOiBzdHJpbmcpOiBQcm9taXNlPEpvYiB8IG51bGw+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8eyByZXNwb25zZTogSm9iIH0+KGBqb2JzLyR7am9iSWR9YCk7XG4gICAgcmV0dXJuIGRhdGE/LnJlc3BvbnNlID8/IG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREcml2ZXJzKCk6IFByb21pc2U8RHJpdmVyW10+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8RHJpdmVyW10+KGB2dGMvJHtWVENfSUR9L2RyaXZlcnNgKTtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvdXRlcygpOiBQcm9taXNlPFJvdXRlW10+IHtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8Um91dGVbXT4oYHZ0Yy8ke1ZUQ19JRH0vcm91dGVzYCkgfHwgW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVTa2lsbHMoKTogUHJvbWlzZTxTa2lsbFtdPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEZyb21UcnVja2Vyc0h1Yjx7IHNraWxsczogU2tpbGxbXSB9Pignc2tpbGxzJyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlPy5za2lsbHMgfHwgW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREcml2ZXJTa2lsbHMoc3RlYW1JZDogc3RyaW5nKTogUHJvbWlzZTxEcml2ZXJTa2lsbFtdIHwgbnVsbD4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8eyBza2lsbHM6IERyaXZlclNraWxsW10gfT4oYHNraWxscy8ke3N0ZWFtSWR9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlPy5za2lsbHMgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURyaXZlclNraWxscyhzdGVhbUlkOiBzdHJpbmcsIHNraWxsczogeyBpZDogc3RyaW5nLCBsZXZlbDogbnVtYmVyIH1bXSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyBtZXNzYWdlPzogc3RyaW5nIH0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0gc2tpbGxzLnJlZHVjZSgoYWNjLCBza2lsbCkgPT4ge1xuICAgICAgICBhY2Nbc2tpbGwuaWRdID0gc2tpbGwubGV2ZWw7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWIoYHNraWxscy8ke3N0ZWFtSWR9YCwgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICB9IGFzIGFueSkpO1xuICAgIFxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byB1cGRhdGUgc2tpbGxzLiBUaGUgQVBJIGRpZCBub3QgcmV0dXJuIGEgc3VjY2VzcyBzdGF0dXMuJyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGl2ZURyaXZlcnMoKTogUHJvbWlzZTxMaXZlRHJpdmVyW10+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8TGl2ZURyaXZlcltdPihgdnRjLyR7VlRDX0lEfS9kcml2ZXJzL2xpdmVgKTtcbiAgICByZXR1cm4gZGF0YSB8fCBbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpdmVEZWxpdmVyaWVzKCk6IFByb21pc2U8TGl2ZURlbGl2ZXJ5W10+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8TGl2ZURlbGl2ZXJ5W10+KGB2dGMvJHtWVENfSUR9L2RlbGl2ZXJpZXMvbGl2ZWApO1xuICAgICByZXR1cm4gZGF0YSB8fCBbXTtcbn1cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJTQThKc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/driver-hub/(hub)/data:fb73d7 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0075f4d46f41b2ac7c97ae608d6fc48a4772b8902c":"getLiveDeliveries"},"src/app/driver-hub/(hub)/actions.ts",""] */ __turbopack_context__.s({
    "getLiveDeliveries": (()=>getLiveDeliveries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getLiveDeliveries = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0075f4d46f41b2ac7c97ae608d6fc48a4772b8902c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getLiveDeliveries"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHR5cGUgeyBWdGNTdGF0cywgTGVhZGVyYm9hcmRVc2VyLCBKb2IsIExpdmVEcml2ZXIsIERyaXZlciwgU2tpbGwsIERyaXZlclNraWxsLCBSb3V0ZSwgTGl2ZURlbGl2ZXJ5IH0gZnJvbSAnQC9saWIvdHJ1Y2tlcnNodWItdHlwZXMnO1xuXG5jb25zdCBWVENfSUQgPSAnMTYwMCc7XG5cbnR5cGUgQXBpUmVzcG9uc2U8VD4gPSB7XG4gICAgc3RhdHVzPzogYm9vbGVhbjtcbiAgICByZXNwb25zZT86IFQ7XG4gICAgZHJpdmVycz86IERyaXZlcltdOyAvLyBmb3IgZHJpdmVycyBlbmRwb2ludFxuICAgIGpvYnM/OiBKb2JbXTsgLy8gZm9yIGpvYnMgZW5kcG9pbnRcbiAgICBza2lsbHM/OiBTa2lsbFtdIHwgRHJpdmVyU2tpbGxbXTsgLy8gZm9yIHNraWxscyBlbmRwb2ludFxuICAgIHJvdXRlcz86IFJvdXRlW107XG4gICAgdnRjPzogeyBqb2JzPzogSm9iW10sIGRyaXZlcnM/OiBEcml2ZXJbXSwgZGVsaXZlcmllcz86IExpdmVEZWxpdmVyeVtdLCBkcml2ZXJzX2xpdmU/OiBMaXZlRHJpdmVyW10gfTsgLy8gZm9yIHZ0Yy8gZW5kcG9pbnRzXG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBleGVjdXRlZCBvbiB0aGUgc2VydmVyIHdoZXJlIHByb2Nlc3MuZW52IGlzIGF2YWlsYWJsZS5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRnJvbVRydWNrZXJzSHViPFQ+KGVuZHBvaW50OiBzdHJpbmcsIHBhcmFtcz86IFVSTFNlYXJjaFBhcmFtcyk6IFByb21pc2U8VCB8IG51bGw+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5UUlVDS0VSU0hVQl9BUElfS0VZO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUUlVDS0VSU0hVQl9BUElfS0VZIGlzIG5vdCBzZXQuXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGBodHRwczovL2FwaS50cnVja2Vyc2h1Yi5pbi92MS8ke2VuZHBvaW50fWApO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBwYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpLCB7XG4gICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ1VzZXItQWdlbnQnOiAnVGFtaWxQYXNhbmdhVlRDLzEuMCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dDogeyByZXZhbGlkYXRlOiAzMDAgfSAvLyBSZXZhbGlkYXRlIGV2ZXJ5IDUgbWludXRlc1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggZnJvbSBUcnVja2Vyc0h1YiAoJHtlbmRwb2ludH0pOmAsIHJlcy5zdGF0dXMsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICBpZiAoZW5kcG9pbnQuc3RhcnRzV2l0aCgndnRjLycpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudnRjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbmRwb2ludC5lbmRzV2l0aCgnL2pvYnMnKSkgcmV0dXJuIGRhdGEudnRjLmpvYnMgYXMgVDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50LmVuZHNXaXRoKCcvZHJpdmVycycpKSByZXR1cm4gZGF0YS52dGMuZHJpdmVycyBhcyBUO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kcG9pbnQuZW5kc1dpdGgoJy9kZWxpdmVyaWVzL2xpdmUnKSkgcmV0dXJuIGRhdGEudnRjLmRlbGl2ZXJpZXMgYXMgVDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50LmVuZHNXaXRoKCcvZHJpdmVycy9saXZlJykpIHJldHVybiBkYXRhLnZ0Yy5kcml2ZXJzX2xpdmUgYXMgVDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudnRjIGFzIFQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3BvbnNlKSByZXR1cm4gZGF0YS5yZXNwb25zZSBhcyBUO1xuICAgICAgICAgICAgaWYgKGRhdGEuam9icykgcmV0dXJuIGRhdGEuam9icyBhcyBUO1xuICAgICAgICAgICAgaWYgKGRhdGEuZHJpdmVycykgcmV0dXJuIGRhdGEuZHJpdmVycyBhcyBUO1xuICAgICAgICAgICAgaWYgKGRhdGEuc2tpbGxzKSByZXR1cm4geyBza2lsbHM6IGRhdGEuc2tpbGxzIH0gYXMgVDtcbiAgICAgICAgICAgIGlmIChkYXRhLnJvdXRlcykgcmV0dXJuIGRhdGEucm91dGVzIGFzIFQ7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkgcmV0dXJuIGRhdGEgYXMgVDtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDIgfHwgKGVuZHBvaW50ICE9PSAnbGl2ZS9kZWxpdmVyeScgJiYgIWVuZHBvaW50LmluY2x1ZGVzKCd2dGMnKSkpIHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVHJ1Y2tlcnNIdWIgQVBJIHJldHVybmVkIHN0YXR1cyBmYWxzZSBmb3IgJHtlbmRwb2ludH06YCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgYXMgVDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBmcm9tIFRydWNrZXJzSHViICgke2VuZHBvaW50fSk6YCwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhc2hib2FyZERhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW3N0YXRzRGF0YSwgYWxsVGltZSwgbW9udGhseSwgam9icywgbGl2ZURyaXZlcnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8VnRjU3RhdHM+KGB2dGMvJHtWVENfSUR9YCksXG4gICAgICAgICAgICBmZXRjaEZyb21UcnVja2Vyc0h1YjxMZWFkZXJib2FyZFVzZXJbXT4oJ2xlYWRlcmJvYXJkL2FsbHRpbWUnKSxcbiAgICAgICAgICAgIGZldGNoRnJvbVRydWNrZXJzSHViPExlYWRlcmJvYXJkVXNlcltdPignbGVhZGVyYm9hcmQvbW9udGhseScpLFxuICAgICAgICAgICAgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8Sm9iW10+KGB2dGMvJHtWVENfSUR9L2pvYnNgKSxcbiAgICAgICAgICAgIGZldGNoRnJvbVRydWNrZXJzSHViPExpdmVEcml2ZXJbXT4oYHZ0Yy8ke1ZUQ19JRH0vZHJpdmVycy9saXZlYCksXG4gICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVjZW50Sm9icyA9IGpvYnMgfHwgW107XG4gICAgICAgIFxuICAgICAgICByZXR1cm4geyBzdGF0czogc3RhdHNEYXRhLCBhbGxUaW1lLCBtb250aGx5LCBqb2JzOiByZWNlbnRKb2JzLCBsaXZlRHJpdmVycyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGFzaGJvYXJkIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3RhdHM6IG51bGwsIGFsbFRpbWU6IG51bGwsIG1vbnRobHk6IG51bGwsIGpvYnM6IG51bGwsIGxpdmVEcml2ZXJzOiBudWxsIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVnRjSm9icyhtb250aD86IHN0cmluZywgeWVhcj86IHN0cmluZyk6IFByb21pc2U8Sm9iW10+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgaWYgKG1vbnRoKSBwYXJhbXMuYXBwZW5kKCdtb250aCcsIG1vbnRoKTtcbiAgICBpZiAoeWVhcikgcGFyYW1zLmFwcGVuZCgneWVhcicsIHllYXIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEZyb21UcnVja2Vyc0h1YjxKb2JbXT4oYHZ0Yy8ke1ZUQ19JRH0vam9ic2AsIHBhcmFtcyk7XG4gICAgcmV0dXJuIGRhdGEgfHwgW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNeUpvYnMoc3RlYW1JZDogc3RyaW5nKTogUHJvbWlzZTxKb2JbXT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEZyb21UcnVja2Vyc0h1YjxKb2JbXT4oYGRyaXZlcnMvJHtzdGVhbUlkfS9qb2JzYCk7XG4gICAgcmV0dXJuIGRhdGEgfHwgW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JEZXRhaWxzKGpvYklkOiBzdHJpbmcpOiBQcm9taXNlPEpvYiB8IG51bGw+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8eyByZXNwb25zZTogSm9iIH0+KGBqb2JzLyR7am9iSWR9YCk7XG4gICAgcmV0dXJuIGRhdGE/LnJlc3BvbnNlID8/IG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREcml2ZXJzKCk6IFByb21pc2U8RHJpdmVyW10+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8RHJpdmVyW10+KGB2dGMvJHtWVENfSUR9L2RyaXZlcnNgKTtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvdXRlcygpOiBQcm9taXNlPFJvdXRlW10+IHtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8Um91dGVbXT4oYHZ0Yy8ke1ZUQ19JRH0vcm91dGVzYCkgfHwgW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdmFpbGFibGVTa2lsbHMoKTogUHJvbWlzZTxTa2lsbFtdPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEZyb21UcnVja2Vyc0h1Yjx7IHNraWxsczogU2tpbGxbXSB9Pignc2tpbGxzJyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlPy5za2lsbHMgfHwgW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREcml2ZXJTa2lsbHMoc3RlYW1JZDogc3RyaW5nKTogUHJvbWlzZTxEcml2ZXJTa2lsbFtdIHwgbnVsbD4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8eyBza2lsbHM6IERyaXZlclNraWxsW10gfT4oYHNraWxscy8ke3N0ZWFtSWR9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlPy5za2lsbHMgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURyaXZlclNraWxscyhzdGVhbUlkOiBzdHJpbmcsIHNraWxsczogeyBpZDogc3RyaW5nLCBsZXZlbDogbnVtYmVyIH1bXSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyBtZXNzYWdlPzogc3RyaW5nIH0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0gc2tpbGxzLnJlZHVjZSgoYWNjLCBza2lsbCkgPT4ge1xuICAgICAgICBhY2Nbc2tpbGwuaWRdID0gc2tpbGwubGV2ZWw7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPik7XG5cbiAgICBjb25zdCByZXNwb25zZTogYW55ID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWIoYHNraWxscy8ke3N0ZWFtSWR9YCwgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICB9IGFzIGFueSkpO1xuICAgIFxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byB1cGRhdGUgc2tpbGxzLiBUaGUgQVBJIGRpZCBub3QgcmV0dXJuIGEgc3VjY2VzcyBzdGF0dXMuJyB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGl2ZURyaXZlcnMoKTogUHJvbWlzZTxMaXZlRHJpdmVyW10+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8TGl2ZURyaXZlcltdPihgdnRjLyR7VlRDX0lEfS9kcml2ZXJzL2xpdmVgKTtcbiAgICByZXR1cm4gZGF0YSB8fCBbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpdmVEZWxpdmVyaWVzKCk6IFByb21pc2U8TGl2ZURlbGl2ZXJ5W10+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8TGl2ZURlbGl2ZXJ5W10+KGB2dGMvJHtWVENfSUR9L2RlbGl2ZXJpZXMvbGl2ZWApO1xuICAgICByZXR1cm4gZGF0YSB8fCBbXTtcbn1cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhTQW1Lc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/driver-hub/live-map/live-map-client.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LiveMapClient": (()=>LiveMapClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/redo.js [app-client] (ecmascript) <export default as Redo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/milestone.js [app-client] (ecmascript) <export default as Milestone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$data$3a$3bb097__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/data:3bb097 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$data$3a$fb73d7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/data:fb73d7 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const MAP_IMAGE_URL = 'https://api.truckershub.in/v1/map';
const MAP_DIMENSIONS = {
    width: 8192,
    height: 8192
};
const MAP_BOUNDS = {
    minX: -40000,
    maxX: 40000,
    minY: -40000,
    maxY: 40000
};
const formatEta = (seconds)=>{
    if (seconds <= 0) return 'Arrived';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    return [
        h > 0 ? `${h}h` : '',
        m > 0 ? `${m}m` : '',
        s > 0 ? `${s}s` : ''
    ].filter(Boolean).join(' ');
};
function LiveMapClient() {
    _s();
    const [drivers, setDrivers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deliveries, setDeliveries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.2);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [selectedDriver, setSelectedDriver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchData = async ()=>{
        setIsLoading(true);
        const [driversData, deliveriesData] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$data$3a$3bb097__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLiveDrivers"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$data$3a$fb73d7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLiveDeliveries"])()
        ]);
        setDrivers(driversData);
        setDeliveries(deliveriesData);
        setIsLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMapClient.useEffect": ()=>{
            fetchData();
            const interval = setInterval(fetchData, 30000); // Refresh every 30 seconds
            return ({
                "LiveMapClient.useEffect": ()=>clearInterval(interval)
            })["LiveMapClient.useEffect"];
        }
    }["LiveMapClient.useEffect"], []);
    const convertCoords = (driverX, driverY)=>{
        const mapWidth = MAP_DIMENSIONS.width;
        const mapHeight = MAP_DIMENSIONS.height;
        const rangeX = MAP_BOUNDS.maxX - MAP_BOUNDS.minX;
        const rangeY = MAP_BOUNDS.maxY - MAP_BOUNDS.minY;
        const x = (driverX - MAP_BOUNDS.minX) / rangeX * mapWidth;
        const y = (driverY - MAP_BOUNDS.minY) / rangeY * mapHeight;
        return {
            x,
            y
        };
    };
    const handleZoomIn = ()=>setScale((s)=>Math.min(s * 1.2, 5));
    const handleZoomOut = ()=>setScale((s)=>Math.max(s / 1.2, 0.1));
    const handleReset = ()=>{
        setScale(0.2);
        setPosition({
            x: 0,
            y: 0
        });
        setSelectedDriver(null);
    };
    const handleDriverClick = (driver)=>{
        setSelectedDriver(driver);
        const { x, y } = convertCoords(driver.map.x, driver.map.y);
        setScale(1);
        setPosition({
            x: -(x * 1) + window.innerWidth / 2,
            y: -(y * 1) + window.innerHeight / 2
        });
    };
    const selectedDriverDelivery = selectedDriver ? deliveries.find((d)=>d.driver_id === selectedDriver.id) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full overflow-hidden bg-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-10 space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleZoomIn,
                        size: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {}, void 0, false, {
                            fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                            lineNumber: 95,
                            columnNumber: 60
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleZoomOut,
                        size: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {}, void 0, false, {
                            fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                            lineNumber: 96,
                            columnNumber: 61
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleReset,
                        size: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__["Redo"], {}, void 0, false, {
                            fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                            lineNumber: 97,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-6 w-6 animate-spin text-white"
                }, void 0, false, {
                    fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                    lineNumber: 102,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                lineNumber: 101,
                columnNumber: 17
            }, this),
            !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-10 text-white bg-black/50 px-3 py-1.5 rounded-md",
                children: [
                    drivers.length,
                    " Driver(s) Online"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                lineNumber: 106,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                    transition: 'transform 0.5s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: MAP_IMAGE_URL,
                        alt: "Live Map",
                        width: MAP_DIMENSIONS.width,
                        height: MAP_DIMENSIONS.height,
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this),
                    drivers.map((driver)=>{
                        const { x, y } = convertCoords(driver.map.x, driver.map.y);
                        const isSelected = selectedDriver?.id === driver.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -translate-x-1/2 -translate-y-full cursor-pointer group",
                            style: {
                                left: x,
                                top: y,
                                transition: 'transform 0.5s'
                            },
                            onClick: ()=>handleDriverClick(driver),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: driver.avatar,
                                            alt: driver.username,
                                            width: 40,
                                            height: 40,
                                            className: `rounded-full border-2 transition-all ${isSelected ? 'border-primary scale-125' : 'border-white group-hover:scale-110'}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                            lineNumber: 132,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 right-0 -mb-1 -mr-1 bg-gray-800 rounded-full p-0.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                size: 12,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                lineNumber: 134,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                            lineNumber: 133,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                    lineNumber: 131,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute bottom-full mb-2 w-max max-w-xs transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/70 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap",
                                        children: driver.username
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                        lineNumber: 139,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                    lineNumber: 138,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, driver.id, true, {
                            fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                            lineNumber: 125,
                            columnNumber: 25
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            selectedDriver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-full max-w-md bg-card/90 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "flex flex-row items-center justify-between p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: selectedDriver.avatar,
                                        alt: selectedDriver.username,
                                        width: 48,
                                        height: 48,
                                        className: "rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                        lineNumber: 152,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: selectedDriver.username
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                lineNumber: 154,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: selectedDriver.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                lineNumber: 155,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                        lineNumber: 153,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                lineNumber: 151,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: ()=>setSelectedDriver(null),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                    fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                    lineNumber: 158,
                                    columnNumber: 101
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                lineNumber: 158,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                        lineNumber: 150,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-4 pt-0 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                lineNumber: 162,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            selectedDriver.location.on_road ? `On ${selectedDriver.location.road_name}` : `In ${selectedDriver.location.city}, ${selectedDriver.location.country}`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                        lineNumber: 162,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                lineNumber: 163,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            selectedDriver.truck.make,
                                            " ",
                                            selectedDriver.truck.model
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                        lineNumber: 163,
                                        columnNumber: 30
                                    }, this),
                                    selectedDriverDelivery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 76
                                                    }, this),
                                                    " Hauling ",
                                                    selectedDriverDelivery.cargo.name,
                                                    " to ",
                                                    selectedDriverDelivery.destination_city
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                lineNumber: 166,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__["Milestone"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 76
                                                    }, this),
                                                    " ",
                                                    selectedDriverDelivery.distance.remaining.toLocaleString(),
                                                    "km remaining"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                lineNumber: 167,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 76
                                                    }, this),
                                                    " ETA: ",
                                                    formatEta(selectedDriverDelivery.eta)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                lineNumber: 168,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                                lineNumber: 171,
                                                columnNumber: 73
                                            }, this),
                                            " Not on a delivery"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                        lineNumber: 171,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                lineNumber: 161,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/driver-hub/members`,
                                    children: "View Profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                    lineNumber: 175,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                                lineNumber: 174,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                        lineNumber: 160,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
                lineNumber: 149,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/driver-hub/live-map/live-map-client.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
_s(LiveMapClient, "ZH1BYZlgx6PhqipssLtBJ3ILShc=");
_c = LiveMapClient;
var _c;
__turbopack_context__.k.register(_c, "LiveMapClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_fe601449._.js.map