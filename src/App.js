import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/store";
import { ProductsList, Header } from "./components";
import { useEffect } from "react";
import { updateUser } from "./redux/cart";
import { useRef } from "react";
import axios from "axios";
function App() {
  const dispatch = useDispatch();

  const counterRef = useRef(1);
  const { userDetail } = useSelector((state) => state.cart);

  const fetchUser = async (id) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    dispatch(updateUser(res.data));
    console.log(res.data);
  };
  useEffect(() => {
    fetchUser(counterRef.current);
  }, []);

  const loadmoreUsers = () => {
    fetchUser(++counterRef.current);
  };
  console.log(userDetail);

  return (
    <>
      <Header />
      <ProductsList />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "40px",
        }}
      >
        <button
          style={{ padding: "10px", cursor: "pointer" }}
          onClick={loadmoreUsers}
        >
          Add more Users
        </button>
        <pre style={{ color: "white" }}>
          {JSON.stringify(userDetail, undefined, 4)}
        </pre>
      </div>
    </>
  );
}

export default App;
