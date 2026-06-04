import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Foreword from "@/pages/Foreword";
import ExecutiveSummary from "@/pages/ExecutiveSummary";
import Chapter1 from "@/pages/Chapter1";
import Chapter2 from "@/pages/Chapter2";
import Chapter3 from "@/pages/Chapter3";
import Chapter4 from "@/pages/Chapter4";
import Chapter5 from "@/pages/Chapter5";
import Chapter6 from "@/pages/Chapter6";
import Resources from "@/pages/Resources";
import AccessibilityPage from "@/pages/AccessibilityPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/foreword" component={Foreword} />
      <Route path="/executive-summary" component={ExecutiveSummary} />
      <Route path="/chapter-1" component={Chapter1} />
      <Route path="/chapter-2" component={Chapter2} />
      <Route path="/chapter-3" component={Chapter3} />
      <Route path="/chapter-4" component={Chapter4} />
      <Route path="/chapter-5" component={Chapter5} />
      <Route path="/chapter-6" component={Chapter6} />
      <Route path="/resources" component={Resources} />
      {/* <Route path="/accessibility" component={AccessibilityPage} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
