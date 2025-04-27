import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="app">
      <h1>Tours</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            <h3>{tour.name}</h3>
            <p>{tour.info}</p>
            <p>Price: ${tour.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
