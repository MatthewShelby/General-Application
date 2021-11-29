import { Injectable } from '@angular/core';
import { Company, ContactInfo, Serduct, ContactInfoType, SerductImage, ImageType, SerductType } from 'src/app/==== Lateral ====/DTO';

@Injectable({
  providedIn: 'root'
})
export class SerductService {

  constructor() { }

  GetSerducts(): Serduct[] {


    let serducts: Serduct[];
    let contacInfo: ContactInfo = new ContactInfo(ContactInfoType.phoneNumber, '02133130012');
    let ContactInfos: ContactInfo[] = [(contacInfo)]
    let company: Company = new Company('4579', 'Pipeex', ContactInfos);
    let newSerducts = new Serduct('3456-2376', SerductType.Service);
    newSerducts.category = 'Industrial';
    newSerducts.subCategory = 'Piping';
    newSerducts.shortDescription = 'Managing piping projects. planing cunstuctions and finding the best solutions.';
    newSerducts.longDescription = '<b>the process of managing piping projects. </b>  <p>Trying to planing cunstuctions and finding the best solutions.</p> <p> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </p>';
    newSerducts.title = 'Constructing piping projects';
    let serductImage1 = new SerductImage('69IMG-sfg', ImageType.card, 'https://www.pumpindustry.com.au/wp-content/uploads/2016/11/shutterstock_10638541-e1530681964440.jpg');
    let serductImage2 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png');
    let images: SerductImage[] = [serductImage1, serductImage2];
    newSerducts.images = images;

    let ser2 = Object.assign({}, newSerducts);
    ser2.id = 'h124';
    ser2.title = 'Title of our job';
    ser2.shortDescription = 'The process of managing piping projects.';
    let serductImage12 = new SerductImage('69IMG-sfg', ImageType.card, 'http://www.gd-yt.cn/db_picture/pro3/201511211443227705.jpg');
    let serductImage22 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png');
    let images2: SerductImage[] = [serductImage12, serductImage22];
    ser2.images = images2;

    let ser33 = Object.assign({}, newSerducts);
    ser33.id = 'h124';
    ser33.title = 'Title of our job';
    ser33.shortDescription = 'The process of managing piping projects.';
    let serductImage123 = new SerductImage('69IMG-sfg', ImageType.card, 'https://4.imimg.com/data4/WB/LY/MY-10167335/crane-duty-helical-gear-box-500x500.jpg');
    let serductImage223 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png');
    let images23: SerductImage[] = [serductImage123, serductImage223];
    ser33.images = images23;


    serducts = [newSerducts, ser2,ser33];

    // http://www.gd-yt.cn/db_picture/pro3/201511211443227705.jpg
    // https://4.imimg.com/data4/WB/LY/MY-10167335/crane-duty-helical-gear-box-500x500.jpg
    // https://5.imimg.com/data5/UF/GR/MY-10520144/gantry-crane-gearbox-500x500.jpg
    // https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
    // http://www.gd-yt.cn/db_picture/pro3/202103041507336850.jpg


    //serducts.push(ser2);


    // newSerducts.id = 'frt543';
    // newSerducts.title = 'Test - car';
    // serducts.push(newSerducts);
    return this.extendContent(serducts);
  }


  extendContent(ser: Serduct[]): Serduct[] {
    
    let serducts = Object.assign({}, ser);

    let ser33 = Object.assign({}, serducts[1]);
    ser33.id = 'n2fy45';
    ser33.title = 'Renting indstrial heavy machines';
    ser33.shortDescription = 'The Biggest stock in renting bussines of the heavy machins.';
    let serductImage123 = new SerductImage('69IMG-sfg', ImageType.card, 'https://5.imimg.com/data5/UF/GR/MY-10520144/gantry-crane-gearbox-500x500.jpg');
    let serductImage223 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png');
    let images23: SerductImage[] = [serductImage123, serductImage223];
    ser33.images = images23;


    let ser2 = Object.assign({}, ser[2]);
    ser2.id = '23f6yhg';
    ser2.title = 'Comunicating management of factoris.';
    ser2.shortDescription = 'IinterFactory comunication and making.';
    let serductImage12 = new SerductImage('69IMG-sfg', ImageType.card, 'http://www.gd-yt.cn/db_picture/pro3/201511211443227705.jpg');
    let serductImage22 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png');
    let images2: SerductImage[] = [serductImage12, serductImage22];
    ser2.images = images2;



ser.push(ser2);
ser.push(ser33);
return ser;

  }
}
