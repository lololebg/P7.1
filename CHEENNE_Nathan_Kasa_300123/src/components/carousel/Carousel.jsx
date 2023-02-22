import './carousel.scss'
// fleche de défilement
import ArrowRight from '../../assets/right.png'
import ArrowLeft from '../../assets/left.png'

// Utilisation de useState pour gérer l'etat du coomposant
import { useState } from 'react'

export default function Défilement({imageSlider}) {
// Le hook de useState est utilié pour initaliser la varibale Index a 0
  const [Index, Set] = useState(0)
// Est appele quand on clik sur la fleche d 
  const Click = () => {
// Incrémente l'index de l'image à afficher
      Set(Index + 1)
 // Si l'index atteint la dernière image, on retourne à la première
      if(Index === imageSlider.length - 1)
          Set(0)
  }
// Est appele qunand on clicksur la fleche de g
  const On = () => {
      Set(Index - 1)
      if(Index === 0)
          Set(imageSlider.length - 1)
  }

return (
  <section style={{backgroundImage : `url(${imageSlider[Index]})`}} className='carousel'>
    {imageSlider.length > 1 && 
     <>
     <img 
     className='carousel_arrow carousel_arrow_right' 
      src={ArrowRight} 
      alt="Defilement" 
      onClick={Click}
  />
   <img 
      className='carousel_arrow carousel_arrow_left' 
      src={ArrowLeft} 
      alt="Defilement" 
      onClick={On}
   />
<p className='Defilementts'>{Index + 1} / {imageSlider.length}</p>
</>
} 
</section>
  )
}


