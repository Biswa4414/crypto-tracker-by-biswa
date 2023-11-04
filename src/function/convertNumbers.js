export const convertNumbers = (number) => {

  
    if (number) { //This line checks if the number is a truthy value (i.e., not null, undefined, or 0).
      if (number < 1000) {
        return number;
      } else if (number >= 1000 && number < 1000000) {  //1,350
        return (
          number.toString().slice(0, -3) +             //1+ '.'(slice the no backward)   //
          "." +
          number.toString().slice(-3, -1) +           //includes last 2 digit which is '35' => 1.+35+"K"
          "K"                                         //1.35K
        );
      } else if (number >= 1000000 && number < 1000000000) {  //3,500,000
        return (
          number.toString().slice(0, -6) +                    //3 (slice the no backward) + '.'
          "." +
          number.toString().slice(-6, -4) +                    //includes last 2 digit which is '50'
          "M"                                                  //3.5M
        );
      } else if (number >= 1000000000) {                      //4,500,000,000
        return (
          number.toString().slice(0, -9) +                    //4 (slice the no backward) + '.'
          "." +
          number.toString().slice(-9, -7) +                   //includes last 2 digit which is '50'
          "B"                                                 //4.5B
        );
      }
    }
  };
  