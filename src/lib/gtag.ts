export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || '';

export const pageview = (url: string): void => {
  window.gtag('config', GA_ID, {
    page_path: url,
  });
};

type GaEventProps = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const event = ({
  action,
  category,
  label,
  value,
}: GaEventProps): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
