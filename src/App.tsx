import PrimeReact from "primereact/api";
import { QueryClient, QueryClientProvider } from "react-query";
import { Dashboard } from "./pages";
import { AppTopbar } from "./components/AppTopbar/index";

PrimeReact.ripple = true;

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppTopbar />
      <Dashboard />
    </QueryClientProvider>
  );
}
