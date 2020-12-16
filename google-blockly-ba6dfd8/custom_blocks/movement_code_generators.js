Blockly.Python['takeoff'] = function(block) {
  var number_height = block.getFieldValue('HEIGHT');

  var code = '# Takeoff!\n' +
      'movement.takeoff(drone, ' + number_height + ')\n';

  return code;
};

Blockly.Python['land'] = function(block) {
  var code = '# Landing!\n' +
      'movement.land(drone)\n';

  return code;
};

Blockly.Python['move'] = function(block) {
  var number_distance = block.getFieldValue('DISTANCE');
  var dropdown_direction = block.getFieldValue('DIRECTION');

  var code = 'movement.move(drone, "' + dropdown_direction.toLowerCase() + '", ' + number_distance + ')\n';

  return code;
};

Blockly.Python['move_while'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var number_distance = block.getFieldValue('DISTANCE');
  var statements_function = Blockly.Python.statementToCode(block, 'FUNCTION');

  code  = 'def function_to_execute_while(drone):\n' + statements_function + '\n' + '   return "stop"\n' +
      'movement.move(drone, "' + dropdown_direction.toLowerCase() + '", ' + number_distance + ', function_to_execute_while=function_to_execute_while)\n';

  return code;
};
Blockly.Python['wait'] = function(block) {
  var number_time = block.getFieldValue('TIME');
  var dropdown_time_unit = block.getFieldValue('TIME_UNIT');

  var wait_time;

  // Convert time into seconds
  if (dropdown_time_unit == 'SECOND') {
    wait_time = number_time
  }
  else if (dropdown_time_unit == 'MINUTE') {
    wait_time = number_time * 60
  }
  else if (dropdown_time_unit == 'HOUR') {
    wait_time = number_time * 3600
  }

  // TODO: Assemble Python into code variable.
  var code = '# Wait' + '\n' +
             'drone.mode = VehicleMode("LOITER")' + '\n' +
             'time.sleep(' + wait_time + ')' + '\n' +
             'drone.mode = VehicleMode("GUIDED")\n';
  return code;
};

Blockly.Python['goto'] = function(block) {
  var number_latitude = block.getFieldValue('LATITUDE');
  var number_longitude = block.getFieldValue('LONGITUDE');
  var number_speed = block.getFieldValue('SPEED');
  // TODO: Assemble Python into code variable.

  var code = '# Send the drone to a certain location !\n' +
      'movement.go_to(drone, ' + number_latitude + ', ' + number_longitude + ', ' + number_speed + ')\n';
  return code;
};

Blockly.Python['goto_while'] = function(block) {
  var number_latitude = block.getFieldValue('LATITUDE');
  var number_longitude = block.getFieldValue('LONGITUDE');
  var number_speed = block.getFieldValue('SPEED');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '# Send the drone to a certain location !\n' +
      'def action():\n' +
      ' ' + statements_name +
      'drone.groundspeed = ' + number_speed + '\n' +
      'target_location = dronekit.LocationGlobal(' + number_latitude + ', ' + number_longitude + ', drone.location.global_frame.alt)\n' +
      '\n' +
      'drone.simple_goto(target_location)\n' +
      '\n' +
      '# Wait for the drone to be there\n' +
      'while True:\n' +
      '    current_lat = drone.location.global_frame.lat\n' +
      '    current_lon = drone.location.global_frame.lon\n' +
      '    difference = (abs(current_lat - target_location.lat) + abs(current_lon - target_location.lon))\n' +
      '    if difference <= 0.00001:\n' +
      '        break\n' +
      '    time.sleep(1)\n';
  return code;
};

Blockly.Python['scan'] = function(block) {
  var number_latitude = block.getFieldValue('LATITUDE');
  var number_longitude = block.getFieldValue('LONGITUDE');
  // TODO: Assemble Python into code variable.
  var code = '# Make the drone scan a rectangle-shaped area from current location to a specified location\n' +
      '\n' +
      'def go_to(drone, location):\n' +
      '    drone.simple_goto(location)\n' +
      '    while True:\n' +
      '\n' +
      '        difference = (abs(drone.location.global_frame.lat - heading_to.lat) +\n' +
      '                      abs(drone.location.global_frame.lon - heading_to.lon))\n' +
      '        if difference <= 0.000125:\n' +
      '            break\n' +
      '        time.sleep(1)\n' +
      '\n' +
      'start_location = drone.location.global_frame\n' +
      'target_location = dronekit.LocationGlobal(' + number_latitude +', ' + number_longitude + ', drone.location.global_frame.alt)\n' +
      '\n' +
      'if abs(target_location.lat - start_location.lat) >= abs(target_location.lon - start_location.lon):\n' +
      '    while True:\n' +
      '        heading_to = dronekit.LocationGlobal(target_location.lat, drone.location.global_frame.lon,\n' +
      '                                             drone.location.global_frame.alt)\n' +
      '        drone.simple_goto(heading_to)\n' +
      '        go_to(drone, heading_to)\n' +
      '\n' +
      '        if (target_location.lon - drone.location.global_frame.lon) >= 0.0005:\n' +
      '            heading_to = dronekit.LocationGlobal(target_location.lat, drone.location.global_frame.lon + 0.0005, drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '            heading_to = dronekit.LocationGlobal(start_location.lat, drone.location.global_frame.lon,\n' +
      '                                                 drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '            if (target_location.lon - drone.location.global_frame.lon) >= 0.0005:\n' +
      '                heading_to = dronekit.LocationGlobal(start_location.lat, drone.location.global_frame.lon + 0.0005,\n' +
      '                                                     drone.location.global_frame.alt)\n' +
      '                go_to(drone, heading_to)\n' +
      '\n' +
      '            else:\n' +
      '                heading_to = dronekit.LocationGlobal(start_location.lat, target_location.lon,\n' +
      '                                                        drone.location.global_frame.alt)\n' +
      '                go_to(drone, heading_to)\n' +
      '\n' +
      '        elif (target_location.lon - drone.location.global_frame.lon) <= -0.0005:\n' +
      '            heading_to = dronekit.LocationGlobal(target_location.lat, drone.location.global_frame.lon - 0.0005, drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '            heading_to = dronekit.LocationGlobal(start_location.lat, drone.location.global_frame.lon, drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '            if (target_location.lon - drone.location.global_frame.lon) <= -0.0005:\n' +
      '                heading_to = dronekit.LocationGlobal(start_location.lat, drone.location.global_frame.lon - 0.0005,\n' +
      '                                                         drone.location.global_frame.alt)\n' +
      '                go_to(drone, heading_to)\n' +
      '            else:\n' +
      '                heading_to = dronekit.LocationGlobal(start_location.lat, target_location.lon,\n' +
      '                                                         drone.location.global_frame.alt)\n' +
      '                go_to(drone, heading_to)\n' +
      '\n' +
      '        else:\n' +
      '            heading_to = dronekit.LocationGlobal(target_location.lat, target_location.lon, drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '        difference = (abs(drone.location.global_frame.lat - target_location.lat) + abs(drone.location.global_frame.lon - target_location.lon))\n' +
      '        if difference <= 0.000125:\n' +
      '            break\n' +
      '        time.sleep(1)\n' +
      'else:\n' +
      '    while True:\n' +
      '        heading_to = dronekit.LocationGlobal(drone.location.global_frame.lat, target_location.lon, drone.location.global_frame.alt)\n' +
      '        go_to(drone, heading_to)\n' +
      '\n' +
      '        if (target_location.lat - drone.location.global_frame.lat) >= 0.0005:\n' +
      '            heading_to = dronekit.LocationGlobal(drone.location.global_frame.lat + 0.0005, target_location.lon,\n' +
      '                                                 drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '            heading_to = dronekit.LocationGlobal(drone.location.global_frame.lat, start_location.lon, drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '            if (target_location.lat - drone.location.global_frame.lat) >= 0.0005:\n' +
      '                heading_to = dronekit.LocationGlobal(drone.location.global_frame.lat + 0.0005, start_location.lon,\n' +
      '                                                     drone.location.global_frame.alt)\n' +
      '                go_to(drone, heading_to)\n' +
      '\n' +
      '            else:\n' +
      '                heading_to = dronekit.LocationGlobal(target_location.lat, start_location.lon,\n' +
      '                                                     drone.location.global_frame.alt)\n' +
      '                go_to(drone, heading_to)\n' +
      '\n' +
      '        elif (target_location.lat - drone.location.global_frame.lat) <= -0.0005:\n' +
      '            heading_to = dronekit.LocationGlobal(drone.location.global_frame.lat - 0.0005, target_location.lon, drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '            heading_to = dronekit.LocationGlobal(drone.location.global_frame.lat, start_location.lon, drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '            if (target_location.lat - drone.location.global_frame.lat) <= -0.0005:\n' +
      '                heading_to = dronekit.LocationGlobal(drone.location.global_frame.lat - 0.0005, start_location.lon,\n' +
      '                                                     drone.location.global_frame.alt)\n' +
      '                go_to(drone, heading_to)\n' +
      '\n' +
      '            else:\n' +
      '                heading_to = dronekit.LocationGlobal(target_location.lat, start_location.lon,\n' +
      '                                                         drone.location.global_frame.alt)\n' +
      '                go_to(drone, heading_to)\n' +
      '        else:\n' +
      '            heading_to = dronekit.LocationGlobal(target_location.lat, drone.location.global_frame.lon, drone.location.global_frame.alt)\n' +
      '            go_to(drone, heading_to)\n' +
      '\n' +
      '        difference = (abs(drone.location.global_frame.lat - target_location.lat) + abs(drone.location.global_frame.lon - target_location.lon))\n' +
      '        if difference <= 0.000125:\n' +
      '            break\n' +
      '        time.sleep(1)\n\n';
  return code;
};

Blockly.JavaScript['change_speed'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Python['stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
