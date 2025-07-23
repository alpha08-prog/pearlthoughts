'use client';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    router.push('/doctors');
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f7fafd 0%, #fff 100%)' }}>
      <div style={{ width: 420, background: '#fff', borderRadius: 20, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', padding: 48 }}>
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <span style={{ color: '#00B2E7', fontWeight: 600, fontSize: 18 }}>Hi there, Welcome to <b>Shedula</b></span>
          <h2 style={{ margin: '20px 0 10px 0', fontWeight: 800, color: '#222', fontSize: 32, letterSpacing: 1 }}>Login</h2>
        </div>
        <form ref={formRef} onSubmit={handleLogin}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontWeight: 600, fontSize: 15, color: '#222' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1.5px solid #e0e0e0', marginTop: 8, fontSize: 16, background: '#f7fafd', color: '#222', outline: 'none', fontWeight: 500 }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontWeight: 600, fontSize: 15, color: '#222' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{ width: '100%', padding: '14px 16px', borderRadius: 10, border: '1.5px solid #e0e0e0', marginTop: 8, fontSize: 16, background: '#f7fafd', color: '#222', outline: 'none', fontWeight: 500 }}
            />
          </div>
          {error && <div style={{ color: '#FF4B4B', marginBottom: 16, fontWeight: 600 }}>{error}</div>}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <label style={{ display: 'flex', alignItems: 'center', fontSize: 15, color: '#222' }}>
              <input type="checkbox" style={{ marginRight: 8 }} /> Remember Me
            </label>
            <a href="#" style={{ color: '#FF4B4B', fontSize: 15, textDecoration: 'none', fontWeight: 500 }}>Forgot Password?</a>
          </div>
          <button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #25C6F9 0%, #00B2E7 100%)', color: '#fff', border: 'none', borderRadius: 10, padding: '14px 0', fontWeight: 700, fontSize: 18, marginBottom: 20, boxShadow: '0 2px 8px rgba(0,178,231,0.10)' }}>
            Login
          </button>
        </form>
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
          <div style={{ flex: 1, height: 1, background: '#e0e0e0' }} />
          <span style={{ margin: '0 14px', color: '#888', fontSize: 15 }}>Or login with</span>
          <div style={{ flex: 1, height: 1, background: '#e0e0e0' }} />
        </div>
        <button style={{ width: '100%', background: '#f7fafd', color: '#222', border: '1.5px solid #e0e0e0', borderRadius: 10, padding: '12px 0', fontWeight: 600, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: 24, height: 24 }} />
          Continue with Google
        </button>
        <div style={{ textAlign: 'center', fontSize: 15, color: '#888', marginTop: 8 }}>
          Don’t have an account? <a href="#" style={{ color: '#25C6F9', fontWeight: 600 }}>Sign Up</a>
        </div>
      </div>
    </div>
  );
} 