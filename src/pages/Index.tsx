import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, Wifi, Leaf, Utensils, Flame } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";
import coffee from "@/assets/coffee.jpg";
import calzone from "@/assets/calzone.jpg";
import pasta from "@/assets/pasta.jpg";
import interior from "@/assets/interior.jpg";

const dishes = [
  { img: heroPizza, name: "Wood-Fired Margherita", desc: "San Marzano tomato, fior di latte, fresh basil — perfectly charred." },
  { img: calzone, name: "Smokey Chicken Calzone", desc: "A guest favourite — folded, baked golden, oozing with flavour." },
  { img: pasta, name: "Vodka Sauce Pasta", desc: "Silky tomato cream, parmesan, a hint of chilli. Pure comfort." },
  { img: coffee, name: "Artisan Coffee", desc: "Single-origin espresso, lattes & cappuccinos crafted by our baristas." },
];

const reviews = [
  { text: "You will love the food, vibe and service.", author: "Aarav S." },
  { text: "The smokey chicken calzone & vodka sauce pizza were a blast!", author: "Priya M." },
  { text: "Hands down the best pizza in Galleria Market.", author: "Rohan K." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="font-display text-2xl font-bold text-primary tracking-tight">
            Grotto<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-primary transition-colors">Visit</a>
          </nav>
          <Button asChild variant="default" className="gradient-warm border-0 shadow-warm hover:opacity-90">
            <a href="https://tr.ee" target="_blank" rel="noopener noreferrer">Order Online</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <img
          src={heroPizza}
          alt="Wood-fired Margherita pizza at Grotto Gurugram"
          width={1600}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="container relative z-10 py-24">
          <div className="max-w-2xl text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/15 backdrop-blur-sm border border-background/20 mb-6">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium">4.8 · 1,993 Google reviews</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-balance mb-6">
              Wood-fired pizzas, brewed with <em className="text-accent not-italic">love</em>.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl text-balance">
              Tucked inside Galleria Market, Grotto serves perfectly charred pizzas, soulful pasta and barista-crafted coffee in the heart of Gurugram.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gradient-warm border-0 shadow-warm hover:opacity-90 text-base h-12 px-8">
                <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">Reserve a Table</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/40 hover:bg-background/20 hover:text-primary-foreground h-12 px-8">
                <a href="https://tr.ee" target="_blank" rel="noopener noreferrer">View Menu</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-cream">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Flame, label: "Wood-Fired Oven" },
            { icon: Leaf, label: "Vegetarian Options" },
            { icon: Utensils, label: "Outdoor Seating" },
            { icon: Wifi, label: "Free Wi-Fi" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full gradient-warm flex items-center justify-center shadow-warm">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-medium text-sm md:text-base">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">Signature Bites</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">Made with passion, served with pride</h2>
            <p className="text-muted-foreground text-lg">From our wood-fired oven to your table — every dish tells a story.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dishes.map((d) => (
              <Card key={d.name} className="group overflow-hidden border-border/60 shadow-card-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold mb-2">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8">
              <a href="https://tr.ee" target="_blank" rel="noopener noreferrer">See the Full Menu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-cream-deep">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={interior} alt="Grotto pizzeria interior" loading="lazy" className="rounded-2xl shadow-warm w-full h-full object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-background rounded-2xl p-6 shadow-warm border border-border">
              <div className="text-4xl font-display font-bold text-primary">4.8★</div>
              <div className="text-sm text-muted-foreground">on Zomato · 3,841 votes</div>
            </div>
          </div>
          <div>
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">A little corner of Italy in Gurugram</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Located in the heart of Gurugram's Galleria Market, Grotto promises to sprinkle lusciousness into every bite of our pizzas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Perfectly charred crusts, palatable ingredients, and a richness of taste — every pizza is magically prepared, every coffee carefully brewed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="gradient-warm border-0 shadow-warm h-12 px-8">
                <a href="tel:09910908290">Call Us</a>
              </Button>
              <Button asChild variant="outline" className="h-12 px-8">
                <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">Reserve via Swiggy</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">Loved by Locals</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">What our guests are saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Card key={i} className="p-8 bg-cream border-border/60 shadow-card-soft">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-display text-xl italic leading-snug mb-6">"{r.text}"</p>
                <p className="text-sm text-muted-foreground font-medium">— {r.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="py-24 bg-charcoal text-primary-foreground">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">Come hungry. Leave happy.</h2>
            <p className="text-primary-foreground/75 text-lg mb-8">
              Open daily until 11:30 PM. Walk in, reserve a table, or order online — whichever way, we'll save you a slice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gradient-warm border-0 shadow-warm h-12 px-8">
                <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">Reserve a Table</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-charcoal h-12 px-8">
                <a href="https://tr.ee" target="_blank" rel="noopener noreferrer">Order Delivery</a>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl font-bold mb-1">Find Us</h3>
                <p className="text-primary-foreground/75">SF-090, First Floor, Galleria Market,<br />Sector 28, DLF Phase IV, Gurugram, Haryana 122009</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl font-bold mb-1">Call</h3>
                <a href="tel:09910908290" className="text-primary-foreground/75 hover:text-accent transition-colors">099109 08290</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl font-bold mb-1">Hours</h3>
                <p className="text-primary-foreground/75">Open daily · Closes 11:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal text-primary-foreground/60 border-t border-primary-foreground/10 py-8">
        <div className="container flex flex-col md:flex-row gap-4 justify-between items-center text-sm">
          <p className="font-display text-lg text-primary-foreground">Grotto<span className="text-accent">.</span></p>
          <p>© {new Date().getFullYear()} Grotto Pizzeria & Coffee Shop · Galleria Market, Gurugram</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">Facebook</a>
            <a href="#" className="hover:text-accent">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
