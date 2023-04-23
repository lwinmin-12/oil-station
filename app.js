function checkMqttData(callback) {
    let mqttDataReceived = false;
    const timer = setTimeout(() => {
      if (!mqttDataReceived) {
        callback();
      }
    }, 3000);
  
    // assume MQTT is subscribed and data received via some MQTT library 
    // set mqttDataReceived to true in the callback or wherever MQTT data is received
    mqtt.on('message', (topic, message) => {
      mqttDataReceived = true;
      // do something with the received MQTT data
      // ...
    });
  }