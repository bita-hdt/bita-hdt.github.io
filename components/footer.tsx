import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="py-8 mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Let's Work Together</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out if you'd like to collaborate on innovative
              frontend solutions!
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:bita.hdt@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>

          <div className="pt-6">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4"></div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-1 text-sm text-muted-foreground">
              <span>
                © {new Date().getFullYear()} Bita Hedayat. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
