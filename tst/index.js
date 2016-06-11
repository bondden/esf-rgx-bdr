/**
 * Created by Denis Bondarenko (github.com/bondden) on 6/11/16.
 */
"use strict";

const
  assert   =require('chai').assert,
  path     =require('path'),
  fs       =require('fs-extra'),

  cfg      =require('./d/i/cfg'),
  mod      =require('../index.js')
  ;

function loadTestData(
  n,
  d={
    i:null,
    e:null
  }
){
  return new Promise((rs,rj)=>{

    let wtr=[];

    Object.keys(d).forEach((k,i,a)=>{

      wtr.push(new Promise((rs1,rj1)=>{

        fs.readFile(
          path.resolve(dir[k]+'/'+n+'.svg'),
          {encoding:'utf8'},
          (e,r)=>{

            if(e){
              rj1(e);
              return e;
            }

            rs1({
              n:n,
              key:k,
              cnt:r
            });

          }
        );

      }));

      if(i===a.length-1){
        Promise
          .all(wtr)
          .then(r=>{

            r.forEach(v=>{
              d[v.key]=v;
            });

            rs(d);

          })
          .catch(e=>rj(e))
        ;
      }

    });

  });
}

const dir={
  //input
  i:path.resolve(__dirname+'/d/i'),
  //etalon
  e:path.resolve(__dirname+'/d/e')
};

suite('esf-rgx-bdr suite',function(){

  const tmOut=20000;
  this.timeout(tmOut);

  test('mod',done=>{

    loadTestData(1)
      .then(d=>{

        d.o={cnt:''};
        
        let fun=mod(cfg);

        d.o.cnt=fun(d.i.cnt);
        assert.equal(d.o.cnt,d.e.cnt,'result should be equal to the etalon');

        done();

      })
      .catch(e=>done(e))
    ;

  });

});
