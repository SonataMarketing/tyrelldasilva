"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setSubmitStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setMessage('');

    try {
      // In a real implementation, this would be an API call to your email service
      // For now, we'll simulate a successful submission
      console.log(`Subscription email: ${email}`);
      console.log('Sending confirmation to: info@tyrelldasilva.com, marketing@tyrelldasilva.com');

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setMessage('Thank you for joining the Orchestra! You will receive our first note soon.');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
      setMessage('Something went wrong. Please try again later.');
      console.error('Newsletter submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <div className="relative w-full max-w-[400px] h-[100px] mx-auto mb-4">
        {/* Custom Orchestra logo/text */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-oswald text-[#8B5CF6] tracking-wider">JOIN THE ORCHESTRA</h2>
            <div className="h-1 w-32 bg-[#8B5CF6] mx-auto mt-2"></div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4 font-oswald uppercase">Get in harmony with our latest updates</h3>
      <p className="text-gray-400 mb-8 max-w-md">Subscribe to our newsletter for expert insights on design, technology and sustainable architecture.</p>

      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-[#2a2a2a] border-0 h-12 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
          />
          <button
            type="submit"
            className="gary-button bg-[#8B5CF6] text-white font-bold py-3 px-6 rounded hover:bg-[#7C3AED] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'SENDING...' : 'SUBSCRIBE'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="mt-4 text-green-400 text-sm">{message}</div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 text-red-400 text-sm">{message}</div>
        )}

        <div className="mt-4 text-xs text-gray-500">
          By subscribing, you'll receive updates from Tyrell Dasilva.
          Emails will be sent to you as well as to our team at info@tyrelldasilva.com and marketing@tyrelldasilva.com for confirmation.
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
