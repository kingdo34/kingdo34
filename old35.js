function old35(n){
    if ((n % 3 === 0) || (n % 5 === 0) ) {
      return true;
    }
   if  !( n % 3 === 0 && n %  5 === 0 ) {
     return false;
  }
  return false;
}