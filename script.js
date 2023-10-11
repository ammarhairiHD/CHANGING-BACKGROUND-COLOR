function randomColor() {

      const colorGenerator = Math.random();

      let smallBox = ",";

      if (colorGenerator >= 0 && colorGenerator < 1 / 7) {
      document.body.style.backgroundColor = "rgb(120, 70, 255)";
      } 
      else if (colorGenerator >= 0 && colorGenerator < 2 /7) {
      document.body.style.backgroundColor = "rgb(25, 180, 200)";
      } 
      else if (colorGenerator >= 0 && colorGenerator < 3 / 7) {
      document.body.style.backgroundColor = "rgb(60, 70, 255)";
      } 
      else if (colorGenerator >= 0 && colorGenerator < 4 / 7) {
      document.body.style.backgroundColor = "rgb(140, 140, 110)";
      } 
      else if (colorGenerator >= 0 && colorGenerator< 5 / 7 ) {
      document.body.style.backgroundColor = "rgb(200, 110, 110)";
      } 
      else if (colorGenerator >= 0 && colorGenerator < 6 / 7) {
      document.body.style.backgroundColor = "rgb(140, 140, 110)";
      } 
      else if (colorGenerator >= 0 && colorGenerator< 7 / 7) {
      document.body.style.backgroundColor = "rgb(10, 20, 10)"; }
      
}
