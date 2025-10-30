import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
})

export const QueryProvider = ({ children }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
)
