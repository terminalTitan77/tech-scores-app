import { useState, useEffect } from 'react';

export default function TechScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('/api/scores')
      .then(res => res.json())
      .then(data => setScores(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Tech Team Scores</h1>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        margin: '20px 0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={{ padding: '12px' }}>ID</th>
            <th style={{ padding: '12px' }}>Name</th>
            <th style={{ padding: '12px' }}>ISMS Score</th>
            <th style={{ padding: '12px' }}>QMS Score</th>
            <th style={{ padding: '12px' }}>BCP Result</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(score => (
            <tr key={score.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px' }}>{score.id}</td>
              <td style={{ padding: '12px' }}>{score.tech_name}</td>
              <td style={{ padding: '12px' }}>{score.isms_score || '-'}</td>
              <td style={{ padding: '12px' }}>{score.qms_score || '-'}</td>
              <td style={{ padding: '12px' }}>{score.bcp_result || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
