import { useState } from "react";
import LayoutHome from "./pages/home/layout/LayoutHome";


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      
      
       <LayoutHome/>
      
      </div>
     

  );
}

export default App
