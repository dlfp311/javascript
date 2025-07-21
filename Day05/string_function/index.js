const coffee = "ice americano";

// 타입.함수(a.b):boolean

coffee.length; // 역할 : 글자 갯수 돌려줌 (함수 아님)
coffee.includes("ice"); // 역할 : 글자 포함 여부, 결과값: boolean
coffee.repeat(3); // 역할 : 글자 n번 반복, 결과값: string
coffee.slice(0, 5); // 역할 : 0번째부터 4째까지 쪼개서 돌려줌, 결과값: string
coffee.replace("i", "k"); // 역할 : 글자 i를 k로 바꿔서 돌려줌, 결과값: string
coffee.replaceAll("i", "k"); // 역할 : 글자 i를 k로 모두 바꿔서 돌려줌, 결과값: string
coffee.startsWith("e"); // 역할 : 글자 e로 시작하는지 묻기, 결과값: boolean
coffee.toUpperCase(); // 역할 : 대문자화, 결과값: string
coffee.toLowerCase(); // 역할 : 소문자화, 결과값: string
coffee.split("a"); // 역할 : a를 기준으로 잘라서 [리스트] 돌려줌, 결과값: array
