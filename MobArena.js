//Start
function newLevel(){
  var fr=0
  fr=ModPE.loadData(firstrun);
  if(fr==0){msg("Thank youo for installing the MobArena Modification for MobArena map by RainbowPartyPlay");}
}
function msg(m){clientMessage("§6MobArenaModification§f > §7"+m);}
function leaveGame(){ModPE.saveData(firstrun, 1);}
