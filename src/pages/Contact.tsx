import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch with Emerald Financial Group
          </p>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "px-6 py-3 rounded-md",
                  "bg-orange-500 text-white font-sans font-medium",
                  "hover:bg-orange-600",
                  "transition-colors"
                )}
              >
                Send Message
              </button>
            </form>
          </div>

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

export default Contact;
