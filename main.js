'use strict';{
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  //一定の場合
  
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  //条件
     function cond(csktvdp1y,sktvd,fktvd,skkvd,trmkjk,trmttk,trmkzk){
      
      let itt = document.getElementById('itt'); //一定の場合
      let ittv = itt.value;
      let ittvd = new Date(ittv) //一定事由が起きた時期
      let trmitfk = Math.ceil((fktvd-ittvd)/86400000/31) //最初の期間 月ベース
      if (trmitfk == 0){
        trmitfk = 1
      }
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
              
            }//if3
            else if(ittvd.getTime() != sktvd.getTime() && Number.isNaN(skkvd.getTime())){ //一定事由時期と課税期間開始時期が違う　かつ　基準期間がない　場合　2年目 if3
              alert("2年度")
              
            }//if3
            else if(ittvd.getTime() != sktvd.getTime() && skkvd.getTime() != " "){  //一定事由時期と課税期間開始時期が違う　かつ　基準期間がある　場合　3年目以降 if3
              alert("3年度以降")
              
            }//if3
  
        }//if2
        
      　if (mn1d.getTime() != fktvd.getTime()) {//if2 期間が1年じゃない
  　　　   alert("期間が1年じゃない")
            
        　let ittvdp1y = new Date(ittvd.setFullYear(ittvd.getFullYear()+1))
          
          let ittvdp1ym1d= new Date(ittvdp1y.setDate(ittvdp1y.getDate()-1))
          
         
  
              if(ittvdp1ym1d.getTime() < fktvd.getTime()){//if3
  
                alert("課税期間が1年間を超えています")
              }//if3
         }//if2
    }//if1
    }
  
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  function judge01(capv,tssv,kzukv,kzuzv,kyzv,hf){ //新設法人
    if (capv >= 10000000 ) {
    
    hf.mf = 1
    }
    else{
      judge02(tssv,kzukv,kzuzv,kyzv,hf)
    }
  }
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  function judge02(tssv,kzukv,kzuzv,kyzv,hf){ //特定新規法人
    if (tssv == "該当") {
      
      hf.mf = 2
    }
    else{
      judge1(kzukv,kzuzv,kyzv,hf)
    }
  }
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  function judge1(kzukv,kzuzv,kyzv,hf){
    
    if (kzukv > 10000000) {
     
     hf.mf = 3
    }
    else{
     
      judge11(kzuzv,kyzv,hf) 
    }
   }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
  function judge11(kzuzv,kyzv,hf){ //特定期間
      if (kzuzv > 10000000 && kyzv > 10000000) { 
       
       hf.mf = 4
      }
    } 
   //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  function judge5(ihhv){ //個別対応方式
    if (ihhv =="") {
      alert("個別対応方式選択可能")
     return;
    }
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
    function butotnClick()　{//クリックイベント　判定ボタン
     
    let skt = document.getElementById('skt'); //課税期間開始
    let fkt = document.getElementById('fkt'); //課税期間終了
    let sktv = skt.value//課税期間開始
    let sktvd = new Date(sktv)//課税期間開始
    let fktvd = new Date(fkt.value)//課税期間終了
    let trmkzk = (fktvd.getTime()-sktvd.getTime()) //課税期間 月ベース
    let sktvdm = sktvd.getMonth()+1//課税期間開始月

    let skk = document.getElementById('skk'); //基準期間開始 
    let fkk = document.getElementById('fkk'); //基準期間終了
    let skkv = skk.value//基準期間開始
    let skkvd = new Date(skkv)//基準期間開始
    let fkkvd = new Date(fkk.value)//基準期間終了
    let trmkjk = (fkkvd.getTime()-skkvd.getTime()) //基準期間 月ベース
    
    let stk = document.getElementById('stk'); //特定期間開始 
    let ftk = document.getElementById('ftk'); //特定期間終了
    let stkv = stk.value//特定期間開始
    let stkvd = new Date(stkv)//特定期間開始
    let ftkvd = new Date(ftk.value)//特定期間終了
    let trmttk = (ftkvd.getTime()-stkvd.getTime())//特定期間 月ベース
  //-------------------------------------------------------------------------------------------------------
    let csktvdm3y = new Date(sktvd.setFullYear(sktvd.getFullYear()-3))//課税期間開始 3年前 変換
    let cfktvdm3y = new Date(fktvd.setFullYear(fktvd.getFullYear()-3))//課税期間終了　3年前 変換

    let csktvdm2y = new Date(sktvd.setFullYear(sktvd.getFullYear()+1))//課税期間開始 2年前 変換
    let cfktvdm2y = new Date(fktvd.setFullYear(fktvd.getFullYear()+1))//課税期間終了　2年前 変換
  
    let csktvdm1y = new Date(sktvd.setFullYear(sktvd.getFullYear()+1))//課税期間開始 1年前 変換
    let cfktvdm1y = new Date(fktvd.setFullYear(fktvd.getFullYear()+1))//課税期間終了　1年前 変換
    
    let csktvdp1y = new Date(sktvd.setFullYear(sktvd.getFullYear()+2))//課税期間開始 1年後 変換
    let cfktvdp1y = new Date(fktvd.setFullYear(fktvd.getFullYear()+2))//課税期間終了　1年後 変換
  
    let csktvdp2y = new Date(sktvd.setFullYear(sktvd.getFullYear()+1))//課税期間開始 2年後 変換
    let cfktvdp2y = new Date(fktvd.setFullYear(fktvd.getFullYear()+1))//課税期間終了　2年後 変換
    
    sktvd = new Date(sktvd.setFullYear(sktvd.getFullYear()-2)) //　元に戻す
    fktvd = new Date(fktvd.setFullYear(fktvd.getFullYear()-2))　//　元に戻す   
  //-------------------------------------------------------------------------------------------------------
  let ttk = document.getElementById('ttk'); //調整対象固定資産 
  let kts = document.getElementById('kts'); //高額特定資産
  let tst = document.getElementById('tst'); //棚卸資産の調整
  let ttkvd = new Date(ttk.value);
  let ktsvd = new Date(kts.value);
  let tstvd = new Date(tst.value);
  
  cond(csktvdp1y,sktvd,fktvd,skkvd,trmkjk,trmttk,trmkzk) //条件を満たしているか確認
  
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------納税義務（新設法人）
　let cap = document.getElementById('cap'); //新設法人　資本金
  let capv = cap.value;
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------納税義務（特定新規設立法人）
　let tss = document.getElementById('tss'); //特定新規法人
  let tssv = tss.value;　
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------納税義務（基準期間）
  let kzuk = document.getElementById('kzuk'); //課税売上高（基準期間）
  let kzukv = kzuk.value; 
  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------納税義務（特定期間）
  let kzuz = document.getElementById('kzuz'); //課税売上高（特定期間）
  let kyz = document.getElementById('kyz'); //課税売上高（給与）
  let kzuzv = kzuz.value;
  let kyzv = kyz.value;
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------納税義務
const hf = {//判定フラグ
  mf: 0,
}
judge01(capv,tssv,kzukv,kzuzv,kyzv,hf)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------個別対応方式
  let ihh = document.getElementById('ihh'); //個別対応方式
  let ihhv = ihh.value
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------選択提出関連
let kjsh = document.getElementById('kjsh'); //課税選択・変更
    let kjshv = kjsh.value
    let kjshvd = new Date(kjsh.value)
    let kjshvdm = kjshvd.getMonth()+1//課税提出月
    kjshvd.getMonth()-1//元に戻す
    let kjshvdd = kjshvd.getDate()//課税提出　日 調整用

    let diffm2 = 0 //入力がない場合にエラーになるので初期値
    if(kjshv != ""){ //　入力がない場合無視　if1
      diffm2 =  kjshvdm - sktvdm
      if(diffm2 < 0){ //差がマイナスの時　if2
        diffm2 =  diffm2+12
      }//if2
    }//if1

    let sktvdbs_3 = 0;
    
      
        sktvdbs_3 = kjshvd.setMonth(kjshvd.getMonth()-diffm2)//提出日の属する課税期間の初月 　  
      
    let rsktvdbs_3 =new Date(sktvdbs_3)//提出日の属する課税期間の初月 　日にちに変換　1

    let rsktvdbs_3d = rsktvdbs_3.getDate()
   
    if (kjshvdd　!= rsktvdbs_3d){　　　//提出日と応当日が違う場合
      rsktvdbs_3.setDate(0);
    }
  
    rsktvdbs_3.setDate(1);//提出日の属する課税期間の初日
   
    let rsktvdbsp1y_3 = rsktvdbs_3.setFullYear(rsktvdbs_3.getFullYear()+1)//提出日の属する課税期間の初日から1年後 　数字で出力　提出不能開始日　2
    let rrsktvdbsp1y_3 =new Date(rsktvdbsp1y_3)//提出日の属する課税期間の初日から1年後 　日にちに変換　提出不能開始日　2
    let rsktvdbsp2y_3 = rsktvdbs_3.setFullYear(rsktvdbs_3.getFullYear()+2)//提出日の属する課税期間の初日から3年後 　数字で出力　　3
    let rrsktvdbsp2y_3=new Date(rsktvdbsp2y_3)//提出日の属する課税期間の初日から3年後 　日にちに変換　3
    let rsktvdbsp2ym1d_3 = rrsktvdbsp2y_3.setDate(rrsktvdbsp2y_3.getDate()-1)//提出日の属する課税期間の初日から3年を経過する日 　数字で出力　4
    let rrsktvdbsp2ym1d_3 =new Date(rsktvdbsp2ym1d_3)//提出日の属する課税期間の初日から3年を経過する日 　日にちに変換　4
    

    let rrsktvdbsp2ym1dm1y_3 = rrsktvdbsp2ym1d_3.setFullYear(rrsktvdbsp2ym1d_3.getFullYear()-1)//提出日の属する課税期間の初日から3年を経過する日の属する　日の１年前 　数字で出力　提出不能終了日　5
    let rrrsktvdbsp2ym1dm1y_3 =new Date(rrsktvdbsp2ym1dm1y_3)//提出日の属する課税期間の初日から3を経過する日の属する　日の１年前 　日にちに変換　提出不能終了日　5

    const dm_3 = new Date(rrrsktvdbsp2ym1dm1y_3)
    
    let rrsktvdbsp2ym1dm1yp1d_3 = rrrsktvdbsp2ym1dm1y_3.setDate(rrrsktvdbsp2ym1dm1y_3.getDate()+1)//提出日の属する課税期間の初日から3年を経過する日の属する　日の１年前の翌日 　数字で出力　提出可能開始日　6
    let rrrsktvdbsp2ym1dm1yp1d_3 =new Date(rrsktvdbsp2ym1dm1yp1d_3)//提出日の属する課税期間の初日から3年を経過する日の属する　日の１年前の翌日 　日にちに変換　提出可能開始日　6


    if((rrsktvdbsp1y_3 <= ttkvd && ttkvd <= dm_3)
    ||(rrsktvdbsp1y_3<= ktsvd && ktsvd <= dm_3)
    ||(rrsktvdbsp1y_3 <= tstvd && tstvd <= dm_3)){
      alert("提出制限延長")

      dm_3.setFullYear(dm_3.getFullYear()+2)
      rrrsktvdbsp2ym1dm1yp1d_3.setFullYear(rrrsktvdbsp2ym1dm1yp1d_3.getFullYear()+2)
    }
  //----------------------------------------------------------------------------------------------------------------------------------------------------
    if (kjshv =="") { //if1
      alert("課税事業者選択変更提出無し")
    }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------簡易提出関連
  let kzut = document.getElementById('kzut'); //簡易課税
  let kzutv = kzut.value
  let kf = 0//判定フラグ
  let kkzt = document.getElementById('kkzt'); //簡易課税
  let kkztv = kkzt.value
  let kkztvd = new Date(kkztv)//簡易課税提出日
  let kkztvdm = kkztvd.getMonth()+1//簡易課税提出月
  kkztvd.getMonth()-1//元に戻す
  let kkztvdd = kkztvd.getDate()//課税提出　日 調整用
  
  let diffm4 = 0 //入力がない場合にエラーになるので初期値
  if(kkztv != ""){ //　入力がない場合無視　if1
    diffm4 =  kkztvdm  - sktvdm
    if(diffm4 < 0){ //差がマイナスの時　if2
      diffm4 =  diffm4+12
    }//if2
  }//if1

  
  let sktvdbs = 0;

        sktvdbs = kkztvd.setMonth(kkztvd.getMonth()-diffm4)//提出日の属する課税期間の初月 数字で出力　1  
        let rsktvdbs =new Date(sktvdbs)//提出日の属する課税期間の初月 　日にちに変換　1
        let rsktvdbsd = rsktvdbs.getDate()
        
        if (kkztvdd　!= rsktvdbsd ){　　　//提出日と応当日が違う場合
          rsktvdbs.setDate(0);
        }
    
    rsktvdbs.setDate(1);
    
  let rsktvdbsp1y = rsktvdbs.setFullYear(rsktvdbs.getFullYear()+1)//提出日の属する課税期間の初日から1年後 　数字で出力　提出不能開始日　2
  let rrsktvdbsp1y =new Date(rsktvdbsp1y)//提出日の属する課税期間の初日から1年後 　日にちに変換　提出不能開始日　2
  let rsktvdbsp2y = rsktvdbs.setFullYear(rsktvdbs.getFullYear()+2)//提出日の属する課税期間の初日から3年後 　数字で出力　　3
  let rrsktvdbsp2y =new Date(rsktvdbsp2y)//提出日の属する課税期間の初日から3年後 　日にちに変換　3
  let rsktvdbsp2ym1d = rrsktvdbsp2y.setDate(rrsktvdbsp2y.getDate()-1)//提出日の属する課税期間の初日から3年を経過する日 　数字で出力　4
  let rrsktvdbsp2ym1d =new Date(rsktvdbsp2ym1d)//提出日の属する課税期間の初日から3年を経過する日 　日にちに変換　4
  let rrsktvdbsp2ym1dm1y = rrsktvdbsp2ym1d.setFullYear(rrsktvdbsp2ym1d.getFullYear()-1)//提出日の属する課税期間の初日から3年を経過する日の属する　日の１年前 　数字で出力　提出不能終了日　5
  let rrrsktvdbsp2ym1dm1y =new Date(rrsktvdbsp2ym1dm1y)//提出日の属する課税期間の初日から3を経過する日の属する　日の１年前 　日にちに変換　提出不能終了日　5
  const dm = new Date(rrrsktvdbsp2ym1dm1y)
  
  let rrsktvdbsp2ym1dm1yp1d = rrrsktvdbsp2ym1dm1y.setDate(rrrsktvdbsp2ym1dm1y.getDate()+1)//提出日の属する課税期間の初日から3年を経過する日の属する　日の１年前の翌日 　数字で出力　提出可能開始日　6
  let rrrsktvdbsp2ym1dm1yp1d =new Date(rrsktvdbsp2ym1dm1yp1d)//提出日の属する課税期間の初日から3年を経過する日の属する　日の１年前の翌日 　日にちに変換　提出可能開始日　6
  
        if((rrsktvdbsp1y <= ttkvd && ttkvd <= dm)
        ||(rrsktvdbsp1y<= ktsvd && ktsvd <= dm)
        ||(rrsktvdbsp1y <= tstvd && tstvd <= dm)){
          alert("提出制限延長")
  
          dm.setFullYear(dm.getFullYear()+2)
          rrrsktvdbsp2ym1dm1yp1d.setFullYear(rrrsktvdbsp2ym1dm1yp1d.getFullYear()+2)
        }
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------適用関連 
        if (kzutv <= 50000000 && kkztv != "") { //5000万円以下の場合
          
          kf = 1
        }
        else { 
          
        }
        
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        judge5(ihhv)
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        google.charts.load("current", {packages:["timeline"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
        
          var container = document.getElementById('example3.1');
          var chart = new google.visualization.Timeline(container);
          var dataTable = new google.visualization.DataTable();
          dataTable.addColumn({ type: 'string', id: 'Position' });
          dataTable.addColumn({ type: 'string', id: 'Name' });
          dataTable.addColumn({ type: 'date', id: 'Start' });
          dataTable.addColumn({ type: 'date', id: 'End' });
           let ff =0 //適用フラグ
        
            if(sktv != "" && fkt.value != ""){
              ff =1
              dataTable.addRows([
                [ '期間', '当課税期間', sktvd, fktvd ],
              ]);
            }
            if(skkv != "" && fkk.value != ""){
              ff =1
              dataTable.addRows([
                [ '期間', '基準期間', skkvd, fkkvd ],
              ]);
            }
            if(stkv != "" && ftk.value != ""){
              ff =1
              dataTable.addRows([
                [ '期間', '特定期間', stkvd, ftkvd ],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　kzukv　!= "" && hf.mf == 0){
              ff =1
              dataTable.addRows([
                [ '納税義務', '免税事業者', sktvd, fktvd],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　hf.mf != 0){//if1
              ff =1
              let kjz = ""
              if(hf.mf == 1){//if2
              kjz = "(新設法人)"
              }//if2
              else if(hf.mf ==2 ){//if2
               kjz = "(特定新規設立法人)"
              }//if2
              else if(hf.mf ==3 ){//if2
               kjz = "(基準期間1,000万円超)"
              }//if2
              else if(hf.mf ==4 ){//if2
              kjz = "(特定期間1,000万円超)"
              }//if2
              dataTable.addRows([
                [ '納税義務', '課税事業者'+kjz, sktvd, fktvd],
              ]);
            }//if1
            if(sktv != "" && fkt.value != ""　&&　kjshv　!= ""){
              ff =1
              dataTable.addRows([
                [ '課税事業者不適用・変更', '提出不能期間', rrsktvdbsp1y_3, dm_3],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　kjshv　!= ""){
              ff =1
              dataTable.addRows([
                [ '課税事業者不適用・変更', '提出可能期間', rrrsktvdbsp2ym1dm1yp1d_3, new Date(2025, 12, 31)],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　kjshv　== ""){
              ff =1
              dataTable.addRows([
                [ '課税事業者選択・変更', '提出可能期間', sktvd, new Date(2025, 12, 31)],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　kkztv　!= ""){
              ff =1
              dataTable.addRows([
                [ '簡易課税提出', '提出不能期間',rrsktvdbsp1y , dm],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　kkztv　!= ""){
              ff =1
              dataTable.addRows([
                [ '簡易課税提出', '不適用提出可能期間', rrrsktvdbsp2ym1dm1yp1d, new Date(2025, 12, 31)],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　kkztv　== ""){
              ff =1
              dataTable.addRows([
                [ '簡易課税提出', '提出可能期間', sktvd, new Date(2025, 12, 31)],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　kzutv　!= "" &&　kf　== 1){
              ff =1
              dataTable.addRows([
                [ '簡易課税適用', '適用期間', sktvd, fktvd],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　kzutv　!= "" &&　kf　== 0){
              ff =1
              dataTable.addRows([
                [ '簡易課税適用', '適用不能期間', sktvd, fktvd],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　ihhv　!= ""){
              ff =1
              dataTable.addRows([
                [ '個別対応方式', '選択不能期間', new Date(2021, 2, 4), new Date(2022, 3, 20)],
              ]);
            }
            if(sktv != "" && fkt.value != ""　&&　ihhv　!= ""){
              ff =1
              dataTable.addRows([
                [ '個別対応方式', '選択可能期間', new Date(2021, 2, 4), new Date(2022, 3, 20)],
              ]);
            }


            if(ff ==0){
              alert("表示要件を満たしませんでした")
              return
            }



          var options = {
            colors: ['#cbb69d', '#603913', '#c69c6e'],
          };

          chart.draw(dataTable,options);
        }

        
    }
  
    let bht = document.getElementById("bht");
    bht.addEventListener('click', butotnClick);
  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  let ftl = document.getElementById("ftl");
  ftl.addEventListener('change', inputChange);

  function inputChange(){

  const q1 =  "個人事業者の課税期間は、１月１日から12月31日までの期間（暦年）。法人の課税期間は、原則事業年度。短縮・変更している場合はその期間。"
  const q2 =  "個人事業者の基準期間は、前々年。法人の基準期間は、原則前々事業年度。前々事業年度が１年に満たない場合は、その事業年度開始の日の２年前の日の前日から、同日以後１年を経過する日までの間に開始した各事業年度を合わせた期間"
  const q3 =  "個人事業者はその年の前年1月1日から6月30日までの期間、法人は原則その事業年度の前事業年度開始の日以後6月の期間"
  const q4 =  "課税売上(税抜)+免税売上－課税売上返還等(税抜)－免税売上返還等"
  const q5 =  "新規設立法人のうち新設開始日において特定要件を満たしかつ特定要件の判定の基礎となった者(その者と一定の関係にあるものを含む)の基準期間に相当する期間における課税売上高が５億円超である法人"
  const q51 =  "その事業年度の基準期間がない法人(新設法人及び社会福祉法人を除く)"
  const q52 =  "その事業年度の基準期間がない法人で、その事業年度開始の日における資本金の額又は出資の金額が1,000万円以上の法人(社会福祉法人を除く)"
  const q53 =  "その基準期間がない事業年度開始の日において、他の者によりその新規設立法人の株式等の50％超を直接又は間接に保有される場合などの要件"
  const q6 =  "給与等、退職手当等又は公的年金等の支払明細書》に規定する給与等の金額(所得税法施行規則第100条第1項第1号)"
  const q7 =  "課税期間中の課税売上高が５億円超の場合、又は課税売上割合が95％未満の場合に控除対象仕入税額を課税売上割合(準ずる割合を除く)に対応させて計算する方式"
  const q8 =  "棚卸資産以外の資産で、建物及びその附属設備、構築物、機械及び装置、船舶、航空機、車両及び運搬具、工具、器具及び備品、鉱業権その他の資産で、一の取引単位の価額(税抜)が100万円以上のもの"
  const q9 =  "一の取引の単位につき、課税仕入れに係る支払対価の額（税抜）が1,000万円以上の棚卸資産又は調整対象固定資産"
  const q10 =  "免税事業者から課税事業者又は課税事業者から免税事業者になった場合において、課税期間の初日の前日に有している棚卸資産で消費税額の調整を受けたもの"

  let ftlv = ftl.value;

  if(ftlv == "課税期間?"){
  alert(q1)  
  }
  else if(ftlv == "基準期間?"){
  alert(q2)  
  }
  else if(ftlv == "基準期間?"){
    alert(q3)  
    }
  else if(ftlv == "課税売上高?"){
  alert(q4)  
  }
  else if(ftlv == "特定新規設立法人?"){
  alert(q5)  
  }
  else if(ftlv == "新規設立法人?"){
  alert(q51)  
  }
  else if(ftlv == "新設法人?"){
  alert(q52)  
  }
  else if(ftlv == "特定要件?"){
  alert(q53)  
  }   
  else if(ftlv == "給与等支払額?"){
  alert(q6)  
  }
  else if(ftlv == "一括比例配分方式?"){
  alert(q7)  
  }
  else if(ftlv == "調整対象固定資産?"){
  alert(q8)  
  }
  else if(ftlv == "高額特定資産?"){
  alert(q9)  
  }
  else if(ftlv == "棚卸資産の調整?"){
  alert(q10)  
  }

  };

    














  }
