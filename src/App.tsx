/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import './App.css'
import useScanDetection from 'use-scan-detection'

function App() {
const [barcode, setBarcode] = useState<any>("No Barcode Scanned")
useScanDetection({
  onComplete:setBarcode,
  // minLength:3
})
  return (
   <div>Scan BarCode: {barcode}</div>
  )
}

export default App
