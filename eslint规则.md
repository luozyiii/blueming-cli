## 
1. `npm install eslint --save-dev` or `yarn add eslint -D`

2. 配置
`eslint --init`


### 问题
1. 解决error Expected linebreaks to be 'LF' but found 'CRLF' 问题  

eslintrc.js中 rules 添加  
`"linebreak-style": 0,`

2. Unexpected console statement  

eslintrc.js中 rules 添加  
`"no-console":"off"`

3. Line 10 exceeds the maximum line length of 100 

eslintrc.js中 rules 添加  
`"max-len" : ["error", {code : 300}],`
