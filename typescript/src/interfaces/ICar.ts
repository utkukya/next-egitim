interface ICar {
    name: string
    color: "red" | "blue" | "white" | string
}

export default ICar // bu dosya sadece bu car için özel oluşturulmuş. Sadece bunu dönecektir.
// O yüzden export defuault kullandık.