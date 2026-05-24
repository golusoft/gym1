export const site = {
  name: "Gym Fitness",
  tagline: "Forge Your Body. Forge Your Mind.",
  description:
    "Gym Fitness is the most premium fitness center in Sheikhpura, Bihar. World-class equipment, expert trainers, and an energetic community to help you transform your life.",
  phone: "+91 91020 21034",
  phoneDigits: "919102021034",
  whatsapp: "919102021034",
  email: "info@gymfitness.in",
  address:
    "Chandani Chowk, VIP Rd, near Lazeez Junglee Rasoi, Sheikhpura, Bihar 811105, India",
  shortAddress: "Chandani Chowk, Sheikhpura, Bihar",
  city: "Sheikhpura",
  state: "Bihar",
  pincode: "811105",
  country: "India",
  rating: 4.8,
  reviews: 71,
  hours: "Daily 5:00 AM – 10:00 PM",
  category: "Gym & Fitness Center",
  url: "https://gymfitness.vercel.app",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2!2d85.8375975!3d25.1433989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f243dbf988b60f%3A0x85ba356e7719a2ba!2sGym%20Fitness!5e0!3m2!1sen!2sin!4v1700000000000",
  mapUrl:
    "https://www.google.com/maps/place/Gym+Fitness/@25.1433989,85.8185431,15z/data=!4m10!1m2!2m1!1sgym+near+Chandani+Chowk,+Sheikhpura,+Bihar!3m6!1s0x39f243dbf988b60f:0x85ba356e7719a2ba!8m2!3d25.1433989!4d85.8375975",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/trainers", label: "Trainers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const features = [
  {
    title: "World-Class Equipment",
    description:
      "Premium imported machines and free weights — every rep counts on best-in-class gear.",
    icon: "Dumbbell",
  },
  {
    title: "Certified Expert Trainers",
    description:
      "Internationally certified coaches who design science-backed programs tailored to you.",
    icon: "ShieldCheck",
  },
  {
    title: "Personalized Programs",
    description:
      "From fat loss to powerlifting — every plan is custom-built for your body and goals.",
    icon: "Target",
  },
  {
    title: "Hygienic & Spacious",
    description:
      "Sanitized daily, climate-controlled, and built with luxury changing rooms and showers.",
    icon: "Sparkles",
  },
  {
    title: "Diet & Nutrition",
    description:
      "Custom Indian meal plans aligned with your training — fuel your transformation right.",
    icon: "Apple",
  },
  {
    title: "Open 17 Hours",
    description:
      "5 AM to 10 PM, 7 days a week — train on your schedule, never miss a session.",
    icon: "Clock",
  },
];

export const plans = [
  {
    name: "Monthly",
    price: 1499,
    period: "/month",
    badge: null,
    description: "Perfect to kickstart your fitness journey.",
    features: [
      "Full gym access",
      "Locker facility",
      "Group classes (limited)",
      "Body composition check",
      "Diet guidance basics",
    ],
    cta: "Start Monthly",
  },
  {
    name: "Quarterly",
    price: 3999,
    period: "/3 months",
    badge: "Most Popular",
    description: "Best value for serious starters.",
    features: [
      "Everything in Monthly",
      "1 free PT session / month",
      "Custom workout plan",
      "Diet plan (Indian)",
      "Progress tracking",
      "Free shaker kit",
    ],
    cta: "Get Quarterly",
  },
  {
    name: "Yearly",
    price: 11999,
    period: "/year",
    badge: "Best Value",
    description: "Commit to transformation. Save up to 35%.",
    features: [
      "Everything in Quarterly",
      "Unlimited group classes",
      "Monthly body analysis",
      "Free Gym Fitness t-shirt",
      "Priority support",
      "Lifetime member status",
    ],
    cta: "Go Yearly",
  },
  {
    name: "Personal Training",
    price: 5999,
    period: "/month",
    badge: "1-on-1",
    description: "Premium 1-on-1 coaching with elite trainers.",
    features: [
      "12 PT sessions / month",
      "Custom training & diet",
      "WhatsApp support 24/7",
      "Bi-weekly body analysis",
      "Supplement guidance",
      "Recovery & mobility plan",
    ],
    cta: "Book PT",
  },
];

export const trainers = [
  {
    name: "Rahul Kumar",
    role: "Head Coach · Strength & Conditioning",
    experience: "10+ Years",
    certifications: ["ACE-CPT", "K11 Certified", "ISSA Nutritionist"],
    skills: ["Powerlifting", "Hypertrophy", "Athletic Performance"],
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Women's Fitness & Yoga Specialist",
    experience: "7 Years",
    certifications: ["RYT-500", "Pre/Post Natal Certified"],
    skills: ["Weight Loss", "Yoga", "Mobility"],
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Amit Singh",
    role: "Bodybuilding & Nutrition Coach",
    experience: "8 Years",
    certifications: ["IFBB Pro Card", "Sports Nutrition"],
    skills: ["Bodybuilding", "Cutting", "Lean Bulking"],
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Neha Verma",
    role: "HIIT & Cardio Specialist",
    experience: "5 Years",
    certifications: ["NASM-CPT", "TRX Suspension Trainer"],
    skills: ["HIIT", "Functional", "Fat Loss"],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80&auto=format&fit=crop",
  },
];

export const testimonials = [
  {
    name: "Rohit Kumar",
    text: "Lost 18 kg in 6 months. The trainers are world-class and the equipment is top-notch. Best gym in Sheikhpura, hands down.",
    rating: 5,
    role: "Member · 1 year",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Anjali Singh",
    text: "I was scared of stepping into a gym. The team here made me feel like family. Gained strength, confidence, and amazing friends.",
    rating: 5,
    role: "Member · 8 months",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Vikash Yadav",
    text: "Premium experience at a Sheikhpura price. Hygienic, spacious, AC working flawlessly. The PT plan is gold.",
    rating: 5,
    role: "Member · 2 years",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Pooja Devi",
    text: "Joined for weight loss, stayed for the community. From 78 kg to 62 kg. Forever grateful to the entire Gym Fitness team.",
    rating: 5,
    role: "Member · 14 months",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Manish Raj",
    text: "I've trained at gyms in Patna and Delhi. This place beats them in cleanliness and trainer quality. Highly recommended.",
    rating: 5,
    role: "Member · 6 months",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop",
    alt: "Gym main floor with weights",
    category: "Workout Area",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80&auto=format&fit=crop",
    alt: "Heavy duty squat racks",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&auto=format&fit=crop",
    alt: "Cardio zone with treadmills",
    category: "Cardio",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80&auto=format&fit=crop",
    alt: "Free weights area",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80&auto=format&fit=crop",
    alt: "Member doing deadlift",
    category: "Members",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80&auto=format&fit=crop",
    alt: "Bodybuilding zone",
    category: "Workout Area",
  },
  {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=80&auto=format&fit=crop",
    alt: "Functional training rig",
    category: "Functional",
  },
  {
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1200&q=80&auto=format&fit=crop",
    alt: "Group HIIT class",
    category: "Group Class",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80&auto=format&fit=crop",
    alt: "Premium dumbbells rack",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80&auto=format&fit=crop",
    alt: "Female member training",
    category: "Members",
  },
  {
    src: "https://images.unsplash.com/photo-1652363722833-509b3aac287b?w=1200&q=80&auto=format&fit=crop",
    alt: "Stretching & mobility area",
    category: "Mobility",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80&auto=format&fit=crop",
    alt: "Locker room interior",
    category: "Facilities",
  },
];

export const transformations = [
  {
    name: "Suresh K.",
    duration: "6 months",
    weightLost: "22 kg",
    before:
      "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Kavita S.",
    duration: "9 months",
    weightLost: "16 kg",
    before:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Arjun P.",
    duration: "12 months",
    weightLost: "Gained 9 kg muscle",
    before:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80&auto=format&fit=crop",
  },
];

export const faqs = [
  {
    q: "What are the gym timings?",
    a: "We are open daily from 5:00 AM to 10:00 PM, including weekends and most holidays.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! Every new member gets a 1-day free trial. Just walk in or book online — no card required.",
  },
  {
    q: "Where exactly are you located?",
    a: "Chandani Chowk, VIP Rd, near Lazeez Junglee Rasoi, Sheikhpura, Bihar 811105. Ample parking available.",
  },
  {
    q: "Do you have separate timings for women?",
    a: "We are inclusive 24/7, but we also offer a women-only batch from 11 AM – 1 PM with a female trainer.",
  },
  {
    q: "What payment options do you accept?",
    a: "Cash, UPI, all major debit/credit cards, and EMI on memberships of 6 months or more.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes — yearly members get up to 30 days of free freeze for medical or travel reasons.",
  },
  {
    q: "Do you provide diet plans?",
    a: "Quarterly, Yearly, and Personal Training memberships include custom Indian-style diet plans designed by our certified nutritionist.",
  },
  {
    q: "Is the gym AC and hygienic?",
    a: "Fully air-conditioned, sanitized twice daily, and equipped with hospital-grade ventilation. Hygiene is our obsession.",
  },
];

export const programs = [
  {
    title: "Weight Loss",
    description:
      "Lose fat sustainably with HIIT, smart cardio, and a custom Indian diet that doesn't starve you.",
    image:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=900&q=80&auto=format&fit=crop",
    duration: "8 – 16 weeks",
  },
  {
    title: "Muscle Building",
    description:
      "Progressive overload, hypertrophy splits and high-protein nutrition to build lean, dense muscle.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80&auto=format&fit=crop",
    duration: "12 – 24 weeks",
  },
  {
    title: "Strength & Powerlifting",
    description:
      "Squat, bench, and deadlift heavier than ever with our coached strength program.",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=900&q=80&auto=format&fit=crop",
    duration: "16 weeks+",
  },
  {
    title: "Functional Athleticism",
    description:
      "Move better, jump higher, last longer — for athletes, students and weekend warriors.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=900&q=80&auto=format&fit=crop",
    duration: "8 – 12 weeks",
  },
];

export const dietTips = [
  {
    title: "Eat Real Indian Food",
    text: "Roti, dal, sabzi, paneer, chicken, fish — whole foods beat any imported supplement. 90% of your diet should come from your kitchen.",
  },
  {
    title: "Protein Every Meal",
    text: "Aim for 1.6–2.2 g of protein per kg of bodyweight. Eggs, dal, soya, paneer, chicken — spread it across 4–5 meals.",
  },
  {
    title: "Hydrate Religiously",
    text: "3–4 litres of water a day. Add a pinch of salt and lemon post-workout for natural electrolytes.",
  },
  {
    title: "Sleep is Training",
    text: "Muscle is built while you sleep. 7–9 hours, no screens 30 min before bed. Skip this and progress halts.",
  },
  {
    title: "Smart Carbs Around Workout",
    text: "Time your rice, roti, oats and fruits 1–2 hours before training and right after. That's when carbs work hardest.",
  },
  {
    title: "Don't Fear Ghee",
    text: "1–2 tsp of ghee a day supports hormones and joints. Quality fats are your friend.",
  },
];

export const achievements = [
  { number: 5000, suffix: "+", label: "Happy Members" },
  { number: 71, suffix: "+", label: "5-Star Reviews" },
  { number: 12, suffix: "+", label: "Expert Trainers" },
  { number: 9, suffix: "+", label: "Years of Excellence" },
];

export const facilities = [
  "Spacious Air-Conditioned Floor",
  "Premium Imported Equipment",
  "Separate Cardio Zone",
  "Free Weights & Powerlifting Area",
  "Functional & Cross-Training Rig",
  "Group Class Studio",
  "Dedicated Stretching & Mobility Zone",
  "Hygienic Locker Rooms & Showers",
  "RO Drinking Water",
  "CCTV Surveillance",
  "Two-Wheeler & Car Parking",
  "Steam & Sauna (Premium Members)",
];
