/**
 * Created by Denis Bondarenko (github.com/bondden) on 6/11/16.
 */
"use strict";

module.exports=function(cfg){
  
  cfg.dft=cfg.dft||{
    act:"replace",
    val:"some unbelievable search pattern",
    mdf:"ig",
    rpl:""
  };
  
  let fBdy=`return s`;
  
  for(let i=0,l=cfg.dat.length;i<l;i++){
    
    let x=JSON.parse(JSON.stringify(cfg.dft));
    
    if(cfg.dat[i].join){
      cfg.dat[i].join.dlm=cfg.dat[i].join.dlm||'|';
      cfg.dat[i].val=cfg.dat[i].join.lst.join(cfg.dat[i].join.dlm);
    }
    
    Object.keys(x).forEach(k=>{
      if(cfg.dat[i][k]){
        x[k]=cfg.dat[i][k];
      }
    });
    
    //x.val=x.val.replace(/\\/ig,'\\');
    //in test cfg obj backslashes should be escaped

    fBdy+=`.${x.act}(new RegExp(/${x.val}/,'${x.mdf}'),'${x.rpl}')`;
    
  }

  return new Function(
    's',
    fBdy
  );
  
};
