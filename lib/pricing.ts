import { Pricing, Vehicle } from '@/types';

export const vehicles: Vehicle[] = [
  {
    name: "Honda Activa 6G",
    type: "scooty",
    pricePerDay: 299,
    features: [
      "110cc Engine",
      "Fuel Efficient - 45+ kmpl",
      "Comfortable Seat",
      "Digital Speedometer",
      "USB Charging Port"
    ]
  },
  {
    name: "TVS Jupiter",
    type: "scooty",
    pricePerDay: 299,
    features: [
      "110cc Engine",
      "Excellent Mileage",
      "Spacious Storage",
      "Smooth Ride",
      "LED Headlamp"
    ]
  },
  {
    name: "Hero Pleasure Plus",
    type: "scooty",
    pricePerDay: 299,
    features: [
      "110cc Engine",
      "Lightweight",
      "Easy Handling",
      "Good for City Rides",
      "Fuel Efficient"
    ]
  },
  {
    name: "Royal Enfield Classic 350",
    type: "bike",
    pricePerDay: 799,
    features: [
      "350cc Engine",
      "Iconic Design",
      "Perfect for Long Rides",
      "Comfortable Seating",
      "Premium Feel"
    ]
  },
  {
    name: "Honda CB Shine",
    type: "bike",
    pricePerDay: 499,
    features: [
      "125cc Engine",
      "Reliable Performance",
      "Good Mileage - 55+ kmpl",
      "Comfortable Ride",
      "Low Maintenance"
    ]
  },
  {
    name: "Bajaj Pulsar 150",
    type: "bike",
    pricePerDay: 599,
    features: [
      "150cc Engine",
      "Sporty Look",
      "Powerful Performance",
      "Digital Console",
      "Great for Highway Rides"
    ]
  }
];

export const pricingPlans: Pricing[] = [
  {
    duration: "1 Day",
    scootyPrice: 299,
    bikePrice: 499,
    deposit: 1000
  },
  {
    duration: "3 Days",
    scootyPrice: 849,
    bikePrice: 1399,
    deposit: 1000
  },
  {
    duration: "7 Days (1 Week)",
    scootyPrice: 1899,
    bikePrice: 2999,
    deposit: 2000
  },
  {
    duration: "15 Days",
    scootyPrice: 3599,
    bikePrice: 5499,
    deposit: 2000
  },
  {
    duration: "1 Month (30 Days)",
    scootyPrice: 6499,
    bikePrice: 9999,
    deposit: 3000
  }
];

export const rentalFeatures = [
  "Free Helmet",
  "24/7 Roadside Assistance",
  "Flexible Pickup & Drop",
  "Well-Maintained Vehicles",
  "Full Insurance Coverage",
  "No Hidden Charges",
  "Unlimited Kilometers",
  "Fuel Efficient Vehicles"
];

export const requiredDocuments = [
  "Valid Driving License (Original + Photocopy)",
  "Aadhar Card / Government ID (Original + Photocopy)",
  "Refundable Security Deposit",
  "Local Address Proof (for tourists: Hotel booking confirmation)",
  "Self-attested photocopies of all documents"
];
