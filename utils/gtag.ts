export const GOOGLE_ANALYTICS_KEY = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
	// @ts-ignore
	window.gtag('config', GOOGLE_ANALYTICS_KEY, {
		page_path: url
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: any) => {
	// @ts-ignore
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};