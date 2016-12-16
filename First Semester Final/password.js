class Password{
    constructor(publickey,privatekey){
        this.publickey = publickey;
        this.privatekey = privatekey;
    }
    validPublicKey(){
    let key = this.publickey;
    if(key.length >= 8 && key.length <= 25){
      return true;
    }
    else{
      return false;
    }
  }
    validPrivateKey(){
        if(this.privatekey.charAt(4) != '-' || this.privatekey.charAt(9) != '-'){
          return false;
        }
        else if(Number.isNaN(Number(this.privatekey.substring(0,4)))){
          return false;
        }
        else if(Number.isNaN(Number(this.privatekey.substring(5,9)))){
          return false;
        }
        else if(Number.isNaN(Number(this.privatekey.substring(10,14)))){
          return false;
        }
        else{
          return true;
        }
    }
    static makePrivateKey(){
      let key = '';
      let limit = 14;
      for(let x=0; x<limit; x++){
          if(x == 4 || x == 9){
              key += '-';
          }
          else{
        key += String(Math.floor(Math.random()*10));
        }
    }
    return key;
    }
}
let Angery = new Password('xxxxxxxxxxxxxx','a234-1234-1234');
console.log(Angery.validPrivateKey());
