import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/queryClient';
import AppRoutes from './routes/AppRoutes';

/**
 * App root — wires up providers.
 * Add global providers here (auth context, theme, etc.) as the app grows.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
