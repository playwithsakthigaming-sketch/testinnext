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
"[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00269662dafff42bdb137b5afde488acc7da28a685":"getEventsWithBookings","00a2a0f309608f0a14bcc38dc4265e197bce3c9b12":"getApplications","40e67feac21e29ae05fe52a081d82a22beb427e01e":"deleteApplication","700f1cc5e8d8b4edb6f0591dc63ddf6fec3faff3dc":"deleteBooking","7013b9b99010c011e3756672687b65ca315b3f1716":"updateApplicationStatus","7887094c80fa5e9fbdcac877a61795b17e0b3c6424":"updateBookingStatus"},"",""] */ __turbopack_context__.s({
    "deleteApplication": (()=>deleteApplication),
    "deleteBooking": (()=>deleteBooking),
    "getApplications": (()=>getApplications),
    "getEventsWithBookings": (()=>getEventsWithBookings),
    "updateApplicationStatus": (()=>updateApplicationStatus),
    "updateBookingStatus": (()=>updateBookingStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const applicationsFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src', 'lib', 'applications.json');
const staffFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src', 'lib', 'staff-members.json');
const eventsFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src', 'lib', 'events.json');
async function readJsonFile(filePath) {
    try {
        const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            if (filePath.includes('applications.json')) {
                return {
                    applications: []
                };
            }
            if (filePath.includes('staff-members.json')) {
                return {
                    staffMembers: []
                };
            }
            if (filePath.includes('events.json')) {
                return {
                    events: []
                };
            }
        }
        throw error;
    }
}
async function writeJsonFile(filePath, data) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(data, null, 2));
}
async function sendApplicationWebhookNotification(application) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set.');
        return;
    }
    let title = '';
    let color = 0;
    let description = '';
    switch(application.status){
        case 'Accepted':
            title = `Application Accepted: ${application.id}`;
            color = 5763719; // Green
            description = `Congratulations to **${application.name}**! Their application has been accepted.`;
            break;
        case 'Rejected':
            title = `Application Rejected: ${application.id}`;
            color = 15548997; // Red
            description = `Application for **${application.name}** has been rejected.`;
            break;
        default:
            return; // Don't send for 'Pending' or other statuses
    }
    const embed = {
        title: title,
        description: description,
        color: color,
        timestamp: new Date().toISOString(),
        fields: [
            {
                name: 'Applicant Name',
                value: application.name,
                inline: true
            }
        ],
        footer: {
            text: 'Tamil Pasanga VTC | Application Status Update'
        }
    };
    const payload = {
        embeds: [
            embed
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
        }
    } catch (error) {
        console.error('Error sending Discord webhook notification:', error);
    }
}
async function getApplications() {
    const data = await readJsonFile(applicationsFilePath);
    // Sort by submission date, newest first
    return data.applications.sort((a, b)=>new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}
async function updateApplicationStatus(applicationId, newStatus, role = 'Trainee') {
    try {
        const applicationsData = await readJsonFile(applicationsFilePath);
        const staffData = await readJsonFile(staffFilePath);
        const appIndex = applicationsData.applications.findIndex((app)=>app.id === applicationId);
        if (appIndex === -1) {
            return {
                success: false,
                message: `Application with ID ${applicationId} not found.`
            };
        }
        const application = applicationsData.applications[appIndex];
        // Update status in applications.json
        application.status = newStatus;
        await writeJsonFile(applicationsFilePath, applicationsData);
        // If accepted, add to staff-members.json if not already present
        if (newStatus === 'Accepted') {
            const isAlreadyStaff = staffData.staffMembers.some((member)=>member.name.toLowerCase() === application.name.toLowerCase());
            if (!isAlreadyStaff) {
                const newMember = {
                    id: `staff-${Date.now()}`,
                    name: application.name,
                    role: role,
                    imageId: 'testimonial-avatar',
                    imageUrl: "https://media.discordapp.net/attachments/1116720480544636999/1274425873201631304/TP_NEW_WB_PNGxxxhdpi.png?ex=68d4d8d5&is=68d38755&hm=b6d4e0e4ef2c3215a4de4fb2f592189a60ddd94c651f96fe04deac2e7f96ddc6&=&format=webp&quality=lossless&width=826&height=826",
                    steamUrl: application.steamUrl,
                    truckersmpUrl: application.truckersmpUrl
                };
                staffData.staffMembers.push(newMember);
                await writeJsonFile(staffFilePath, staffData);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/applications');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/staff');
        // Send Discord notification
        await sendApplicationWebhookNotification(application);
        return {
            success: true,
            message: 'Application status updated successfully.'
        };
    } catch (error) {
        console.error('Error updating application status:', error);
        return {
            success: false,
            message: 'An unexpected error occurred.'
        };
    }
}
async function deleteApplication(applicationId) {
    try {
        const applicationsData = await readJsonFile(applicationsFilePath);
        const applicationIndex = applicationsData.applications.findIndex((b)=>b.id === applicationId);
        if (applicationIndex === -1) return {
            success: false,
            message: 'Application not found.'
        };
        applicationsData.applications.splice(applicationIndex, 1);
        await writeJsonFile(applicationsFilePath, applicationsData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/applications');
        return {
            success: true,
            message: `Application has been deleted.`
        };
    } catch (error) {
        console.error('Error deleting application:', error);
        return {
            success: false,
            message: 'An unexpected error occurred.'
        };
    }
}
async function getEventsWithBookings() {
    const data = await readJsonFile(eventsFilePath);
    return data.events.filter((event)=>event.slots && event.slots.some((slot)=>slot.bookings && slot.bookings.length > 0));
}
async function sendBookingWebhookNotification(booking, event, newStatus, areaId) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set.');
        return;
    }
    let title = '';
    let color = 0;
    let description = '';
    let imageUrl = '';
    const area = event.slots?.find((a)=>a.id === areaId);
    switch(newStatus){
        case 'approved':
            title = `Booking Approved: ${booking.vtcName}`;
            color = 5763719; // Green
            description = `The booking for **${booking.vtcName}** for slot **#${booking.slotNumber}** at event **${event.title}** has been approved.`;
            if (area) {
                imageUrl = area.imageUrl;
            }
            break;
        case 'rejected':
            title = `Booking Rejected: ${booking.vtcName}`;
            color = 15548997; // Red
            description = `The booking for **${booking.vtcName}** for slot **#${booking.slotNumber}** at event **${event.title}** has been rejected.`;
            break;
        case 'hold':
            title = `Booking On Hold: ${booking.vtcName}`;
            color = 16753920; // Orange
            description = `The booking for **${booking.vtcName}** for slot **#${booking.slotNumber}** at event **${event.title}** has been put on hold.`;
            break;
        default:
            return;
    }
    const embed = {
        title: title,
        description: description,
        color: color,
        timestamp: new Date().toISOString(),
        footer: {
            text: 'Tamil Pasanga VTC | Slot Booking Update'
        }
    };
    if (newStatus === 'approved' && imageUrl) {
        embed.image = {
            url: imageUrl
        };
    }
    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                embeds: [
                    embed
                ]
            })
        });
    } catch (error) {
        console.error('Error sending booking status webhook:', error);
    }
}
async function updateBookingStatus(eventId, areaId, bookingId, newStatus) {
    try {
        const eventsData = await readJsonFile(eventsFilePath);
        const event = eventsData.events.find((e)=>e.id === eventId);
        if (!event || !event.slots) return {
            success: false,
            message: 'Event not found.'
        };
        const area = event.slots.find((a)=>a.id === areaId);
        if (!area || !area.bookings) return {
            success: false,
            message: 'Slot area not found.'
        };
        const booking = area.bookings.find((b)=>b.id === bookingId);
        if (!booking) return {
            success: false,
            message: 'Booking not found.'
        };
        booking.status = newStatus;
        await writeJsonFile(eventsFilePath, eventsData);
        await sendBookingWebhookNotification(booking, event, newStatus, areaId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/bookings');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/events/${eventId}`);
        return {
            success: true,
            message: `Booking status updated to ${newStatus}.`
        };
    } catch (error) {
        console.error('Error updating booking status:', error);
        return {
            success: false,
            message: 'An unexpected error occurred.'
        };
    }
}
async function deleteBooking(eventId, areaId, bookingId) {
    try {
        const eventsData = await readJsonFile(eventsFilePath);
        const event = eventsData.events.find((e)=>e.id === eventId);
        if (!event || !event.slots) return {
            success: false,
            message: 'Event not found.'
        };
        const area = event.slots.find((a)=>a.id === areaId);
        if (!area || !area.bookings) return {
            success: false,
            message: 'Slot area not found.'
        };
        const bookingIndex = area.bookings.findIndex((b)=>b.id === bookingId);
        if (bookingIndex === -1) return {
            success: false,
            message: 'Booking not found.'
        };
        area.bookings.splice(bookingIndex, 1);
        await writeJsonFile(eventsFilePath, eventsData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/bookings');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/events/${eventId}`);
        return {
            success: true,
            message: `Booking has been deleted.`
        };
    } catch (error) {
        console.error('Error deleting booking:', error);
        return {
            success: false,
            message: 'An unexpected error occurred.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getApplications,
    updateApplicationStatus,
    deleteApplication,
    getEventsWithBookings,
    updateBookingStatus,
    deleteBooking
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getApplications, "00a2a0f309608f0a14bcc38dc4265e197bce3c9b12", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateApplicationStatus, "7013b9b99010c011e3756672687b65ca315b3f1716", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteApplication, "40e67feac21e29ae05fe52a081d82a22beb427e01e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventsWithBookings, "00269662dafff42bdb137b5afde488acc7da28a685", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBookingStatus, "7887094c80fa5e9fbdcac877a61795b17e0b3c6424", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBooking, "700f1cc5e8d8b4edb6f0591dc63ddf6fec3faff3dc", null);
}}),
"[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00a2a0f309608f0a14bcc38dc4265e197bce3c9b12": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getApplications"]),
    "40e67feac21e29ae05fe52a081d82a22beb427e01e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteApplication"]),
    "40f1f199a825c96ed8f20260f98df34feda717d01a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitApplication"]),
    "7013b9b99010c011e3756672687b65ca315b3f1716": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateApplicationStatus"]),
    "7887094c80fa5e9fbdcac877a61795b17e0b3c6424": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBookingStatus"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00a2a0f309608f0a14bcc38dc4265e197bce3c9b12": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00a2a0f309608f0a14bcc38dc4265e197bce3c9b12"]),
    "40e67feac21e29ae05fe52a081d82a22beb427e01e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e67feac21e29ae05fe52a081d82a22beb427e01e"]),
    "40f1f199a825c96ed8f20260f98df34feda717d01a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40f1f199a825c96ed8f20260f98df34feda717d01a"]),
    "7013b9b99010c011e3756672687b65ca315b3f1716": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7013b9b99010c011e3756672687b65ca315b3f1716"]),
    "7887094c80fa5e9fbdcac877a61795b17e0b3c6424": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7887094c80fa5e9fbdcac877a61795b17e0b3c6424"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$applications$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$server$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/applications/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/admin/applications/server-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/admin/applications/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/admin/applications/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/admin/applications/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/admin/applications/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/admin/applications/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/admin/applications/page.tsx", "default");
}}),
"[project]/src/app/admin/applications/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/admin/applications/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/admin/applications/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$applications$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/admin/applications/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/applications/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__05d80c1e._.js.map