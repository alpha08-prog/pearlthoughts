'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const doctors = [
  {
    id: 1,
    name: 'Dr. Prakash Das',
    specialty: 'Sr. Psychologist',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Dr. Pankaj Kumar',
    specialty: 'Cardiologist - Dombivali',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    id: 3,
    name: 'Dr. Anjali Sharma',
    specialty: 'Dermatologist',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 4,
    name: 'Dr. Ramesh Gupta',
    specialty: 'Orthopedic Surgeon',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    id: 5,
    name: 'Dr. Priya Mehta',
    specialty: 'Pediatrician',
    img: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
  {
    id: 6,
    name: 'Dr. Suresh Iyer',
    specialty: 'ENT Specialist',
    img: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    id: 7,
    name: 'Dr. Neha Singh',
    specialty: 'Gynecologist',
    img: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    id: 8,
    name: 'Dr. Amit Patel',
    specialty: 'General Physician',
    img: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

export default function BookingConfirmation() {
  const params = useSearchParams();
  const doctorId = Number(params.get('doctorId'));
  const slot = params.get('slot');
  const doctor = doctors.find(d => d.id === doctorId) || doctors[0];

  return (
    <div style={{ background: '#f7fafd', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 400, background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32, textAlign: 'center' }}>
        <div style={{ marginBottom: 24 }}>
          <img src={doctor.img} alt={doctor.name} style={{ width: 80, height: 80, borderRadius: 16, marginBottom: 16 }} />
          <div style={{ fontWeight: 700, fontSize: 20, color: '#222' }}>{doctor.name}</div>
          <div style={{ color: '#25C6F9', fontWeight: 500 }}>{doctor.specialty}</div>
        </div>
        <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12, color: '#222' }}>Appointment Confirmed!</div>
        <div style={{ color: '#222', fontSize: 16, marginBottom: 8 }}>Your slot:</div>
        <div style={{ color: '#25C6F9', fontWeight: 600, fontSize: 17, marginBottom: 24 }}>{slot}</div>
        <div style={{ color: '#888', fontSize: 15, marginBottom: 24 }}>Thank you for booking your appointment. You will receive a confirmation soon.</div>
        <a href="/doctors" style={{ color: '#25C6F9', fontWeight: 500, textDecoration: 'underline', fontSize: 15 }}>Book another appointment</a>
      </div>
    </div>
  );
} 