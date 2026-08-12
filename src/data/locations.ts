export interface Location {
  id: string;
  name: string;
  type: string;
  city: string;
  state: string;
  address: string;
  mapsUrl: string;
  image: string;
  coordinates: {
    top: number;
    left: number;
  };
}

export const locations: Location[] = [
  {
    id: "head-office",
    name: "Head Office",
    type: "Head Office",
    city: "Erode",
    state: "Tamil Nadu",
    address: "#2155, Fortune City, Global Market - Texvalley, NH 544 Bengaluru - Cochin National Highways, Chithode, Erode - 638 102. TN, India.",
    mapsUrl: "https://maps.google.com/?q=Texvalley+Global+Market+NH+544+Chithode+Erode",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    coordinates: {
      top: 73.1,
      left: 24.2
    }
  },
  {
    id: "manufacturing-factory",
    name: "Manufacturing Factory",
    type: "Manufacturing Factory",
    city: "Tiruppur",
    state: "Tamil Nadu",
    address: "#229/2-A, 229/2-B, 230/3, Alamelu Nagar, Vengamedu, Chettipalayam, Tiruppur - 641 603, TN, India.",
    mapsUrl: "https://maps.google.com/?q=Alamelu+Nagar+Vengamedu+Chettipalayam+Tiruppur",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    coordinates: {
      top: 75.7,
      left: 20.5
    }
  },
  {
    id: "chennai-office",
    name: "Chennai Office",
    type: "Chennai Office",
    city: "Chennai",
    state: "Tamil Nadu",
    address: "#18, Main Road, Lakshmi Nagar, Vinayagapuram, Kolathur, Chennai - 600 099, TN, India.",
    mapsUrl: "https://maps.google.com/?q=Lakshmi+Nagar+Vinayagapuram+Kolathur+Chennai",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    coordinates: {
      top: 55.7,
      left: 50.0
    }
  },
  {
    id: "bengaluru-office",
    name: "Bengaluru Office",
    type: "Bengaluru Office",
    city: "Bengaluru",
    state: "Karnataka",
    address: "#29, 1st Main Road, Vidhya Nagar Bus Station, Banashankari 3rd Stage, Banashankari, Bengaluru - 560 050, Karnataka, India.",
    mapsUrl: "https://maps.google.com/?q=Vidhya+Nagar+Bus+Station+Banashankari+Bengaluru",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=80&w=600",
    coordinates: {
      top: 56.8,
      left: 23.1
    }
  }
];
