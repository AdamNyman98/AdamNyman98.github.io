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
  
      var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  
      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
          "L", x,y,
          "L", start.x, start.y
      ].join(" ");
      
      console.log(d);
  
      return d;       
  }

  let x = 300
  let y = 270  
  let r = 270
  let start = 330
  let end = 350
  let arc = {}

  for(let i = 0; i < 18; i++){
    arc[i] = describeArc(x, y, r, start, end);
    start += 20
    end += 20
  }

  // months
  document.getElementById("skymnathir").setAttribute("d", arc[0])
  document.getElementById("midnathir").setAttribute("d", arc[1])
  document.getElementById("grynathir").setAttribute("d", arc[2])

  document.getElementById("ruprum").setAttribute("d", arc[3])
  document.getElementById("midcuprum").setAttribute("d", arc[4])
  document.getElementById("viprum").setAttribute("d", arc[5])

  document.getElementById("cressum").setAttribute("d", arc[6])
  document.getElementById("maxsum").setAttribute("d", arc[7])
  document.getElementById("redsum").setAttribute("d", arc[8])

  document.getElementById("ocasol").setAttribute("d", arc[9])
  document.getElementById("midsol").setAttribute("d", arc[10]) 
  document.getElementById("ortsol").setAttribute("d", arc[11]) 

  document.getElementById("noname1").setAttribute("d", arc[12])
  document.getElementById("noname2").setAttribute("d", arc[13]) 
  document.getElementById("noname3").setAttribute("d", arc[14]) 

  document.getElementById("creslow").setAttribute("d", arc[15])
  document.getElementById("minlow").setAttribute("d", arc[16]) 
  document.getElementById("redlow").setAttribute("d", arc[17]) 

 
  r = 170
  start = 330
  end = 30
  for(let i = 0; i < 6; i++){
    arc[i] = describeArc(x, y, r, start, end);
    start += 60
    end += 60
  }
  
  // seasons
  const nathir = document.getElementById("nathir").setAttribute("d", arc[0])
  const cuprum = document.getElementById("cuprum").setAttribute("d", arc[1])
  const sumare = document.getElementById("sumare").setAttribute("d", arc[2])
  const solaris = document.getElementById("solaris").setAttribute("d", arc[3])
  const noname = document.getElementById("noname").setAttribute("d", arc[4])
  const lomare = document.getElementById("lomare").setAttribute("d", arc[5])