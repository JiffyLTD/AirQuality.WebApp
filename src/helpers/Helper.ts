export default class Helper{
    static getDateYesterday = () => {
        var today = new Date();
        var dd = String(today.getDate() - 1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        var formattedDate = yyyy + '-' + mm + '-' + dd;
        
        return formattedDate; 
    }

    static formatDateToCustomString = (isoDate: any) => {
        const date = new Date(isoDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
      
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    static stationIsOnline = (lastCreated: any) => {
        const inputDate = new Date(lastCreated);
        const currentDate = new Date();
    
        const timeDifference = Math.abs(currentDate.getTime() - inputDate.getTime());
    
        const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
        if (timeDifference > twentyFourHoursInMilliseconds) {
            return false;
        }
    
        return true;
    }
}