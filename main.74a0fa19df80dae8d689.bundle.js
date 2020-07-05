(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),types=(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement,{secondary:{color:"grey"},primary:{color:"black"},paragraph:{color:"#4d4d4d"}}),forms={small:{fontsize:"small",fontWeight:"normal"},large:{fontsize:"xx-large",fontWeight:"normal"},normal:{fontsize:"large",fontWeight:"normal"},paragraph:{fontsize:"15px",fontWeight:"normal"},h1:{fontsize:"32px",fontWeight:"bold"},h2:{fontsize:"24px",fontWeight:"bold"},h3:{fontsize:"20px",fontWeight:"bold"},h4:{fontsize:"16px",fontWeight:"bold"}},Container=styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"Text__Container",componentId:"sc-1q5lf2-0"})(["display:flex;cursor:pointer;color:",";font-size:",";font-weight:",";text-decoration:",";"],(function(props){return types[props.type].color}),(function(props){return forms[props.form].fontsize}),(function(props){return forms[props.form].fontWeight}),(function(props){return props.decoration||"none"}));__webpack_exports__.a=function Text(_ref){var children=_ref.children,type=_ref.type,form=_ref.form,decoration=_ref.decoration;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container,{type:type,form:form,decoration:decoration},children)}},128:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_emotion_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25);react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function _templateObject(){var data=Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    height: ",";\n    cursor: pointer;\n    width: 100px;\n    & > * {\n        height: 90%;\n        width: 100%;\n        object-fit: contain;\n    }\n    border-style: solid;\n    border-width: ",";\n    border-color: ",";\n    background: ",";\n    margin: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n"]);return _templateObject=function _templateObject(){return data},data}var Container=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.a.div(_templateObject(),(function(props){return"".concat(props.size,"px")}),(function(props){return props.selected?"2px":"1px"}),(function(props){return props.selected?"#3899EC":"#dfdfdf"}),(function(props){return props.selected?"#dcedfc":"#ffffff"}));__webpack_exports__.a=function Thumbnails(_ref){var size=_ref.size,children=_ref.children,selected=_ref.selected,onClick=_ref.onClick;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,{size:size,selected:selected,onClick:onClick},children)}},129:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_emotion_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25);react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function _templateObject3(){var data=Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin-right: 10px;\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    width:auto;\n    min-width: ",";\n    min-height: ",";\n    font-size: ",";\n    background: ",";\n    color: ",";\n    border-color: ",";\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    display:flex;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.a.div(_templateObject()),sizes={large:{"min-width":"200px","min-height":"50px","font-size":"large"},small:{"min-width":"none","min-height":"30px","font-size":"small"}},types={primary:{background:"#3899EC",color:"#FFFFFF","border-color":"#3899EC"},secondary:{background:"#dfdfdf",color:"#000000","border-color":"#dfdfdf"},danger:{background:"#EE5951",color:"#FFFFFF","border-color":"#EE5951"}},ButtonElement=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.a.button(_templateObject2(),(function(props){return sizes[props.size]["min-width"]}),(function(props){return sizes[props.size]["min-height"]}),(function(props){return sizes[props.size]["font-size"]}),(function(props){return types[props.nature].background}),(function(props){return types[props.nature].color}),(function(props){return types[props.nature]["border-color"]})),PrefixContainer=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.a.div(_templateObject3());__webpack_exports__.a=function Button(_ref){var type=_ref.type,size=_ref.size,prefixIcon=_ref.prefixIcon,onClick=_ref.onClick,children=_ref.children;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,{onClick:onClick},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonElement,{size:size,nature:type},prefixIcon&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PrefixContainer,null,prefixIcon),children))}},190:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Badge}));var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_emotion_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(25);react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function _templateObject2(){var data=Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    margin-right: 10px;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n    background: ",";\n    color: ",";\n    height: ",";\n    font-size: ",";\n    width: fit-content;\n    padding: 10px;\n    margin: 5px 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return _templateObject=function _templateObject(){return data},data}var skins={success:{background:"#60bc57",color:"#ffffff"},warning:{background:"yellow",color:"#000000"},danger:{background:"#ee5951",color:"#ffffff"}},sizes={small:{height:"5px",fontSize:"12px"},medium:{height:"10px",fontSize:"14px"},large:{height:"20px",fontSize:"18px"}},Container=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.a.div(_templateObject(),(function(props){return skins[props.skin].background}),(function(props){return skins[props.skin].color}),(function(props){return sizes[props.size].height}),(function(props){return sizes[props.size].fontSize})),PrefixContainer=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.a.div(_templateObject2()),Badge=function Badge(_ref){var skin=_ref.skin,size=_ref.size,children=_ref.children,prefixIcon=_ref.prefixIcon;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,{skin:skin,size:size},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PrefixContainer,null,prefixIcon),children)}},295:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_components_common_Avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(310);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Avatar",module).addWithJSX("Avatar",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Avatar__WEBPACK_IMPORTED_MODULE_2__.a,{userName:"Arun Madhavan"})}))}.call(this,__webpack_require__(19)(module))},296:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(685),react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(686),_components_common_Badge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(190);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Badges",module).addWithJSX("success",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Badge__WEBPACK_IMPORTED_MODULE_4__.a,{skin:"success",size:"medium",prefixIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__.a,null)},"Available")})).addWithJSX("danger",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Badge__WEBPACK_IMPORTED_MODULE_4__.a,{skin:"danger",size:"medium",prefixIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.a,null)},"UnAvailable")}))}.call(this,__webpack_require__(19)(module))},297:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_components_common_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(314);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("BreadCrumbs",module).addWithJSX("BreadCrumb Heirarchy",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.a,{hierarchy:["Home","Mobiles","Vivo","Vivo Z1x"]})}))}.call(this,__webpack_require__(19)(module))},298:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(687),react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(320),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(78),_components_common_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(129);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).addWithJSX("Primary",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Button__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("button clicked"),size:"large",prefixIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__.a,null),type:"primary"},"Add To Cart")})).addWithJSX("danger",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Button__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("button clicked"),size:"large",prefixIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.a,null),type:"danger"},"Buy Now")})).addWithJSX("secondary",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Button__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("button clicked"),size:"large",prefixIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.a,null),type:"secondary"},"Buy Now")}))}.call(this,__webpack_require__(19)(module))},301:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_components_common_Card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(315);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Card",module).addWithJSX("Card",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Card__WEBPACK_IMPORTED_MODULE_2__.a,{title:"Description",paragraph:"The Vivo Z1x is designed for the gamers and photography enthusiasts. With a huge 4,500 mAh battery that can be charged using Vivo's proprietary FlashCharge technology, you get a 3 hour talk time on a 5-minute charge. Apart from the huge battery that lets it be your workhorse for a complete day, the Vivo Z1x also comes with a super AMOLED Halo Full View display. This large 16.20 cm (6.38) screen comes with a 19.5:9 aspect ratio and a screen-to-body ratio of 90% for that immersive viewing experience. It also comes with a Flash In-display fingerprint sensor that unlocks your phone swiftly. It features a triple camera setup (48 MP Main Camera, 8 MP Super Wide-Angle Camera, and 2 MP Depth Camera) and one 32 MP front-facing camera, the Vivo Z1x lets you take stunning photographs. It is powered by the powerful Snapdragon processor and comes with a number of turbo modes that help in the seamless multitasking capabilities of this phone.",inverted:!0,imgSrc:"https://static.toiimg.com/thumb/msid-70806196,width-220,resizemode-4,imgv-6/Vivo-Z1x.jpg"})}))}.call(this,__webpack_require__(19)(module))},302:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_components_common_CounterBubble__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(316);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("CounterBubble",module).addWithJSX("CounterBubble",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_CounterBubble__WEBPACK_IMPORTED_MODULE_2__.a,{count:10})}))}.call(this,__webpack_require__(19)(module))},303:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_components_common_ImageThumbs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(317);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("ImageThumbs",module).addWithJSX("Image Thumbnails to show vertical images thumbnails",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_ImageThumbs__WEBPACK_IMPORTED_MODULE_2__.a,{image:"https://images.freeimages.com/images/small-previews/eee/summer-nature-3-1370238.jpg",images:["https://images.freeimages.com/images/small-previews/eee/summer-nature-3-1370238.jpg","https://images.freeimages.com/images/small-previews/9fc/yet-another-flower-1399208.jpg"],setImage:function setImage(){}})}))}.call(this,__webpack_require__(19)(module))},304:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_components_common_InfoText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(318);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("InfoText",module).addWithJSX("InfoText",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_InfoText__WEBPACK_IMPORTED_MODULE_2__.a,{text:"Bank Offer10% Instant Discount with HDFC Bank Credit Cards and Credit/Debit EMI Transactions"})}))}.call(this,__webpack_require__(19)(module))},305:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_components_common_MainImage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(96);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("MainImage",module).addWithJSX("MainImage",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_MainImage__WEBPACK_IMPORTED_MODULE_2__.a,{image:"https://static.toiimg.com/thumb/msid-70806196,width-220,resizemode-4,imgv-6/Vivo-Z1x.jpg"})}))}.call(this,__webpack_require__(19)(module))},306:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_components_common_Ratings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(319);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Ratings",module).addWithJSX("Ratings",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Ratings__WEBPACK_IMPORTED_MODULE_2__.a,{rating:4})}))}.call(this,__webpack_require__(19)(module))},307:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_components_common_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Text",module).addWithJSX("primary",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"normal",type:"primary"},"Vivo Z1x (Fusion Blue, 64 GB) (6 GB RAM)")})).addWithJSX("Secondary",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"normal",type:"secondary"},"Vivo Z1x (Fusion Blue, 64 GB) (6 GB RAM)")})).addWithJSX("paragraph",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"normal",type:"paragraph"},"The Vivo Z1x is powered by Vivo's proprietary FlashCharge technology. This Vivo exclusive 22.5 W FlashCharge lets you top up the mobile's battery charge in a jiffy. With a Type-C charger, the Vivo Z1x gets a 3 hour talk time with a 5-minute charge.")})).addWithJSX("Line Through Text",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"normal",type:"secondary",decoration:"line-through"},"This is the secondary text type with line-through.")})).addWithJSX("Small Text",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"small",type:"primary"},"This is the small text.")})).addWithJSX("H1 Text",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"h1",type:"primary"},"This is the h1 text.")})).addWithJSX("H2 Text",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"h2",type:"primary"},"This is the h2 text.")})).addWithJSX("H3 Text",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"h3",type:"primary"},"This is the h3 text.")})).addWithJSX("H4 Text",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"h4",type:"primary"},"This is the h4 text.")})).addWithJSX("Large Text",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"large",type:"primary"},"This is the large text.")})).addWithJSX("Normal Text",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"normal",type:"primary"},"This is the normal text.")})).addWithJSX("Paragraph Text",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"paragraph",type:"primary"},"The Vivo Z1x is powered by Vivo's proprietary FlashCharge technology. This Vivo exclusive 22.5 W FlashCharge lets you top up the mobile's battery charge in a jiffy. With a Type-C charger, the Vivo Z1x gets a 3 hour talk time with a 5-minute charge.")}))}.call(this,__webpack_require__(19)(module))},308:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(78),_components_common_Thumbnails__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(128);react__WEBPACK_IMPORTED_MODULE_0__.createElement;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Thumbnails",module).addWithJSX("Thumbnails",(function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_Thumbnails__WEBPACK_IMPORTED_MODULE_3__.a,{size:60,selected:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("button clicked")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"https://static.toiimg.com/thumb/msid-70806196,width-220,resizemode-4,imgv-6/Vivo-Z1x.jpg"}))}))}.call(this,__webpack_require__(19)(module))},310:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Avatar}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),Container=(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement,styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"Avatar__Container",componentId:"sc-653tez-0"})(["display:flex;align-items:center;height:100%;justify-content:center;"])),Circle=styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"Avatar__Circle",componentId:"sc-653tez-1"})(["height:50px;width:50px;border-radius:30px;border:2px solid grey;display:flex;align-items:center;justify-content:center;background:#dfdfdf;"]),Avatar=function Avatar(_ref){var userName=_ref.userName;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle,null,function getShortForm(name){return name.split(" ").map((function(x){return x.substr(0,1).toUpperCase()})).join("")}(userName)))}},314:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_icons_fa__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),Container=(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement,styled_components__WEBPACK_IMPORTED_MODULE_2__.a.div.withConfig({displayName:"Breadcrumbs__Container",componentId:"sc-2xxfim-0"})(["display:flex;align-items:center;margin-bottom:10px;"]));__webpack_exports__.a=function Breadcrumbs(_ref){var hierarchy=_ref.hierarchy;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container,null,hierarchy.map((function(data,i){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_3__.a,{type:"secondary",form:"small"},data),i!=hierarchy.length-1&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.a,{size:20,color:"grey"}))})))}},315:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),_MainImage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(96),Container=(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement,styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"Card__Container",componentId:"sc-1t2sa3x-0"})(["margin:1rem;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;transition:color 0.15s ease,border-color 0.15s ease;display:flex;&:hover,&:focus,&:active{color:#0070f3;border-color:#0070f3;}"])),TextContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"Card__TextContainer",componentId:"sc-1t2sa3x-1"})(["margin-left:",";"],(function(props){return props.inverted?"10px":"none"}));__webpack_exports__.a=function Card(_ref){var title=_ref.title,paragraph=_ref.paragraph,inverted=_ref.inverted,imgSrc=_ref.imgSrc;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container,null,inverted&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_3__.a,{image:imgSrc}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer,{inverted:inverted},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"normal",type:"primary"},title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_2__.a,{form:"paragraph",type:"paragraph"},paragraph)),!inverted&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_3__.a,{image:imgSrc}))}},316:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CounterBubble}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),Container=(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement,styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"CounterBubble__Container",componentId:"sc-6sseod-0"})(["height:20px;width:20px;border-radius:10px;background:#4d4d4d;color:#ffffff;display:flex;justify-content:center;align-items:center;position:relative;bottom:12px;right:13px;"])),CounterBubble=function CounterBubble(_ref){var count=_ref.count;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,count>0&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container,null,count))}},317:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),_Thumbnails__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(128),Container=(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement,styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"ImageThumbs__Container",componentId:"akgeb-0"})(["display:flex;flex-direction:column;"])),ImageThumb=function ImageThumb(_ref){var src=_ref.src,image=_ref.image,setImage=_ref.setImage;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Thumbnails__WEBPACK_IMPORTED_MODULE_2__.a,{size:60,selected:src===image,onClick:function onClick(){return setImage(src)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:"".concat(src),key:src}))};__webpack_exports__.a=function ImageThumbs(_ref2){var images=_ref2.images,image=_ref2.image,setImage=_ref2.setImage;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container,null,images.map((function(x){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageThumb,{src:x,setImage:setImage,image:image})})))}},318:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InfoText}));var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(688),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),react_icons_fa__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(67),_emotion_styled__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(25);react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function _templateObject2(){var data=Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  & svg {\n    margin: 5px;\n  }\n\n  &:hover .tooltip {\n    visibility: visible;\n  }\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px;\n  border-radius: 6px;\n  width: fit-content;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n"]);return _templateObject=function _templateObject(){return data},data}var ToolTip=_emotion_styled__WEBPACK_IMPORTED_MODULE_5__.a.div(_templateObject()),Container=_emotion_styled__WEBPACK_IMPORTED_MODULE_5__.a.div(_templateObject2()),InfoText=function InfoText(_ref){var text=_ref.text;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__.a,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_3__.a,{form:"small",type:"primary"},text),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.b,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToolTip,{className:"tooltip"},text))}},319:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),react_icons_fa__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(67),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),lodash__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(191),lodash__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__),RatingContainer=(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement,styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"Ratings__RatingContainer",componentId:"sc-19ub3d9-0"})(["color:rgb(255,215,0);display:flex;padding:5px 0;align-items:center;"])),TextContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"Ratings__TextContainer",componentId:"sc-19ub3d9-1"})(["margin-top:2px;margin-left:10px;"]);__webpack_exports__.a=function Ratings(_ref){var rating=_ref.rating;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RatingContainer,null,lodash__WEBPACK_IMPORTED_MODULE_4___default.a.times(rating,(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.c,null)})),lodash__WEBPACK_IMPORTED_MODULE_4___default.a.times(5-rating,(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.c,{color:"#dfdfdf"})})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_3__.a,{form:"h4",type:"secondary"},"".concat(rating," Ratings"))))}},321:function(module,exports,__webpack_require__){__webpack_require__(322),__webpack_require__(472),__webpack_require__(473),module.exports=__webpack_require__(683)},388:function(module,exports){},473:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(309),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_1__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.setAddon)(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_1___default.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(667),module)}.call(this,__webpack_require__(19)(module))},667:function(module,exports,__webpack_require__){var map={"./Avatar.stories.tsx":295,"./Badge.stories.tsx":296,"./Breadcrumbs.stories.tsx":297,"./Button.stories.tsx":298,"./Card.stories.tsx":301,"./CounterBubble.stories.tsx":302,"./ImageThumbs.stories.tsx":303,"./InfoText.stories.tsx":304,"./MainImage.stories.tsx":305,"./Ratings.stories.tsx":306,"./Text.stories.tsx":307,"./Thumbnails.stories.tsx":308};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=667},683:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(684)],module)}.call(this,__webpack_require__(19)(module))},684:function(module,exports,__webpack_require__){var map={"./Avatar.stories.tsx":295,"./Badge.stories.tsx":296,"./Breadcrumbs.stories.tsx":297,"./Button.stories.tsx":298,"./Card.stories.tsx":301,"./CounterBubble.stories.tsx":302,"./ImageThumbs.stories.tsx":303,"./InfoText.stories.tsx":304,"./MainImage.stories.tsx":305,"./Ratings.stories.tsx":306,"./Text.stories.tsx":307,"./Thumbnails.stories.tsx":308};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=684},96:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),Container=(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement,styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({displayName:"MainImage__Container",componentId:"sc-8fz23m-0"})(["display:flex;justify-content:center;"]));__webpack_exports__.a=function MainImage(_ref){var image=_ref.image;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:image}))}}},[[321,1,2]]]);
//# sourceMappingURL=main.74a0fa19df80dae8d689.bundle.js.map