// 제네릭

function func<T>(value: T): T {
  return value;
}

func(10);
func("Hello");
func(true);

func<[number, string]>([10, "Hello"]);