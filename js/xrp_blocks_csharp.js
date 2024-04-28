const CS = Blockly.CSharp;

//Individual Motors
Blockly.CSharp['xrp_motor_effort'] = function (block) {
  CS.definitions_['import_motor'] = 'from XRPLib.encoded_motor import EncodedMotor';
  var index = block.getFieldValue("MOTOR");
  CS.definitions_[`motor${index}_setup`] = `motor${index} = EncodedMotor.get_default_encoded_motor(${index})`;
  var value_effort = Blockly.CSharp.valueToCode(block, 'effort', Blockly.CSharp.ORDER_ATOMIC);
  //var code = `motor${index}.set_effort(${value_effort})\n`;
  var code = `lmaooo\n`;
  return code;
};

Blockly.CSharp['xrp_motor_speed'] = function (block) {
  CS.definitions_['import_motor'] = 'from XRPLib.encoded_motor import EncodedMotor';
  var index = block.getFieldValue("MOTOR");
  CS.definitions_[`motor${index}_setup`] = `motor${index} = EncodedMotor.get_default_encoded_motor(${index})`;
  var value_speed = Blockly.CSharp.valueToCode(block, 'speed', Blockly.CSharp.ORDER_ATOMIC);
  if(value_speed == 0) value_speed = "";
  var code = `motor${index}.set_speed(${value_speed})\n`;
  return code;
};

Blockly.CSharp['xrp_motor_get_speed'] = function (block) {
  CS.definitions_['import_motor'] = 'from XRPLib.encoded_motor import EncodedMotor';
  var index = block.getFieldValue("MOTOR");
  CS.definitions_[`motor${index}_setup`] = `motor${index} = EncodedMotor.get_default_encoded_motor(${index})`;
  var code = `motor${index}.get_speed()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_motor_direction'] = function (block) {
  CS.definitions_['import_motor'] = 'from XRPLib.encoded_motor import EncodedMotor';
  var index = block.getFieldValue("MOTOR");
  CS.definitions_[`motor${index}_setup`] = `motor${index} = EncodedMotor.get_default_encoded_motor(${index})`;
  var value_direction = block.getFieldValue("DIRECTION");
  var code = `motor${index}._motor.flip_dir = (${value_direction})\n`;
  return code;
};

Blockly.CSharp['xrp_motor_get_position'] = function (block) {
  CS.definitions_['import_motor'] = 'from XRPLib.encoded_motor import EncodedMotor';
  var index = block.getFieldValue("MOTOR");
  CS.definitions_[`motor${index}_setup`] = `motor${index} = EncodedMotor.get_default_encoded_motor(${index})`;
  var code = `motor${index}.get_position()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_motor_get_count'] = function (block) {
  CS.definitions_['import_motor'] = 'from XRPLib.encoded_motor import EncodedMotor';
  var index = block.getFieldValue("MOTOR");
  CS.definitions_[`motor${index}_setup`] = `motor${index} = EncodedMotor.get_default_encoded_motor(${index})`;
  var code = `motor${index}.get_position_counts()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_motor_reset_position'] = function (block) {
  CS.definitions_['import_motor'] = 'from XRPLib.encoded_motor import EncodedMotor';
  var index = block.getFieldValue("MOTOR");
  CS.definitions_[`motor${index}_setup`] = `motor${index} = EncodedMotor.get_default_encoded_motor(${index})`;
  var code = `motor${index}.reset_encoder_position()\n`;
  return code;
};

//DriveTrain
Blockly.CSharp['xrp_straight_effort'] = function (block) {
  CS.definitions_['import_drivetrain'] = 'from XRPLib.differential_drive import DifferentialDrive';
  CS.definitions_[`drietrain_setup`] = `differentialDrive = DifferentialDrive.get_default_differential_drive()`;
  var value_dist = Blockly.CSharp.valueToCode(block, 'dist', Blockly.CSharp.ORDER_ATOMIC);
  var value_effort = Blockly.CSharp.valueToCode(block, 'effort', Blockly.CSharp.ORDER_ATOMIC);
  var code = `differentialDrive.straight(${value_dist}, ${value_effort})\n`;
  return code;
};

Blockly.CSharp['xrp_turn_effort'] = function (block) {
  CS.definitions_['import_drivetrain'] = 'from XRPLib.differential_drive import DifferentialDrive';
  CS.definitions_[`drietrain_setup`] = `differentialDrive = DifferentialDrive.get_default_differential_drive()`;
  var value_angle = Blockly.CSharp.valueToCode(block, 'degrees', Blockly.CSharp.ORDER_ATOMIC);
  var value_effort = Blockly.CSharp.valueToCode(block, 'effort', Blockly.CSharp.ORDER_ATOMIC);
  var code = `differentialDrive.turn(${value_angle}, ${value_effort})\n`;
  return code;
};

Blockly.CSharp['xrp_seteffort'] = function (block) {
  CS.definitions_['import_drivetrain'] = 'from XRPLib.differential_drive import DifferentialDrive';
  CS.definitions_[`drietrain_setup`] = `differentialDrive = DifferentialDrive.get_default_differential_drive()`;
  var value_l = Blockly.CSharp.valueToCode(block, 'LEFT', Blockly.CSharp.ORDER_ATOMIC);
  var value_r = Blockly.CSharp.valueToCode(block, 'RIGHT', Blockly.CSharp.ORDER_ATOMIC);
  var code = `differentialDrive.set_effort(${value_l}, ${value_r})\n`;
  return code;
};

Blockly.CSharp['xrp_speed'] = function (block) {
  CS.definitions_['import_drivetrain'] = 'from XRPLib.differential_drive import DifferentialDrive';
  CS.definitions_[`drietrain_setup`] = `differentialDrive = DifferentialDrive.get_default_differential_drive()`;
  var value_l = Blockly.CSharp.valueToCode(block, 'LEFT', Blockly.CSharp.ORDER_ATOMIC);
  var value_r = Blockly.CSharp.valueToCode(block, 'RIGHT', Blockly.CSharp.ORDER_ATOMIC)
  var code = `differentialDrive.set_speed(${value_l}, ${value_r})\n`;
  return code;
};

Blockly.CSharp['xrp_arcade'] = function (block) {
  CS.definitions_['import_drivetrain'] = 'from XRPLib.differential_drive import DifferentialDrive';
  CS.definitions_[`drietrain_setup`] = `differentialDrive = DifferentialDrive.get_default_differential_drive()`;
  var value_s = Blockly.CSharp.valueToCode(block, 'STRAIGHT', Blockly.CSharp.ORDER_ATOMIC);
  var value_t = Blockly.CSharp.valueToCode(block, 'TURN', Blockly.CSharp.ORDER_ATOMIC);
  var code = `differentialDrive.arcade(${value_s}, ${value_t})\n`;
  return code;
};

Blockly.CSharp['xrp_stop_motors'] = function (block) {
  CS.definitions_['import_drivetrain'] = 'from XRPLib.differential_drive import DifferentialDrive';
  CS.definitions_[`drietrain_setup`] = `differentialDrive = DifferentialDrive.get_default_differential_drive()`;
  var code = `differentialDrive.stop()\n`;
  return code;
};

Blockly.CSharp['xrp_resetencoders'] = function (block) {
  CS.definitions_['import_drivetrain'] = 'from XRPLib.differential_drive import DifferentialDrive';
  CS.definitions_[`drietrain_setup`] = `differentialDrive = DifferentialDrive.get_default_differential_drive()`;
  var value_degrees = Blockly.CSharp.valueToCode(block, 'degrees', Blockly.CSharp.ORDER_ATOMIC);
  var code = `differentialDrive.reset_encoder_position()\n`;
  return code;
};

Blockly.CSharp['xrp_getleftencoder'] = function (block) {
  CS.definitions_['import_drivetrain'] = 'from XRPLib.differential_drive import DifferentialDrive';
  CS.definitions_[`drietrain_setup`] = `differentialDrive = DifferentialDrive.get_default_differential_drive()`;
  var code = `differentialDrive.get_left_encoder_position()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_getrightencoder'] = function (block) {
  CS.definitions_['import_drivetrain'] = 'from XRPLib.differential_drive import DifferentialDrive';
  CS.definitions_[`drietrain_setup`] = `differentialDrive = DifferentialDrive.get_default_differential_drive()`;
  var code = `differentialDrive.get_right_encoder_position()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

//Servo
Blockly.CSharp['xrp_servo_deg'] = function (block) {
  CS.definitions_['import_servo'] = 'from XRPLib.servo import Servo';
  var index = block.getFieldValue("SERVO");
  if(index == 1){
    CS.definitions_[`servo_setup`] = `servo1 = Servo.get_default_servo(1)`;
  }
  else {
    CS.definitions_[`servo2_setup`] = `servo2 = Servo.get_default_servo(2)`;
  }
  var value_degrees = Blockly.CSharp.valueToCode(block, 'degrees', Blockly.CSharp.ORDER_ATOMIC);
  var code = `servo${index}.set_angle(${value_degrees})\n`;
  return code;
};

//Distance
Blockly.CSharp['xrp_getsonardist'] = function (block) {
  CS.definitions_['import_rangefinder'] = 'from XRPLib.rangefinder import Rangefinder';
  CS.definitions_[`rangefinder_setup`] = `rangefinder = Rangefinder.get_default_rangefinder()`;
  var code = `rangefinder.distance()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

//reflectance
Blockly.CSharp['xrp_l_refl'] = function (block) {
  CS.definitions_['import_reflectance'] = 'from XRPLib.reflectance import Reflectance';
  CS.definitions_[`reflectance_setup`] = `reflectance = Reflectance.get_default_reflectance()`;
  var code = `reflectance.get_left()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_r_refl'] = function (block) {
  CS.definitions_['import_reflectance'] = 'from XRPLib.reflectance import Reflectance';
  CS.definitions_[`reflectance_setup`] = `reflectance = Reflectance.get_default_reflectance()`;
  var code = `reflectance.get_right()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

//Gyro
Blockly.CSharp['xrp_yaw'] = function (block) {
  CS.definitions_['import_imu'] = 'from XRPLib.imu import IMU';
  CS.definitions_[`imu_setup`] = `imu = IMU.get_default_imu()\nimu.calibrate(1)`;
  var code = `imu.get_yaw()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_roll'] = function (block) {
  CS.definitions_['import_imu'] = 'from XRPLib.imu import IMU';
  CS.definitions_[`imu_setup`] = `imu = IMU.get_default_imu()\nimu.calibrate(1)`;
  var code = `imu.get_roll()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_pitch'] = function (block) {
  CS.definitions_['import_imu'] = 'from XRPLib.imu import IMU';
  CS.definitions_[`imu_setup`] = `imu = IMU.get_default_imu()\nimu.calibrate(1)`;
  var code = `imu.get_pitch()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

//Accelerometer
Blockly.CSharp['xrp_acc_x'] = function (block) {
  CS.definitions_['import_imu'] = 'from XRPLib.imu import IMU';
  CS.definitions_[`imu_setup`] = `imu = IMU.get_default_imu()\nimu.calibrate(1)`;
  var code = `imu.get_acc_x()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_acc_y'] = function (block) {
  CS.definitions_['import_imu'] = 'from XRPLib.imu import IMU';
  CS.definitions_[`imu_setup`] = `imu = IMU.get_default_imu()\nimu.calibrate(1)`;
  var code = `imu.get_acc_y()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_acc_z'] = function (block) {
  CS.definitions_['import_imu'] = 'from XRPLib.imu import IMU';
  CS.definitions_[`imu_setup`] = `imu = IMU.get_default_imu()\nimu.calibrate(1)`;
  var code = `imu.get_acc_z()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

//Control Board
Blockly.CSharp['xrp_led_on'] = function (block) {
  CS.definitions_['import_board'] = 'from XRPLib.board import Board';
  CS.definitions_[`board_setup`] = `board = Board.get_default_board()`;
  var code = `board.led_on()\n`;
  return code;
};

Blockly.CSharp['xrp_led_off'] = function (block) {
  CS.definitions_['import_board'] = 'from XRPLib.board import Board';
  CS.definitions_[`board_setup`] = `board = Board.get_default_board()`;
  var code = `board.led_off()\n`;
  return code;
};

Blockly.CSharp['xrp_button_pressed'] = function (block) {
  CS.definitions_['import_board'] = 'from XRPLib.board import Board';
  CS.definitions_[`board_setup`] = `board = Board.get_default_board()`;
  var code = `board.is_button_pressed()`;
  return [code, Blockly.CSharp.ORDER_NONE];
};

Blockly.CSharp['xrp_wait_for_button_press'] = function (block) {
  CS.definitions_['import_board'] = 'from XRPLib.board import Board';
  CS.definitions_[`board_setup`] = `board = Board.get_default_board()`;
  var code = `board.wait_for_button()\n`
  return code;
};

//Web Server
var nextFunc = 0;
function getFuncName(){
  nextFunc++;
  return "func" + nextFunc;
}

Blockly.CSharp['xrp_ws_forward_button'] = function (block) {
  CS.definitions_['import_webserver'] = 'from XRPLib.webserver import Webserver';
  CS.definitions_[`webserver_setup`] = `webserver = Webserver.get_default_webserver()`;
  var func = Blockly.CSharp.statementToCode(block, 'func');
  var funcName = getFuncName();
  var code = `\ndef ${funcName}():\n${func}\n`
  code += `webserver.registerForwardButton(${funcName})\n`
  return code;
};

Blockly.CSharp['xrp_ws_back_button'] = function (block) {
  CS.definitions_['import_webserver'] = 'from XRPLib.webserver import Webserver';
  CS.definitions_[`webserver_setup`] = `webserver = Webserver.get_default_webserver()`;
  var func = Blockly.CSharp.statementToCode(block, 'func');
  var funcName = getFuncName();
  var code = `\ndef ${funcName}():\n${func}\n`
  code += `webserver.registerBackwardButton(${funcName})\n`
  return code;
};

Blockly.CSharp['xrp_ws_left_button'] = function (block) {
  CS.definitions_['import_webserver'] = 'from XRPLib.webserver import Webserver';
  CS.definitions_[`webserver_setup`] = `webserver = Webserver.get_default_webserver()`;
  var func = Blockly.CSharp.statementToCode(block, 'func');
  var funcName = getFuncName();
  var code = `\ndef ${funcName}():\n${func}\n`
  code += `webserver.registerLeftButton(${funcName})\n`
  return code;
};

Blockly.CSharp['xrp_ws_right_button'] = function (block) {
  CS.definitions_['import_webserver'] = 'from XRPLib.webserver import Webserver';
  CS.definitions_[`webserver_setup`] = `webserver = Webserver.get_default_webserver()`;
  var func = Blockly.CSharp.statementToCode(block, 'func');
  var funcName = getFuncName();
  var code = `\ndef ${funcName}():\n${func}\n`
  code += `webserver.registerRightButton(${funcName})\n`
  return code;
};

Blockly.CSharp['xrp_ws_stop_button'] = function (block) {
  CS.definitions_['import_webserver'] = 'from XRPLib.webserver import Webserver';
  CS.definitions_[`webserver_setup`] = `webserver = Webserver.get_default_webserver()`;
  var func = Blockly.CSharp.statementToCode(block, 'func');
  var funcName = getFuncName();
  var code = `\ndef ${funcName}():\n${func}\n`
  code += `webserver.registerStopButton(${funcName})\n`
  return code;
};

Blockly.CSharp['xrp_ws_add_button'] = function (block) {
  CS.definitions_['import_webserver'] = 'from XRPLib.webserver import Webserver';
  CS.definitions_[`webserver_setup`] = `webserver = Webserver.get_default_webserver()`;
  var name = block.getFieldValue("TEXT");
  var func = Blockly.CSharp.statementToCode(block, 'func');
  var funcName = getFuncName();
  var code = `\ndef ${funcName}():\n${func}\n`
  code += `webserver.add_button("${name}", ${funcName})\n`
  return code;
};

Blockly.CSharp['xrp_ws_log_data'] = function (block) {
  CS.definitions_['import_webserver'] = 'from XRPLib.webserver import Webserver';
  CS.definitions_[`webserver_setup`] = `webserver = Webserver.get_default_webserver()`; 
  data = Blockly.CSharp.valueToCode(block, 'DATA', Blockly.CSharp.ORDER_ATOMIC);
  var label  = block.getInputTargetBlock("log_name").getFieldValue("TEXT");
  var code = `webserver.log_data("${label}", ${data})\n`
  return code;
};


Blockly.CSharp['xrp_ws_connect_server'] = function (block) {
  CS.definitions_['import_webserver'] = 'from XRPLib.webserver import Webserver';
  CS.definitions_[`webserver_setup`] = `webserver = Webserver.get_default_webserver()`;
  var ssid = block.getInputTargetBlock("server_ssid").getFieldValue("TEXT");
  var pwd = block.getInputTargetBlock("server_pwd").getFieldValue("TEXT")
  var code = `webserver.connect_to_network(ssid="${ssid}", password="${pwd}")\nwebserver.start_server()\n`
  return code;
};

Blockly.CSharp['xrp_ws_start_server'] = function (block) {
  CS.definitions_['import_webserver'] = 'from XRPLib.webserver import Webserver';
  CS.definitions_[`webserver_setup`] = `webserver = Webserver.get_default_webserver()`;
  var ssid = block.getInputTargetBlock("server_ssid").getFieldValue("TEXT");
  var pwd = block.getInputTargetBlock("server_pwd").getFieldValue("TEXT")
  var code = `webserver.start_network(ssid="${ssid}", password="${pwd}")\nwebserver.start_server()\n`
  return code;
};


//Logic
Blockly.CSharp['xrp_sleep'] = function (block) {
  CS.definitions_['import_time'] = 'import time';
  var number_time = Blockly.CSharp.valueToCode(block, 'TIME', Blockly.CSharp.ORDER_ATOMIC);
  var code = `time.sleep(${number_time})\n`;
  return code;
};


