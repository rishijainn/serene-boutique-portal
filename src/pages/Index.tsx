import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Wifi, Car, Utensils, Dumbbell, Star, Menu, X } from 'lucide-react';

// Import all images
import hotelExterior from '@/assets/hotel-exterior.jpg';
import deluxeRoom from '@/assets/deluxe-room.jpg';
import executiveSuite from '@/assets/executive-suite.jpg';
import standardRoom from '@/assets/standard-room.jpg';
import presidentialSuite from '@/assets/presidential-suite.jpg';
import lobby from '@/assets/lobby.jpg';
import restaurant from '@/assets/restaurant.jpg';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const rooms = [
    {
      name: 'Standard Room',
      image: standardRoom,
      price: 120,
      features: ['Queen Bed', 'Free Wi-Fi', 'AC', 'TV', 'Mini Bar'],
      size: '25 sqm'
    },
    {
      name: 'Deluxe Room', 
      image: deluxeRoom,
      price: 180,
      features: ['King Bed', 'City View', 'Free Wi-Fi', 'AC', 'TV', 'Mini Bar', 'Work Desk'],
      size: '35 sqm'
    },
    {
      name: 'Executive Suite',
      image: executiveSuite, 
      price: 280,
      features: ['Separate Living Area', 'King Bed', 'City View', 'Free Wi-Fi', 'AC', 'TV', 'Kitchenette'],
      size: '55 sqm'
    },
    {
      name: 'Presidential Suite',
      image: presidentialSuite,
      price: 450,
      features: ['Panoramic View', 'King Bed', 'Living Room', 'Dining Area', 'Premium Amenities', 'Butler Service'],
      size: '85 sqm'
    }
  ];

  const galleryImages = [
    { src: lobby, alt: 'Hotel Lobby' },
    { src: restaurant, alt: 'Restaurant' },
    { src: deluxeRoom, alt: 'Deluxe Room' }, 
    { src: executiveSuite, alt: 'Executive Suite' },
    { src: standardRoom, alt: 'Standard Room' },
    { src: hotelExterior, alt: 'Hotel Exterior' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-playfair text-2xl font-bold text-primary">
              Grand Vista Hotel
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hotelExterior})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Welcome to <br />
            <span className="text-gold">Grand Vista Hotel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experience luxury and comfort in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('#rooms')}
              className="btn-gold px-8 py-6 text-lg font-semibold"
            >
              Explore Rooms
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="outline" 
              className="btn-outline-gold px-8 py-6 text-lg font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              About Grand Vista Hotel
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-semibold text-primary mb-6">
                A Legacy of Excellence
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Since 1995, Grand Vista Hotel has been synonymous with luxury, comfort, and exceptional service. 
                Located in the vibrant heart of downtown, our boutique hotel offers an intimate experience 
                that combines modern amenities with timeless elegance.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether you're traveling for business or leisure, our dedicated team ensures every detail 
                of your stay exceeds expectations. From our elegantly appointed rooms to our award-winning 
                restaurant, every aspect reflects our commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Star className="w-4 h-4 mr-2 text-gold" />
                  4.8/5 Rating
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Prime Location
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Utensils className="w-4 h-4 mr-2" />
                  Fine Dining
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Free Wi-Fi</h4>
                  <p className="text-sm text-muted-foreground">High-speed internet throughout the hotel</p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Valet Parking</h4>
                  <p className="text-sm text-muted-foreground">Complimentary valet service</p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Fine Dining</h4>
                  <p className="text-sm text-muted-foreground">Award-winning restaurant</p>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Dumbbell className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Fitness Center</h4>
                  <p className="text-sm text-muted-foreground">24/7 fitness facilities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Rates Section */}
      <section id="rooms" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Rooms & Suites
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our selection of elegantly appointed accommodations, each designed 
              to provide the perfect blend of comfort and luxury.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-gold text-primary font-semibold">
                      ${room.price}/night
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                    {room.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{room.size}</p>
                  
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full btn-gold">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our beautifully designed spaces and amenities through our photo gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg hover-lift cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for reservations, inquiries, or any assistance you may need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          123 Grand Avenue<br />
                          Downtown District<br />
                          Metropolitan City, MC 12345
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Phone</h4>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567<br />
                          Available 24/7
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Email</h4>
                        <p className="text-muted-foreground">
                          reservations@grandvistahotel.com<br />
                          info@grandvistahotel.com
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map Placeholder */}
              <Card className="shadow-medium">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Interactive map will be integrated here<br />
                        123 Grand Avenue, Downtown District
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full btn-gold text-lg py-6">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-playfair text-3xl font-bold mb-4">Grand Vista Hotel</h3>
            <p className="text-primary-foreground/80 mb-6">
              Experience luxury and comfort in the heart of the city
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <span>© 2024 Grand Vista Hotel</span>
              <span>•</span>
              <span>All Rights Reserved</span>
              <span>•</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;