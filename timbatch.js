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
var scale = 50;
var left = 16;
var down = 16;
var fs = require("fs");
fs.mkdir("groups/", err => {
	if (err) {
		return;
	}
});
fs.mkdir("signs/", err => {
	if (err) {
		return;
	}
});
content = "";
console.log( '<html>\n');
console.log( '<body>\n');
console.log( '<svg id="svg" width="850" height="850" xmlns="http://www.w3.org/2000/svg"><g id="g" style="font:10px times">\n');
for (var x = 0; x < left; x++) {
	var sx = (x+1) * scale;  // replace 0 with x for table
	for (var y = 0; y < down; y++) {
		var numbits = 0;
		// y is shifted 4 to right, so compare values <= 8
		sy = (y+1) * scale;  // replace 0 with y for table
		if (x & 0x1) {
			content += '<path stroke="black" stroke-width="2" d="M'+(sx)+" "+(sy)+ " L"+(sx)+" "+(sy-down)+' Z"/>\n';
			numbits++;
		}
		if (x & 0x2) {
			content += '<path fill="transparent" stroke="black" d="'+describeArc(sx, sy, left, 0, 90)+'" stroke-width="2"/>\n';
			numbits++;
		}
		if (x & 0x4) {
			content += '<path stroke="black" stroke-width="2" d="M'+(sx)+" "+(sy)+ " L"+(sx+left)+" "+(sy)+' Z"/>\n';
			numbits++;
		}
		if (y & 0x8) {
			content += '<path fill="transparent" stroke="black" d="'+describeArc(sx, sy, down, 270, 0)+'" stroke-width="2"/>\n';
			numbits++;
		}
		if (y & 0x1) {
			content += '<path stroke="black" stroke-width="2" d="M'+(sx)+" "+(sy)+ " L"+(sx)+" "+(sy+down)+' Z"/>\n';
			numbits++;
		}
		if (y & 0x2) {
			content += '<path fill="transparent" stroke="black" d="'+describeArc(sx, sy, left, 180, 270)+'" stroke-width="2"/>\n';
			numbits++;
		}
		if (y & 0x4) {
			content += '<path stroke="black" stroke-width="2" d="M'+(sx)+" "+(sy)+ " L"+(sx-left)+" "+(sy)+' Z"/>\n';
			numbits++;
		}
		if (x & 0x8) {
			content += '<path fill="transparent" stroke="black" d="'+describeArc(sx, sy, down, 90, 180)+'" stroke-width="2"/>\n';
			numbits++;
		}
		var num = (((y & 0xF) << 4) | x);
		content += '<text x="'+(sx-scale/2)+'" y="'+(sy+scale/2)+'" fill="red" font="14px times">'+num.toString(2).padStart(8,"0")+'</text>\n';
		content += '<text x="'+(sx-scale/2)+'" y="'+(sy+scale/2+10)+'" fill="green" font="14px times">'+num+'</text>\n';

		fs.mkdir("groups/"+numbits+".dir", err => {
			  if (err) {
			    return
			  }
		});
		/*
		fs.writeFile("groups/"+numbits+".dir/"+num.toString(2).padStart(8,"0")+'.svg', content, err => {
			  if (err) {
			    return
			  }
		});
		fs.writeFile("signs/"+num.toString(2).padStart(8,"0")+'.svg', content, err => {
			  if (err) {
			    return
			  }
		});
		*/
		console.log(content);
	}
}
console.log( '</g></svg></body>\n');
console.log('</html>\n');
