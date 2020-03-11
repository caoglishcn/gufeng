(function(Vue) {
	var singleCharList = ["烟","倾","萧","墨","歌","弦","痴","泠","幽","离","覆","寂","情","思","恋","醉","浅","尘","念","葬","负","梦","韶","陌","落","琴","夜","君","殇"];
	var doubleCharList = ["朱砂","韶华","江南","烟雨","迷离","红尘","寂寞","繁华","风华","苍老","红颜","天下","彼岸","浮生","伊人","青丝","白首","陌上","微凉","千年","倾城","断弦","长歌","悲欢","沧海","天涯","尘缘","情殇","忘川","碧落","奈何","指尖","盛世","长安","青鸾","凤凰","桃花","海棠","红妆","婆娑","轻狂","未央"];

	var app2 = new Vue({
		el: "#gu",
		data: {
			sentence:[],
			message: "",
			timeSelected:8,
			formatCustom:"",
			formatSelected:"==-="
		},
		methods:{
			geneate:function(){
				var sentence=[];
				var times=this.timeSelected;
				var formatSelected=this.formatCustom.length===0?this.formatSelected:this.formatCustom;
				var cache=[];
				for(var i=0;i<times;i++){
					sentence[i]="";
					cache=[];
					for(var j = 0;j<formatSelected.length;j++){
						var selected;
						if(formatSelected[j]==="="){
							do{
								selected = doubleCharList[parseInt(Math.random()*doubleCharList.length)];
							}while(cache.includes(selected));
							cache.push(selected);
							sentence[i] += selected;
						}else if(formatSelected[j]==="-"){
							sentence[i] += singleCharList[parseInt(Math.random()*singleCharList.length)];
						}
					}
					
				}
				
				this.sentence= sentence;
			}
		}

	});
})(Vue);