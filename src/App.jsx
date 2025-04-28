import { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  // State variables to manage tours, loading state, and error messages
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true while fetching data
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw an error if the response is not OK
      }
      const data = await response.json();
      setTours(data); // Update tours state with fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Set error message if fetching fails
    } finally {
      setLoading(false); // Set loading to false after fetching is complete
    }
  };

  // useEffect to fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Filter out the tour with the given ID
  };

  // Conditional rendering for loading, error, and empty state
  if (loading) {
    return <h2>Loading...</h2>; // Show loading message
  }

  if (error) {
    return <h2>Error: {error}</h2>; // Show error message
  }

  if (tours.length === 0) {
    // Show a message and refresh button when no tours are left
    return (
      <div className="app">
        <h2>No Tours Left</h2>
        <button className="refresh-btn" onClick={fetchTours}>
          Refresh
        </button>
        <footer className="footer">
          <p>Explore the world with our curated tours!</p>
        </footer>
      </div>
    );
  }

  // Render the Gallery component with tours and removeTour function
  return (
    <div className="app">
      <h1>Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
      <footer className="footer">
        <p>Explore the world with our curated tours!</p>
      </footer>
    </div>
  );
}

export default App;
