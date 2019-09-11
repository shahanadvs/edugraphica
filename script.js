var hp_pos;
var vp_pos;

function activehp(val){
  if (val==="above"){
    hp_pos = "above";
    document.getElementById('hp').disabled=false;
    return hp_pos;
  }
  else if (val==="below") {
    hp_pos = "below";
    document.getElementById('hp').disabled=false;
    return hp_pos;
  }
  else {
    hp_pos = "on";
    document.getElementById('hp').disabled=true;
    return hp_pos;
  }
}

function activevp(val){
  if (val==="infront"){
    vp_pos = "front";
    document.getElementById('vp').disabled=false;
    return vp_pos;
  }
  else if (val==="behind") {
    vp_pos = "behind";
    document.getElementById('vp').disabled=false;
    return vp_pos;
  }
  else {
    vp_pos = "on";
    document.getElementById('vp').disabled=true;
    return vp_pos;
  }
}




function setup() {
    var cw = 600;
    var ch = 500;
    var cnv = createCanvas(cw, ch);
    cnv.parent("canvas_body");
    cnv.id('canvas');

}

function main() {
    // Drawing axis
    var x1 = 200;
    var x2 = 400;
    var y1 = 250;
    var y2 = y1;

    line(x1,y1,x2,y2);
    text('X',x1,y1)
    text('Y',x2,y2)

    var hp = document.getElementById('hp').value;
    hp = hp*10;

    var vp = document.getElementById('vp').value
    vp = vp*10;

//console.log( "vp_pos = ",vp_pos);
//console.log( "hp_pos = ",hp_pos);


    //Draw HP

    var xh = (x1+x2)/2;
    var xv = xh;
    var xc = xh;
    var yc = y1;

    if(hp_pos==="above"){
      var yh = (yc-hp+5);
    }
    else if (hp_pos === "below") {
        var yh = (yc+hp+5);
    }
    else {
      var yh = (yc+5);
    }



//console.log( "yh = ",yh);

   line(xc,yc,xh,yh);
  circle(xh,yh,5);

    //Draw VP

    if (vp_pos === "front") {
        var yv = (yc+5+vp);
    }
    else if (vp_pos === "behind") {
        var yv = (yc+5-vp);
    }
    else {
      var yv = yc+5;
    }

  //  console.log( "yv = ",yv);

  line(xc,yc,xv,yv);
  circle(xv,yv,5);

}


function erase(){
    clear();

}
