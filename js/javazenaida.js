/*******************************************************************************/
/*  SCRIPTS de Pedagogía Zenaida                                               */                                
/*  Autor: Pablo Brescia Rueda                                                 */
/*  Versión: 1.0                                                               */
/*  02/12/2022                                                                 */
/*******************************************************************************/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }