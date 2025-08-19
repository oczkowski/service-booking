import Container from "@/globalComponents/container";
import HomeHero from "./components/hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  return (
    <>
      <HomeHero />
      <Container>
        <div className="max-w-6xl mx-auto py-12 space-y-16">
          <section className="text-center space-y-4">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with trusted service professionals in your area. Book, manage, and pay for services all in one place.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <CardTitle>Browse Services</CardTitle>
                <CardDescription>
                  Choose from thousands of verified service providers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <CardTitle>Book Instantly</CardTitle>
                <CardDescription>
                  Schedule appointments that fit your timeline
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <CardTitle>Get It Done</CardTitle>
                <CardDescription>
                  Enjoy professional service with secure payment
                </CardDescription>
              </CardHeader>
            </Card>
          </section>

          <section className="bg-muted rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join thousands of satisfied customers who trust our platform for their service needs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg">
                <Link href="/book">Find Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/plans">Start Free Trial</Link>
              </Button>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">For Service Providers</h2>
              <p className="text-muted-foreground mb-6">
                Grow your business by connecting with customers who need your services. 
                Manage bookings, payments, and customer relationships all in one place.
              </p>
              <Button asChild>
                <Link href="/plans">Join as Provider</Link>
              </Button>
            </div>
            <Card>
              <CardContent className="py-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Easy booking management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Secure payment processing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Customer communication tools
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Performance analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Home;
