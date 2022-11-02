import ajax from './ajax';
import '../style/form.css';
import '../css/login.css';

if (module.hot) {
  module.hot.accept('../css/login.css')
}
// import './css/sass.scss'

const form = document.forms.login;

form.onsubmit = function (e) {
  e.preventDefault();

  ajax('post', 'http://127.0.0.1/api/login', {
    username: form.uid.value,
    password: form.pwd.value
  }).then(result => {
    console.log(result)
    if (result.flag) {
      alert('登录成功');
      location.assign('index.html');
      localStorage.setItem('token', result.token);
    } else {
      alert(result.msg);
    }
  }).catch(({ code }) => {
    console.log(code)
  })
}