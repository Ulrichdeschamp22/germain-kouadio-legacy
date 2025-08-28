import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Mail, Youtube, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé!",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/2250787144278', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-divine">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contact Rapide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Invitez le Professeur Germain Kouadio pour vos événements ou contactez-le directement
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl shadow-divine p-8">
            <h3 className="font-heading text-2xl font-bold mb-6">Envoyez un Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Votre nom"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="votre@email.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="subject">Objet</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  placeholder="Invitation pour conférence"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Votre message..."
                  rows={5}
                  className="mt-1"
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="formation">Formation souhaitée</Label>
                <select 
                  id="formation" 
                  className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
                >
                  <option value="">Sélectionnez une formation</option>
                  <option value="etapes">Étapes du Leadership</option>
                  <option value="lecons">Leçons de Leadership</option>
                  <option value="principes">Principes du Leadership</option>
                  <option value="executif">Leadership Exécutif</option>
                  <option value="spirituel">Formation Spirituelle</option>
                  <option value="enligne">Leadership en Ligne</option>
                  <option value="seminaire">Séminaire sur mesure</option>
                </select>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="mr-2" />
                S'inscrire / Inviter le Professeur
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-card rounded-xl shadow-card p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">Contact Direct</h3>
              
              {/* WhatsApp Button */}
              <Button 
                variant="default" 
                size="lg" 
                className="w-full mb-4 bg-green-600 hover:bg-green-700"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2" />
                WhatsApp: +225 07 87 14 42 78
              </Button>

              {/* Email */}
              <div className="flex items-center gap-3 p-4 bg-accent rounded-lg mb-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:gkouadiokonan@yahoo.com" className="font-medium hover:text-primary">
                    gkouadiokonan@yahoo.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 bg-accent rounded-lg mb-4">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <p className="font-medium">+225 07 87 14 42 78</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 bg-accent rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Localisation</p>
                  <p className="font-medium">Atlanta, Georgia, USA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-xl shadow-card p-8">
              <h3 className="font-heading text-xl font-bold mb-4">Suivez-nous</h3>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Youtube className="mr-2 h-5 w-5 text-red-600" />
                  Germain Kouadio
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Youtube className="mr-2 h-5 w-5 text-red-600" />
                  LA VIE ABONDANTE TV
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-xl shadow-card p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Atlanta, Georgia</p>
                <p className="text-sm text-muted-foreground mt-2">États-Unis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;