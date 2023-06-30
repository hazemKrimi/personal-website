export const GOOGLE_ANALYTICS_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

export const pageview = (url: any) => {
  // @ts-ignore
  window.gtag('config', GOOGLE_ANALYTICS_KEY, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: any) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const initAnalytics = () => `
	window.dataLayer = window.dataLayer || [];
						
	function gtag() {
		dataLayer.push(arguments);
	}
	
	gtag('js', new Date());
	gtag('config', ${GOOGLE_ANALYTICS_KEY}, {
		page_path: window.location.pathname,
	});
`;
