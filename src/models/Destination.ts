export default interface IDestination {
  id: number;
  name: string;
  phone: number;
  email: string;
  opening_hours: string;
  address: string;
  cep: number;
  latitude: number;
  longitude: number;
  images: [
    {
      id: number;
      url: string;
    },
  ];
};
