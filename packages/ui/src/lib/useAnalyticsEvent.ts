// packages/ui/src/lib/useAnalyticsEvent.ts
import { posthog } from 'posthog-js';

export function useAnalyticsEvent() {
  return function track(event: string, props?: Record<string, any>) {
    if (typeof window !== 'undefined' && posthog) {
      posthog.capture(event, props);
    } else {
      console.log('[Analytics]', event, props);
    }
  };
}