import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function EventPage({event}) {
    const [faqOpen, setFaqOpen] = useState(null);
  const faqs = [
    { question: "Who can participate?", answer: "Anyone interested in programming and development." },
    { question: "Is it a team or solo event?", answer: "You can participate individually or in a team of up to 3 members." },
    { question: "What are the prizes?", answer: "Top winners will receive cash prizes, swags, and job opportunities!" },
  ];
  return (
    <div>
        <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-5xl font-bold">{event.eventName}</h1>
        <p className="text-lg mt-2">🚀 Join this Event and Grow your Skills</p>
        <p className="mt-4 text-xl">📅 {event.registrationStart} | 📍 {event.placeName}</p>
        <Link to='/registerEvent'><button className="mt-6 px-6 py-2 text-lg bg-yellow-400 text-black rounded-xl">Register Now</button></Link>
      </div>
      
      {/* About Section */}
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">About the Event</h2>
        <p className="text-gray-300">{event.aboutEvent}</p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">📆 Event Schedule</h2>
        <ul className="text-gray-300">
          <li>✅ Registration Deadline: {event.registrationDeadline}</li>
          <li>✅ Hackathons Start: {event.hackathonsStart}</li>
          <li>✅ Final Presentation & Awards: {event.finalResult}</li>
        </ul>
      </div>

      {/* Prizes */}
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">🏆 Prizes & Perks</h2>
        <ul className="text-gray-300">
          <li>🥇 1st Place: ${event.price1}</li>
          <li>🥈 2nd Place: ${event.price2}</li>
          <li>🥉 3rd Place: ${event.price3}</li>
          <li>🎁 Free Swags & Job Opportunities</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">❓ Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="mb-4 p-4 border rounded-lg cursor-pointer" 
            onClick={() => setFaqOpen(faqOpen === index ? null : index)}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            {faqOpen === index && <p className="text-gray-400 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-800 mt-10">
        <p>📩 Contact us: ashikkhan314167@gmail.com</p>
        <p>📱 Follow us on social media for updates</p>
      </footer>
    </div>
    </div>
  )
}
