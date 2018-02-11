(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"odot_atlas_", frames: [[0,70,90,10],[0,0,83,68]]}
];


// symbols:



(lib.logoNText = function() {
	this.spriteSheet = ss["odot_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.unknown = function() {
	this.spriteSheet = ss["odot_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "22px 'Arial'", "#323EE6");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 299;
	this.text.parent = this;
	this.text.setTransform(151.5,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323EE6").ss(2,1,1).p("AScAAMgk3AAA");
	this.shape.setTransform(152,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.link, new cjs.Rectangle(0,0,303,28.6), null);


// stage content:
(lib.odot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.link.addEventListener("click", openlink);
		
		function openlink() {
			window.open("http://www.hit.ac.il/telem/overview", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.link = new lib.link();
	this.link.name = "link";
	this.link.parent = this;
	this.link.setTransform(209.5,343.8,1,1,0,0,0,151.5,14.3);

	this.instance = new lib.unknown();
	this.instance.parent = this;
	this.instance.setTransform(343,315);

	this.text = new cjs.Text("המכון הטכנולוגי חולון", "bold 20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 195;
	this.text.parent = this;
	this.text.setTransform(243.5,370);

	this.text_1 = new cjs.Text("סביבות לימוד אינטראקטיביות 1 & אנימציה תשע\"ח", "22px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 544;
	this.text_1.parent = this;
	this.text_1.setTransform(240,218.3);

	this.text_2 = new cjs.Text(":פותח במסגרת פרויקט בקורסים", "bold 24px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 354;
	this.text_2.parent = this;
	this.text_2.setTransform(255,174.5);

	this.instance_1 = new lib.logoNText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(294,58);

	this.text_3 = new cjs.Text("תום חסון וזיו רוזוב", "bold 26px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 31;
	this.text_3.lineWidth = 199;
	this.text_3.parent = this;
	this.text_3.setTransform(161.3,102.8);

	this.text_4 = new cjs.Text(":אפיון ופיתוח", "bold 26px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 31;
	this.text_4.lineWidth = 159;
	this.text_4.parent = this;
	this.text_4.setTransform(363,102.8);

	this.text_5 = new cjs.Text("משוך ת'טמבל", "bold 28px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 33;
	this.text_5.lineWidth = 159;
	this.text_5.parent = this;
	this.text_5.setTransform(200,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.instance_1},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance},{t:this.link}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(216.1,268.8,548,372.1);
// library properties:
lib.properties = {
	id: '8341429FD9AB8142919A260D70283DDF',
	width: 500,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/odot_atlas_.png", id:"odot_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8341429FD9AB8142919A260D70283DDF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;