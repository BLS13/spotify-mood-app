import React, { useState } from 'react';

function MoodForm({ onSubmit }) {
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood.trim() !== '') {
      onSubmit(mood);
      setMood('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Enter your mood..."
        style={{ padding: '10px', width: '300px' }}
      />
      <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Generate Playlist</button>
    </form>
  );
}

export default MoodForm;

