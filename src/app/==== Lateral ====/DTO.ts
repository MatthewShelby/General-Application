//#region ===== SERDUCT =====

export class Serduct {
      constructor(
            public id: string,
            public owner: string,  // changed to string to avoid Json loop
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
}


//#endregion



//#region  ===== COMPANY =====

export class Company {
      constructor(
            public id: string,
            public owner: string | null,
            public companyName: string,
            public companyContactInfo: ContactInfo[]


      ) { }

      public companyTitle!: string;
      public companyShortBio!: string;
      public companyLongBio!: string;
      public profileImage!: CompanyImage | null;
      public logoImage!: CompanyImage | null;
      public companySerducts!: Serduct[];
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
            public imageType: ImageType,
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
//#region 

export interface JsonH {
      status: string,
      data: object
}