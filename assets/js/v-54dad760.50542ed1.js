"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[50003],{46954:(n,s,a)=>{a.r(s),a.d(s,{default:()=>q});var t=a(55511);const p={href:"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html",target:"_blank",rel:"noopener noreferrer"},e=(0,t.uE)('<h2 id="函数声明" tabindex="-1"><a class="header-anchor" href="#函数声明" aria-hidden="true">#</a> 函数声明</h2><p>在 JavaScript 中，有两种常见的定义函数的方式——函数声明(Function Declaration)和函数表达式(Function Expression):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 函数声明(Function Declaration)</span>\n<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 函数表达式(Function Expression)</span>\n<span class="token keyword">let</span> <span class="token function-variable function">mySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<strong>输入多余的(或者少于要求的)参数，是不被允许的</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数表达式" tabindex="-1"><a class="header-anchor" href="#函数表达式" aria-hidden="true">#</a> 函数表达式</h2><p>如果要我们现在写一个对函数表达式(Function Expression)的定义，可能会写成这样:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">mySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 <code>mySum</code>，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 <code>mySum</code> 添加类型，则应该是这样:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">mySum</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">number</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>\n  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n  y<span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意不要混淆了 TypeScript 中的 <code>=&gt;</code> 和 ES6 中的 <code>=&gt;</code>。</p><p>在 TypeScript 的类型定义中，<code>=&gt;</code> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。</p>',15),o=(0,t._)("code",null,"=>",-1),c={href:"http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},i=(0,t.uE)('<h2 id="用接口定义函数的形状" tabindex="-1"><a class="header-anchor" href="#用接口定义函数的形状" aria-hidden="true">#</a> 用接口定义函数的形状</h2><p>我们也可以使用接口的方式来定义一个函数需要符合的形状:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SearchFunc</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> mySearch<span class="token operator">:</span> SearchFunc<span class="token punctuation">;</span>\n<span class="token function-variable function">mySearch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>subString<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h2><p>前面提到，输入多余的(或者少于要求的)参数，是不允许的。那么如何定义可选的参数呢?</p><p>与接口中的可选属性类似，我们用 <code>?</code> 表示可选的参数:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>lastName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> firstName<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，可选参数必须接在必需参数后面。换句话说，<strong>可选参数后面不允许再出现必需参数了</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>firstName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> lastName<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数默认值" tabindex="-1"><a class="header-anchor" href="#参数默认值" aria-hidden="true">#</a> 参数默认值</h2><p>在 ES6 中，我们允许给函数的参数添加默认值，<strong>TypeScript 会将添加了默认值的参数识别为可选参数</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时就不受「可选参数必须接在必需参数后面」的限制了:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">&quot;Cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',14),l={href:"http://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC",target:"_blank",rel:"noopener noreferrer"},u=(0,t.uE)('<h2 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h2><p>ES6 中，可以使用 <code>...rest</code> 的方式获取函数中的剩余参数(rest 参数):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> <span class="token operator">...</span>items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，<code>items</code> 是一个数组。所以我们可以用数组的类型来定义它:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span>array<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span>items<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),r={href:"http://es6.ruanyifeng.com/#docs/function#rest%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},k=(0,t.uE)('<h2 id="重载" tabindex="-1"><a class="header-anchor" href="#重载" aria-hidden="true">#</a> 重载</h2><p>重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。</p><p>比如，我们需要实现一个函数 <code>reverse</code>，输入数字 <code>123</code> 的时候，输出反转的数字 <code>321</code>，输入字符串 <code>&#39;hello&#39;</code> 的时候，输出反转的字符串 <code>&#39;olleh&#39;</code>。</p><p>利用联合类型，我们可以这么实现:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。</p><p>这时，我们可以使用重载定义多个 <code>reverse</code> 的函数类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，我们重复定义了多次函数 <code>reverse</code>，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。</p><p>注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',11),d={href:"http://www.typescriptlang.org/docs/handbook/functions.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.typescriptlang.org/docs/handbook/interfaces.html#function-types",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},g={href:"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/",target:"_blank",rel:"noopener noreferrer"},f={href:"http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},y={href:"http://es6.ruanyifeng.com/#docs/function#%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC",target:"_blank",rel:"noopener noreferrer"},h={href:"http://es6.ruanyifeng.com/#docs/function#rest%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},w={},q=(0,a(61935).Z)(w,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("blockquote",null,[(0,t._)("p",null,[(0,t._)("a",p,[(0,t.Uk)("函数是 JavaScript 中的一等公民"),(0,t.Wm)(a)])])]),(0,t.kq)(" more "),e,(0,t._)("p",null,[(0,t.Uk)("在 ES6 中，"),o,(0,t.Uk)(" 叫做箭头函数，应用十分广泛，可以参考 "),(0,t._)("a",c,[(0,t.Uk)("ES6 中的箭头函数"),(0,t.Wm)(a)]),(0,t.Uk)("。")]),i,(0,t._)("blockquote",null,[(0,t._)("p",null,[(0,t.Uk)("关于默认参数，可以参考 "),(0,t._)("a",l,[(0,t.Uk)("ES6 中函数参数的默认值"),(0,t.Wm)(a)]),(0,t.Uk)("。")])]),u,(0,t._)("p",null,[(0,t.Uk)("注意，rest 参数只能是最后一个参数，关于 rest 参数，可以参考 "),(0,t._)("a",r,[(0,t.Uk)("ES6 中的 rest 参数"),(0,t.Wm)(a)]),(0,t.Uk)("。")]),k,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",d,[(0,t.Uk)("Functions"),(0,t.Wm)(a)]),(0,t.Uk)("("),(0,t._)("a",m,[(0,t.Uk)("中文版"),(0,t.Wm)(a)]),(0,t.Uk)(")")]),(0,t._)("li",null,[(0,t._)("a",v,[(0,t.Uk)("Functions # Function Types"),(0,t.Wm)(a)]),(0,t.Uk)("("),(0,t._)("a",b,[(0,t.Uk)("中文版"),(0,t.Wm)(a)]),(0,t.Uk)(")")]),(0,t._)("li",null,[(0,t._)("a",g,[(0,t.Uk)("JS 函数式编程指南"),(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",f,[(0,t.Uk)("ES6 中的箭头函数"),(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",y,[(0,t.Uk)("ES6 中函数参数的默认值"),(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",h,[(0,t.Uk)("ES6 中的 rest 参数"),(0,t.Wm)(a)])])])])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},78149:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-54dad760","path":"/code/language/typescript/basics/type-of-function.html","title":"函数的类型","lang":"zh-CN","frontmatter":{"title":"函数的类型","icon":"function","category":["TypeScript"],"summary":"\\n函数是 JavaScript 中的一等公民\\n\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/typescript/basics/type-of-function.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"函数的类型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2020-11-08T17:25:55.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2020-11-08T17:25:55.000Z"}]]},"excerpt":"<blockquote>\\n<p><a href=\\"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">函数是 JavaScript 中的一等公民<ExternalLinkIcon/></a></p>\\n</blockquote>\\n","headers":[{"level":2,"title":"函数声明","slug":"函数声明","link":"#函数声明","children":[]},{"level":2,"title":"函数表达式","slug":"函数表达式","link":"#函数表达式","children":[]},{"level":2,"title":"用接口定义函数的形状","slug":"用接口定义函数的形状","link":"#用接口定义函数的形状","children":[]},{"level":2,"title":"可选参数","slug":"可选参数","link":"#可选参数","children":[]},{"level":2,"title":"参数默认值","slug":"参数默认值","link":"#参数默认值","children":[]},{"level":2,"title":"剩余参数","slug":"剩余参数","link":"#剩余参数","children":[]},{"level":2,"title":"重载","slug":"重载","link":"#重载","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1604856355000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":4.61,"words":1382},"filePathRelative":"code/language/typescript/basics/type-of-function.md","localizedDate":"2020年6月3日"}')}}]);