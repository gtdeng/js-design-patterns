-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
#OBSERVER PATTERN
//eg event listeners (addEventListener)
//used to notifiy other objects when it's state changes
function eventManager(){
  //create subscribers-object to store the listener-fxs.
  var subscribers = {};

  //add listener-fx to the subscribers[type] array
  function subscribe(type, fn){
    //checks to see if the type is in the subscriber's object
    if(!subscribers[type]) {
      //if it doesn't have a type, set the type as an array to store listeners in the future
      subscribers[type] = [];
    }
    //check whether the fn is in the object
    if(subscribers[type].indexOf(fn) === -1) {
      //add fn if not in the subscribers-object
      subscribers[type].push(fn);
    }
  }

  //remove listener-fx to the subscribers[type] array
  function unsubscribe(type, fn){
    var listeners = subscribers[type];

    //if there are no listeners in the subscribers-object, exit
    if(!listeners) {
      return;
    }

    var index = listeners.indexOf(fn) > -1;

    //remove the listener from the subscriber-object
    listeners.splice(index, 1);
  }

  //call listener-fxS to the subscribers[type] array
  function publish(type, eventObj){
    var listeners = subscribers[type];

    //if there are no listeners in the subscribers-object, exit
    if(!listeners) {
      return;
    }

    //if it's not given, set it.
    if(!eventObj.type) {
      eventObj.type = type;
    }

    //loop thru all the functions in the listeners-array
    for(var i=0, l = listeners.length; i<l; i++) {
      //and call it with the eventObject
      listeners[i](eventObj);
    }
  }



  return {
    subscribe,
    unsubscribe,
    publish
  };

}
