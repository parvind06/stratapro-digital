import { Button } from "@/components/ui/button";
import { Award, Target, Eye, Users } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital marketplace."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the trusted technology partner that transforms how businesses operate, helping them achieve their full potential through cutting-edge IT solutions."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, integrity, innovation, and customer-centricity guide everything we do. We believe in building long-term partnerships based on trust and results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Insanger Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in digital transformation and technology excellence since 2008.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Leading the Digital Revolution
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2008, Insanger Technologies has been at the forefront of digital transformation, 
                helping businesses leverage technology to achieve unprecedented growth and efficiency.
              </p>
              <p>
                Our team of certified experts brings together decades of experience in software development, 
                cloud solutions, cybersecurity, and IT consulting to deliver solutions that matter.
              </p>
              <p>
                We've successfully partnered with startups, SMEs, and enterprise organizations across 
                various industries, delivering innovative solutions that drive real business value.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Right Content - Company Values */}
          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-card border border-border rounded-lg p-6 hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section Preview */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Why Choose Insanger Technologies?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-lg font-semibold text-primary mb-2">Certified Expertise</div>
              <p className="text-sm text-muted-foreground">
                Our team holds industry certifications from Microsoft, AWS, Google Cloud, and more.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary mb-2">Proven Track Record</div>
              <p className="text-sm text-muted-foreground">
                Over 500 successful projects delivered on time and within budget.
              </p>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary mb-2">24/7 Support</div>
              <p className="text-sm text-muted-foreground">
                Round-the-clock monitoring and support to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;