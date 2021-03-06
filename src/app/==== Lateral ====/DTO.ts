//#region ===== SERDUCT =====

export class Serduct {
      constructor(
            public id: string,
            public CompanyId: string,  // changed to string to avoid Json loop
            public Company: string,  // changed to string to avoid Json loop
            public serductType: SerductType,
      ) { }

      public title!: string;
      public category!: string;
      public subCategory!: string;
      public shortDescription!: string;
      public longDescription!: string;
      public images!: SerductImage[];

}

export enum SerductType {
      Service,
      Product,
      Other,
}


//#endregion



//#region  ===== COMPANY =====

export class Company {
      constructor(
            public id: string,
            public ownerId: string | null,
            public companyName: string,
            public contactInfos: ContactInfo[]


      ) { }

      public companyTitle!: string;
      public companyShortBio!: string;
      public companyLongBio!: string;
      public images!: CompanyImage[] | null;
      public serducts!: Serduct[];
}

export class ContactInfo {
      constructor(
            public id: string,
            public ownerId: string | null,
            public type: ContactInfoType,
            public value: string,
      ) { }
}



export enum ContactInfoType {
      country,
      city,
      address,
      postalCode,
      phoneNumber,
      cellNumber,
      email,
      website,
      socialNetwork
}


export interface fetchCompany{
      status: string,
      data: Company
}

//#endregion



//#region ===== IMAGE =====

export class SerductImage {      // add img alt="..." Later
      constructor(
            public id: string,
            public imageType: ImageType,
            public address: string,
            public altText: string
      ) { }
}
export class CompanyImage {      // add img alt="..." Later
      constructor(
            public id: string,
            public companyImageType: CompanyImageType,
            public address: string,
            public altText: string
      ) { }
}
export enum ImageType {
      smaillThumbnail,       // 50*50
      largehumbnail,         // 75*75
      card,                  // 255*255  -  220 * 280 would be great
      catalog,               // 640*640
      cover,                 // 400*1400
      full,                  // 700*1400
}
export enum CompanyImageType {
      logo,                   // 75*75
      profile,                // 640*640
      other
}


//#endregion


//#region ===== USER =====

export class RegisterUser {
      constructor(
            public email: string,
            public password: string,
            public confirmPassword: string
      ) { }
}

export class LoginUser {
      constructor(
            public email: string,
            public password: string
      ) { }
}

//#endregion 

export interface JsonH {
      status: string,
      data: object
}