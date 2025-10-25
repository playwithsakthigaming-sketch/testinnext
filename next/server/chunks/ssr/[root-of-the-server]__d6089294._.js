module.exports = {

"[project]/src/lib/schemas.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "applicationSchema": (()=>applicationSchema),
    "loginSchema": (()=>loginSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
const applicationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Username is required'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email('Invalid email address'),
    truckersmp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url('Invalid TruckersMP profile URL.'),
    truckershub: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url('Invalid TruckersHub profile URL.'),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(8, 'Password must be at least 8 characters long'),
    terms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal(true, {
        errorMap: ()=>({
                message: 'You must accept the terms and conditions'
            })
    })
});
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Email or Profile URL is required'),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Password is required')
});
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[project]/src/app/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40901d3b7b852df843cf090da2fbe5d9d944890944":"getApplicationStatus","40f1f199a825c96ed8f20260f98df34feda717d01a":"submitApplication"},"",""] */ __turbopack_context__.s({
    "getApplicationStatus": (()=>getApplicationStatus),
    "submitApplication": (()=>submitApplication)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const applicationsFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src', 'lib', 'applications.json');
async function readApplications() {
    try {
        const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(applicationsFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return {
                applications: []
            };
        }
        throw error;
    }
}
async function writeApplications(data) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(applicationsFilePath, JSON.stringify(data, null, 2));
}
function generateApplicationId() {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return `TP-${randomNumber}`;
}
async function submitApplication(data) {
    const validation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applicationSchema"].safeParse(data);
    if (!validation.success) {
        return {
            success: false,
            message: 'Invalid form data.',
            errors: validation.error.flatten().fieldErrors
        };
    }
    const applicationId = generateApplicationId();
    const { username, email, truckersmp, truckershub, password } = validation.data;
    const newApplication = {
        id: applicationId,
        name: username,
        email: email,
        password: password,
        truckersmpUrl: truckersmp,
        truckershubUrl: truckershub,
        status: 'Pending',
        submittedAt: new Date().toISOString()
    };
    try {
        const applicationsData = await readApplications();
        applicationsData.applications.unshift(newApplication);
        await writeApplications(applicationsData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/applications');
    } catch (error) {
        console.error('Error saving application:', error);
        return {
            success: false,
            message: 'Server error: Could not save application.'
        };
    }
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set in .env file');
        // Don't fail the whole process if webhook is not set
        return {
            success: true,
            message: 'Application submitted successfully!',
            applicationId
        };
    }
    const fields = [
        {
            name: 'Username',
            value: username,
            inline: true
        },
        {
            name: 'Email',
            value: email,
            inline: true
        },
        {
            name: 'TruckersMP',
            value: truckersmp || 'Not Provided',
            inline: false
        },
        {
            name: 'TruckersHub',
            value: truckershub || 'Not Provided',
            inline: false
        }
    ];
    const embed = {
        title: `New Driver Hub Registration - ${applicationId}`,
        color: 3977201,
        fields: fields,
        timestamp: new Date().toISOString(),
        footer: {
            text: 'Tamil Pasanga VTC Registration'
        }
    };
    const payload = {
        content: `New registration from ${username}`,
        embeds: [
            embed
        ],
        components: [
            {
                type: 1,
                components: [
                    {
                        type: 2,
                        style: 3,
                        label: 'Accept',
                        custom_id: `accept_${applicationId}`
                    },
                    {
                        type: 2,
                        style: 4,
                        label: 'Reject',
                        custom_id: `reject_${applicationId}`
                    }
                ]
            }
        ]
    };
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            console.error(`Discord webhook failed with status: ${response.status}`);
            const errorBody = await response.text();
            console.error('Error body:', errorBody);
        // Don't fail the whole process if webhook fails, application is saved.
        }
        return {
            success: true,
            message: 'Application submitted successfully!',
            applicationId
        };
    } catch (error) {
        console.error('Error submitting application to Discord:', error);
        // Don't fail the whole process if webhook fails, application is saved.
        return {
            success: true,
            message: 'Application submitted successfully!',
            applicationId
        };
    }
}
async function getApplicationStatus(applicationId) {
    const validIdRegex = /^TP-\d{4}$/;
    if (!validIdRegex.test(applicationId)) {
        return {
            applicationId,
            status: 'Not Found'
        };
    }
    try {
        const applicationsData = await readApplications();
        const application = applicationsData.applications.find((app)=>app.id === applicationId);
        if (application) {
            return {
                applicationId,
                status: application.status
            };
        } else {
            return {
                applicationId,
                status: 'Not Found'
            };
        }
    } catch (error) {
        console.error('Error reading application status:', error);
        return {
            applicationId,
            status: 'Not Found'
        }; // Treat file read errors as "Not Found" for the user
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitApplication,
    getApplicationStatus
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitApplication, "40f1f199a825c96ed8f20260f98df34feda717d01a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getApplicationStatus, "40901d3b7b852df843cf090da2fbe5d9d944890944", null);
}}),
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
        const url = new URL(`${process.env.APP_URL}/api/truckershub`);
        url.searchParams.set('endpoint', endpoint);
        if (params) {
            params.forEach((value, key)=>{
                url.searchParams.append(key, value);
            });
        }
        // Use a cache-sensitive fetch
        const res = await fetch(url.toString(), {
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
    return await fetchFromTruckersHub('jobs/all', params) || [];
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
"[project]/.next-internal/server/app/driver-hub/(hub)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
}}),
"[project]/.next-internal/server/app/driver-hub/(hub)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f28$hub$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/(hub)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/driver-hub/(hub)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00080ad4d3d7c09d052d456233d3bccbca0665fc6c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyJobs"]),
    "00d082cd01067ea487fde784b0c7d7ec19a86753ab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardData"]),
    "40f1f199a825c96ed8f20260f98df34feda717d01a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitApplication"]),
    "60b8f3b6cbbb56fc3ea40a5181896a3b048007b926": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllVtcJobs"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f28$hub$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/(hub)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/driver-hub/(hub)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00080ad4d3d7c09d052d456233d3bccbca0665fc6c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f28$hub$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00080ad4d3d7c09d052d456233d3bccbca0665fc6c"]),
    "00d082cd01067ea487fde784b0c7d7ec19a86753ab": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f28$hub$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00d082cd01067ea487fde784b0c7d7ec19a86753ab"]),
    "40f1f199a825c96ed8f20260f98df34feda717d01a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f28$hub$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40f1f199a825c96ed8f20260f98df34feda717d01a"]),
    "60b8f3b6cbbb56fc3ea40a5181896a3b048007b926": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f28$hub$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60b8f3b6cbbb56fc3ea40a5181896a3b048007b926"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f28$hub$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/(hub)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$driver$2d$hub$2f28$hub$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/driver-hub/(hub)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/driver-hub/(hub)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/driver-hub/(hub)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/placeholder-images.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"event-31441\",\"description\":\"Image for Saffron Line CC - December Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31441.1760714910.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-26148\",\"description\":\"Image for 🎉Legacy Transport [LTVTC] 1st Anniversary Convoy🎉\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/26148.1751267377.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31423\",\"description\":\"Image for TruckersMP's Halloween Experience\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31423.1760039690.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-28917\",\"description\":\"Image for CN XM Team Convoy#14\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/28917.1750317704.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29157\",\"description\":\"Image for INDIAN CARRIERS DECEMBER PUBLIC CONVOY 2025\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29157.1753182673.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-27037\",\"description\":\"Image for ETS2MCG Christmas Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/27037.1737738895.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31176\",\"description\":\"Image for SFMPDL X Indian Carriers Partner Ship Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31176.1759291923.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29795\",\"description\":\"Image for KERALA ROADRUNNERS NOVEMBER VOYAGE\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29795.1752872287.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31266\",\"description\":\"Image for NOVEMBER DRIVE: BOUND BY BROTHERHOOD\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31266.1759402043.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31042\",\"description\":\"Image for Ouka Logistics March Event #3\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31042.1758547014.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31031\",\"description\":\"Image for INDIAN CARRIERS JANUARY PUBLIC CONVOY 2026\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31031.1760602631.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29346\",\"description\":\"Image for 4° Anniversary MT Logistica\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29346.1757077954.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30916\",\"description\":\"Image for 🎉 Lumo Haul 1st Anniversary 🎉\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30916.1757997840.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29156\",\"description\":\"Image for INDIAN CARRIERS NOVEMBER PUBLIC CONVOY 2025\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29156.1759610645.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-24964\",\"description\":\"Image for Nexon Logistics December Convoy #66\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/24964.1751606085.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30763\",\"description\":\"Image for Ouka Logistics 1st Anniversary Event\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30763.1757165299.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30640\",\"description\":\"Image for Opening Convoy | Shine Media & Events\",\"imageUrl\":\"https://images.unsplash.com/photo-1724556271642-e9acaf03ac23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx0cnVjayUyMGNvbnZveXxlbnwwfHx8fDE3NjEwMjczNDR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30288\",\"description\":\"Image for Nexon Logistics February Convoy #70\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30288.1754820952.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-29938\",\"description\":\"Image for Saffron Line CC - Opening Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/29938.1753448592.jpg\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31204\",\"description\":\"Image for Nexus Transport October Odyssey\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31204.1759153507.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31227\",\"description\":\"Image for Tamil Pasanga March 2026 Public Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31227.1759221268.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-31138\",\"description\":\"Image for Tamil Pasanga February 2026 Public Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/31138.1758886693.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30756\",\"description\":\"Image for Tamil Pasanga VTC 2026 Kickstart Convoy 🚛\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30756.1757111599.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30881\",\"description\":\"Image for Tamil Pasanga VTC December 2025 Public Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30881.1760785677.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-30741\",\"description\":\"Image for Tamil Pasanga VTC November 2025 Public convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30741.1760115432.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-october-2025\",\"description\":\"Image for Tamil Pasanga VTC October 2025 Public Convoy\",\"imageUrl\":\"https://static.truckersmp.com/images/event/cover/30733.1760098431.png\",\"imageHint\":\"truck convoy\"},{\"id\":\"newsletter-1760368787564\",\"description\":\"Image for The Big 🎃 Pickup delivery event is here! 🚚\",\"imageUrl\":\"https://media.discordapp.net/attachments/307488652701728769/1426977729500156045/delivery-map-1.png?ex=68edd8d2&is=68ec8752&hm=52562cf184d6c2027a674c16ed7f140738fe1860c876549406c345dc4860f67e&=&format=webp&quality=lossless&width=1284&height=722\",\"imageHint\":\"custom article\"},{\"id\":\"event-1759145518758\",\"description\":\"Image for Birthday Miles for Dude 🚚🎉\",\"imageUrl\":\"https://i.imgur.com/yMzKels.jpeg\",\"imageHint\":\"custom event\"},{\"id\":\"newsletter-1759063641546\",\"description\":\"Image for Tamil Pasanaga VTC October 2025 Public convoy. \",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1421178246195576852/ets2_20250926_213746_00.PNG?ex=68da1122&is=68d8bfa2&hm=b33fca5f718a752c1e20a44450a1f7aa35cb90fc58fd64a38a377d1d75206f06&=&format=webp&quality=lossless&width=1283&height=722\",\"imageHint\":\"custom article\"},{\"id\":\"newsletter-1759063501893\",\"description\":\"Image for Euro Truck Simulator 2 1.56\",\"imageUrl\":\"https://clan.fastly.steamstatic.com/images//4036972/e1476b504a8534841031330353a1498cede28005.jpg\",\"imageHint\":\"custom article\"},{\"id\":\"event-1758794026763\",\"description\":\"Image for test 1\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1418938708576571412/ets2_20250919_190640_00.PNG?ex=68d5dfe6&is=68d48e66&hm=b030d6e0948f890decddf0f8bede93ab878f2acf1dffa32fa472c810acb40b07&=&format=webp&quality=lossless&width=1283&height=722\",\"imageHint\":\"custom event\"},{\"id\":\"newsletter-1758671620485\",\"description\":\"Image for Promods 2.76\",\"imageUrl\":\"https://promods.net/images/news/pm_270_release.jpg\",\"imageHint\":\"custom article\"},{\"id\":\"hero-truck\",\"description\":\"A branded truck on the road, representing Nexon Logistics.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1417735782223056929/IMG_20250917_102508.jpg?ex=68d379d6&is=68d22856&hm=a557f1ba374f82770c80ad045ba6838cc0e0f99a01dd3079b9036c8039f67d23&=&format=webp&width=1389&height=684\",\"imageHint\":\"truck highway night\"},{\"id\":\"hero-truck-2\",\"description\":\"A branded truck on a scenic road.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1417739857123475538/1758085736934.jpg?ex=68d37da2&is=68d22c22&hm=8704f60b91d953c3e9b83e28d406e362c20affcf91876b7d903227bb10d8bb9d&=&format=webp&width=1389&height=684\",\"imageHint\":\"truck mountain road\"},{\"id\":\"hero-truck-3\",\"description\":\"A branded truck in a city at night.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1415618464629919754/ets2_20241220_194305_00.png?ex=68d3aeee&is=68d25d6e&hm=9a9e56b889bc2ada983981b4fc18083038d1a0fec476369e473a37664fd5cb8a&=&format=webp&quality=lossless&width=1284&height=722\",\"imageHint\":\"truck night road\"},{\"id\":\"testimonial-avatar\",\"description\":\"Avatar for the person giving the testimonial.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1116720480544636999/1274425873201631304/TP_NEW_WB_PNGxxxhdpi.png?ex=68d38755&is=68d235d5&hm=c2ace7346f05bc6680af0a4a06df8a147ea5651f247d03b6d5ba1fca4ff8e4d1&=&format=webp&quality=lossless&width=826&height=826\",\"imageHint\":\"person portrait\"},{\"id\":\"create-news-banner\",\"description\":\"Banner for create news page.\",\"imageUrl\":\"https://images.unsplash.com/photo-1725352566305-7b8ca9346771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhYnN0cmFjdCUyMHdyaXRlcnxlbnwwfHx8fDE3NTg2NzEzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"abstract writer\"},{\"id\":\"about-truck\",\"description\":\"A white Scania truck on a bridge.\",\"imageUrl\":\"https://media.discordapp.net/attachments/1281551151418048677/1417735782223056929/IMG_20250917_102508.jpg?ex=68d4cb56&is=68d379d6&hm=c808005f4fff904d245a508d3ddbac637cf5c88f5e6416d5b35777e8b40bec04&=&format=webp&width=1194&height=722\",\"imageHint\":\"truck highway\"},{\"id\":\"events-banner\",\"description\":\"Banner for the events page.\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1281551151418048677/1414862372199202927/ets2_20250907_201945_00.PNG?ex=68d43a84&is=68d2e904&hm=c6a185bd254316fdb29cdd8e8f8255b85a60a3760da66ed8f10813dc2d90e01b&\",\"imageHint\":\"trucks convoy\"},{\"id\":\"event-october\",\"description\":\"October Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626432439156746/October.png?ex=68d5a86d&is=68d456ed&hm=81e3d65b75051b75cb4b7123992b952e46be958310f545ba2ca96b026cc3d41e&\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-november\",\"description\":\"November Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626432732774430/November.png?ex=68d5a86d&is=68d456ed&hm=70a92d05775f0a0d4c514757c301662453416554523e0c034b22c7dd3ca72a81&\",\"imageHint\":\"truck night\"},{\"id\":\"event-december\",\"description\":\"December Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626432132939816/December.png?ex=68d5a86d&is=68d456ed&hm=00a169b1945b6348682a2080a9d18e906593a1c62b800d17d59b207502c3df4f&\",\"imageHint\":\"truck snow\"},{\"id\":\"event-january\",\"description\":\"January Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626431835013141/January.png?ex=68d5a86d&is=68d456ed&hm=2af1e0b577a76fdf7c31d10e521d98d0d1a49a2a7f5c765f048d086e3f0559a2&\",\"imageHint\":\"truck convoy\"},{\"id\":\"event-february\",\"description\":\"February Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626405364146206/February.png?ex=68d5a867&is=68d456ed&hm=5a60032e67f2e153381665a36371a355601a4e61a6b0bd726915b22b64016147&\",\"imageHint\":\"truck sunset\"},{\"id\":\"event-march\",\"description\":\"March Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626405670273064/March.png?ex=68d5a867&is=68d456ed&hm=6a4be75267b27521c7501a3597c5e533bca2d3a39e80a062779e2a4457e5b871&\",\"imageHint\":\"truck road\"},{\"id\":\"event-indian-carriers\",\"description\":\"Indian Carriers September Public Convoy\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626405988778004/September_Public.png?ex=68d5a867&is=68d456ed&hm=62f8373b9e4a3c1032cf05e45c48b7f8339d42fe544339e083c27183e89a5843&\",\"imageHint\":\"truck logo\"},{\"id\":\"event-september-private\",\"description\":\"Nexon Logistics | September ETS2 Privat...\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626406249250836/September_Private.png?ex=68d5a867&is=68d456ed&hm=2fc9eb33e4b77d612e6aa0f24f469904ab723edb2d718ca16e0ff634f191b7d8&\",\"imageHint\":\"trucks lined up\"},{\"id\":\"event-uniting-tmp\",\"description\":\"Uniting the TMP Community: Driving To...\",\"imageUrl\":\"https://cdn.discordapp.com/attachments/1420626334460739614/1420626404987158579/TMP_Community.png?ex=68d5a867&is=68d456ed&hm=d7870df59c4033325c6a32d1ae2c98d63309a473da7fd2e22c0733d7790b34d7&\",\"imageHint\":\"trucks convoy night\"}]}"));}}),
"[project]/src/lib/placeholder-images.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlaceHolderImages": (()=>PlaceHolderImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
}}),
"[project]/src/lib/events.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"events\":[{\"id\":\"31441\",\"imageId\":\"event-31441\",\"title\":\"Saffron Line CC - December Convoy\",\"url\":\"https://truckersmp.com/events/31441-saffron-line-cc--december-convoy\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"09.12.2025 | 11:30 UTC\",\"meetupTime\":\"09.12.2025 | 11:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Company Slots (Geneva)\",\"arrival\":\"Stein Bruch (Munich)\",\"server\":\"To be determined\"},{\"id\":\"26148\",\"imageId\":\"event-26148\",\"title\":\"🎉Legacy Transport [LTVTC] 1st Anniversary Convoy🎉\",\"url\":\"https://truckersmp.com/events/26148-%F0%9F%8E%89legacy-transport%5Bltvtc%5D1st-anniversary-convoy%F0%9F%8E%89\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"25.10.2025 | 12:00 UTC\",\"meetupTime\":\"25.10.2025 | 12:00 UTC\",\"departureTime\":\"25.10.2025 | 13:00 UTC\",\"slots\":[],\"departure\":\"Slot (Munich)\",\"arrival\":\"Terminal Container Port (Trieste)\",\"server\":\"Event Server\",\"routeMapUrl\":\"\"},{\"id\":\"31423\",\"imageId\":\"event-31423\",\"title\":\"TruckersMP's Halloween Experience\",\"url\":\"https://truckersmp.com/events/31423-truckersmp%27s-halloween-experience\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"25.10.2025 | 15:00 UTC\",\"meetupTime\":\"25.10.2025 | 15:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Frankfurt, Strasburg or Liege (Other)\",\"arrival\":\"Frankfurt, Strasburg or Liege (Other)\",\"server\":\"Event Server\"},{\"id\":\"28917\",\"imageId\":\"event-28917\",\"title\":\"CN XM Team Convoy#14\",\"url\":\"https://truckersmp.com/events/28917-cn-xm-team-convoy#14\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"14.11.2025 | 11:00 UTC\",\"meetupTime\":\"14.11.2025 | 11:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slot (Leipzig)\",\"arrival\":\"All city where no collision (Duisburg)\",\"server\":\"Event Server\"},{\"id\":\"29157\",\"imageId\":\"event-29157\",\"title\":\"INDIAN CARRIERS DECEMBER PUBLIC CONVOY 2025\",\"url\":\"https://truckersmp.com/events/29157-indian-carriers-december-public-convoy2025\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"14.12.2025 | 14:00 UTC\",\"meetupTime\":\"14.12.2025 | 14:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Cardiff)\",\"arrival\":\"Port (Newcastle upon Tyne)\",\"server\":\"To be determined\"},{\"id\":\"27037\",\"imageId\":\"event-27037\",\"title\":\"ETS2MCG Christmas Convoy\",\"url\":\"https://truckersmp.com/events/27037-ets2mcg-christmas-convoy\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"21.12.2025 | 12:00 UTC\",\"meetupTime\":\"21.12.2025 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"City (TruckersMP HQ)\",\"arrival\":\"Quarry (Prague)\",\"server\":\"To be determined\"},{\"id\":\"31176\",\"imageId\":\"event-31176\",\"title\":\"SFMPDL X Indian Carriers Partner Ship Convoy\",\"url\":\"https://truckersmp.com/events/31176-sfmpdl-x-indian-carriers-partner-ship-convoy\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"10.02.2026 | 16:00 UTC\",\"meetupTime\":\"10.02.2026 | 16:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Geneva)\",\"arrival\":\"Euro Goodies (Innsbruck)\",\"server\":\"To be determined\"},{\"id\":\"29795\",\"imageId\":\"event-29795\",\"title\":\"KERALA ROADRUNNERS NOVEMBER VOYAGE\",\"url\":\"https://truckersmp.com/events/29795-kerala-roadrunners-november-voyage\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"01.11.2025 | 14:00 UTC\",\"meetupTime\":\"01.11.2025 | 14:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"SLOTS (Nuremberg)\",\"arrival\":\"Tree ET (Bern)\",\"server\":\"To be determined\"},{\"id\":\"31266\",\"imageId\":\"event-31266\",\"title\":\"NOVEMBER DRIVE: BOUND BY BROTHERHOOD\",\"url\":\"https://truckersmp.com/events/31266-november-drive:-bound-by-brotherhood\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"20.11.2025 | 12:00 UTC\",\"meetupTime\":\"20.11.2025 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"SLOTS (Rostock)\",\"arrival\":\"STEIN BRUCH (Prague)\",\"server\":\"To be determined\"},{\"id\":\"31042\",\"imageId\":\"event-31042\",\"title\":\"Ouka Logistics March Event #3\",\"url\":\"https://truckersmp.com/events/31042-ouka-logistics-march-event#3\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"28.03.2026 | 12:00 UTC\",\"meetupTime\":\"28.03.2026 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"slot (Dover)\",\"arrival\":\"Stein Bruch (Glasgow)\",\"server\":\"To be determined\"},{\"id\":\"31031\",\"imageId\":\"event-31031\",\"title\":\"INDIAN CARRIERS JANUARY PUBLIC CONVOY 2026\",\"url\":\"https://truckersmp.com/events/31031-indian-carriers-january-public-convoy2026\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"02.01.2026 | 13:30 UTC\",\"meetupTime\":\"02.01.2026 | 13:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Calais)\",\"arrival\":\"Stein Bruch (Mannheim)\",\"server\":\"To be determined\"},{\"id\":\"29346\",\"imageId\":\"event-29346\",\"title\":\"4° Anniversary MT Logistica\",\"url\":\"https://truckersmp.com/events/29346-4%C2%B0-anniversary-mt-logistica\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"08.03.2026 | 13:30 UTC\",\"meetupTime\":\"08.03.2026 | 13:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Città / Slot (Düsseldorf)\",\"arrival\":\"Steinbruch (Strasbourg)\",\"server\":\"To be determined\"},{\"id\":\"30916\",\"imageId\":\"event-30916\",\"title\":\"🎉 Lumo Haul 1st Anniversary 🎉\",\"url\":\"https://truckersmp.com/events/30916-%F0%9F%8E%89-lumo-haul1st-anniversary%F0%9F%8E%89\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"21.03.2026 | 13:30 UTC\",\"meetupTime\":\"21.03.2026 | 13:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Munich)\",\"arrival\":\"Steinbruch (Strasbourg)\",\"server\":\"To be determined\"},{\"id\":\"29156\",\"imageId\":\"event-29156\",\"title\":\"INDIAN CARRIERS NOVEMBER PUBLIC CONVOY 2025\",\"url\":\"https://truckersmp.com/events/29156-indian-carriers-november-public-convoy2025\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"15.11.2025 | 12:00 UTC\",\"meetupTime\":\"15.11.2025 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Frankfurt am Main)\",\"arrival\":\"Rest Area (Travemünde)\",\"server\":\"To be determined\"},{\"id\":\"24964\",\"imageId\":\"event-24964\",\"title\":\"Nexon Logistics December Convoy #66\",\"url\":\"https://truckersmp.com/events/24964-nexon-logistics-december-convoy#66\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"06.12.2025 | 12:00 UTC\",\"meetupTime\":\"06.12.2025 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Iași)\",\"arrival\":\"Container Port (Burgas)\",\"server\":\"Event Server\"},{\"id\":\"30763\",\"imageId\":\"event-30763\",\"title\":\"Ouka Logistics 1st Anniversary Event\",\"url\":\"https://truckersmp.com/events/30763-ouka-logistics1st-anniversary-event\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"06.02.2026 | 12:30 UTC\",\"meetupTime\":\"06.02.2026 | 12:30 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"slot (Prague)\",\"arrival\":\"chanmey (Bern)\",\"server\":\"To be determined\"},{\"id\":\"30640\",\"imageId\":\"event-30640\",\"title\":\"Opening Convoy | Shine Media & Events\",\"url\":\"https://truckersmp.com/events/30640-opening-convoy|-shine-media&-events\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"10.01.2026 | 12:00 UTC\",\"meetupTime\":\"10.01.2026 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Booked Slots (London)\",\"arrival\":\"New Castle Port (Newcastle)\",\"server\":\"To be determined\"},{\"id\":\"30288\",\"imageId\":\"event-30288\",\"title\":\"Nexon Logistics February Convoy #70\",\"url\":\"https://truckersmp.com/events/30288-nexon-logistics-february-convoy#70\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"21.02.2026 | 12:00 UTC\",\"meetupTime\":\"21.02.2026 | 12:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Cologne)\",\"arrival\":\"City (Dijon)\",\"server\":\"To be determined\"},{\"id\":\"29938\",\"imageId\":\"event-29938\",\"title\":\"Saffron Line CC - Opening Convoy\",\"url\":\"https://truckersmp.com/events/29938-saffron-line-cc--opening-convoy\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"29.11.2025 | 14:00 UTC\",\"meetupTime\":\"29.11.2025 | 14:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Klagenfurt am Wörthersee)\",\"arrival\":\"Quarry (TruckersMP HQ)\",\"server\":\"Simulation 2\"},{\"id\":\"31204\",\"imageId\":\"event-31204\",\"title\":\"Nexus Transport October Odyssey\",\"url\":\"https://truckersmp.com/events/31204-nexus-transport-october-odyssey\",\"type\":\"partner\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"24.10.2025 | 12:00 UTC\",\"meetupTime\":\"24.10.2025 | 12:00 UTC\",\"departureTime\":\"24.10.2025 | 13:00 UTC\",\"slots\":[],\"departure\":\"Port (Calais)\",\"arrival\":\"Port (Kirkenes)\",\"server\":\"Event Server\",\"routeMapUrl\":\"https://static.truckersmp.com/images/event/route/31204.1759145518.png\"},{\"id\":\"31227\",\"imageId\":\"event-31227\",\"title\":\"Tamil Pasanga March 2026 Public Convoy\",\"url\":\"https://truckersmp.com/events/31227-tamil-pasanga-march2026-public-convoy\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"29.03.2026 | 14:00 UTC\",\"meetupTime\":\"29.03.2026 | 14:00 UTC\",\"departureTime\":\"TBD\",\"slots\":[],\"departure\":\"Slots (Paris)\",\"arrival\":\"Stein Bruch (Mannheim)\",\"server\":\"To be determined\",\"routeMapUrl\":\"\"},{\"id\":\"31138\",\"imageId\":\"event-31138\",\"title\":\"Tamil Pasanga February 2026 Public Convoy\",\"url\":\"https://truckersmp.com/events/31138-tamil-pasanga-february2026-public-convoy\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"28.02.2026 | 14:00 UTC\",\"meetupTime\":\"28.02.2026 | 14:00 UTC\",\"departureTime\":\"28.02.2026 | 15:00 UTC\",\"slots\":[],\"departure\":\"Slots (Bremen)\",\"arrival\":\"Stein Bruch (Reims)\",\"server\":\"To be determined\",\"routeMapUrl\":\"\"},{\"id\":\"30756\",\"imageId\":\"event-30756\",\"title\":\"Tamil Pasanga VTC 2026 Kickstart Convoy 🚛\",\"url\":\"https://truckersmp.com/events/30756\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"24.01.2026 | 14:00 UTC\",\"meetupTime\":\"24.01.2026 | 14:00 UTC\",\"departureTime\":\"24.01.2026 | 15:00 UTC\",\"slots\":[{\"id\":\"slot-area-1761117649143\",\"areaName\":\"TruckersMP HQ (TruckersMP Building)\",\"imageUrl\":\"https://i.postimg.cc/5N9GyqmV/Truckers-MP-HQ-Truckers-MP-Building.png\",\"startSlot\":1,\"endSlot\":1,\"bookings\":[{\"id\":\"booking-1761119161363\",\"slotNumber\":1,\"vtcName\":\"Black Pearl Trucking Logistics\",\"status\":\"approved\"}]},{\"id\":\"slot-area-1761118034431\",\"areaName\":\"TruckersMP HQ (Kaarfor)\",\"imageUrl\":\"https://i.postimg.cc/K8HCdkBy/Truckers-MP-HQ-Kaarfor.png\",\"startSlot\":2,\"endSlot\":3,\"bookings\":[{\"id\":\"booking-1761119244164\",\"slotNumber\":2,\"vtcName\":\"indian carriers\",\"status\":\"approved\"},{\"id\":\"booking-1761119284839\",\"slotNumber\":3,\"vtcName\":\"Nexus Transport,\",\"status\":\"approved\"}]},{\"id\":\"slot-area-1761118278431\",\"areaName\":\"TruckersMP HQ (Trameri)\",\"imageUrl\":\"https://i.postimg.cc/WpwCsfg8/Truckers-MP-HQ-Trameri.png\",\"startSlot\":4,\"endSlot\":5,\"bookings\":[{\"id\":\"booking-1761119513108\",\"slotNumber\":4,\"vtcName\":\"NepPath,\",\"status\":\"approved\"}]},{\"id\":\"slot-area-1761118328823\",\"areaName\":\"TruckersMP HQ (Stokes)\",\"imageUrl\":\"https://i.postimg.cc/L52WzzKj/Truckers-MP-HQ-Stokes.png\",\"startSlot\":6,\"endSlot\":9,\"bookings\":[{\"id\":\"booking-1761119558655\",\"slotNumber\":5,\"vtcName\":\"Pean Logistics\",\"status\":\"approved\"},{\"id\":\"booking-1761119755706\",\"slotNumber\":8,\"vtcName\":\"Prime logistices\",\"status\":\"approved\"},{\"id\":\"booking-1761119782127\",\"slotNumber\":9,\"vtcName\":\"Ethereal Transport\",\"status\":\"approved\"},{\"id\":\"booking-1761120079974\",\"slotNumber\":7,\"vtcName\":\"Luma haul\",\"status\":\"approved\"},{\"id\":\"booking-1761120189022\",\"slotNumber\":6,\"vtcName\":\"Pean Logistices\",\"status\":\"approved\"}]},{\"id\":\"slot-area-1761118364423\",\"areaName\":\"TruckersMP HQ (Parking Area 1)\",\"imageUrl\":\"https://i.postimg.cc/YSLTkrzL/Truckers-MP-HQ-Parking-Lot.png\",\"startSlot\":10,\"endSlot\":21,\"bookings\":[]},{\"id\":\"slot-area-1761118397480\",\"areaName\":\"TruckersMP HQ (Recruitment Agency)\",\"imageUrl\":\"https://i.postimg.cc/V6jTrKTY/Truckers-MP-HQ-Recruitment-Agency.png\",\"startSlot\":22,\"endSlot\":22,\"bookings\":[]},{\"id\":\"slot-area-1761118424694\",\"areaName\":\"TruckersMP HQ (Parking Area 2)\",\"imageUrl\":\"https://i.postimg.cc/t4TLSt15/Truckers-MP-HQ-Parking-Lot-2.png\",\"startSlot\":23,\"endSlot\":26,\"bookings\":[]},{\"id\":\"slot-area-1761118459038\",\"areaName\":\"TruckersMP HQ (Subse)\",\"imageUrl\":\"https://i.postimg.cc/brgBLspW/Truckers-MP-HQ-Subse.png\",\"startSlot\":27,\"endSlot\":28,\"bookings\":[]},{\"id\":\"slot-area-1761118499887\",\"areaName\":\"TruckersMP HQ (ACC)\",\"imageUrl\":\"https://i.postimg.cc/zvrs0sWb/Truckers-MP-HQ-ACC.png\",\"startSlot\":29,\"endSlot\":31,\"bookings\":[]},{\"id\":\"slot-area-1761118526876\",\"areaName\":\"TruckersMP HQ (Railway Station)\",\"imageUrl\":\"https://i.postimg.cc/rm63wBfn/Truckers-MP-HQ-Railway-Station.png\",\"startSlot\":32,\"endSlot\":33,\"bookings\":[]},{\"id\":\"slot-area-1761118650422\",\"areaName\":\"TruckersMP HQ (Cargotras)\",\"imageUrl\":\"https://i.postimg.cc/595d6tdw/Truckers-MP-HQ-Cargotras.png\",\"startSlot\":34,\"endSlot\":35,\"bookings\":[]}],\"departure\":\"Slots (TruckersMP HQ)\",\"arrival\":\"Container Port (Bremen)\",\"server\":\"To be determined\",\"routeMapUrl\":\"https://static.truckersmp.com/images/event/map/30756.1757627576.png\"},{\"id\":\"30881\",\"imageId\":\"event-30881\",\"title\":\"Tamil Pasanga VTC December 2025 Public Convoy\",\"url\":\"https://truckersmp.com/events/30881-tamil-pasanga-vtc-december2025-public-convoy\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"28.12.2025 | 14:00 UTC\",\"meetupTime\":\"28.12.2025 | 14:00 UTC\",\"departureTime\":\"28.12.2025 | 15:00 UTC\",\"slots\":[],\"departure\":\"Liverpool (Slots)\",\"arrival\":\"Glasgow (Stein Bruch)\",\"server\":\"Event Server\",\"routeMapUrl\":\"\"},{\"id\":\"30741\",\"imageId\":\"event-30741\",\"title\":\"Tamil Pasanga VTC November 2025 Public convoy\",\"url\":\"https://truckersmp.com/events/30741\",\"type\":\"internal\",\"description\":\"Event details automatically imported from TruckersMP.\",\"rules\":\"Standard TruckersMP rules apply.\",\"attendees\":0,\"vtcs\":0,\"date\":\"23.11.2025 | 14:00 UTC\",\"meetupTime\":\"23.11.2025 | 14:00 UTC\",\"departureTime\":\"23.11.2025 | 15:00 UTC\",\"slots\":[],\"departure\":\"Slots (Düsseldorf)\",\"arrival\":\"Rest Area (TruckersMP HQ)\",\"server\":\"Event Server\",\"routeMapUrl\":\"https://media.discordapp.net/attachments/1421178248888062003/1431602700388991056/route.png?ex=68f23f3e&is=68f0edbe&hm=214041d4411c5211a7b458b093404c0d1656c175390772f7a07535b448b11a91&=&format=webp&quality=lossless\"},{\"id\":\"30733\",\"title\":\"Tamil Pasanga VTC October 2025 Public Convoy\",\"date\":\"26.10.2025 | 10:30 UTC\",\"imageId\":\"event-october-2025\",\"url\":\"https://truckersmp.com/events/30733-tamil-pasanga-vtc-october2025-public-convoy\",\"routeMapUrl\":\"https://media.discordapp.net/attachments/1421178248888062003/1421370211536732180/route.png?ex=68d83155&is=68d6dfd5&hm=0055a47895e6f3322f256c70313f89e248a39a6ba2c72b226e6d1b110f00f07b&=&format=webp&quality=lossless\",\"type\":\"internal\",\"attendees\":0,\"vtcs\":0,\"departure\":\"Calais\",\"arrival\":\"Mannheim\",\"server\":\"Event Server\",\"meetupTime\":\"26.10.2025 | 10:30 UTC\",\"departureTime\":\"26.10.2025 | 11:30 UTC\",\"description\":\"We are pleased to announce that our community will be hosting a convoy this October, and we warmly invite fellow VTC members to join us for this exciting event. Your participation will not only enhance the experience but also help us create lasting memories together. Let’s ride united and make this convoy a truly unforgettable one.\",\"rules\":\"TMP Guidelines apply. If you plan to participate, kindly mark your VTC’s presence on the official event page to help us coordinate effectively and ensure a smooth experience for all attendees. For our Smooth Operation of our convoy this Event is Supervised by Drive Along\",\"slots\":[]}]}"));}}),
"[project]/src/app/driver-hub/(hub)/dashboard-client.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DashboardClientPage": (()=>DashboardClientPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DashboardClientPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DashboardClientPage() from the server but DashboardClientPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx <module evaluation>", "DashboardClientPage");
}}),
"[project]/src/app/driver-hub/(hub)/dashboard-client.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DashboardClientPage": (()=>DashboardClientPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DashboardClientPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DashboardClientPage() from the server but DashboardClientPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/driver-hub/(hub)/dashboard-client.tsx", "DashboardClientPage");
}}),
"[project]/src/app/driver-hub/(hub)/dashboard-client.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$dashboard$2d$client$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/dashboard-client.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$dashboard$2d$client$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/dashboard-client.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$dashboard$2d$client$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/lib/date-utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatDateTimeFromISO": (()=>formatDateTimeFromISO),
    "parseDateTimeString": (()=>parseDateTimeString),
    "parseEventDate": (()=>parseEventDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
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
const timeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    hour: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    minute: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    timezone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
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
}}),
"[project]/src/app/driver-hub/(hub)/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/events.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$dashboard$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/driver-hub/(hub)/dashboard-client.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/date-utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const getNearestPartnerEvent = ()=>{
    const now = new Date();
    const partnerEvents = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$events$2e$json__$28$json$29$__["default"].events.filter((e)=>e.type === 'partner').map((e)=>({
            ...e,
            parsedDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseEventDate"])(e.meetupTime || e.date)
        })).filter((e)=>e.parsedDate && e.parsedDate > now).sort((a, b)=>a.parsedDate.getTime() - b.parsedDate.getTime());
    if (partnerEvents.length === 0) return null;
    const nearestEvent = partnerEvents[0];
    const image = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === nearestEvent.imageId);
    return {
        ...nearestEvent,
        image
    };
};
async function DashboardPage() {
    const dashboardData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardData"])();
    const nearestPartnerEvent = getNearestPartnerEvent();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$driver$2d$hub$2f28$hub$292f$dashboard$2d$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DashboardClientPage"], {
        dashboardData: dashboardData,
        nearestPartnerEvent: nearestPartnerEvent
    }, void 0, false, {
        fileName: "[project]/src/app/driver-hub/(hub)/page.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/driver-hub/(hub)/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/driver-hub/(hub)/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d6089294._.js.map