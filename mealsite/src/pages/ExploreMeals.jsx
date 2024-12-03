import React from "react";
import "./ExploreMeals.css"; // Optional for styling

const ExploreMeals = () => {
  return (
    <div className="explore-meals-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Explore Meals and Discover New Flavors</h1>
        <p>
          Delve into a world of diverse dishes, learn cooking tips, and explore
          meal ideas that will tantalize your taste buds.
        </p>
      </header>

      {/* Meal Cards */}
      <section className="meals-cards">
        <div className="meal-card">
          <h2>Italian Pasta Masterpiece</h2>
          <img
            id="img-size"
            src="https://images.unsplash.com/photo-1529042355636-0f06afe127a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SXRhbGlhbiUyMFBhc3RhJTIwTWFzdGVycGllY2V8ZW58MHx8MHx8fDA%3D"
            alt="Italian Pasta"
          />
          <p>
            This classic dish combines the richness of tomato sauce with fresh
            basil and al dente pasta for an authentic Italian experience.
          </p>
          <br />
          <p>Perfect for family dinners or a special weekend meal.</p>
        </div>

        <div className="meal-card">
          <h2>Hearty Chicken Stew</h2>
          <img
            src="https://plus.unsplash.com/premium_photo-1723708871094-2c02cf5f5394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVhcnR5JTIwQ2hpY2tlbiUyMFN0ZXd8ZW58MHx8MHx8fDA%3D"
            alt="Chicken Stew"
          />
          <p>
            A comforting dish filled with tender chicken, vegetables, and
            aromatic herbs simmered to perfection.
          </p>
          <br />
          <p>Pair with crusty bread or rice for a complete, satisfying meal.</p>
        </div>

        <div className="meal-card">
          <h2>Vegetarian Stir-Fry</h2>
          <img
            src="https://media.istockphoto.com/id/588595864/photo/steaming-mixed-vegetables-in-the-wok-asian-style-cooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=y9JSEqRA-KbVyi7g2V9k73ZT77TUHBSWwfcqHmLTLpc="
            alt="Vegetarian Stir-Fry"
          />
          <p>
            Loaded with colorful vegetables and a tangy, savory sauce, this
            stir-fry is both healthy and full of flavor.
          </p>
          <br />
          <p>
            Customize with your choice of tofu, tempeh, or chickpeas for added
            protein.
          </p>
        </div>

        <div className="meal-card">
          <h2>Spicy Thai Curry</h2>
          <img
            src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BpY3klMjBUaGFpJTIwQ3Vycnl8ZW58MHx8MHx8fDA%3D"
            alt="Thai Curry"
          />
          <p>
            Experience the bold flavors of Thai cuisine with this spicy, creamy
            curry made with coconut milk and authentic spices.
          </p>
          <br />
          <p>Serve with jasmine rice for a truly Thai dining experience.</p>
        </div>

        <div className="meal-card">
          <h2>Classic Beef Burgers</h2>
          <img
            src="https://media.istockphoto.com/id/1045565238/photo/tasty-burger-on-a-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=VOAHX2stY0k7KTIoUa7w6PciepDkkM-CESeERbKD778="
            alt="Beef Burgers"
          />
          <p>
            These burgers are made from high-quality beef, grilled to perfection
            and topped with fresh lettuce, tomato, and a special sauce.
          </p>
          <br />
          <p>Great for weekend BBQs or a casual weeknight dinner.</p>
        </div>
      </section>

      {/* Additional Details Section */}
      <section className="details-section">
        <h2>Cooking Tips and Tricks</h2>
        <div className="detailsection">
          <div className="exploresec">
            <p>
              To elevate your cooking skills, start by mastering the basics.
              Knife skills, seasoning techniques, and understanding the timing
              of ingredients are crucial for a well-prepared dish.
            </p>
            <p>
              Don’t be afraid to experiment with flavors and adjust recipes
              according to your taste preferences. For example, adding a touch
              of citrus can brighten up any savory dish, while a sprinkle of
              chili flakes can add depth and warmth.
            </p>
            <p>
              Additionally, make sure to source fresh ingredients, as the
              quality of your food can make a significant difference in the
              final outcome. Invest in quality cookware and stay patient as you
              learn new recipes and cooking methods.
            </p>
            <p>Happy cooking and bon appétit!</p>
          </div>
          <div>
            <img id="sectionimg"
              src="https://images.unsplash.com/photo-1504387828636-abeb50778c0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreMeals;
