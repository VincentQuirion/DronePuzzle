Blockly.Python['if_in_face_list'] = function(block) {
    var value_face = Blockly.Python.valueToCode(block, 'face', Blockly.Python.ORDER_ATOMIC);
    var dropdown_in_not_in = block.getFieldValue('in/not_in');
    var dropdown_face_list = block.getFieldValue('face_list');
    var statements_function = Blockly.Python.statementToCode(block, 'function');
    // TODO: Assemble Python into code variable.
    var code = 'faces = face_recognition.get_' + dropdown_face_list + '()\n\n' +
        'if ' + value_face + ' ' + dropdown_in_not_in + ' faces' + ':\n    ' +
        statements_function + '\n';
    return code;
};