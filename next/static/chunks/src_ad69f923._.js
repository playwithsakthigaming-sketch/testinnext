(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Avatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = Avatar;
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AvatarImage;
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c5 = AvatarFallback;
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Avatar$React.forwardRef");
__turbopack_context__.k.register(_c1, "Avatar");
__turbopack_context__.k.register(_c2, "AvatarImage$React.forwardRef");
__turbopack_context__.k.register(_c3, "AvatarImage");
__turbopack_context__.k.register(_c4, "AvatarFallback$React.forwardRef");
__turbopack_context__.k.register(_c5, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/placeholder-images.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"event-31441\",\"description\":\"Image for Saffron Line CC - December Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31441.1760714910.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-26148\",\"description\":\"Image for 🎉Legacy Transport [LTVTC] 1st Anniversary Convoy🎉\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/26148.1751267377.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31423\",\"description\":\"Image for TruckersMP's Halloween Experience\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31423.1760039690.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-28917\",\"description\":\"Image for CN XM Team Convoy#14\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/28917.1750317704.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29157\",\"description\":\"Image for INDIAN CARRIERS DECEMBER PUBLIC CONVOY 2025\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29157.1753182673.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-27037\",\"description\":\"Image for ETS2MCG Christmas Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/27037.1737738895.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31176\",\"description\":\"Image for SFMPDL X Indian Carriers Partner Ship Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31176.1759291923.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29795\",\"description\":\"Image for KERALA ROADRUNNERS NOVEMBER VOYAGE\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29795.1752872287.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31266\",\"description\":\"Image for NOVEMBER DRIVE: BOUND BY BROTHERHOOD\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31266.1759402043.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31042\",\"description\":\"Image for Ouka Logistics March Event #3\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31042.1758547014.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31031\",\"description\":\"Image for INDIAN CARRIERS JANUARY PUBLIC CONVOY 2026\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31031.1760602631.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29346\",\"description\":\"Image for 4° Anniversary MT Logistica\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29346.1757077954.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30916\",\"description\":\"Image for 🎉 Lumo Haul 1st Anniversary 🎉\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30916.1757997840.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29156\",\"description\":\"Image for INDIAN CARRIERS NOVEMBER PUBLIC CONVOY 2025\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29156.1759610645.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-24964\",\"description\":\"Image for Nexon Logistics December Convoy #66\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/24964.1751606085.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30763\",\"description\":\"Image for Ouka Logistics 1st Anniversary Event\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30763.1757165299.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30640\",\"description\":\"Image for Opening Convoy | Shine Media & Events\",\"imageUrl\":\"https://images.unsplash.com/photo-1724556271642-e9acaf03ac23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx0cnVjayUyMGNvbnZveXxlbnwwfHx8fDE3NjEwMjczNDR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30288\",\"description\":\"Image for Nexon Logistics February Convoy #70\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30288.1754820952.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29938\",\"description\":\"Image for Saffron Line CC - Opening Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29938.1753448592.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31204\",\"description\":\"Image for Nexus Transport October Odyssey\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31204.1759153507.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31227\",\"description\":\"Image for Tamil Pasanga March 2026 Public Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31227.1759221268.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31138\",\"description\":\"Image for Tamil Pasanga February 2026 Public Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31138.1758886693.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30756\",\"description\":\"Image for Tamil Pasanga VTC 2026 Kickstart Convoy 🚛\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30756.1757111599.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30881\",\"description\":\"Image for Tamil Pasanga VTC December 2025 Public Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30881.1760785677.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30741\",\"description\":\"Image for Tamil Pasanga VTC November 2025 Public convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30741.1760115432.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-october-2025\",\"description\":\"Image for Tamil Pasanga VTC October 2025 Public Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30733.1760098431.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"newsletter-1760368787564\",\"description\":\"Image for The Big 🎃 Pickup delivery event is here! 🚚\",\"imageUrl\":\"https://media.discordapp.net/attachments/307488652701728769/1426977729500156045/delivery-map-1.png?ex=68edd8d2&is=68ec8752&hm=52562cf184d6c2027a674c16ed7f140738fe1860c876549406c345dc4860f67e&=&format=webp&quality=lossless&width=1284&height=722\",\"imageHint\":\"custom article\"},{\"id\":\"event-1759145518758\",\"description\":\"Image for Birthday Miles for Dude 🚚🎉\",\"imageUrl\":\"https://i.imgur.com/yMzKels.jpeg\",\"imageHint\":\"custom event\"},{\"id\":\"newsletter-1759063641546\",\"description\":\"Image for Tamil Pasanaga VTC October 2025 Public convoy. \",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1421178246195576852/ets2_20250926_213746_00.PNG?ex=68da1122&is=68d8bfa2&hm=b33fca5f718a752c1e20a44450a1f7aa35cb90fc58fd64a38a377d1d75206f06&=&format=webp&quality=lossless&width=1283&height=722\",\"imageHint\":\"custom article\"},{\"id\":\"newsletter-1759063501893\",\"description\":\"Image for Euro Truck Simulator 2 1.56\",\"imageUrl\":\"https://clan.fastly.steamstatic.com/images//4036972/e1476b504a8534841031330353a1498cede28005.jpg\",\"imageHint\":\"custom article\"},{\"id\":\"event-1758794026763\",\"description\":\"Image for test 1\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1418938708576571412/ets2_20250919_190640_00.PNG?ex=68d5dfe6&is=68d48e66&hm=b030d6e0948f890decddf0f8bede93ab878f2acf1dffa32fa472c810acb40b07&=&format=webp&quality=lossless&width=1283&height=722\",\"imageHint\":\"custom event\"},{\"id\":\"newsletter-1758671620485\",\"description\":\"Image for Promods 2.76\",\"imageUrl\":\"https://promods.net/images/news/pm_270_release.jpg\",\"imageHint\":\"custom article\"},{\"id\":\"hero-truck\",\"description\":\"A branded truck on the road, representing Nexon Logistics.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1417735782223056929/IMG_20250917_102508.jpg?ex=68d379d6&is=68d22856&hm=a557f1ba374f82770c80ad045ba6838cc0e0f99a01dd3079b9036c8039f67d23&=&format=webp&width=1389&height=684\",\"imageHint\":\"truck highway night\"},{\"id\":\"hero-truck-2\",\"description\":\"A branded truck on a scenic road.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1417739857123475538/1758085736934.jpg?ex=68d37da2&is=68d22c22&hm=8704f60b91d953c3e9b83e28d406e362c20affcf91876b7d903227bb10d8bb9d&=&format=webp&width=1389&height=684\",\"imageHint\":\"truck mountain road\"},{\"id\":\"hero-truck-3\",\"description\":\"A branded truck in a city at night.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1415618464629919754/ets2_20241220_194305_00.png?ex=68d3aeee&is=68d25d6e&hm=9a9e56b889bc2ada983981b4fc18083038d1a0fec476369e473a37664fd5cb8a&=&format=webp&quality=lossless&width=1284&height=722\",\"imageHint\":\"truck night road\"},{\"id\":\"testimonial-avatar\",\"description\":\"Avatar for the person giving the testimonial.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1116720480544636999/1274425873201631304/TP_NEW_WB_PNGxxxhdpi.png?ex=68d38755&is=68d235d5&hm=c2ace7346f05bc6680af0a4a06df8a147ea5651f247d03b6d5ba1fca4ff8e4d1&=&format=webp&quality=lossless&width=826&height=826\",\"imageHint\":\"person portrait\"},{\"id\":\"create-news-banner\",\"description\":\"Banner for create news page.\",\"imageUrl\":\"https://images.unsplash.com/photo-1725352566305-7b8ca9346771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhYnN0cmFjdCUyMHdyaXRlcnxlbnwwfHx8fDE3NTg2NzEzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"abstract writer\"},{\"id\":\"about-truck\",\"description\":\"A white Scania truck on a bridge.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1417735782223056929/IMG_20250917_102508.jpg?ex=68d4cb56&is=68d379d6&hm=c808005f4fff904d245a508d3ddbac637cf5c88f5e6416d5b35777e8b40bec04&=&format=webp&width=1194&height=722\",\"imageHint\":\"truck highway\"},{\"id\":\"events-banner\",\"description\":\"Banner for the events page.\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1281551151418048677/1414862372199202927/ets2_20250907_201945_00.PNG?ex=68d43a84&is=68d2e904&hm=c6a185bd254316fdb29cdd8e8f8255b85a60a3760da66ed8f10813dc2d90e01b&\",\"imageHint\":\"trucks convoy\"},{\"id\":\"event-october\",\"description\":\"October Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626432439156746/October.png?ex=68d5a86d&is=68d456ed&hm=81e3d65b75051b75cb4b7123992b952e46be958310f545ba2ca96b026cc3d41e&\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-november\",\"description\":\"November Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626432732774430/November.png?ex=68d5a86d&is=68d456ed&hm=70a92d05775f0a0d4c514757c301662453416554523e0c034b22c7dd3ca72a81&\",\"imageHint\":\"truck night\"},{\"id\":\"event-december\",\"description\":\"December Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626432132939816/December.png?ex=68d5a86d&is=68d456ed&hm=00a169b1945b6348682a2080a9d18e906593a1c62b800d17d59b207502c3df4f&\",\"imageHint\":\"truck snow\"},{\"id\":\"event-january\",\"description\":\"January Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626431835013141/January.png?ex=68d5a86d&is=68d456ed&hm=2af1e0b577a76fdf7c31d10e521d98d0d1a49a2a7f5c765f048d086e3f0559a2&\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-february\",\"description\":\"February Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626405364146206/February.png?ex=68d5a867&is=68d456ed&hm=5a60032e67f2e153381665a36371a355601a4e61a6b0bd726915b22b64016147&\",\"imageHint\":\"truck sunset\"},{\"id\":\"event-march\",\"description\":\"March Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626405670273064/March.png?ex=68d5a867&is=68d456ed&hm=6a4be75267b27521c7501a3597c5e533bca2d3a39e80a062779e2a4457e5b871&\",\"imageHint\":\"truck road\"},{\"id\":\"event-indian-carriers\",\"description\":\"Indian Carriers September Public Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626405988778004/September_Public.png?ex=68d5a867&is=68d456ed&hm=62f8373b9e4a3c1032cf05e45c48b7f8339d42fe544339e083c27183e89a5843&\",\"imageHint\":\"truck logo\"},{\"id\":\"event-september-private\",\"description\":\"Nexon Logistics | September ETS2 Privat...\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626406249250836/September_Private.png?ex=68d5a867&is=68d456ed&hm=2fc9eb33e4b77d612e6aa0f24f469904ab723edb2d718ca16e0ff634f191b7d8&\",\"imageHint\":\"trucks lined up\"},{\"id\":\"event-uniting-tmp\",\"description\":\"Uniting the TMP Community: Driving To...\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626404987158579/TMP_Community.png?ex=68d5a867&is=68d456ed&hm=d7870df59c4033325c6a32d1ae2c98d63309a473da7fd2e22c0733d7790b34d7&\",\"imageHint\":\"trucks convoy night\"}]}"));}}),
"[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlaceHolderImages": (()=>PlaceHolderImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DropdownMenu": (()=>DropdownMenu),
    "DropdownMenuCheckboxItem": (()=>DropdownMenuCheckboxItem),
    "DropdownMenuContent": (()=>DropdownMenuContent),
    "DropdownMenuGroup": (()=>DropdownMenuGroup),
    "DropdownMenuItem": (()=>DropdownMenuItem),
    "DropdownMenuLabel": (()=>DropdownMenuLabel),
    "DropdownMenuPortal": (()=>DropdownMenuPortal),
    "DropdownMenuRadioGroup": (()=>DropdownMenuRadioGroup),
    "DropdownMenuRadioItem": (()=>DropdownMenuRadioItem),
    "DropdownMenuSeparator": (()=>DropdownMenuSeparator),
    "DropdownMenuShortcut": (()=>DropdownMenuShortcut),
    "DropdownMenuSub": (()=>DropdownMenuSub),
    "DropdownMenuSubContent": (()=>DropdownMenuSubContent),
    "DropdownMenuSubTrigger": (()=>DropdownMenuSubTrigger),
    "DropdownMenuTrigger": (()=>DropdownMenuTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, this));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 109,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 108,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this));
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 123,
        columnNumber: 3
    }, this));
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 147,
        columnNumber: 3
    }, this));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 163,
        columnNumber: 3
    }, this));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
__turbopack_context__.k.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c7, "DropdownMenuItem");
__turbopack_context__.k.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_context__.k.register(_c13, "DropdownMenuLabel");
__turbopack_context__.k.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/driver-hub/(hub)/data:e6f688 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00d082cd01067ea487fde784b0c7d7ec19a86753ab":"getDashboardData"},"src/app/driver-hub/(hub)/actions.ts",""] */ __turbopack_context__.s({
    "getDashboardData": (()=>getDashboardData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getDashboardData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00d082cd01067ea487fde784b0c7d7ec19a86753ab", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getDashboardData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHR5cGUgeyBWdGNTdGF0cywgTGVhZGVyYm9hcmRVc2VyLCBKb2IsIExpdmVEcml2ZXIgfSBmcm9tICdAL2xpYi90cnVja2Vyc2h1Yi10eXBlcyc7XG5cbnR5cGUgVHJ1Y2tlcnNIdWJSZXNwb25zZTxUPiA9IHtcbiAgICBzdGF0dXM6IGJvb2xlYW47XG4gICAgcmVzcG9uc2U6IFQ7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBleGVjdXRlZCBvbiB0aGUgc2VydmVyIHdoZXJlIHByb2Nlc3MuZW52IGlzIGF2YWlsYWJsZS5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRnJvbVRydWNrZXJzSHViPFQ+KGVuZHBvaW50OiBzdHJpbmcsIHBhcmFtcz86IFVSTFNlYXJjaFBhcmFtcyk6IFByb21pc2U8VCB8IG51bGw+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5UUlVDS0VSU0hVQl9BUElfS0VZO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUUlVDS0VSU0hVQl9BUElfS0VZIGlzIG5vdCBzZXQuXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Byb2Nlc3MuZW52LkFQUF9VUkx9L2FwaS90cnVja2Vyc2h1YmApO1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnZW5kcG9pbnQnLCBlbmRwb2ludCk7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVXNlIGEgY2FjaGUtc2Vuc2l0aXZlIGZldGNoXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpLCB7XG4gICAgICAgICAgICBuZXh0OiB7IHJldmFsaWRhdGU6IDMwMCB9IC8vIFJldmFsaWRhdGUgZXZlcnkgNSBtaW51dGVzXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBmZXRjaCBmcm9tIFRydWNrZXJzSHViICgke2VuZHBvaW50fSk6YCwgcmVzLnN0YXR1cywgYXdhaXQgcmVzLnRleHQoKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGE6IFRydWNrZXJzSHViUmVzcG9uc2U8VD4gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEucmVzcG9uc2UpICYmIGRhdGEucmVzcG9uc2UubGVuZ3RoID09PSAwKSByZXR1cm4gW10gYXMgVDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5yZXNwb25zZSA9PT0gJ29iamVjdCcgJiYgZGF0YS5yZXNwb25zZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhkYXRhLnJlc3BvbnNlKS5sZW5ndGggPT09IDApIHJldHVybiB7fSBhcyBUO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEucmVzcG9uc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBdm9pZCBsb2dnaW5nIGVycm9ycyBmb3IgZW1wdHkgYnV0IHZhbGlkIHJlc3BvbnNlc1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UgJiYgdHlwZW9mIGRhdGEucmVzcG9uc2UgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGRhdGEucmVzcG9uc2UpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBBUEkgcmVzcG9uc2Ugc3RydWN0dXJlIGZyb20gVHJ1Y2tlcnNIdWIgKCR7ZW5kcG9pbnR9KTpgLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmcgZnJvbSBUcnVja2Vyc0h1YiAoJHtlbmRwb2ludH0pOmAsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXNoYm9hcmREYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IFtzdGF0c0RhdGEsIGFsbFRpbWUsIG1vbnRobHksIGpvYnMsIHVzZXIsIGxpdmVEcml2ZXJzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoRnJvbVRydWNrZXJzSHViPHsgdnRjOiBWdGNTdGF0cyB9PigndnRjJyksXG4gICAgICAgICAgICBmZXRjaEZyb21UcnVja2Vyc0h1YjxMZWFkZXJib2FyZFVzZXJbXT4oJ2xlYWRlcmJvYXJkL2FsbHRpbWUnKSxcbiAgICAgICAgICAgIGZldGNoRnJvbVRydWNrZXJzSHViPExlYWRlcmJvYXJkVXNlcltdPignbGVhZGVyYm9hcmQvbW9udGhseScpLFxuICAgICAgICAgICAgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8Sm9iW10+KCdqb2JzL2FsbCcpLFxuICAgICAgICAgICAgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWI8eyB1c2VybmFtZTogc3RyaW5nIH0+KCd1c2VyJyksXG4gICAgICAgICAgICBmZXRjaEZyb21UcnVja2Vyc0h1YjxMaXZlRHJpdmVyW10+KCdsaXZlL2RyaXZlcnMnKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc3Qgc3RhdHMgPSBzdGF0c0RhdGEgPyBzdGF0c0RhdGEudnRjIDogbnVsbDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7IHN0YXRzLCBhbGxUaW1lLCBtb250aGx5LCBqb2JzLCB1c2VyLCBsaXZlRHJpdmVycyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGFzaGJvYXJkIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgc3RhdHM6IG51bGwsIGFsbFRpbWU6IG51bGwsIG1vbnRobHk6IG51bGwsIGpvYnM6IG51bGwsIHVzZXI6IG51bGwsIGxpdmVEcml2ZXJzOiBudWxsIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVnRjSm9icyhtb250aD86IHN0cmluZywgeWVhcj86IHN0cmluZyk6IFByb21pc2U8Sm9iW10+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgaWYgKG1vbnRoKSBwYXJhbXMuYXBwZW5kKCdtb250aCcsIG1vbnRoKTtcbiAgICBpZiAoeWVhcikgcGFyYW1zLmFwcGVuZCgneWVhcicsIHllYXIpO1xuICAgIHJldHVybiBhd2FpdCBmZXRjaEZyb21UcnVja2Vyc0h1YjxKb2JbXT4oJ2pvYnMvYWxsJywgcGFyYW1zKSB8fCBbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE15Sm9icygpOiBQcm9taXNlPEpvYltdPiB7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoRnJvbVRydWNrZXJzSHViPEpvYltdPignam9icycpIHx8IFtdO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2U0EwRHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/events.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"events\":[{\"id\":\"31441\",\"imageId\":\"event-31441\",\"title\":\"Saffron Line CC - December Convoy\",\"url\":\"https://truckersmp.com/events/31441-saffron-line-cc--december-convoy\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"09.12.2025 | 11:30 UTC\",\"meetupTime\":\"09.12.2025 | 11:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Company Slots (Geneva)\",\"arrival\":\"Stein Bruch (Munich)\",\"server\":\"To be determined\"},{\"id\":\"26148\",\"imageId\":\"event-26148\",\"title\":\"🎉Legacy Transport [LTVTC] 1st Anniversary Convoy🎉\",\"url\":\"https://truckersmp.com/events/26148-%F0%9F%8E%89legacy-transport%5Bltvtc%5D1st-anniversary-convoy%F0%9F%8E%89\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"25.10.2025 | 12:00 UTC\",\"meetupTime\":\"25.10.2025 | 12:00 UTC\",\"departureTime\":\"25.10.2025 | 13:00 UTC\",\"slots\":[],\"departure\":\"Slot (Munich)\",\"arrival\":\"Terminal Container Port (Trieste)\",\"server\":\"Event Server\",\"routeMapUrl\":\"\"},{\"id\":\"31423\",\"imageId\":\"event-31423\",\"title\":\"TruckersMP's Halloween Experience\",\"url\":\"https://truckersmp.com/events/31423-truckersmp%27s-halloween-experience\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"25.10.2025 | 15:00 UTC\",\"meetupTime\":\"25.10.2025 | 15:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Frankfurt, Strasburg or Liege (Other)\",\"arrival\":\"Frankfurt, Strasburg or Liege (Other)\",\"server\":\"Event Server\"},{\"id\":\"28917\",\"imageId\":\"event-28917\",\"title\":\"CN XM Team Convoy#14\",\"url\":\"https://truckersmp.com/events/28917-cn-xm-team-convoy#14\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"14.11.2025 | 11:00 UTC\",\"meetupTime\":\"14.11.2025 | 11:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slot (Leipzig)\",\"arrival\":\"All city where no collision (Duisburg)\",\"server\":\"Event Server\"},{\"id\":\"29157\",\"imageId\":\"event-29157\",\"title\":\"INDIAN CARRIERS DECEMBER PUBLIC CONVOY 2025\",\"url\":\"https://truckersmp.com/events/29157-indian-carriers-december-public-convoy2025\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"14.12.2025 | 14:00 UTC\",\"meetupTime\":\"14.12.2025 | 14:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Cardiff)\",\"arrival\":\"Port (Newcastle upon Tyne)\",\"server\":\"To be determined\"},{\"id\":\"27037\",\"imageId\":\"event-27037\",\"title\":\"ETS2MCG Christmas Convoy\",\"url\":\"https://truckersmp.com/events/27037-ets2mcg-christmas-convoy\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"21.12.2025 | 12:00 UTC\",\"meetupTime\":\"21.12.2025 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"City (TruckersMP HQ)\",\"arrival\":\"Quarry (Prague)\",\"server\":\"To be determined\"},{\"id\":\"31176\",\"imageId\":\"event-31176\",\"title\":\"SFMPDL X Indian Carriers Partner Ship Convoy\",\"url\":\"https://truckersmp.com/events/31176-sfmpdl-x-indian-carriers-partner-ship-convoy\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"10.02.2026 | 16:00 UTC\",\"meetupTime\":\"10.02.2026 | 16:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Geneva)\",\"arrival\":\"Euro Goodies (Innsbruck)\",\"server\":\"To be determined\"},{\"id\":\"29795\",\"imageId\":\"event-29795\",\"title\":\"KERALA ROADRUNNERS NOVEMBER VOYAGE\",\"url\":\"https://truckersmp.com/events/29795-kerala-roadrunners-november-voyage\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"01.11.2025 | 14:00 UTC\",\"meetupTime\":\"01.11.2025 | 14:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"SLOTS (Nuremberg)\",\"arrival\":\"Tree ET (Bern)\",\"server\":\"To be determined\"},{\"id\":\"31266\",\"imageId\":\"event-31266\",\"title\":\"NOVEMBER DRIVE: BOUND BY BROTHERHOOD\",\"url\":\"https://truckersmp.com/events/31266-november-drive:-bound-by-brotherhood\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"20.11.2025 | 12:00 UTC\",\"meetupTime\":\"20.11.2025 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"SLOTS (Rostock)\",\"arrival\":\"STEIN BRUCH (Prague)\",\"server\":\"To be determined\"},{\"id\":\"31042\",\"imageId\":\"event-31042\",\"title\":\"Ouka Logistics March Event #3\",\"url\":\"https://truckersmp.com/events/31042-ouka-logistics-march-event#3\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"28.03.2026 | 12:00 UTC\",\"meetupTime\":\"28.03.2026 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"slot (Dover)\",\"arrival\":\"Stein Bruch (Glasgow)\",\"server\":\"To be determined\"},{\"id\":\"31031\",\"imageId\":\"event-31031\",\"title\":\"INDIAN CARRIERS JANUARY PUBLIC CONVOY 2026\",\"url\":\"https://truckersmp.com/events/31031-indian-carriers-january-public-convoy2026\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"02.01.2026 | 13:30 UTC\",\"meetupTime\":\"02.01.2026 | 13:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Calais)\",\"arrival\":\"Stein Bruch (Mannheim)\",\"server\":\"To be determined\"},{\"id\":\"29346\",\"imageId\":\"event-29346\",\"title\":\"4° Anniversary MT Logistica\",\"url\":\"https://truckersmp.com/events/29346-4%C2%B0-anniversary-mt-logistica\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"08.03.2026 | 13:30 UTC\",\"meetupTime\":\"08.03.2026 | 13:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Città / Slot (Düsseldorf)\",\"arrival\":\"Steinbruch (Strasbourg)\",\"server\":\"To be determined\"},{\"id\":\"30916\",\"imageId\":\"event-30916\",\"title\":\"🎉 Lumo Haul 1st Anniversary 🎉\",\"url\":\"https://truckersmp.com/events/30916-%F0%9F%8E%89-lumo-haul1st-anniversary%F0%9F%8E%89\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"21.03.2026 | 13:30 UTC\",\"meetupTime\":\"21.03.2026 | 13:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Munich)\",\"arrival\":\"Steinbruch (Strasbourg)\",\"server\":\"To be determined\"},{\"id\":\"29156\",\"imageId\":\"event-29156\",\"title\":\"INDIAN CARRIERS NOVEMBER PUBLIC CONVOY 2025\",\"url\":\"https://truckersmp.com/events/29156-indian-carriers-november-public-convoy2025\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"15.11.2025 | 12:00 UTC\",\"meetupTime\":\"15.11.2025 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Frankfurt am Main)\",\"arrival\":\"Rest Area (Travemünde)\",\"server\":\"To be determined\"},{\"id\":\"24964\",\"imageId\":\"event-24964\",\"title\":\"Nexon Logistics December Convoy #66\",\"url\":\"https://truckersmp.com/events/24964-nexon-logistics-december-convoy#66\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"06.12.2025 | 12:00 UTC\",\"meetupTime\":\"06.12.2025 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Iași)\",\"arrival\":\"Container Port (Burgas)\",\"server\":\"Event Server\"},{\"id\":\"30763\",\"imageId\":\"event-30763\",\"title\":\"Ouka Logistics 1st Anniversary Event\",\"url\":\"https://truckersmp.com/events/30763-ouka-logistics1st-anniversary-event\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"06.02.2026 | 12:30 UTC\",\"meetupTime\":\"06.02.2026 | 12:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"slot (Prague)\",\"arrival\":\"chanmey (Bern)\",\"server\":\"To be determined\"},{\"id\":\"30640\",\"imageId\":\"event-30640\",\"title\":\"Opening Convoy | Shine Media & Events\",\"url\":\"https://truckersmp.com/events/30640-opening-convoy|-shine-media&-events\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"10.01.2026 | 12:00 UTC\",\"meetupTime\":\"10.01.2026 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Booked Slots (London)\",\"arrival\":\"New Castle Port (Newcastle)\",\"server\":\"To be determined\"},{\"id\":\"30288\",\"imageId\":\"event-30288\",\"title\":\"Nexon Logistics February Convoy #70\",\"url\":\"https://truckersmp.com/events/30288-nexon-logistics-february-convoy#70\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"21.02.2026 | 12:00 UTC\",\"meetupTime\":\"21.02.2026 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Cologne)\",\"arrival\":\"City (Dijon)\",\"server\":\"To be determined\"},{\"id\":\"29938\",\"imageId\":\"event-29938\",\"title\":\"Saffron Line CC - Opening Convoy\",\"url\":\"https://truckersmp.com/events/29938-saffron-line-cc--opening-convoy\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"29.11.2025 | 14:00 UTC\",\"meetupTime\":\"29.11.2025 | 14:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Klagenfurt am Wörthersee)\",\"arrival\":\"Quarry (TruckersMP HQ)\",\"server\":\"Simulation 2\"},{\"id\":\"31204\",\"imageId\":\"event-31204\",\"title\":\"Nexus Transport October Odyssey\",\"url\":\"https://truckersmp.com/events/31204-nexus-transport-october-odyssey\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"24.10.2025 | 12:00 UTC\",\"meetupTime\":\"24.10.2025 | 12:00 UTC\",\"departureTime\":\"24.10.2025 | 13:00 UTC\",\"slots\":[],\"departure\":\"Port (Calais)\",\"arrival\":\"Port (Kirkenes)\",\"server\":\"Event Server\",\"routeMapUrl\":\"https://static.truckersmp.com/images/event/route/31204.1759145518.png\"},{\"id\":\"31227\",\"imageId\":\"event-31227\",\"title\":\"Tamil Pasanga March 2026 Public Convoy\",\"url\":\"https://truckersmp.com/events/31227-tamil-pasanga-march2026-public-convoy\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"29.03.2026 | 14:00 UTC\",\"meetupTime\":\"29.03.2026 | 14:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Paris)\",\"arrival\":\"Stein Bruch (Mannheim)\",\"server\":\"To be determined\",\"routeMapUrl\":\"\"},{\"id\":\"31138\",\"imageId\":\"event-31138\",\"title\":\"Tamil Pasanga February 2026 Public Convoy\",\"url\":\"https://truckersmp.com/events/31138-tamil-pasanga-february2026-public-convoy\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"28.02.2026 | 14:00 UTC\",\"meetupTime\":\"28.02.2026 | 14:00 UTC\",\"departureTime\":\"28.02.2026 | 15:00 UTC\",\"slots\":[],\"departure\":\"Slots (Bremen)\",\"arrival\":\"Stein Bruch (Reims)\",\"server\":\"To be determined\",\"routeMapUrl\":\"\"},{\"id\":\"30756\",\"imageId\":\"event-30756\",\"title\":\"Tamil Pasanga VTC 2026 Kickstart Convoy 🚛\",\"url\":\"https://truckersmp.com/events/30756\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"24.01.2026 | 14:00 UTC\",\"meetupTime\":\"24.01.2026 | 14:00 UTC\",\"departureTime\":\"24.01.2026 | 15:00 UTC\",\"slots\":[{\"id\":\"slot-area-1761117649143\",\"areaName\":\"TruckersMP HQ (TruckersMP Building)\",\"imageUrl\":\"https://i.postimg.cc/5N9GyqmV/Truckers-MP-HQ-Truckers-MP-Building.png\",\"startSlot\":1,\"endSlot\":1,\"bookings\":[{\"id\":\"booking-1761119161363\",\"slotNumber\":1,\"vtcName\":\"Black Pearl Trucking Logistics\",\"status\":\"approved\"}]},{\"id\":\"slot-area-1761118034431\",\"areaName\":\"TruckersMP HQ (Kaarfor)\",\"imageUrl\":\"https://i.postimg.cc/K8HCdkBy/Truckers-MP-HQ-Kaarfor.png\",\"startSlot\":2,\"endSlot\":3,\"bookings\":[{\"id\":\"booking-1761119244164\",\"slotNumber\":2,\"vtcName\":\"indian carriers\",\"status\":\"approved\"},{\"id\":\"booking-1761119284839\",\"slotNumber\":3,\"vtcName\":\"Nexus Transport,\",\"status\":\"approved\"}]},{\"id\":\"slot-area-1761118278431\",\"areaName\":\"TruckersMP HQ (Trameri)\",\"imageUrl\":\"https://i.postimg.cc/WpwCsfg8/Truckers-MP-HQ-Trameri.png\",\"startSlot\":4,\"endSlot\":5,\"bookings\":[{\"id\":\"booking-1761119513108\",\"slotNumber\":4,\"vtcName\":\"NepPath,\",\"status\":\"approved\"}]},{\"id\":\"slot-area-1761118328823\",\"areaName\":\"TruckersMP HQ (Stokes)\",\"imageUrl\":\"https://i.postimg.cc/L52WzzKj/Truckers-MP-HQ-Stokes.png\",\"startSlot\":6,\"endSlot\":9,\"bookings\":[{\"id\":\"booking-1761119558655\",\"slotNumber\":5,\"vtcName\":\"Pean Logistics\",\"status\":\"approved\"},{\"id\":\"booking-1761119755706\",\"slotNumber\":8,\"vtcName\":\"Prime logistices\",\"status\":\"approved\"},{\"id\":\"booking-1761119782127\",\"slotNumber\":9,\"vtcName\":\"Ethereal Transport\",\"status\":\"approved\"},{\"id\":\"booking-1761120079974\",\"slotNumber\":7,\"vtcName\":\"Luma haul\",\"status\":\"approved\"},{\"id\":\"booking-1761120189022\",\"slotNumber\":6,\"vtcName\":\"Pean Logistices\",\"status\":\"approved\"}]},{\"id\":\"slot-area-1761118364423\",\"areaName\":\"TruckersMP HQ (Parking Area 1)\",\"imageUrl\":\"https://i.postimg.cc/YSLTkrzL/Truckers-MP-HQ-Parking-Lot.png\",\"startSlot\":10,\"endSlot\":21,\"bookings\":[]},{\"id\":\"slot-area-1761118397480\",\"areaName\":\"TruckersMP HQ (Recruitment Agency)\",\"imageUrl\":\"https://i.postimg.cc/V6jTrKTY/Truckers-MP-HQ-Recruitment-Agency.png\",\"startSlot\":22,\"endSlot\":22,\"bookings\":[]},{\"id\":\"slot-area-1761118424694\",\"areaName\":\"TruckersMP HQ (Parking Area 2)\",\"imageUrl\":\"https://i.postimg.cc/t4TLSt15/Truckers-MP-HQ-Parking-Lot-2.png\",\"startSlot\":23,\"endSlot\":26,\"bookings\":[]},{\"id\":\"slot-area-1761118459038\",\"areaName\":\"TruckersMP HQ (Subse)\",\"imageUrl\":\"https://i.postimg.cc/brgBLspW/Truckers-MP-HQ-Subse.png\",\"startSlot\":27,\"endSlot\":28,\"bookings\":[]},{\"id\":\"slot-area-1761118499887\",\"areaName\":\"TruckersMP HQ (ACC)\",\"imageUrl\":\"https://i.postimg.cc/zvrs0sWb/Truckers-MP-HQ-ACC.png\",\"startSlot\":29,\"endSlot\":31,\"bookings\":[]},{\"id\":\"slot-area-1761118526876\",\"areaName\":\"TruckersMP HQ (Railway Station)\",\"imageUrl\":\"https://i.postimg.cc/rm63wBfn/Truckers-MP-HQ-Railway-Station.png\",\"startSlot\":32,\"endSlot\":33,\"bookings\":[]},{\"id\":\"slot-area-1761118650422\",\"areaName\":\"TruckersMP HQ (Cargotras)\",\"imageUrl\":\"https://i.postimg.cc/595d6tdw/Truckers-MP-HQ-Cargotras.png\",\"startSlot\":34,\"endSlot\":35,\"bookings\":[]}],\"departure\":\"Slots (TruckersMP HQ)\",\"arrival\":\"Container Port (Bremen)\",\"server\":\"To be determined\",\"routeMapUrl\":\"https://static.truckersmp.com/images/event/map/30756.1757627576.png\"},{\"id\":\"30881\",\"imageId\":\"event-30881\",\"title\":\"Tamil Pasanga VTC December 2025 Public Convoy\",\"url\":\"https://truckersmp.com/events/30881-tamil-pasanga-vtc-december2025-public-convoy\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"28.12.2025 | 14:00 UTC\",\"meetupTime\":\"28.12.2025 | 14:00 UTC\",\"departureTime\":\"28.12.2025 | 15:00 UTC\",\"slots\":[],\"departure\":\"Liverpool (Slots)\",\"arrival\":\"Glasgow (Stein Bruch)\",\"server\":\"Event Server\",\"routeMapUrl\":\"\"},{\"id\":\"30741\",\"imageId\":\"event-30741\",\"title\":\"Tamil Pasanga VTC November 2025 Public convoy\",\"url\":\"https://truckersmp.com/events/30741\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"23.11.2025 | 14:00 UTC\",\"meetupTime\":\"23.11.2025 | 14:00 UTC\",\"departureTime\":\"23.11.2025 | 15:00 UTC\",\"slots\":[],\"departure\":\"Slots (Düsseldorf)\",\"arrival\":\"Rest Area (TruckersMP HQ)\",\"server\":\"Event Server\",\"routeMapUrl\":\"https://media.discordapp.net/attachments/1421178248888062003/1431602700388991056/route.png?ex=68f23f3e&is=68f0edbe&hm=214041d4411c5211a7b458b093404c0d1656c175390772f7a07535b448b11a91&=&format=webp&quality=lossless\"},{\"id\":\"30733\",\"title\":\"Tamil Pasanga VTC October 2025 Public Convoy\",\"date\":\"26.10.2025 | 10:30 UTC\",\"imageId\":\"event-october-2025\",\"url\":\"https://truckersmp.com/events/30733-tamil-pasanga-vtc-october2025-public-convoy\",\"routeMapUrl\":\"https://media.discordapp.net/attachments/1421178248888062003/1421370211536732180/route.png?ex=68d83155&is=68d6dfd5&hm=0055a47895e6f3322f256c70313f89e248a39a6ba2c72b226e6d1b110f00f07b&=&format=webp&quality=lossless\",\"type\":\"internal\",\"attendees\":0,\"vtcs\":0,\"departure\":\"Calais\",\"arrival\":\"Mannheim\",\"server\":\"Event Server\",\"meetupTime\":\"26.10.2025 | 10:30 UTC\",\"departureTime\":\"26.10.2025 | 11:30 UTC\",\"description\":\"We are pleased to announce that our community will be hosting a convoy this October, and we warmly invite fellow VTC members to join us for this exciting event. Your participation will not only enhance the experience but also help us create lasting memories together. Let’s ride united and make this convoy a truly unforgettable one.\",\"rules\":\"TMP Guidelines apply. If you plan to participate, kindly mark your VTC’s presence on the official event page to help us coordinate effectively and ensure a smooth experience for all attendees. For our Smooth Operation of our convoy this Event is Supervised by Drive Along\",\"slots\":[]}]}"));}}),
"[project]/src/lib/date-utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatDateTimeFromISO": (()=>formatDateTimeFromISO),
    "parseDateTimeString": (()=>parseDateTimeString),
    "parseEventDate": (()=>parseEventDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
const parseEventDate = (dateTimeStr)=>{
    if (!dateTimeStr) return null;
    if (dateTimeStr.includes(' | ')) {
        const parts = dateTimeStr.split(' | ');
        const datePart = parts[0];
        const timePart = parts[1];
        const dateMatch = datePart.match(/(\d{2})\.(\d{2})\.(\d{4})/);
        if (!dateMatch) return null;
        const [, day, month, year] = dateMatch.map(Number);
        const timeMatch = timePart.match(/(\d{2}):(\d{2})/);
        if (!timeMatch) return null;
        const [hour, minute] = timeMatch.slice(1).map(Number);
        if (isNaN(day) || isNaN(month) || isNaN(year) || isNaN(hour) || isNaN(minute)) {
            return null;
        }
        return new Date(Date.UTC(year, month - 1, day, hour, minute));
    }
    // Fallback for ISO string or other parsable formats
    try {
        const date = new Date(dateTimeStr);
        if (!isNaN(date.getTime())) {
            return date;
        }
    } catch (e) {
        return null;
    }
    return null;
};
const timeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    hour: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    minute: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    timezone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
});
const parseDateTimeString = (dateTimeStr)=>{
    const defaultTime = {
        hour: '13',
        minute: '00',
        timezone: 'UTC'
    };
    if (!dateTimeStr) {
        return {
            date: new Date(),
            time: defaultTime
        };
    }
    const date = parseEventDate(dateTimeStr);
    if (date && !isNaN(date.getTime())) {
        const hour = String(date.getUTCHours()).padStart(2, '0');
        const minute = String(date.getUTCMinutes()).padStart(2, '0');
        const timePartMatch = dateTimeStr.match(/\d{2}:\d{2}\s?(\w+)?/);
        const timezone = timePartMatch?.[1] || 'UTC';
        return {
            date: new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
            time: {
                hour,
                minute,
                timezone
            }
        };
    }
    return {
        date: new Date(),
        time: defaultTime
    };
};
const formatDateTimeFromISO = (isoString)=>{
    if (!isoString || isoString.includes('NaN')) {
        return 'TBD';
    }
    try {
        const date = new Date(isoString);
        if (isNaN(date.getTime())) {
            return 'TBD';
        }
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
        const hour = String(date.getUTCHours()).padStart(2, '0');
        const minute = String(date.getUTCMinutes()).padStart(2, '0');
        return `${day}.${month}.${year} | ${hour}:${minute} UTC`;
    } catch (e) {
        return 'TBD';
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/driver-hub/profile/data:7b94b1 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40fd4297d0ee03e0f048c25cec0c7fdd31c36392c2":"getProfileData"},"src/app/driver-hub/profile/actions.ts",""] */ __turbopack_context__.s({
    "getProfileData": (()=>getProfileData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getProfileData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40fd4297d0ee03e0f048c25cec0c7fdd31c36392c2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProfileData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHR5cGUgeyBKb2IgfSBmcm9tICdAL2xpYi90cnVja2Vyc2h1Yi10eXBlcyc7XG5pbXBvcnQgdHlwZSB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQC9saWIvYXBwbGljYXRpb25zJztcbmltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IHVuc3RhYmxlX2NhY2hlIGFzIGNhY2hlIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cblxuY29uc3QgYXBwbGljYXRpb25zRmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycsICdsaWInLCAnYXBwbGljYXRpb25zLmpzb24nKTtcblxuXG5jb25zdCByZWFkSnNvbkZpbGUgPSBjYWNoZShhc3luYyA8VD4oZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8VD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGYtOCcpO1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKChlcnJvciBhcyBOb2RlSlMuRXJybm9FeGNlcHRpb24pLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICAgICAgIHJldHVybiB7IGFwcGxpY2F0aW9uczogW10gfSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufSwgWydqc29uLWZpbGVzLWRhdGEnXSwgeyByZXZhbGlkYXRlOiAxMCB9KTtcblxuXG50eXBlIFVzZXJBcGlSZXNwb25zZSA9IHtcbiAgICBzdGF0dXM6IGJvb2xlYW47XG4gICAgcmVzcG9uc2U6IHtcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgICAgYXZhdGFyOiBzdHJpbmc7XG4gICAgICAgIGNvdW50cnk6IHN0cmluZztcbiAgICAgICAgcm9sZToge1xuICAgICAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICB0cnVja2Vyc21wX2lkOiBudW1iZXI7XG4gICAgICAgIHN0ZWFtX2lkOiBzdHJpbmc7XG4gICAgICAgIHRvdGFsX2ttOiBudW1iZXI7XG4gICAgICAgIHRvdGFsX2pvYnM6IG51bWJlcjtcbiAgICAgICAgbG9uZ2VzdF9qb2I6IG51bWJlcjtcbiAgICAgICAgaWQ6IG51bWJlcjtcbiAgICAgICAgcmVnaXN0ZXJlZDogc3RyaW5nO1xuICAgICAgICB4cDogbnVtYmVyO1xuICAgICAgICBtb25leTogbnVtYmVyO1xuICAgICAgICB3ZWlnaHQ6IG51bWJlcjtcbiAgICAgICAgZnVlbDogbnVtYmVyO1xuICAgIH07XG59O1xuXG50eXBlIEpvYnNBcGlSZXNwb25zZSA9IHtcbiAgICBzdGF0dXM6IGJvb2xlYW47XG4gICAgcmVzcG9uc2U6IEpvYltdIHwge307XG59O1xuXG50eXBlIFN0YXRzQXBpUmVzcG9uc2UgPSB7XG4gICAgc3RhdHVzOiBib29sZWFuO1xuICAgIHJlc3BvbnNlOiB7XG4gICAgICAgIGV0czogeyB0b3RhbF9rbTogbnVtYmVyOyB0b3RhbF9qb2JzOiBudW1iZXI7IGxvbmdlc3Rfam9iOiBudW1iZXIgfTtcbiAgICAgICAgYXRzOiB7IHRvdGFsX2ttOiBudW1iZXI7IHRvdGFsX2pvYnM6IG51bWJlcjsgbG9uZ2VzdF9qb2I6IG51bWJlciB9O1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUHJvZmlsZSA9IEFwcGxpY2F0aW9uICYge1xuICAgIGxpY2Vuc2VfbnVtYmVyOiBzdHJpbmc7XG4gICAgZGl2aXNpb246IHN0cmluZyB8IG51bGw7XG4gICAgdGltZXpvbmU6IHN0cmluZztcbiAgICBqb2JzOiBKb2JbXTtcbiAgICBzdGF0czogU3RhdHNBcGlSZXNwb25zZVsncmVzcG9uc2UnXSB8IG51bGw7XG4gICAgYXZhdGFyOiBzdHJpbmc7XG4gICAgdG90YWxfa206IG51bWJlcjtcbiAgICB0b3RhbF9qb2JzOiBudW1iZXI7XG4gICAgbG9uZ2VzdF9qb2I6IG51bWJlcjtcbiAgICByZWdpc3RlcmVkOiBzdHJpbmc7XG4gICAgcm9sZTogc3RyaW5nO1xuICAgIG1vbnRobHlfeHA6IG51bWJlcjtcbiAgICBtb250aGx5X2luY29tZTogbnVtYmVyO1xuICAgIG1vbnRobHlfd2VpZ2h0OiBudW1iZXI7XG4gICAgbW9udGhseV9mdWVsOiBudW1iZXI7XG4gICAgdHJ1Y2tlcnNtcElkOiBudW1iZXIgfCBudWxsO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hGcm9tVHJ1Y2tlcnNIdWIoZW5kcG9pbnQ6IHN0cmluZykge1xuICAgICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5UUlVDS0VSU0hVQl9BUElfS0VZO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUUlVDS0VSU0hVQl9BUElfS0VZIGlzIG5vdCBzZXQuXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuQVBQX1VSTH0vYXBpL3RydWNrZXJzaHViP2VuZHBvaW50PSR7ZW5kcG9pbnR9YDtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbmV4dDogeyByZXZhbGlkYXRlOiAzMDAgfSAvLyBSZXZhbGlkYXRlIGV2ZXJ5IDUgbWludXRlc1xuICAgIH0pO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIGZyb20gVHJ1Y2tlcnNIdWIgKCR7ZW5kcG9pbnR9KTpgLCByZXMuc3RhdHVzLCBhd2FpdCByZXMudGV4dCgpKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRNUFZUQ0RldGFpbHModHJ1Y2tlcnNtcElkOiBudW1iZXIgfCBudWxsKSB7XG4gICAgaWYgKCF0cnVja2Vyc21wSWQpIHJldHVybiBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkFQUF9VUkx9L2FwaS90cnVja2Vyc21wP2VuZHBvaW50PXBsYXllci8ke3RydWNrZXJzbXBJZH1gKTtcbiAgICAgICAgaWYgKCFyZXMub2spIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGEucmVzcG9uc2U/LnZ0YztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGZyb20gVHJ1Y2tlcnNNUDpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2ZpbGVEYXRhKGVtYWlsOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJQcm9maWxlIHwgbnVsbD4ge1xuICAgIGNvbnN0IGFwcGxpY2F0aW9uc0RhdGEgPSBhd2FpdCByZWFkSnNvbkZpbGU8eyBhcHBsaWNhdGlvbnM6IEFwcGxpY2F0aW9uW10gfT4oYXBwbGljYXRpb25zRmlsZVBhdGgpO1xuICAgIGNvbnN0IHVzZXJBcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uc0RhdGEuYXBwbGljYXRpb25zLmZpbmQoYXBwID0+IGFwcC5lbWFpbCA9PT0gZW1haWwgJiYgYXBwLnN0YXR1cyA9PT0gJ0FjY2VwdGVkJyk7XG5cbiAgICBpZiAodXNlckFwcGxpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IFtqb2JzRGF0YSwgc3RhdHNEYXRhLCBkcml2ZXJEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoRnJvbVRydWNrZXJzSHViKGBkcml2ZXJzLyR7dXNlckFwcGxpY2F0aW9uLnN0ZWFtSWR9L2pvYnNgKSBhcyBQcm9taXNlPEpvYnNBcGlSZXNwb25zZSB8IG51bGw+LFxuICAgICAgICAgICAgZmV0Y2hGcm9tVHJ1Y2tlcnNIdWIoYHN0YXRzLyR7dXNlckFwcGxpY2F0aW9uLnN0ZWFtSWR9YCkgYXMgUHJvbWlzZTxTdGF0c0FwaVJlc3BvbnNlIHwgbnVsbD4sXG4gICAgICAgICAgICBmZXRjaEZyb21UcnVja2Vyc0h1YihgZHJpdmVycy8ke3VzZXJBcHBsaWNhdGlvbi5zdGVhbUlkfWApIGFzIFByb21pc2U8VXNlckFwaVJlc3BvbnNlIHwgbnVsbD4sXG4gICAgICAgIF0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZHJpdmVyID0gKGRyaXZlckRhdGEgJiYgZHJpdmVyRGF0YS5zdGF0dXMpID8gZHJpdmVyRGF0YS5yZXNwb25zZSA6IG51bGw7XG4gICAgICAgIGNvbnN0IHRydWNrZXJzbXBJZCA9IGRyaXZlcj8udHJ1Y2tlcnNtcF9pZCB8fCBudWxsO1xuXG4gICAgICAgIGNvbnN0IFt0bXBWdGNEYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICBnZXRUTVBWVENEZXRhaWxzKHRydWNrZXJzbXBJZCksXG4gICAgICAgIF0pO1xuXG5cbiAgICAgICAgY29uc3Qgam9icyA9IChqb2JzRGF0YSAmJiBqb2JzRGF0YS5zdGF0dXMgJiYgQXJyYXkuaXNBcnJheShqb2JzRGF0YS5yZXNwb25zZSkpID8gam9ic0RhdGEucmVzcG9uc2UgOiBbXTtcbiAgICAgICAgY29uc3Qgc3RhdHMgPSAoc3RhdHNEYXRhICYmIHN0YXRzRGF0YS5zdGF0dXMpID8gc3RhdHNEYXRhLnJlc3BvbnNlIDogbnVsbDtcblxuICAgICAgICBjb25zdCB0b3RhbEttID0gc3RhdHM/LmV0cy50b3RhbF9rbSB8fCAwICsgc3RhdHM/LmF0cy50b3RhbF9rbSB8fCAwO1xuICAgICAgICBjb25zdCB0b3RhbEpvYnMgPSBzdGF0cz8uZXRzLnRvdGFsX2pvYnMgfHwgMCArIHN0YXRzPy5hdHMudG90YWxfam9icyB8fCAwO1xuICAgICAgICBjb25zdCBsb25nZXN0Sm9iID0gTWF0aC5tYXgoc3RhdHM/LmV0cy5sb25nZXN0X2pvYiB8fCAwLCBzdGF0cz8uYXRzLmxvbmdlc3Rfam9iIHx8IDApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi51c2VyQXBwbGljYXRpb24sXG4gICAgICAgICAgICBsaWNlbnNlX251bWJlcjogYFRQJHt1c2VyQXBwbGljYXRpb24uaWQuc3Vic3RyaW5nKDQsIDEwKX1gLFxuICAgICAgICAgICAgZGl2aXNpb246ICdBbHBoYScsXG4gICAgICAgICAgICB0aW1lem9uZTogJ0FzaWEvS29sa2F0YScsIC8vIFBsYWNlaG9sZGVyXG4gICAgICAgICAgICBqb2JzLFxuICAgICAgICAgICAgc3RhdHMsXG4gICAgICAgICAgICBhdmF0YXI6IHVzZXJBcHBsaWNhdGlvbi5hdmF0YXIgfHwgZHJpdmVyPy5hdmF0YXIgfHwgXCJodHRwczovL3N0YXRpYy50cnVja2Vyc21wLmNvbS9hdmF0YXJzLzU2MzU0NzcuMTc1NDAyMDk0Mi5wbmdcIixcbiAgICAgICAgICAgIHRvdGFsX2ttOiB0b3RhbEttLFxuICAgICAgICAgICAgdG90YWxfam9iczogdG90YWxKb2JzLFxuICAgICAgICAgICAgbG9uZ2VzdF9qb2I6IGxvbmdlc3RKb2IsXG4gICAgICAgICAgICByZWdpc3RlcmVkOiBkcml2ZXI/LnJlZ2lzdGVyZWQgfHwgdXNlckFwcGxpY2F0aW9uLnN1Ym1pdHRlZEF0LFxuICAgICAgICAgICAgcm9sZTogdG1wVnRjRGF0YT8ucm9sZSB8fCBkcml2ZXI/LnJvbGUubmFtZSB8fCAnRHJpdmVyJyxcbiAgICAgICAgICAgIG1vbnRobHlfeHA6IGRyaXZlcj8ueHAgfHwgMCxcbiAgICAgICAgICAgIG1vbnRobHlfaW5jb21lOiBkcml2ZXI/Lm1vbmV5IHx8IDAsXG4gICAgICAgICAgICBtb250aGx5X3dlaWdodDogZHJpdmVyPy53ZWlnaHQgfHwgMCxcbiAgICAgICAgICAgIG1vbnRobHlfZnVlbDogZHJpdmVyPy5mdWVsIHx8IDAsXG4gICAgICAgICAgICB0cnVja2Vyc21wSWQ6IHRydWNrZXJzbXBJZCxcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBObyBhY2NlcHRlZCBhcHBsaWNhdGlvbiBmb3VuZCBmb3IgZW1haWw6YCwgZW1haWwpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZTQW1Ic0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/about/data:dade02 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0069bc5ada5c1b6e98a3502aceb678b455d3280c12":"getAchievementsData"},"src/app/about/actions.ts",""] */ __turbopack_context__.s({
    "getAchievementsData": (()=>getAchievementsData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getAchievementsData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0069bc5ada5c1b6e98a3502aceb678b455d3280c12", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAchievementsData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc2VydmVyJztcblxuaW1wb3J0IGV2ZW50c0RhdGEgZnJvbSAnQC9saWIvZXZlbnRzLmpzb24nO1xuaW1wb3J0IHsgcGFyc2VFdmVudERhdGUgfSBmcm9tICdAL2xpYi9kYXRlLXV0aWxzJztcblxuY29uc3QgVlRDX0lEID0gJzczOTMzJztcblxudHlwZSBUcnVja2Vyc01QVnRjUmVzcG9uc2UgPSB7XG4gICAgZXJyb3I6IGJvb2xlYW47XG4gICAgcmVzcG9uc2U/OiB7XG4gICAgICAgIG1lbWJlcnNfY291bnQ6IG51bWJlcjtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoVHJ1Y2tlcnNNUFZ0Y0RhdGEoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudHJ1Y2tlcnNtcC5jb20vdjIvdnRjLyR7VlRDX0lEfWA7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbmV4dDogeyByZXZhbGlkYXRlOiAzNjAwIH0gLy8gUmV2YWxpZGF0ZSBldmVyeSBob3VyXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBmZXRjaCBmcm9tIFRydWNrZXJzTVAgVlRDIGVuZHBvaW50OmAsIHJlcy5zdGF0dXMsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhOiBUcnVja2Vyc01QVnRjUmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGRhdGEgJiYgIWRhdGEuZXJyb3IgJiYgZGF0YS5yZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEucmVzcG9uc2UubWVtYmVyc19jb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgQVBJIHJlc3BvbnNlIHN0cnVjdHVyZSBmcm9tIFRydWNrZXJzTVA6YCwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIGZyb20gVHJ1Y2tlcnNNUDpgLCBlcnJvcik7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29tcGxldGVkRXZlbnRzQ291bnQoKTogbnVtYmVyIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIC8vIFdlIG9ubHkgY291bnQgaW50ZXJuYWwgZXZlbnRzIGFzIFwiY29tcGxldGVkXCIgYnkgdGhlIFZUQ1xuICAgIHJldHVybiBldmVudHNEYXRhLmV2ZW50cy5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSAhPT0gJ2ludGVybmFsJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBldmVudERhdGUgPSBwYXJzZUV2ZW50RGF0ZShldmVudC5tZWV0dXBUaW1lIHx8IGV2ZW50LmRhdGUpO1xuICAgICAgICByZXR1cm4gZXZlbnREYXRlID8gZXZlbnREYXRlIDwgbm93IDogZmFsc2U7XG4gICAgfSkubGVuZ3RoO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWNoaWV2ZW1lbnRzRGF0YSgpIHtcbiAgICBjb25zdCB0b3RhbERyaXZlcnMgPSBhd2FpdCBmZXRjaFRydWNrZXJzTVBWdGNEYXRhKCk7XG4gICAgY29uc3QgY29tcGxldGVkRXZlbnRzID0gZ2V0Q29tcGxldGVkRXZlbnRzQ291bnQoKTtcbiAgICByZXR1cm4geyB0b3RhbERyaXZlcnMsIGNvbXBsZXRlZEV2ZW50cyB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0FtRHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/driver-hub/(hub)/dashboard-client.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DashboardClientPage": (()=>DashboardClientPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$data$3a$e6f688__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/data:e6f688 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/events.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/date-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$data$3a$7b94b1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/driver-hub/profile/data:7b94b1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$about$2f$data$3a$dade02__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/about/data:dade02 [app-client] (ecmascript) <text/javascript>");
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
;
;
;
;
;
;
;
const StatCard = ({ title, value, icon, className = '' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: `bg-card/80 backdrop-blur-sm ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
_c = StatCard;
const monthlyJobsData = [
    {
        name: 'Jun',
        jobs: 2500
    },
    {
        name: 'Jul',
        jobs: 2000
    },
    {
        name: 'Aug',
        jobs: 1800
    },
    {
        name: 'Sep',
        jobs: 1500
    },
    {
        name: 'Oct',
        jobs: 500
    }
];
const goalData = [
    {
        name: 'Completed',
        value: 80
    },
    {
        name: 'Left',
        value: 20
    }
];
const COLORS = [
    '#3CB371',
    '#0d342f'
];
const getGreeting = ()=>{
    const now = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        hour12: false
    };
    const hour = parseInt(new Intl.DateTimeFormat('en-US', options).format(now));
    if (hour >= 5 && hour < 12) {
        return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
        return 'Good Afternoon';
    } else if (hour >= 17 && hour < 21) {
        return 'Good Evening';
    } else {
        return 'Good Night';
    }
};
const getNearestPartnerEvent = ()=>{
    const now = new Date();
    const partnerEvents = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2e$json__$28$json$29$__["default"].events.filter((e)=>e.type === 'partner').map((e)=>({
            ...e,
            parsedDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEventDate"])(e.meetupTime || e.date)
        })).filter((e)=>e.parsedDate && e.parsedDate > now).sort((a, b)=>a.parsedDate.getTime() - b.parsedDate.getTime());
    if (partnerEvents.length === 0) return null;
    const nearestEvent = partnerEvents[0];
    const image = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === nearestEvent.imageId);
    return {
        ...nearestEvent,
        image
    };
};
function DashboardClientPage({ initialDashboardData, initialNearestPartnerEvent, initialUserProfile, initialTotalDrivers }) {
    _s();
    const [greeting, setGreeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dashboardData, setDashboardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDashboardData);
    const [nearestPartnerEvent, setNearestPartnerEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialNearestPartnerEvent);
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialUserProfile);
    const [totalDrivers, setTotalDrivers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTotalDrivers);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!initialDashboardData);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardClientPage.useEffect": ()=>{
            setGreeting(getGreeting());
            const greetingInterval = setInterval({
                "DashboardClientPage.useEffect.greetingInterval": ()=>setGreeting(getGreeting())
            }["DashboardClientPage.useEffect.greetingInterval"], 60000);
            const fetchData = {
                "DashboardClientPage.useEffect.fetchData": async ()=>{
                    try {
                        const [data, achievementsData, profileData] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$data$3a$e6f688__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getDashboardData"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$about$2f$data$3a$dade02__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAchievementsData"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$data$3a$7b94b1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProfileData"])("lsk27102@gmail.com")
                        ]);
                        setDashboardData(data);
                        setTotalDrivers(achievementsData.totalDrivers);
                        setUserProfile(profileData);
                        setNearestPartnerEvent(getNearestPartnerEvent());
                    } catch (error) {
                        console.error("Failed to refresh dashboard data:", error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["DashboardClientPage.useEffect.fetchData"];
            if (!initialDashboardData) {
                fetchData();
            }
            const dataInterval = setInterval(fetchData, 30000);
            return ({
                "DashboardClientPage.useEffect": ()=>{
                    clearInterval(greetingInterval);
                    clearInterval(dataInterval);
                }
            })["DashboardClientPage.useEffect"];
        }
    }["DashboardClientPage.useEffect"], [
        initialDashboardData
    ]);
    if (isLoading || !dashboardData || !userProfile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "mx-auto h-12 w-12 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                    lineNumber: 148,
                    columnNumber: 49
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4",
                    children: "Loading dashboard..."
                }, void 0, false, {
                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                    lineNumber: 148,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
            lineNumber: 148,
            columnNumber: 16
        }, this);
    }
    const { stats, allTime, monthly, jobs, user, liveDrivers } = dashboardData;
    const vtcStats = stats;
    const allTimeLeaderboard = allTime || [];
    const monthlyLeaderboard = monthly || [];
    const recentJobs = jobs || [];
    const username = userProfile?.name || user?.username || "Driver";
    const heroImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'hero-truck');
    const activeDriversCount = liveDrivers?.length ?? 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-8 space-y-6 bg-background text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold text-primary",
                        children: [
                            greeting,
                            " ",
                            username
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 163,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                    lineNumber: 165,
                                    columnNumber: 57
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                    lineNumber: 166,
                                    columnNumber: 57
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                lineNumber: 166,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-9 w-9 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: userProfile?.avatar,
                                                    alt: "User avatar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    children: username.charAt(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                            lineNumber: 169,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                children: "My Account"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                lineNumber: 175,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                lineNumber: 176,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/driver-hub/profile",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Profile"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                lineNumber: 177,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/driver-hub/profile/settings",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Settings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                lineNumber: 183,
                                                columnNumber: 30
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                lineNumber: 189,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Logout"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                                lineNumber: 190,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this),
            heroImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "relative overflow-hidden bg-card border-0 h-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: heroImage.imageUrl,
                        alt: heroImage.description,
                        layout: "fill",
                        objectFit: "cover",
                        className: "z-0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 204,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 205,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "relative z-10 p-6 flex flex-col justify-center h-full text-center items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-headline font-bold text-white",
                                children: "Welcome to Tamil Pasanga VTC"
                            }, void 0, false, {
                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                lineNumber: 207,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mt-2 max-w-2xl",
                                children: "The premier virtual trucking company where passion for the open road meets a vibrant community spirit. Great Experience, We Believe In Quality Not Quantity"
                            }, void 0, false, {
                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                lineNumber: 208,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 206,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                lineNumber: 203,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        title: "Live",
                        value: activeDriversCount.toString(),
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                            lineNumber: 216,
                            columnNumber: 84
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 216,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        title: "Total Drivers",
                        value: totalDrivers > 0 ? totalDrivers.toLocaleString() : '...',
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                            lineNumber: 217,
                            columnNumber: 120
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        title: "Total Distance",
                        value: `${vtcStats?.total_distance?.toLocaleString() || '...'} kms`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                            lineNumber: 218,
                            columnNumber: 125
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        title: "Total Jobs",
                        value: vtcStats?.total_jobs?.toLocaleString() || '...',
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                            lineNumber: 219,
                            columnNumber: 108
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 219,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                lineNumber: 215,
                columnNumber: 14
            }, this),
            nearestPartnerEvent && nearestPartnerEvent.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "relative overflow-hidden bg-transparent border-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: nearestPartnerEvent.image.imageUrl,
                        alt: nearestPartnerEvent.title,
                        layout: "fill",
                        objectFit: "cover",
                        className: "z-0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 225,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50"
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 226,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Latest Event Highlights"
                        }, void 0, false, {
                            fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                            lineNumber: 228,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 227,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "relative z-10 p-6 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-pink-300",
                                        children: "Upcoming Partner Event"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                        lineNumber: 232,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mt-1",
                                        children: nearestPartnerEvent.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground mt-1",
                                        children: nearestPartnerEvent.meetupTime
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                        lineNumber: 234,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                lineNumber: 231,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: nearestPartnerEvent.url,
                                    target: "_blank",
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                    lineNumber: 237,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                                lineNumber: 236,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                        lineNumber: 230,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
                lineNumber: 224,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx",
        lineNumber: 160,
        columnNumber: 9
    }, this);
}
_s(DashboardClientPage, "z8O7cJQu5IPKJpbAnoXI0l8Z9g8=");
_c1 = DashboardClientPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "DashboardClientPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_ad69f923._.js.map