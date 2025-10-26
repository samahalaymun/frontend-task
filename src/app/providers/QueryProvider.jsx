import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const QueryProvider = ({ children }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);
