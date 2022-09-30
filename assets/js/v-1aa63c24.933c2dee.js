"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[75088],{74158:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var t=a(55511);const p=(0,t._)("p",null,[(0,t.Uk)("Python 内建了 "),(0,t._)("code",null,"map()"),(0,t.Uk)(" 和 "),(0,t._)("code",null,"reduce()"),(0,t.Uk)(" 函数。")],-1),e={href:"http://research.google.com/archive/mapreduce.html",target:"_blank",rel:"noopener noreferrer"},o=(0,t._)("blockquote",null,[(0,t._)("p",null,"访问需要科学上网。")],-1),c=(0,t._)("p",null,[(0,t.Uk)("我们先看 map。"),(0,t._)("code",null,"map()"),(0,t.Uk)(" 函数接收两个参数，一个是函数，一个是 "),(0,t._)("code",null,"Iterable"),(0,t.Uk)("，map 将传入的函数依次作用到序列的每个元素，并把结果作为新的 "),(0,t._)("code",null,"Iterator"),(0,t.Uk)(" 返回。")],-1),l=(0,t._)("p",null,[(0,t.Uk)("举例说明，比如我们有一个函数 "),(0,t._)("span",{class:"katex"},[(0,t._)("span",{class:"katex-mathml"},[(0,t._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,t._)("semantics",null,[(0,t._)("mrow",null,[(0,t._)("mi",null,"f"),(0,t._)("mo",{stretchy:"false"},"("),(0,t._)("mi",null,"x"),(0,t._)("mo",{stretchy:"false"},")"),(0,t._)("mo",null,"="),(0,t._)("msup",null,[(0,t._)("mi",null,"x"),(0,t._)("mn",null,"2")])]),(0,t._)("annotation",{encoding:"application/x-tex"},"f(x)=x^2")])])]),(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,t._)("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),(0,t._)("span",{class:"mopen"},"("),(0,t._)("span",{class:"mord mathnormal"},"x"),(0,t._)("span",{class:"mclose"},")"),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,t._)("span",{class:"mrel"},"="),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.8141em"}}),(0,t._)("span",{class:"mord"},[(0,t._)("span",{class:"mord mathnormal"},"x"),(0,t._)("span",{class:"msupsub"},[(0,t._)("span",{class:"vlist-t"},[(0,t._)("span",{class:"vlist-r"},[(0,t._)("span",{class:"vlist",style:{height:"0.8141em"}},[(0,t._)("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[(0,t._)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,t._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,t._)("span",{class:"mord mtight"},"2")])])])])])])])])])]),(0,t.Uk)(" ，要把这个函数作用在一个 list "),(0,t._)("code",null,"[1, 2, 3, 4, 5, 6, 7, 8, 9]"),(0,t.Uk)(" 上，就可以用 "),(0,t._)("code",null,"map()"),(0,t.Uk)(" 实现如下:")],-1),u=(0,t.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>            f(x) = x * x\n\n                  │\n                  │\n  ┌───┬───┬───┬───┼───┬───┬───┬───┐\n  │   │   │   │   │   │   │   │   │\n  ▼   ▼   ▼   ▼   ▼   ▼   ▼   ▼   ▼\n\n[ 1   2   3   4   5   6   7   8   9 ]\n\n  │   │   │   │   │   │   │   │   │\n  │   │   │   │   │   │   │   │   │\n  ▼   ▼   ▼   ▼   ▼   ▼   ▼   ▼   ▼\n\n[ 1   4   9  16  25  36  49  64  81 ]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们用 Python 代码实现:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> x <span class="token operator">*</span> x\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>\n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),i=(0,t._)("p",null,[(0,t._)("code",null,"map()"),(0,t.Uk)(" 传入的第一个参数是 "),(0,t._)("span",{class:"katex"},[(0,t._)("span",{class:"katex-mathml"},[(0,t._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,t._)("semantics",null,[(0,t._)("mrow",null,[(0,t._)("mi",null,"f")]),(0,t._)("annotation",{encoding:"application/x-tex"},"f")])])]),(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),(0,t._)("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f")])])]),(0,t.Uk)(" ，即函数对象本身。由于结果 "),(0,t._)("code",null,"r"),(0,t.Uk)(" 是一个 Iterator，Iterator 是惰性序列，因此通过 "),(0,t._)("code",null,"list()"),(0,t.Uk)(" 函数让它把整个序列都计算出来并返回一个 list。")],-1),r=(0,t.uE)('<p>您可能会想，不需要 <code>map()</code> 函数，写一个循环，也可以计算出结果:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>L <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span>\n    L<span class="token punctuation">.</span>append<span class="token punctuation">(</span>f<span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>L<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),k=(0,t._)("p",null,[(0,t.Uk)("的确可以，但是，从上面的循环代码，能一眼看明白“把 "),(0,t._)("span",{class:"katex"},[(0,t._)("span",{class:"katex-mathml"},[(0,t._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,t._)("semantics",null,[(0,t._)("mrow",null,[(0,t._)("mi",null,"f"),(0,t._)("mo",{stretchy:"false"},"("),(0,t._)("mi",null,"x"),(0,t._)("mo",{stretchy:"false"},")")]),(0,t._)("annotation",{encoding:"application/x-tex"},"f(x)")])])]),(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,t._)("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),(0,t._)("span",{class:"mopen"},"("),(0,t._)("span",{class:"mord mathnormal"},"x"),(0,t._)("span",{class:"mclose"},")")])])]),(0,t.Uk)(" 作用在 list 的每一个元素并把结果生成一个新的 list”吗?")],-1),d=(0,t._)("p",null,[(0,t.Uk)("所以，"),(0,t._)("code",null,"map()"),(0,t.Uk)(" 作为高阶函数，事实上它把运算规则抽象了，因此，我们不但可以计算简单的 "),(0,t._)("span",{class:"katex"},[(0,t._)("span",{class:"katex-mathml"},[(0,t._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,t._)("semantics",null,[(0,t._)("mrow",null,[(0,t._)("mi",null,"f"),(0,t._)("mo",{stretchy:"false"},"("),(0,t._)("mi",null,"x"),(0,t._)("mo",{stretchy:"false"},")"),(0,t._)("mo",null,"="),(0,t._)("msup",null,[(0,t._)("mi",null,"x"),(0,t._)("mn",null,"2")])]),(0,t._)("annotation",{encoding:"application/x-tex"},"f(x)=x^2")])])]),(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,t._)("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),(0,t._)("span",{class:"mopen"},"("),(0,t._)("span",{class:"mord mathnormal"},"x"),(0,t._)("span",{class:"mclose"},")"),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,t._)("span",{class:"mrel"},"="),(0,t._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.8141em"}}),(0,t._)("span",{class:"mord"},[(0,t._)("span",{class:"mord mathnormal"},"x"),(0,t._)("span",{class:"msupsub"},[(0,t._)("span",{class:"vlist-t"},[(0,t._)("span",{class:"vlist-r"},[(0,t._)("span",{class:"vlist",style:{height:"0.8141em"}},[(0,t._)("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[(0,t._)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,t._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,t._)("span",{class:"mord mtight"},"2")])])])])])])])])])]),(0,t.Uk)(" ，还可以计算任意复杂的函数，比如，把这个 list 所有数字转为字符串:")],-1),m=(0,t.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要一行代码。</p><p>再看 <code>reduce</code> 的用法。<code>reduce</code> 把一个函数作用在一个序列 <code>[x1, x2, x3, ...]</code> 上，这个函数必须接收两个参数，<code>reduce</code> 把结果继续和序列的下一个元素做累积计算，其效果就是:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">reduce</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token punctuation">[</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> x3<span class="token punctuation">,</span> x4<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> f<span class="token punctuation">(</span>f<span class="token punctuation">(</span>f<span class="token punctuation">(</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">)</span><span class="token punctuation">,</span> x3<span class="token punctuation">)</span><span class="token punctuation">,</span> x4<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比方说对一个序列求和，就可以用 reduce 实现:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> x <span class="token operator">+</span> y\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token number">25</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然求和运算可以直接用 Python 内建函数 <code>sum()</code>，没必要动用 <code>reduce</code>。</p><p>但是如果要把序列 <code>[1, 3, 5, 7, 9]</code> 变换成整数 13579，<code>reduce</code> 就可以派上用场:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> x <span class="token operator">*</span><span class="token number">10</span> <span class="token operator">+</span> y\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token number">13579</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子本身没多大用处，但是，如果考虑到字符串 <code>str</code> 也是一个序列，对上面的例子稍加改动，配合 <code>map()</code>，我们就可以写出把 <code>str</code> 转换为 <code>int</code> 的函数:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> x<span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> y\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">char2num</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     digits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">}</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">return</span> digits<span class="token punctuation">[</span>s<span class="token punctuation">]</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token builtin">map</span><span class="token punctuation">(</span>char2num<span class="token punctuation">,</span> <span class="token string">&#39;13579&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token number">13579</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整理成一个 <code>str2int</code> 的函数就是:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>\n\nDIGITS <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">}</span>\n\n<span class="token keyword">def</span> <span class="token function">str2int</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> y\n    <span class="token keyword">def</span> <span class="token function">char2num</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> DIGITS<span class="token punctuation">[</span>s<span class="token punctuation">]</span>\n    <span class="token keyword">return</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token builtin">map</span><span class="token punctuation">(</span>char2num<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以用 lambda 函数进一步简化成:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> functools <span class="token keyword">import</span> <span class="token builtin">reduce</span>\n\nDIGITS <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;6&#39;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;7&#39;</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;8&#39;</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">}</span>\n\n<span class="token keyword">def</span> <span class="token function">char2num</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> DIGITS<span class="token punctuation">[</span>s<span class="token punctuation">]</span>\n\n<span class="token keyword">def</span> <span class="token function">str2int</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token builtin">reduce</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> x <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> y<span class="token punctuation">,</span> <span class="token builtin">map</span><span class="token punctuation">(</span>char2num<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，假设 Python 没有提供 <code>int()</code> 函数，您完全可以自己写一个把字符串转化为整数的函数，而且只需要几行代码!</p><p>lambda 函数的用法在后面介绍。</p>',17),g={},b=(0,a(61935).Z)(g,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[p,(0,t._)("p",null,[(0,t.Uk)("如果您读过 Google 的那篇大名鼎鼎的论文 "),(0,t._)("a",e,[(0,t.Uk)("“MapReduce: Simplified Data Processing on Large Clusters”"),(0,t.Wm)(a)]),(0,t.Uk)("，您就能大概明白 map / reduce 的概念。")]),o,(0,t.kq)(" more "),c,l,u,i,r,k,d,m])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},53560:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-1aa63c24","path":"/code/language/python/functional-programming/high-order-function/map-and-reduce.html","title":"map / reduce","lang":"zh-CN","frontmatter":{"title":"map / reduce","icon":"map","author":"廖雪峰","date":"2020-05-31T00:00:00.000Z","category":["Python"],"summary":"Python 内建了 map() 和 reduce() 函数。\\n如果您读过 Google 的那篇大名鼎鼎的论文 “MapReduce: Simplified Data Processing on Large Clusters”，您就能大概明白 map / reduce 的概念。\\n\\n访问需要科学上网。\\n\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/functional-programming/high-order-function/map-and-reduce.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"map / reduce"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"<p>Python 内建了 <code v-pre>map()</code> 和 <code v-pre>reduce()</code> 函数。</p>\\n<p>如果您读过 Google 的那篇大名鼎鼎的论文 <a href=\\"http://research.google.com/archive/mapreduce.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">“MapReduce: Simplified Data Processing on Large Clusters”<ExternalLinkIcon/></a>，您就能大概明白 map / reduce 的概念。</p>\\n<blockquote>\\n<p>访问需要科学上网。</p>\\n</blockquote>\\n","headers":[],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":6},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":3.19,"words":958},"filePathRelative":"code/language/python/functional-programming/high-order-function/map-and-reduce.md","localizedDate":"2020年5月31日"}')}}]);