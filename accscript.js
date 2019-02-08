var accelerate = function(deg);
{
  var t = 0;
  var p0 = deg;
  var p = p0;
  var v0 = 2;
  var a = 0;
  while(true){
    t ++;
    a = v0**2/12;
    p = p0 + v0t + .5*a*t**2;
    return p;
  }
}
