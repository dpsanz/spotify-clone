import { waveform } from 'ldrs';
import { useEffect, useState } from "react";
import Card from "../components/Card";
import SliderCards from "../components/SliderCards";

export default function ConteudoPrincipal() {

  waveform.register();

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('https://spotify-clone-api-roan.vercel.app/artistas')
          .then(res => res.json())
          .then(data => { setArtistas(data), console.log(data) })
          .catch(err => console.log(err))
          .finally(() => setIsLoading(false))
      }, 3000)
  }, [])

  return (
    <div className="bg-gray-900 rounded-lg w-8/12 grid grid-cols-1 justify-items-start pl-7 pt-7">
      {isLoading ?
        <div className="flex flex-col flex-wrap justify-center items-center w-full font-bold gap-4">
          <p>Carregando...</p>
          <l-waveform
            size="55"
            stroke="3.5"
            speed="1"
            color="white"
          ></l-waveform>
        </div>
        :
        <>
          <SliderCards titulo="Rock">
            {artistas
              .filter(genero => genero.genres.includes("Rock"))
              .sort((a, b) => a.name.localeCompare(b.name))
              .slice(0, 5)
              .map(artista => (
                <Card key={artista._id} {...artista} />
              ))}
            {artistas
              .filter(genero => genero.genres.includes("Rock Alternativo"))
              .sort((a, b) => a.name.localeCompare(b.name))
              .slice(0, 5)
              .map(artista => (
                <Card key={artista._id} {...artista} />
              ))}
          </SliderCards>
          <SliderCards titulo="Pop">
            {artistas
              .filter(genero => genero.genres.includes("Pop" || "Rap"))
              .sort((a, b) => a.name.localeCompare(b.name))
              .slice(0, 4)
              .map(artista => (
                <Card key={artista._id} {...artista} />
              ))}
          </SliderCards>
        </>
      }
    </div>
  )
}