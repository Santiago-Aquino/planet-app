import { useEffect, useState } from 'react';
import { IPlanetEntity } from '../types/planet.type';
import PlanetCard from '../components/PlanetCard';
import { fetchData } from '../services/apiService';

function PlanetsList() {
  const [planets, setPlanets] = useState<IPlanetEntity[] | null>(null);

  useEffect(() => {
    const setData = async () => {
      try {
        const result = await fetchData();
        setPlanets(result.planets);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    setData();
  }, []);

  return (
    <div className='w-full h-screen gap-2 flex justify-center items-center'>
      {
        planets && planets.length > 0 && (
          planets.map((planet: IPlanetEntity) => {
            return (
                <PlanetCard key={planet.name} planet={planet}/>
            )
          })
        )
      }
    </div>
  );
};

export default PlanetsList;
