const left3 =document.getElementById('left3');
const left3a =document.getElementById('left3a');
const left3b =document.getElementById('left3b');
const left3c =document.getElementById('left3c');
const left3d =document.getElementById('left3d');
const left3e =document.getElementById('left3e');
const left3f =document.getElementById('left3f');
const left3g =document.getElementById('left3g');
const leftDemo = document.getElementById('demoLeft1')
const vw = window.innerWidth/100;
const all=['a','b','c','d','e','f','g','h']
var fall=false;
window.onload=()=>{
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    $('#left3').css('width','2.5vw'),$('#left3a').css('width','2.5vw');$('#left3b').css('width','2.5vw');$('#left3c').css('width','2.5vw');$('#left3c').css('width','2.5vw');$('#left3d').css('width','2.5vw');$('#left3e').css('width','2.5vw');$('#left3f').css('width','2.5vw');$('#left3g').css('width','2.5vw');
    $('#left3').css('height','2.5vw'),$('#left3a').css('height','2.5vw');$('#left3b').css('height','2.5vw');$('#left3c').css('height','2.5vw');$('#left3c').css('height','2.5vw');$('#left3d').css('height','2.5vw');$('#left3e').css('height','2.5vw');$('#left3f').css('height','2.5vw');$('#left3g').css('height','2.5vw');
}  
}
window.onresize=()=>{
    location.reload()
}
left3.onmousedown=(e)=>{
    console.log('pp')
    document.body.style.cursor='grabbing';
   document.body.onmousemove=(e)=>{
    const mousePos = { x: parseInt(e.clientX), y: parseInt(e.clientY) }
    const carPos = { x: (22.5*vw), y: (16.6*vw)-(7*vw)+((window.innerHeight -parseInt($('#container').css('height'))) / 2)}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('left').style.rotate = angle+'deg';
    document.getElementById('left2').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.onmouseup=(e)=>{
    console.log('up')
    for (let i = 0; i < all.length; i++) {
        if($('#right1'+all[i]+':hover').length !== 0 && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2').style.transition= '0.5s';
        document.getElementById('left').style.transition= '0.5s';
        document.getElementById('left2').style.width='1vw';
        document.getElementById('left').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3').style.display='block';
        setTimeout(()=>{ document.getElementById('left2').style.transition= '0.04s';document.getElementById('left').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2').style.transition= '0.5s';
        document.getElementById('left').style.transition= '0.5s';
        document.getElementById('left2').style.width='1vw';
        document.getElementById('left').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2').style.transition= '0.04s';document.getElementById('left').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.onmousemove=(e)=>{
    }
    document.body.onmouseup=(e)=>{
    }
   }
}

left3a.onmousedown=(e)=>{
    console.log('pp')
    document.body.style.cursor='grabbing'
   document.body.onmousemove=(e)=>{
    const mousePos = { x: parseInt(e.clientX), y: parseInt(e.clientY) }
    const carPos = { x: (22.5*vw), y: (20.2*vw)-(7*vw)+((window.innerHeight -parseInt($('#container').css('height'))) / 2)}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('lefta').style.rotate = angle+'deg';
    document.getElementById('left2a').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
    for (let i = 0; i < all.length; i++) {
    if (document.querySelector("right1"+all[i]+" > p:hover") != null) {
        console.log("hovered");
    }   
    }
}
   document.body.onmouseup=(e)=>{
    console.log('up')
    for (let i = 0; i < all.length; i++) {
        if($('#right1'+all[i]+':hover').length !== 0 && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2a').style.transition= '0.5s';
        document.getElementById('lefta').style.transition= '0.5s';
        document.getElementById('left2a').style.width='1vw';
        document.getElementById('lefta').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3a').style.display='block';
        setTimeout(()=>{ document.getElementById('left2a').style.transition= '0.04s';document.getElementById('lefta').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3a').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2a').style.transition= '0.5s';
        document.getElementById('lefta').style.transition= '0.5s';
        document.getElementById('left2a').style.width='1vw';
        document.getElementById('lefta').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2a').style.transition= '0.04s';document.getElementById('lefta').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.onmousemove=(e)=>{
    }
    document.body.onmouseup=(e)=>{
    }
   }
}
left3b.onmousedown=(e)=>{
    console.log('pp')
    document.body.style.cursor='grabbing'
   document.body.onmousemove=(e)=>{
    const mousePos = { x: parseInt(e.clientX), y: parseInt(e.clientY) }
    const carPos = { x: (22.5*vw), y: (23.7*vw)-(7*vw)+((window.innerHeight -parseInt($('#container').css('height'))) / 2)}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftb').style.rotate = angle+'deg';
    document.getElementById('left2b').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
    for (let i = 0; i < all.length; i++) {
    if (document.querySelector("right1"+all[i]+" > p:hover") != null) {
        console.log("hovered");
    }   
    }
}
   document.body.onmouseup=(e)=>{
    console.log('up')
    for (let i = 0; i < all.length; i++) {
        if($('#right1'+all[i]+':hover').length !== 0 && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2b').style.transition= '0.5s';
        document.getElementById('leftb').style.transition= '0.5s';
        document.getElementById('left2b').style.width='1vw';
        document.getElementById('leftb').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3b').style.display='block';
        setTimeout(()=>{ document.getElementById('left2b').style.transition= '0.04s';document.getElementById('leftb').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3b').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2b').style.transition= '0.5s';
        document.getElementById('leftb').style.transition= '0.5s';
        document.getElementById('left2b').style.width='1vw';
        document.getElementById('leftb').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2b').style.transition= '0.04s';document.getElementById('leftb').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.onmousemove=(e)=>{
    }
    document.body.onmouseup=(e)=>{
    }
   }
}
left3c.onmousedown=(e)=>{
    console.log('pp')
    document.body.style.cursor='grabbing'
   document.body.onmousemove=(e)=>{
    const mousePos = { x: parseInt(e.clientX), y: parseInt(e.clientY) }
    const carPos = { x: (22.5*vw), y: (27.1*vw)-(7*vw)+((window.innerHeight -parseInt($('#container').css('height'))) / 2)}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftc').style.rotate = angle+'deg';
    document.getElementById('left2c').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
    for (let i = 0; i < all.length; i++) {
    if (document.querySelector("right1"+all[i]+" > p:hover") != null) {
        console.log("hovered");
    }   
    }
}
   document.body.onmouseup=(e)=>{
    console.log('up')
    for (let i = 0; i < all.length; i++) {
        if($('#right1'+all[i]+':hover').length !== 0 && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2c').style.transition= '0.5s';
        document.getElementById('leftc').style.transition= '0.5s';
        document.getElementById('left2c').style.width='1vw';
        document.getElementById('leftc').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3c').style.display='block';
        setTimeout(()=>{ document.getElementById('left2c').style.transition= '0.04s';document.getElementById('leftc').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3c').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2c').style.transition= '0.5s';
        document.getElementById('leftc').style.transition= '0.5s';
        document.getElementById('left2c').style.width='1vw';
        document.getElementById('leftc').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2c').style.transition= '0.04s';document.getElementById('leftc').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.onmousemove=(e)=>{
    }
    document.body.onmouseup=(e)=>{
    }
   }
}
left3d.onmousedown=(e)=>{
    console.log('pp')
    document.body.style.cursor='grabbing'
   document.body.onmousemove=(e)=>{
    const mousePos = { x: parseInt(e.clientX), y: parseInt(e.clientY) }
    const carPos = { x: (22.5*vw), y: (30.7*vw)-(7*vw)+((window.innerHeight -parseInt($('#container').css('height'))) / 2)}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftd').style.rotate = angle+'deg';
    document.getElementById('left2d').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
    for (let i = 0; i < all.length; i++) {
    if (document.querySelector("right1"+all[i]+" > p:hover") != null) {
        console.log("hovered");
    }   
    }
}
   document.body.onmouseup=(e)=>{
    console.log('up')
    for (let i = 0; i < all.length; i++) {
        if($('#right1'+all[i]+':hover').length !== 0 && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2d').style.transition= '0.5s';
        document.getElementById('leftd').style.transition= '0.5s';
        document.getElementById('left2d').style.width='1vw';
        document.getElementById('leftd').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3d').style.display='block';
        setTimeout(()=>{ document.getElementById('left2d').style.transition= '0.04s';document.getElementById('leftd').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3d').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2d').style.transition= '0.5s';
        document.getElementById('leftd').style.transition= '0.5s';
        document.getElementById('left2d').style.width='1vw';
        document.getElementById('leftd').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2d').style.transition= '0.04s';document.getElementById('leftd').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.onmousemove=(e)=>{
    }
    document.body.onmouseup=(e)=>{
    }
   }
}
left3e.onmousedown=(e)=>{
    console.log('pp')
    document.body.style.cursor='grabbing'
    document.body.onmousemove=(e)=>{
    const mousePos = { x: parseInt(e.clientX), y: parseInt(e.clientY) }
    const carPos = { x: (22.5*vw), y: (34.4*vw)-(7*vw)+((window.innerHeight -parseInt($('#container').css('height'))) / 2)}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('lefte').style.rotate = angle+'deg';
    document.getElementById('left2e').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
    for (let i = 0; i < all.length; i++) {
    if (document.querySelector("right1"+all[i]+" > p:hover") != null) {
        console.log("hovered");
    }   
    }
}
   document.body.onmouseup=(e)=>{
    console.log('up')
    for (let i = 0; i < all.length; i++) {
        if($('#right1'+all[i]+':hover').length !== 0 && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2e').style.transition= '0.5s';
        document.getElementById('lefte').style.transition= '0.5s';
        document.getElementById('left2e').style.width='1vw';
        document.getElementById('lefte').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3e').style.display='block';
        setTimeout(()=>{ document.getElementById('left2e').style.transition= '0.04s';document.getElementById('lefte').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3e').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2e').style.transition= '0.5s';
        document.getElementById('lefte').style.transition= '0.5s';
        document.getElementById('left2e').style.width='1vw';
        document.getElementById('lefte').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2e').style.transition= '0.04s';document.getElementById('lefte').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.onmousemove=(e)=>{
    }
    document.body.onmouseup=(e)=>{
    }
   }
}
left3f.onmousedown=(e)=>{
    console.log('pp')
    document.body.style.cursor='grabbing'
    document.body.onmousemove=(e)=>{
    const mousePos = { x: parseInt(e.clientX), y: parseInt(e.clientY) }
    const carPos = { x: (24.5*vw), y: (38*vw)+(-(7*vw)+(window.innerHeight -parseInt($('#container').css('height'))) / 2)}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftf').style.rotate = angle+'deg';
    document.getElementById('left2f').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
    for (let i = 0; i < all.length; i++) {
    if (document.querySelector("right1"+all[i]+" > p:hover") != null) {
        console.log("hovered");
    }   
    }
}
   document.body.onmouseup=(e)=>{
    console.log('up')
    for (let i = 0; i < all.length; i++) {
        if($('#right1'+all[i]+':hover').length !== 0 && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2f').style.transition= '0.5s';
        document.getElementById('leftf').style.transition= '0.5s';
        document.getElementById('left2f').style.width='1vw';
        document.getElementById('leftf').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3f').style.display='block';
        setTimeout(()=>{ document.getElementById('left2f').style.transition= '0.04s';document.getElementById('leftf').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3f').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2f').style.transition= '0.5s';
        document.getElementById('leftf').style.transition= '0.5s';
        document.getElementById('left2f').style.width='1vw';
        document.getElementById('leftf').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2f').style.transition= '0.04s';document.getElementById('leftf').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.onmousemove=(e)=>{
    }
    document.body.onmouseup=(e)=>{
    }
   }
}
left3g.onmousedown=(e)=>{
    console.log('pp')
    document.body.style.cursor='grabbing'
    document.body.onmousemove=(e)=>{
    const mousePos = { x: parseInt(e.clientX), y: parseInt(e.clientY) }
    const carPos = { x: (24.5*vw), y: (41.5*vw)-(7*vw)+((window.innerHeight -parseInt($('#container').css('height'))) / 2)}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftg').style.rotate = angle+'deg';
    document.getElementById('left2g').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
    for (let i = 0; i < all.length; i++) {
    if (document.querySelector("right1"+all[i]+" > p:hover") != null) {
        console.log("hovered");
    }   
    }
}
   document.body.onmouseup=(e)=>{
    console.log('up')
    for (let i = 0; i < all.length; i++) {
        if($('#right1'+all[i]+':hover').length !== 0 && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2g').style.transition= '0.5s';
        document.getElementById('leftg').style.transition= '0.5s';
        document.getElementById('left2g').style.width='1vw';
        document.getElementById('leftg').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3g').style.display='block';
        setTimeout(()=>{ document.getElementById('left2g').style.transition= '0.04s';document.getElementById('leftg').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3g').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2g').style.transition= '0.5s';
        document.getElementById('leftg').style.transition= '0.5s';
        document.getElementById('left2g').style.width='1vw';
        document.getElementById('leftg').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2g').style.transition= '0.04s';document.getElementById('leftg').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.onmousemove=(e)=>{
    }
    document.body.onmouseup=(e)=>{
    }
   }
}


/// mobile /////

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
left3.ontouchstart=(e)=>{
   var current;
    document.body.style.cursor='grabbing'
    var l =getOffset(left3).left;var t =getOffset(left3).top
   document.body.ontouchmove=(e)=>{
    current = document.elementFromPoint(e.touches[0].pageX - window.scrollX,e.touches[0].pageY - window.scrollY)
    const mousePos = { x: parseInt(e.touches[0].pageX - window.scrollX), y: parseInt(e.touches[0].pageY - window.scrollY) }
    const carPos = { x: l, y: t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('left').style.rotate = angle+'deg';
    document.getElementById('left2').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.ontouchend=(event)=>{
    for (let i = 0; i < all.length; i++) {
        if( current ==$('#right1'+all[i])[0] && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2').style.transition= '0.5s';
        document.getElementById('left').style.transition= '0.5s';
        document.getElementById('left2').style.width='1vw';
        document.getElementById('left').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3').style.display='block';
        setTimeout(()=>{ document.getElementById('left2').style.transition= '0.04s';document.getElementById('left').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2').style.transition= '0.5s';
        document.getElementById('left').style.transition= '0.5s';
        document.getElementById('left2').style.width='1vw';
        document.getElementById('left').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2').style.transition= '0.04s';document.getElementById('left').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.ontouchmove=(e)=>{
    }
    document.body.ontouchend=(e)=>{
    }
   }
}
left3a.ontouchstart=(e)=>{
    console.log('pp')
    var current;
    document.body.style.cursor='grabbing'
    var l =getOffset(left3a).left;var t =getOffset(left3a).top
   document.body.ontouchmove=(e)=>{
    
    current = document.elementFromPoint(e.touches[0].pageX - window.scrollX,e.touches[0].pageY - window.scrollY)
    const mousePos = { x: parseInt(e.touches[0].pageX - window.scrollX), y: parseInt(e.touches[0].pageY - window.scrollY) }
    const carPos = { x: l, y: t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('lefta').style.rotate = angle+'deg';
    document.getElementById('left2a').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.ontouchend=(event)=>{
    for (let i = 0; i < all.length; i++) {
        if( current ==$('#right1'+all[i])[0] && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2a').style.transition= '0.5s';
        document.getElementById('lefta').style.transition= '0.5s';
        document.getElementById('left2a').style.width='1vw';
        document.getElementById('lefta').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3a').style.display='block';
        setTimeout(()=>{ document.getElementById('left2a').style.transition= '0.04s';document.getElementById('lefta').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3a').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2a').style.transition= '0.5s';
        document.getElementById('lefta').style.transition= '0.5s';
        document.getElementById('left2a').style.width='1vw';
        document.getElementById('lefta').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2a').style.transition= '0.04s';document.getElementById('lefta').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.ontouchmove=(e)=>{
    }
    document.body.ontouchend=(e)=>{
    }
   }
}

left3b.ontouchstart=(e)=>{
    console.log('pp')
    var current;
    document.body.style.cursor='grabbing'
    var l =getOffset(left3b).left;var t =getOffset(leftb).top
   document.body.ontouchmove=(e)=>{
    current = document.elementFromPoint(e.touches[0].pageX - window.scrollX,e.touches[0].pageY - window.scrollY)
    const mousePos = { x: parseInt(e.touches[0].pageX - window.scrollX), y: parseInt(e.touches[0].pageY - window.scrollY) }
    const carPos = { x: l, y:t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftb').style.rotate = angle+'deg';
    document.getElementById('left2b').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.ontouchend=(event)=>{
    for (let i = 0; i < all.length; i++) {
        if( current ==$('#right1'+all[i])[0] && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2b').style.transition= '0.5s';
        document.getElementById('leftb').style.transition= '0.5s';
        document.getElementById('left2b').style.width='1vw';
        document.getElementById('leftb').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3b').style.display='block';
        setTimeout(()=>{ document.getElementById('left2b').style.transition= '0.04s';document.getElementById('leftb').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3b').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2b').style.transition= '0.5s';
        document.getElementById('leftb').style.transition= '0.5s';
        document.getElementById('left2b').style.width='1vw';
        document.getElementById('leftb').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2b').style.transition= '0.04s';document.getElementById('leftb').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.ontouchmove=(e)=>{
    }
    document.body.ontouchend=(e)=>{
    }
   }
}

left3c.ontouchstart=(e)=>{
    console.log('pp')
    var current;
    document.body.style.cursor='grabbing'
    var l =getOffset(left3c).left;var t =getOffset(left3c).top
   document.body.ontouchmove=(e)=>{
    
    current = document.elementFromPoint(e.touches[0].pageX - window.scrollX,e.touches[0].pageY - window.scrollY)
    const mousePos = { x: parseInt(e.touches[0].pageX - window.scrollX), y: parseInt(e.touches[0].pageY - window.scrollY) }
    const carPos = { x: l, y: t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftc').style.rotate = angle+'deg';
    document.getElementById('left2c').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.ontouchend=(event)=>{
    for (let i = 0; i < all.length; i++) {
        if( current ==$('#right1'+all[i])[0] && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2c').style.transition= '0.5s';
        document.getElementById('leftc').style.transition= '0.5s';
        document.getElementById('left2c').style.width='1vw';
        document.getElementById('leftc').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3c').style.display='block';
        setTimeout(()=>{ document.getElementById('left2c').style.transition= '0.04s';document.getElementById('leftc').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3c').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2c').style.transition= '0.5s';
        document.getElementById('leftc').style.transition= '0.5s';
        document.getElementById('left2c').style.width='1vw';
        document.getElementById('leftc').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2c').style.transition= '0.04s';document.getElementById('leftc').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.ontouchmove=(e)=>{
    }
    document.body.ontouchend=(e)=>{
    }
   }
}
left3d.ontouchstart=(e)=>{
    console.log('pp')
    var current;
    document.body.style.cursor='grabbing';
    var l =getOffset(left3d).left;var t =getOffset(left3d).top
   document.body.ontouchmove=(e)=>{
    
    current = document.elementFromPoint(e.touches[0].pageX - window.scrollX,e.touches[0].pageY - window.scrollY)
    const mousePos = { x: parseInt(e.touches[0].pageX - window.scrollX), y: parseInt(e.touches[0].pageY - window.scrollY) }
    const carPos = { x: l, y: t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftd').style.rotate = angle+'deg';
    document.getElementById('left2d').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.ontouchend=(event)=>{
    for (let i = 0; i < all.length; i++) {
        if( current ==$('#right1'+all[i])[0] && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2d').style.transition= '0.5s';
        document.getElementById('leftd').style.transition= '0.5s';
        document.getElementById('left2d').style.width='1vw';
        document.getElementById('leftd').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3d').style.display='block';
        setTimeout(()=>{ document.getElementById('left2').style.transition= '0.04s';document.getElementById('left').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3d').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2d').style.transition= '0.5s';
        document.getElementById('leftd').style.transition= '0.5s';
        document.getElementById('left2d').style.width='1vw';
        document.getElementById('leftd').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2d').style.transition= '0.04s';document.getElementById('leftd').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.ontouchmove=(e)=>{
    }
    document.body.ontouchend=(e)=>{
    }
   }
}

left3e.ontouchstart=(e)=>{
    console.log('pp')
    var current;
    document.body.style.cursor='grabbing'
    var l =getOffset(left3e).left;var t =getOffset(left3e).top
   document.body.ontouchmove=(e)=>{
    
    current = document.elementFromPoint(e.touches[0].pageX - window.scrollX,e.touches[0].pageY - window.scrollY)
    const mousePos = { x: parseInt(e.touches[0].pageX - window.scrollX), y: parseInt(e.touches[0].pageY - window.scrollY) }
    const carPos = { x: l, y: t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('lefte').style.rotate = angle+'deg';
    document.getElementById('left2e').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.ontouchend=(event)=>{
    for (let i = 0; i < all.length; i++) {
        if( current ==$('#right1'+all[i])[0] && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2e').style.transition= '0.5s';
        document.getElementById('lefte').style.transition= '0.5s';
        document.getElementById('left2e').style.width='1vw';
        document.getElementById('lefte').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3e').style.display='block';
        setTimeout(()=>{ document.getElementById('left2e').style.transition= '0.04s';document.getElementById('lefte').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3e').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2e').style.transition= '0.5s';
        document.getElementById('lefte').style.transition= '0.5s';
        document.getElementById('left2e').style.width='1vw';
        document.getElementById('lefte').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2e').style.transition= '0.04s';document.getElementById('lefte').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.ontouchmove=(e)=>{
    }
    document.body.ontouchend=(e)=>{
    }
   }
}
left3f.ontouchstart=(e)=>{
    console.log('pp')
    var current;
    document.body.style.cursor='grabbing';
    var l =getOffset(left3f).left;var t =getOffset(left3f).top
   document.body.ontouchmove=(e)=>{
    
    current = document.elementFromPoint(e.touches[0].pageX - window.scrollX,e.touches[0].pageY - window.scrollY)
    const mousePos = { x: parseInt(e.touches[0].pageX - window.scrollX), y: parseInt(e.touches[0].pageY - window.scrollY) }
    const carPos = { x: l, y: t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftf').style.rotate = angle+'deg';
    document.getElementById('left2f').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.ontouchend=(event)=>{
    for (let i = 0; i < all.length; i++) {
        if( current ==$('#right1'+all[i])[0] && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2f').style.transition= '0.5s';
        document.getElementById('leftf').style.transition= '0.5s';
        document.getElementById('left2f').style.width='1vw';
        document.getElementById('leftf').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3f').style.display='block';
        setTimeout(()=>{ document.getElementById('left2f').style.transition= '0.04s';document.getElementById('leftf').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3f').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2f').style.transition= '0.5s';
        document.getElementById('leftf').style.transition= '0.5s';
        document.getElementById('left2f').style.width='1vw';
        document.getElementById('leftf').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2f').style.transition= '0.04s';document.getElementById('leftf').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.ontouchmove=(e)=>{
    }
    document.body.ontouchend=(e)=>{
    }
   }
}
left3g.ontouchstart=(e)=>{
    console.log('pp')
    var current;
    document.body.style.overflowY='hidden'
    document.body.style.cursor='grabbing';
    var l =getOffset(left3g).left;var t =getOffset(left3g).top
   document.body.ontouchmove=(e)=>{
    current = document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)
    const mousePos = { x: (e.touches[0].clientX), y: (e.touches[0].clientY) }
    const carPos = { x: l, y: t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('leftg').style.rotate = angle+'deg';
    document.getElementById('left2g').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.ontouchend=(event)=>{
    for (let i = 0; i < all.length; i++) {
        if( current ==$('#right1'+all[i])[0] && $('#right1'+all[i]).css('background-image').includes('btnDone')==false){
            $('#right1'+all[i]).css('background-image','url("./IMG/btnDone.png');
            $('#right1'+all[i]).css({width:'2vw',height:'2vw'});
            var img = document.createElement('img')
            img.src="./IMG/delete.png";
            $(img).addClass('delete')
            $('#right'+all[i]).append(img)
            img.onclick=()=>{
                document.getElementById('left2g').style.transition= '0.5s';
        document.getElementById('leftg').style.transition= '0.5s';
        document.getElementById('left2g').style.width='1vw';
        document.getElementById('leftg').style.rotate='0deg';
        img.remove();
        $('#right1'+all[i]).css('background-image','url(./IMG/rbutton.png)');
        document.getElementById('left3g').style.display='block';
        setTimeout(()=>{ document.getElementById('left2g').style.transition= '0.04s';document.getElementById('leftg').style.transition= '0.04s';},500)
            }
            fall=true;
            document.getElementById('left3g').style.display='none';
            setTimeout(()=>{fall=false},1000)
        }  
    }
    if(fall==false){
        document.getElementById('left2g').style.transition= '0.5s';
        document.getElementById('leftg').style.transition= '0.5s';
        document.getElementById('left2g').style.width='1vw';
        document.getElementById('leftg').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('left2g').style.transition= '0.04s';document.getElementById('leftg').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.ontouchmove=(e)=>{
    }
    document.body.ontouchend=(e)=>{
    }
   }
}

leftDemo.ontouchstart=(e)=>{
    document.getElementById('finger').style.display='none';
    document.getElementById('finger').style.animation='none'
    var current;
    document.body.style.overflowY='hidden'
    document.body.style.cursor='grabbing'
    var l =getOffset(leftDemo).left;var t =getOffset(leftDemo).top
   document.body.ontouchmove=(e)=>{
    current = document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)
    const mousePos = { x: (e.touches[0].clientX), y: (e.touches[0].clientY) }
    const carPos = { x: l, y: t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('fst').style.rotate = angle+'deg';
    document.getElementById('leftLine').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';

}
   document.body.ontouchend=(event)=>{
    var rightDemo = document.getElementById('demoRight1')
    for (let i = 0; i < all.length; i++) {
        if( current ==rightDemo && $(rightDemo).css('background-image').includes('btnDone')==false){
            rightDemo.src="./IMG/btnDone.png";
            $(rightDemo).css({width:'3.5vw',height:'3.5vw'});
            leftDemo.style.display='none';
            fall=true;
            setTimeout(()=>{fall=false},1000)
            setTimeout(()=>{$("#startScreen").fadeOut()},3000)
            $('#startScreen')[0].querySelector('h2').innerText =" Great !!  Let's do exercise"
        }  
    }
    if(fall==false){
        document.getElementById('leftLine').style.transition= '0.5s';
        document.getElementById('fst').style.transition= '0.5s';
        document.getElementById('leftLine').style.width='1vw';
        document.getElementById('fst').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('leftLine').style.transition= '0.04s';document.getElementById('fst').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.ontouchmove=(e)=>{
    }
    document.body.ontouchend=(e)=>{
    }
   }
}
leftDemo.onmousedown=(e)=>{
    document.getElementById('finger').style.display='none';
    document.getElementById('finger').style.animation='none'
    var current;
    document.body.style.overflowY='hidden'
    document.body.style.cursor='grabbing'
    var l =getOffset(leftDemo).left;var t =getOffset(leftDemo).top
   document.body.onmousemove=(e)=>{
    current = document.elementFromPoint(e.clientX,e.clientY)
    const mousePos = { x: (e.clientX), y: (e.clientY) }
    const carPos = { x: l, y: t}
    const vector = { x: mousePos.x - carPos.x, y: mousePos.y - carPos.y }
    const angle = Math.atan2(vector.y, vector.x) * 180 / Math.PI;
    document.getElementById('fst').style.rotate = angle+'deg';
    document.getElementById('leftLine').style.width= Math.sqrt(((mousePos.x - carPos.x)*(mousePos.x - carPos.x))+((mousePos.y - carPos.y)*(mousePos.y - carPos.y)))+ 'px';
    }
   document.body.onmouseup=(e)=>{
    console.log('up');
    document.body.style.cursor='auto'
    var rightDemo = document.getElementById('demoRight1')
        if( current ==rightDemo && $(rightDemo).css('background-image').includes('btnDone')==false){
            rightDemo.src="./IMG/btnDone.png";
            $(rightDemo).css({width:'3.5vw',height:'3.5vw'});
            leftDemo.style.display='none';
            fall=true;
            $('#startScreen')[0].querySelector('h2').innerText =" Great !!  Let's do exercise"
            setTimeout(()=>{fall=false},1000)
            setTimeout(()=>{$("#startScreen").fadeOut()},3000)
        }  
    if(fall==false){
        document.getElementById('leftLine').style.transition= '0.5s';
        document.getElementById('fst').style.transition= '0.5s';
        document.getElementById('leftLine').style.width='1vw';
        document.getElementById('fst').style.rotate='0deg';
        setTimeout(()=>{ document.getElementById('leftLine').style.transition= '0.04s';document.getElementById('fst').style.transition= '0.04s';},500)
    }
    document.body.style.cursor='auto'
    document.body.onmousemove=(e)=>{
    }
    document.body.onmouseup=(e)=>{
    }
   }
}


document.getElementById('Start').onclick=()=>{
    $('#demo').css('display','flex')
    $('#startScreen')[0].querySelector('h2').style.margin='0'
    $('#Start').fadeOut()
    setTimeout(()=>{document.getElementById('finger').style.animation='move 3s linear infinite'},800)
}

