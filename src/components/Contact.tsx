import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (307) 400-7585 (USA)', '+91 9311700702 (India)'],
      subtitle: 'Available during working hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@insanger.com'],
      subtitle: "We'll respond within 2 hours"
    },
    {
      icon: MapPin,
      title: 'India Office',
      details: [
        'A1214, Floor-12, Tower-3 NX One Commercial',
        'Sector-1, Techzone-4, Greater Noida',
        'Uttar Pradesh - 201306'
      ],
      subtitle: 'Visit us by appointment'
    },
    {
      icon: MapPin,
      title: 'USA Office',
      details: ['30 N Gould St Ste R', 'Sheridan, WY 82801'],
      subtitle: 'Corporate office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 09:00 AM - 06:00 PM'],
      subtitle: 'Emergency support available 24/7'
    }
  ]

  return (
    <section id='contact' className='py-20 bg-background'>
      <div className='container mx-auto px-4 lg:px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Get In Touch
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Ready to transform your business with cutting-edge IT solutions?
            Let's discuss your project and explore how we can help.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Form */}
          <div className='slide-up'>
            <div className='bg-card border border-border rounded-lg p-8'>
              <div className='flex items-center mb-6'>
                <MessageCircle className='h-6 w-6 text-primary mr-3' />
                <h3 className='text-2xl font-semibold text-foreground'>
                  Send us a Message
                </h3>
              </div>

              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input id='firstName' placeholder='John' className='mt-2' />
                  </div>
                  <div>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input id='lastName' placeholder='Doe' className='mt-2' />
                  </div>
                </div>

                <div>
                  <Label htmlFor='email'>Email Address</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='john@company.com'
                    className='mt-2'
                  />
                </div>

                <div>
                  <Label htmlFor='company'>Company (Optional)</Label>
                  <Input
                    id='company'
                    placeholder='Your Company Name'
                    className='mt-2'
                  />
                </div>

                <div>
                  <Label htmlFor='service'>Service Interest</Label>
                  <select
                    id='service'
                    className='mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring'
                  >
                    <option value=''>Select a service</option>
                    <option value='consulting'>IT Consulting</option>
                    <option value='development'>Software Development</option>
                    <option value='cloud'>Cloud Solutions</option>
                    <option value='security'>Cybersecurity</option>
                    <option value='database'>Database Management</option>
                    <option value='support'>Technical Support</option>
                    <option value='other'>Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    placeholder='Tell us about your project or IT needs...'
                    className='mt-2 min-h-[120px]'
                  />
                </div>

                <Button variant='hero' size='lg' className='w-full'>
                  <Send className='mr-2 h-5 w-5' />
                  Send Message
                </Button>

                <p className='text-sm text-muted-foreground text-center'>
                  We'll get back to you within 2 hours during business hours.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className='slide-up' style={{ animationDelay: '0.2s' }}>
            <div className='space-y-8'>
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className='bg-card border border-border rounded-lg p-6 hover-lift'
                >
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <info.icon className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-foreground mb-2'>
                        {info.title}
                      </h4>
                      <div className='space-y-1 mb-2'>
                        {info.details.map((detail, i) => (
                          <p key={i} className='text-foreground'>
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-primary rounded-lg p-8 text-primary-foreground'>
            <h3 className='text-2xl font-semibold mb-4'>
              Ready to Get Started?
            </h3>
            <p className='text-primary-foreground/90 mb-6 max-w-2xl mx-auto'>
              Book a free consultation call with our experts to discuss your IT
              needs and discover how we can help transform your business.
            </p>
            <Button
              variant='outline'
              size='lg'
              className='bg-background text-primary hover:bg-background/90'
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
