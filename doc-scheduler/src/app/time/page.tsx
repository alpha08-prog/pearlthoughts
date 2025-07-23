'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const doctors = [
  {
    id: 1,
    name: 'Dr. Prakash Das',
    specialty: 'Sr. Psychologist',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    about: 'As Psychologist Dr das practices about 7+ years...',
    patients: 5000,
    experience: 10,
    rating: 4.8,
    reviews: 4942,
    service: 'Medicare',
    specialization: 'Cardiology',
    availability: 'Monday to Friday',
    hours: '10 PM To 5 PM',
  },
  {
    id: 2,
    name: 'Dr. Pankaj Kumar',
    specialty: 'Cardiologist - Dombivali',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    about: '15+ years of experience in all aspects of cardiology...',
    patients: 5000,
    experience: 10,
    rating: 4.8,
    reviews: 4942,
    service: 'Medicare',
    specialization: 'Cardiology',
    availability: 'Monday to Friday',
    hours: '10 PM To 5 PM',
  },
  {
    id: 3,
    name: 'Dr. Anjali Sharma',
    specialty: 'Dermatologist',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    about: 'Expert in skin care and cosmetic treatments with 10+ years experience.',
    patients: 3000,
    experience: 10,
    rating: 4.7,
    reviews: 2100,
    service: 'SkinCare',
    specialization: 'Dermatology',
    availability: 'Tuesday to Saturday',
    hours: '11 AM To 4 PM',
  },
  {
    id: 4,
    name: 'Dr. Ramesh Gupta',
    specialty: 'Orthopedic Surgeon',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
    about: 'Specialist in bone and joint care, 12+ years of experience.',
    patients: 4000,
    experience: 12,
    rating: 4.6,
    reviews: 1800,
    service: 'OrthoCare',
    specialization: 'Orthopedics',
    availability: 'Monday, Wednesday, Friday',
    hours: '8 AM To 1 PM',
  },
  {
    id: 5,
    name: 'Dr. Priya Mehta',
    specialty: 'Pediatrician',
    img: 'https://randomuser.me/api/portraits/women/46.jpg',
    about: 'Child specialist with 8+ years of experience in pediatrics.',
    patients: 3500,
    experience: 8,
    rating: 4.9,
    reviews: 2500,
    service: 'ChildCare',
    specialization: 'Pediatrics',
    availability: 'Monday to Friday',
    hours: '10 AM To 3 PM',
  },
  {
    id: 6,
    name: 'Dr. Suresh Iyer',
    specialty: 'ENT Specialist',
    img: 'https://randomuser.me/api/portraits/men/35.jpg',
    about: 'Expert in ear, nose, and throat disorders, 9+ years experience.',
    patients: 2000,
    experience: 9,
    rating: 4.5,
    reviews: 1200,
    service: 'ENTCare',
    specialization: 'ENT',
    availability: 'Tuesday, Thursday',
    hours: '1 PM To 6 PM',
  },
  {
    id: 7,
    name: 'Dr. Neha Singh',
    specialty: 'Gynecologist',
    img: 'https://randomuser.me/api/portraits/women/47.jpg',
    about: 'Women’s health specialist, 11+ years of experience.',
    patients: 3200,
    experience: 11,
    rating: 4.8,
    reviews: 2100,
    service: 'WomenCare',
    specialization: 'Gynecology',
    availability: 'Monday to Saturday',
    hours: '9 AM To 2 PM',
  },
  {
    id: 8,
    name: 'Dr. Amit Patel',
    specialty: 'General Physician',
    img: 'https://randomuser.me/api/portraits/men/36.jpg',
    about: 'General medicine and preventive care, 13+ years experience.',
    patients: 4100,
    experience: 13,
    rating: 4.7,
    reviews: 3000,
    service: 'GeneralCare',
    specialization: 'General Medicine',
    availability: 'Monday to Friday',
    hours: '7 AM To 12 PM',
  },
];

const slots = [
  '09:30 AM - 09:45AM', '10:00 AM - 10:15AM', '10:30 AM - 10:45AM',
  '11:00 AM - 11:15AM', '11:30 AM - 11:45AM', '12:00 PM - 12:15PM',
  '12:30 PM - 12:45PM', '01:00 PM - 01:15PM',
];

export default function TimeSelection() {
  const router = useRouter();
  const params = useSearchParams();
  const doctorId = Number(params.get('doctorId'));
  const doctor = doctors.find(d => d.id === doctorId) || doctors[0];
  const [selectedSlot, setSelectedSlot] = useState('');

  return (
    <div style={{ background: '#f7fafd', minHeight: '100vh', padding: 0 }}>
      <div style={{ maxWidth: 500, margin: '32px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <img src={doctor.img} alt={doctor.name} style={{ width: 80, height: 80, borderRadius: 16, marginRight: 24 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#222' }}>{doctor.name}</div>
            <div style={{ color: '#25C6F9', fontWeight: 500 }}>{doctor.specialty}</div>
            <div style={{ color: '#888', fontSize: 14 }}>{doctor.about}</div>
            <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
              <span style={{ color: '#25C6F9', fontWeight: 600 }}>{doctor.patients}+ patients</span>
              <span style={{ color: '#25C6F9', fontWeight: 600 }}>{doctor.experience}+ years exper.</span>
              <span style={{ color: '#25C6F9', fontWeight: 600 }}>{doctor.rating} rating</span>
              <span style={{ color: '#25C6F9', fontWeight: 600 }}>{doctor.reviews} reviews</span>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 600, marginBottom: 4, color: '#222' }}>Service & Specialization</div>
          <div style={{ color: '#222', fontSize: 15 }}>{doctor.service} | {doctor.specialization}</div>
        </div>
        <div style={{ fontWeight: 600, marginBottom: 4, color: '#222' }}>Availability For Consulting</div>
        <div style={{ color: '#222', fontSize: 15 }}>{doctor.availability} | {doctor.hours}</div>
        <div style={{ fontWeight: 600, marginBottom: 8, color: '#222' }}>Select Slot</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
          {slots.map(slot => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              style={{
                padding: '10px 16px',
                borderRadius: 8,
                border: selectedSlot === slot ? '2px solid #25C6F9' : '1px solid #e0e0e0',
                background: selectedSlot === slot ? '#e6f7fb' : '#f7fafd',
                color: '#222',
                fontWeight: 500,
                cursor: 'pointer',
                minWidth: 120,
                boxShadow: selectedSlot === slot ? '0 2px 8px rgba(37,198,249,0.10)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              {slot}
            </button>
          ))}
        </div>
        <button
          style={{ width: '100%', background: 'linear-gradient(90deg, #25C6F9 0%, #00B2E7 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontWeight: 600, fontSize: 17, boxShadow: '0 2px 8px rgba(0,178,231,0.10)' }}
          disabled={!selectedSlot}
          onClick={() => router.push(`/booking?doctorId=${doctor.id}&slot=${encodeURIComponent(selectedSlot)}`)}
        >
          Book appointment
        </button>
      </div>
    </div>
  );
} 