function teaParty(tea, candy){
  return (((tea >= 2 * candy || candy >= 2 * tea) && tea >= 5 && candy >= 5) ? 2 : ((tea >= 5 && candy >= 5) ? 1 : 0))
}