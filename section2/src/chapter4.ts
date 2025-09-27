// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "kim",
  nickname: "kim",
  birth: "1990-01-01",
  bio: "bio",
  location: "location",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
}

let countryCodes: CountryCodes = {
  Korea: "KR",
  UnitedStates: "US",
  UnitedKingdom: "UK",
  Canada: "CA",
  Australia: "AU",
  NewZealand: "NZ",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 필수로 지정하게 하고 싶을 때
}

let countryNumberCode: CountryNumberCodes = {
  Korea: 82,
  UnitedStates: 1,
  UnitedKingdom: 44,
  Canada: 1,
  Australia: 61,
  NewZealand: 64,
}