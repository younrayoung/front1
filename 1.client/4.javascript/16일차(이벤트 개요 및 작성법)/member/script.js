/*
기능 : 회원가입 및 로그인을 위한 유효성 검사
*/

function loginCheck(){
    if(document.login.mem_id.value==""){
        alert("아이디를 먼저 입력해주세요!");
        document.login.mem_id.focus();
        return;
    }

    if(document.login.mem_passwd.value==""){
        alert("비밀번호를 먼저 입력해주세요!");
        document.login.mem_passwd.focus();
        return;
    }
    document.login.submit(); // document.폼객체명.submit();
}

//회원가입 체크유무
function inputCheck(){
    if(document.regForm.mem_id.value==""){
        alert("아이디를 먼저 입력해주세요!");
        document.regForm.mem_id.focus();
        return;
    }
    
    //mem_passwd
    if(document.regForm.mem_passwd.value==""){
        alert("비밀번호를 먼저 입력해주세요!");
        document.regForm.mem_passwd.focus();
        return;
    }
    //mem_repasswd
    if(document.regForm.mem_repasswd.value==""){
        alert("비밀번호를 확인해주세요!");
        document.regForm.mem_repasswd.focus();
        return;
    }
    //mem_name
    if(document.regForm.mem_name.value==""){
        alert("이름을 먼저 입력해주세요!");
        document.regForm.mem_name.focus();
        return;
    }
    //mem_email
    if(document.regForm.mem_email.value==""){
        alert("이메일을 먼저 입력해주세요!");
        document.regForm.mem_email.focus();
        return;
    }
    //mem_tel
    if(document.regForm.mem_tel.value==""){
        alert("번호를 먼저 입력해주세요!");
        document.regForm.mem_tel.focus();
        return;
    }
    //mem_zipcode
    if(document.regForm.mem_zipcode.value==""){
        alert("우편번호를 먼저 입력해주세요!");
        document.regForm.mem_zipcode.focus();
        return;
    }
    //mem_address
    if(document.regForm.mem_address.value==""){
        alert("주소를 먼저 입력해주세요!");
        document.regForm.mem_address.focus();
        return;
    }
    //mem_job
    if(document.regForm.mem_job.value=="0"){
        alert("직업을 먼저 입력해주세요!");
        document.regForm.mem_job.focus();
        return;
    }
    //암호가 서로 일치하는 지까지 작성하기
    if(document.regForm.mem_passwd.value!=document.regForm.mem_repasswd.value){
        alert("비밀번호가 일치하지 않습니다.");
        document.regForm.mem_repasswd.focus();
        return;
    }
    document.regForm.submit();
}


//중복 id를 체크해주는 자바스크립트 함수 선언
function idCheck(id){
    if(id==""){
        alert("아이디를 먼저 입력하세요!");
        document.regForm.mem_id.focus();
    }else{//입력했다면
        //window.open(1.불러올 문서명, 2. 창의제목, 3.창의 옵션(위치, 크기 지정))
        open('idCheck.html','w', 'left=350,top=150,width=300, height=150');
    }
}

// 우편번호를 검색해주는 함수 선언
function zipCheck(){
    // left, top, width, height+menubar, status(상태바), scrollbars(스크롤기능), toolbar=yes | no (출연유무)
    //     document.regForm.mem_zipcode.focus();
    // }else{
        {open('Zipcheck.html', 'w', 'left=400, top=220, width=550, height=300'+
                                            'menubar=no,status=yes,scrollbars=yes,toolbar=no');
    }
}