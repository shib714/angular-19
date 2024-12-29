export class Client {
    clientId: number;
    contactPersonName: string;
    CompanyName: string;
    address: string;
    city: string;
    postalCode: string;
    province: string

    constructor() {
        this.clientId = 0;
        this.contactPersonName = "";
        this.CompanyName = "";
        this.address = "";
        this.city = "",
            this.postalCode = "";
        this.province = "";
    }
}