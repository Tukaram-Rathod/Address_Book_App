/**UC4 Validating all fields by creating contact class */
/**UC7 using getters and setters */
class Contact{

    /**validating first name 
     * must start with capital letter and must have minimum three characters
     */

    get fullName() {
        return this._fullName;
    }
    set fullName(fullName){
        let fullNamePattern = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(fullNamePattern.test(fullName)){
            this._fullName = fullName;
        }
        else
            throw 'Invalid Name';
    }
    
    


    /**Validating phone number
     * consists of either 10 or 12 or 13 numbers
     */

     get tel() {return this._tel;}
     set tel(tel) {
         let telPattern = RegExp('((^\\+?)(([0-9]{2,3})(\\s))?)' + '[0-9]{10}$');
         if (telPattern.test(tel)) {
             this._tel = tel;
         }
         else
             throw 'Invalid Mobile Number';
    }
    

    /**Validating address 
     * must have multiple words and each word with min 3 characters
     */

    get address(){
        return this._address;
    }
    set address(address){        
        let addressPattern = RegExp('^[a-zA-Z0-9_][a-zA-Z0-9_ ]{4,}$');
        if(addressPattern.test(address)){
            this._address = address;    
        }else
            throw 'Invalid Address';                
    }   
    

    get city() {return this._city;}
    set city(city) {this._city = city;}

    get state() {return this._state;}
    set state(state) {this._state = state;}

    get zip(){ return this._zip; }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
        if( zipRegex.test(zip)){
            this._zip=zip;
        }
        else throw 'Invalid Zip-Code';  
    }
        
    // UC5
    get id() {return this._id;}
    set id(id) {this._id = id;}

    //Methods
    toString(){
        return "fullname = "+this.fullName + ", phone = " + this.tel + ", address =" + this.address +
                        ", city = "+this.city+ ", state = " + this.state +", zip-code = " + this.zip; 
    }

}