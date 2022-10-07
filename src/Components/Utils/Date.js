
export const getFormattedDate = (date) => {
    try {
      if (date) {
        
        const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
        let dateFormat =
                    
                   ((new Date(date)).getDate() < 10
                   ? "0" + (new Date(date)).getDate()
                   : (new Date(date))?.getDate()) +
                   " " +
                   (month[(new Date(date)).getMonth()]) +
                   " " + 
                   (new Date(date)).getFullYear()

         
        return dateFormat.includes("NaN") ? date : dateFormat;
      } else {
        return "";
      }
    } catch (ex) {
      return "";
    }
  };
  