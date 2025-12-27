import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// MSW browser worker for development mocking
export const worker = setupWorker(...handlers);
