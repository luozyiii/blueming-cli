const fs = require('fs');
const program = require('commander'); // 令行界面模块
const inquirer = require('inquirer'); // 命令行交互询问模块
const chalk = require('chalk'); // 颜色增强模块
const shell = require('shelljs'); // shell命令
const ora = require('ora'); // 命令行加载效果
const gitClone = require('git-clone'); // git克隆模块

const projectType = require('./config.js').config; // 询问配置

program
// 版本选项
  .version(require('../package.json').version, '-v --version')
  .description('前端脚手架/CLI');

// create 命令
program
  .command('create <project-name>')
  .description('git pull a new project from a template')
  .action((projectName) => {
    if (fs.existsSync(projectName)) {
      console.log(chalk.red('文件夹名已被占用，请更换project-name重新创建'));
      return;
    }
    inquirer.prompt([projectType]).then((result) => {
      // 第二级询问
      function nextInquirer(list) {
        inquirer.prompt(list).then((endResult) => {
          const spinner = ora('模板下载中...');
          spinner.start(); // 显示加载状态

          const pwd = shell.pwd(); // 当前目录
          gitClone(Object.values(endResult), `${pwd}/${projectName}`, null, () => {
            spinner.stop(); // 隐藏加载状态
            // 强制递归删除.git目录信息
            shell.rm('-rf', `${pwd}/${projectName}/.git`);
            console.log(chalk.blue(`模板下载成功 cd ${projectName} && yarn`));
          });
        });
      }
      const list = projectType.choices.find((item) => item.value === result[projectType.name]).children;
      nextInquirer([list]);
    });
  });

// 输入的命令不存在
program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp();
    console.log(`  ${chalk.red(`Unknown command ${chalk.yellow(cmd)}.`)}`);
    console.log();
  });

// 定义commander的help方法
program.on('--help', () => {
  console.log();
  console.log(`  Run ${chalk.cyan('blueming <command> --help')} for detailed usage of given command.`);
  console.log();
});

// 解析命令行输入的参数
program.parse(process.argv);
