import { useEffect, useState } from 'react';
import { IPlanetEntity } from '../types/planet.type';
import PlanetCard from '../components/PlanetCard';
import { fetchOne } from '../services/apiService';
import { useParams } from 'react-router-dom';

function PlanetDetails() {
    const [planet, setPlanet] = useState<IPlanetEntity | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const setData = async () => {
          try {
            if (id) {
                const result = await fetchOne(id);
                setPlanet(result);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        setData();
      }, [id]);

    return (
        <div className='h-screen flex justify-center items-center'>
          {
              planet && (
                  <PlanetCard planet={planet}/>
              )
          }
        </div>
    )
}

export default PlanetDetails;