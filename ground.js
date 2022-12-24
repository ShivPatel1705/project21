class Ground{
   //in x 700 will get stored in y 400 in w 1400 in h 10 E.C.T.
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        var options={isStatic:true}
        //body1.x = 700, body1.y = 400, body1.w = 1400, body1.h = 10 E>C>T>
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
	    World.add(world,this.body)
    
    }
    show(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w, this.h)

    }
}
//"this"  keyword will get replaced with the name of the object.