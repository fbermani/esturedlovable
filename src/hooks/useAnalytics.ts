import { useCallback } from "react";

// Analytics event types for key funnels
type AnalyticsEvent = 
  | { type: "search"; query: string; filters?: Record<string, unknown> }
  | { type: "residence_view"; residenceId: string }
  | { type: "booking_start"; residenceId: string; roomType: string }
  | { type: "booking_complete"; residenceId: string; roomType: string; price: number }
  | { type: "contact_form_open" }
  | { type: "contact_form_submit"; residenceName: string }
  | { type: "login_start"; profileType: string }
  | { type: "login_complete"; profileType: string }
  | { type: "waitlist_join"; residenceId: string; email: string }
  | { type: "language_change"; from: string; to: string };

/**
 * Hook for analytics tracking - ready for backend integration
 * Currently logs to console in development, can be connected to:
 * - Google Analytics
 * - Mixpanel
 * - PostHog
 * - Custom backend endpoint
 */
export function useAnalytics() {
  const track = useCallback((event: AnalyticsEvent) => {
    // In development, log to console
    if (import.meta.env.DEV) {
      console.log("[Analytics]", event.type, event);
    }

    // TODO: Send to backend when ready
    // Example: supabase.from('analytics_events').insert(event)
    // Example: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(event) })
  }, []);

  const trackSearch = useCallback((query: string, filters?: Record<string, unknown>) => {
    track({ type: "search", query, filters });
  }, [track]);

  const trackResidenceView = useCallback((residenceId: string) => {
    track({ type: "residence_view", residenceId });
  }, [track]);

  const trackBookingStart = useCallback((residenceId: string, roomType: string) => {
    track({ type: "booking_start", residenceId, roomType });
  }, [track]);

  const trackBookingComplete = useCallback((residenceId: string, roomType: string, price: number) => {
    track({ type: "booking_complete", residenceId, roomType, price });
  }, [track]);

  const trackContactFormOpen = useCallback(() => {
    track({ type: "contact_form_open" });
  }, [track]);

  const trackContactFormSubmit = useCallback((residenceName: string) => {
    track({ type: "contact_form_submit", residenceName });
  }, [track]);

  const trackLoginStart = useCallback((profileType: string) => {
    track({ type: "login_start", profileType });
  }, [track]);

  const trackLoginComplete = useCallback((profileType: string) => {
    track({ type: "login_complete", profileType });
  }, [track]);

  const trackWaitlistJoin = useCallback((residenceId: string, email: string) => {
    track({ type: "waitlist_join", residenceId, email });
  }, [track]);

  const trackLanguageChange = useCallback((from: string, to: string) => {
    track({ type: "language_change", from, to });
  }, [track]);

  return {
    track,
    trackSearch,
    trackResidenceView,
    trackBookingStart,
    trackBookingComplete,
    trackContactFormOpen,
    trackContactFormSubmit,
    trackLoginStart,
    trackLoginComplete,
    trackWaitlistJoin,
    trackLanguageChange,
  };
}
