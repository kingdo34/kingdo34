function inOrderEqual(a, b, c, equalOk){
  
  if (!equalOk && a < b && b < c)
    return true;
  if (equalOk && a <= b && b <= c)
    return true;
  else
    return false;
}