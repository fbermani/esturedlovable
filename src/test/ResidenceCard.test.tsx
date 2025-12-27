import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ResidenceCard } from "@/components/ResidenceCard";

const mockResidence = {
  residenceId: "test-1",
  images: ["https://example.com/image.jpg"],
  title: "Test Residence",
  location: "Centro - Test Location",
  rating: 4.5,
  reviews: 100,
  verified: true,
  currentResidents: 20,
  residentsRating: 4.2,
  services: [
    { name: "WiFi", icon: "Wifi" },
    { name: "Kitchen", icon: "Utensils" },
  ],
  availableRooms: [
    {
      type: "Double",
      price: 50000,
      occupants: [
        {
          name: "Test User",
          avatar: "https://example.com/avatar.jpg",
          rating: 4.8,
          description: "Test description",
          badges: ["⭐"],
          score: 800,
        },
      ],
    },
  ],
};

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <BrowserRouter>
      <LanguageProvider>
        {component}
      </LanguageProvider>
    </BrowserRouter>
  );
};

describe("ResidenceCard", () => {
  it("renders residence title", () => {
    renderWithProviders(<ResidenceCard {...mockResidence} />);
    expect(screen.getByText("Test Residence")).toBeInTheDocument();
  });

  it("renders location", () => {
    renderWithProviders(<ResidenceCard {...mockResidence} />);
    expect(screen.getByText("Centro - Test Location")).toBeInTheDocument();
  });

  it("renders rating", () => {
    renderWithProviders(<ResidenceCard {...mockResidence} />);
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("shows verified badge when verified", () => {
    renderWithProviders(<ResidenceCard {...mockResidence} />);
    // Check for the verified badge text (language dependent)
    const badges = screen.getAllByRole("status", { hidden: true });
    expect(badges.length).toBeGreaterThan(0);
  });

  it("renders room price", () => {
    renderWithProviders(<ResidenceCard {...mockResidence} />);
    expect(screen.getByText("$50.000")).toBeInTheDocument();
  });

  it("renders current residents count", () => {
    renderWithProviders(<ResidenceCard {...mockResidence} />);
    // The text will include the translation key result
    expect(screen.getByText(/20/)).toBeInTheDocument();
  });
});
