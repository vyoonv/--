

function externalFn() {
    alert("외부 파일에 작성된 externalFn() 함수가 노출됨") ;
}

const body = document.querySelector("body");

function darkMode() {
    body.style.color = "white";
    body.style.backgroundColor = "black";

}
