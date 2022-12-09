"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[73353],{67840:(s,a,n)=>{n.r(a),n.d(a,{default:()=>y});var l=n(16492);const t=(0,l._)("p",null,"函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。",-1),e=(0,l._)("p",null,[(0,l.Uk)("我们知道圆的面积计算公式为: "),(0,l._)("span",{class:"katex"},[(0,l._)("span",{class:"katex-mathml"},[(0,l._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,l._)("semantics",null,[(0,l._)("mrow",null,[(0,l._)("mi",null,"S"),(0,l._)("mo",null,"="),(0,l._)("mi",null,"π"),(0,l._)("msup",null,[(0,l._)("mi",null,"r"),(0,l._)("mn",null,"2")])]),(0,l._)("annotation",{encoding:"application/x-tex"},"S = \\pi r^2")])])]),(0,l._)("span",{class:"katex-html","aria-hidden":"true"},[(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.6833em"}}),(0,l._)("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),(0,l._)("span",{class:"mrel"},"="),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.8141em"}}),(0,l._)("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),(0,l._)("span",{class:"mord"},[(0,l._)("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),(0,l._)("span",{class:"msupsub"},[(0,l._)("span",{class:"vlist-t"},[(0,l._)("span",{class:"vlist-r"},[(0,l._)("span",{class:"vlist",style:{height:"0.8141em"}},[(0,l._)("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[(0,l._)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,l._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l._)("span",{class:"mord mtight"},"2")])])])])])])])])])])],-1),m=(0,l._)("p",null,[(0,l.Uk)("当我们知道半径 "),(0,l._)("span",{class:"katex"},[(0,l._)("span",{class:"katex-mathml"},[(0,l._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,l._)("semantics",null,[(0,l._)("mrow",null,[(0,l._)("mi",null,"r")]),(0,l._)("annotation",{encoding:"application/x-tex"},"r")])])]),(0,l._)("span",{class:"katex-html","aria-hidden":"true"},[(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.4306em"}}),(0,l._)("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),(0,l.Uk)(" 的值时，就可以根据公式计算出面积。假设我们需要计算 3 个不同大小的圆的面积:")],-1),p=(0,l.uE)('<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> r1 <span class="token operator">=</span> <span class="token number">12.34</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> r2 <span class="token operator">=</span> <span class="token number">9.08</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> r3 <span class="token operator">=</span> <span class="token number">73.1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token number">3.14</span> <span class="token operator">*</span> r1 <span class="token operator">*</span> r1<span class="token punctuation">;</span>\n<span class="token keyword">const</span> s2 <span class="token operator">=</span> <span class="token number">3.14</span> <span class="token operator">*</span> r2 <span class="token operator">*</span> r2<span class="token punctuation">;</span>\n<span class="token keyword">const</span> s3 <span class="token operator">=</span> <span class="token number">3.14</span> <span class="token operator">*</span> r3 <span class="token operator">*</span> r3<span class="token punctuation">;</span>\n</code></pre></div><p>当代码出现有规律的重复的时候，您就需要当心了，每次写 <code>3.14 *x* x</code> 不仅很麻烦，而且，如果要把 <code>3.14</code> 改成 <code>3.14159265359</code> 的时候，得全部替换。</p><p>有了函数，我们就不再每次写 <code>s = 3.14 *x* x</code>，而是写成更有意义的函数调用 <code>s = area_of_circle(x)</code>，而函数 <code>area_of_circle</code> 本身只需要写一次，就可以多次调用。</p><p>基本上所有的高级语言都支持函数，JavaScript 也不例外。JavaScript 的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。</p><h2 id="抽象" tabindex="-1"><a class="header-anchor" href="#抽象" aria-hidden="true">#</a> 抽象</h2><p>抽象是数学中非常常见的概念。举个例子:</p>',6),c=(0,l._)("p",null,[(0,l.Uk)("计算数列的和，比如: "),(0,l._)("span",{class:"katex"},[(0,l._)("span",{class:"katex-mathml"},[(0,l._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,l._)("semantics",null,[(0,l._)("mrow",null,[(0,l._)("mn",null,"1"),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"2"),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"3"),(0,l._)("mo",null,"+"),(0,l._)("mo",null,"⋯"),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"100")]),(0,l._)("annotation",{encoding:"application/x-tex"},"1 + 2 + 3 + \\dots + 100")])])]),(0,l._)("span",{class:"katex-html","aria-hidden":"true"},[(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"mord"},"1"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"mord"},"2"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"mord"},"3"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"minner"},"⋯"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,l._)("span",{class:"mord"},"100")])])]),(0,l.Uk)("，写起来十分不方便，于是数学家发明了求和符号 "),(0,l._)("span",{class:"katex"},[(0,l._)("span",{class:"katex-mathml"},[(0,l._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,l._)("semantics",null,[(0,l._)("mrow",null,[(0,l._)("mo",null,"∑")]),(0,l._)("annotation",{encoding:"application/x-tex"},"\\sum\\limits")])])]),(0,l._)("span",{class:"katex-html","aria-hidden":"true"},[(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l._)("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑")])])]),(0,l.Uk)("，可以把 "),(0,l._)("span",{class:"katex"},[(0,l._)("span",{class:"katex-mathml"},[(0,l._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,l._)("semantics",null,[(0,l._)("mrow",null,[(0,l._)("mn",null,"1"),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"2"),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"3"),(0,l._)("mo",null,"+"),(0,l._)("mo",null,"⋯"),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"100")]),(0,l._)("annotation",{encoding:"application/x-tex"},"1 + 2 + 3 + \\dots + 100")])])]),(0,l._)("span",{class:"katex-html","aria-hidden":"true"},[(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"mord"},"1"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"mord"},"2"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"mord"},"3"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"minner"},"⋯"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.6444em"}}),(0,l._)("span",{class:"mord"},"100")])])]),(0,l.Uk)(" 记作 "),(0,l._)("span",{class:"katex"},[(0,l._)("span",{class:"katex-mathml"},[(0,l._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,l._)("semantics",null,[(0,l._)("mrow",null,[(0,l._)("msubsup",null,[(0,l._)("mo",null,"∑"),(0,l._)("mrow",null,[(0,l._)("mi",null,"n"),(0,l._)("mo",null,"="),(0,l._)("mn",null,"1")]),(0,l._)("mn",null,"100")]),(0,l._)("mi",null,"n")]),(0,l._)("annotation",{encoding:"application/x-tex"},"\\sum\\limits _{n=1}^{100} n")])])]),(0,l._)("span",{class:"katex-html","aria-hidden":"true"},[(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"2.4682em","vertical-align":"-0.9671em"}}),(0,l._)("span",{class:"mop op-limits"},[(0,l._)("span",{class:"vlist-t vlist-t2"},[(0,l._)("span",{class:"vlist-r"},[(0,l._)("span",{class:"vlist",style:{height:"1.5011em"}},[(0,l._)("span",{style:{top:"-2.1329em","margin-left":"0em"}},[(0,l._)("span",{class:"pstrut",style:{height:"3em"}}),(0,l._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l._)("span",{class:"mord mtight"},[(0,l._)("span",{class:"mord mathnormal mtight"},"n"),(0,l._)("span",{class:"mrel mtight"},"="),(0,l._)("span",{class:"mord mtight"},"1")])])]),(0,l._)("span",{style:{top:"-3em"}},[(0,l._)("span",{class:"pstrut",style:{height:"3em"}}),(0,l._)("span",null,[(0,l._)("span",{class:"mop op-symbol small-op"},"∑")])]),(0,l._)("span",{style:{top:"-3.95em","margin-left":"0em"}},[(0,l._)("span",{class:"pstrut",style:{height:"3em"}}),(0,l._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l._)("span",{class:"mord mtight"},[(0,l._)("span",{class:"mord mtight"},"100")])])])]),(0,l._)("span",{class:"vlist-s"},"​")]),(0,l._)("span",{class:"vlist-r"},[(0,l._)("span",{class:"vlist",style:{height:"0.9671em"}},[(0,l._)("span")])])])]),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),(0,l._)("span",{class:"mord mathnormal"},"n")])])]),(0,l.Uk)(" 。")],-1),i=(0,l._)("p",null,[(0,l.Uk)("这种抽象记法非常强大，因为我们看到 "),(0,l._)("span",{class:"katex"},[(0,l._)("span",{class:"katex-mathml"},[(0,l._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,l._)("semantics",null,[(0,l._)("mrow",null,[(0,l._)("mo",null,"∑")]),(0,l._)("annotation",{encoding:"application/x-tex"},"\\sum\\limits")])])]),(0,l._)("span",{class:"katex-html","aria-hidden":"true"},[(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l._)("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑")])])]),(0,l.Uk)(" 就可以理解成求和，而不是还原成低级的加法运算。")],-1),r=(0,l._)("p",null,[(0,l.Uk)("而且，这种抽象记法是可扩展的，比如: "),(0,l._)("span",{class:"katex"},[(0,l._)("span",{class:"katex-mathml"},[(0,l._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,l._)("semantics",null,[(0,l._)("mrow",null,[(0,l._)("msubsup",null,[(0,l._)("mo",null,"∑"),(0,l._)("mrow",null,[(0,l._)("mi",null,"n"),(0,l._)("mo",null,"="),(0,l._)("mn",null,"1")]),(0,l._)("mn",null,"100")]),(0,l._)("mo",{stretchy:"false"},"("),(0,l._)("msup",null,[(0,l._)("mi",null,"n"),(0,l._)("mn",null,"2")]),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"1"),(0,l._)("mo",{stretchy:"false"},")")]),(0,l._)("annotation",{encoding:"application/x-tex"},"\\sum\\limits _{n=1}^{100} (n^2+1)")])])]),(0,l._)("span",{class:"katex-html","aria-hidden":"true"},[(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"2.4682em","vertical-align":"-0.9671em"}}),(0,l._)("span",{class:"mop op-limits"},[(0,l._)("span",{class:"vlist-t vlist-t2"},[(0,l._)("span",{class:"vlist-r"},[(0,l._)("span",{class:"vlist",style:{height:"1.5011em"}},[(0,l._)("span",{style:{top:"-2.1329em","margin-left":"0em"}},[(0,l._)("span",{class:"pstrut",style:{height:"3em"}}),(0,l._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l._)("span",{class:"mord mtight"},[(0,l._)("span",{class:"mord mathnormal mtight"},"n"),(0,l._)("span",{class:"mrel mtight"},"="),(0,l._)("span",{class:"mord mtight"},"1")])])]),(0,l._)("span",{style:{top:"-3em"}},[(0,l._)("span",{class:"pstrut",style:{height:"3em"}}),(0,l._)("span",null,[(0,l._)("span",{class:"mop op-symbol small-op"},"∑")])]),(0,l._)("span",{style:{top:"-3.95em","margin-left":"0em"}},[(0,l._)("span",{class:"pstrut",style:{height:"3em"}}),(0,l._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l._)("span",{class:"mord mtight"},[(0,l._)("span",{class:"mord mtight"},"100")])])])]),(0,l._)("span",{class:"vlist-s"},"​")]),(0,l._)("span",{class:"vlist-r"},[(0,l._)("span",{class:"vlist",style:{height:"0.9671em"}},[(0,l._)("span")])])])]),(0,l._)("span",{class:"mopen"},"("),(0,l._)("span",{class:"mord"},[(0,l._)("span",{class:"mord mathnormal"},"n"),(0,l._)("span",{class:"msupsub"},[(0,l._)("span",{class:"vlist-t"},[(0,l._)("span",{class:"vlist-r"},[(0,l._)("span",{class:"vlist",style:{height:"0.8141em"}},[(0,l._)("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[(0,l._)("span",{class:"pstrut",style:{height:"2.7em"}}),(0,l._)("span",{class:"sizing reset-size6 size3 mtight"},[(0,l._)("span",{class:"mord mtight"},"2")])])])])])])]),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l._)("span",{class:"mord"},"1"),(0,l._)("span",{class:"mclose"},")")])])])],-1),_=(0,l._)("p",null,"还原成加法运算就变成了:",-1),o=(0,l._)("p",null,[(0,l._)("span",{class:"katex"},[(0,l._)("span",{class:"katex-mathml"},[(0,l._)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[(0,l._)("semantics",null,[(0,l._)("mrow",null,[(0,l._)("mo",{stretchy:"false"},"("),(0,l._)("mn",null,"1"),(0,l._)("mo",null,"×"),(0,l._)("mn",null,"1"),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"1"),(0,l._)("mo",{stretchy:"false"},")"),(0,l._)("mo",null,"+"),(0,l._)("mo",{stretchy:"false"},"("),(0,l._)("mn",null,"2"),(0,l._)("mo",null,"×"),(0,l._)("mn",null,"2"),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"1"),(0,l._)("mo",{stretchy:"false"},")"),(0,l._)("mo",null,"+"),(0,l._)("mo",null,"⋯"),(0,l._)("mo",null,"+"),(0,l._)("mo",{stretchy:"false"},"("),(0,l._)("mn",null,"100"),(0,l._)("mo",null,"×"),(0,l._)("mn",null,"100"),(0,l._)("mo",null,"+"),(0,l._)("mn",null,"1"),(0,l._)("mo",{stretchy:"false"},")")]),(0,l._)("annotation",{encoding:"application/x-tex"},"(1 × 1 + 1) + (2 × 2 + 1) + \\dots + (100 × 100 + 1)")])])]),(0,l._)("span",{class:"katex-html","aria-hidden":"true"},[(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l._)("span",{class:"mopen"},"("),(0,l._)("span",{class:"mord"},"1"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"×"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"mord"},"1"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l._)("span",{class:"mord"},"1"),(0,l._)("span",{class:"mclose"},")"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l._)("span",{class:"mopen"},"("),(0,l._)("span",{class:"mord"},"2"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"×"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"mord"},"2"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l._)("span",{class:"mord"},"1"),(0,l._)("span",{class:"mclose"},")"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"minner"},"⋯"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l._)("span",{class:"mopen"},"("),(0,l._)("span",{class:"mord"},"100"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"×"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),(0,l._)("span",{class:"mord"},"100"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),(0,l._)("span",{class:"mbin"},"+"),(0,l._)("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),(0,l._)("span",{class:"base"},[(0,l._)("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),(0,l._)("span",{class:"mord"},"1"),(0,l._)("span",{class:"mclose"},")")])])])],-1),h=(0,l._)("p",null,"可见，借助抽象，我们才能不关心底层的具体计算过程，而直接在更高的层次上思考问题。",-1),g=(0,l._)("p",null,"写计算机程序也是一样，函数就是最基本的一种代码抽象的方式。",-1),u={},y=(0,n(11164).Z)(u,[["render",function(s,a){return(0,l.wg)(),(0,l.iD)("div",null,[t,(0,l.kq)(" more "),e,m,p,c,i,r,_,o,h,g])}]])},11164:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,l]of a)n[s]=l;return n}},58092:(s,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l=JSON.parse('{"key":"v-417b4ca8","path":"/code/language/js/function/intro.html","title":"函数介绍","lang":"zh-CN","frontmatter":{"title":"函数介绍","icon":"info","date":"2019-10-01T00:00:00.000Z","category":["JavaScript"],"description":"函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/function/intro.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"函数介绍"}],["meta",{"property":"og:description","content":"函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-10-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"headers":[{"level":2,"title":"抽象","slug":"抽象","link":"#抽象","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":3}]},"readingTime":{"minutes":1.7,"words":511},"localizedDate":"2019年10月1日","filePathRelative":"code/language/js/function/intro.md","excerpt":"<p>函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。</p>\\n","autoDesc":true}')}}]);