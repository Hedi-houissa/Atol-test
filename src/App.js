/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Index from "./pages/dashboard/Index";
import Side_Bar from "./components/sidebar/Side_Bar";
import { useEffect, useState } from "react";
import Add_User from "./pages/user/farmer/Add/Add_User";
import List_user from "./pages/user/farmer/List/List_user";

function App() {
  const jwt_token = localStorage.getItem("token");

  useEffect(() => {
    console.log(jwt_token);
  }, [jwt_token]);

  const [page, setpage] = useState(0);
  const [items, setitems] = useState([
    {
      nom: "test",
    ville: "test",
    codepostal: "test",
    adresse: "test",
    siret: "test",
    cram: "test",
    etatsocial: "test",
    etatatol: "test",
    }
  ])

  const addItem =(item)=>{
    setitems([...items,item])
  }


  return (
    <div className="App">
      <Side_Bar page={setpage} />
     
      {page === 0 && <Index />}
      {page === 1 && <Add_User addItem={addItem} />}
      {page === 2 && <List_user items={items} />}
    </div>
  );
}

export default App;
