/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: thesidekick (https://sketchfab.com/thesidekick)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/banana-dda3a1f707a94c52bed79578e120937c
title: Banana
*/

import { createRoot } from 'react-dom/client'
import { Suspense, useState } from 'react'
import './styles.css'
import Overlay from './layout/Overlay'
import { FadeIn, LeftMiddle } from './layout/styles'

import Bananas from './Bananas'
// Comment the above and uncomment the following to import the WebGL BG lazily for faster loading times
// const Bananas = lazy(() => import('./Bananas'))

function App() {
  const [speed, set] = useState(1)
  return (
    <>
      <Suspense fallback={null}>
        <Bananas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />
      </LeftMiddle>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
