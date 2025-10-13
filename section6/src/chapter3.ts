// 인터페이스와 클래스

// 인터페이스는 퍼블릭 필드만 정의할수 있다.
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  /*
  name: string;
  moveSpeed: number;

  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
  */

  // 접근제어자를 쓰면 한방에 구현 가능
  constructor(public name: string, public moveSpeed: number) {}
  
  move() {
    console.log("move");
  }
}