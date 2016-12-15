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
    static makePrivateKey(){
      let key = '';
      let limit = 14;
      for(let x=0; x<limit; x++){
        key = String(Math.floor(Math.random()*10));
      }
      console.log(key);
    }
  }
  let wtf = new Password('aaaaaaaaaaaaaa');
  Password.makePrivateKey();
