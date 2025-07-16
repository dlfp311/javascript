// if(조건) {조건에 해당될 때 실행할 코드}else{조건에 해당되지 않을 때 실행할 코드}

const num = +window.prompt("숫자를 입력하세요");

if (num > 0) {
  window.console.log(`${num}은 양수입니다`);
} else if (num == 0) {
  window.console.log(`${num}은 0 입니다`);
} else {
  window.console.log(`${num}은 음수입니다`);
}

window.console.log("프로그램 끝~~");
