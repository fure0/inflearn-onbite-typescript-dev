// enum 타입
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
  SPANISH = "es",
}

const user1 = {
  name: "kim",
  role: Role.ADMIN,
  language: Language.KOREAN,
};

const user2 = {
  name: "park",
  role: Role.USER,
  language: Language.ENGLISH,
};

const user3 = {
  name: "lee",
  role: Role.GUEST,
  language: Language.SPANISH,
};
