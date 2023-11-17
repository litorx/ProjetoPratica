const int ledPin = 13;
boolean emergencia = false;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');

    if (command == "emergencia") {
      acionarEmergencia();
    } else if (command == "atendida") {
      atenderEmergencia();
    }
  }
}

void acionarEmergencia() {
  digitalWrite(ledPin, HIGH);
  Serial.println("Emergencia acionada");
  emergencia = true;
}

void atenderEmergencia() {
  digitalWrite(ledPin, LOW);
  Serial.println("Emergencia atendida");
  emergencia = false;
}
