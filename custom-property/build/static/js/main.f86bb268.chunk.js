(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,n,t){e.exports=t(343)},166:function(e,n,t){},336:function(e,n,t){},343:function(e,n,t){"use strict";t.r(n);var a=t(12),c=t.n(a),i=t(150),r=t.n(i),s=(t(166),t(61)),o=t(62),l=t(66),m=t(63),u=t(67),d=t(159),p=t(151),b=t.n(p),v=t(152),h=t(4),f=t.n(h),g=t(92),w=t.n(g),O=t(20),j=t.n(O),y=function(e,n,t,a){e.entries.push(j.a.textField({id:"customTxt",label:a("\u81ea\u5b9a\u4e49\u8f93\u5165\u6846"),modelProperty:"camunda:customTxt"}))},B=function(e,n,t,a){var c=j.a.checkbox({id:"customCheckbox",label:a("\u81ea\u5b9a\u4e49\u590d\u9009\u6846"),modelProperty:"camunda:customCheckbox"});e.entries.push(c)},P=t(1),E=t(25),x=t.n(E),_=[{name:"html",value:"html"},{name:"js",value:"js"},{name:"css",value:"css"}];var M=function(e,n,t,a){var c=j.a.selectBox({id:"customSelect",label:a("\u81ea\u5b9a\u4e49\u4e0b\u62c9\u6846"),selectOptions:_,modelProperty:"customSelect",get:function(e){return{customSelect:(n=e,Object(P.getBusinessObject)(n).get("camunda:customSelect"))};var n},set:function(e,t){var a=Object(P.getBusinessObject)(e),c=function(e,n){var t={};return t["camunda:customSelect"]=n.customSelect,t}(0,t);return x.a.updateBusinessObject(n,a,c)}});e.entries.push(c)},S=function(e,n,t,a){Object(P.is)(n,"bpmn:UserTask")&&e.entries.push(j.a.textField({id:"userCustom",label:a("\u7528\u6237\u4efb\u52a1"),modelProperty:"camunda:userCustom"}))},N=t(43),D=t(93);var k=function(e,n){var t={id:"dynamicSelect",html:'<div class="bpp-row bpp-select"><label for="dynamic-select">\u52a8\u6001\u83b7\u53d6\u5217\u8868</label><div class="bpp-field-wrapper"><select id="dynamic-select" name="dynamicSelect" data-value></select><button class="get-data" id="addElement" data-action="addElement">\u83b7\u53d6\u6570\u636e</button></div></div>',get:function(e){return{dynamicSelect:(n=e,Object(P.getBusinessObject)(n).get("camunda:dynamicSelect"))};var n},set:function(e,t){var a=Object(P.getBusinessObject)(e),c=function(e,n){var t={};return t["camunda:dynamicSelect"]=n.dynamicSelect,t}(0,t);return x.a.updateBusinessObject(n,a,c)},addElement:function(e,n){var t;(t=1e3,new Promise(function(e){setTimeout(e,t,{val:1})})).then(function(e){console.log("\u8c03\u7528\u6210\u529f",e);var t,a=(t=n,Object(N.query)("select[name=dynamicSelect]",t.parentElement));Object(D.forEach)(a,function(){a.removeChild(a.firstChild)});for(var c=0;c<10;c+=1){var i=Object(N.domify)('<option value="'.concat(c,'">').concat(c,"</option>"));a.insertBefore(i,a.firstChild)}return Object(D.forEach)(a,function(e){0===e.value?Object(N.attr)(e,"selected","selected"):Object(N.attr)(e,"selected",null)}),!0})}};e.entries.push(t)};function C(e,n,t,a){w.a.call(this,e),this.getTabs=function(e){return[{id:"general",label:"\u57fa\u672c\u4fe1\u606f",groups:function(e,n,t,a){var c={id:"general",label:"",entries:[]};return y(c,e,n,a),B(c,e,n,a),M(c,e,n,a),S(c,e,n,a),k(c,e,n,a),[c]}(e,n,0,a)}]}}f()(C,w.a);var T={__init__:["propertiesProvider"],propertiesProvider:["type",C]},L=(t(336),t(68)),F=t.n(L),I=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(c)))).renderDiagram=function(e){t.bpmnModeler.importXML(e,function(e){e?console.log("\u5bfc\u5165\u5931\u8d25"):console.log("\u5bfc\u5165\u6210\u529f")})},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.bpmnModeler=new d.a({container:"#canvas",propertiesPanel:{parent:"#properties-panel"},additionalModules:[b.a,T],moddleExtensions:{camunda:v}}),this.renderDiagram('<?xml version="1.0" encoding="UTF-8"?>\n<bpmn2:definitions\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"\n  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"\n  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"\n  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"\n  xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd"\n  id="sample-diagram"\n  targetNamespace="http://bpmn.io/schema/bpmn"\n>\n  <bpmn2:process id="Process_1" isExecutable="false">\n    <bpmn2:startEvent id="StartEvent_1"/>\n  </bpmn2:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds height="36.0" width="36.0" x="412.0" y="240.0"/>\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn2:definitions>')}},{key:"render",value:function(){return c.a.createElement("div",{className:F.a.container},c.a.createElement("div",{className:F.a.canvas,id:"canvas"}),c.a.createElement("div",{className:"properties-panel-parent ".concat(F.a.panel),id:"properties-panel",style:{height:"100%"}}))}}]),n}(a.Component),J=function(e){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{style:{height:"100%",overflow:"hidden"}},c.a.createElement(I,null))}}]),n}(a.Component);r.a.render(c.a.createElement(J,null),document.getElementById("root"))},68:function(e,n,t){e.exports={container:"Bpmn_container__rDk4T",canvas:"Bpmn_canvas__2-gbo",panel:"Bpmn_panel__2gEka"}}},[[161,2,1]]]);
//# sourceMappingURL=main.f86bb268.chunk.js.map