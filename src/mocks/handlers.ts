import { http, HttpResponse, delay } from "msw";
import { featuredResidences, availableResidences, unavailableResidences } from "@/data/residences";

// MSW handlers for API mocking in tests
export const handlers = [
  // Featured residences
  http.get("/api/residences/featured", async () => {
    await delay(100);
    return HttpResponse.json({
      data: featuredResidences,
      success: true,
    });
  }),

  // Available residences
  http.get("/api/residences/available", async () => {
    await delay(100);
    return HttpResponse.json({
      data: availableResidences,
      success: true,
    });
  }),

  // Unavailable residences
  http.get("/api/residences/unavailable", async () => {
    await delay(100);
    return HttpResponse.json({
      data: unavailableResidences,
      success: true,
    });
  }),

  // Single residence by ID
  http.get("/api/residences/:id", async ({ params }) => {
    await delay(50);
    const { id } = params;
    const residence = [...featuredResidences, ...availableResidences].find(
      r => r.residenceId === id
    );
    
    if (!residence) {
      return HttpResponse.json(
        { success: false, message: "Residence not found" },
        { status: 404 }
      );
    }
    
    return HttpResponse.json({
      data: residence,
      success: true,
    });
  }),

  // Search residences
  http.get("/api/residences/search", async ({ request }) => {
    await delay(150);
    const url = new URL(request.url);
    const location = url.searchParams.get("location")?.toLowerCase();
    const minRating = url.searchParams.get("minRating");
    
    let results = [...featuredResidences];
    
    if (location) {
      results = results.filter(r => 
        r.location.toLowerCase().includes(location) ||
        r.title.toLowerCase().includes(location)
      );
    }
    
    if (minRating) {
      results = results.filter(r => r.rating >= parseFloat(minRating));
    }
    
    return HttpResponse.json({
      data: results,
      success: true,
    });
  }),

  // Contact form submission
  http.post("/api/contact", async ({ request }) => {
    await delay(200);
    const body = await request.json() as Record<string, string>;
    
    if (!body.email?.includes("@")) {
      return HttpResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      );
    }
    
    return HttpResponse.json({
      data: { id: crypto.randomUUID() },
      success: true,
      message: "Contact form submitted",
    });
  }),

  // Waitlist submission
  http.post("/api/waitlist", async ({ request }) => {
    await delay(150);
    const body = await request.json() as Record<string, string>;
    
    if (!body.email?.includes("@")) {
      return HttpResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      );
    }
    
    return HttpResponse.json({
      data: { position: Math.floor(Math.random() * 20) + 1 },
      success: true,
      message: "Added to waitlist",
    });
  }),

  // Booking submission
  http.post("/api/bookings", async () => {
    await delay(300);
    
    return HttpResponse.json({
      data: {
        bookingId: crypto.randomUUID(),
        confirmationCode: `SF-${Date.now().toString(36).toUpperCase()}`,
      },
      success: true,
      message: "Booking confirmed",
    });
  }),
];
