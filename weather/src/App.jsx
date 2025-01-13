import './App.css'
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WeatherInfo from './components/WeatherInfo';
import SearchBar from './components/SearchBar';





function App() {
  const [weatherData, setWeatherData] = useState(null)


   useEffect( async () => {
    const api = ''
    const apiKey = '7e4511cab7321489f058d1226e2f414c'
    let info = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=tbilisi&units=metric&appid=${apiKey}`
    );
    let data = await info.json();
    setWeatherData(data);
    // console.log(weatherData)
  }, [])
  
console.log(weatherData)

  return (
    <>
    <div className='flex  justify-center'>
      <SearchBar/>
    </div>

    <div className='flex justify-center'>
      <WeatherInfo/>
    </div>
    
      
      
      

    </>
  )
}

export default App





{/* <Canvas camera={{ position: [0, 200, 300], fov: 75 }} style={{ width: '100vw', height: '100vh' }}>

      <ambientLight intensity={3} />
      <directionalLight position={[1, 0.75, 0.5]} intensity={3} />


      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[500, 300]} />
        <meshBasicMaterial color="#443c3c" side={2} />
      </mesh>


        <OrbitControls enablePan={false} enableZoom maxPolarAngle={Math.PI / 6} minPolarAngle={Math.PI / 3} />
</Canvas> */}