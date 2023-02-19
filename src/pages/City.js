import city from "../images/city.jpg";
import "../App.css";

const City = () => {
  return (
    <div className="App">
      <h1>Count by City Visual</h1>

      <img src={city} height={900} width={1300} />
    </div>
  );
};

export default City;
