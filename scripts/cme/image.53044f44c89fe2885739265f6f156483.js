/*! For license information please see image.js.LICENSE.txt */
(self.webpackChunkcme_group_transform=self.webpackChunkcme_group_transform||[]).push([[4380,5076,8638],{4813:e=>{e.exports={component:"component",image:"image","gray-border":"gray-border",grayBorder:"gray-border","magnify-icon":"magnify-icon",magnifyIcon:"magnify-icon",reverse:"reverse","cmp-image":"cmp-image",cmpImage:"cmp-image",section:"section","image-modal":"image-modal",imageModal:"image-modal","modal-title":"modal-title",modalTitle:"modal-title","modal-body":"modal-body",modalBody:"modal-body","btn-close":"btn-close",btnClose:"btn-close","image-modal-gallery":"image-modal-gallery",imageModalGallery:"image-modal-gallery","modal-content":"modal-content",modalContent:"modal-content",btn:"btn","pinch-to-zoom-container":"pinch-to-zoom-container",pinchToZoomContainer:"pinch-to-zoom-container","slick-dots":"slick-dots",slickDots:"slick-dots","slick-active":"slick-active",slickActive:"slick-active"}},62284:(e,t,i)=>{"use strict";var o=i(74848),a=i(96540),n=i(74567),l=i.n(n),r=i(31921),s=i(9578),d=i(46942),c=i.n(d),m=i(26088),g=i(23896),h=i(24969),p=i(4813),u=i.n(p),y=function(e,t,i,o){return new(i||(i=Promise))((function(a,n){function l(e){try{s(o.next(e))}catch(e){n(e)}}function r(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,r)}s((o=o.apply(e,t||[])).next())}))};const x=({onClick:e,variation:t})=>{const i="next"===t?"arrow-next":"arrow-prev";return(0,o.jsx)(g.Button,{color:i,onClick:e})};class f extends a.Component{constructor(e){super(e),this.toggleModal=()=>{this.setState((({showModal:e})=>({showModal:!e})))},this.state={showModal:!1,sliderItems:[]}}componentDidMount(){return y(this,void 0,void 0,(function*(){const{slider:e,path:t}=this.props;if(e){const e=yield(0,m.getSliderImages)(t);this.setState({sliderItems:e})}}))}createFakeImg(e,t){const i=document.createElement("canvas");return i.width=e,i.height=t,i.toDataURL()}renderSliderItem(e,t){return(0,o.jsx)("img",{src:t.src,title:t.title,alt:!!t.isDecorative||t.altText,width:t.width,height:t.height,role:t.isDecorative?"presentation":""},e)}getInitialSlide(e){const{path:t}=this.props,i=e.findIndex((e=>e.path===t));return i>0?i:0}renderSlider(e){if(!Array.isArray(e)||!e.length)return null;const t={className:"slider variable-width",dots:!0,infinite:!0,initialSlide:this.getInitialSlide(e),slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,lazyLoad:"ondemand",nextArrow:(0,o.jsx)(x,{variation:"next"}),prevArrow:(0,o.jsx)(x,{variation:"prev"}),customPaging:t=>(0,o.jsxs)("div",{children:[t+1," OF ",e.length]})};return(0,o.jsx)(s.default,Object.assign({},t,{children:e.map(((e,t)=>this.renderSliderItem(t,e)))}))}render(){const{linkTitle:e,linkTarget:t,linkRel:i,linkDownload:n,linkUrl:s,imgBorder:d,imgStyle:m,imgSrc:h,imgAlt:p,imgDecorative:y,imgWidth:x,imgHeight:f,defaultImgWidth:v,defaultImgHeight:k,imgCaption:w,imgZoomIcon:b,slider:I,imageMargin:j}=this.props,{showModal:S,sliderItems:M}=this.state,C=c()(u().magnifyIcon,b),T=c()({[u().grayBorder]:d}),D=x||v,z=f||k,A=(0,o.jsx)("img",{title:e,role:y?"presentation":"",width:D,height:z,alt:y?"":p,src:this.createFakeImg(D,z)}),L=(0,o.jsx)(r.LazyLoadImage,{src:h,placeholder:A,className:T,loading:"lazy",title:e,width:D,height:z,alt:y?"":p,role:y?"presentation":""}),N=(0,o.jsx)("span",{className:C}),O=m&&m.startsWith("lightbox"),_=c()("image-modal",I?" image-modal-gallery":""),B=this.renderSlider(M),F=l();return h?(0,o.jsxs)("figure",{className:j,role:"group",children:[s?(0,o.jsx)("a",{href:s,target:t,rel:i,title:e||p,download:n,children:L}):O?(0,o.jsxs)(a.Fragment,{children:[(0,o.jsxs)("a",{onClick:this.toggleModal,role:"button",tabIndex:0,children:[L,"hide"!==b&&N]}),(0,o.jsx)(g.Modal,{isOpen:S,handleClose:this.toggleModal,title:w,className:_,titleWithLink:!0,children:(0,o.jsx)(F,{children:I?B:L})})]}):L,w&&(0,o.jsx)("figcaption",{className:j?"crmb-0":void 0,dangerouslySetInnerHTML:{__html:w}})]}):null}}h.aem2react.load("image",(e=>(0,o.jsx)(f,Object.assign({},e))))},25352:()=>{},37746:()=>{},98196:()=>{},1671:()=>{},26959:()=>{},60195:()=>{}},e=>{e.O(0,[4598],(()=>{return t=62284,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=image.js.map