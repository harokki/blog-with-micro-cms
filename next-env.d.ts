/// <reference types="next" />
/// <reference types="next/types/global" />

interface Window {
  gtag(type: 'config', googleAnalyticsId: string, { page_path: string });
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string;  // eslint-disable-line
      event_category: string;  // eslint-disable-line
      value?: number;
    },
  );
}
