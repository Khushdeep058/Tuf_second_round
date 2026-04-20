import React from 'react';
import './index.css';

const CompanyProfileInner = () => (
  <div className="inner-white-card" style={{ maxWidth: '300px', flexShrink: 0 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
      <div style={{ width: '48px', height: '48px', background: '#0f172a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px' }}>
        <img src="https://awsmp-logos.s3.amazonaws.com/seller-2p2p6u2lzgt6w/394b9b27e8e937681f1d06c8b8eef543.png" alt="Intercom Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div>
        <h3 style={{ fontSize: '1rem', margin: 0, fontWeight: '700' }}>Intercom</h3>
        <p style={{ fontSize: '0.8rem', margin: 0, color: '#94a3b8' }}>Joined 9 Feb 2023</p>
      </div>
    </div>
    <div className="activation-bars" style={{ gap: '16px' }}>
      {[
        { label: 'Total seats', value: 50, color: '#10b981' },
        { label: 'Active seats', value: 22, color: '#10b981' },
        { label: 'Active last 7 days', value: 'True', isText: true }
      ].map((item, i) => (
        <div key={i} className="bar-row" style={{ fontSize: '0.85rem', color: '#1e293b' }}>
          <span style={{ color: '#4ade80', fontSize: '1.1rem' }}>✦</span>
          <span style={{ flex: 1, fontWeight: '500' }}>{item.label}</span>
          <span style={{ fontWeight: '700' }}>{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const ActivationInner = () => (
  <div className="inner-white-card" style={{ flexShrink: 0 }}>
    <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748b', marginBottom: '8px' }}>Company activation</p>
    <h2 style={{ fontSize: '2.8rem', marginBottom: '24px', fontWeight: '800' }}>40%</h2>
    <div className="activation-bars" style={{ gap: '10px' }}>
      {[
        { label: 'Signed up', value: 100, color: '#818cf8' },
        { label: 'Setup', value: 80, color: '#818cf8' },
        { label: 'Aha moment', value: 60, color: '#fbbf24' },
        { label: 'Activated', value: 40, color: '#1e293b' },
        { label: 'Active', value: 80, color: '#818cf8' }
      ].map((item, i) => (
        <div key={i} className="bar-row" style={{ fontSize: '0.7rem' }}>
          <span style={{ width: '85px', color: '#64748b', fontWeight: '600' }}>{item.label}</span>
          <div className="bar-bg" style={{ height: '7px' }}>
            <div className="bar-fill" style={{ width: `${item.value}%`, background: item.color }}></div>
          </div>
          <span style={{ width: '35px', textAlign: 'right', fontWeight: '700', color: '#1e293b' }}>{item.value}%</span>
        </div>
      ))}
    </div>
  </div>
);

const ReportSnippetInner = () => (
  <div className="inner-white-card" style={{ padding: '32px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div style={{ background: '#6366f1', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' }}>June</div>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '600' }}>10:36 AM</span>
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <div style={{ width: '16px', height: '16px', background: '#34d399', borderRadius: '4px' }}></div>
        <div style={{ width: '16px', height: '16px', background: '#fbbf24', borderRadius: '4px' }}></div>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
      <span style={{ fontSize: '1.2rem' }}>🔔</span>
      <div>
        <p style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e293b' }}>Qualified signup</p>
        <p style={{ fontSize: '0.9rem', color: '#6366f1', fontWeight: '600' }}>Eoghan McCabe <span style={{ color: '#94a3b8', fontWeight: '400' }}>eoghan@intercom.io</span></p>
      </div>
    </div>
    <div className="report-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px 40px' }}>
      {[
        { label: 'Company name:', value: 'Intercom', label2: 'Location:', value2: 'Dublin, Ireland' },
        { label: 'Role:', value: 'CTO & Co-Founder', label2: 'Company website:', value2: 'intercom.io' },
        { label: 'Company size:', value: '800', label2: 'LinkedIn:', value2: 'View profile' },
        { label: 'Funding amount:', value: '33M', label2: 'Crunchbase:', value2: 'View company' }
      ].map((row, i) => (
        <React.Fragment key={i}>
          <div className="stat-item" style={{ border: 'none', padding: 0 }}>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '600', marginBottom: '4px' }}>{row.label}</p>
            <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b' }}>{row.value}</p>
          </div>
          <div className="stat-item" style={{ border: 'none', padding: 0 }}>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '600', marginBottom: '4px' }}>{row.label2}</p>
            <p style={{ fontSize: '0.85rem', fontWeight: '700', color: row.value2.includes('View') ? '#6366f1' : '#1e293b' }}>{row.value2}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const CRMInner = () => (
  <div className="inner-white-card" style={{ padding: '24px', marginTop: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
      <h4 style={{ margin: 0, fontSize: '1rem', color: '#1e293b', fontWeight: '700' }}>CRM</h4>
      <div style={{ display: 'flex', gap: '10px' }}>
         <img src="https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" alt="Salesforce" style={{ width: '24px', height: '24px' }} />
         <img src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" alt="Hubspot" style={{ width: '24px', height: '24px' }} />
      </div>
    </div>
    <div style={{ fontSize: '0.85rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontWeight: '700', marginBottom: '16px', textTransform: 'none' }}>
        <span>Company</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          👤 Active seats
        </span>
      </div>
      {[
        { name: 'Intercom', val: 22, change: '+3', logoPath: 'https://awsmp-logos.s3.amazonaws.com/seller-2p2p6u2lzgt6w/394b9b27e8e937681f1d06c8b8eef543.png' },
        { name: 'Amie', val: 20, change: '-2', icon: '🅰️' }
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: i === 0 ? '1px solid #f1f5f9' : 'none', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             {item.logoPath ? (
               <img src={item.logoPath} alt="" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
             ) : (
               <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
             )}
            <span style={{ fontWeight: '700', color: '#1e293b' }}>{item.name}</span>
          </div>
          <span style={{ fontWeight: '700', color: '#1e293b' }}>{item.val} <span style={{ color: item.change.includes('+') ? '#10b981' : '#f43f5e' }}>({item.change})</span></span>
        </div>
      ))}
    </div>
  </div>
);

const FloatingBadge = ({ label, value, top, left }) => (
  <div style={{ position: 'absolute', top, left, display: 'flex', alignItems: 'center', gap: '12px', zIndex: 10 }}>
    <div style={{ width: '60px', height: '1.5px', background: '#bdf1d5' }}></div>
    <div style={{ padding: '8px 16px', background: 'white', borderRadius: '24px', boxShadow: '0 8px 16px rgba(0,0,0,0.06)', display: 'flex', gap: '10px', fontSize: '0.85rem', fontWeight: '700', border: '1px solid #f1f5f9' }}>
       <span style={{ color: '#10b981' }}>⚡</span>
       <span style={{ color: '#64748b' }}>{label}</span>
       <span style={{ color: '#10b981', background: '#dcfce7', padding: '2px 10px', borderRadius: '8px' }}>{value}</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* 1. Header Card (Blue) */}
      <div className="main-card card-blue hero-section">
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: 1.1 }}>
            <h1 style={{ fontSize: '3.2rem', maxWidth: '550px', letterSpacing: '-0.02em' }}>
              We automatically generate reports for each of your customers
            </h1>
          </div>
          <div style={{ flex: 1, display: 'flex', gap: '24px', justifyContent: 'flex-end' }}>
            <CompanyProfileInner />
            <ActivationInner />
          </div>
        </div>
      </div>

      {/* 2. Milestones Card (Purple) - Tall card on the left */}
      <div className="main-card card-purple tall-card">
        <h2 style={{ fontSize: '2.5rem' }}>Celebrate milestones</h2>
        <p className="subtitle" style={{ fontSize: '1.25rem', maxWidth: '450px' }}>
          Instant alerts and weekly digests to keep your team aligned and celebrate wins
        </p>
        <div style={{ marginTop: '50px' }}>
          <ReportSnippetInner />
        </div>
      </div>

      {/* 3. Enrichment Card (Orange) - Top right */}
      <div className="main-card card-orange" style={{ position: 'relative' }}>
         <div style={{ position: 'absolute', right: '-20px', top: '100px', width: '100px', height: '100px', borderRadius: '50%', border: '6px solid white', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0,0,0,0.12)', zIndex: 10 }}>
          <img src="https://img.freepik.com/free-vector/city-map-navigation-concept_23-2148281149.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Map" />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', background: '#0f172a', borderRadius: '10px', border: '3px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <img src="https://awsmp-logos.s3.amazonaws.com/seller-2p2p6u2lzgt6w/394b9b27e8e937681f1d06c8b8eef543.png" style={{ width: '75%' }} alt="" />
          </div>
        </div>

        <h2 style={{ fontSize: '2.2rem' }}>Automatic enrichment</h2>
        <p className="subtitle">Automatically enrich your customers profiles and their users powered by GPT</p>
        <div style={{ marginTop: '32px' }}>
          <div className="inner-white-card">
            <div className="badge-ai" style={{ fontSize: '0.9rem' }}>✨ Enriched with AI</div>
            <div className="report-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
               {[
                 { label: 'Website', val: 'intercom.io', icon: '🌐' },
                 { label: 'Location', val: 'Dublin, Ireland', icon: '📍' },
                 { label: 'Employees', val: '800', icon: '👥' },
                 { label: 'Twitter', val: '@intercom', icon: '🐦' },
                 { label: 'Funding', val: '$241M', icon: '💰' },
                 { label: 'Qualified', val: 'true', icon: '✅', color: '#10b981' }
               ].map((item, i) => (
                  <div key={i} className="stat-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', border: 'none', padding: 0 }}>
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    <div>
                      <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: '700' }}>{item.label}</p>
                      <p style={{ fontSize: '0.8rem', fontWeight: '700', color: item.color || '#1e293b' }}>{item.val}</p>
                    </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. CRM Card (Green) - Bottom right */}
      <div className="main-card card-green" style={{ position: 'relative' }}>
        <h2 style={{ color: '#166534', fontSize: '2.2rem' }}>Integrated with your CRM</h2>
        <p className="subtitle" style={{ color: '#166534', opacity: 0.8 }}>Connect June to your CRM and sync product usage data with your CS and sales teams</p>
        <div style={{ marginLeft: '40px' }}>
           <CRMInner />
        </div>
      </div>

      {/* Floating Handwritten Annotation & Badges */}
      <FloatingBadge label="Last seen" value="today" top="980px" left="58%" />
      <FloatingBadge label="Activated" value="true" top="1160px" left="80%" />

      <div style={{ position: 'absolute', top: '1080px', left: '100px', zIndex: 20 }}>
        <p className="text-handwriting" style={{ margin: 0, fontSize: '2.4rem' }}>Also done for you</p>
        <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C20 40 40 70 80 70C120 70 140 40 140 30C140 20 130 10 110 30C100 40 110 60 140 70" stroke="#334155" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
          <path d="M125 75L140 70L135 55" stroke="#334155" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default Dashboard;
