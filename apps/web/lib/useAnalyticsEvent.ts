// lib/useAnalyticsEvent.ts
import { posthog } from './posthog.client';

export function useAnalyticsEvent() {
  return function track(event: string, props?: Record<string, any>) {
    if (typeof window !== 'undefined' && posthog) {
      posthog.capture(event, props);
    } else {
      console.log('[Analytics]', event, props);
    }
  };
}