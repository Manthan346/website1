"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Users, Zap, DollarSign, Lock } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md" style={{ borderColor: "#F0E6EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/kamkii-logo.png" alt="Knkii Logo" className="h-24 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-[#E25092] transition-colors font-poppins">
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-gray-600 hover:text-[#E25092] transition-colors font-poppins"
              >
                How it Works
              </a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-[#E25092] transition-colors font-poppins">
                FAQ
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-[#E25092] font-poppins">
                Log In
              </Button>
              <Button
                size="sm"
                className="text-white font-poppins font-medium"
                style={{ backgroundColor: "#F07AAE" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E25092")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F07AAE")}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white"
        style={{ backgroundImage: "linear-gradient(to bottom, #FCE4ED, #FFFFFF)" }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 font-poppins"
            style={{ backgroundColor: "#F9B7D0", borderColor: "#F07AAE" }}
          >
            <Zap className="w-4 h-4" style={{ color: "#E25092" }} />
            <span className="text-sm font-medium" style={{ color: "#E25092" }}>
              Trusted by 50K+ Creators
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 font-fredoka">
            <span style={{ color: "#F07AAE" }}>Connect, Create,</span>
            <br />
            <span>Earn More</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-poppins">
            The all-in-one platform for creators to monetize their content, connect with fans, and build lasting
            relationships. Secure. Safe. Profitable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="text-white text-base font-poppins font-semibold"
              style={{ backgroundColor: "#F07AAE" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E25092")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F07AAE")}
            >
              Start Earning Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-poppins font-semibold bg-transparent"
              style={{ borderColor: "#F0E6EB", color: "#F07AAE", backgroundColor: "transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FCE4ED")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Explore Platform
            </Button>
          </div>

          <div
            className="mt-12 rounded-2xl overflow-hidden h-96 flex items-center justify-center border"
            style={{ backgroundColor: "#FCE4ED", borderColor: "#F9B7D0" }}
          >
            <img
              src="/creator-platform-dashboard.jpg"
              alt="Platform Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y" style={{ borderColor: "#F0E6EB" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-fredoka" style={{ color: "#F07AAE" }}>
                $2.4M+
              </div>
              <p className="text-gray-600 font-poppins">Paid to Creators</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-fredoka" style={{ color: "#F07AAE" }}>
                50K+
              </div>
              <p className="text-gray-600 font-poppins">Active Creators</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-fredoka" style={{ color: "#F07AAE" }}>
                500K+
              </div>
              <p className="text-gray-600 font-poppins">Verified Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 font-fredoka" style={{ color: "#F07AAE" }}>
                98%
              </div>
              <p className="text-gray-600 font-poppins">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FCE4ED" }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-fredoka">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins">
              Everything you need to monetize your content and build a thriving community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border transition-all hover:shadow-lg"
                style={{ borderColor: "#F0E6EB" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#F07AAE"
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(240, 122, 174, 0.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#F0E6EB"
                  e.currentTarget.style.boxShadow = ""
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#F9B7D0" }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: "#E25092" }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-fredoka">{feature.title}</h3>
                <p className="text-gray-600 font-poppins">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y"
        style={{ borderColor: "#F0E6EB" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-fredoka">Simple Process</h2>
            <p className="text-lg text-gray-600 font-poppins">Get started in minutes and start earning immediately</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div
                  className="text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 font-fredoka text-lg"
                  style={{ backgroundColor: "#F07AAE" }}
                >
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-fredoka">{step.title}</h3>
                <p className="text-gray-600 text-sm font-poppins">{step.description}</p>
                {idx < steps.length - 1 && (
                  <div
                    className="absolute top-6 left-24 w-24 h-0.5 hidden md:block"
                    style={{ backgroundColor: "#F0E6EB" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FCE4ED" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-fredoka">Your Safety, Our Priority</h2>
              <p className="text-lg text-gray-600 mb-8 font-poppins">
                We take security and privacy seriously. Your content, your data, your control.
              </p>
              <ul className="space-y-4">
                {securityFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: "#F07AAE" }} />
                    <span className="text-gray-700 font-poppins">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl overflow-hidden h-96 flex items-center justify-center border"
              style={{ backgroundColor: "#F9B7D0", borderColor: "#F07AAE" }}
            >
              <Lock className="w-24 h-24" style={{ color: "rgba(240, 122, 174, 0.3)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y" style={{ borderColor: "#F0E6EB" }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-fredoka">Transparent Pricing</h2>
            <p className="text-lg text-gray-600 font-poppins">No hidden fees. Scale at your own pace.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border transition-all"
                style={
                  plan.popular
                    ? {
                        backgroundColor: "#FCE4ED",
                        borderColor: "#F07AAE",
                        boxShadow: "0 15px 40px rgba(240, 122, 174, 0.15)",
                        transform: "scale(1.05)",
                      }
                    : { backgroundColor: "#FFFFFF", borderColor: "#F0E6EB" }
                }
              >
                {plan.popular && (
                  <div
                    className="inline-block px-3 py-1 text-white text-xs font-semibold rounded-full mb-4 font-fredoka"
                    style={{ backgroundColor: "#F07AAE" }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-fredoka">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6 font-poppins">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 font-fredoka">{plan.price}</span>
                  <span className="text-gray-600 ml-2 font-poppins">{plan.period}</span>
                </div>
                <Button
                  className="w-full mb-6 font-poppins font-semibold"
                  style={
                    plan.popular
                      ? { backgroundColor: "#F07AAE", color: "#FFFFFF" }
                      : { borderColor: "#F0E6EB", color: "#F07AAE", backgroundColor: "transparent" }
                  }
                  onMouseEnter={(e) => {
                    if (plan.popular) {
                      e.currentTarget.style.backgroundColor = "#E25092"
                    } else {
                      e.currentTarget.style.backgroundColor = "#FCE4ED"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.popular) {
                      e.currentTarget.style.backgroundColor = "#F07AAE"
                    } else {
                      e.currentTarget.style.backgroundColor = "transparent"
                    }
                  }}
                >
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-gray-700 font-poppins">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#F07AAE" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FCE4ED" }}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-fredoka">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border transition-all"
                style={{ borderColor: "#F0E6EB" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#F07AAE"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#F0E6EB"
                }}
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2 font-fredoka">{faq.q}</h3>
                <p className="text-gray-600 font-poppins">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #F07AAE 0%, #E25092 100%)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-fredoka">Ready to Start Earning?</h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto font-poppins" style={{ opacity: 0.95 }}>
            Join thousands of creators already making real money on Knkii
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-base font-poppins font-semibold"
              style={{ backgroundColor: "#FFFFFF", color: "#F07AAE" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9F5F7")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              className="text-base font-poppins font-semibold text-white"
              style={{ backgroundColor: "transparent", borderColor: "#FFFFFF", borderWidth: "2px" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-white mt-8 font-poppins" style={{ opacity: 0.9 }}>
            ✓ No credit card required • ✓ 18+ verification included • ✓ Instant activation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white" style={{ borderColor: "#F0E6EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/kamkii-logo.png" alt="Knkii Logo" className="h-24 w-auto" />
              </div>
              <p className="text-sm text-gray-600 font-poppins">Empower creators worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 font-fredoka">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-poppins">
                <li>
                  <a href="#" className="hover:text-[#E25092] transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E25092] transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E25092] transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 font-fredoka">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-poppins">
                <li>
                  <a href="#" className="hover:text-[#E25092] transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E25092] transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E25092] transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 font-fredoka">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-poppins">
                <li>
                  <a href="#" className="hover:text-[#E25092] transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E25092] transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E25092] transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="border-t pt-8 text-center text-sm text-gray-600 font-poppins"
            style={{ borderColor: "#F0E6EB" }}
          >
            <p>© 2025 Knkii. All rights reserved. | Empowering creators, one connection at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Data
const features = [
  {
    icon: Users,
    title: "Connect with Fans",
    description: "Build genuine relationships with your audience through direct messaging and exclusive content",
  },
  {
    icon: DollarSign,
    title: "Multiple Revenue Streams",
    description: "Earn from paid chats, tips, subscriptions, and exclusive content all in one place",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Encrypted chats, disappearing media, and complete control over your content",
  },
  {
    icon: Star,
    title: "Creator Tools",
    description: "Professional editing tools, analytics dashboard, and performance insights",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Withdraw to bank, PayPal, Venmo, or Cash App. No waiting, no hassle",
  },
  {
    icon: Check,
    title: "Verified Badge",
    description: "18+ verification and safety checks keep your community trustworthy",
  },
]

const steps = [
  {
    title: "Sign Up",
    description: "Create your account in seconds",
  },
  {
    title: "Verify",
    description: "18+ verification for safety",
  },
  {
    title: "Create Profile",
    description: "Add bio, photos, and set rates",
  },
  {
    title: "Start Earning",
    description: "Connect and monetize today",
  },
]

const securityFeatures = [
  "256-bit encryption on all communications",
  "Age verification (18+) required",
  "Content moderation with AI detection",
  "Instant reporting and blocking tools",
  "GDPR & privacy law compliant",
  "Secure payment processing",
]

const pricing = [
  {
    name: "Starter",
    description: "Perfect for new creators",
    price: "Free",
    period: "",
    cta: "Get Started",
    features: ["Basic profile", "100% commission", "Free chat feature", "Community support", "1GB storage"],
  },
  {
    name: "Creator",
    description: "For growing creators",
    price: "$9.99",
    period: "/month",
    cta: "Start Now",
    popular: true,
    features: [
      "Advanced analytics",
      "95% commission",
      "Priority support",
      "50GB storage",
      "Creator tools",
      "Referral program",
    ],
  },
  {
    name: "Pro",
    description: "For top creators",
    price: "$29.99",
    period: "/month",
    cta: "Upgrade",
    features: [
      "White-label options",
      "98% commission",
      "24/7 support",
      "Unlimited storage",
      "Advanced tools",
      "Dedicated manager",
    ],
  },
]

const faqs = [
  {
    q: "Is the platform really free?",
    a: "Yes! Starting is completely free. You only pay platform fees on earnings. On Starter tier, you keep 100% of your first earnings.",
  },
  {
    q: "How do I withdraw my earnings?",
    a: "We support multiple withdrawal methods: bank transfer, PayPal, Venmo, Cash App, and direct deposit. Withdraw anytime with no minimum.",
  },
  {
    q: "What about content safety?",
    a: "We use AI-powered content moderation and manual review. 18+ verification is required. We have strict community guidelines to ensure everyone is safe.",
  },
  {
    q: "How does age verification work?",
    a: "Creators and members verify their age using secure third-party verification. It's quick, private, and complies with all regulations.",
  },
  {
    q: "Can I control who sees my content?",
    a: "Absolutely. You decide which content is free or paid, who can message you, and you can block users anytime.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, digital wallets, and bank transfers through our secure payment partner Stripe.",
  },
]
