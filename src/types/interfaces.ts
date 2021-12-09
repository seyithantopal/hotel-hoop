export interface LocationType {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface CheckInType {
  from: string;
  to: string;
}

export interface CheckOutType {
  from: string;
  to: string;
}

export interface ContactType {
  phoneNumber: string;
  email: string;
}

export interface HotelType {
  id: number;
  name: string;
  location: LocationType;
  stars: number;
  checkIn: CheckInType;
  checkOut: CheckOutType;
  contact: ContactType;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}

export interface SearchboxType {
  value: string;
  onChangeText: (search: string) => void;
}
