import{_ as n,c as a,a as e,o as l}from"./app-6yCLqbyP.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="mysql-数据库服务端" tabindex="-1"><a class="header-anchor" href="#mysql-数据库服务端"><span>MySQL:数据库服务端</span></a></h1><h2 id="服务模式" tabindex="-1"><a class="header-anchor" href="#服务模式"><span>服务模式</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 进入文件夹</span></span>
<span class="line"><span class="token builtin class-name">cd</span> bin</span>
<span class="line"><span class="token comment"># 初始化数据库（记住初始密码）</span></span>
<span class="line">mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--console</span></span>
<span class="line"><span class="token comment"># 安装服务（管理员权限）</span></span>
<span class="line">mysqld <span class="token parameter variable">--install</span> mysql</span>
<span class="line"><span class="token comment"># 启动服务（管理员权限）</span></span>
<span class="line">net start mysql</span>
<span class="line"><span class="token comment"># 打开数据库控制台（使用初始密码登录）</span></span>
<span class="line">mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span></span>
<span class="line"><span class="token comment"># 修改数据库密码（示例为password）</span></span>
<span class="line">ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># 停止服务（管理员权限）</span></span>
<span class="line">net stop mysql</span>
<span class="line"><span class="token comment"># 卸载服务（管理员权限）</span></span>
<span class="line">mysqld <span class="token parameter variable">--remove</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="非服务模式" tabindex="-1"><a class="header-anchor" href="#非服务模式"><span>非服务模式</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 进入文件夹</span></span>
<span class="line"><span class="token builtin class-name">cd</span> bin</span>
<span class="line"><span class="token comment"># 初始化数据库（记住初始密码）</span></span>
<span class="line">mysqld <span class="token parameter variable">--initialize</span> <span class="token parameter variable">--console</span></span>
<span class="line"><span class="token comment"># 打开数据库控制台（使用初始密码登录）</span></span>
<span class="line">mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span></span>
<span class="line"><span class="token comment"># 修改数据库密码（示例为password）</span></span>
<span class="line">ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># 运行数据库</span></span>
<span class="line">mysqld <span class="token parameter variable">--standalone</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(i,[["render",p],["__file","MySQL.html.vue"]]),d=JSON.parse('{"path":"/guide/MySQL.html","title":"MySQL:数据库服务端","lang":"zn-CN","frontmatter":{},"headers":[{"level":2,"title":"服务模式","slug":"服务模式","link":"#服务模式","children":[]},{"level":2,"title":"非服务模式","slug":"非服务模式","link":"#非服务模式","children":[]}],"git":{"updatedTime":1734712978000,"contributors":[{"name":"PZJ","email":"68857304+PZJPZJPZJ@users.noreply.github.com","commits":3,"url":"https://github.com/PZJ"}]},"filePathRelative":"guide/MySQL.md"}');export{r as comp,d as data};
