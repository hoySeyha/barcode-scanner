/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "../../App.css";
import useScanDetection from "use-scan-detection";
import { useBarcode } from "@createnextapp/react-barcode";

function App() {
  const [barcode, setBarcode] = useState<any>("No Barcode Scanned");
  useScanDetection({
    onComplete: setBarcode,
    // minLength:3
  });
  const { inputRef } = useBarcode({
    value: "123456789",
    options: {
      displayValue: false,
    },
  });
  return (
    <div>
      <svg ref={inputRef} />
      <div>Scan BarCode: {barcode}</div>
    </div>
  );
}

export default App;
