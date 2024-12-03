import React from "react";
import "./Recipe.css"; // Optional for styling

const Recipe = () => {
  return (
    <div className="recipe-container">
      <header className="recipe-header">
        <h1>Delicious Recipes to Try</h1>
        <p>
          Explore our handpicked recipes perfect for any occasion. From quick
          weekday meals to gourmet weekend dishes, we have something for
          everyone!
        </p>
      </header>

      <section className="recipe-content">
        <article className="recipe-item">
          <h2>Classic Spaghetti Bolognese</h2>
          <img
            src="https://media.istockphoto.com/id/1399179382/photo/traditional-italian-spaghetti-bolognese-on-a-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=PWv2ds5zqBpNp6PFZun8LvxScJ2KoMHoY0wNh7ujv9U="
            alt="Spaghetti Bolognese"
            className="recipe-image"
          />
          <p>
            A timeless Italian favorite, our classic spaghetti bolognese is rich
            with flavors from slow-cooked beef, tomatoes, and aromatic herbs.
            This dish is perfect for cozy family dinners or casual
            get-togethers. With a preparation time of 15 minutes and a cooking
            time of an hour, it serves four and guarantees satisfaction.
          </p>
        </article>

        <article className="recipe-item">
          <h2>Chicken Tikka Masala</h2>
          <img
            src="https://media.istockphoto.com/id/2043767125/photo/lemon-being-squeezed-over-shrimp-tandoori.webp?a=1&b=1&s=612x612&w=0&k=20&c=PY22LRPcA6rgfLXIA_2m7PoI_aYtHOB-FyM5DIXEtJQ="
            alt="Chicken Tikka Masala"
            className="recipe-image"
          />
          <p>
            Indulge in the rich, spiced flavors of this iconic dish. Tender
            marinated chicken is simmered in a creamy, tomato-based sauce that
            pairs perfectly with basmati rice or naan bread. Prepare this dish
            in 30 minutes, cook for just over an hour, and enjoy a hearty meal
            for four.
          </p>
        </article>

        <article className="recipe-item">
          <h2>Vegetarian Stir-Fry</h2>
          <img
            src="https://media.istockphoto.com/id/588595864/photo/steaming-mixed-vegetables-in-the-wok-asian-style-cooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=y9JSEqRA-KbVyi7g2V9k73ZT77TUHBSWwfcqHmLTLpc="
            alt="Vegetarian Stir-Fry"
            className="recipe-image"
          />
          <p>
            Loaded with fresh vegetables and tossed in a savory, homemade
            stir-fry sauce, this dish is both nutritious and visually stunning.
            It takes just 10 minutes to prepare and 15 minutes to cook, making
            it a quick and healthy choice for two.
          </p>
        </article>

        <article className="recipe-item">
          <h2>Homemade Pizza</h2>
          <img
            src="https://media.istockphoto.com/id/1279000076/photo/freshly-baked-pizza-with-arugula-tomato-red-onion-and-mozzarella.webp?a=1&b=1&s=612x612&w=0&k=20&c=-a6PONHF34-r55nU8ZkkWEft1PepKxzcsNQ15DoP-N0="
            alt="Homemade Pizza"
            className="recipe-image"
          />
          <p>
            Bring the pizzeria to your kitchen! This homemade pizza recipe
            allows you to create your favorite toppings, from pepperoni to
            vegetarian options, all on a perfect crispy crust. Prep in 20
            minutes, cook in 15 minutes, and enjoy a delightful meal for four.
          </p>
        </article>
      </section>

      <section className="scroll-tips">
        <h2 className="tips-header">Pro Cooking Tips</h2>
        <div className="tips-container">
          {/* Column 1 */}
          <div className="tips-item">
            <h3>🛒 Choose Fresh Ingredients</h3>
            <p>
              Using fresh, high-quality produce and proteins ensures vibrant
              flavors and better texture. Make sourcing the best ingredients a
              habit—choose seasonal fruits and vegetables and visit farmers'
              markets for unique finds. Peak-quality ingredients add depth and
              transform simple recipes into extraordinary meals. Investing in
              organic, locally-sourced items enhances flavors and supports
              sustainable cooking.
            </p>
          </div>

          {/* Column 2 */}
          <div className="tips-item">
            <h3>🔪 Master Your Knife Skills</h3>
            <p>
              Efficient knife skills save time and improve meal presentation and
              consistency. Mastering dicing, slicing, and julienning boosts
              preparation speed and quality. Proper knife handling, correct
              techniques, and a sharp blade make cooking more enjoyable.
              Practice with different ingredients to build confidence, ensure
              safety, and achieve even cooking with visually appealing results.
            </p>
          </div>

          {/* Column 3 */}
          <div className="tips-item">
            <h3>🌡️ Preheat Everything</h3>
            <p>
              Preheating ovens, pans, or grills is essential for even cooking,
              perfect sears, and flavor retention. This often-overlooked step
              ensures dishes cook evenly and stay moist, forming golden crusts
              on meat and helping baked goods rise with perfect texture.
            </p>
          </div>

          {/* Column 4 (Image and Paragraph) */}
          <div className="tips-item">
            <img
              src="https://images.unsplash.com/photo-1566045023227-137d73b2eee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNsaWNpbmclMjB2ZWdlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Cooking tip"
              className="tips-image"
            />
          </div>
        </div>
      </section>

      <section className="scroll-nutrition">
        <h2>Healthy Eating Guidelines</h2>
        <div className="nutrition-container">
          {/* Column 1 */}
          <div className="nutrition-item">
            <p>
              Eat well without sacrificing flavor. Balance your meals with
              proteins, healthy fats, and whole grains. Stay hydrated, practice
              portion control, and enjoy a variety of cuisines to keep your
              meals interesting and nutritious.
            </p>
          </div>

          {/* Column 2 */}
          <div className="nutrition-item">
            <p>
              Incorporate plenty of fruits and vegetables into your diet for
              essential vitamins and minerals. Remember that a balanced diet is
              key to maintaining energy levels and overall health. Avoid
              processed foods and added sugars, and try to cook meals at home to
              have control over what you consume. Enjoying food in moderation
              and listening to your body's hunger and fullness cues helps
              establish healthy eating habits that last a lifetime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipe;
