class Cart{
    constructor(List,Quantity){
        this.itemList = List; //Array
        this.itemQuantity = Quantity; //Array
    };
    addItem(i,q){
        this.itemList.push(i);
        this.itemQuantity.push(q);
    };
    totalCart(){
        let total = 0;
        for(let x = 0; x<this.itemList.length; x++){
        let item = (this.itemList[x].price)*this.itemQuantity[x];
        total = total + item;
        return total;
        }
    };
    subCart(d){
        let subCart = new Cart([],[]);
        for(let x = 0; x<this.List.length; x++){
            if(this.itemList[x].shipping == d){
                subcart.itemList.push(this.itemList[x].name);
                subcart.itemQuantity.push(this.itemQuantity[x]);
            }
        }
        return subCart;
    }
}
