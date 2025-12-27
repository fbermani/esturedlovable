import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ResidenceContactForm } from "@/components/ResidenceContactForm";

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
  );
};

describe("ResidenceContactForm", () => {
  it("renders form when open", () => {
    const onOpenChange = vi.fn();
    renderWithProviders(
      <ResidenceContactForm open={true} onOpenChange={onOpenChange} />
    );
    
    // Check for form title
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    const onOpenChange = vi.fn();
    renderWithProviders(
      <ResidenceContactForm open={false} onOpenChange={onOpenChange} />
    );
    
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders all form fields when open", () => {
    const onOpenChange = vi.fn();
    renderWithProviders(
      <ResidenceContactForm open={true} onOpenChange={onOpenChange} />
    );
    
    // Check for input fields by their labels
    expect(screen.getByLabelText(/nombre|name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/teléfono|phone/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    const onOpenChange = vi.fn();
    renderWithProviders(
      <ResidenceContactForm open={true} onOpenChange={onOpenChange} />
    );
    
    const submitButton = screen.getByRole("button", { name: /enviar|submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("allows input in form fields", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    renderWithProviders(
      <ResidenceContactForm open={true} onOpenChange={onOpenChange} />
    );
    
    const nameInput = screen.getByLabelText(/nombre completo|full name/i);
    await user.type(nameInput, "John Doe");
    
    expect(nameInput).toHaveValue("John Doe");
  });
});
