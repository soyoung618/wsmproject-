const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})



//가져와야 할 데이터 : OCCRNC_CNT 발생건수, PATNT_CNT 환자수

//html 요소 가져오기
let rounded2 = document.getElementById('rounded2');

//https://openapi.foodsafetykorea.go.kr/api/70ec23fa017441b69686/I2848/json/1/5/OCCRNC_YEAR=2020
const getURL = () => {
    const API_KEY = "70ec23fa017441b69686";
    let serviceId = "I2848";
    let dataType = "json";
    let OCCRNC_YEAR = "2020";

    let URL = `https://openapi.foodsafetykorea.go.kr/api/`;
    URL += `${API_KEY}/${serviceId}/${dataType}/1/5/OCCRNC_YEAR=${OCCRNC_YEAR}`;

    console.log(URL);

    getPatientByAPI(URL);
}
const getPatientByAPI = (url) => {
    //XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // callback
    xhr.onreadystatechange = () => {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
            //success
            console.log('성공');
            console.log(xhr.response);
            putData(xhr.response); //함수 호출
        }
    }
    //요청 보낼 방식, url, 비동기여부 설정
    xhr.open("GET", url, true);
    //요청 전송
    xhr.send();
}
//json 데이터를 알맞게 자르기,json 데이터 -> html에다가 넣기


getURL();