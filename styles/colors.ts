export const colors = {
    azul: "#052B36",
    verde: "#C8FF30",
    gris: "#F0F0F0"
}

export const getColor = (color?:string): string => {
    if(color){
        switch (color){
            case "azul":
                return colors.azul
            case "verde": 
                return colors.verde
            case "negro":
                return "#000"
            case "blanco":
                return "#fff"
            default: return colors.azul
        }
    }else return '#000'
}