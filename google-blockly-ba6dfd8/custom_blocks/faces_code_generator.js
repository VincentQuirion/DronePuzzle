Blockly.Python['face'] = function(block) {
    var dropdown_faces = block.getFieldValue('faces');
    // TODO: Assemble JavaScript into code variable.
    var code = "'" + dropdown_faces + "'.lower()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};