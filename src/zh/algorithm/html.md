---
sidebar: auto
sidebarDepth: 2
---
# 结构样式

## html
#### hypertext markup language  超文本标记语言
#### xml:   可扩展标记语言

```python
<!doctype html>  //声明文档类型(H5) 
<html lang="en"> //指定语言种类
<html> //包含整个文档的元素
<head> //定义网页的头部
	<meta charset="UTF-8">//meta标签为元信息标签 语言编码声明 
	<title>百度</title> //存放网页标题
</head>
<body>
	
</body>
</html> 
``` 
### 
### meta编码字符集
 * gb2312：国家标准第2312条  只能认识简体字，不认识繁体字
 * gbk：国家标准扩展版本  包含了亚洲字
 * unicode：万国  所有的国家的语言都包括了
 * utf-8： unicode的升级版  最常用的

### 超链接 a
a  超链接 (默认蓝色，有下划线) 指从一个网页指向一个目标的链接关系，目标可以是图片、网页等，是一对一的关系 <br>
href --路径/链接地址   如果为空链接 ,用"#"或"javascript:;" <br>
a标签的target属性的四个值 _self(默认)、_blank、_parent、_top <br>
_self 在当前页打开 <br>
_parent 在它当前的父窗口打开 <br>
_top 在最顶级窗口打开 <br>
 _new：始终在同一个新窗口中打开 <br>
_blank：点击一次打开一个新窗口 <br>

## css
### 伪类选择器
不是作用在标签上，而是作用在标签的状态上
* :link 未被访问过
* :visited 访问过后
* :hover 鼠标划过
* :active 鼠标按下
* :focus 获得焦点时状态

### 属性选择器
* E[att^=”val”] 匹配属性值以val开头的标签
* E[att*=”val”] 匹配属性值包含val的标签
* E[att$=”val”] 匹配属性值以val结尾的标签

### 盒模型
* Width 宽
* Height 高
* Padding 内边距
* Margin 外边距
* Border 边框 <br>
分为怪异模式和标准模式 解决怪异模式是在标签上加上doctype的设置就好了

### 清除浮动
清除浮动作用：确定浮动范围，不破坏页面布局
* 使用额外的标签clear:both
* 使用overflow属性
* 使用伪元素:after清除浮动

### h5新增选择器
H5新增表单属性 placeholder 提示文字
* :first-child 匹配父元素的第一个子元素
* :last-child 最后一个子元素
* :nth-child(n) 第n个子元素
* :nth-child(event) 偶数
* :nth-child(odd) 奇数
* :nth-child(2n) 2的倍数
* :nth-child(n+4) 大于等于4
* :nth-child(-n+4) 小于等于4
* :not 除了…

### H5新增表单控件
* type=
* number 只包含数字的输入框
* tel 电话类型
* email email类型
* url url类型
* date 日期
* month 月
* week 周
* search 搜索
* color 颜色
* range 拖动条/0-100的区间范围
* datetime-local  本地时间
* time   时间

### H5新增表单属性
* min
* max 
* step
* placeholder
* form
* list
* required  使文本框为必填项
* autofocus  自动获取焦点
* pattern  规定用于验证输入字段的模式
* accept="image"  限制上传文件类型 

### H5新增标签/元素  语义化
  主体：
   * section  表示文章中的一个小节
   * article  文章中一条独立的记录，强调“独立性”
   * nav      导航
   * aside    侧边栏 
   * time     时间/日期  行内元素
<br>

  非主体：
   * header   头部/页眉
   * footer   页脚
   * address  版权、作者、联系信息  文本倾斜
   * main     主体(网页中只能出现一次)
   * hgroup   组合标题(对标题进行组合)

   video  视频 <br>
   audio  音频

### css3新增属性

### px、rpx、rem



## 兼容
### 什么是兼容问题？
各个浏览器表现不统一；语言标准不同、环境不同造成的显示效果不能达到理想效果
为什么会产生兼容问题？
  各个浏览器厂商为了保护自身而设置的技术壁垒

### CSS兼容问题
1、margin加倍的问题     
设置为float的div在ie6下设置的margin会加倍。解决方案是在这个div里面加上 display:inline;
2、CSS透明问题 
IE：filter:alpha(opacity=透明度)，opacity参数设置透明度，范 围为0~100，0为完全透明。
FF：opacity:0.6 
filter:滤镜   针对IE浏览器
3、ie6下元素会有一个字符的默认高度：
		设置font-size,overflow,height属性
		font-size:0;overflow:hidden;height:0;
4、图片下有空隙产生
 		img{display:block;}

