import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const PropertyContext = createContext();

export default function PropertyProvider({ children }) {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [change, setChange] = useState(true);

  // Fetch properties
  const fetchProperties = () => {
    fetch("/properties", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((response) => {
        setProperties(response);
      })
      .catch((error) => {
        console.log("Error fetching properties:", error);
      });
  };

  useEffect(() => {
    fetchProperties();
  }, [change]);

  // Add property
  const addProperty = (propertyData) => {
    fetch("/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(propertyData),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          Swal.fire("Success", response.success, "success");
          setChange(!change);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      })
      .catch((error) => {
        console.log("Error adding property:", error);
      });
  };

  // Delete property
  const deleteProperty = (propertyId) => {
    fetch(`/properties/${propertyId}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          Swal.fire("Success", response.success, "success");
          setChange(!change);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      })
      .catch((error) => {
        console.log("Error deleting property:", error);
      });
  };

  const contextData = {
    properties,
    addProperty,
    deleteProperty,
  };

  return (
    <>
      <PropertyContext.Provider value={contextData}>
        {children}
      </PropertyContext.Provider>
    </>
  );
}
