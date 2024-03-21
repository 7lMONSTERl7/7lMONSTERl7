import ast
import math
from tkinter import * 

monster_pic= '''\
         __n__n__
    .------o . o------.  \\  
   /   .-.__.-----. .   \\  \\
  /   /   .  .-. .  .   \\   \\
 /   /   /   /   /   /   \\   \\   
/   /   /   /   /   /   /   \\   
'   '   '   '   '   '   '
'''

class gui_calc:
    
    def gt_gcd(enc):
        try:
            tnum = enc.get().split(" ",1)
            fnum = tnum[0].strip()
            snum = tnum[1].strip()
            gcdres = math.gcd(int(fnum),int(snum))
            enc.configure(state="normal") 
            enc.delete(0, "end")     
            enc.insert("end", gcdres)
            enc.configure(state="readonly")
        except:
            enc.configure(state="normal")
            enc.delete(0, "end")  
            enc.insert("end", "Error")
            enc.configure(state="readonly")
        
    def gt_lcm(enc):
        try:
            tnum = enc.get().split(" ",1)
            fnum = tnum[0].strip()
            snum = tnum[1].strip()
            gcdres = math.lcm(int(fnum),int(snum))
            enc.configure(state="normal") 
            enc.delete(0, "end")     
            enc.insert("end", gcdres)
            enc.configure(state="readonly")
        except:
            enc.configure(state="normal")
            enc.delete(0, "end")  
            enc.insert("end", "Error")
            enc.configure(state="readonly")
        
        
    def clear(enc):
        enc.configure(state="normal")
        enc.delete(0, "end")
        enc.configure(state="readonly")
        
    @staticmethod
    def ad(enc, cont):
        enc.configure(state="normal")    
        enc.insert("end", cont)
        enc.configure(state="readonly")
        
    def spc(enc):
        enc.configure(state="normal")    
        enc.insert("end", " ")
        enc.configure(state="readonly")
        
    def gui_ent():
        app = Tk()
        app.geometry('490x670')
        app.configure(bg="black") 
        hd = Label(app,text="Monster Calculator",fg="red",bg="black",font=("Bold",16))
        hd.pack(fill=X)
        lb = Label(app,text=r"|-----\ Welcome /----|",fg="white",bg="black",font=("Bold",14))
        lb.place(x=148,y=42)
        lb2 = Label(app,text=monster_pic,fg="red",bg="black",font=("Bold",18))
        lb2.place(x=124,y=86)
        enc = Entry(app,width=45,bg="white",font=('italy',8))
        enc.place(x=90,y=146)
        enc.config(state="readonly") 
        bt1 = Button(app,text="1",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,1))
        bt1.place(x=90,y=316)
        bt2 = Button(app,text="2",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,2))
        bt2.place(x=150,y=316)
        bt3 = Button(app,text="3",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,3))
        bt3.place(x=210,y=316)
        bt4 = Button(app,text="4",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,4))
        bt4.place(x=90,y=386)
        bt5 = Button(app,text="5",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,5))
        bt5.place(x=150,y=386)
        bt6 = Button(app,text="6",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,6))
        bt6.place(x=210,y=386)
        bt7 = Button(app,text="7",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,7))
        bt7.place(x=90,y=456)
        bt8 = Button(app,text="8",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,8))
        bt8.place(x=150,y=456)
        bt9 = Button(app,text="9",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,9))
        bt9.place(x=210,y=456)
        bt0 = Button(app,text="0",fg="white",width=6,bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,0))
        bt0.place(x=90,y=526)
        bt_ = Button(app,text=".",fg="white",width=1,bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,"."))
        bt_.place(x=210,y=526)
        btp = Button(app,text="+",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,"+"))
        btp.place(x=270,y=316)
        btm = Button(app,text="-",fg="white",bg="black",width=1,font=("Bold",14),command=lambda: gui_calc.ad(enc,"-"))
        btm.place(x=270,y=386)
        bteq = Button(app,text="=",fg="white",bg="black",height=4,font=("Bold",14),command=lambda: gui_calc.clc(enc))
        bteq.place(x=270,y=456)
        btp = Button(app,text="/",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,"/"))
        btp.place(x=330,y=316)
        btop = Button(app,text="X",fg="white",bg="black",width=1,font=("Bold",14),command=lambda: gui_calc.ad(enc,"*"))
        btop.place(x=330,y=386)
        btp = Button(app,text="^",fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,"**"))
        btp.place(x=330,y=456)
        btsu = Button(app,text="/",width=1,fg="white",bg="black",font=("Bold",14),command=lambda: gui_calc.ad(enc,"/"))
        btsu.place(x=330,y=526)
        btp = Button(app,text="Clear",fg="white",width=6,bg="black",font=("Bold",14),command=lambda: gui_calc.clear(enc))
        btp.place(x=330,y=316)
        btp = Button(app,text="Spc",fg="white",width=6,bg="black",font=("Bold",14),command=lambda: gui_calc.spc(enc))
        btp.place(x=330,y=246)
        btre = Button(app,text="//",fg="white",bg="black",width=1,font=("Bold",14),command=lambda: gui_calc.ad(enc,"//"))
        btre.place(x=390,y=386)
        btp = Button(app,text="GCD",fg="white",height=2,bg="black",font=("Bold",8),command=lambda: gui_calc.gt_gcd(enc))
        btp.place(x=380,y=456)
        btsu = Button(app,text="LCM",height=2,fg="white",bg="black",font=("Bold",8),command=lambda: gui_calc.gt_lcm(enc))
        btsu.place(x=380,y=526)
        ft = Label(app,text="Made_By@MONSTER",fg="red",bg="black",font=("Bold",16))
        ft.pack(side=BOTTOM,fill=Y)
        app.mainloop()
        
    def clc(enc):
        try:
            resl = eval(enc.get())
            enc.configure(state="normal")
            enc.delete(0, "end")  
            enc.insert("end", resl)
            enc.configure(state="readonly")

        except:
            enc.configure(state="normal")
            enc.delete(0, "end")  
            enc.insert("end", "Error")
            enc.configure(state="readonly")
    def __init__(self):
        gui_calc.gui_ent()



gui_calc()
