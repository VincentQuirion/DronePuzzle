function get_init_code() {
    return 'import time\n' +
        'from pymavlink import mavutil\n' +
        'import dronekit\n' +
        '\n' +
        'drone = dronekit.connect("127.0.0.1:14551", wait_ready=True)\n' +
        'drone.groundspeed = 5\n' +
        '# Arm drone\n' +
        'while not drone.is_armable:\n' +
        '    time.sleep(1)\n\n' +
        '' +
        'drone.mode = dronekit.VehicleMode("GUIDED")\n' +
        'drone.armed = True\n\n' +
        'while not drone.armed:\n'+ '' +
        '    time.sleep(1)\n' +
        '# Take off !\n' +
        'drone.simple_takeoff(' + number_takeoff_height + ')\n\n' +
        'while True:\n' +
        '    v_alt = drone.location.global_relative_frame.alt\n' +
        '    if v_alt >= ' + number_takeoff_height + ' - 1.0:\n' +
        '        break\n' +
        '    time.sleep(1)\n' +
        statements_name + '\n\n' +
        '# Land !\n' +
        'drone.mode = dronekit.VehicleMode("LAND")\n\n' +
        'while True:\n' +
        '    if not drone.armed:\n' +
        '        break\n' +
        '    time.sleep(1)\n\n' +
        'print("Mission over !")';

}
