"use strict";(self.webpackChunkng=self.webpackChunkng||[]).push([[224],{1224:(h,a,n)=>{n.r(a),n.d(a,{ThemeModule:()=>p});var r=n(9808),g=n(4626),Z=n(8852),o=n(6435);const u=[{path:"",data:{title:"Theme"},children:[{path:"",redirectTo:"colors"},{path:"colors",component:(()=>{class e{constructor(t){this._document=t}themeColors(){Array.from(this._document.querySelectorAll(".theme-color")).forEach(t=>{const i=(0,Z.getStyle)("background-color",t),l=this._document.createElement("table");l.innerHTML=`\n        <table class="w-100">\n          <tr>\n            <td class="text-muted">HEX:</td>\n            <td class="font-weight-bold">${(0,Z.rgbToHex)(i)}</td>\n          </tr>\n          <tr>\n            <td class="text-muted">RGB:</td>\n            <td class="font-weight-bold">${i}</td>\n          </tr>\n        </table>\n      `,t.parentNode.appendChild(l)})}ngOnInit(){this.themeColors()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(r.K0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ng-component"]],decls:131,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"icon-drop"],[1,"card-body"],[1,"row"],[1,"col-xl-2","col-md-3","col-sm-4","col-6","mb-4"],[1,"bg-primary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-secondary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-success","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-danger","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-warning","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-info","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-dark","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"row","mb-3"],[1,"bg-gray-100","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-200","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-300","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-400","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-500","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-600","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-700","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-800","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-900","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-indigo","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-purple","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-pink","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-red","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-orange","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-yellow","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-green","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-teal","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-cyan","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._UZ(3,"i",3),o._uU(4," Theme colors "),o.qZA(),o.TgZ(5,"div",4)(6,"div",5)(7,"div",6),o._UZ(8,"div",7),o.TgZ(9,"h6"),o._uU(10,"Brand Primary Color"),o.qZA()(),o.TgZ(11,"div",6),o._UZ(12,"div",8),o.TgZ(13,"h6"),o._uU(14,"Brand Secondary Color"),o.qZA()(),o.TgZ(15,"div",6),o._UZ(16,"div",9),o.TgZ(17,"h6"),o._uU(18,"Brand Success Color"),o.qZA()(),o.TgZ(19,"div",6),o._UZ(20,"div",10),o.TgZ(21,"h6"),o._uU(22,"Brand Danger Color"),o.qZA()(),o.TgZ(23,"div",6),o._UZ(24,"div",11),o.TgZ(25,"h6"),o._uU(26,"Brand Warning Color"),o.qZA()(),o.TgZ(27,"div",6),o._UZ(28,"div",12),o.TgZ(29,"h6"),o._uU(30,"Brand Info Color"),o.qZA()(),o.TgZ(31,"div",6),o._UZ(32,"div",13),o.TgZ(33,"h6"),o._uU(34,"Brand Light Color"),o.qZA()(),o.TgZ(35,"div",6),o._UZ(36,"div",14),o.TgZ(37,"h6"),o._uU(38,"Brand Dark Color"),o.qZA()()()()(),o.TgZ(39,"div",1)(40,"div",2),o._UZ(41,"i",3),o._uU(42," Grays "),o.qZA(),o.TgZ(43,"div",4)(44,"div",15)(45,"div",6),o._UZ(46,"div",16),o.TgZ(47,"h6"),o._uU(48,"Gray 100 Color"),o.qZA()(),o.TgZ(49,"div",6),o._UZ(50,"div",17),o.TgZ(51,"h6"),o._uU(52,"Gray 200 Color"),o.qZA()(),o.TgZ(53,"div",6),o._UZ(54,"div",18),o.TgZ(55,"h6"),o._uU(56,"Gray 300 Color"),o.qZA()(),o.TgZ(57,"div",6),o._UZ(58,"div",19),o.TgZ(59,"h6"),o._uU(60,"Gray 400 Color"),o.qZA()(),o.TgZ(61,"div",6),o._UZ(62,"div",20),o.TgZ(63,"h6"),o._uU(64,"Gray 500 Color"),o.qZA()(),o.TgZ(65,"div",6),o._UZ(66,"div",21),o.TgZ(67,"h6"),o._uU(68,"Gray 600 Color"),o.qZA()(),o.TgZ(69,"div",6),o._UZ(70,"div",22),o.TgZ(71,"h6"),o._uU(72,"Gray 700 Color"),o.qZA()(),o.TgZ(73,"div",6),o._UZ(74,"div",23),o.TgZ(75,"h6"),o._uU(76,"Gray 800 Color"),o.qZA()(),o.TgZ(77,"div",6),o._UZ(78,"div",24),o.TgZ(79,"h6"),o._uU(80,"Gray 900 Color"),o.qZA()()()()(),o.TgZ(81,"div",1)(82,"div",2),o._UZ(83,"i",3),o._uU(84," Additional colors "),o.qZA(),o.TgZ(85,"div",4)(86,"div",5)(87,"div",6),o._UZ(88,"div",25),o.TgZ(89,"h6"),o._uU(90,"Blue Color"),o.qZA()(),o.TgZ(91,"div",6),o._UZ(92,"div",26),o.TgZ(93,"h6"),o._uU(94,"Light Blue Color"),o.qZA()(),o.TgZ(95,"div",6),o._UZ(96,"div",27),o.TgZ(97,"h6"),o._uU(98,"Indigo Color"),o.qZA()(),o.TgZ(99,"div",6),o._UZ(100,"div",28),o.TgZ(101,"h6"),o._uU(102,"Purple Color"),o.qZA()(),o.TgZ(103,"div",6),o._UZ(104,"div",29),o.TgZ(105,"h6"),o._uU(106,"Pink Color"),o.qZA()(),o.TgZ(107,"div",6),o._UZ(108,"div",30),o.TgZ(109,"h6"),o._uU(110,"Red Color"),o.qZA()(),o.TgZ(111,"div",6),o._UZ(112,"div",31),o.TgZ(113,"h6"),o._uU(114,"Orange Color"),o.qZA()(),o.TgZ(115,"div",6),o._UZ(116,"div",32),o.TgZ(117,"h6"),o._uU(118,"Yellow Color"),o.qZA()(),o.TgZ(119,"div",6),o._UZ(120,"div",33),o.TgZ(121,"h6"),o._uU(122,"Green Color"),o.qZA()(),o.TgZ(123,"div",6),o._UZ(124,"div",34),o.TgZ(125,"h6"),o._uU(126,"Teal Color"),o.qZA()(),o.TgZ(127,"div",6),o._UZ(128,"div",35),o.TgZ(129,"h6"),o._uU(130,"Cyan Color"),o.qZA()()()()()())},encapsulation:2}),e})(),data:{title:"Colors"}},{path:"typography",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["ng-component"]],decls:189,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table"],[1,"highlighter-rouge"],[1,"h1"],[1,"h2"],[1,"h3"],[1,"h4"],[1,"h5"],[1,"h6"],[1,"bd-example"],[1,"bd-example","bd-example-type"],[1,"display-1"],[1,"display-2"],[1,"display-3"],[1,"display-4"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-3","text-truncate"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(t,i){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._uU(3," Headings "),o.qZA(),o.TgZ(4,"div",3)(5,"p"),o._uU(6,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),o.qZA(),o.TgZ(7,"table",4)(8,"thead")(9,"tr")(10,"th"),o._uU(11,"Heading"),o.qZA(),o.TgZ(12,"th"),o._uU(13,"Example"),o.qZA()()(),o.TgZ(14,"tbody")(15,"tr")(16,"td")(17,"p")(18,"code",5),o._uU(19,"<h1></h1>"),o.qZA()()(),o.TgZ(20,"td")(21,"span",6),o._uU(22,"h1. Bootstrap heading"),o.qZA()()(),o.TgZ(23,"tr")(24,"td")(25,"p")(26,"code",5),o._uU(27,"<h2></h2>"),o.qZA()()(),o.TgZ(28,"td")(29,"span",7),o._uU(30,"h2. Bootstrap heading"),o.qZA()()(),o.TgZ(31,"tr")(32,"td")(33,"p")(34,"code",5),o._uU(35,"<h3></h3>"),o.qZA()()(),o.TgZ(36,"td")(37,"span",8),o._uU(38,"h3. Bootstrap heading"),o.qZA()()(),o.TgZ(39,"tr")(40,"td")(41,"p")(42,"code",5),o._uU(43,"<h4></h4>"),o.qZA()()(),o.TgZ(44,"td")(45,"span",9),o._uU(46,"h4. Bootstrap heading"),o.qZA()()(),o.TgZ(47,"tr")(48,"td")(49,"p")(50,"code",5),o._uU(51,"<h5></h5>"),o.qZA()()(),o.TgZ(52,"td")(53,"span",10),o._uU(54,"h5. Bootstrap heading"),o.qZA()()(),o.TgZ(55,"tr")(56,"td")(57,"p")(58,"code",5),o._uU(59,"<h6></h6>"),o.qZA()()(),o.TgZ(60,"td")(61,"span",11),o._uU(62,"h6. Bootstrap heading"),o.qZA()()()()()()(),o.TgZ(63,"div",1)(64,"div",2),o._uU(65," Headings "),o.qZA(),o.TgZ(66,"div",3)(67,"p")(68,"code",5),o._uU(69,".h1"),o.qZA(),o._uU(70," through "),o.TgZ(71,"code",5),o._uU(72,".h6"),o.qZA(),o._uU(73," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),o.qZA(),o.TgZ(74,"div",12)(75,"p",6),o._uU(76,"h1. Bootstrap heading"),o.qZA(),o.TgZ(77,"p",7),o._uU(78,"h2. Bootstrap heading"),o.qZA(),o.TgZ(79,"p",8),o._uU(80,"h3. Bootstrap heading"),o.qZA(),o.TgZ(81,"p",9),o._uU(82,"h4. Bootstrap heading"),o.qZA(),o.TgZ(83,"p",10),o._uU(84,"h5. Bootstrap heading"),o.qZA(),o.TgZ(85,"p",11),o._uU(86,"h6. Bootstrap heading"),o.qZA()()()(),o.TgZ(87,"div",1)(88,"div",2),o._uU(89," Display headings "),o.qZA(),o.TgZ(90,"div",3)(91,"p"),o._uU(92,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),o.TgZ(93,"strong"),o._uU(94,"display heading"),o.qZA(),o._uU(95,"\u2014a larger, slightly more opinionated heading style."),o.qZA(),o.TgZ(96,"div",13)(97,"table",4)(98,"tbody")(99,"tr")(100,"td")(101,"span",14),o._uU(102,"Display 1"),o.qZA()()(),o.TgZ(103,"tr")(104,"td")(105,"span",15),o._uU(106,"Display 2"),o.qZA()()(),o.TgZ(107,"tr")(108,"td")(109,"span",16),o._uU(110,"Display 3"),o.qZA()()(),o.TgZ(111,"tr")(112,"td")(113,"span",17),o._uU(114,"Display 4"),o.qZA()()()()()()()(),o.TgZ(115,"div",1)(116,"div",2),o._uU(117," Inline text elements "),o.qZA(),o.TgZ(118,"div",3)(119,"p"),o._uU(120,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),o.TgZ(121,"strong"),o._uU(122,"display heading"),o.qZA(),o._uU(123,"\u2014a larger, slightly more opinionated heading style."),o.qZA(),o.TgZ(124,"div",12)(125,"p"),o._uU(126,"You can use the mark tag to "),o.TgZ(127,"mark"),o._uU(128,"highlight"),o.qZA(),o._uU(129," text."),o.qZA(),o.TgZ(130,"p")(131,"del"),o._uU(132,"This line of text is meant to be treated as deleted text."),o.qZA()(),o.TgZ(133,"p")(134,"s"),o._uU(135,"This line of text is meant to be treated as no longer accurate."),o.qZA()(),o.TgZ(136,"p")(137,"ins"),o._uU(138,"This line of text is meant to be treated as an addition to the document."),o.qZA()(),o.TgZ(139,"p")(140,"u"),o._uU(141,"This line of text will render as underlined"),o.qZA()(),o.TgZ(142,"p")(143,"small"),o._uU(144,"This line of text is meant to be treated as fine print."),o.qZA()(),o.TgZ(145,"p")(146,"strong"),o._uU(147,"This line rendered as bold text."),o.qZA()(),o.TgZ(148,"p")(149,"em"),o._uU(150,"This line rendered as italicized text."),o.qZA()()()()(),o.TgZ(151,"div",1)(152,"div",2),o._uU(153," Description list alignment "),o.qZA(),o.TgZ(154,"div",3)(155,"p"),o._uU(156,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),o.TgZ(157,"code",5),o._uU(158,".text-truncate"),o.qZA(),o._uU(159," class to truncate the text with an ellipsis."),o.qZA(),o.TgZ(160,"div",12)(161,"dl",18)(162,"dt",19),o._uU(163,"Description lists"),o.qZA(),o.TgZ(164,"dd",20),o._uU(165,"A description list is perfect for defining terms."),o.qZA(),o.TgZ(166,"dt",19),o._uU(167,"Euismod"),o.qZA(),o.TgZ(168,"dd",20)(169,"p"),o._uU(170,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),o.qZA(),o.TgZ(171,"p"),o._uU(172,"Donec id elit non mi porta gravida at eget metus."),o.qZA()(),o.TgZ(173,"dt",19),o._uU(174,"Malesuada porta"),o.qZA(),o.TgZ(175,"dd",20),o._uU(176,"Etiam porta sem malesuada magna mollis euismod."),o.qZA(),o.TgZ(177,"dt",21),o._uU(178,"Truncated term is truncated"),o.qZA(),o.TgZ(179,"dd",20),o._uU(180,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),o.qZA(),o.TgZ(181,"dt",19),o._uU(182,"Nesting"),o.qZA(),o.TgZ(183,"dd",20)(184,"dl",18)(185,"dt",22),o._uU(186,"Nested definition list"),o.qZA(),o.TgZ(187,"dd",23),o._uU(188,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."),o.qZA()()()()()()()())},encapsulation:2}),e})(),data:{title:"Typography"}}]}];let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[g.Bz.forChild(u)],g.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[r.ez,s]]}),e})()}}]);