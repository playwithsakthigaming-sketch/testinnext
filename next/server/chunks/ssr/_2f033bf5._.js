module.exports = {

"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"002c5808c412466534bc0e01d021958a5c5f354e89":"getRoutes","005a225106d9394ecdd57f27d99499dc0dcc9a0c6d":"getAvailableSkills","005c4aca74e95a78a5d7582311757fb35021d9dcc1":"getLiveDrivers","0075f4d46f41b2ac7c97ae608d6fc48a4772b8902c":"getLiveDeliveries","00a4a859fdd768006c78bb100b3ae6061e172a81a6":"getDrivers","00d082cd01067ea487fde784b0c7d7ec19a86753ab":"getDashboardData","40080ad4d3d7c09d052d456233d3bccbca0665fc6c":"getMyJobs","408f381cca436ce9493bfd78483fa0da1304680001":"getDriverSkills","40a9dadb6863e3a99a781d51e2f0b0ee9fa237462d":"getJobDetails","6006a75e5aa69475f95d8b93983d98d1aee82c9775":"updateDriverSkills","60b8f3b6cbbb56fc3ea40a5181896a3b048007b926":"getAllVtcJobs"},"",""] */ __turbopack_context__.s({
    "getAllVtcJobs": (()=>getAllVtcJobs),
    "getAvailableSkills": (()=>getAvailableSkills),
    "getDashboardData": (()=>getDashboardData),
    "getDriverSkills": (()=>getDriverSkills),
    "getDrivers": (()=>getDrivers),
    "getJobDetails": (()=>getJobDetails),
    "getLiveDeliveries": (()=>getLiveDeliveries),
    "getLiveDrivers": (()=>getLiveDrivers),
    "getMyJobs": (()=>getMyJobs),
    "getRoutes": (()=>getRoutes),
    "updateDriverSkills": (()=>updateDriverSkills)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const VTC_ID = '1600';
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
                'Authorization': `Bearer ${apiKey}`,
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
        if (data) {
            if (endpoint.startsWith('vtc/')) {
                if (data.vtc) {
                    if (endpoint.endsWith('/jobs')) return data.vtc.jobs;
                    if (endpoint.endsWith('/drivers')) return data.vtc.drivers;
                    if (endpoint.endsWith('/deliveries/live')) return data.vtc.deliveries;
                    if (endpoint.endsWith('/drivers/live')) return data.vtc.drivers_live;
                    return data.vtc;
                }
            }
            if (data.response) return data.response;
            if (data.jobs) return data.jobs;
            if (data.drivers) return data.drivers;
            if (data.skills) return {
                skills: data.skills
            };
            if (data.routes) return data.routes;
            if (Array.isArray(data)) return data;
            if (data.status === false) {
                if (Object.keys(data).length > 2 || endpoint !== 'live/delivery' && !endpoint.includes('vtc')) {
                    console.warn(`TruckersHub API returned status false for ${endpoint}:`, JSON.stringify(data));
                }
                return null;
            }
            return data;
        }
        return null;
    } catch (error) {
        console.error(`Error fetching from TruckersHub (${endpoint}):`, error);
        return null;
    }
}
async function getDashboardData() {
    try {
        const [statsData, allTime, monthly, jobs, liveDrivers] = await Promise.all([
            fetchFromTruckersHub(`vtc/${VTC_ID}`),
            fetchFromTruckersHub('leaderboard/alltime'),
            fetchFromTruckersHub('leaderboard/monthly'),
            fetchFromTruckersHub(`vtc/${VTC_ID}/jobs`),
            fetchFromTruckersHub(`vtc/${VTC_ID}/drivers/live`)
        ]);
        const recentJobs = jobs || [];
        return {
            stats: statsData,
            allTime,
            monthly,
            jobs: recentJobs,
            liveDrivers
        };
    } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        return {
            stats: null,
            allTime: null,
            monthly: null,
            jobs: null,
            liveDrivers: null
        };
    }
}
async function getAllVtcJobs(month, year) {
    const params = new URLSearchParams();
    if (month) params.append('month', month);
    if (year) params.append('year', year);
    const data = await fetchFromTruckersHub(`vtc/${VTC_ID}/jobs`, params);
    return data || [];
}
async function getMyJobs(steamId) {
    const data = await fetchFromTruckersHub(`drivers/${steamId}/jobs`);
    return data || [];
}
async function getJobDetails(jobId) {
    const data = await fetchFromTruckersHub(`jobs/${jobId}`);
    return data?.response ?? null;
}
async function getDrivers() {
    const data = await fetchFromTruckersHub(`vtc/${VTC_ID}/drivers`);
    return Array.isArray(data) ? data : [];
}
async function getRoutes() {
    return await fetchFromTruckersHub(`vtc/${VTC_ID}/routes`) || [];
}
async function getAvailableSkills() {
    const response = await fetchFromTruckersHub('skills');
    return response?.skills || [];
}
async function getDriverSkills(steamId) {
    const response = await fetchFromTruckersHub(`skills/${steamId}`);
    return response?.skills || null;
}
async function updateDriverSkills(steamId, skills) {
    const payload = skills.reduce((acc, skill)=>{
        acc[skill.id] = skill.level;
        return acc;
    }, {});
    const response = await fetchFromTruckersHub(`skills/${steamId}`, new URLSearchParams({
        method: 'POST',
        body: JSON.stringify(payload)
    }));
    if (response && response.status) {
        return {
            success: true
        };
    }
    return {
        success: false,
        message: 'Failed to update skills. The API did not return a success status.'
    };
}
async function getLiveDrivers() {
    const data = await fetchFromTruckersHub(`vtc/${VTC_ID}/drivers/live`);
    return Array.isArray(data) ? data : [];
}
async function getLiveDeliveries() {
    const data = await fetchFromTruckersHub(`vtc/${VTC_ID}/deliveries/live`);
    return data || [];
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDashboardData,
    getAllVtcJobs,
    getMyJobs,
    getJobDetails,
    getDrivers,
    getRoutes,
    getAvailableSkills,
    getDriverSkills,
    updateDriverSkills,
    getLiveDrivers,
    getLiveDeliveries
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDashboardData, "00d082cd01067ea487fde784b0c7d7ec19a86753ab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllVtcJobs, "60b8f3b6cbbb56fc3ea40a5181896a3b048007b926", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMyJobs, "40080ad4d3d7c09d052d456233d3bccbca0665fc6c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobDetails, "40a9dadb6863e3a99a781d51e2f0b0ee9fa237462d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDrivers, "00a4a859fdd768006c78bb100b3ae6061e172a81a6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRoutes, "002c5808c412466534bc0e01d021958a5c5f354e89", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAvailableSkills, "005a225106d9394ecdd57f27d99499dc0dcc9a0c6d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDriverSkills, "408f381cca436ce9493bfd78483fa0da1304680001", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateDriverSkills, "6006a75e5aa69475f95d8b93983d98d1aee82c9775", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLiveDrivers, "005c4aca74e95a78a5d7582311757fb35021d9dcc1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLiveDeliveries, "0075f4d46f41b2ac7c97ae608d6fc48a4772b8902c", null);
}}),
"[project]/.next-internal/server/app/driver-hub/live-map/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
;
;
}}),
"[project]/.next-internal/server/app/driver-hub/live-map/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/live-map/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/driver-hub/live-map/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "005c4aca74e95a78a5d7582311757fb35021d9dcc1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLiveDrivers"]),
    "0075f4d46f41b2ac7c97ae608d6fc48a4772b8902c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLiveDeliveries"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/live-map/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/driver-hub/live-map/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "005c4aca74e95a78a5d7582311757fb35021d9dcc1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["005c4aca74e95a78a5d7582311757fb35021d9dcc1"]),
    "0075f4d46f41b2ac7c97ae608d6fc48a4772b8902c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0075f4d46f41b2ac7c97ae608d6fc48a4772b8902c"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/live-map/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/live-map/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/driver-hub/live-map/live-map-client.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LiveMapClient": (()=>LiveMapClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const LiveMapClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LiveMapClient() from the server but LiveMapClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/driver-hub/live-map/live-map-client.tsx <module evaluation>", "LiveMapClient");
}}),
"[project]/src/app/driver-hub/live-map/live-map-client.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LiveMapClient": (()=>LiveMapClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const LiveMapClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LiveMapClient() from the server but LiveMapClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/driver-hub/live-map/live-map-client.tsx", "LiveMapClient");
}}),
"[project]/src/app/driver-hub/live-map/live-map-client.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$live$2d$map$2d$client$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/driver-hub/live-map/live-map-client.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$live$2d$map$2d$client$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/live-map/live-map-client.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$live$2d$map$2d$client$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/driver-hub/live-map/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LiveMapPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$live$2d$map$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/live-map/live-map-client.tsx [app-rsc] (ecmascript)");
;
;
function LiveMapPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[calc(100vh_-_var(--header-height,4rem))]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$live$2d$map$2f$live$2d$map$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LiveMapClient"], {}, void 0, false, {
            fileName: "[project]/src/app/driver-hub/live-map/page.tsx",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/driver-hub/live-map/page.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/driver-hub/live-map/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/driver-hub/live-map/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_2f033bf5._.js.map