之前在一次面试过程中，被问到前后端如何实现记住密码功能，所以自己也试着做，这是纯js做的。

### 遇到的问题
- chrome浏览器下不支持js操作cookie，解决：自己一般使用的是chrome，所以根本不知道，结果百度之后，说将其部署到服务器上可解决这个问题
- 在将项目部署到tomcat服务器上，访问出现404错误，解决：之前自己都是将文件放在webapps目录下，这次不行，就将其放在ROOT目录下
- 部署成功之后，在浏览器中调试，只能存cookie，不能取cookie，解决：自己将放在ROOT目录下的文件，放在Sublime Text编辑器中编辑，在浏览器中访问的时候，刷新页面出现412错误，针对这个问题，可能是浏览器卡顿问题
后来重启浏览器就没问题了。然后我测试的时候，打印getCookie的值还是空，后来我将ROOT目录下的文件删除了，重新放了一份，重启tomcat，就ok了。
