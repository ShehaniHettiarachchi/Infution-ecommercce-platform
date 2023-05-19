import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeliveryHeader from "./DeliveryHeader";
import "../App.css";

export const DeliveryHome = () => {
  const [q, setQ] = useState("");
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    function getOrders() {
      axios
        .get("http://localhost:5000/order/")
        .then((res) => {
          setOrders(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getOrders();
  }, []);

  const getData = useCallback(() => {
    axios.get("http://localhost:5000/delivery/view").then(({ data }) => {
      if (data && data.length) {
        setData(data);
      }
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delivery/delete/${id}`).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <DeliveryHeader />
      <br />

      <div>
        <br />

        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <br />
        <br />
        <div className="info">
          <table className="table">
            <thead>
              <tr>
                <th>OrderId</th>
                <th>CustomerName</th>
                <th>Address</th>
                <th>driverName</th>
                <th>VehicleNumber</th>
                <th>NIC</th>
                <th>contactNumber</th>
                <th>deliveryStatus</th>
                <th>date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data
                .filter((delivery) => {
                  if (q == "") {
                    return delivery;
                  } else if (
                    delivery.nic.toLowerCase().includes(q.toLowerCase())
                  ) {
                    return delivery;
                  }
                })

                .map((item) => (
                  <tr key={item._id}>
                    <td>{item.deliverID}</td>
                    <td>{item.cusName}</td>
                    <td>{item.address}</td>
                    <td>{item.driverName}</td>
                    <td>{item.vehicleNumber}</td>
                    <td>{item.nic}</td>
                    <td>{item.contactNumber}</td>
                    <td>{item.deliveryStatus}</td>
                    <td>{item.date}</td>
                    <td>
                      <button
                        className="button"
                        onClick={() => {
                          navigate(`/edit-delivery/${item._id}`, {
                            state: { ...item },
                          });
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="button"
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
