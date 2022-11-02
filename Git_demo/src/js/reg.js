import ajax from './ajax';
import '../style/form.css';

const form = document.forms.reg;

form.onsubmit = function (e) {
  e.preventDefault();

  ajax('post', 'http://127.0.0.1/api/reg', {
    username: form.uid.value,
    password: form.pwd.value
  }).then(result => {
    console.log(result)
    if (result.flag) {
      alert('注册成功');
      location.assign('login.html')
    } else {
      alert(result.msg);
    }
  }).catch(({ code }) => {
    console.log(code)
  })
}