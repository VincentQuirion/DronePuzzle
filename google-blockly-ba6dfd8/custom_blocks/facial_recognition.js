Blockly.Blocks['if_in_face_list'] = {
    init: function() {
        this.appendValueInput("face")
            .setCheck("logic")
            .appendField("if");
        this.appendDummyInput()
            .appendField("is")
            .appendField(new Blockly.FieldDropdown([["in","in"], ["not in","not in"]]), "in/not_in")
            .appendField(new Blockly.FieldDropdown([["currently recognized faces","current_faces"], ["all recognized faces","face_history"]]), "face_list");
        this.appendStatementInput("function")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['and_or'] = {
  init: function() {
    this.appendValueInput("first")
        .setCheck("Face");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["and","AND"], ["or","OR"]]), "and/or");
    this.appendValueInput("second")
        .setCheck("Face");
    this.setOutput(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};