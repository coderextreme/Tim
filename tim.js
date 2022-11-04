// https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
//
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

	  return {
		      x: centerX + (radius * Math.cos(angleInRadians)),
		      y: centerY + (radius * Math.sin(angleInRadians))
		    };
}

function describeArc(x, y, radius, startAngle, endAngle){

	    var start = polarToCartesian(x, y, radius, endAngle);
	    var end = polarToCartesian(x, y, radius, startAngle);

	    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

	    var d = [
		            "M", start.x, start.y, 
		            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
		        ].join(" ");

	    return d;       
}
console.log('<html><body><svg id="svg" width="850" height="850" xmlns="http://www.w3.org/2000/svg"><g id="g" style="font:10px times">');
var scale = 50;
var left = 7;
var down = 7;

var magic_sq = [[256,2,3,253,252,6,7,249,248,10,11,245,244,14,15,241],
[17,239,238,20,21,235,234,24,25,231,230,28,29,227,226,32],
[33,223,222,36,37,219,218,40,41,215,214,44,45,211,210,48],
[208,50,51,205,204,54,55,201,200,58,59,197,196,62,63,193],
[192,66,67,189,188,70,71,185,184,74,75,181,180,78,79,177],
[81,175,174,84,85,171,170,88,89,167,166,92,93,163,162,96],
[97,159,158,100,101,155,154,104,105,151,150,108,109,147,146,112],
[144,114,115,141,140,118,119,137,136,122,123,133,132,126,127,129],
[128,130,131,125,124,134,135,121,120,138,139,117,116,142,143,113],
[145,111,110,148,149,107,106,152,153,103,102,156,157,99,98,160],
[161,95,94,164,165,91,90,168,169,87,86,172,173,83,82,176],
[80,178,179,77,76,182,183,73,72,186,187,69,68,190,191,65],
[64,194,195,61,60,198,199,57,56,202,203,53,52,206,207,49],
[209,47,46,212,213,43,42,216,217,39,38,220,221,35,34,224],
[225,31,30,228,229,27,26,232,233,23,22,236,237,19,18,240],
[16,242,243,13,12,246,247,9,8,250,251,5,4,254,255,1]]
var magic_sq = [[30,39,48,1,10,19,28],
[38,47,7,9,18,27,29],
[46,6,8,17,26,35,37],
[5,14,16,25,34,36,45],
[13,15,24,33,42,44,4],
[21,23,32,41,43,3,12],
[22,31,40,49,2,11,20]];
// console.log('<div style="display: table">');
for (var x = 0; x < left; x++) {
	// console.log('<div style="display: table-row">');
	var sx = (x+1) * scale;
	for (var y = 0; y < down; y++) {
		// console.log('<div style="display: table-cell">');
		sy = (y+1) * scale;
		var magic_el = magic_sq[y][x];
		var mx = magic_el & 0xF;
		var my = (magic_el & 0xF0) >> 4;
		if (mx & 0x1) {
			console.log('<path stroke="black" stroke-width="2" d="M'+(sx)+" "+(sy)+ " L"+(sx)+" "+(sy-down)+' Z"/>');
		}
		if (mx & 0x2) {
			console.log('<path fill="transparent" stroke="black" d="'+describeArc(sx, sy, left, 0, 90)+'" stroke-width="2"/>');
		}
		if (mx & 0x4) {
			console.log('<path stroke="black" stroke-width="2" d="M'+(sx)+" "+(sy)+ " L"+(sx+left)+" "+(sy)+' Z"/>');
		}
		if (my & 0x8) {
			console.log('<path fill="transparent" stroke="black" d="'+describeArc(sx, sy, down, 270, 0)+'" stroke-width="2"/>');
		}
		if (my & 0x1) {
			console.log('<path stroke="black" stroke-width="2" d="M'+(sx)+" "+(sy)+ " L"+(sx)+" "+(sy+down)+' Z"/>');
		}
		if (my & 0x2) {
			console.log('<path fill="transparent" stroke="black" d="'+describeArc(sx, sy, left, 180, 270)+'" stroke-width="2"/>');
		}
		if (my & 0x4) {
			console.log('<path stroke="black" stroke-width="2" d="M'+(sx)+" "+(sy)+ " L"+(sx-left)+" "+(sy)+' Z"/>');
		}
		if (mx & 0x8) {
			console.log('<path fill="transparent" stroke="black" d="'+describeArc(sx, sy, down, 90, 180)+'" stroke-width="2"/>');
		}
		var num = (((my & 0xF) << 4) | mx);
		if (num === 0) {
			num = 256;
		}
		console.log('<text x="'+(sx-scale/2)+'" y="'+(sy+scale/2)+'" fill="red" font="14px times">'+num.toString(2).padStart(8,"0")+'</text>');
		console.log('<text x="'+(sx-scale/2)+'" y="'+(sy+scale/2+10)+'" fill="green" font="14px times">'+num+'</text>');
		// console.log("</div>");
	}
	// console.log("</div>");
}
// console.log("</div>");
console.log('</g></svg></body></html>');
