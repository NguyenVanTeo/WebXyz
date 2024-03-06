import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import {router} from '@/Routes/Route';
import '@/index.css'

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript

root.render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    {/* </QueryClientProvider> */}
  </StrictMode>
)

// createRoot(document.getElementById('root')!).render(
//   <RouterProvider router={router} />
//  ,
// )