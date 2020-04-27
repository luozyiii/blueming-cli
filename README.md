## 前端脚手架/CLI-构建

>目录  
>/bin 脚本入口  
>/src 代码逻辑  

### 入门

1. 
`mkdir blueming-cli && cd blueming-cli && npm init`

2. package.json
```
"bin": {
    "blueming": "./bin/main.js"
},
```

3. Demo 
bin/index.js
```
#!/usr/bin/env node
// 指定用node执行脚本文件，/usr/bin/env 是告诉系统在PATH目录中查找node执行路径
require('../src/main.js')
```

src/main.js
`console.log("hello world")`

运行 node ./bin/index.js 

4. 发布  
执行npm link 发布到全局  

成功后可使用 blueming 指令

### 依赖
```
commander --命令行界面
inquirer  --命令行交互询问模块
chalk     --颜色增强模块(字体样式加粗等／字体颜色／背景颜色)
ora       --用于命令行上的加载效果
shelljs   --shell 命令
git-clone --git克隆模块
```

`yarn add commander inquirer chalk shelljs ora git-clone`

1. commander --命令行界面  
文档:https://www.npmjs.com/package/commander

```
const program = require('commander'); // 令行界面模块
program
    // 版本选项
    .version('1.0.0', '-v --version')
    .description('init...')
```

2. inquirer --命令行交互询问模块  
文档:https://www.npmjs.com/package/inquirer

```
const inquirer = require('inquirer');

const promptList = [
    // 具体交互内容
];

inquirer.prompt(promptList).then(answers => {
    console.log(answers); // 返回的结果
})

const promptList = [{
    type: 'input',
    message: '设置一个用户名:',
    name: 'name',
    default: "test_user" // 默认值
},{
    type: 'input',
    message: '请输入手机号:',
    name: 'phone',
    validate: function(val) {
        if(val.match(/\d{11}/g)) { // 校验位数
            return val;
        }
        return "请输入11位数字";
    }
}];
```

3. chalk --颜色增强模块(字体样式加粗等／字体颜色／背景颜色)  
文档:https://www.npmjs.com/package/chalk

```
const chalk = require('chalk');
console.log(chalk.red.bold.bgWhite('Hello World')); // 红色 + 加粗 + 背景白色
console.log(chalk`{red.bold.bgWhite Hello World}`);
```

4. sheeljs --用于命令行上的加载效果  
文档:https://www.npmjs.com/package/shelljs

```
const shell = require('shelljs'); 
shell.rm('-rf', 'dist'); // 删除dist 目录
```

5. ora 命令行加载效果 --用于命令行上的加载效果  
```
const ora = require('ora')
const spinner = ora('工程模板下载中...')
spinner.start()  //显示加载状态
setTimeout(()=>{
    spinner.stop()
},3000)
```

6. git-clone --git克隆模块  

### 使用流程

#### 脚手架/CLI
1. 拉取脚手架/CLI `git clone`
2. 安装依赖 `yarn`
3. 发布到全局 `npm link`

#### 创建项目
1. `blueming create project-name`
2. 选择模板类型
3. 选择具体模板
4. 下载完成后,进入该项目并下载依赖 
`cd project-name && yarn`

