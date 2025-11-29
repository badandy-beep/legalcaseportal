import Link from 'next/link'
import { Shield, FileText, Users, Clock, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-teal-600" />
              <span className="text-xl font-bold text-navy-900">LegalCasePortal</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-navy-900">How It Works</a>
              <a href="#about" className="text-gray-600 hover:text-navy-900">About</a>
              <a href="#faq" className="text-gray-600 hover:text-navy-900">FAQ</a>
              <Link href="/intake/start" className="btn-primary">
                Start Evaluation
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - 61.8/38.2 Golden Ratio Split */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - 61.8% */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Family Deserves <span className="text-teal-400">Answers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                If your child developed autism or other injuries following vaccination, you may be 
                entitled to compensation through the National Vaccine Injury Compensation Program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/intake/start" 
                  className="bg-coral-600 hover:bg-coral-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start Your Free Case Evaluation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="tel:1-800-XXX-XXXX" 
                  className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">No Upfront Costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">HIPAA Compliant</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - 38.2% */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-navy-900 text-xl font-bold mb-4">Quick Eligibility Check</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-600 font-bold text-sm">1</span>
                    </div>
                    <p>Child received vaccinations per CDC schedule</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-600 font-bold text-sm">2</span>
                    </div>
                    <p>Autism diagnosis or developmental regression</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-600 font-bold text-sm">3</span>
                    </div>
                    <p>Symptoms appeared after vaccination</p>
                  </div>
                </div>
                <Link 
                  href="/intake/start"
                  className="w-full mt-6 bg-coral-600 hover:bg-coral-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Check My Eligibility
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NVICP Info Banner */}
      <section className="bg-teal-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">NVICP Trust Fund: $3+ Billion Available</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-teal-400"></div>
            <span>Federal No-Fault Compensation Program</span>
            <div className="hidden md:block w-px h-6 bg-teal-400"></div>
            <span>Attorney Fees Paid Separately by Fund</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process connects you with experienced legal representation
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "Complete Intake",
                description: "Fill out our secure intake form. Takes about 15-20 minutes.",
                color: "bg-teal-100 text-teal-600"
              },
              {
                icon: Clock,
                title: "48-Hour Review",
                description: "Our team reviews your case details within 48 hours.",
                color: "bg-navy-100 text-navy-600"
              },
              {
                icon: Users,
                title: "Legal Match",
                description: "If qualified, we connect you with specialized vaccine injury attorneys.",
                color: "bg-gold-100 text-gold-600"
              },
              {
                icon: Shield,
                title: "File Your Claim",
                description: "Your attorney files your NVICP claim at no upfront cost to you.",
                color: "bg-coral-100 text-coral-600"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="text-sm font-semibold text-teal-600 mb-2">STEP {index + 1}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/intake/start"
              className="btn-primary inline-flex items-center gap-2"
            >
              Start Your Free Evaluation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                About Autism Justice Foundation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We connect families affected by vaccine injuries with experienced legal representation. 
                Our mission is to help you navigate the complex NVICP process and pursue the compensation 
                your family deserves.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The National Vaccine Injury Compensation Program (NVICP) is a federal "no-fault" program 
                that provides compensation to people who may have been injured by certain vaccines. Unlike 
                traditional lawsuits, NVICP claims are decided by Special Masters at the U.S. Court of 
                Federal Claims.
              </p>
              <ul className="space-y-3">
                {[
                  "Over $4.6 billion paid to vaccine injury victims since 1986",
                  "Attorney fees paid separately by the fund - not from your award",
                  "No need to prove manufacturer negligence",
                  "Dedicated Special Masters handle all cases"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600">1 in 31</div>
                  <div className="text-sm text-gray-600 mt-1">Children with Autism (CDC 2025)</div>
                </div>
                <div className="text-center p-4 bg-navy-50 rounded-lg">
                  <div className="text-3xl font-bold text-navy-900">382%</div>
                  <div className="text-sm text-gray-600 mt-1">Increase Since 2000</div>
                </div>
                <div className="text-center p-4 bg-gold-50 rounded-lg">
                  <div className="text-3xl font-bold text-gold-600">$3B+</div>
                  <div className="text-sm text-gray-600 mt-1">Trust Fund Available</div>
                </div>
                <div className="text-center p-4 bg-coral-50 rounded-lg">
                  <div className="text-3xl font-bold text-coral-600">60%</div>
                  <div className="text-sm text-gray-600 mt-1">Cases Settled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our free, confidential case evaluation takes just 15-20 minutes. 
            There's no obligation and no upfront costs.
          </p>
          <Link 
            href="/intake/start"
            className="bg-coral-600 hover:bg-coral-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Start Your Free Case Evaluation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-teal-500" />
                <span className="text-lg font-bold text-white">LegalCasePortal</span>
              </div>
              <p className="text-sm">
                Connecting families with experienced vaccine injury attorneys.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="#about" className="hover:text-white">About NVICP</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                <li><Link href="/intake/start" className="hover:text-white">Start Evaluation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/hipaa" className="hover:text-white">HIPAA Notice</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:1-800-XXX-XXXX" className="hover:text-white">1-800-XXX-XXXX</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@legalcaseportal.com" className="hover:text-white">info@legalcaseportal.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} LegalCasePortal. All rights reserved.</p>
            <p className="mt-2 text-xs">
              This website is for informational purposes only and does not constitute legal advice. 
              Attorney advertising. Prior results do not guarantee a similar outcome.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
