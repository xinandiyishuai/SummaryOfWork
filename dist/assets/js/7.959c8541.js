(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{222:function(t,e,n){},400:function(t,e,n){"use strict";var i=n(222);n.n(i).a},403:function(t,e,n){"use strict";n.r(e);n(320);var i=n(72),s=n(73),r=n(322),c=n.n(r),o=n(394),a=n.n(o),u=(n(321),function(){function t(e){Object(i.a)(this,t),this.target=e,l.AddObserver(this)}return Object(s.a)(t,[{key:"Update",value:function(t){this.target&&this.target.getUpdate(t)}}]),t}()),h=function(){function t(){Object(i.a)(this,t),this.list=[]}return Object(s.a)(t,[{key:"Add",value:function(t){if(-1===this.IndexOf(t))return this.list.push(t)}},{key:"Empty",value:function(){this.list=[]}},{key:"Count",value:function(){return this.list.length}},{key:"Get",value:function(t){if(t>-1&&t<this.list.length)return this.list[t]}},{key:"Insert",value:function(t,e){-1===this.IndexOf(t)&&this.list.splice(e,0,t)}},{key:"Remove",value:function(t,e){e?this.list.splice(e,1):(e=this.IndexOf(t),this.list.splice(e,1))}},{key:"IndexOf",value:function(t){return this.list.findIndex(function(e){return e==t})}}]),t}(),l=new(function(){function t(){Object(i.a)(this,t),this.observerList=new h}return Object(s.a)(t,[{key:"AddObserver",value:function(t){this.observerList.Add(t)}},{key:"RemoveObserver",value:function(t){this.observerList.Remove(t)}},{key:"Notify",value:function(t){for(var e=this.observerList.Count(),n=0;n<e;n++)this.observerList.Get(n).Update(t)}}]),t}()),f={components:{aButton:c.a,aCheckbox:a.a},data:function(){return{i:0}},methods:{addObserver:function(){if(!(this.i>1)){this.i++;var t=document.createElement("input"),e=document.createElement("p"),n="<label class='label' for=\"checkbox".concat(this.i,'"> Observer').concat(this.i,"</label>");t.type=t.dataset.type="checkbox",new u(t),t.getUpdate=function(t){this.checked=t},e.innerHTML=n,e.prepend(t),this.$refs.observersContainer.appendChild(e)}},onChange:function(t){l.Notify(t.target.checked)}},mounted:function(){}},v=(n(400),n(0)),d=Object(v.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chebox-con"},[e("p",[e("a-checkbox",{on:{change:this.onChange}},[this._v("ConcreteSubject")]),this._v(" "),e("a-button",{attrs:{size:"small",type:"primary",icon:"plus"},on:{click:this.addObserver}},[this._v("创建Observer")])],1),this._v(" "),e("div",{ref:"observersContainer"})])},[],!1,null,null,null);e.default=d.exports}}]);