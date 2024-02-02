import { useEffect, useState } from 'react'
import './App.css'
import Images from './components/Images';

function App() {
  const [images, setimages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      const data = await res.json();
      setimages(data);
    };
    fetchImages();
  }, []);

  return (
    <>
      <div>
        <Images data={images} />
      </div>
    </>
  );
}

export default App
