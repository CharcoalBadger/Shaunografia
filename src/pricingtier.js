import React from "react";
import "./pricingtier.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricingtier() {
  const services = [
    {
      name: "Creative Photoshoot",
      tiers: [
        { type: "Basic", price: 225 },
        { type: "Plus", price: 320 },
        { type: "Pro", price: 380 },
      ],
    },
    {
      name: "Events",
      tiers: [
        { type: "Basic", price: 400 },
        { type: "Plus", price: 800 },
        { type: "Pro", price: 1500 },
      ],
    },
    {
      name: "Pets",
      tiers: [
        { type: "Basic", price: 400 },
        { type: "Plus", price: 800 },
        { type: "Pro", price: 1500 },
      ],
    },
    {
      name: "Weddings",
      description: "Includes Elopements and Engagement Photoshoots",
      tiers: [
        { type: "Basic", price: 400 },
        { type: "Plus", price: 800 },
        { type: "Pro", price: 1500 },
      ],
    },
  ];

  return (
    <div className="pricing-page">
      <h1>Pricing</h1>
      <div className="pricing-table">
        {services.map((service, idx) => (
          <div key={idx} className="pricing-column">
            <h2>{service.name}</h2>
            {service.description && <p>{service.description}</p>}
            <ul>
              {service.tiers.map((tier, idx) => (
                <li key={idx}>
                  <h3>{tier.type}</h3>
                  <p>${tier.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
