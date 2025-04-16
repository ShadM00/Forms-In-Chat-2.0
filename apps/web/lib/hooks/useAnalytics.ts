export function useAnalytics() {
  const fire = (event: string, payload: any) => {
    console.log("Fired:", event, payload);
    // Add PostHog or Vercel analytics client here
  };
  return { fire };
}