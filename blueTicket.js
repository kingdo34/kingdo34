function blueTicket(a, b, c){
  return a+b==10 || b+c==10 || c+a==10 ? 10 : (a==b+10 || a==b-10) ? 5 : (b==c+10 || b==c-10) ? 5 : a==c+10 || a==c-10 ? 5:0 ;
}