import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
  </StrictMode>,
)
