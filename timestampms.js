var TimestampMSDynamicValue = function() {
  this.evaluate = function() {
    return Date.now();
  };
  this.title = function() {
    return "Timestamp ms";
  };
};

TimestampMSDynamicValue.identifier = "me.iamsim.timestampms";
TimestampMSDynamicValue.title = "Timestamp ms";
TimestampMSDynamicValue.inputs = [];

registerDynamicValueClass(TimestampMSDynamicValue);
