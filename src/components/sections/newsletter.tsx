import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Newsletter = () => {
  const benefits = [
    "🚀 Latest AI breakthroughs and research",
    "💡 Industry insights and career tips", 
    "🎯 Exclusive course updates and early access",
    "📊 Weekly AI market trends analysis",
    "🔬 Expert interviews and thought leadership",
    "💼 Job opportunities in AI field"
  ];

  return (
    <section id="newsletter" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge 
              variant="outline" 
              className="border-primary text-primary bg-primary/10 mb-4"
            >
              📧 Stay Updated
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Intelligence Newsletter
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 50K+ AI enthusiasts receiving weekly insights on artificial intelligence, 
              career growth, and industry trends directly in your inbox.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                What you'll get:
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Form */}
            <Card className="bg-space-depth border-primary/20 shadow-glow-green">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold mb-2">
                    Subscribe Now
                  </h3>
                  <p className="text-muted-foreground">
                    Get weekly AI insights delivered to your inbox
                  </p>
                </div>

                <div className="space-y-4">
                  <Input 
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                  <Input 
                    type="text"
                    placeholder="Your name (optional)"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-green"
                  >
                    Subscribe to Newsletter
                  </Button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    No spam, unsubscribe at any time. Privacy policy protected.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-background/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Subscribers</div>
                  </div>
                  <div className="bg-background/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-secondary">98%</div>
                    <div className="text-sm text-muted-foreground">Open Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;