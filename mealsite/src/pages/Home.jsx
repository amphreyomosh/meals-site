import React, { useEffect, useState } from "react";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  // State to manage the animation trigger for the "Why Choose Us" section
  const [isVisible, setIsVisible] = useState(false);

  // Effect to detect when the section is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".why-choose-us");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const recipes = [
    {
      image:
        "https://images.unsplash.com/photo-1600555379885-08a02224726d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYWxzfGVufDB8fDB8fHww",
    },

    {
      image:
        "https://images.unsplash.com/photo-1694886712950-4a5a06b64394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lYWxzfGVufDB8fDB8fHww",
    },
    {
      image:
        "https://media.istockphoto.com/id/2081769995/photo/holding-a-bowl-of-chicken-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yre-rIjuFTL4z2yyENSeYL2FaQRqcp9OrK9abyfzN0A=",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === recipes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [recipes.length]);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recipes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recipes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to Your <span id="Ultimate">Ultimate</span> Meal Guide
          </h1>
          <p>
            Are you ready to transform your meals into extraordinary
            experiences? We bring you a curated selection of recipes, expert
            nutrition tips, and meal exploration features that cater to every
            taste and dietary need. From hearty family dinners to quick
            weeknight meals, we've got something for everyone.
          </p>
          <button className="cta-button">Start Your Culinary Adventure</button>
        </div>
        <div className="hero-image">
          {/* Placeholder for an image */}
          <img
            src="https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHN8ZW58MHx8MHx8fDA%3D"
            alt="Delicious meal"
          />
        </div>
      </section>

      {/* Section: Why Choose Us */}
      <section className={`why-choose-us ${isVisible ? "fade-in" : ""}`}>
        <h2 className="choose">Why Choose Us?</h2>
        <div>
          <p className="experiencewithfood">
            Knowing that food is not just fuel; it's an experience. We are the
            perfect companion for your cooking journey.
          </p>
          <div className="sectiontwo">
            <img
              id="img"
              src="https://plus.unsplash.com/premium_photo-1663840344674-f80c2fedc219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVhbHN8ZW58MHx8MHx8fDA%3D"
              alt="Delicious meal"
            />
            <p>
              Our platform offers tailored recipes to suit various skill levels
              and tastes, from beginners to culinary experts. Explore global
              flavors with dishes inspired by international cuisines, while
              enjoying practical nutrition tips to create balanced and enjoyable
              meals. With easy-to-follow, step-by-step instructions, cooking
              becomes simple, fun, and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Featured Recipes */}
      <section className="featured-recipes">
        <h2>
          Featured <span id="recipes">Recipes</span> of the Week
        </h2>
        <div className="carousel">
          <button onClick={handlePrev} className="carousel-btn prev">
            &#8249;
          </button>
          <div className="carousel-item">
            <img
              src={recipes[currentIndex].image}
              alt={recipes[currentIndex].title}
              className="carousel-image"
            />
          </div>
          <button onClick={handleNext} className="carousel-btn next">
            &#8250;
          </button>
        </div>
      </section>

      {/* Section: Explore Meals */}
      <section className="explore-meals">
        <h2>Explore Meals from Around the World</h2>
        <div className="sectionexplore">
          <div className="firstcolumn">
            <p>
              Take a culinary journey and learn how to prepare traditional
              dishes from different cultures. Each meal comes with detailed
              preparation steps and cooking tips to help you achieve authentic
              flavors at home.
            </p>
          </div>
          <div className="secondcolumn">
            <p>
              Learn the art of making tacos that burst with flavor, topped with
              fresh ingredients and a touch of salsa and experience the warmth
              of homemade ramen, complete with rich broth, noodles, and a
              variety of toppings.
            </p>
          </div>
          <div className="thirdcolumn">
            <img
              src="https://images.unsplash.com/photo-1626497132810-f38eb29c5385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lYWxzfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Section: Tips & Nutrition */}

      <h2 className="tipsheader">Tips & Nutrition</h2>
      <div className="main-container">
        <div className="tips">
          <p>
            Great meals are not only about taste, they're also about nourishment.
            Our expert nutrition tips help you make the best choices for your
            health without sacrificing flavor.
          </p>
          <div>
            <p>
              Learn how to combine proteins, healthy fats, and carbohydrates for
              a well-rounded meal that’s both nutritious and delicious.
            </p>
            <p>
              Discover the secrets of preparing meals in advance for busy weeks,
              saving you time while maintaining quality and nutrition.
            </p>
            <p>
              Swap ingredients to make meals suitable for different dietary
              preferences, like gluten-free, vegan, or keto-friendly options.
            </p>
          </div>
        </div>

        <div className="content">
          <section className="benefits">
            <h2>Why You'll Love Our Recipes</h2>
            <p className="benefits-text">
              Meals are more than sustenance, they’re a celebration of
              creativity, connection, and well-being. Our recipes bring vibrancy
              to your kitchen, combining fresh ingredients, balanced nutrition,
              and bold flavors. Cooking becomes a joyful act of mindfulness,
              with dishes that energize your body and elevate your spirit.
              Whether you’re exploring diverse cuisines, hosting loved ones, or
              crafting a quick, nutritious meal, our guides make the process
              seamless and exciting. By choosing our recipes, you embrace a
              journey of delicious possibilities, where every bite nourishes not
              only your health but also your relationships and sense of
              accomplishment.
            </p>

            <section className="image-gallery">
              <div className="images">
                <div className="divimage">
                  {" "}
                  <img
                    id="imagesone"
                    src="https://plus.unsplash.com/premium_photo-1726138647192-5275bef08970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlc2glMjBpbmdyZWRpZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Fresh ingredients"
                  />
                  <img
                    id="imagestwo"
                    src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVsaWNpb3VzbHklMjBwbGF0ZWQlMjBtZWFsfGVufDB8fDB8fHww"
                    alt="Deliciously plated meal"
                  />
                </div>
                <img
                  id="imagesthree"
                  src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGZhbWlsaWVzJTIwZW5qb3lpbmclMjBhJTIwbWVhbCUyMHRvZ2V0aGVyfGVufDB8fDB8fHww"
                  alt="fresh meals"
                />
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
