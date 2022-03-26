window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        var input=document.getElementById('search-input').children[0];
        var input_content=input.value;
        if(''==input_content)
        {
            window.alert('请输入搜索内容');
        }
        else
        {
            //window.alert(input_content);
            search();
        }
    });

    document.getElementById('search-input').children[0].addEventListener("keyup",function(event)
    {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("search-btn").click();
        }
    })

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
    });
}

function search() {
    // TODO: 搜索触发后的行为
    var input_text=document.getElementById('search-input').children[0];
    window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+input_text.value;
    console.log('');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var preusername = Kernal.getUserName();
    var username=preusername.replace(/<\/?.+?\/?>/g,'');
    for(var i=0;i<username.length;i++)
    {
        if(username[i])
        {

        }
    }
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">'+ username +'</span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}