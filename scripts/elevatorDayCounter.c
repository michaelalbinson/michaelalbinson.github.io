#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define OLED_RESET 4
Adafruit_SSD1306 display(OLED_RESET);

#define NUMFLAKES 10
#define XPOS 0
#define YPOS 1
#define DELTAY 2

#if (SSD1306_LCDHEIGHT != 32)
#error("Height incorrect, please fix Adafruit_SSD1306.h!");
#endif

int fifthSecInterval = 0;
int dayCount = 0;
boolean oneDayIncrementPushed = false;
boolean tenDayIncrementPushed = false;
boolean oneDayDecrementPushed = false;
boolean tenDayDecrementPushed = false;
boolean mainButtonPushed = false;

void setup() {
    Serial.begin(9600);
    initiatePins();
    displayHello();
    setupFunction();
}

void loop() {
    // put your main code here, to run repeatedly:
    
}

void setupFunction() {
    boolean setupComplete = false;
    while (!setupComplete) {
        if (digitalRead(7))
            setupComplete = true;
        else if (digitalRead(6))
            incrementOrDecrementDayCount(1);
        else if (digitalRead(5))
            incrementOrDecrementDayCount(10);
        else if (digitalRead(4))
            incrementOrDecrementDayCount(-1);
        else if (digitalRead(3))
            incrementOrDecrementDayCount(-10);
        delay(100);
    }
    indicateSetupCompleteWithTone();
}

void incrementOrDecrementDayCount(int countToChange) {
    if(countToChange < 0 && (dayCount + countToChange) >= 0)
        return;
    
    dayCount += countToChange;
}

void initiatePins() {
    pinMode(9, OUTPUT);//buzzer
    pinMode(7, INPUT); //large reset button
    pinMode(6, INPUT); //increment +1 button
    pinMode(5, INPUT); //increment +10 button
    pinMode(4, INPUT); //decrement -1 button
    pinMode(3, INPUT); //decrement -10 button
}

void indicateSetupCompleteWithTone(){
    tone(9, 1000);
    delay(500);
    tone(9, 2000);
    delay(500);
    noTone(9);
}

void elevatorFailureTone(){
    tone(9, 500);
    delay(1000);
    noTone(9);
}

void displayHello(){
    display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
    display.display();
    delay(2000);
    display.setTextSize(1);
    display.setTextColor(WHITE);
    display.setCursor(10,0);
    display.clearDisplay();
    display.println("Hello, world!");
    display.display();
    delay(1000);
    Serial.println("displayed");
}