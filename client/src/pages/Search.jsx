import { BsSearch } from "react-icons/bs";
import "../styles/search.css";
import { useEffect, useState } from "react";

/*app.get("/search", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const searchResults = await Item.find({
      name: { $regex: searchTerm, $options: "i" }, // Case-insensitive regex search
    });

    res.json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?term=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <div className="search-wrapper">
        <button className="search-btn">
          <BsSearch />
        </button>
        <div className="form-group">
          <input
            type="text"
            className="form-contol"
            placeholder="Searching..."
          />
        </div>
      </div>
    </form>
  );
};*/
