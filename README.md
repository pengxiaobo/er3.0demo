ER3.0业务逻辑实现框架
=========
ER3.0业务逻辑实现框架
本文档和代码将展示一个业务逻辑在ER3.0下的实现框架。
### main.html
- 引用样式文件和基础框架类js库，如`esl`、`jquery`。
- 设定require的相关config，如baseUrl何packages。使用ER3.0框架至少需要在packages中指定`er`的源码路径。
- 调用程序入口src/main.js
- 搭建页面的整体框架。例如设置页头、页尾；一般预留#main的div作为后续Action页面的容器（如Action未指定container，则默认#main作为其容器）。

### src/main.js
- 作为整个项目的程序入口，加载整个项目所需的框架扩展（如common/extension/er）和类库（如interactive）
- 配置默认的Action
- 通过actionConf注册所有的Action
- 启动er监听

### src/actionConf.js
- actionConf.js作为整个项目的路由配置表，如果需要添加相应的路由，应该先在对应的功能目录下建立相应的actionConf做实际的路由映射，然后将相应的actionConf写入该配置文件，main.js读取该actionConf后，会加载其中配置的各个功能的actionConf，并遍历相应的actionConf中的路由配置进行路由映射

### src/controllerAlpha /actionConf.js
- ntrollerAlpha的路由配置表，这里会针对功能做相应的路由映射，通过src/actionConf进行路由代理

### src/controllerAlpha /index.tpl
- ontrollerAlpha/index功能的页面模板, 以<!-- target: targetName -->开始的一段内容，可以用targetName在indexView中指定对应的template。其中形如${key}的内容为待填充的字段

### src/controllerAlpha/index.js
- /controllerAlpha/index的Action，绑定相应的Model（indexModel）和View（indexView）
- indexAction作为er/Action的子类

### src/ controllerAlpha/indexModel.js
- /controllerAlpha/index的Model，绑定功能所需的datasource
- atasource中读取内容，并将indexView获取的模板中的${key}进行设置。可以留空不设置，但不可对不存在的${key}进行设置（否则该Action返回空）。
- indexModel作为er/Model的子类。

### src/controllerAlpha /indexView.js
- /controllerAlpha/index的View，绑定模板、UI层级的事件以及执行数据的渲染
- indexView作为er/View的子类。

