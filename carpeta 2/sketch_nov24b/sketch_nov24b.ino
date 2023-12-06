#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>
#include <WiFi.h>

const char* ssid = "dlink";
const char* wifipassword = "";

WiFiClient wifi;

MySQL_Connection conn((Client *)&wifi);

// Configuración conexion DB
IPAddress server_addr(192,168,0,100);          // MySQL server IP 172.16.24.55

char dbuser[] = "proyecto";           // MySQL user
char dbpassword[] = "proyecto";

//char UPDATE_SQL[] = "UPDATE proyecto.contenedor SET `recoger` = '1' WHERE `contenedor`.`id_contenedor` = 9";
char RECOGER_SQL[] = "UPDATE proyecto.contenedor SET `recoger` = '1' WHERE `contenedor`.`id_contenedor` = 9";
char NORECOGER_SQL[] = "UPDATE proyecto.contenedor SET `recoger` = '0' WHERE `contenedor`.`id_contenedor` = 9";
char query[128];

int pinTRIG = 14;
int pinECO = 12;
float velocidad = 0.034;
long tiempo_emision;
long duracion;
float distancia;

void setup() {
  Serial.begin(115200);
  pinMode(pinTRIG, OUTPUT);
  pinMode(pinECO, INPUT);
  delay(3000);

  WiFi.begin(ssid, wifipassword);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Conexión exitosa. Detalles de red:");
  Serial.print("Dirección IP: ");
  Serial.println(WiFi.localIP());
  Serial.print("Máscara de subred: ");
  Serial.println(WiFi.subnetMask());
  Serial.print("Puerta de enlace: ");
  Serial.println(WiFi.gatewayIP());

  Serial.println("Connecting to database");
  while (conn.connect(server_addr, 3306, dbuser, dbpassword) != true) {
    delay(1000);
    Serial.print ( "." );
  }
  Serial.println("");
  Serial.println("Connected to SQL Server!"); 
}

void loop() {
  digitalWrite(pinTRIG, HIGH);
  tiempo_emision = pulseIn(pinTRIG, HIGH);
  digitalWrite(pinTRIG, LOW);

  duracion = pulseIn(pinECO, HIGH);

  Serial.print("Tiempo emisión: ");
  Serial.println(tiempo_emision);

  Serial.print("Tiempo recepción: ");
  Serial.println(duracion);

  distancia = duracion * velocidad / 2;
  
  if (distancia >= 0) {
    Serial.print("Distancia: ");
    Serial.println(distancia);

    if (distancia <= 5) {
      Serial.println("Distancia dentro del rango para recoger");
      MySQL_Cursor *cur_mem = new MySQL_Cursor(&conn);
      if(cur_mem->execute(RECOGER_SQL)){  
        Serial.println("Se actualizó la DB");
        delete cur_mem;
      }else{
        Serial.println(RECOGER_SQL);
        delete cur_mem;
      }
      delay(10000);
    } else {
      Serial.println("Distancia fuera del rango para recoger");
      MySQL_Cursor *cur_norecoger = new MySQL_Cursor(&conn);
      if (cur_norecoger->execute(NORECOGER_SQL)) {
        Serial.println("Se actualizó la DB (No Recoger)");
        delete cur_norecoger;
      } else {
        Serial.println(NORECOGER_SQL);
        delete cur_norecoger;
      }
    }
  } else {
    Serial.println("Distancia negativa, no válida");
  }
  delay(5000);
}
