module.exports = {

"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40fd4297d0ee03e0f048c25cec0c7fdd31c36392c2":"getProfileData"},"",""] */ __turbopack_context__.s({
    "getProfileData": (()=>getProfileData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const applicationsFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src', 'lib', 'applications.json');
const VTC_ID = '1600';
const readJsonFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (filePath)=>{
    try {
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return {
                applications: []
            };
        }
        throw error;
    }
}, [
    'json-files-data'
], {
    revalidate: 10
});
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
            if (Array.isArray(data.drivers)) return data.drivers;
            if (data.skills) return {
                skills: data.skills
            };
            if (data.routes) return data.routes;
            if (data.statistics) return data.statistics;
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
async function getTMPVTCDetails(truckersmpId) {
    if (!truckersmpId) return null;
    try {
        const res = await fetch(`${process.env.APP_URL}/api/truckersmp?endpoint=player/${truckersmpId}`);
        if (!res.ok) return null;
        const data = await res.json();
        return data.response?.vtc;
    } catch (error) {
        console.error("Failed to fetch from TruckersMP:", error);
        return null;
    }
}
async function getProfileData(email) {
    const applicationsData = await readJsonFile(applicationsFilePath);
    const userApplication = applicationsData.applications.find((app)=>app.email === email && app.status === 'Accepted');
    if (userApplication) {
        const [jobsData, statsData, driverData] = await Promise.all([
            fetchFromTruckersHub(`drivers/${userApplication.steamId}/jobs`),
            fetchFromTruckersHub(`statistics/${userApplication.steamId}`),
            fetchFromTruckersHub(`drivers/${userApplication.steamId}`)
        ]);
        const driver = driverData;
        const truckersmpId = driver?.truckersmp_id || null;
        const [tmpVtcData] = await Promise.all([
            getTMPVTCDetails(truckersmpId)
        ]);
        const jobs = jobsData && Array.isArray(jobsData) ? jobsData : [];
        const stats = statsData || null;
        const totalKm = stats?.total_distance ?? 0;
        const totalJobs = stats?.total_jobs ?? 0;
        return {
            ...userApplication,
            license_number: `TP${userApplication.id.substring(4, 10)}`,
            division: 'Alpha',
            timezone: 'Asia/Kolkata',
            jobs,
            stats,
            avatar: userApplication.avatar || driver?.avatar || "https://static.truckersmp.com/avatars/5635477.1754020942.png",
            total_km: totalKm,
            total_jobs: totalJobs,
            longest_job: 0,
            registered: driver?.registered || userApplication.submittedAt,
            role: tmpVtcData?.role || driver?.role?.name || 'Driver',
            monthly_xp: stats?.xp?.total ?? 0,
            monthly_income: stats?.income?.total ?? 0,
            monthly_weight: stats?.weight?.total ?? 0,
            monthly_fuel: stats?.fuel_burned?.total ?? 0,
            truckersmpId: truckersmpId
        };
    } else {
        console.error(`No accepted application found for email:`, email);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProfileData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProfileData, "40fd4297d0ee03e0f048c25cec0c7fdd31c36392c2", null);
}}),
"[project]/.next-internal/server/app/driver-hub/profile/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)");
;
}}),
"[project]/.next-internal/server/app/driver-hub/profile/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$profile$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/profile/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/driver-hub/profile/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "40fd4297d0ee03e0f048c25cec0c7fdd31c36392c2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfileData"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$profile$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/profile/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/driver-hub/profile/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "40fd4297d0ee03e0f048c25cec0c7fdd31c36392c2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$profile$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40fd4297d0ee03e0f048c25cec0c7fdd31c36392c2"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$profile$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/profile/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f$profile$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/profile/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/driver-hub/profile/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/driver-hub/profile/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/driver-hub/profile/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/driver-hub/profile/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/driver-hub/profile/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/driver-hub/profile/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/driver-hub/profile/page.tsx", "default");
}}),
"[project]/src/app/driver-hub/profile/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/driver-hub/profile/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/profile/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f$profile$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/driver-hub/profile/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/driver-hub/profile/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b50a4371._.js.map