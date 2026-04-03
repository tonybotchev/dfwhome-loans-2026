import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Core pages
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

// Loan pages
import FHA from "./pages/loans/FHA";
import VA from "./pages/loans/VA";
import Conventional from "./pages/loans/Conventional";
import FirstTimeBuyer from "./pages/loans/FirstTimeBuyer";
import Refinance from "./pages/loans/Refinance";
import DSCR from "./pages/loans/DSCR";
import Jumbo from "./pages/loans/Jumbo";
import USDA from "./pages/loans/USDA";

// City pages
import Celina from "./pages/cities/Celina";
import Prosper from "./pages/cities/Prosper";
import Frisco from "./pages/cities/Frisco";
import McKinney from "./pages/cities/McKinney";
import Anna from "./pages/cities/Anna";
import Melissa from "./pages/cities/Melissa";
import Aubrey from "./pages/cities/Aubrey";
import Gunter from "./pages/cities/Gunter";
import LittleElm from "./pages/cities/LittleElm";
import Plano from "./pages/cities/Plano";
import Allen from "./pages/cities/Allen";
import Denton from "./pages/cities/Denton";
import Wylie from "./pages/cities/Wylie";
import Lewisville from "./pages/cities/Lewisville";
import TheColony from "./pages/cities/TheColony";

function Router() {
  return (
    <Switch>
      {/* Core */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/cities" component={Cities} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />

      {/* Loan pages */}
      <Route path="/loans/fha" component={FHA} />
      <Route path="/loans/va" component={VA} />
      <Route path="/loans/conventional" component={Conventional} />
      <Route path="/loans/first-time-buyer" component={FirstTimeBuyer} />
      <Route path="/loans/refinance" component={Refinance} />
      <Route path="/loans/dscr" component={DSCR} />
      <Route path="/loans/jumbo" component={Jumbo} />
      <Route path="/loans/usda" component={USDA} />

      {/* City pages */}
      <Route path="/cities/celina" component={Celina} />
      <Route path="/cities/prosper" component={Prosper} />
      <Route path="/cities/frisco" component={Frisco} />
      <Route path="/cities/mckinney" component={McKinney} />
      <Route path="/cities/anna" component={Anna} />
      <Route path="/cities/melissa" component={Melissa} />
      <Route path="/cities/aubrey" component={Aubrey} />
      <Route path="/cities/gunter" component={Gunter} />
      <Route path="/cities/little-elm" component={LittleElm} />
      <Route path="/cities/plano" component={Plano} />
      <Route path="/cities/allen" component={Allen} />
      <Route path="/cities/denton" component={Denton} />
      <Route path="/cities/wylie" component={Wylie} />
      <Route path="/cities/lewisville" component={Lewisville} />
      <Route path="/cities/the-colony" component={TheColony} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
