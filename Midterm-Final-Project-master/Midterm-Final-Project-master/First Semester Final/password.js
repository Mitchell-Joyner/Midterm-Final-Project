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
        let pkey = this.privatekey
        if(pkey.charAt(4) != '-' || pkey.charAt(9) != '-'){
            return false;
            console.log(false);
        }
        else if
        else{
            return true;
            console.log(true);
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
console.log(key);
    }
}
let Angery = new Password('xxxxxxxxxxxxxx','1234-1234-1234');
Password.makePrivateKey();
