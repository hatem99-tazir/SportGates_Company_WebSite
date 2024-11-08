import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "../styles/products.css";
import logo from "../assets/logo.png";
import prod2 from "../assets/prod2.png";
import SelectOption from "./MUI/SelectOption";
import { useNavigate } from 'react-router-dom';

import {
  getAllProducts,
  getAllTags,
  getProductById,
  getReviewsById,
  incrNumberSales,
  saveOrder,
  saveReview,
} from "../Utils/Utils";

const array = new Array(12).fill(undefined); // Create an array with 12 undefined values

function Products() {
  //filters
  const [selectedBrand, setSelectedBrand] = useState(""); // Default no brand selected
  const [selectedTags, setSelectedTags] = useState([]); // Array of selected tags

  const [allTags, setAllTags] = useState([]);
  const [allBrands, setAllBrands] = useState([]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [allProducts, setAllProduct] = useState([]);

  const toggleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag)); // Deselect tag
    } else {
      setSelectedTags([...selectedTags, tag]); // Select tag
    }
  };

  // end filters

  useEffect(() => {
    getAllProducts().then((res) => {
      console.log(res);

      if (res) {
        var productList = [];
        var brands = ["All Brands"];
        for (let index = 0; index < res.length; index++) {
          const element = res[index];

          

          var pr = {
            id: element.id,
            imgSrc: element.imagesUrls,
            name: element.productName,
            price: element.price,
            brand: element.brandName,
            tags: element.tags,
            reviews: [
              { name: "hatem", rating: 5, comment: "Best product ever" },
            ],
            numberSelles: element.numberSelles,
          };

          productList.push(pr);

          if (!brands.includes(pr.brand)) {
            brands.push(pr.brand);
          }

          setAllProduct(productList);
          setAllBrands(brands);
          console.log(pr);
        }
      }
    });

    getAllTags().then((res) => {
      console.log(res);
      setAllTags(res);
    });

    

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 0.1, // When 10% of the card is visible, trigger the callback
    };

    // Scroll to the specific section after the component mounts
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const navigate = useNavigate();
  const handleViewProduct = (product) => {
    navigate(`/product-details/${product}`, { state: { product } });
  };
  

  return (
    <motion.div
      id="products-section"
      className="section home px-80 py-40 box-sizing  prodcut-container"
    >
      <div className="flex justify-space-between w-full my-40">
        <div className="w-20 relative  box-sizing ">
          <p className="bold">filters</p>
          <motion.div className="filters-container bold h-full top0 left0 my-20">
            <div className="filter-container">
              <p className="grey small-text ">Brand</p>
              <div className="filter-options">
                <SelectOption
                  options={allBrands}
                  onOptionSelect={setSelectedBrand}
                  labelBgColor={"#6363630d"}
                />
              </div>
            </div>

            <div className="filter-container">
              <p className="grey small-text my-10">Tags</p>
              <div className="filter-options grid-filter-options">
                {allTags.map((tag, index) => {
                  return (
                    <motion.div
                      className="filter tag "
                      initial={{ backgroundColor: "#9babb8", color: "#fff" }}
                      animate={
                        selectedTags.includes(tag)
                          ? { backgroundColor: "#ff6600", color: "white" }
                          : { backgroundColor: "#6363630d", color: "grey" }
                      }
                      onClick={() => toggleTagSelection(tag)}
                    >
                      <p>{tag}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="filter-container">
              <p className="grey small-text my-10">Price</p>
              <div className="filter-options">
                <input
                  type="text"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Max Price"
                  className="my-10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-75">
          <div className="flex align-items-center products justify-space-between box-sizing flex-wrap">
            {allProducts.map((item, index) => (
              <motion.div
                key={index}
                className="product-card bg-grey flex flex-column"
                initial={{ opacity: 0, top: "20px" }}
                animate={{
                  opacity: 1, // Fade in when in viewport
                  top: 0, // Scale up when in viewport
                  origin: "top",
                  transition: { delay: 0.02 * index },
                }}
                whileHover={{ scale: 1 }}
              >
                <div className="product-card-header flex align-items-center justify-flex-start">
                  <img src={logo} alt="logo" height="15" />
                </div>

                <motion.div
                  className="product-card-details flex flex-column align-items-center justify-center box-sizing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <img src={item.imgSrc[0]} alt="prod-2" height="200" />
                  <span className="small-">{item.name}</span>
                  <span className="small-text grey">{item.brand}</span>
                </motion.div>

                <div className="product-card-footer flex align-items-center justify-space-between mt-4">
                  <motion.div className="action-button bg-orange"
                    onClick={() => handleViewProduct(item)}
                  >
                    <p className="btn">View Product</p>
                  </motion.div>
                  <span className="bold grey">{item.price} DA</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Products;
