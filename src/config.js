exports.config = {
  type: 'list',
  name: 'project', // 存储当前问题回答的变量
  message: '请选择项目类型：', // 问题的描述
  choices: [
    {
      name: '管理后台',
      value: 1,
      children: {
        type: 'list',
        name: 'template',
        message: '请选择模板：',
        choices: [
          {
            name: 'react-admin-template-ant',
            value: 'https://github.com/luozyiii/react-admin-template-ant.git',
          },
          {
            name: 'vue-admin-template-element',
            value: 'https://github.com/luozyiii/vue-admin-template-element',
          },
        ],
      },
    },
    {
      name: 'H5项目',
      value: 2,
      children: {
        type: 'list',
        name: 'template',
        message: '请选择模板：',
        choices: [
          {
            name: 'H5-01',
            value: 'https://github.com/luozyiii/blueming-cli.git',
          },
          {
            name: 'H5-02',
            value: 'https://github.com/luozyiii/blueming-cli.git',
          },
        ],
      },
    },
    {
      name: '小程序',
      value: 3,
      children: {
        type: 'list',
        name: 'template',
        message: '请选择模板：',
        choices: [
          {
            name: '小程序01',
            value: 'https://github.com/luozyiii/blueming-cli.git',
          },
          {
            name: '小程序02',
            value: 'https://github.com/luozyiii/blueming-cli.git',
          },
        ],
      },
    },
  ],
};
