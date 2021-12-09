export interface HotelType {
  id: number;
  name: string;
  location: {
    address: string;
    city: string;
    latitude: number;
    longitude: number;
  };
  stars: number;
  checkIn: {
    from: string;
    to: string;
  };
  checkOut: {
    from: string;
    to: string;
  };
  contact: {
    phoneNumber: string;
    email: string;
  };
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}

export interface SearchboxType {
  value: string;
  onChangeText: (search: string) => void;
}
