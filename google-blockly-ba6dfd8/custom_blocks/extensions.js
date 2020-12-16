Blockly.Blocks['safe_switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ei-lock.svg/1024px-Ei-lock.svg.png", 30, 30, { alt: "", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldDropdown([["Lock","ON"], ["Unlock","OFF"]]), "ON/OFF")
        .appendField("the safe (plugged on pins")
        .appendField(new Blockly.FieldNumber(12, 1, 14, 1), "PIN#1")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(13, 1, 14, 1), "Pin#2")
        .appendField("and")
        .appendField(new Blockly.FieldNumber(14, 1, 14, 1), "Pin#3")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arm_switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("The arm extension")
        .appendField(new Blockly.FieldDropdown([["lets go","OFF"], ["grabs","ON"]]), "ARM_SWITCH")
        .appendField("(plugged on pins")
        .appendField(new Blockly.FieldNumber(9, 0, 14, 1), "PIN#1")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(10, 0, 14, 1), "PIN#2")
        .appendField("and")
        .appendField(new Blockly.FieldNumber(11, 0, 14, 1), "PIN#3")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};