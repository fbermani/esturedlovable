import type { Residence, UnavailableResidence } from "@/types/residence";

// Image imports - using URL constructor for dynamic imports
const getImageUrl = (path: string) => new URL(path, import.meta.url).href;

export const featuredResidences: Residence[] = [
  {
    residenceId: "residence-1",
    images: [
      getImageUrl("../assets/hostel-room-1.jpg"),
      getImageUrl("../assets/hostel-room-3.jpg"),
      getImageUrl("../assets/hostel-common-2.jpg"),
    ],
    title: "Residencia ***",
    location: "Centro - Av. Corrientes y San Martín",
    rating: 4.8,
    reviews: 127,
    verified: true,
    currentResidents: 24,
    residentsRating: 4.6,
    services: [
      { name: "WiFi Alta Velocidad", icon: "Wifi" },
      { name: "Zona de Estudio 24hs", icon: "BookOpen" },
      { name: "Cocina Equipada", icon: "Utensils" },
      { name: "Lavandería", icon: "Shirt" },
      { name: "Aire Acondicionado", icon: "Wind" },
    ],
    availableRooms: [
      {
        type: "Hab. Doble",
        price: 38000,
        occupants: [
          {
            name: "María G.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
            rating: 4.9,
            description: "Estudiante de medicina, organizada y tranquila.",
            badges: ["⭐", "🤝"],
            score: 850
          }
        ]
      },
      {
        type: "Hab. Triple",
        price: 45000,
        occupants: [
          {
            name: "Lucas R.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
            rating: 4.7,
            description: "Ingeniería, fan del deporte y música.",
            badges: ["🤝", "💰"],
            score: 780
          },
          {
            name: "Ana P.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
            rating: 4.8,
            description: "Estudiante de diseño, creativa y sociable.",
            badges: ["⭐"],
            score: 820
          }
        ]
      }
    ]
  },
  {
    residenceId: "residence-2",
    images: [
      getImageUrl("../assets/hostel-common-2.jpg"),
      getImageUrl("../assets/hostel-room-1.jpg"),
      getImageUrl("../assets/hostel-room-3.jpg"),
    ],
    title: "Casa Universitaria ***",
    location: "Recoleta - Av. Santa Fe y Callao",
    rating: 4.9,
    reviews: 95,
    verified: true,
    currentResidents: 18,
    residentsRating: 4.8,
    services: [
      { name: "WiFi Alta Velocidad", icon: "Wifi" },
      { name: "Gym Incluido", icon: "Flame" },
      { name: "Cocina Equipada", icon: "Utensils" },
      { name: "Seguridad 24hs", icon: "Shield" },
      { name: "Limpieza", icon: "Sparkles" },
    ],
    availableRooms: [
      {
        type: "Hab. Doble",
        price: 45000,
        occupants: [
          {
            name: "Sofia M.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
            rating: 5.0,
            description: "Derecho, disciplinada y amigable.",
            badges: ["⭐", "💰", "🤝"],
            score: 920
          }
        ]
      }
    ]
  },
  {
    residenceId: "residence-3",
    images: [
      getImageUrl("../assets/hostel-room-3.jpg"),
      getImageUrl("../assets/hostel-common-2.jpg"),
      getImageUrl("../assets/hostel-room-1.jpg"),
    ],
    title: "Residencia del ***",
    location: "Palermo - Av. Santa Fe y Scalabrini Ortiz",
    rating: 4.7,
    reviews: 143,
    verified: true,
    currentResidents: 32,
    residentsRating: 4.5,
    services: [
      { name: "WiFi Alta Velocidad", icon: "Wifi" },
      { name: "Zona de Estudio 24hs", icon: "BookOpen" },
      { name: "Cocina Equipada", icon: "Utensils" },
      { name: "Lavandería", icon: "Shirt" },
      { name: "Calefacción", icon: "Flame" },
    ],
    availableRooms: [
      {
        type: "Hab. Triple",
        price: 40000,
        occupants: [
          {
            name: "Martín L.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Martin",
            rating: 4.8,
            description: "Economía, responsable y tranquilo.",
            badges: ["💰", "🤝"],
            score: 810
          },
          {
            name: "Camila T.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camila",
            rating: 4.4,
            description: "Comunicación social, sociable y respetuosa.",
            badges: ["🤝"],
            score: 680
          }
        ]
      }
    ]
  },
  {
    residenceId: "residence-4",
    images: [
      getImageUrl("../assets/hostel-room-1.jpg"),
      getImageUrl("../assets/hostel-room-3.jpg"),
      getImageUrl("../assets/hostel-common-2.jpg"),
    ],
    title: "Residencia Premium ***",
    location: "Palermo - Av. Córdoba y Juan B. Justo",
    rating: 5.0,
    reviews: 93,
    verified: true,
    currentResidents: 15,
    residentsRating: 4.9,
    services: [
      { name: "WiFi Alta Velocidad", icon: "Wifi" },
      { name: "Servicio de Limpieza", icon: "Sparkles" },
      { name: "Cocina Equipada", icon: "Utensils" },
      { name: "Aire Acondicionado", icon: "Wind" },
      { name: "Seguridad 24hs", icon: "Shield" },
    ],
    availableRooms: [
      {
        type: "Hab. Doble",
        price: 55000,
        occupants: [
          {
            name: "Valentina R.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Valentina",
            rating: 5.0,
            description: "Medicina veterinaria, súper organizada y respetuosa.",
            badges: ["⭐", "💰", "🤝"],
            score: 950
          }
        ]
      }
    ]
  },
];

export const availableResidences: Residence[] = [
  {
    residenceId: "residence-1",
    images: [
      getImageUrl("../assets/hostel-room-1.jpg"),
      getImageUrl("../assets/hostel-room-3.jpg"),
    ],
    title: "Residencia ***",
    location: "Centro - Av. Corrientes y San Martín",
    rating: 4.8,
    reviews: 127,
    verified: true,
    currentResidents: 24,
    residentsRating: 4.6,
    services: [
      { name: "WiFi Alta Velocidad", icon: "Wifi" },
      { name: "Cocina Equipada", icon: "Utensils" },
      { name: "Seguridad 24hs", icon: "Shield" },
    ],
    availableRooms: [
      {
        type: "Hab. Doble",
        price: 38000,
        occupants: [
          {
            name: "María G.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
            rating: 4.9,
            description: "Estudiante de medicina",
            badges: ["⭐", "🤝"],
            score: 850
          }
        ]
      }
    ]
  },
  {
    residenceId: "residence-2",
    images: [
      getImageUrl("../assets/hostel-common-2.jpg"),
      getImageUrl("../assets/hostel-room-1.jpg"),
    ],
    title: "Casa Universitaria ***",
    location: "Recoleta - Av. Santa Fe y Callao",
    rating: 4.9,
    reviews: 95,
    verified: true,
    currentResidents: 18,
    residentsRating: 4.8,
    services: [
      { name: "Gym Incluido", icon: "Flame" },
      { name: "WiFi Alta Velocidad", icon: "Wifi" },
      { name: "Limpieza", icon: "Sparkles" },
    ],
    availableRooms: [
      {
        type: "Hab. Doble",
        price: 45000,
        occupants: [
          {
            name: "Sofia M.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
            rating: 5.0,
            description: "Derecho",
            badges: ["⭐", "💰", "🤝"],
            score: 920
          }
        ]
      }
    ]
  },
  {
    residenceId: "residence-3",
    images: [
      getImageUrl("../assets/hostel-room-3.jpg"),
      getImageUrl("../assets/hostel-common-2.jpg"),
    ],
    title: "Residencia del ***",
    location: "Palermo - Av. Santa Fe y Scalabrini Ortiz",
    rating: 4.7,
    reviews: 143,
    verified: true,
    currentResidents: 32,
    residentsRating: 4.5,
    services: [
      { name: "Zona de Estudio 24hs", icon: "BookOpen" },
      { name: "WiFi Alta Velocidad", icon: "Wifi" },
      { name: "Cocina Equipada", icon: "Utensils" },
    ],
    availableRooms: [
      {
        type: "Hab. Triple",
        price: 40000,
        occupants: [
          {
            name: "Martín L.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Martin",
            rating: 4.8,
            description: "Economía",
            badges: ["💰", "🤝"],
            score: 810
          }
        ]
      }
    ]
  },
];

export const unavailableResidences: UnavailableResidence[] = [
  {
    images: [
      getImageUrl("../assets/hostel-room-1.jpg"),
      getImageUrl("../assets/hostel-room-3.jpg"),
    ],
    title: "Residencia Premium ***",
    location: "Palermo - Av. Córdoba y Juan B. Justo",
    priceMin: 48000,
    priceMax: 68000,
    rating: 5.0,
    reviews: 93,
    verified: true,
    currentResidents: 15,
    residentsRating: 4.9,
    services: [
      { name: "Servicio de Limpieza", icon: "Sparkles" },
      { name: "WiFi Alta Velocidad", icon: "Wifi" },
      { name: "Seguridad 24hs", icon: "Shield" },
    ],
    soldOut: true,
    roomTypes: ["Individual", "Doble"]
  },
  {
    images: [
      getImageUrl("../assets/hostel-common-2.jpg"),
      getImageUrl("../assets/hostel-room-1.jpg"),
    ],
    title: "Residencia Central ***",
    location: "Centro - Av. de Mayo y 9 de Julio",
    priceMin: 42000,
    priceMax: 60000,
    rating: 4.6,
    reviews: 78,
    verified: true,
    currentResidents: 28,
    residentsRating: 4.4,
    services: [
      { name: "Cocina Equipada", icon: "Utensils" },
      { name: "WiFi Alta Velocidad", icon: "Wifi" },
      { name: "Lavandería", icon: "Shirt" },
    ],
    soldOut: true,
    roomTypes: ["Triple", "Cuádruple"]
  }
];
