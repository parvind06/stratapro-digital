import { 
  Code, 
  Cloud, 
  Shield, 
  Database, 
  Settings, 
  Lightbulb,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "IT Consulting",
      description: "Strategic technology planning and digital transformation guidance to optimize your business operations and drive growth.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "ROI Analysis"]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs, from web applications to mobile apps.",
      features: ["Custom Applications", "Web Development", "Mobile Apps", "API Integration"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Seamless cloud migration and management services to enhance scalability, security, and cost-efficiency.",
      features: ["Cloud Migration", "AWS/Azure Setup", "Backup Solutions", "Cost Optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      features: ["Security Audits", "Threat Monitoring", "Compliance Support", "Employee Training"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Expert database design, optimization, and maintenance to ensure data integrity and performance.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup & Recovery"]
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Reliable ongoing support and maintenance to keep your systems running smoothly 24/7.",
      features: ["24/7 Monitoring", "Help Desk Support", "System Maintenance", "Emergency Response"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our IT Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business 
            and drive sustainable growth in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-lg p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="subtle" className="w-full group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              We create tailored IT solutions that perfectly fit your unique business requirements and goals.
            </p>
            <Button variant="hero" size="lg">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;