import React, {useState} from "react"
import { Form, Button, Card } from "react-bootstrap"
import { useHistory } from "react-router"
import { useAuth } from "../contexts/AuthContext"

const FormData = () => {

  const initialState = {
    name: "",
    brand: "",
    price: "",
    color: "",
    ram: "",
    rom: "",
  };

  const [data, setData] = useState(initialState);
  const { logout } = useAuth()
  const history = useHistory()
    

    async function handleLogout() {
        try {
          await logout()
          history.push("/login")
        } catch(e) {
            e.message("failed to log out");  
        }
      }

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (
        data.name &&
        data.brand &&
        data.price &&
        data.color &&
        data.ram &&
        data.rom
      ) {
        let mobileData = [];
        mobileData = JSON.parse(localStorage.getItem("mobileInfo")) || mobileData;
        mobileData.push(data);
        localStorage.setItem("mobileInfo", JSON.stringify(mobileData));
        alert("Your information is added!");
        console.log(mobileData);
        setData(initialState);
      } else {
        alert("Please submit form");
      }

      history.push("/home");
    };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Add Mobile Details</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Mobile Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={data.brand}
                onChange={(e) => setData({ ...data, brand: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                required
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
              </Form.Group>
              <Form.Group>
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                required
                value={data.color}
                onChange={(e) => setData({ ...data, color: e.target.value })}
              />
              </Form.Group>
              <Form.Group>
              <Form.Label>ROM</Form.Label>
              <Form.Control
                type="text"
                required
                value={data.rom}
                onChange={(e) => setData({ ...data, rom: e.target.value })}
              />
              </Form.Group>
              <Form.Group>
              <Form.Label>RAM</Form.Label>
              <Form.Control
                type="text"
                required
                value={data.ram}
                onChange={(e) => setData({ ...data, ram: e.target.value })}
              />
            </Form.Group>
            <Button  className="w-100" type="submit">
              Add information
            </Button>
            <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default FormData;
