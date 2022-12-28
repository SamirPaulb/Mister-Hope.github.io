import{ac as s,F as r,G as c,D as e,M as a,ad as l,R as t,ae as i,V as n}from"./framework-541b0f59.js";const h={},p=e("h2",{id:"环境准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#环境准备","aria-hidden":"true"},"#"),t(" 环境准备")],-1),u=e("h3",{id:"vs-code-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vs-code-安装","aria-hidden":"true"},"#"),t(" VS Code 安装")],-1),_=i('<h4 id="开发指南" tabindex="-1"><a class="header-anchor" href="#开发指南" aria-hidden="true">#</a> 开发指南</h4><ol><li><p>使用 VS Code 打开项目文件夹。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请打开 VS Code 选择菜单栏中的 “文件-打开文件夹”，或在文件夹上 “右键——使用 VS Code 打开” 或在文件夹内部空白处 “右键——使用 VS Code 打开”。</p></div></li><li><p>打开终端(快捷键 <code>Ctrl + `</code> )。</p></li><li><p>在终端中输入相关指令即可执行相关功能。</p></li></ol><h3 id="git-安装" tabindex="-1"><a class="header-anchor" href="#git-安装" aria-hidden="true">#</a> Git 安装</h3>',3),m=e("h3",{id:"node-js-环境安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-js-环境安装","aria-hidden":"true"},"#"),t(" Node.js 环境安装")],-1),f=e("p",null,"请先安装 Node.js 并将 npm 与 Node.js 添加至 path。",-1),V=i('<h2 id="初始化版本库、下载网页代码并安装-npm-模块" tabindex="-1"><a class="header-anchor" href="#初始化版本库、下载网页代码并安装-npm-模块" aria-hidden="true">#</a> 初始化版本库、下载网页代码并安装 npm 模块</h2><ol><li><p>打开文件管理器窗口找到合适位置，并在地址栏输入 cmd，以在当前界面打开终端。</p></li><li><p>使用 <code>git clone git@github.com:Mister-Hope/vue-template.git</code> 克隆模板。</p></li><li><p>使用 VS Code 打开刚刚克隆出来的文件夹，按下 <code>Ctrl + `</code> 打开终端。</p></li><li><p>使用 <code>npm install</code> 命令安装模块。</p></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>npm 模块介绍</p><p>此处待补充。</p></div><h2 id="开发工具安装" tabindex="-1"><a class="header-anchor" href="#开发工具安装" aria-hidden="true">#</a> 开发工具安装</h2><p>Vue 官方提供的浏览器插件 VueTools 可以更好的帮助开发。</p>',5),x={href:"https://chrome.google.com/webstore/detail/nhdogjmejiglipccpnnnanhbledajbpd",target:"_blank",rel:"noopener noreferrer"};function b(v,g){const o=n("RouterLink"),d=n("ExternalLinkIcon");return r(),c("div",null,[p,u,e("ul",null,[e("li",null,[a(o,{to:"/software/vscode/install.html"},{default:l(()=>[t("安装 VS Code")]),_:1})])]),_,e("ul",null,[e("li",null,[a(o,{to:"/software/git/install.html"},{default:l(()=>[t("安装 Git")]),_:1})])]),m,f,e("ul",null,[e("li",null,[e("p",null,[a(o,{to:"/code/node-js/install.html"},{default:l(()=>[t("安装 Node.js")]),_:1})])]),e("li",null,[e("p",null,[a(o,{to:"/code/windows/env-variable.html"},{default:l(()=>[t("添加到 path")]),_:1})])])]),V,e("p",null,[t("使用 VPN 用 Chrome 打开"),e("a",x,[t("安装网址"),a(d)]),t("，安装 VueTools 开发工具")])])}const j=s(h,[["render",b],["__file","install.html.vue"]]);export{j as default};
