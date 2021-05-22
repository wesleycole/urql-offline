import { useState } from "react";
import { useMutation } from "urql";
import { CreateStoreDocument, useGetAllStoresQuery } from "./generated/graphql";

function App() {
  const [{ data }] = useGetAllStoresQuery();
  const [{ fetching }, createStore] = useMutation(CreateStoreDocument);
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Stores</h2>
      <ul>
        {data?.allStores?.data?.map((store: any, index: any) => (
          <li key={index}>{store?.name}</li>
        ))}
      </ul>
      <div>
        <input
          name="storeName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Store name"
        />
        <button
          type="button"
          onClick={() => {
            setName("");
            createStore({
              name,
              street: "1553 Silver Creek Drive",
              city: "Lynchburg",
              state: "VA",
              zipCode: "24503",
            });
          }}
        >
          {fetching ? "Adding..." : "Add store"}
        </button>
      </div>
    </div>
  );
}

export default App;
