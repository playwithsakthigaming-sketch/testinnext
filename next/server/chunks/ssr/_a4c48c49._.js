module.exports = {

"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00080ad4d3d7c09d052d456233d3bccbca0665fc6c":"getMyJobs","00d082cd01067ea487fde784b0c7d7ec19a86753ab":"getDashboardData","60b8f3b6cbbb56fc3ea40a5181896a3b048007b926":"getAllVtcJobs"},"",""] */ __turbopack_context__.s({
    "getAllVtcJobs": (()=>getAllVtcJobs),
    "getDashboardData": (()=>getDashboardData),
    "getMyJobs": (()=>getMyJobs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
// This function should be executed on the server where process.env is available.
async function fetchFromTruckersHub(endpoint, params) {
    const apiKey = process.env.TRUCKERSHUB_API_KEY;
    if (!apiKey) {
        console.error("TRUCKERSHUB_API_KEY is not set.");
        return null;
    }
    try {
        const url = new URL(`https://api.truckershub.in/v1/${endpoint}`);
        if (params) {
            params.forEach((value, key)=>{
                url.searchParams.append(key, value);
            });
        }
        const res = await fetch(url.toString(), {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json',
                'User-Agent': 'TamilPasangaVTC/1.0'
            },
            next: {
                revalidate: 300
            } // Revalidate every 5 minutes
        });
        if (!res.ok) {
            console.error(`Failed to fetch from TruckersHub (${endpoint}):`, res.status, await res.text());
            return null;
        }
        const data = await res.json();
        if (data && data.status) {
            if (Array.isArray(data.response) && data.response.length === 0) return [];
            if (typeof data.response === 'object' && data.response !== null && Object.keys(data.response).length === 0) return {};
            return data.response;
        } else {
            // Avoid logging errors for empty but valid responses
            if (data.response && typeof data.response === 'object' && Object.keys(data.response).length > 0) {
                console.error(`Invalid API response structure from TruckersHub (${endpoint}):`, data);
            }
            return null;
        }
    } catch (error) {
        console.error(`Error fetching from TruckersHub (${endpoint}):`, error);
        return null;
    }
}
async function getDashboardData() {
    try {
        const [statsData, allTime, monthly, jobs, user, liveDrivers] = await Promise.all([
            fetchFromTruckersHub('vtc'),
            fetchFromTruckersHub('leaderboard/alltime'),
            fetchFromTruckersHub('leaderboard/monthly'),
            fetchFromTruckersHub('jobs/all'),
            fetchFromTruckersHub('user'),
            fetchFromTruckersHub('live/drivers')
        ]);
        const stats = statsData ? statsData.vtc : null;
        return {
            stats,
            allTime,
            monthly,
            jobs,
            user,
            liveDrivers
        };
    } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        return {
            stats: null,
            allTime: null,
            monthly: null,
            jobs: null,
            user: null,
            liveDrivers: null
        };
    }
}
async function getAllVtcJobs(month, year) {
    const params = new URLSearchParams();
    if (month) params.append('month', month);
    if (year) params.append('year', year);
    return await fetchFromTruckersHub('vtc/jobs', params) || [];
}
async function getMyJobs() {
    return await fetchFromTruckersHub('jobs') || [];
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDashboardData,
    getAllVtcJobs,
    getMyJobs
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDashboardData, "00d082cd01067ea487fde784b0c7d7ec19a86753ab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllVtcJobs, "60b8f3b6cbbb56fc3ea40a5181896a3b048007b926", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMyJobs, "00080ad4d3d7c09d052d456233d3bccbca0665fc6c", null);
}}),
"[project]/.next-internal/server/app/driver-hub/jobs/my/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
;
}}),
"[project]/.next-internal/server/app/driver-hub/jobs/my/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$jobs$2f$my$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/jobs/my/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/driver-hub/jobs/my/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00080ad4d3d7c09d052d456233d3bccbca0665fc6c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyJobs"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$jobs$2f$my$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/jobs/my/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/driver-hub/jobs/my/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00080ad4d3d7c09d052d456233d3bccbca0665fc6c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$jobs$2f$my$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00080ad4d3d7c09d052d456233d3bccbca0665fc6c"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$jobs$2f$my$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/jobs/my/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$jobs$2f$my$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/jobs/my/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/driver-hub/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/driver-hub/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/driver-hub/jobs/my/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/driver-hub/jobs/my/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/driver-hub/jobs/my/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/driver-hub/jobs/my/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/driver-hub/jobs/my/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/driver-hub/jobs/my/page.tsx", "default");
}}),
"[project]/src/app/driver-hub/jobs/my/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$jobs$2f$my$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/driver-hub/jobs/my/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$jobs$2f$my$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/jobs/my/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$jobs$2f$my$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/driver-hub/jobs/my/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/driver-hub/jobs/my/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_a4c48c49._.js.map