"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';
import Link from 'next/link';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';

const Footer = () => {
    const socialLinks = config.socialLinks || [];
    const navItems = config.NAV_ITEMS || [];

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-white/10 bg-black/50 backdrop-blur-sm"
        >
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">{config.developer.name}</h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                            {config.developer.title}. Creating digital experiences with focus on usability and modern design.
                        </p>
                        {/* Social Links */}
                        {socialLinks.length > 0 && (
                            <div className="flex gap-3 pt-2">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-sm text-white/60">Web Development</li>
                            <li className="text-sm text-white/60">UI/UX Design</li>
                            <li className="text-sm text-white/60">Graphic Design</li>
                            <li className="text-sm text-white/60">Software Development</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Get In Touch</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <HiMail className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                                <a 
                                    href={`mailto:${config.developer.email}`}
                                    className="text-sm text-white/60 hover:text-white transition-colors break-all"
                                >
                                    {config.developer.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <HiPhone className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                                <a 
                                    href={`tel:${config.developer.phone}`}
                                    className="text-sm text-white/60 hover:text-white transition-colors"
                                >
                                    {config.developer.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <HiLocationMarker className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-white/60">
                                    {config.developer.location}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-white/60 text-center md:text-left">
                            © {new Date().getFullYear()} {config.developer.name}. All rights reserved.
                        </div>
                        <div className="flex items-center gap-6 text-sm text-white/60">
                            <span>Made by {config.developer.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
