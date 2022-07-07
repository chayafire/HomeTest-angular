import { Pipe } from "@angular/core";

@Pipe({
  name: "phone"
})
export class PhonePipe {

  transform(number: any) {
    number = new String(number)
    number = number.charAt(0) != 0 ? "0" + number : "" + number;
    let newStr = "";
    let i = 0;
    newStr = newStr + number.substr(0, 3) + "-";
    return newStr + number.substr(1 * 3);
  }

}