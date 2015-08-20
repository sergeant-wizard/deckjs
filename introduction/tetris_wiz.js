/*************************Reference*****************
Tetris by R.M.
Ver.9
Last modified 1/3

Dynamic global variables begin with a capitalized letter followed by small letters.
Static global variables have all of the letters in its name capitilized.

Modification:
1/3
Rows and cols can be general numbers
***************************************************/

/**************************************Functions**********************************
void initialize(void)
Initializes dynamic variables and arrays. Starts the game

void key_down(action)
This function is called every time a key is pressed.
The key code is stored in variable "action".
The "Gravitational fall" of blocks is considered as a key_down(40),
which is an equivalant for the "down cursor" key.
if(action==0) only for applying color to cells
if(action==13) "enter" key rotates a block clockwise.
if(action==37) "left cursor" key moves a block left horizontally.
if(action==38) "up cursor" key holds a block.
if(action==39) "right cursor" moves a block right horizontally.
if(action==40) "down cursor" key moves a block down. Also checks if a block is "fixed".

void make_block(action)
if(action) makes block randomly, does NOT display.
else makes block from Hold.
Checks whether game is over
***********************************************************************************/

/*********************************Global Variables (dynamic)*********************************
bool Hold_flag
True if there is a block held: False if there is not.

bool Hold_t
True if player has already held a block while a block is falling: False if he has not.
-So that player can't hold two blocks alternatively infinitely.

bool Progress
True if game is in progress: False if it is not.

*TimerID
Needs to be cleared if game is over.
**************************************************************************************/

/*********************************Global Arrays (dynamic)****************************************
int Data[200]
The index corresponds to the coordinates.
Its value is 0 if there isn't a fixed block in each cell:
1 if there is a fixed block:
2 if there is a falling block.

int Falling[4]
The coordinates of the 4 blocks that are falling.

int Type[5]
if(index==0) the value is the type of block that is falling.
if(index==1) the value is the type of the "next" block.
if(index==2) the value is the type of the "second next" block.
if(index==3) the value is the type of the "third next" block.
if(index==4) the value is the type of the "held" block.
*******************************************************************/

/*******************************Global Arrays (static)*************************************
DEFAULT_BLOCKS[7]
The index is the "type" of each block.
The value is the initial coordinates of each block.
If the "type" is 0, the falling block "can't" rotate.

DEFAULT_COLORS[3]
0: The color of cells that do not have any blocks in them.
1: The color of cells that have a falling block in them.
2: The color of cells that have a fixed block in them.
*********************************************************************************************/

/*****************************HTML IDs*******************************************************
TableH
4*2 size Hold table which shows the "held" block.

TableM
10*20 size Main table.

TableN
1*3 size Next table which contains three 4*2 size tables which show the "next" blocks.
************************************************************************************************/

  ROWS=12;
  COLS=20;
  DEFAULT_COLORS=new Array("#bbbbbb","lightblue","blue","red");
  DEFAULT_BLOCKS=new Array(
			   new Array(0,1,-ROWS,-ROWS+1),
			   new Array(0,-1,1,2),
			   new Array(0,-1,-ROWS,1),
			   new Array(0,-ROWS-1,-1,1),
			   new Array(0,-1,-ROWS+1,1),
			   new Array(0,-1,-ROWS,-ROWS+1),
			   new Array(0,1,-ROWS,-ROWS-1)
			   );
  Progress=false;
  Hold_flag=false;
  Data=new Array(ROWS*COLS);
  Type=new Array(5);
  Rot=new Array(4);
  var td=[];
  var tdh=[];
  var tdn=[];

function initialize(){
  td.push(td_0);
  td.push(td_1);
  td.push(td_2);
  td.push(td_3);
  td.push(td_4);
  td.push(td_5);
  td.push(td_6);
  td.push(td_7);
  td.push(td_8);
  td.push(td_9);
  td.push(td_10);
  td.push(td_11);
  td.push(td_12);
  td.push(td_13);
  td.push(td_14);
  td.push(td_15);
  td.push(td_16);
  td.push(td_17);
  td.push(td_18);
  td.push(td_19);
  td.push(td_20);
  td.push(td_21);
  td.push(td_22);
  td.push(td_23);
  td.push(td_24);
  td.push(td_25);
  td.push(td_26);
  td.push(td_27);
  td.push(td_28);
  td.push(td_29);
  td.push(td_30);
  td.push(td_31);
  td.push(td_32);
  td.push(td_33);
  td.push(td_34);
  td.push(td_35);
  td.push(td_36);
  td.push(td_37);
  td.push(td_38);
  td.push(td_39);
  td.push(td_40);
  td.push(td_41);
  td.push(td_42);
  td.push(td_43);
  td.push(td_44);
  td.push(td_45);
  td.push(td_46);
  td.push(td_47);
  td.push(td_48);
  td.push(td_49);
  td.push(td_50);
  td.push(td_51);
  td.push(td_52);
  td.push(td_53);
  td.push(td_54);
  td.push(td_55);
  td.push(td_56);
  td.push(td_57);
  td.push(td_58);
  td.push(td_59);
  td.push(td_60);
  td.push(td_61);
  td.push(td_62);
  td.push(td_63);
  td.push(td_64);
  td.push(td_65);
  td.push(td_66);
  td.push(td_67);
  td.push(td_68);
  td.push(td_69);
  td.push(td_70);
  td.push(td_71);
  td.push(td_72);
  td.push(td_73);
  td.push(td_74);
  td.push(td_75);
  td.push(td_76);
  td.push(td_77);
  td.push(td_78);
  td.push(td_79);
  td.push(td_80);
  td.push(td_81);
  td.push(td_82);
  td.push(td_83);
  td.push(td_84);
  td.push(td_85);
  td.push(td_86);
  td.push(td_87);
  td.push(td_88);
  td.push(td_89);
  td.push(td_90);
  td.push(td_91);
  td.push(td_92);
  td.push(td_93);
  td.push(td_94);
  td.push(td_95);
  td.push(td_96);
  td.push(td_97);
  td.push(td_98);
  td.push(td_99);
  td.push(td_100);
  td.push(td_101);
  td.push(td_102);
  td.push(td_103);
  td.push(td_104);
  td.push(td_105);
  td.push(td_106);
  td.push(td_107);
  td.push(td_108);
  td.push(td_109);
  td.push(td_110);
  td.push(td_111);
  td.push(td_112);
  td.push(td_113);
  td.push(td_114);
  td.push(td_115);
  td.push(td_116);
  td.push(td_117);
  td.push(td_118);
  td.push(td_119);
  td.push(td_120);
  td.push(td_121);
  td.push(td_122);
  td.push(td_123);
  td.push(td_124);
  td.push(td_125);
  td.push(td_126);
  td.push(td_127);
  td.push(td_128);
  td.push(td_129);
  td.push(td_130);
  td.push(td_131);
  td.push(td_132);
  td.push(td_133);
  td.push(td_134);
  td.push(td_135);
  td.push(td_136);
  td.push(td_137);
  td.push(td_138);
  td.push(td_139);
  td.push(td_140);
  td.push(td_141);
  td.push(td_142);
  td.push(td_143);
  td.push(td_144);
  td.push(td_145);
  td.push(td_146);
  td.push(td_147);
  td.push(td_148);
  td.push(td_149);
  td.push(td_150);
  td.push(td_151);
  td.push(td_152);
  td.push(td_153);
  td.push(td_154);
  td.push(td_155);
  td.push(td_156);
  td.push(td_157);
  td.push(td_158);
  td.push(td_159);
  td.push(td_160);
  td.push(td_161);
  td.push(td_162);
  td.push(td_163);
  td.push(td_164);
  td.push(td_165);
  td.push(td_166);
  td.push(td_167);
  td.push(td_168);
  td.push(td_169);
  td.push(td_170);
  td.push(td_171);
  td.push(td_172);
  td.push(td_173);
  td.push(td_174);
  td.push(td_175);
  td.push(td_176);
  td.push(td_177);
  td.push(td_178);
  td.push(td_179);
  td.push(td_180);
  td.push(td_181);
  td.push(td_182);
  td.push(td_183);
  td.push(td_184);
  td.push(td_185);
  td.push(td_186);
  td.push(td_187);
  td.push(td_188);
  td.push(td_189);
  td.push(td_190);
  td.push(td_191);
  td.push(td_192);
  td.push(td_193);
  td.push(td_194);
  td.push(td_195);
  td.push(td_196);
  td.push(td_197);
  td.push(td_198);
  td.push(td_199);
  td.push(td_200);
  td.push(td_201);
  td.push(td_202);
  td.push(td_203);
  td.push(td_204);
  td.push(td_205);
  td.push(td_206);
  td.push(td_207);
  td.push(td_208);
  td.push(td_209);
  td.push(td_210);
  td.push(td_211);
  td.push(td_212);
  td.push(td_213);
  td.push(td_214);
  td.push(td_215);
  td.push(td_216);
  td.push(td_217);
  td.push(td_218);
  td.push(td_219);
  td.push(td_220);
  td.push(td_221);
  td.push(td_222);
  td.push(td_223);
  td.push(td_224);
  td.push(td_225);
  td.push(td_226);
  td.push(td_227);
  td.push(td_228);
  td.push(td_229);
  td.push(td_230);
  td.push(td_231);
  td.push(td_232);
  td.push(td_233);
  td.push(td_234);
  td.push(td_235);
  td.push(td_236);
  td.push(td_237);
  td.push(td_238);
  td.push(td_239);

  tdn.push(tdn_0);
  tdn.push(tdn_1);
  tdn.push(tdn_2);
  tdn.push(tdn_3);
  tdn.push(tdn_4);
  tdn.push(tdn_5);
  tdn.push(tdn_6);
  tdn.push(tdn_7);
  tdn.push(tdn_8);
  tdn.push(tdn_9);
  tdn.push(tdn_10);
  tdn.push(tdn_11);
  tdn.push(tdn_12);
  tdn.push(tdn_13);
  tdn.push(tdn_14);
  tdn.push(tdn_15);
  tdn.push(tdn_16);
  tdn.push(tdn_17);
  tdn.push(tdn_18);
  tdn.push(tdn_19);
  tdn.push(tdn_20);
  tdn.push(tdn_21);
  tdn.push(tdn_22);
  tdn.push(tdn_23);

  tdh.push(tdh_0);
  tdh.push(tdh_1);
  tdh.push(tdh_2);
  tdh.push(tdh_3);
  tdh.push(tdh_4);
  tdh.push(tdh_5);
  tdh.push(tdh_6);
  tdh.push(tdh_7);

  var i;
  document.myForm.point.value="0";
  for(i=0;i<ROWS*COLS;i++)
    Data[i]=0;
  for(i=1;i<4;i++)
    Type[i]=Math.floor(Math.random()*7);
  Hold_flag=false;
  Progress?clearInterval(timerID):Progress=true;
  make_block(1);
}

var timerID=setInterval(function(){key_down(40)},1000);

function make_block(action){
  var i,j,k;
  var flag=0;
  if(action){
    for(i=0;i<3;)
      Type[i]=Type[++i];
    Type[3]=Math.floor(Math.random()*7);
    Hold_t=false;
  }else
    Type[0]=Hold;
  Center=ROWS+(ROWS-ROWS%2)/2-1;
  for(i=0;i<4;i++)
    Rot[i]=DEFAULT_BLOCKS[Type[0]][i];
  for(i=0;i<4;i++)
    flag+=Data[Center+Rot[i]];
  if(flag){
    alert("game over");
    for(i=0;i<4;i++)
      Data[Center+Rot[i]]=3;
    Progress=false;
    clearInterval(timerID);
  }else
    key_down(0);
}

function key_down(action){
  var i,j,k;
  n=new Array(4);
  for(i=0;i<4;i++)
    Data[n[i]=Center+Rot[i]]=0;
  var flag=0;

  if(action==38){
    if(Hold_t)
      return;
    else
      Hold_t=true;
    var temp=Type[0];
    Hold_flag?make_block(0):make_block(1);
    Hold_flag=true;
    Hold=temp;
  }

  else if(action==40){
    for(i=0;i<4;i++)
      flag+=(n[i]>=ROWS*(COLS-1))||(Data[n[i]+ROWS]);
    if(flag){
      for(i=0;i<4;i++)
	Data[n[i]]=2;
      var lines=0;
      temp=new Array(COLS);
      for(i=0;i<COLS;i++)
	temp[i]=0;
      for(i=0;i<ROWS*COLS;i++){
	if(!(i%ROWS))
	  var counter=0;
	counter+=!Data[i];
	if((!counter)&&i%ROWS==ROWS-1){
	  lines++;
	  for(j=i;j>=0;j--)
	    Data[j]=j>=ROWS?Data[j-ROWS]:0;
	}
      }
      j=document.myForm.point.value-0;
      j+=4-lines?lines:10;
      document.myForm.point.value=j;
      make_block(1);
    }else
      Center+=ROWS;
  }
  
  else{
    xx=new Array(4);
    yy=new Array(4);
    for(i=0;i<4;i++){
      xx[i]=n[i]%ROWS-Center%ROWS;
      yy[i]=n_y(n[i])-n_y(Center);
    }
    xc=new Array(4);
    yc=new Array(4);
    var flag2=false;
    if(action==13){
      if(Type[0]){
	flag2=true;
	for(i=0;i<4;i++){
	  xc[i]=Center%ROWS-yy[i];
	  yc[i]=n_y(Center)+xx[i];
	}
      }else
	return;
    }else if(Math.abs(action-38)==1){
      flag2=true;
      var temp=action-38;
      for(i=0;i<4;i++){
	xc[i]=Center%ROWS+xx[i]+temp;
	yc[i]=n_y(Center)+yy[i];
      }
    }
    if(flag2){
      for(i=0;i<4;i++)
	flag+=(xc[i]<0||ROWS<=xc[i])||(yc[i]<0||COLS<=yc[i])||Data[xc[i]+yc[i]*ROWS];
      if(!flag){
	Center=xc[0]+yc[0]*ROWS;
	for(i=0;i<4;i++)
	  Rot[i]=xc[i]-Center%ROWS+yc[i]*ROWS-n_y(Center)*ROWS;
      }
    }
  }
  if(Progress)
    for(i=0;i<4;i++)
      Data[Center+Rot[i]]=1;
  for(i=0;i<240;i++)
    td[i].bgColor=DEFAULT_COLORS[Data[i]];
  for(i=0;i<8;i++)
	tdh[i].bgColor="#ffffff";
    //tableH.all.tags('TD')(i).bgColor="#ffffff";
  if(Hold_flag)
    for(i=0;i<4;i++){
      j=DEFAULT_BLOCKS[Hold][i];
	  tdh[j>-ROWS+1?5+j:5+j-4+ROWS].bgColor=DEFAULT_COLORS[1];
      //tableH.all.tags('TD')(j>-ROWS+1?5+j:5+j-4+ROWS).bgColor=DEFAULT_COLORS[1];
    }
  for(i=0;i<3;i++)
    for(j=0;j<8;j++)
	  tdn[i*8+j].bgColor="#ffffff";
      //tableN.all.tags('SPAN')(i).all.tags('TD')(j).bgColor="#ffffff";
  for(i=0;i<3;i++)
    for(j=0;j<4;j++){
      k=DEFAULT_BLOCKS[Type[i+1]][j];
	  tdn[i*8+(k>-ROWS+1?5+k:5+k-4+ROWS)].bgColor=DEFAULT_COLORS[1];
      //tableN.all.tags('SPAN')(i).all.tags('TD')(k>-ROWS+1?5+k:5+k-4+ROWS).bgColor=DEFAULT_COLORS[1];
    }
}

function n_y(n){
  return((n-n%ROWS)/ROWS);
}
