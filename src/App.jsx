import "./App.css";
import Form from "./Form";
import Table from "./Table";
import { useState, useEffect } from "react";


function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {

        console.log('err');
      }
    };

    fetchItems();
  }, [reqType]);
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <Table items={items} />
    </div>
  );
}

export default App;
