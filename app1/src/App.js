import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import("app2/App"));

function App() {
  return (
    <div className="App">
     <button style={{
      margin: '10px',
      padding:"10px",
      textAlign:"center",
      backgroundColor:"greenyellow",
      border: "none"
     }}>First Button</button>
     <Suspense fallback={"loading..."}> 
      <RemoteApp/>
     </Suspense>
    </div>
  );
}

export default App;
