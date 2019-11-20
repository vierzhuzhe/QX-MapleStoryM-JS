该JS文件可以实现QuantumultX(非Quantumult)不拔卡玩枫之谷M。

你需要先拔下手机卡，使用非大陆、韩国、日本的appleid下载枫之谷M(英文MapStoryM)。
下载完后必须挂代理再打开枫之谷，若出现维护页面，请重新下载枫之谷并换其它代理节点。
直到出现提示，需要你下载约2G文件才行。

完整下载了枫之谷M之后本JS文件才有效。

运行QX，开启Rewrite和MitM，安装并信任证书。

在我的iphone/Quantumult X/Scripts中新建MapStoryM文件夹，将本js文件下载到该目录。

在配置文件[rewrite_local]项中添加^https://m-api.nexon.com/sdk/enterToy.nx url script-response-body MapStroyM/QX-MapStoryM.js
在hostname中添加m-api.nexon.com。

之后愉快的玩耍吧。

最新的一次更新后，在拔卡下载2G文件时需要手机语言更改为繁体中文，下载完成后可切回简体。
