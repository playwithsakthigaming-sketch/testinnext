module.exports = {

"[project]/src/components/app/driver-hub-calendar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DriverHubCalendar": (()=>DriverHubCalendar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$daygrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/daygrid/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$timegrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fullcalendar/timegrid/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const parseDate = (dateStr)=>{
    // Format: "DD.MM.YYYY | HH:mm ZZZ"
    const parts = dateStr.split(' | ');
    if (parts.length < 2) return null;
    const dateParts = parts[0].split('.');
    if (dateParts.length < 3) return null;
    const [day, month, year] = dateParts;
    const timePart = parts[1].split(' ')[0];
    const [hour, minute] = timePart.split(':');
    // Note: Month is 0-indexed in JS Date
    const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute)));
    return isNaN(date.getTime()) ? null : date;
};
function DriverHubCalendar({ events }) {
    const calendarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const calendarEvents = events.map((event)=>{
        const startDate = parseDate(event.meetupTime);
        return {
            id: event.id,
            title: event.title,
            start: startDate ? startDate.toISOString() : new Date().toISOString(),
            url: event.type === 'internal' ? `/driver-hub/events/${event.id}` : event.url,
            backgroundColor: event.type === 'internal' ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
            borderColor: event.type === 'internal' ? 'hsl(var(--accent))' : 'hsl(var(--border))',
            extendedProps: {
                isInternal: event.type === 'internal'
            }
        };
    }).filter((e)=>e.start);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const calendarApi = calendarRef.current?.getApi();
        if (calendarApi) {
            calendarApi.updateSize();
        }
    }, []);
    const handleEventClick = (info)=>{
        info.jsEvent.preventDefault(); // Prevent the default link behavior
        if (info.event.url) {
            if (info.event.extendedProps.isInternal) {
                router.push(info.event.url);
            } else {
                window.open(info.event.url, '_blank');
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 rounded-lg text-sm",
        id: "calendar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        #calendar .fc-toolbar-title { font-size: 1.5rem; }
        #calendar .fc-button { background-color: hsl(var(--primary)); border-color: hsl(var(--primary)); color: hsl(var(--primary-foreground)); }
        #calendar .fc-button:hover { background-color: hsl(var(--primary)) / 0.9; }
        #calendar .fc-button-primary:not(:disabled).fc-button-active { background-color: hsl(var(--accent)); border-color: hsl(var(--accent)); }
        #calendar .fc-daygrid-day.fc-day-today { background-color: hsl(var(--card)); }
        #calendar .fc-daygrid-day-number { color: hsl(var(--foreground)); }
        #calendar .fc-col-header-cell-cushion { color: hsl(var(--foreground)); }
        #calendar .fc-event { padding: 4px; font-size: 0.8rem; cursor: pointer; }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/app/driver-hub-calendar.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: calendarRef,
                plugins: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$daygrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fullcalendar$2f$timegrid$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
                ],
                initialView: "dayGridMonth",
                weekends: true,
                events: calendarEvents,
                eventClick: handleEventClick,
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                height: "auto"
            }, void 0, false, {
                fileName: "[project]/src/components/app/driver-hub-calendar.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/app/driver-hub-calendar.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_components_app_driver-hub-calendar_tsx_e47fc8af._.js.map