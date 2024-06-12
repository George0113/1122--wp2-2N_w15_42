import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import LandingStatic_42 from './pages/theme/LandingStatic_42';
import Landing_42 from './pages/theme/Landing_42';
import ProtectedRoute from './ui/ProtectedRoute';

import GlobalStyles from './styles/GlobalStyles';

import {
  Account_42,
  Bookings_42,
  Cabins_42,
  Dashboard_42,
  Login_42,
  PageNotFound_42,
  Settings_42,
  NewUsers_42,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing_42 />,
  },
  {
    path: '/landing',
    element: <Landing_42 />,
  },
  {
    path: '/login',
    element: <Login_42 />,
  },
  {
    path: '/',
    element:(<ProtectedRoute>
        <AppLayout />
    </ProtectedRoute>
    ) ,
    children: [
      {
        index: true,
        element: <Dashboard_42 />,
      },
      {
        path: 'dashboard',
        element: <Dashboard_42 />,
      },
      {
        path: 'bookings',
        element: <Bookings_42 />,
      },
      {
        path: 'bookings/:bookingId',
        element: <Bookings_42 />,
      },
      {
        path: 'cabins',
        element: <Cabins_42 />,
      },
      {
        path: 'users',
        element: <NewUsers_42 />,
      },
      {
        path: 'settings',
        element: <Settings_42 />,
      },
      {
        path: 'account',
        element: <Account_42 />,
      },
    ],
  },
]);

const App_42 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_42;
