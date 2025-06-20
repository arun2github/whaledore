"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Code, Users, Settings, Monitor, MessageSquare, Youtube, Computer, Image, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form handling logic
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, type: "spring" }} className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              WhaleCore<span className="text-blue-400">Innovations</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors">Services</a>
              <a href="#team" className="text-white hover:text-blue-400 transition-colors">Team</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Crafting Digital Excellence.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Pixel by Pixel.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              We meticulously design and engineer intuitive web and mobile experiences that elevate your brand and engage your audience.
            </p>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Comprehensive Services</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We offer a tailored suite of expert services designed to elevate your digital presence and empower your business for sustained growth and innovation.
            </p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <Code className="h-12 w-12 text-blue-400 mb-4" />
                  <CardTitle className="text-white text-xl">Web Development</CardTitle>
                  <CardDescription className="text-gray-300">
                    Crafting responsive, high-performance web applications with modern architectures and scalable solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-400 space-y-2">
                    <li>• React/Next.js</li>
                    <li>• Node.js/Express</li>
                    <li>• API Design & Integration</li>
                    <li>• Database Architecture</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            {/* Mobile App Development */}
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <Monitor className="h-12 w-12 text-purple-400 mb-4" />
                  <CardTitle className="text-white text-xl">Mobile App Development</CardTitle>
                  <CardDescription className="text-gray-300">
                    Building intuitive native or cross-platform mobile apps that deliver seamless user experiences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-400 space-y-2">
                    <li>• iOS (Flutter)</li>
                    <li>• Android (Kotlin/Java/Flutter)</li>
                    <li>• Flutter/React Native</li>
                    <li>• App Store Deployment</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            {/* AI Agents Development */}
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <Computer className="h-12 w-12 text-green-400 mb-4" />
                  <CardTitle className="text-white text-xl">AI Agents Development</CardTitle>
                  <CardDescription className="text-gray-300">
                    Creating intelligent AI agents and automation solutions to streamline business processes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Custom AI Solutions</li>
                    <li>• Chatbot Development</li>
                    <li>• Process Automation</li>
                    <li>• Machine Learning Integration</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            {/* Personal Portfolio Development */}
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <Image className="h-12 w-12 text-pink-400 mb-4" />
                  <CardTitle className="text-white text-xl">Personal Portfolio Development</CardTitle>
                  <CardDescription className="text-gray-300">
                    Crafting stunning personal portfolios that showcase your skills and achievements effectively.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Custom Portfolio Design</li>
                    <li>• Interactive Showcases</li>
                    <li>• Personal Branding</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            {/* Digital Strategy & Marketing */}
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <LayoutDashboard className="h-12 w-12 text-orange-400 mb-4" />
                  <CardTitle className="text-white text-xl">Digital Strategy & Marketing</CardTitle>
                  <CardDescription className="text-gray-300">
                    Developing data-driven digital marketing strategies to enhance your online presence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-400 space-y-2">
                    <li>• SEO & SEM</li>
                    <li>• Content Marketing</li>
                    <li>• Social Media Management</li>
                    <li>• Analytics & Reporting</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            {/* E-commerce Development */}
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <Settings className="h-12 w-12 text-cyan-400 mb-4" />
                  <CardTitle className="text-white text-xl">E-commerce Platform Development</CardTitle>
                  <CardDescription className="text-gray-300">
                    Building robust and scalable e-commerce solutions from custom platforms to store development.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Shopify Development</li>
                    <li>• WooCommerce Solutions</li>
                    <li>• Custom E-commerce Builds</li>
                    <li>• Payment Gateway Integration</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Talented Team</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We are a collective of passionate strategists, creative designers, and expert developers dedicated to delivering digital excellence and impactful solutions.
            </p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Team Member Cards */}
            {[
              {
                initials: "AK",
                name: "Arun Kumar",
                role: "Lead Developer",
                color: "from-blue-400 to-purple-400",
                desc: "Full-stack developer with 4+ years of experience in building scalable and innovative applications.",
                text: "text-blue-400"
              },
              {
                initials: "AP",
                name: "Anirudh Praveen",
                role: "UI/UX Designer",
                color: "from-purple-400 to-pink-400",
                desc: "Creative designer passionate about crafting beautiful, intuitive, and user-centered digital experiences.",
                text: "text-purple-400"
              },
              {
                initials: "AS",
                name: "Afroj Satwilkar",
                role: "Senior Backend Developer",
                color: "from-green-400 to-blue-400",
                desc: "Experienced backend developer specializing in Laravel, building robust and efficient server-side solutions.",
                text: "text-green-400"
              },
              {
                initials: "AK",
                name: "Ashish Kumar",
                role: "SEO & Marketing Lead",
                color: "from-orange-400 to-red-400",
                desc: "Strategic marketer with a knack for storytelling and driving brand growth in the digital landscape.",
                text: "text-orange-400"
              },
              {
                initials: "RK",
                name: "Rahul Kambale",
                role: "Senior QA",
                color: "from-cyan-400 to-blue-400",
                desc: "Meticulous QA Lead dedicated to ensuring software quality, performance, and exceptional user experiences.",
                text: "text-cyan-400"
              }
            ].map((member, i) => (
              <motion.div key={member.name} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.color} mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                      {member.initials}
                    </div>
                    <CardTitle className="text-white">{member.name}</CardTitle>
                    <CardDescription className={member.text}>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300">{member.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400">5+</div>
              <div className="text-gray-300">Dedicated Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">10+</div>
              <div className="text-gray-300">Years of Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400">100%</div>
              <div className="text-gray-300">Focus on Innovation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400">Core</div>
              <div className="text-gray-300">Client-Centric Approach</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Partnerships & Collaborations</h2>
            <p className="text-gray-300 text-lg">Building strong relationships to achieve mutual success and drive innovation.</p>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Card className="bg-white/5 border-white/10 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Tura Municipal Board</h3>
                  <p className="text-blue-400">Meghalaya Government</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <blockquote className="text-gray-300 italic text-lg mb-4">
                    "Their dedication and innovative approach greatly benefited our community initiatives. A highly recommended partner for digital transformation."
                  </blockquote>
                  <div className="text-right">
                    <div className="text-white font-semibold">A. Momin</div>
                    <div className="text-gray-400">Chairperson, Tura Municipal Board</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Have a project in mind or just want to say hello? We'd love to hear from you. Send us a message, and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">whalecore.innovation@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Monitor className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">+91 8882726711</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-6">
                    <a href="https://youtube.com/@whalecoreinnovations" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-colors">
                      <Youtube className="h-6 w-6" />
                    </a>
                    {/* Add more social links as needed */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
