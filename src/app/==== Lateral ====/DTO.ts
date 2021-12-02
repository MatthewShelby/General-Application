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
            public owner: string,
            public companyName: string,
            public companyContactInfo: ContactInfo[]


      ) { }

      public companyTitle!: string;
      public companyShortBio!: string;
      public companyLongBio!: string;
      public profileImage!: SerductImage;
      public logoImage!: SerductImage;
      public companySerducts!: Serduct[];
}

export class ContactInfo {
      constructor(
            public type: ContactInfoType,
            public value: string,
      ) { }
}



export enum ContactInfoType {
      country,
      city,
      address,
      phoneNumber,
      cellNumber,
      email,
      website,
      socialNetwork
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

export enum ImageType {
      smaillThumbnail,       // 50*50
      largehumbnail,         // 75*75
      card,                  // 255*255  -  220 * 280 would be great
      catalog,               // 640*640
      cover,                 // 400*1400
      full,                  // 700*1400
}


//#endregion
