'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const doctors = [
  {
    id: 1,
    name: 'Dr. Prakash Das',
    specialty: 'Sr. Psychologist',
    available: true,
    time: '02:30 AM-07:00 PM',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    about: 'As Psychologist Dr das practices about 7+ years...',
  },
  {
    id: 2,
    name: 'Dr. Pankaj Kumar',
    specialty: 'Cardiologist - Dombivali',
    available: true,
    time: '09:30 AM-05:00 PM',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    about: '15+ years of experience in all aspects of cardiology...',
  },
  {
    id: 3,
    name: 'Dr. Anjali Sharma',
    specialty: 'Dermatologist',
    available: false,
    time: '11:00 AM-04:00 PM',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    about: 'Expert in skin care and cosmetic treatments with 10+ years experience.',
  },
  {
    id: 4,
    name: 'Dr. Ramesh Gupta',
    specialty: 'Orthopedic Surgeon',
    available: true,
    time: '08:00 AM-01:00 PM',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
    about: 'Specialist in bone and joint care, 12+ years of experience.',
  },
  {
    id: 5,
    name: 'Dr. Priya Mehta',
    specialty: 'Pediatrician',
    available: true,
    time: '10:00 AM-03:00 PM',
    img: 'https://randomuser.me/api/portraits/women/46.jpg',
    about: 'Child specialist with 8+ years of experience in pediatrics.',
  },
  {
    id: 6,
    name: 'Dr. Suresh Iyer',
    specialty: 'ENT Specialist',
    available: false,
    time: '01:00 PM-06:00 PM',
    img: 'https://randomuser.me/api/portraits/men/35.jpg',
    about: 'Expert in ear, nose, and throat disorders, 9+ years experience.',
  },
  {
    id: 7,
    name: 'Dr. Neha Singh',
    specialty: 'Gynecologist',
    available: true,
    time: '09:00 AM-02:00 PM',
    img: 'https://randomuser.me/api/portraits/women/47.jpg',
    about: 'Women’s health specialist, 11+ years of experience.',
  },
  {
    id: 8,
    name: 'Dr. Amit Patel',
    specialty: 'General Physician',
    available: true,
    time: '07:00 AM-12:00 PM',
    img: 'https://randomuser.me/api/portraits/men/36.jpg',
    about: 'General medicine and preventive care, 13+ years experience.',
  },
];

export default function DoctorSelection() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const filteredDoctors = doctors.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ background: '#f7fafd', minHeight: '100vh', padding: 0 }}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: 32, background: '#fff', borderRadius: 20, boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya" style={{ width: 48, height: 48, borderRadius: '50%', marginRight: 16, border: '2px solid #25C6F9' }} />
          <div>
            <div style={{ fontWeight: 700, color: '#222', fontSize: 18 }}>Hello, Priya</div>
            <div style={{ color: '#25C6F9', fontSize: 14 }}>@ Dombivali Mumbai</div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search Doctors"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1px solid #e0e0e0', marginBottom: 24, fontSize: 16, background: '#f7fafd', color: '#222', outline: 'none' }}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {filteredDoctors.map(doc => (
            <div
              key={doc.id}
              style={{ display: 'flex', alignItems: 'center', padding: 20, borderRadius: 14, background: '#f7fafd', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', cursor: 'pointer', border: doc.available ? '2px solid #25C6F9' : '2px solid #e0e0e0', opacity: doc.available ? 1 : 0.7, transition: 'box-shadow 0.2s', position: 'relative' }}
              onClick={() => doc.available && router.push(`/time?doctorId=${doc.id}`)}
            >
              <img src={doc.img} alt={doc.name} style={{ width: 70, height: 70, borderRadius: 16, marginRight: 20, border: '2px solid #25C6F9' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: '#222', fontSize: 17 }}>{doc.name}</div>
                <div style={{ color: '#25C6F9', fontWeight: 500, fontSize: 15 }}>{doc.specialty}</div>
                <div style={{ color: doc.available ? '#4CAF50' : '#FF4B4B', fontSize: 14, fontWeight: 600, margin: '4px 0' }}>{doc.available ? 'Available today' : 'Not available'}</div>
                <div style={{ color: '#888', fontSize: 13 }}>{doc.about}</div>
                <div style={{ color: '#222', fontSize: 13, marginTop: 4 }}>{doc.time}</div>
              </div>
              <span style={{ color: '#bbb', fontSize: 22, marginLeft: 8, position: 'absolute', top: 16, right: 16 }}>&#9825;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 