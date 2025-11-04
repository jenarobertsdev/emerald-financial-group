import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">About</h1>
          <p className="text-lg text-muted-foreground mb-8">
            This is a starter project configured with:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-foreground">
                <strong>Vite</strong> - Next generation frontend tooling
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-foreground">
                <strong>Tailwind CSS v4</strong> - Utility-first CSS framework
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-foreground">
                <strong>React Router 7</strong> - Declarative routing for React
                applications
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-foreground">
                <strong>shadcn/ui</strong> - Re-usable components built with
                Radix UI and Tailwind CSS
              </span>
            </li>
          </ul>

          <Link
            to="/"
            className={cn(
              "inline-block px-6 py-3 rounded-md",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90",
              "transition-colors"
            )}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
