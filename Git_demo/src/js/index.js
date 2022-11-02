import ajax from './ajax.js'
init();
// 初始化
function init() {
    ajax('get', '/api/userlist').then(({ flag, date }) => {
        if (flag) {
            drawlist(date);
        } else {
            alert('加载失败')
        }
    })
}
function drawlist(date) {
    const userlist = document.getElementById('userlist');
    userlist.innerHTML = ''
    const table = document.createElement('table');

    for (let i = 0; i < date.length; i++) {
        const tr = document.createElement('tr');

        for (let items in date[i]) {

            const td = document.createElement('td');
            td.innerText = date[i][items]
            tr.appendChild(td);
        }
        const td = document.createElement('td');
        const td1 = document.createElement('td');
        const a = document.createElement('a');
        const a1 = document.createElement('a');
        a.innerText = '删除';
        a1.innerText = '更新';
        a.onclick = deluser.bind(date[i].id);
        a1.onclick = upduser.bind(date[i]);
        a1.setAttribute('class', 'btn btn-primary');
        a1.setAttribute('data-bs-toggle', 'modal');
        a1.setAttribute('data-bs-target', '#myModal');
        td.appendChild(a)
        td1.appendChild(a1)
        tr.appendChild(td);
        tr.appendChild(td1);
        table.appendChild(tr);

    }
    userlist.appendChild(table)
}


function deluser() {
    if (confirm('确认删除吗？（此操作无法撤销！）')) {

        const id = this;
        console.log(id)
        ajax('get', '/api/deluser', { id }).then(({ flag }) => {
            if (flag) {
                alert("删除成功");
                init();
            }
        }
        )
    }
}
// 更新
function upduser() {
    const form = document.forms[0];
    const data = this;
    form.onsubmit = function (e) {
        e.preventDefault();
        if (form.newpwd.value == form.newpwd2.value) {
            ajax('get', '/api/updatelist', { id: data.id, password: form.pwd.value, newpassword: form.newpwd.value }).then(result => {
                if (result.flag) {
                    alert(result.msg);
                    location.assign('index.html')
                } else {
                    alert('密码有误，请重试');
                    form.reset()
                }
            })

        } else {
            alert('两次密码不一致！请重新输入');
            form.reset()
        }
    }

}