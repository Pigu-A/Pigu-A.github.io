var ans = {
	// compressed 1bpp VGA 8x16 font graphics
	cp437c: window.atob("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"),

	// CGA color palette values
	pal:	[[ 0, 0, 0],[170, 0, 0],[ 0,170, 0],[170, 85, 0],[ 0, 0,170],[170, 0,170],[ 0,170,170],[170,170,170],
			[85,85,85],[255,85,85],[85,255,85],[255,255,85],[85,85,255],[255,85,255],[85,255,255],[255,255,255]],

	initialized: false,

	gfx: new Uint8Array(new ArrayBuffer(4096)),

	_init: function() {
		// decompress and convert the graphics into array buffer
		var d = "";
		var sp = 0;
		var dp = 0;
		while(sp < this.cp437c.length) {
			var t = this.cp437c.charCodeAt(sp);
			if(t >= 128) { // repeat
				t -= 128;
				var o = this.cp437c.charCodeAt(sp+1);
				d += d.substring(dp-o-1,dp-o+t);
				sp += 2;
			} else { // literal
				d += this.cp437c.substring(sp+1,sp+t+2);
				sp += t+2;
			}
			dp += t+1;
		}
		for(var i = 0; i < 4096; i++) this.gfx[i] = d.charCodeAt(i);
		delete this.cp437c;
		delete d;
		this.initialized = true;
	},

	renderFromUrl: function(url,canvas,maxwidth=-1) {
		if (!this.initialized) this._init();
		var req = new XMLHttpRequest();
		req.responseType = "arraybuffer";
		req.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200)
				this.render(this.response,canvas,maxwidth);
		};
		req.open("GET", url, true);
		req.send();
	},

	renderFromFile: function(fi,canvas,maxwidth=-1) {
		if (!this.initialized) this._init();
		var rdr = new FileReader();
		var render = this.render;
		rdr.onload = ((c,mw)=>function(d){render(d.target.result,c,mw);})(canvas,maxwidth);
		rdr.readAsArrayBuffer(fi);
	},

	render: function(buf,canvas,maxwidth=-1) {
		var dat = new DataView(buf);
		var w = 80;
		var h = 25;
		// try getting width and height data from sauce
		var l = dat.byteLength;
		var pos = l - 128;
		var o = '';
		for (var i = 0; i < 7; i++) o += String.fromCharCode(dat.getUint8(pos+i));
		if (o == "SAUCE00" && dat.getUint8(l-34) == 1 && dat.getUint8(l-33) == 1) {
			w = dat.getUint16(l-32,true);
			h = dat.getUint16(l-30,true);
			l -= 128
		}
		// crate a hidden canvas to draw unscaled graphics to
		var hc = document.createElement("canvas");
		hc.setAttribute("width",w*8);
		hc.setAttribute("height",h*16);
		var ctx = hc.getContext("2d");
		var id = ctx.createImageData(w*8,h*16);
		// initialize the background color to black
		for(var i = 0; i < w*h*512; i += 4) {
			id.data[i] = 0;
			id.data[i+1] = 0;
			id.data[i+2] = 0;
			id.data[i+3] = 255;
		}
		// draw the art
		fcol = 7;
		bcol = 0;
		cx = 0;
		cy = 0;
		p = 0
		while(p < l) {
			var t = dat.getUint8(p);
			switch(t) {
			case 13: // newline
				if(dat.getUint8(p+1) == 10) {
					cy++;
					cx = 0;
					p++;
				}
				break;
			// don't draw newlines and EOFs
			case 10:
			case 26:
				break;
			case 27:
				if(dat.getUint8(p+1) == 91) {
					// ANSI.SYS escape sequence
					p += 2;
					var esc = "";
					var tt = "";
					var quo = true;
					// scan through the escape sequence
					while(p < l) {
						var tt = String.fromCharCode(dat.getUint8(p));
						if(quo && "\"0123456789;=".indexOf(tt) == -1) break;
						if(tt == "\"") quo = !quo;
						esc += tt;
						p++;
					}
					if(p >= l) break;
					esc = esc.split(";");
					for(var i in esc) esc[i] = Number(esc[i]);
					// tt now holds the setting character
					switch(tt) {
					case "H":
					case "f":
						if(esc.length < 2) {
							cy = 0;
							cx = 0;
						} else {
							cy = esc[0];
							cx = esc[1];
						}
						break;
					case "A":
						cy = Math.max(cy-esc[0],0);
						break;
					case "B":
						cy = Math.min(cy+esc[0],h);
						break;
					case "C":
						cx = Math.min(cx+esc[0],w);
						break;
					case "D":
						cx = Math.max(cx-esc[0],0);
						break;
					case "s":
						bcx = cx;
						bcy = cy;
						break;
					case "u":
						cx = bcx;
						cy = bcy;
						break;
					case "m":
						for(var i in esc) {
							if(esc[i] == 0) {
								fcol = 7;
								bcol = 0;
							} else if(esc[i] == 1) fcol |= 8;
							else if(esc[i] == 5) bcol |= 8;
							else if(esc[i] >= 30 && esc[i] < 38) fcol = (fcol&8)+esc[i]-30;
							else if(esc[i] >= 40 && esc[i] < 48) bcol = (bcol&8)+esc[i]-40;
						}
						break;
					}
					break;
				}
			// if not ansi escape sequence, then just draw them like a normal character
			default:
				if(cy < h) {
					for(var i = 0; i < 16; i++) {
						var g = ans.gfx[t*16+i];
						for(var j = 0; j < 8; j++) {
							var idp = (cy*16+i)*w*32+(cx*8+7-j)*4;
							var col = g & 1 ? fcol : bcol;
							id.data[idp] = ans.pal[col][0];
							id.data[idp+1] = ans.pal[col][1];
							id.data[idp+2] = ans.pal[col][2];
							id.data[idp+3] = 255;
							g >>= 1;
						}
					}
					cx++;
					if(cx >= w) {
						cx -= w;
						cy++;
					}
				}
			}
			p++;
		}
		ctx.putImageData(id,0,0);
		// put the graphics in hidden canvas into the argument canvas with aspect ratio correction
		var ws = maxwidth > 0 && w*8 > maxwidth ? maxwidth/w/8 : 1;
		canvas.setAttribute("width",w*8*ws);
		canvas.setAttribute("height",h*19.2*ws);
		var ctx = canvas.getContext("2d");
		ctx.drawImage(hc,0,0,w*8*ws,h*19.2*ws);
		delete hc;
	}
};
