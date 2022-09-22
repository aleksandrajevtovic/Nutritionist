import React from "react";
import { BsArrowUpRight, BsClock } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { GiPressureCooker } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';

const SingleRecipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <>
      <section className="single-recipe">
        <figure className="main_image">
          <img
            src={details.image}
            alt="spaghetti with pesto sauce and cherry tomatoes."
          />
        </figure>
        <div className="main_description">
          <div className="main_description_wrapper">
            <h1>{details.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>

            <div className="main_description_facts">
              <div className="main_description_facts_item">
                <div className="icon">
                  <BsPeople />
                </div>
                <div className="text">
                  <h5>Servings</h5>
                  <p>{details.servings}</p>
                </div>
              </div>
              <div className="main_description_facts_item">
                <div className="icon">
                  <BsClock />
                </div>
                <div className="text">
                  <h5>Cook time</h5>
                  <p>{details.readyInMinutes} minutes</p>
                </div>
              </div>
              {/* <div class="main_description_facts_item">
                <div class="icon">
                  <GiPressureCooker />
                </div>
                <div class="text">
                  <h5>Prep time</h5>
                  <p>5 minutes</p>
                </div>
              </div> */}
            </div>
            
            <Link className="creative-hero__btn btn" to={"#recipe-details"}>
              <span className="btn__text">See the details</span>
              <span className="btn__icon">
                <BsArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="recipe-details" id="recipe-details">
        <div className="wrapp">
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {details.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
              {/* <li>40 g oatmeal</li>
              <li>200 ml of water</li>
              <li>150 g of quark</li>
              <li>
                + if you want for a sweet taste - you can always add a
                low-calorie sweetener
              </li>
              <li>100 g pineapple </li>
              <li>1 tablespoon coconut flour</li>
              <li>1 tablespoon coconut leaves</li>
              <li>20 g white chocolate</li> */}
            </ul>
          </div>
          <div className="process">
            <h3>Process</h3>
            <p
              className="mb-1"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleRecipe;
