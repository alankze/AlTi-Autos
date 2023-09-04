import React, { useState, useEffect, useMemo } from "react";
import Item from "../components/Item";
import { Container, Row, Col } from "reactstrap";
import axios from "../axiosInstance";
import CarItem from "../components/CarItem";
import { Link } from "react-router-dom";
const Cars = () => {
  const [cars, setCars] = useState(null); // cars array from backend
  // const [selectedBrand, setSelectedBrand] = useState();

  useEffect(() => {
    axios
      .get(`/api/cars`)
      .then((res) => setCars(res.data))
      .catch((e) => console.log(e));
  }, []);

  //Filterfunction

  /*  function getFilteredList() {
    if (!selectedBrand) {
      return cars;
    }
    return cars.filter((item) => item.category === selectedBrand);
  }

  var filteredList = useMemo(getFilteredList, [selectedBrand, cars]);

  function handleCategoryChange(event) {
    setSelectedBrand(event.target.value);
  }
*/
  return (
    <section>
      <Container>
        <Row>
          {cars &&
            cars.map((car) => (
              <>
                <CarItem item={car} key={car.id} />
                <li key={car._id}>
                  <Link to={`/cars/${car._id}`}>
                    {car.brand} {car.model}
                  </Link>
                </li>
              </>
              /*  <li key={car._id}>
              <Link to={`/cars/${car._id}`}>
                {car.brand} 
              </Link>
            </li>*/
            ))}
        </Row>
      </Container>
    </section>
  );
  /*   <div className="app">
        <div className="filter-container">
          <div>Filter by Brand:</div>
          <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="Audi">Audi</option>
              <option value="Mercedes">Mercedes</option>
              <option value="BMW">BMW</option>
            </select>
          </div>
        </div>
        <div className="brand-list">
          {filteredList.map((element, index) => (
            <Item {...element} key={index} />
          ))}
        </div>
          </div>*/
};

export default Cars;
