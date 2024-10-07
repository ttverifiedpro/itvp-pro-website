import {Config} from "../hooks/useConfig";

const CID_KEY = "cid";
const CHANNEL_URL_KEY = "channelUrl";
const REFERRAL_CODE = "referral_code";
const PARTNER_USER_ID = "partner_user_id";
const CLIENT_UID = "client_uid";
const EXTOLE_ZONE_ADVOCATE_CODE = "extole_zone_advocate_code";
const RETIRING_PRO_CID = "rpr";
export const enrichCtaQueryParams = (source: URLSearchParams, config: Config): URLSearchParams => {
    const params = new URLSearchParams(source);
    if (config.referralOverridden) {
        params.set(CID_KEY, "pr");
    }

    if (!globalThis.document || !globalThis.window) return params;

    const currentParams = new URL(document.URL).searchParams;

    if (currentParams.has(REFERRAL_CODE)) {
        params.set(REFERRAL_CODE, currentParams.get(REFERRAL_CODE) as string);
    }

    if (currentParams.has(CID_KEY)) {
        params.set(CID_KEY, currentParams.get(CID_KEY) as string);
    }

    if (window.location.pathname.endsWith("/pro")) {
        params.set(CID_KEY, "pr");
    }

    if (currentParams.has(PARTNER_USER_ID)) {
        params.set(PARTNER_USER_ID, currentParams.get(PARTNER_USER_ID) as string);
    }

    if (currentParams.has(CLIENT_UID)) {
        params.set(CLIENT_UID, currentParams.get(CLIENT_UID) as string);
    }

    if (currentParams.has(EXTOLE_ZONE_ADVOCATE_CODE)) {
        params.set(EXTOLE_ZONE_ADVOCATE_CODE, currentParams.get(EXTOLE_ZONE_ADVOCATE_CODE) as string);
    }


    const referrer = document.referrer;
    if (referrer) {
        params.set(CHANNEL_URL_KEY, referrer);
    }

    return params;
}

export const enrichRPRQueryParams = () => {
    const params = new URLSearchParams();
    if (!globalThis.document || !globalThis.window) return params;
    const currentParams = new URL(document.URL).searchParams;
    if (currentParams.has(CID_KEY) && currentParams.get(CID_KEY) === RETIRING_PRO_CID) {
        params.set(CID_KEY, currentParams.get(CID_KEY) as string);

        if (currentParams.has(PARTNER_USER_ID)) {
            params.set(PARTNER_USER_ID, currentParams.get(PARTNER_USER_ID) as string);
        }

        if (currentParams.has(CLIENT_UID)) {
            params.set(CLIENT_UID, currentParams.get(CLIENT_UID) as string);
        }

        if (currentParams.has(EXTOLE_ZONE_ADVOCATE_CODE)) {
            params.set(EXTOLE_ZONE_ADVOCATE_CODE, currentParams.get(EXTOLE_ZONE_ADVOCATE_CODE) as string);
        }
    }

    return params;
}