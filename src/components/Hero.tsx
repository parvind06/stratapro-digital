import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'
import heroImage from '@/assets/hero-tech-image.jpg'

const Hero = () => {
  return (
    <section
      id='home'
      className='pt-20 pb-16 bg-gradient-corporate relative overflow-hidden'
    >
      <div className='container mx-auto px-4 lg:px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]'>
          {/* Content - Left Side */}
          <div className='space-y-8 h-full flex flex-col justify-center'>
            {/* Main Heading */}
            <div className='fade-in'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight'>
                Transform Your Business with
                <span className='text-primary block mt-2'>
                  Expert IT Solutions
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className='slide-up' style={{ animationDelay: '0.2s' }}>
              <p className='text-xl text-muted-foreground leading-relaxed'>
                We deliver cutting-edge technology solutions that drive growth,
                enhance security, and streamline operations for businesses of
                all sizes.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className='slide-up' style={{ animationDelay: '0.4s' }}>
              <div className='flex flex-wrap items-center gap-6 text-sm text-muted-foreground'>
                <div className='flex items-center'>
                  <Shield className='h-5 w-5 text-primary mr-2' />
                  <span>Certified Experts</span>
                </div>
                <div className='flex items-center'>
                  <Zap className='h-5 w-5 text-primary mr-2' />
                  <span>24/7 Support</span>
                </div>
                <div className='flex items-center'>
                  <Users className='h-5 w-5 text-primary mr-2' />
                  <span>500+ Happy Clients</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className='slide-up flex flex-col sm:flex-row gap-4'
              style={{ animationDelay: '0.6s' }}
            >
              <Button variant='hero' size='lg' className='group'>
                Get Free Consultation
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Button>
              <Button variant='outline' size='lg'>
                View Our Services
              </Button>
            </div>

            {/* Additional Info */}
            <div className='slide-up' style={{ animationDelay: '0.8s' }}>
              <p className='text-sm text-muted-foreground'>
                ✓ No long-term contracts &nbsp;&nbsp; ✓ Free initial assessment
                &nbsp;&nbsp; ✓ 30-day money-back guarantee
              </p>
            </div>
          </div>

          {/* Large Image - Right Side */}
          <div className='relative h-full flex items-center justify-center'>
            <div
              className='slide-up w-full h-full max-h-[500px] flex items-center'
              style={{ animationDelay: '0.4s' }}
            >
              <img
                src={heroImage}
                alt='Modern technology solutions and digital transformation'
                className='w-full h-full object-cover object-top rounded-lg shadow-large'
              />
            </div>
          </div>
        </div>

        {/* Tech-themed Abstract Elements */}
        <div className='absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float'></div>
        <div
          className='absolute top-40 right-10 w-32 h-32 bg-primary/15 rounded-full blur-xl animate-float'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute bottom-20 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-xl animate-float'
          style={{ animationDelay: '2s' }}
        ></div>

        {/* Tech Grid Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-10 left-20 w-2 h-2 bg-primary rounded-full'></div>
          <div className='absolute top-32 right-24 w-1 h-1 bg-primary rounded-full'></div>
          <div className='absolute bottom-32 left-32 w-1.5 h-1.5 bg-primary rounded-full'></div>
          <div className='absolute top-64 left-1/3 w-1 h-1 bg-primary rounded-full'></div>
          <div className='absolute bottom-40 right-1/4 w-2 h-2 bg-primary rounded-full'></div>
        </div>

        {/* Geometric Shapes */}
        <div className='absolute top-1/4 right-20 w-8 h-8 border border-primary/20 rotate-45 animate-pulse'></div>
        <div
          className='absolute bottom-1/3 left-16 w-6 h-6 border border-primary/20 rotate-12 animate-pulse'
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>
    </section>
  )
}

export default Hero
