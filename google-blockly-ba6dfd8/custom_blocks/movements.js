Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("The drone flies")
        .appendField(new Blockly.FieldDropdown([["forward","FORWARD"], ["backward","BACKWARD"], ["up","UP"], ["down","DOWN"], ["left","LEFT"], ["right","RIGHT"]]), "DIRECTION")
        .appendField(new Blockly.FieldNumber(10, 0, Infinity, 0.01), "DISTANCE")
        .appendField("meters");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait for")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "TIME")
        .appendField(new Blockly.FieldDropdown([["seconds","SECOND"], ["minutes","MINUTE"], ["hours","HOUR"]]), "TIME_UNIT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['goto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go to (latitude :")
        .appendField(new Blockly.FieldNumber(0, -90, 90, 0.000001), "LATITUDE")
        .appendField(", longitude :")
        .appendField(new Blockly.FieldNumber(0, -180, 180, 0.000001), "LONGITUDE")
        .appendField(") at/in")
        .appendField(new Blockly.FieldNumber(5, 0.01, Infinity, 0.01), "SPEED")
        .appendField("m/s");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['scan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scan from current location to (latitude : ")
        .appendField(new Blockly.FieldNumber(0, -90, 90, 0.000001), "LATITUDE")
        .appendField(", longitude :")
        .appendField(new Blockly.FieldNumber(0, -180, 180, 0.000001), "LONGITUDE")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("The drone will fly to cover the everything in a rectangle which's corners are the drone's current location and the specified location.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['change_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Change the drone's speed to ")
        .appendField(new Blockly.FieldNumber(5, 0, Infinity, 0.01), "speed")
        .appendField("m/s");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop the drone's current movement");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['move_while'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("While the drone goes")
        .appendField(new Blockly.FieldDropdown([["forward","FORWARD"], ["backward","BACKWARD"], ["up","UP"], ["down","DOWN"], ["left","LEFT"], ["right","RIGHT"]]), "DIRECTION")
        .appendField(new Blockly.FieldNumber(10, 0, Infinity, 0.01), "DISTANCE")
        .appendField("meters");
    this.appendStatementInput("FUNCTION")
        .setCheck("!Movement")
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['scan_while'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("While scan from current location to (latitude : ")
        .appendField(new Blockly.FieldNumber(0, -100, 100, 0.00001), "LATITUDE")
        .appendField(", longitude :")
        .appendField(new Blockly.FieldNumber(0, -200, 200, 0.00001), "LONGITUDE")
        .appendField(")");
    this.appendStatementInput("FUNCTION")
        .setCheck("!Movement")
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['goto_while'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("While the drone goes to (latitude :")
        .appendField(new Blockly.FieldNumber(0, 0, 90, 1e-7), "LATITUDE")
        .appendField(", longitude :")
        .appendField(new Blockly.FieldNumber(0, 0, 90, 1e-7), "LONGITUDE")
        .appendField(") at")
        .appendField(new Blockly.FieldNumber(5, 0.01, Infinity, 0.01), "SPEED")
        .appendField("m/s");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['takeoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take off to")
        .appendField(new Blockly.FieldNumber(3, 0), "HEIGHT")
        .appendField("meters");
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['land'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Land");
    this.setPreviousStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};