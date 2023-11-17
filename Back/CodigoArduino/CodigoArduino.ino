const int botaoPin = 2; // Pino digital para o botão físico
const int ledPin = 13;  // Pino digital para o LED

int emergenciaStatus = 0;

void setup() {
  pinMode(botaoPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int botaoState = digitalRead(botaoPin);

  if (botaoState == HIGH) {
    if (emergenciaStatus == 0) {
      emergenciaStatus = 1;
      Serial.println("Emergência ativada");
    }
  } else {
    if (emergenciaStatus == 1) {
      emergenciaStatus = 0;
      digitalWrite(ledPin, LOW);
      Serial.println("Emergência desativada");
    }
  }

  if (emergenciaStatus == 1) {
    digitalWrite(ledPin, HIGH);
    delay(400);
    digitalWrite(ledPin, LOW);
    delay(400);
  }
}