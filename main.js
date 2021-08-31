'use strict';{


  const canvas = document.querySelector('canvas');
  
  //if (typeof canvas.getContext === 'undefined') {
    //return;
  //}

  const ctx = canvas.getContext('2d');

  const CANVAS_WIDTH = 1300;
  const CANVAS_HEIGHT = 240;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = CANVAS_WIDTH * dpr;
  canvas.height = CANVAS_HEIGHT * dpr;
  ctx.scale(dpr, dpr);
  canvas.style.width = CANVAS_WIDTH + 'px';
  canvas.style.height = CANVAS_HEIGHT + 'px';





//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//課税期間+-

  

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//一定の場合


//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//条件
   function cond(csktvdp1y,sktvd,fktvd,leng,skkvd,trmkjk,trmttk,trmkzk){
     
    let itt = document.getElementById('itt'); //一定の場合
    let ittv = itt.value;
    let ittvd = new Date(ittv) //一定事由が起きた時期
    let trmitfk = Math.ceil((fktvd-ittvd)/86400000/31) //最初の期間 月ベース
    if (trmitfk == 0){
      trmitfk = 1
    }

    alert(trmitfk);
   

    let skkvdm = skkvd.getMonth()+1
    



    
    

    
    let  mn1d = new Date(csktvdp1y.setDate(csktvdp1y.getDate()-1))
   

    csktvdp1y.setDate(csktvdp1y.getDate()+1) //元に戻す
    
  if(ittv == ""){ //if1 一定の場合に該当しない if1
    
  　　if (mn1d.getTime() != fktvd.getTime()) {//if2 期間が1年じゃない

　　　alert("課税期間が1年間ではありません。誤った結果を表示する可能性があります。")
　　　return;
      }//if2

  }//if1
  else{ // 一定の場合に該当する if1
      
      let itj = document.getElementById('itj'); //一定の場合
      let itjv=itj.value
      if(itjv == "事業開始(新設)" || itjv == "新設合併" || itjv == "新設分割"){　//if2
      alert("事業開始(新設)")

          if(ittvd.getTime() == sktvd.getTime()){ // //一定事由時期と課税期間開始時期が同じ場合　初年度 if3
            alert("初年度")
            leng.lk = 0 //基準期間変更
            leng.lt = 0　//特定期間変更
            leng.l = trmitfk*20　//課税期間変更
          }//if3
          else if(ittvd.getTime() != sktvd.getTime() && Number.isNaN(skkvd.getTime())){ //一定事由時期と課税期間開始時期が違う　かつ　基準期間がない　場合　2年目 if3
            alert("2年度")
            leng.lk = trmkjk*20 //基準期間変更
            leng.lt = trmttk*20　//特定期間変更
            leng.l = trmkzk*20　//課税期間変更
          }//if3
          else if(ittvd.getTime() != sktvd.getTime() && skkvd.getTime() != " "){  //一定事由時期と課税期間開始時期が違う　かつ　基準期間がある　場合　3年目以降 if3
            alert("3年度以降")
            leng.lk = trmkjk*20 //基準期間変更
            leng.lt = trmttk*20　//特定期間変更
            leng.l = trmkzk*20　//課税期間変更
          }//if3

         
      
      
     



      



      }//if2
      


    　　if (mn1d.getTime() != fktvd.getTime()) {//if2 期間が1年じゃない
　　　　alert("期間が1年じゃない")
          
      　let ittvdp1y = new Date(ittvd.setFullYear(ittvd.getFullYear()+1))
        
        let ittvdp1ym1d= new Date(ittvdp1y.setDate(ittvdp1y.getDate()-1))
        
        leng.lk = 0 //基準期間変更
        leng.lt = 0　//特定期間変更
        leng.l = trmitfk*20　//課税期間変更

        
        
            if(ittvdp1ym1d.getTime() < fktvd.getTime()){//if3

              alert("課税期間が1年間を超えています")
            }//if3


        }//if2


  }//if1


  }



  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  //new date 取得時に　9時ではなく0時になるので一時運用停止

   //let autoskt = document.getElementById('skt'); //課税期間開始
   //let autofkt = document.getElementById('fkt'); //課税期間終了
   //autoskt.addEventListener('input', autokt);
    
   // function autokt() {
   // autofkt.type = "text"　//課税期間終了をテキスト形式に変換
   // let autosktv = autoskt.value
    

   // var autofktv = new Date(autosktv);
    
   // autofktv = new Date(autofktv.setFullYear(autofktv.getFullYear()+1))//1年後　数字になるのでNEWで日付に再変換
   // autofktv = new Date(autofktv.setDate(autofktv.getDate()-1))//経過する日　数字になるのでNEWで日付に再変換
    
    
    //var y = autofktv.getFullYear();
    //var m = ("00" + (autofktv.getMonth()+1)).slice(-2);
    //var d = ("00" + autofktv.getDate()).slice(-2);
    //var result = y + "/" + m + "/" + d;
    //autofkt.value = result ;
   // }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------


    function judge1(){
      
    let kzut = document.getElementById('kzut'); //課税売上高（当期）
    let kzuk = document.getElementById('kzuk'); //課税売上高（基準期間）
    let kzuz = document.getElementById('kzuz'); //課税売上高（特定期間）
    let kyz = document.getElementById('kyz'); //課税売上高（給与）
    
    let kzutv = kzut.value;
    let kzukv = kzuk.value;
    let kzuzv = kzuz.value;
    let kyzv = kyz.value;

    

    if (kzukv > 10000000) {
     
      
     ctx.beginPath();
     ctx.moveTo(10+480, 70);
     ctx.lineTo(10+480+240, 70);
     ctx.strokeStyle = 'rgb(231, 170, 218)';//納税義務
     ctx.lineWidth = 15;
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(10, 70);
     ctx.lineTo(10+480, 70);
     ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
     ctx.lineWidth = 15;
     ctx.stroke();  
     
     ctx.beginPath();
     ctx.moveTo(10+720, 70);
     ctx.lineTo(10+1200, 70);
     ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
     ctx.lineWidth = 15;
     ctx.stroke();  

    }
    else{
      judge11() 
    }


    }


//-----------------------------------------------------------------------------------------------------------------------------------------------------------

    function judge11(){ //特定期間
   
      let kzut = document.getElementById('kzut'); //課税売上高（当期）
      let kzuk = document.getElementById('kzuk'); //課税売上高（基準期間）
      let kzuz = document.getElementById('kzuz'); //課税売上高（特定期間）
      let kyz = document.getElementById('kyz'); //課税売上高（給与）
      
      let kzutv = kzut.value;
      let kzukv = kzuk.value;
      let kzuzv = kzuz.value;
      let kyzv = kyz.value;
  
      
  
      if (kzuzv > 10000000 && kyzv > 10000000) {
        
       ctx.beginPath();
       ctx.moveTo(10+480, 70);
       ctx.lineTo(10+480+240, 70);
       ctx.strokeStyle = 'rgb(231, 170, 218)';//納税義務
       ctx.lineWidth = 15;
       ctx.stroke();

       ctx.beginPath();
       ctx.moveTo(10, 70);
       ctx.lineTo(10+480, 70);
       ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
       ctx.lineWidth = 15;
       ctx.stroke();  
       
       ctx.beginPath();
       ctx.moveTo(10+720, 70);
       ctx.lineTo(10+1200, 70);
       ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
       ctx.lineWidth = 15;
       ctx.stroke();  


      }
      else{  
        
        ctx.beginPath();
        ctx.moveTo(10+480, 70);
        ctx.lineTo(10+480+240, 70);
        ctx.strokeStyle = 'rgb(231, 170, 218,0.55)';//納税義務
        ctx.lineWidth = 15;
        ctx.stroke();
            
        ctx.beginPath();
        ctx.moveTo(10, 70);
        ctx.lineTo(10+480, 70);
        ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
        ctx.lineWidth = 15;
        ctx.stroke();  
        
        ctx.beginPath();
        ctx.moveTo(10+720, 70);
        ctx.lineTo(10+1200, 70);
        ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
        ctx.lineWidth = 15;
        ctx.stroke();  


      }
  
  
      }


//-----------------------------------------------------------------------------------------------------------------------------------------------------------

function judge01(){ //新設法人
  
  let cap = document.getElementById('cap'); //新設法人　資本金
  
  
  let capv = cap.value;
  
  
  if (capv >= 10000000 ) {
    
    　　
   ctx.beginPath();
   ctx.moveTo(10+480, 70);
   ctx.lineTo(10+480+240, 70);
   ctx.strokeStyle = 'rgb(231, 170, 218)';//納税義務
   ctx.lineWidth = 15;
   ctx.stroke();

   ctx.beginPath();
   ctx.moveTo(10, 70);
   ctx.lineTo(10+480, 70);
   ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
   ctx.lineWidth = 15;
   ctx.stroke();  
   
   ctx.beginPath();
   ctx.moveTo(10+720, 70);
   ctx.lineTo(10+1200, 70);
   ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
   ctx.lineWidth = 15;
   ctx.stroke();  


  }
  else{
    
    judge02()
   
  }


  }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

function judge02(){ //特定新規法人
  
  let tss = document.getElementById('tss'); //特定新規法人
  
  
  let tssv = tss.value;
  
  
  if (tssv == "該当") {
    
   
   ctx.beginPath();
   ctx.moveTo(10+480, 70);
   ctx.lineTo(10+480+240, 70);
   ctx.strokeStyle = 'rgb(231, 170, 218)';//納税義務
   ctx.lineWidth = 15;
   ctx.stroke();

   ctx.beginPath();
   ctx.moveTo(10, 70);
   ctx.lineTo(10+480, 70);
   ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
   ctx.lineWidth = 15;
   ctx.stroke();  
   
   ctx.beginPath();
   ctx.moveTo(10+720, 70);
   ctx.lineTo(10+1200, 70);
   ctx.strokeStyle = 'rgba(166, 148, 173, 0.535)';//納税義務　不明期間
   ctx.lineWidth = 15;
   ctx.stroke();  


  }
  else{
    
    judge1()
   
   
  }


  }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
function judge3(sktv,fktv,csktvdm3y,cfktvdm3y,csktvdm2y,cfktvdm2y,csktvdm1y,cfktvdm1y,csktvdp1y,cfktvdp1y,csktvdp2y,cfktvdp2y,ttkvd2,ktsvd2,tstvd2){ //課税選択・変更
  
  //let skt3 = document.getElementById('skt'); //課税期間開始
  //let fkt3 = document.getElementById('fkt'); //課税期間終了
  let skt3v = sktv//課税期間開始
  let fkt3v = fktv//課税期間終了
  let skt3vd = new Date(skt3v)//課税期間開始
  let fkt3vd = new Date(fkt3v)//課税期間終了
  
  let kjsh = document.getElementById('kjsh'); //課税選択・変更
  let kjshv = kjsh.value
  let kjshvd = new Date(kjshv)


  let kjshvdp2y = new Date()
  let kjshvdp2ym1d = new Date()


  kjshvdp2y = kjshvd.setFullYear(kjshvd.getFullYear()+2) //2年後 経過した日
  
  let ckjshvdp2y= new Date(kjshvdp2y)//数字になるため再変換　2年後 経過した日
  
  kjshvdp2ym1d = ckjshvdp2y.setDate(ckjshvdp2y.getDate()-1) //2年後 経過する日
  

  let ckjshvdp2ym1d = new Date(kjshvdp2ym1d)//数字になるため再変換　2年後 経過する日


  let rkjshvd = new Date(kjshv)//再取得


  let tf = -5;//初期値

  if((csktvdm3y.getTime()  <= ttkvd2.getTime() && ttkvd2.getTime() <= cfktvdm3y.getTime())// 調整対象固定資産等仕入if1
  ||(csktvdm3y.getTime()  <= ktsvd2.getTime() && ktsvd2.getTime() <= cfktvdm3y.getTime())||
  csktvdm3y.getTime()  <= tstvd2.getTime() && tstvd2.getTime() <= cfktvdm3y.getTime()){
    tf = -3;
  }// 調整対象固定資産等仕入if1
  else if((csktvdm2y.getTime()  <= ttkvd2.getTime() && ttkvd2.getTime() <= cfktvdm2y.getTime())// 調整対象固定資産等仕入if1
  ||(csktvdm2y.getTime()  <= ktsvd2.getTime() && ktsvd2.getTime() <= cfktvdm2y.getTime())||
  csktvdm2y.getTime()  <= tstvd2.getTime() && tstvd2.getTime() <= cfktvdm2y.getTime()){
    tf = -2;
  }// 調整対象固定資産等仕入if1
  else if((csktvdm1y.getTime()  <= ttkvd2.getTime() && ttkvd2.getTime() <= cfktvdm1y.getTime())// 調整対象固定資産等仕入if1
  ||(csktvdm1y.getTime()  <= ktsvd2.getTime() && ktsvd2.getTime() <= cfktvdm1y.getTime())||
  csktvdm1y.getTime()  <= tstvd2.getTime() && tstvd2.getTime() <= cfktvdm1y.getTime()){
     tf = -1;
   }// 調整対象固定資産等仕入if1
  else if((skt3vd.getTime()  <= ttkvd2.getTime() && ttkvd2.getTime() <= fkt3vd.getTime())// 調整対象固定資産等仕入if1
  ||(skt3vd.getTime()  <= ktsvd2.getTime() && ktsvd2.getTime() <= fkt3vd.getTime())||
  skt3vd.getTime()  <= tstvd2.getTime() && tstvd2.getTime() <= fkt3vd.getTime()){
     tf = 0;
  }// 調整対象固定資産等仕入if1
 else  if((csktvdp1y.getTime()  <= ttkvd2.getTime() && ttkvd2.getTime() <= cfktvdp1y.getTime())// 調整対象固定資産等仕入if1
  ||(csktvdp1y.getTime()  <= ktsvd2.getTime() && ktsvd2.getTime() <= cfktvdp1y.getTime())||
  csktvdp1y.getTime()  <= tstvd2.getTime() && tstvd2.getTime() <= cfktvdp1y.getTime()){
     tf = 1;
  }// 調整対象固定資産等仕入if1

//----------------------------------------------------------------------------------------------------------------------------------------------------
  if (kjshv =="") { //if1
      
    ctx.beginPath();
    ctx.moveTo(10, 110);
    ctx.lineTo(10+1200, 110);
    ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
    ctx.lineWidth = 15;
    ctx.stroke();  


   return;
  }
　else{ //if1
  
  if(rkjshvd.getTime() < csktvdm3y.getTime() ){//  前々々期以前に提出の場合 //if2
    　
      
  
      ctx.beginPath();
      ctx.moveTo(10+(240*0+240*0), 110);
      ctx.lineTo(10+(240*0+240*0+240*5), 110);
      ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
      ctx.lineWidth = 15;
      ctx.stroke();  
     }
  

  else if(csktvdm3y.getTime()  <= rkjshvd.getTime() && rkjshvd.getTime() <= cfktvdm3y.getTime()){//  前々々期に提出の場合 //if2
    　let f = 0;
    
    if (tf == -2) {　//提出制限期間中に仕入if3
      f = 1
    }//if3

    ctx.beginPath();
    ctx.moveTo(10+240*0, 110);
    ctx.lineTo(10+(240*0+240*1+(240*2*f)), 110);
    ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
    ctx.lineWidth = 15;
    ctx.stroke();    

    ctx.beginPath();
    ctx.moveTo(10+(240*0+240*1+(240*2*f)), 110);
    ctx.lineTo(10+(240*0+240*1+(240*2*f)+240*4), 110);
    ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
    ctx.lineWidth = 15;
    ctx.stroke();  
  }//if2

  
  else if(csktvdm2y.getTime()  <= rkjshvd.getTime() && rkjshvd.getTime() <= cfktvdm2y.getTime()){//  前々期に提出の場合 //if2
    　
    let f = 0;
    
    if (tf == -1) {　//提出制限期間中に仕入if3
      f = 1
    }//if3

     ctx.beginPath();
     ctx.moveTo(10+240*1, 110);
     ctx.lineTo(10+(240*1+240*1+(240*2*f)), 110);
     ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
     ctx.lineWidth = 15;
     ctx.stroke();    
 
     ctx.beginPath();
     ctx.moveTo(10+(240*1+240*1+(240*2*f)), 110);
     ctx.lineTo(10+(240*1+240*1+(240*2*f)+240*3), 110);
     ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
     ctx.lineWidth = 15;
     ctx.stroke();  
  }//if2

 else if(csktvdm1y.getTime()  <= rkjshvd.getTime() && rkjshvd.getTime() <= cfktvdm1y.getTime()){//  前期に提出の場合 //if2
      let f = 0;

      if (tf == 0) {　//提出制限期間中に仕入if3
        f = 1
      }//if3
      
     ctx.beginPath();
     ctx.moveTo(10+240*2, 110);
     ctx.lineTo(10+(240*2+240*1+(240*2*f)), 110);
     ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
     ctx.lineWidth = 15;
     ctx.stroke();    
 
     ctx.beginPath();
     ctx.moveTo(10+(240*2+240*1+(240*2*f)), 110);
     ctx.lineTo(10+(240*2+240*1+(240*2*f)+240*2), 110);
     ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
     ctx.lineWidth = 15;
     ctx.stroke();  
  }//if2

    else if(skt3vd.getTime()  <= rkjshvd.getTime() && rkjshvd.getTime() <= fkt3vd.getTime()){//  当期に提出の場合 //if2
      let f = 0;
     
      if (tf == 1) {　//提出制限期間中に仕入if3
      f = 1
      }//if3
   
       ctx.beginPath();
       ctx.moveTo(10+240*3, 110);
       ctx.lineTo(10+(240*3+240*1+(240*2*f)), 110);
       ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
       ctx.lineWidth = 15;
       ctx.stroke();    
 
       ctx.beginPath();
       ctx.moveTo(10+(240*3+240*1+(240*2*f)), 110);
       ctx.lineTo(10+(240*3+240*1+(240*2*f)+240*1), 110);
       ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
       ctx.lineWidth = 15;
       ctx.stroke(); 
       }//if2

      else if(csktvdp1y.getTime()  <= rkjshvd.getTime() && rkjshvd.getTime() <= cfktvdp1y.getTime()){//  翌期に提出の場合 //if2
        　let f = 0;
        

        ctx.beginPath();
        ctx.moveTo(10+240*4, 110);   
        ctx.lineTo(10+(240*4+240*1), 110);
        ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
        ctx.lineWidth = 15;
        ctx.stroke();    
    
        ctx.beginPath();
        ctx.moveTo(10+(240*4+240*1), 110);
        ctx.lineTo(10+(240*4+240*1+240*1), 110);
        ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
        ctx.lineWidth = 15;
        ctx.stroke();        
      }//if2

       else if(csktvdp2y.getTime()  <= rkjshvd.getTime() && rkjshvd.getTime() <= cfktvdp2y.getTime()){//  翌々期に提出の場合 //if2
        let f = 0;　

          ctx.beginPath();
          ctx.moveTo(10+240*5, 110);
          ctx.lineTo(10+(240*5+240*1), 110);
          ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
          ctx.lineWidth = 15;
          ctx.stroke();    
      
          ctx.beginPath();
          ctx.moveTo(10+(240*5+240*1), 110);
          ctx.lineTo(10+(240*5+240*1+240*1), 110);
          ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
          ctx.lineWidth = 15;
          ctx.stroke(); 
       }//if2
  


//　if(ts == "" ){ //短縮しているか確認


 // }
 //else{ //　2年後 経過する日の属する課税期間の初日
  
  let kjshvdp1ym1d = ckjshvdp2ym1d.setFullYear(ckjshvdp2ym1d.getFullYear()-1)
  let ckjshvdp1ym1d = new Date(kjshvdp1ym1d)//数字になるため再変換　2年後 経過する日の属する課税期間の初日

  //}


  let kjshvdd = new Date(kjshv)//再取得 =kjshvd
  
　let trm3d = (ckjshvdp1ym1d - kjshvdd) / 86400000; //差分日数 
  
  let trm3m = Math.floor(Number(trm3d) / 30);//差分月（切り捨て）
  


 }//if1
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
  function judge4(sktv,fktv,csktvdm3y,cfktvdm3y,csktvdm2y,cfktvdm2y,csktvdm1y,cfktvdm1y,csktvdp1y,cfktvdp1y,csktvdp2y,cfktvdp2y,ttkvd4,ktsvd4,tstvd4){ //簡易課税

   
    let skt4v = sktv//課税期間開始
    let fkt4v = fktv//課税期間終了
    let skt4vd = new Date(skt4v)//課税期間開始
    let fkt4vd = new Date(fkt4v)//課税期間終了
    

    let kzut = document.getElementById('kzut'); //簡易課税
    let kzutv = kzut.value

    let kkzt = document.getElementById('kkzt'); //簡易課税
    let kkztv = kkzt.value
    let kkztvd = new Date(kkztv)
    
    let x =0 //適用条件フラグ
    
    let tf = -5;//初期値

    if((csktvdm3y.getTime()  <= ttkvd4.getTime() && ttkvd4.getTime() <= cfktvdm3y.getTime())// 調整対象固定資産等仕入if1
    ||(csktvdm3y.getTime()  <= ktsvd4.getTime() && ktsvd4.getTime() <= cfktvdm3y.getTime())||
    csktvdm3y.getTime()  <= tstvd4.getTime() && tstvd4.getTime() <= cfktvdm3y.getTime()){
      tf = -3;
    }// 調整対象固定資産等仕入if1
    else if((csktvdm2y.getTime()  <= ttkvd4.getTime() && ttkvd4.getTime() <= cfktvdm2y.getTime())// 調整対象固定資産等仕入if1
    ||(csktvdm2y.getTime()  <= ktsvd4.getTime() && ktsvd4.getTime() <= cfktvdm2y.getTime())||
    csktvdm2y.getTime()  <= tstvd4.getTime() && tstvd4.getTime() <= cfktvdm2y.getTime()){
      tf = -2;
    }// 調整対象固定資産等仕入if1
    else if((csktvdm1y.getTime()  <= ttkvd4.getTime() && ttkvd4.getTime() <= cfktvdm1y.getTime())// 調整対象固定資産等仕入if1
    ||(csktvdm1y.getTime()  <= ktsvd4.getTime() && ktsvd4.getTime() <= cfktvdm1y.getTime())||
    csktvdm1y.getTime()  <= tstvd4.getTime() && tstvd4.getTime() <= cfktvdm1y.getTime()){
       tf = -1;
     }// 調整対象固定資産等仕入if1
    else if((skt4vd.getTime()  <= ttkvd4.getTime() && ttkvd4.getTime() <= fkt4vd.getTime())// 調整対象固定資産等仕入if1
    ||(skt4vd.getTime()  <= ktsvd4.getTime() && ktsvd4.getTime() <= fkt4vd.getTime())||
    skt4vd.getTime()  <= tstvd4.getTime() && tstvd4.getTime() <= fkt4vd.getTime()){
       tf = 0;
    }// 調整対象固定資産等仕入if1
   else  if((csktvdp1y.getTime()  <= ttkvd4.getTime() && ttkvd4.getTime() <= cfktvdp1y.getTime())// 調整対象固定資産等仕入if1
    ||(csktvdp1y.getTime()  <= ktsvd4.getTime() && ktsvd4.getTime() <= cfktvdp1y.getTime())||
    csktvdp1y.getTime()  <= tstvd4.getTime() && tstvd4.getTime() <= cfktvdp1y.getTime()){
       tf = 1;
    }// 調整対象固定資産等仕入if1

//---------------------------------------------提出関連

    if (kkztv =="") {//if1
      
      ctx.beginPath();
      ctx.moveTo(10, 150);
      ctx.lineTo(10+1200, 150);
      ctx.strokeStyle = 'rgb(170, 231, 194)';//簡易課税 提出可能期間
      ctx.lineWidth = 7.5;
      ctx.stroke();  


     return;
    }//if1
    else{//if1
      if(kkztvd.getTime() < csktvdm3y.getTime() ){//  前々々期以前に提出の場合 //if2
        　
          x = 1 //適用条件フラグ
      
          ctx.beginPath();
          ctx.moveTo(10+(240*0+240*0), 150);
          ctx.lineTo(10+(240*0+240*0+240*5), 150);
          ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
          ctx.lineWidth = 7.5;
          ctx.stroke();  
         }//if2
      
    
      else if(csktvdm3y.getTime()  <= kkztvd.getTime() && kkztvd.getTime() <= cfktvdm3y.getTime()){//  前々々期に提出の場合 //if2
        　
        let f = 0;
         x = 1 //適用条件フラグ
         
         if (tf == -2) {　//提出制限期間中に仕入if3
          f = 1
        }//if3


        ctx.beginPath();
        ctx.moveTo(10+240*0, 150);
        ctx.lineTo(10+(240*0+240*1+(240*2*f)), 150);
        ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
        ctx.lineWidth = 7.5;
        ctx.stroke();    
 
        ctx.beginPath();
        ctx.moveTo(10+(240*0+240*1+(240*2*f)), 150);
        ctx.lineTo(10+(240*0+240*1+(240*2*f)+240*4), 150);
        ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
        ctx.lineWidth = 7.5;
        ctx.stroke();  

          }//if2

      else if(csktvdm2y.getTime()  <= kkztvd.getTime() && kkztvd.getTime() <= cfktvdm2y.getTime()){//  前々期に提出の場合 //if2
        　
        let f = 0;
         x = 1 //適用条件フラグ

        if (tf == -1) {　//提出制限期間中に仕入if3
          f = 1
        }//if3


        ctx.beginPath();
        ctx.moveTo(10+240*1, 150);
        ctx.lineTo(10+(240*1+240*1+(240*2*f)), 150);
        ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
        ctx.lineWidth = 7.5;
        ctx.stroke();    
 
        ctx.beginPath();
        ctx.moveTo(10+(240*1+240*1+(240*2*f)), 150);
        ctx.lineTo(10+(240*1+240*1+(240*2*f)+240*3), 150);
        ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
        ctx.lineWidth = 7.5;
        ctx.stroke();  
         }//if2
      
         else if(csktvdm1y.getTime()  <= kkztvd.getTime() && kkztvd.getTime() <= cfktvdm1y.getTime()){//  前期に提出の場合 //if2         
          let f = 0;
         
           x = 1 //適用条件フラグ
           
           if (tf == 0) {　//提出制限期間中に仕入if3
            f = 1
          }//if3

           ctx.beginPath();
           ctx.moveTo(10+240*2, 150);
           ctx.lineTo(10+(240*2+240*1+(240*2*f)), 150);
           ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
           ctx.lineWidth = 7.5;
           ctx.stroke();    
       
           ctx.beginPath();
           ctx.moveTo(10+(240*2+240*1+(240*2*f)), 150);
           ctx.lineTo(10+(240*2+240*1+(240*2*f)+240*2), 150);
           ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
           ctx.lineWidth = 7.5;
           ctx.stroke();  
           }//if2
        
        else if(skt4vd.getTime()  <= kkztvd.getTime() && kkztvd.getTime() <= fkt4vd.getTime()){//  当期に提出の場合 //if2
          let f = 0;
         
          if (tf == 1) {　//提出制限期間中に仕入 if3
            f = 1
          }//if3
          
      　　　 ctx.beginPath();
       　　　ctx.moveTo(10+240*3, 150);
       　　　ctx.lineTo(10+(240*3+240*1+(240*2*f)), 150);
       　　　ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
       　　　ctx.lineWidth = 7.5;
       　　　ctx.stroke();    
 
       　　　ctx.beginPath();
       　　　ctx.moveTo(10+(240*3+240*1+(240*2*f)), 150);
       　　　ctx.lineTo(10+(240*3+240*1+(240*2*f)+240*1), 150);
       　　　ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
       　　　ctx.lineWidth = 7.5;
       　　　ctx.stroke(); 

            }//if2
      
          else if(csktvdp1y.getTime()  <= kkztvd.getTime() && kkztvd.getTime() <= cfktvdp1y.getTime()){//  翌期に提出の場合 //if2
          　
            ctx.beginPath();
            ctx.moveTo(10+240*4, 150);
            ctx.lineTo(10+(240*4+240*1), 150);
            ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
            ctx.lineWidth = 7.5;
            ctx.stroke();    
        
            ctx.beginPath();
            ctx.moveTo(10+(240*4+240*1), 150);
            ctx.lineTo(10+(240*4+240*1+240*1), 150);
            ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
            ctx.lineWidth = 7.5;
            ctx.stroke();  
           }//if2
           else if(csktvdp2y.getTime()  <= kkztvd.getTime() && kkztvd.getTime() <= cfktvdp2y4.getTime()){//  翌々期に提出の場合 //if2
            　
              ctx.beginPath();
              ctx.moveTo(10+240*5, 150);
              ctx.lineTo(10+(240*5+240*1), 150);
              ctx.strokeStyle = 'rgba(170, 231, 194,0.6)';//課税選択・変更 提出不能期間
              ctx.lineWidth = 7.5;
              ctx.stroke();    
          
              ctx.beginPath();
              ctx.moveTo(10+(240*5+240*1), 150);
              ctx.lineTo(10+(240*5+240*1+240*1), 150);
              ctx.strokeStyle = 'rgb(170, 231, 194)';//課税選択・変更 提出可能期間
              ctx.lineWidth = 7.5;
              ctx.stroke();  
             }//if2

    }//if1

//---------------------------------------------適用関連


    if (kzutv <= 50000000 && x == 1) { //5000万円以下の場合
     

    ctx.beginPath();
    ctx.moveTo(10+480, 142.5);
    ctx.lineTo(10+480+240, 142.5);
    ctx.strokeStyle = 'rgb(157, 218, 207)';//簡易課税 適用期間
    ctx.lineWidth = 7.5;
    ctx.stroke();  

    ctx.beginPath();
    ctx.moveTo(10, 142.5);
    ctx.lineTo(10+480, 142.5);
    ctx.strokeStyle = 'rgba(166, 148, 173, 0.7)';//簡易課税　不明期間
    ctx.stroke();  
    
    ctx.beginPath();
    ctx.moveTo(10+720, 142.5);
    ctx.lineTo(10+1200, 142.5);
    ctx.strokeStyle = 'rgba(166, 148, 173, 0.7)';//簡易課税　不明期間
    ctx.stroke();  
    

    }
    else {
      
      if(x == 1){
      ctx.beginPath();
    ctx.moveTo(10+480, 142.5);
    ctx.lineTo(10+480+240, 142.5);
    ctx.strokeStyle = 'rgba(157, 218, 207,0.6)';//簡易課税 適用外期間
    ctx.stroke();  

    ctx.beginPath();
    ctx.moveTo(10, 142.5);
    ctx.lineTo(10+480, 142.5);
    ctx.strokeStyle = 'rgba(166, 148, 173, 0.7)';//簡易課税　不明期間
    ctx.stroke();  
    
    ctx.beginPath();
    ctx.moveTo(10+720, 142.5);
    ctx.lineTo(10+1200, 142.5);
    ctx.strokeStyle = 'rgba(166, 148, 173, 0.7)';//簡易課税　不明期間
    ctx.stroke();  

      }
     else{

      ctx.beginPath();
      ctx.moveTo(10+720, 142.5);
      ctx.lineTo(10+1200, 142.5);
      ctx.strokeStyle = 'rgba(166, 148, 173, 0.7)';//簡易課税　不明期間
      ctx.stroke(); 


    }


    }
  }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

function judge5(){ //個別対応方式

  let ihh = document.getElementById('ihh'); //個別対応方式
  let ihhv = ihh.value

  if (ihhv =="") {
      
    ctx.beginPath();
    ctx.moveTo(10, 188);
    ctx.lineTo(10+1200, 188);
    ctx.strokeStyle = 'rgb(157, 218, 207)';//個別対応方式　選択可能期間
    ctx.lineWidth = 15;
    ctx.stroke();  


   return;
  }


}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

  function draw(t,leng,sktvd,ajtrm) {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');
    
    
    
    var y = sktvd.getFullYear();
    var ym2 = sktvd.getFullYear()-2;
    var ym1 = sktvd.getFullYear()-1;
    var yp1 = sktvd.getFullYear()+1;
    var yp2 = sktvd.getFullYear()+2;
    var yp3 = sktvd.getFullYear()+3;
    var m = ("00" + (sktvd.getMonth()+1)).slice(-2);
    var d = ("00" + sktvd.getDate()).slice(-2);
    
    ctx.beginPath(); 
    ctx.moveTo(10, 35);
    ctx.lineTo(10+1200, 35);//基本線
    ctx.strokeStyle = 'rgb(220, 220, 220)';
    ctx.lineWidth = 3;
    ctx.font = 'bold 11px Meiryo UI';
    ctx.stroke();

//x 20*12*i yd1 =15 yd2 =35
  const yd1 = 15;
  const yd2 = 35;

    for(let i = 0; i <= 5; i++){ //各年月
      ctx.beginPath();
      ctx.moveTo(10+(20*12*i), yd1);
      ctx.lineTo(10+(20*12*i), yd2);//起点
      ctx.stroke();
    }


    ctx.fillStyle = 'rgb(200, 200, 200)';
    ctx.fillText(ym2+ "/" +m, 25, 10,100);
    ctx.fillText(ym1+"/" +m, 20+(20*12), 10,100);
    ctx.fillText(y+"/" +m, 20+(20*24), 10,100);
    ctx.fillText(yp1+"/" +m, 20+(20*36), 10,100);
    ctx.fillText(yp2+"/" +m, 20+(20*48), 10,100);
    ctx.fillText(yp3+"/" +m, 20+(20*60), 10,100);

 
    ctx.beginPath();
    ctx.moveTo(10+((12-ajtrm)*20), 30);
    ctx.lineTo(10+((12-ajtrm)*20)+(leng.lk/100)*t, 30);
    ctx.strokeStyle = 'rgb(250, 214, 170)';//基準期間
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10+240, 30);
    ctx.lineTo(10+240+(leng.lt/100)*t, 30);
    ctx.strokeStyle = 'rgb(226, 225, 173)';//特定期間
    ctx.lineWidth = 10;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(10+480, 30);
    ctx.lineTo(10+480+(leng.l/100)*t, 30);
    ctx.strokeStyle = 'rgb(243, 193, 184)';//課税期間
    ctx.lineWidth = 10;
    
    ctx.stroke();
    
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  function butotnClick()　{//クリックイベント　判定ボタン
    
     reset()
     
  let skt = document.getElementById('skt'); //課税期間開始 id重複
  let fkt = document.getElementById('fkt'); //課税期間終了　id重複
  let sktv = skt.value//課税期間開始
  let fktv = fkt.value//課税期間終了
  let sktvd = new Date(sktv)//課税期間開始
  let fktvd = new Date(fktv)//課税期間終了
  let trmkzk = Math.ceil((fktvd-sktvd)/86400000/31) //基準期間 月ベース
  if (trmkzk == 0){
    trmkzk = 1
  }



  let skk = document.getElementById('skk'); //基準期間開始 
  let fkk = document.getElementById('fkk'); //基準期間終了
  let skkv = skk.value//基準期間開始
  let fkkv = fkk.value//基準期間終了
  let skkvd = new Date(skkv)//基準期間開始
  let fkkvd = new Date(fkkv)//基準期間終了
  let trmkjk = Math.ceil((fkkvd-skkvd)/86400000/31) //基準期間 月ベース
  if (trmkjk == 0){
    trmkjk = 1
  }


  let stk = document.getElementById('stk'); //特定期間開始 
  let ftk = document.getElementById('ftk'); //特定期間終了
  let stkv = stk.value//特定期間開始
  let ftkv = ftk.value//特定期間終了
  let stkvd = new Date(stkv)//特定期間開始
  let ftkvd = new Date(ftkv)//特定期間終了
  let trmttk = Math.ceil((ftkvd-stkvd)/86400000/31) //特定期間 月ベース
  if (trmttk == 0){
    trmttk = 1
  }


  
//-------------------------------------------------------------------------------------------------------

  let sktvdm3y = sktvd.setFullYear(sktvd.getFullYear()-3)//課税期間開始 3年前
  let fktvdm3y = fktvd.setFullYear(fktvd.getFullYear()-3)//課税期間終了 3年前
  let csktvdm3y = new Date(sktvdm3y)//課税期間開始 3年前 変換
  let cfktvdm3y = new Date(fktvdm3y)//課税期間終了　3年前 変換

  let sktvdm2y = sktvd.setFullYear(sktvd.getFullYear()+1)//課税期間開始 2年前
  let fktvdm2y = fktvd.setFullYear(fktvd.getFullYear()+1)//課税期間終了 2年前
  let csktvdm2y = new Date(sktvdm2y)//課税期間開始 2年前 変換
  let cfktvdm2y = new Date(fktvdm2y)//課税期間終了　2年前 変換


  let sktvdm1y = sktvd.setFullYear(sktvd.getFullYear()+1)//課税期間開始 1年前
  let fktvdm1y = fktvd.setFullYear(fktvd.getFullYear()+1)//課税期間終了 1年前
  let csktvdm1y = new Date(sktvdm1y)//課税期間開始 1年前 変換
  let cfktvdm1y = new Date(fktvdm1y)//課税期間終了　1年前 変換
  
  
  let sktvdp1y = sktvd.setFullYear(sktvd.getFullYear()+2)//課税期間開始 1年後
  let fktvdp1y = fktvd.setFullYear(fktvd.getFullYear()+2)//課税期間終了 1年後
  let csktvdp1y = new Date(sktvdp1y)//課税期間開始 1年後 変換
  let cfktvdp1y = new Date(fktvdp1y)//課税期間終了　1年後 変換



  let sktvdp2y = sktvd.setFullYear(sktvd.getFullYear()+1)//課税期間開始 2年後
  let fktvdp2y = fktvd.setFullYear(fktvd.getFullYear()+1)//課税期間終了 2年後
  let csktvdp2y = new Date(sktvdp2y)//課税期間開始 2年後 変換
  let cfktvdp2y = new Date(fktvdp2y)//課税期間終了　2年後 変換
      

  sktvd = new Date(sktvd.setFullYear(sktvd.getFullYear()-2)) //　元に戻す
  fktvd = new Date(fktvd.setFullYear(fktvd.getFullYear()-2))　//　元に戻す
 
  
//-------------------------------------------------------------------------------------------------------
let  ttk = document.getElementById('ttk'); //課税期間開始 
let  kts = document.getElementById('kts'); //課税期間開始
let  tst = document.getElementById('tst'); //課税期間開始
let ttkv = ttk.value ;
let ktsv = kts.value;
let tstv = tst.value;
let ttkvd2 = new Date(ttkv);
let ktsvd2 = new Date(ktsv);
let tstvd2 = new Date(tstv);
let ttkvd4 = new Date(ttkv);
let ktsvd4 = new Date(ktsv);
let tstvd4 = new Date(tstv);

let leng  = {
lk:20*12,
lt:20*6,
l:20*12,
}

        

cond(csktvdp1y,sktvd,fktvd,leng,skkvd,trmkjk,trmttk,trmkzk) //条件を満たしているか確認


    let ajtrm = 12
    if (trmkjk <12 ){//基準期間が1年未満
    ajtrm = trmkjk;
    }
    

      
      for (let i = 1; i <= 100; i++){ //100回分描写 for1
        
      

      setTimeout(draw, i*5,i,leng,sktvd,ajtrm);
      } //for1
      
      ctx.lineCap = "butt";
      judge01()
      judge3(sktv,fktv,csktvdm3y,cfktvdm3y,csktvdm2y,cfktvdm2y,csktvdm1y,cfktvdm1y,csktvdp1y,cfktvdp1y,csktvdp2y,cfktvdp2y,ttkvd2,ktsvd2,tstvd2)
      judge4(sktv,fktv,csktvdm3y,cfktvdm3y,csktvdm2y,cfktvdm2y,csktvdm1y,cfktvdm1y,csktvdp1y,cfktvdp1y,csktvdp2y,cfktvdp2y,ttkvd4,ktsvd4,tstvd4)
      judge5()
  }

  let bht = document.getElementById("bht");
  bht.addEventListener('click', butotnClick);


  
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

  let brs = document.getElementById("brs");
  brs.addEventListener('click', reset);


  function reset() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
       return;
      }
     const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }  
    
    
    //----------------------------------------------------------------------------------------------------------------------------------------------------------








}
