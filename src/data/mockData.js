

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const mockDataVehicles = [
  {
    id: 1,
    vehicle: "HH 123",
    vehicleTrailer: "HH 612",
    cargo: "SHP-2023-XYZ-789",
    relation: "Berlin - Hamburg",
    incomingTime: "11:00 21.09.2023",
    takeAppointment: "15:00 04.10.2023",
    parkPlace: "003",
    status: "ready",
    typ: "Trailer",
    info: "",
    land: {
      kurz: "DE",
      name: "Deutschland"
    },
    driver: {
      name: "Anna Haus",
      tel: "091929382",
      firma: "Test Firma"
    },
    customer: {
      name: "Möller",
      address: "Hamburg Billsted 22111 Horner Landstraße 414"
    }
  },
  {
    id: 2,
    vehicle: "XYZ 789",
    vehicleTrailer: "ABC 123",
    cargo: "SHP-2023-ABC-123",
    relation: "Hamburg - Munich",
    incomingTime: "09:30 21.09.2023",
    takeAppointment: "14:15 05.10.2023",
    parkPlace: "005",
    status: "in transit",
    typ: "Truck",
    info: "Fragile items",
    land: {
      kurz: "AT",
      name: "Austria"
    },
    driver: {
      name: "John Smith",
      tel: "0712345678",
      firma: "Logistics Inc."
    },
    customer: {
      name: "Miller",
      address: "Munich Hauptstr. 12345"
    }
  },
  {
    id: 3,
    vehicle: "BD 456",
    vehicleTrailer: "CD 789",
    cargo: "SHP-2023-DEF-456",
    relation: "Frankfurt - Berlin",
    incomingTime: "14:45 22.09.2023",
    takeAppointment: "12:30 06.10.2023",
    parkPlace: "008",
    status: "delayed",
    typ: "Trailer",
    info: "High-value goods",
    land: {
      kurz: "DE",
      name: "Deutschland"
    },
    driver: {
      name: "Eva Johnson",
      tel: "0898765432",
      firma: "Freight Masters"
    },
    customer: {
      name: "Schmidt",
      address: "Berlin Westend 55456"
    },
  },
  {
    id: 4,
    vehicle: "ZZZ 123",
    vehicleTrailer: "XYZ 789",
    cargo: "SHP-2023-XYZ-890",
    relation: "Hamburg - Paris",
    incomingTime: "10:15 23.09.2023",
    takeAppointment: "16:00 07.10.2023",
    parkPlace: "009",
    status: "ready",
    typ: "Truck",
    info: "Perishable goods",
    land: {
      kurz: "FR",
      name: "France"
    },
    driver: {
      name: "Sophie Dupont",
      tel: "003312345678",
      firma: "EuroLogistics"
    },
    customer: {
      name: "Leclerc",
      address: "Paris Rue de la Paix 7890"
    },
  },
  {
    id: 5,
    vehicle: "ABC 789",
    vehicleTrailer: "XYZ 456",
    cargo: "SHP-2023-XYZ-567",
    relation: "Amsterdam - Hamburg",
    incomingTime: "12:30 24.09.2023",
    takeAppointment: "11:45 08.10.2023",
    parkPlace: "010",
    status: "in transit",
    typ: "Trailer",
    info: "",
    land: {
      kurz: "NL",
      name: "Netherlands"
    },
    driver: {
      name: "Peter van der Berg",
      tel: "0031209876543",
      firma: "Dutch Carriers"
    },
    customer: {
      name: "van Houten",
      address: "Amsterdam Keizersgracht 1234"
    },
  },
  {
    id: 6,
    vehicle: "HH 456",
    vehicleTrailer: "HH 789",
    cargo: "SHP-2023-HHH-123",
    relation: "Hamburg - Copenhagen",
    incomingTime: "08:45 25.09.2023",
    takeAppointment: "14:30 09.10.2023",
    parkPlace: "011",
    status: "delayed",
    typ: "Truck",
    info: "Fragile electronics",
    land: {
      kurz: "DK",
      name: "Denmark"
    },
    driver: {
      name: "Lars Nielsen",
      tel: "0045123456789",
      firma: "Nordic Transport"
    },
    customer: {
      name: "Andersen",
      address: "Copenhagen Nyhavn 5678"
    },
  },
  {
    id: 7,
    vehicle: "XYZ 123",
    vehicleTrailer: "ABC 789",
    cargo: "SHP-2023-ZZZ-111",
    relation: "Munich - Vienna",
    incomingTime: "16:00 26.09.2023",
    takeAppointment: "10:15 10.10.2023",
    parkPlace: "012",
    status: "ready",
    typ: "Trailer",
    info: "Hazardous materials",
    land: {
      kurz: "AT",
      name: "Austria"
    },
    driver: {
      name: "Markus Huber",
      tel: "0043123456789",
      firma: "Alpine Logistics"
    },
    customer: {
      name: "Schwarz",
      address: "Vienna Opernring 9876"
    },
  },
  {
    id: 8,
    vehicle: "ZZZ 789",
    vehicleTrailer: "XYZ 123",
    cargo: "SHP-2023-XYZ-333",
    relation: "Berlin - Warsaw",
    incomingTime: "10:30 27.09.2023",
    takeAppointment: "12:45 11.10.2023",
    parkPlace: "013",
    status: "in transit",
    typ: "Truck",
    info: "",
    land: {
      kurz: "PL",
      name: "Poland"
    },
    driver: {
      name: "Marta Kowalska",
      tel: "0048123456789",
      firma: "Polish Express"
    },
    customer: {
      name: "Nowak",
      address: "Warsaw Marszałkowska 5432"
    },
  },
  {
    id: 9,
    vehicle: "ABC 123",
    vehicleTrailer: "XYZ 456",
    cargo: "SHP-2023-ABC-321",
    relation: "Amsterdam - Brussels",
    incomingTime: "13:15 28.09.2023",
    takeAppointment: "09:30 12.10.2023",
    parkPlace: "014",
    status: "delayed",
    typ: "Trailer",
    info: "Perishable goods",
    land: {
      kurz: "BE",
      name: "Belgium"
    },
    driver: {
      name: "Lucas De Vries",
      tel: "0032123456789",
      firma: "EuroTrans"
    },
    customer: {
      name: "Dupont",
      address: "Brussels Grand-Place 6789"
    },
  },
  {
    id: 10,
    vehicle: "HH 789",
    vehicleTrailer: "HH 123",
    cargo: "SHP-2023-HHH-789",
    relation: "Hamburg - Oslo",
    incomingTime: "15:45 29.09.2023",
    takeAppointment: "13:00 13.10.2023",
    parkPlace: "015",
    status: "ready",
    typ: "Truck",
    info: "Fragile items",
    land: {
      kurz: "NO",
      name: "Norway"
    },
    driver: {
      name: "Ole Andersen",
      tel: "0047123456789",
      firma: "Nordic Hauliers"
    },
    customer: {
      name: "Larsen",
      address: "Oslo Karl Johans gate 8765"
    },
  },
  {
    id: 11,
    vehicle: "XYZ 456",
    vehicleTrailer: "ABC 123",
    cargo: "SHP-2023-XYZ-222",
    relation: "Amsterdam - Zurich",
    incomingTime: "11:30 30.09.2023",
    takeAppointment: "10:45 14.10.2023",
    parkPlace: "016",
    status: "in transit",
    typ: "Trailer",
    info: "",
    land: {
      kurz: "CH",
      name: "Switzerland"
    },
    driver: {
      name: "Anna Müller",
      tel: "0041123456789",
      firma: "Swiss Logistics"
    },
    customer: {
      name: "Schneider",
      address: "Zurich Bahnhofstrasse 4321"
    },
  },
  {
    id: 12,
    vehicle: "HH 123",
    vehicleTrailer: "HH 789",
    cargo: "SHP-2023-HHH-456",
    relation: "Hamburg - Stockholm",
    incomingTime: "12:15 01.10.2023",
    takeAppointment: "11:30 15.10.2023",
    parkPlace: "017",
    status: "delayed",
    typ: "Truck",
    info: "High-value goods",
    land: {
      kurz: "SE",
      name: "Sweden"
    },
    driver: {
      name: "Erik Lindqvist",
      tel: "0046123456789",
      firma: "Nordic Freight"
    },
    customer: {
      name: "Gustavsson",
      address: "Stockholm Drottninggatan 5432"
    },
  },
  {
    id: 13,
    vehicle: "ABC 789",
    vehicleTrailer: "XYZ 123",
    cargo: "SHP-2023-ABC-555",
    relation: "Amsterdam - Milan",
    incomingTime: "14:45 02.10.2023",
    takeAppointment: "09:15 16.10.2023",
    parkPlace: "018",
    status: "ready",
    typ: "Trailer",
    info: "Fragile electronics",
    land: {
      kurz: "IT",
      name: "Italy"
    },
    driver: {
      name: "Marco Rossi",
      tel: "0039123456789",
      firma: "Italian Express"
    },
    customer: {
      name: "Bianchi",
      address: "Milan Via Montenapoleone 9876"
    },
  },
  {
    id: 14,
    vehicle: "ZZZ 123",
    vehicleTrailer: "XYZ 789",
    cargo: "SHP-2023-XYZ-999",
    relation: "Berlin - Madrid",
    incomingTime: "10:30 03.10.2023",
    takeAppointment: "10:00 17.10.2023",
    parkPlace: "019",
    status: "in transit",
    typ: "Truck",
    info: "",
    land: {
      kurz: "ES",
      name: "Spain"
    },
    driver: {
      name: "Sofia Fernandez",
      tel: "0034123456789",
      firma: "Iberian Carriers"
    },
    customer: {
      name: "Gomez",
      address: "Madrid Gran Vía 4321"
    },
  },
  {
    id: 15,
    vehicle: "XYZ 123",
    vehicleTrailer: "ABC 789",
    cargo: "SHP-2023-XYZ-777",
    relation: "Copenhagen - London",
    incomingTime: "09:15 04.10.2023",
    takeAppointment: "12:30 18.10.2023",
    parkPlace: "020",
    status: "delayed",
    typ: "Trailer",
    info: "Perishable goods",
    land: {
      kurz: "UK",
      name: "United Kingdom"
    },
    driver: {
      name: "David Foster",
      tel: "0044123456789",
      firma: "British Hauliers"
    },
    customer: {
      name: "Smith",
      address: "London Oxford Street 5678"
    },
  },
  {
    id: 16,
    vehicle: "ABC 123",
    vehicleTrailer: "XYZ 456",
    cargo: "SHP-2023-ABC-888",
    relation: "Vienna - Prague",
    incomingTime: "13:45 05.10.2023",
    takeAppointment: "08:45 19.10.2023",
    parkPlace: "021",
    status: "ready",
    typ: "Truck",
    info: "",
    land: {
      kurz: "CZ",
      name: "Czech Republic"
    },
    driver: {
      name: "Jan Novak",
      tel: "0042023456789",
      firma: "Czech Carriers"
    },
    customer: {
      name: "Svoboda",
      address: "Prague Wenceslas Square 12345"
    },
  },
]

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockEvents = [
  {
    key: "1",
    name: "Car XYZ incoming",
    date: "2023-09-23",
    madeBy: "John Doa"
  },
  {
    key: "2",
    name: "Car ABC appointment",
    date: "2023-09-22",
    madeBy: "Selena Picker"
  },
  {
    key: "3",
    name: "New Coworker",
    date: "2023-09-22",
    madeBy: "Meik Greenwood"
  },
];

export const mockIncomingVehicles = [
  {
    id: "1",
    name: "27BJAKD90L",
    date: "2023-09-23",
  },
  {
    id: "2",
    name: "47BJAKD90L",
    date: "2023-09-22",
  },
  {
    id: "3",
    name: "57BJAKD90L",
    date: "2023-09-22",
  },
];
