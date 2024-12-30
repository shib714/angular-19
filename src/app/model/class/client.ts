export class Client {
    clientId: number;
    contactPersonName: string;
    companyName: string;
    address: string;
    city: string;
    postalCode: string;
    province: string

    constructor() {
        this.clientId = 0;
        this.contactPersonName = "";
        this.companyName = "";
        this.address = "";
        this.city = "",
        this.postalCode = "";
        this.province = "";
    }
}