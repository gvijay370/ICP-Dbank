import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float"

actor Dbank{
  stable var currentValue : Float = 100;
  //currentValue:=10;
  //currentValue:=100;

  var startTime = Time.now();

  //let id = 73462736578235;

  //Debug.print(debug_show(startTime));

  public func topUp(amount : Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withDraw(amount : Float){
   
   let temp : Float = currentValue - amount;
    if(temp >= 0){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
    }
    else{
    Debug.print("Value is too high to withdraw");
    }

  };

  public query func checkBalance() : async Float {
    Debug.print(debug_show(currentValue));
    return currentValue ;
  };

  public func compound(){
    let currentTime = Time.now();
    let compoundTime = ((currentTime-startTime)/1000000000)/(60*60);
    currentValue := currentValue*(1.01**Float.fromInt(compoundTime));
    Debug.print(debug_show(currentValue));
  }
}
