var cardlayout = ['<div class="trainer-card"><div class="trainer-info">			<div class="trainer-pic"><img src="../images/','.png"></div><div class="trainer-name"><p>','</p><small>','</small></div><div class="trainer-reward"><div><p>Reward</p></div><div><p class="pokedollar">&nbsp;&nbsp;','</p></div></div></div><div class="trainer-mons">','</div></div>'];
var monlayout = ['<div class="mon"><div class="mon-head"><p class="mon-name">','</p><p class="mon-lvl">','</p></div><div class="mon-head"><p class="mon-item">Holds ','</p></div><div class="mon-moves">','</div></div>'];

var TrainerCard = {
	create : function(a) {
		var tc = "";
		var d = [a.pic, a.name, a.nick, a.reward]
		for(i in d) tc += cardlayout[i] + d[i];
		tc += cardlayout[d.length];
		for(j in a.mons) {
			var dd = [a.mons[j].name, a.mons[j].lv, a.mons[j].item];
			for(i in dd) tc += monlayout[i] + dd[i];
			tc += monlayout[dd.length];
			for(i in a.mons[j].moves) tc += "<p>" + a.mons[j].moves[i] + "</p>";
			tc += monlayout[dd.length + 1];
		}
		tc += cardlayout[d.length + 1];
		return tc;
	},
	createFromList : function(a) {
		var tc = "";
		for(i in a) tc += this.create(a[i]);
		return tc;
	}
}

