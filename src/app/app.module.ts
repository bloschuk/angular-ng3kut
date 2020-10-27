import { Component } from "@angular/core";

{
  selector: "app-root";
  templateUrl: "./app.component.html";
  styleUrls: ["./app.component.css"];
}
export class AppComponent {
  title = "my-app";
  firstOperand: number;
  secondNumber: number;
  operator: string;
  result: string;
  cError: string;
  doCalc() {
    if (
      this.firstOperand != null ||
      this.secondNumber != null ||
      this.operator != null
    ) {
      if (this.firstOperand < this.secondNumber) {
        this.result = "2 число больше";
      } else if (this.firstOperand > this.secondNumber) {
        this.result = "1 число больше";
      } else if ((this.firstOperand = this.secondNumber)) {
        this.result = "числа равны ";
      }
    } else {
      this.result = "ввод неполный";
    }
  }
}
