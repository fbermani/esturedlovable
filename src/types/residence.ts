import { z } from "zod";

// Zod Schemas for validation
export const OccupantSchema = z.object({
  name: z.string().min(1, "Name is required"),
  avatar: z.string().url("Invalid avatar URL"),
  rating: z.number().min(0).max(5),
  description: z.string(),
  badges: z.array(z.string()).optional(),
  score: z.number().optional(),
  hasWarning: z.boolean().optional(),
});

export const AvailableRoomSchema = z.object({
  type: z.string().min(1, "Room type is required"),
  price: z.number().positive("Price must be positive"),
  occupants: z.array(OccupantSchema),
  available: z.number().optional(),
  total: z.number().optional(),
  capacity: z.number().optional(),
  gender: z.enum(["Masculina", "Femenina", "Mixta"]).optional(),
  hasDeposit: z.boolean().optional(),
  enrollmentFee: z.boolean().optional(),
});

export const ServiceSchema = z.object({
  name: z.string().min(1, "Service name is required"),
  icon: z.string(),
});

export const ResidenceSchema = z.object({
  residenceId: z.string().min(1, "Residence ID is required"),
  images: z.array(z.string().url("Invalid image URL")),
  title: z.string().min(1, "Title is required"),
  location: z.string().min(1, "Location is required"),
  rating: z.number().min(0).max(5),
  reviews: z.number().nonnegative(),
  verified: z.boolean(),
  currentResidents: z.number().nonnegative(),
  residentsRating: z.number().min(0).max(5),
  services: z.array(ServiceSchema),
  availableRooms: z.array(AvailableRoomSchema),
});

export const UnavailableResidenceSchema = z.object({
  images: z.array(z.string()),
  title: z.string().min(1),
  location: z.string().min(1),
  priceMin: z.number().positive(),
  priceMax: z.number().positive(),
  rating: z.number().min(0).max(5),
  reviews: z.number().nonnegative(),
  verified: z.boolean(),
  currentResidents: z.number().nonnegative(),
  residentsRating: z.number().min(0).max(5),
  services: z.array(ServiceSchema),
  soldOut: z.boolean(),
  roomTypes: z.array(z.string()),
});

// TypeScript types derived from schemas
export type Occupant = z.infer<typeof OccupantSchema>;
export type AvailableRoom = z.infer<typeof AvailableRoomSchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type Residence = z.infer<typeof ResidenceSchema>;
export type UnavailableResidence = z.infer<typeof UnavailableResidenceSchema>;

// Contact form schema
export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(8, "Phone must be at least 8 characters").max(20),
  residenceName: z.string().min(2, "Residence name is required").max(200),
  message: z.string().max(1000).optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Booking form schema
export const BookingFormSchema = z.object({
  firstName: z.string().min(2, "First name is required").max(50),
  lastName: z.string().min(2, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone is required").max(20),
  dni: z.string().min(7, "DNI is required").max(15),
  university: z.string().min(2, "University is required").max(200),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
});

export type BookingFormData = z.infer<typeof BookingFormSchema>;

// Payment form schema
export const PaymentFormSchema = z.object({
  cardNumber: z.string().min(16, "Invalid card number").max(19),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, "Format: MM/YY"),
  cvv: z.string().min(3, "CVV required").max(4),
  cardName: z.string().min(2, "Name on card is required").max(100),
});

export type PaymentFormData = z.infer<typeof PaymentFormSchema>;

// Waitlist form schema
export const WaitlistFormSchema = z.object({
  roomType: z.string().min(1, "Select a room type"),
  email: z.string().email("Invalid email address"),
});

export type WaitlistFormData = z.infer<typeof WaitlistFormSchema>;
