import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SearchBar } from "@/components/SearchBar";

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <BrowserRouter>
      <LanguageProvider>
        {component}
      </LanguageProvider>
    </BrowserRouter>
  );
};

describe("SearchBar", () => {
  it("renders search input", () => {
    renderWithProviders(<SearchBar />);
    // Look for the location input placeholder
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders search button", () => {
    renderWithProviders(<SearchBar />);
    const button = screen.getByRole("button", { name: /buscar|search/i });
    expect(button).toBeInTheDocument();
  });

  it("allows typing in location input", async () => {
    const user = userEvent.setup();
    renderWithProviders(<SearchBar />);
    
    const input = screen.getByRole("textbox");
    await user.type(input, "Buenos Aires");
    
    expect(input).toHaveValue("Buenos Aires");
  });

  it("renders filter button", () => {
    renderWithProviders(<SearchBar />);
    const filterButton = screen.getByRole("button", { name: /filtros|filters/i });
    expect(filterButton).toBeInTheDocument();
  });
});
