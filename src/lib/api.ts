import { featuredResidences, availableResidences, unavailableResidences } from "@/data/residences";
import type { Residence, UnavailableResidence } from "@/types/residence";

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

/**
 * Mock API functions - ready to be replaced with real backend calls
 * These simulate network latency and can be swapped for Supabase/REST calls
 */

export async function fetchFeaturedResidences(): Promise<Residence[]> {
  await delay(300); // Simulate network latency
  return featuredResidences;
}

export async function fetchAvailableResidences(): Promise<Residence[]> {
  await delay(400);
  return availableResidences;
}

export async function fetchUnavailableResidences(): Promise<UnavailableResidence[]> {
  await delay(300);
  return unavailableResidences;
}

export async function fetchResidenceById(id: string): Promise<Residence | null> {
  await delay(200);
  const residence = [...featuredResidences, ...availableResidences].find(
    r => r.residenceId === id
  );
  return residence || null;
}

export async function searchResidences(query: {
  location?: string;
  roomType?: string;
  minRating?: number;
}): Promise<Residence[]> {
  await delay(500);
  
  let results = [...featuredResidences];
  
  if (query.location) {
    const searchTerm = query.location.toLowerCase();
    results = results.filter(r => 
      r.location.toLowerCase().includes(searchTerm) ||
      r.title.toLowerCase().includes(searchTerm)
    );
  }
  
  if (query.minRating) {
    results = results.filter(r => r.rating >= query.minRating!);
  }
  
  return results;
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  residenceName: string;
  message?: string;
}): Promise<ApiResponse<{ id: string }>> {
  await delay(800);
  
  // Simulate validation
  if (!data.email.includes("@")) {
    throw new Error("Invalid email address");
  }
  
  // In real implementation, this would save to database
  return {
    data: { id: crypto.randomUUID() },
    success: true,
    message: "Form submitted successfully"
  };
}

export async function submitWaitlist(data: {
  residenceId: string;
  email: string;
  roomType: string;
}): Promise<ApiResponse<{ position: number }>> {
  await delay(600);
  
  // Simulate validation
  if (!data.email.includes("@")) {
    throw new Error("Invalid email address");
  }
  
  // In real implementation, this would add to waitlist
  return {
    data: { position: Math.floor(Math.random() * 20) + 1 },
    success: true,
    message: "Added to waitlist"
  };
}

export async function submitBooking(data: {
  residenceId: string;
  roomType: string;
  studentInfo: Record<string, string>;
  paymentInfo: Record<string, string>;
}): Promise<ApiResponse<{ bookingId: string; confirmationCode: string }>> {
  await delay(1000);
  
  // In real implementation, this would process payment and create booking
  return {
    data: {
      bookingId: crypto.randomUUID(),
      confirmationCode: `SF-${Date.now().toString(36).toUpperCase()}`
    },
    success: true,
    message: "Booking confirmed"
  };
}
