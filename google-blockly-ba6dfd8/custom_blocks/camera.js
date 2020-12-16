Blockly.Blocks['picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take picture (width :")
        .appendField(new Blockly.FieldNumber(1080, 0, Infinity, 1), "WIDTH")
        .appendField(", height :")
        .appendField(new Blockly.FieldNumber(1080, 0, Infinity, 1), "HEIGHT")
        .appendField("(px))");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['timed_video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take a")
        .appendField(new Blockly.FieldNumber(2, 0.001, Infinity, 1), "TIME")
        .appendField(new Blockly.FieldDropdown([["second","SECOND"], ["minute","MINUTE"]]), "TIME_UNIT")
        .appendField("video (width :")
        .appendField(new Blockly.FieldNumber(1080, 1, Infinity, 1), "WIDTH")
        .appendField(", height :")
        .appendField(new Blockly.FieldNumber(1080, 1, Infinity, 1), "HEIGHT")
        .appendField("(px))");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take a video (width :")
        .appendField(new Blockly.FieldNumber(1080, 1, Infinity, 1), "WIDTH")
        .appendField(", height :")
        .appendField(new Blockly.FieldNumber(1080, 1, Infinity, 1), "HEIGHT")
        .appendField("(px))");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("while");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};