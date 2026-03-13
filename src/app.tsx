import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Descubra from "./pages/Descubra";
import Autopsia from "./pages/Autopsia";
import Engenharia from "./pages/Engenharia";
import Sobre from "./pages/Sobre";
import Depoimentos from "./pages/Depoimentos";
import Degustacao from "./pages/Degustacao";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/descubra"} component={Descubra} />
      <Route path={"/autopsia"} component={Autopsia} />
      <Route path={"/engenharia"} component={Engenharia} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/depoimentos"} component={Depoimentos} />
      <Route path={"/degustacao"} component={Degustacao} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
