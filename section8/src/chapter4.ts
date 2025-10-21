// 템플릿 리터럴 타입

type Color = "red" | "green" | "blue";

type Animal = "dog" | "cat" | "bird";

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = "red-dog";

type UpperCase = `${string} ${string}`;

const upperCase: UpperCase = "Hello World";