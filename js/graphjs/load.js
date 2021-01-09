function loadSmallChart(xaxis,yaxis,yaxis1,name,name1,elementid,colorvalue,isMobile){Highcharts.theme={colors:[colorvalue,'#B75ED8']};Highcharts.setOptions(Highcharts.theme);var chartingOptions={title:{text:'',x:-20},subtitle:{x:-20},xAxis:{categories:xaxis,},yAxis:{title:{text:''},plotLines:[{value:0,width:1,color:'#7cb5ec'}]},tooltip:{valueSuffix:'',backgroundColor:"rgba(255,255,255,1)",backgroundColor:null,borderWidth:0,shadow:false,useHTML:true,style:{padding:0},positioner:function(boxWidth,boxHeight,point){return{x:point.plotX,y:point.plotY-50};},formatter:function(){return '<span>'+this.x+'<br/>'+this.series.name+' : '+globalModel.numberWithCommas(this.y)+' PSF</span>';}},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,Highcharts.getOptions().colors[0]],[1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]]},marker:{radius:3},threshold:null}},series:[{type:'area',name:name,data:yaxis},{type:'area',name:name1,data:yaxis1}]};chart=$('#'+elementid).highcharts(chartingOptions).highcharts();$(".highcharts-axis-labels,.highcharts-axis-labels text,.highcharts-legend,.highcharts-axis,.highcharts-grid").css("display","none");$('#'+elementid).find("svg > rect.highcharts-background").attr("height","40");$('#'+elementid).find("svg").attr("height","40");if(isMobile==true){$('#'+elementid).find("svg").css({'position':'relative','right':'115px','overflow':'visible'});$(".graph > div:first").css("overflow","visible");}else{$('#'+elementid).find("svg").css({'position':'relative','right':'22px'});$(".highcharts-container").css("position","inherit");}
$(".highcharts-button").css("display","none");$("text[text-anchor='end']").css("display","none");$("#"+elementid+" > .highcharts-legend-item").css("display","none");$("#"+elementid+" svg title").remove();$("g.highcharts-legend-item").each(function(i,item){if($(this).find("text > tspan").text().indexOf("Series")!=-1){$(this).hide();}});}
function loadChart(xaxis,yaxis,yaxis1,name,name1,elementid){Highcharts.theme={colors:['#7cb5ec','#B75ED8']};var series=[];if(name!=""){series.push({name:name,data:yaxis});}
if(name1!=""){series.push({name:name1,data:yaxis1});}
Highcharts.setOptions(Highcharts.theme);$('#'+elementid).highcharts({title:{text:'',x:-20},subtitle:{x:-20},xAxis:{title:{text:''},categories:xaxis},yAxis:{title:{text:'Price  Per Sq. Ft.'},plotLines:[{value:0,width:1,color:'#7cb5ec'}],min:0},tooltip:{valueSuffix:''},legend:{align:'middle',verticalAlign:'bottom',layout:'horizontal',x:0,y:22},series:series});$(".highcharts-button").css("display","none");$("text[text-anchor='end']").css("display","none");$(".highcharts-yaxis-labels").css("display","");$(".highcharts-yaxis-labels > text").css("display","");$("#"+elementid+" > .highcharts-legend-item").css("display","none");$("#"+elementid+" svg title").remove();$("g.highcharts-legend-item").each(function(i,item){if($(this).find("text > tspan").text().indexOf("Series")!=-1){$(this).hide();}});}
function loadAvgCostChartForAllSublocations(sublocarr,xaxistext,yaxistext,elementid,callback){console.log(sublocarr);Highcharts.theme={};Highcharts.setOptions(Highcharts.theme);$('#'+elementid).highcharts({chart:{type:'column'},title:{text:xaxistext},subtitle:{text:''},xAxis:{type:'category',labels:{rotation:-45,style:{fontSize:'9px',fontFamily:'Verdana, sans-serif',color:'black'}}},yAxis:{min:0,title:{text:yaxistext}},legend:{enabled:false},tooltip:{pointFormat:'<b>{point.y:.0f} PSF</b>'},series:[{name:'',colorByPoint:true,data:sublocarr,cursor:'pointer',point:{events:{click:function(e){return callback(this.name);}}}}]});$("#"+elementid+" svg title").remove();}
function loadSupplyChart(data,$scope,elementid,titlename,callback){Highcharts.theme={colors:['#CC9933','#B75ED8','#55ABF4','#F9558B','#FF8921']};Highcharts.setOptions(Highcharts.theme);$('#'+elementid).highcharts({chart:{plotBackgroundColor:null,plotBorderWidth:1,plotShadow:false},title:{text:titlename},legend:{align:'left',width:350},tooltip:{pointFormat:'',shadow:false},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:true,format:'',style:{color:(Highcharts.theme&&Highcharts.theme.contrastTextColor)||'black'},distance:-50,color:'white'},showInLegend:true},series:{point:{events:{click:function(e){return callback(this.name,elementid);}}}}},series:[{type:'pie',name:'Project Status',data:data}]});$("#"+elementid+" svg title").remove();}
function loadEmiChart(data,elementid,titlename){Highcharts.theme={colors:['#05a927','#ffd200','#55ABF4','#F9558B','#FF8921']};Highcharts.setOptions(Highcharts.theme);$('#'+elementid).highcharts({chart:{plotBackgroundColor:null},title:{text:titlename},tooltip:{pointFormat:'Percentage: <b>{point.y:.0f} %</b>',shadow:false},plotOptions:{pie:{shadow:false},},series:[{type:'pie',name:'Emi Calculator',size:'75%',innerSize:'75%',data:data}]});$("#"+elementid+" svg title").remove();$(".highcharts-button").remove();}
function piechart1(data,$scope){Highcharts.theme={colors:['#CC9933','#B75ED8','#55ABF4','#F9558B','#FF8921']};Highcharts.setOptions(Highcharts.theme);$('#piechart1').highcharts({chart:{plotBackgroundColor:null,plotBorderWidth:1,plotShadow:false},title:{text:''},tooltip:{pointFormat:'Project Count: <b>{point.y:.0f}</b>',shadow:false},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:true,format:'<b>{point.name}</b>:{point.y:.0f}',style:{color:(Highcharts.theme&&Highcharts.theme.contrastTextColor)||'black'},distance:-30,color:'white'},showInLegend:true},series:{cursor:'pointer',point:{events:{click:function(e){var bhk=this.name;if(bhk!=undefined){$scope.prepareForDSE('BHK',bhk);}}}}}},series:[{type:'pie',name:'BHK',data:data}]});$("#piechart1 svg title").remove();}
function piechart2(data,$scope){Highcharts.theme={colors:['#CC9933','#B75ED8','#55ABF4','#F9558B']};Highcharts.setOptions(Highcharts.theme);$('#piechart2').highcharts({chart:{plotBackgroundColor:null,plotBorderWidth:1,plotShadow:false},title:{text:''},tooltip:{pointFormat:'Project Count: <b>{point.y:.0f}</b>',shadow:false},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:true,format:'<b>{point.name}</b>:{point.y:.0f}',style:{color:(Highcharts.theme&&Highcharts.theme.contrastTextColor)||'black'},distance:-30,color:'white'},showInLegend:true},series:{cursor:'pointer',point:{events:{click:function(e){var unittypename=this.name;if(unittypename!=undefined){unittypename=unittypename.replace(' ','');$scope.prepareForDSE('UNIT_TYPE',unittypename);}}}}}},series:[{type:'pie',name:'Unit Type',data:data}]});$("#piechart2 svg title").remove();}
function piechart_projectstatus(data,$scope){Highcharts.theme={colors:['#CC9933','#B75ED8','#55ABF4','#F9558B','#FF8921','#4DC62B','#00DB84']};Highcharts.setOptions(Highcharts.theme);$('#projectstatuspichart').highcharts({chart:{plotBackgroundColor:null,plotBorderWidth:1,plotShadow:false},title:{text:'# of Project Offering particular Project Status'},tooltip:{pointFormat:'{series.name}: <b>{point.y:.0f}</b>'},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:true,format:'<b>{point.name}</b>:{point.y:.0f}',style:{color:(Highcharts.theme&&Highcharts.theme.contrastTextColor)||'black'},distance:-30,color:'white'},showInLegend:true},series:{cursor:'pointer',point:{events:{click:function(e){var projectstatusname=this.name;if(projectstatusname!=undefined){projectstatusname=projectstatusname.replace(' ','');$scope.prepareForDSE('PROJECT_STATUS',projectstatusname);}}}}}},series:[{type:'pie',name:'Project Status',data:data}]});}
function piechart_projectclass(data,$scope){Highcharts.theme={colors:['#CC9933','#B75ED8','#55ABF4','#F9558B','#FF8921']};Highcharts.setOptions(Highcharts.theme);$('#projectclasspichart').highcharts({chart:{plotBackgroundColor:null,plotBorderWidth:1,plotShadow:false},title:{text:'# of Project Offering particular Project Class'},tooltip:{pointFormat:'{series.name}: <b>{point.y:.0f}</b>'},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:true,format:'<b>{point.name}</b>:{point.y:.0f}',style:{color:(Highcharts.theme&&Highcharts.theme.contrastTextColor)||'black'},distance:-30,color:'white'},showInLegend:true},series:{cursor:'pointer',point:{events:{click:function(e){var projectclassname=this.name;if(projectclassname!=undefined){projectclassname=projectclassname.replace(' ','');$scope.prepareForDSE('PROJECT_CLASS',projectclassname);}}}}}},series:[{type:'pie',name:'Project Class',data:data}]});}
function barchart_locationreport(BarChartData,PrjStatusCountObj,$scope){Highcharts.theme={colors:['#CC9933','#B75ED8','#55ABF4','#F9558B','#FF8921','#4DC62B','#00DB84']};Highcharts.setOptions(Highcharts.theme);$('#barchartcontainer').highcharts({chart:{type:'column'},title:{text:''},subtitle:{text:''},xAxis:{categories:['New Launch','Early Stage','Mid Stage','Advanced Stage','Near Possession','Ready to Move','Well Occupied']},yAxis:{min:0,title:{text:'Avg Price (PSF)'}},tooltip:{formatter:function(){return '<table class="fs-14">'+
'<tr><td style="color:'+this.series.color+';padding:0">Project Status: </td>'+
'<td style="padding:0"><b>'+this.key+'</b></td></tr><br/>'+
'<tr><td style="color:'+this.series.color+';padding:0">Project Class: </td>'+
'<td style="padding:0"><b>'+this.series.name+'</b></td></tr><br/>'+
'<tr><td style="color:'+this.series.color+';padding:0">Avg Price: </td>'+
'<td style="padding:0"><b>'+Math.round(parseFloat(this.y))+' PSF '+'</b></td></tr><br/>'+
'<tr><td style="color:'+this.series.color+';padding:0">Project Count: </td>'+
'<td style="padding:0"><b>'+PrjStatusCountObj[this.series.name][this.key]['NoOfProject']+'</b></td></tr>'+
'</table>';}},plotOptions:{column:{pointPadding:0.2,borderWidth:0},series:{cursor:'pointer',point:{events:{click:function(e){var projectStatusName=e.point.category;var projectClassName=e.point.series.name;$scope.prepareForDSE('PROJECT_STATUS_CLASS',projectStatusName,projectClassName);}}}},bar:{dataLabels:{enabled:true}}},series:[{name:'Basic',data:BarChartData['Basic']},{name:'Standard',data:BarChartData['Standard']},{name:'Premium',data:BarChartData['Premium']},{name:'Luxury',data:BarChartData['Luxury']},{name:'Ultra-Luxury',data:BarChartData['Ultra-Luxury']}]});}
function chart_emi(id,loanAmount,interest){$('#'+id).highcharts({chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:false,margin:[0,0,0,0],spacingTop:0,spacingBottom:0,spacingLeft:0,spacingRight:0},title:{text:null},tooltip:{},plotOptions:{pie:{size:'100%',allowPointSelect:true,cursor:'pointer',dataLabels:{color:'#000000',connectorColor:'#000000',format:'<b>{point.name}</b>: {point.percentage:.1f} %'}}},series:[{type:'pie',name:'Amount',data:[['Loan',eval(loanAmount)],['Interest',eval(interest.toFixed(2))]]}]});}