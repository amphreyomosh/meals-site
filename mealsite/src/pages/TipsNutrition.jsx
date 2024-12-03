import React, { useEffect } from "react";
import "./TipsNutrition.css"; // Ensure this CSS file contains styles for animation and layout

// Sample data for sections to keep the code organized and modular
const sections = [
  {
    title: "Hydration and Its Benefits",
    content: [
      "Staying properly hydrated is as important as eating balanced meals. Water plays a crucial role in digestion, nutrient absorption, and maintaining healthy skin.",
      "Aim to drink at least 8 glasses of water a day. Incorporate herbal teas and natural infusions to add variety. Avoid sugary drinks as they can lead to energy spikes and crashes.",
      "Ensure you're drinking water at the right times. Hydration is most effective when spread throughout the day rather than consumed all at once.",
    ],
    imgSrc:
      "https://media.istockphoto.com/id/2153941226/photo/avocado-and-coconut.webp?a=1&b=1&s=612x612&w=0&k=20&c=pzM4xdeayNylSuFQpXJuAcmrYAU64ymhCp6CP3Xl-XM=",
    imgAlt: "Hydration tips",
  },
  {
    title: "Mindful Eating Habits",
    content: [
      "Mindful eating focuses on savoring each bite, paying attention to how food makes you feel, and listening to your body's hunger and fullness cues.",
      "Eat slowly, chew thoroughly, and avoid distractions like screens during meals. This practice helps you enjoy your meals more and prevents overeating.",
      "Create a peaceful eating environment by setting the table, playing soft music, and removing digital distractions. This encourages deeper connection with your food.",
    ],
    imgSrc:
      "https://media.istockphoto.com/id/2186804312/photo/nutritious-morning-meal-preparation-on-contemporary-kitchen-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=FA4Qay6komdKNGi-OudPXq-AVvZhB8L8nXOPAgJvdac=",
    imgAlt: "Mindful eating",
  },
  {
    title: "High-Quality Protein Sources",
    content: [
      "Protein is essential for muscle repair and growth. High-quality protein sources include lean meats, fish, eggs, and plant-based options like beans, lentils, and quinoa.",
      "Incorporate a variety of protein sources to ensure a complete amino acid profile. Plant-based proteins are rich in fiber and antioxidants, adding more nutrients to your diet.",
      "Consider trying new protein-rich recipes such as lentil loaf, chickpea salads, or grilled tofu with marinated vegetables.",
    ],
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1726768984120-f476b15835f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SGlnaCUyMFF1YWxpdHklMjBQcm90ZWluJTIwU291cmNlc3xlbnwwfHwwfHx8MA%3D%3D",
    imgAlt: "Protein sources",
  },
  {
    title: "Meal Prep Tips for Busy Schedules",
    content: [
      "Meal prepping helps save time and supports healthy eating habits. Preparing meals in advance ensures you have nutritious choices available and avoids last-minute unhealthy takeout options.",
      "Opt for recipes that store well, such as soups, stews, and grilled proteins. Use airtight containers to separate ingredients and keep them fresh.",
      "Take advantage of bulk cooking by preparing large quantities and portioning them into smaller meals for the week. This will streamline your preparation process.",
    ],
    imgSrc:
      "https://media.istockphoto.com/id/1176199650/photo/nutrition-diet-plan.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rz98hHBDQeOXxZT4VTe2FsVhibAMVknY806vEmjqCwI=",
    imgAlt: "Meal prep tips",
  },
  {
    title: "Smart Snack Ideas",
    content: [
      "Snacking doesn't have to be unhealthy. Choose nutritious options such as fresh fruits, nuts, yogurt, or whole-grain crackers.",
      "Make snack packs ahead of time with ingredients like sliced apples, almonds, or homemade granola bars to satisfy your hunger between meals.",
      "Balance your snacks by including a combination of protein and fiber to stay full longer and prevent overindulgence.",
    ],
    imgSrc:
      "https://images.unsplash.com/photo-1569419915350-4618d98b08f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U21hcnQlMjBTbmFjayUyMElkZWFzfGVufDB8fDB8fHww",
    imgAlt: "Smart snack ideas",
  },
  {
    title: "Navigating Special Diets",
    content: [
      "Whether you are vegetarian, vegan, gluten-free, or following any other special diet, it’s crucial to understand which foods to include for a balanced nutritional intake.",
      "Research and plan recipes that cater to your dietary needs. Ensure your meals are diverse and include a variety of plant-based proteins, whole grains, and leafy greens.",
      "Consult with a nutritionist or dietitian to personalize your diet plan and make informed choices about supplementation if necessary.",
    ],
    imgSrc:
      "https://media.istockphoto.com/id/2165353754/photo/dried-fruits-at-a-street-market-pineapple-melon-mango-coconut-apricot-and-apple-delight-copy.webp?a=1&b=1&s=612x612&w=0&k=20&c=YMm2jFSbtGjaeMKhAsOjm85TtRXR6Gm5tKv2rBLI7bQ=",
    imgAlt: "Navigating special diets",
  },
];

const TipsNutrition = () => {
  useEffect(() => {
    // Adding scroll animations
    const sections = document.querySelectorAll(".nutrition-section");
    sections.forEach((section) => {
      window.addEventListener("scroll", () => {
        if (window.scrollY + window.innerHeight > section.offsetTop) {
          section.classList.add("fade-in");
        }
      });
    });
  }, []);

  return (
    <div className="tips-nutrition-container">
      <header className="tips-nutrition-header">
        <h1>Tips and Nutrition Guide</h1>
        <p>
          Learn essential tips for healthy eating, practical meal preparation,
          and maintaining a nutritious lifestyle, inspired by expert meal and
          nutrition literature.
        </p>
      </header>
      <div className="nutritionsec">
        <div className="nutrition-content">
          <h1>Meal Planning Essentials</h1>
          <p>
            Effective meal planning is the foundation of a balanced diet.
            Planning your meals ahead helps reduce food waste and ensures you
            consume all necessary nutrients. "Start by considering your dietary
            needs, whether you need more protein, complex carbs, or fiber.
            Schedule meals that include a variety of colorful fruits and
            vegetables to maximize your intake of vitamins and minerals.",
            "Utilize tools like meal prep apps or templates to plan out meals
            for the week. Organize ingredients by category to streamline your
            grocery shopping."
          </p>
        </div>
        <div>
          <img
            className="nutrition-image"
            src="https://media.istockphoto.com/id/980276548/photo/a-meal-plan-for-a-week-on-a-white-table-among-products-for-cooking-pastas-basil-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=fM1_b4Ww8FcvqUbKrlz1rcPwpD0nxPiDSNj5ZZsmpTc="
            alt="Meal prep essentials"
          />
        </div>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="nutrition-section">
          <div className="nutrition-content">
            <h2>{section.title}</h2>
            {section.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="nutrition-image">
            <img src={section.imgSrc} alt={section.imgAlt} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TipsNutrition;
