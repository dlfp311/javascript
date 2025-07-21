const password = window.prompt("비밀번호를 설정해주세요.");

if (password.length < 4 || password.length > 12) {
  window.console.log("비밀번호 길이가 맞지 않습니다.");
} else if (
  (!password.includes("@") || password.includes("!"), password.includes("#"))
) {
  window.console.log("비밀번호에 @,!,#이 없습니다.");
} else if (!password.startsWith("it")) {
  window.console.log("비밀번호 시작이 it가 아닙니다.");
} else {
  window.console.log("비밀번호 설정이 완료됐습니다.");
}
