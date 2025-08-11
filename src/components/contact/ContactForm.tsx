"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

const referralSources = [
  { id: 'in-person', label: 'In Person' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'email-campaign', label: 'Email Campaign' },
  { id: 'other', label: 'Other' }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    referralSource: '',
    otherReferral: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description';
    }

    if (!formData.referralSource) {
      newErrors.referralSource = 'Please select how you heard about us';
    }

    if (formData.referralSource === 'other' && !formData.otherReferral.trim()) {
      newErrors.otherReferral = 'Please specify how you heard about us';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Web3Forms - no backend needed!
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Using Web3Forms access key from environment variable
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
          
          // Form data
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.description,
          referral_source: formData.referralSource === 'other' 
            ? `Other - ${formData.otherReferral}` 
            : formData.referralSource,
          
          // Optional: Customize the email subject
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          
          // Optional: Where to receive emails (if not set in Web3Forms dashboard)
          // to_email: 'chris@sonatadesign.ca',
          
          // Success redirect (optional)
          redirect: 'https://web3forms.com/success',
          
          // Additional settings
          from_name: 'Tyrell Da Silva Website',
          replyto: formData.email,
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // console.log('✅ Form submitted successfully');
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          description: '',
          referralSource: '',
          otherReferral: '',
        });
      } else {
        console.error('❌ Form submission failed:', data);
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 font-oswald uppercase text-white">Send a Message</h2>

      {submitStatus === 'success' ? (
        <div className="bg-green-900/30 border border-green-800 p-4 rounded-lg text-green-400 mb-4">
          <h3 className="font-bold text-lg mb-2">Thank you for reaching out!</h3>
          <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                First Name <span className="text-[#8B5CF6]">*</span>
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className={`bg-[#232323] border-0 h-12 text-white w-full ${errors.firstName ? 'ring-1 ring-red-500' : ''}`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                Last Name <span className="text-[#8B5CF6]">*</span>
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className={`bg-[#232323] border-0 h-12 text-white w-full ${errors.lastName ? 'ring-1 ring-red-500' : ''}`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email <span className="text-[#8B5CF6]">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-[#232323] border-0 h-12 text-white w-full ${errors.email ? 'ring-1 ring-red-500' : ''}`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone <span className="text-[#8B5CF6]">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={`bg-[#232323] border-0 h-12 text-white w-full ${errors.phone ? 'ring-1 ring-red-500' : ''}`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Referral Source */}
          <div>
            <label htmlFor="referralSource" className="block text-sm font-medium text-gray-300 mb-1">
              How did you hear about us? <span className="text-[#8B5CF6]">*</span>
            </label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              className={`w-full bg-[#232323] border-0 h-12 text-white rounded-md px-3 ${errors.referralSource ? 'ring-1 ring-red-500' : ''}`}
            >
              <option value="">Please select</option>
              {referralSources.map(source => (
                <option key={source.id} value={source.id}>
                  {source.label}
                </option>
              ))}
            </select>
            {errors.referralSource && (
              <p className="mt-1 text-sm text-red-500">{errors.referralSource}</p>
            )}
          </div>

          {/* Other Referral Source (conditional) */}
          {formData.referralSource === 'other' && (
            <div>
              <label htmlFor="otherReferral" className="block text-sm font-medium text-gray-300 mb-1">
                Please specify <span className="text-[#8B5CF6]">*</span>
              </label>
              <Input
                id="otherReferral"
                name="otherReferral"
                type="text"
                value={formData.otherReferral}
                onChange={handleChange}
                className={`bg-[#232323] border-0 h-12 text-white w-full ${errors.otherReferral ? 'ring-1 ring-red-500' : ''}`}
              />
              {errors.otherReferral && (
                <p className="mt-1 text-sm text-red-500">{errors.otherReferral}</p>
              )}
            </div>
          )}

          {/* Project Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
              Tell us about your project <span className="text-[#8B5CF6]">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className={`w-full bg-[#232323] border-0 rounded-md p-3 text-white ${errors.description ? 'ring-1 ring-red-500' : ''}`}
              placeholder="Share some details about your project or how I can help you..."
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          {submitStatus === 'error' && (
            <div className="bg-red-900/30 border border-red-800 p-4 rounded-lg text-red-400">
              <p>Sorry, there was a problem sending your message. Please try again.</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#8B5CF6] text-white font-bold py-3 px-6 rounded hover:bg-[#7C3AED] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
