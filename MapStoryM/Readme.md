该JS文件可以实现QuantumultX(非Quantumult)不拔卡玩枫之谷M。

你需要先走一遍拔卡教程，网上有很多，完整下载了枫之谷M之后本JS文件才有效。

运行QX，开启Rewrite和MitM，安装并信任证书。

在我的iphone/Quantumult X/Scripts中新建MapStoryM文件夹，将本js文件下载到该目录。

在配置文件[rewrite_local]项中添加^https://m-api.nexon.com/sdk/enterToy.nx url script-response-body MapStroyM/QX-MapStoryM.js
在hostname中添加m-api.nexon.com。

之后愉快的玩耍吧。
