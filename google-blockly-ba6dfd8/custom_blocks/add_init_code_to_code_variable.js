function add_init_code_to_code_variable (code) {

    code = '\n# Init drone\n' +
        'drone = dronekit.connect("127.0.0.1:14551", wait_ready=True)\n' +
        'drone.groundspeed = 10\n\n' + code;

    // All facial recognition functions need 'current_faces' and 'face_history' files
    if (code.includes('face')) {
        code = 'from threading import Thread\n' +
            'import pickle\n' +
            'import os\n' +
            'from DroneBlocks_Python import face_recognition\n' +
            'face_recognition.init_face_recognition()\n' + code;
    }

    // All movement functions need the time module
    if (code.includes('movement')) {
        code = 'from DroneBlocks_Python import movement\n' + code
    }

    code = 'import dronekit\n' + code;

    return code;
    }