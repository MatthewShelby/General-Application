import { Injectable } from '@angular/core';
import { Company, ContactInfo, Serduct, ContactInfoType, SerductImage, ImageType, SerductType } from 'src/app/==== Lateral ====/DTO';

@Injectable({
  providedIn: 'root'
})
export class SerductService {
  public activeSerduct!: Serduct
  constructor() { }

  getCompany(companyId: string): Company {
    let companies: Company[] = this.getAllCompanies();
    let com = companies.find(x => x.id == companyId);
    let companySerducts = this.GetSerducts().filter(x => x.owner === companyId);
    // let companyProf = this.GetSerducts().filter(x => x.owner == com?.id);
    // let companyLogo = this.GetSerducts().filter(x => x.owner == com?.id);
    com ? com.companySerducts = companySerducts : companySerducts = [];
    let notFound = new Company('Null', 'Null','Null', [new ContactInfo(ContactInfoType.cellNumber, '0000')])
    console.log('from service  - img src - com: ' + com?.profileImage?.address + '  comp id: ' + companyId)

    return com ? com : notFound;
  }
  setActiveSerduct(ser: Serduct) {
    this.activeSerduct = ser;
  }

  getActiveSerduct() {
    let all = this.GetSerducts();

    return this.activeSerduct ? this.activeSerduct : all[all.length - 1];
  }


  GetSerducts(): Serduct[] {


    let serducts: Serduct[];
    let contacInfo: ContactInfo = new ContactInfo(ContactInfoType.phoneNumber, '02133130012');
    let ContactInfos: ContactInfo[] = [(contacInfo)]
    let company: Company = new Company('4579','12', 'Pipeex', ContactInfos);
    let newSerducts = new Serduct('3456-2376', 'c11', SerductType.Service);
    newSerducts.category = 'Industrial';
    newSerducts.subCategory = 'Piping';
    newSerducts.shortDescription = 'Managing piping projects. planing cunstuctions and finding the best solutions.';
    newSerducts.longDescription = '<b>the process of managing piping projects. </b>  <p>Trying to planing cunstuctions and finding the best solutions.</p> <p> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </p>';
    newSerducts.title = 'Constructing piping projects';
    let serductImage1 = new SerductImage('69IMG-sfg', ImageType.card, 'https://www.pumpindustry.com.au/wp-content/uploads/2016/11/shutterstock_10638541-e1530681964440.jpg', 'card');
    let serductImage2 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png', 'small');
    let images: SerductImage[] = [serductImage1, serductImage2];
    newSerducts.images = images;

    let ser2 = Object.assign({}, newSerducts);
    ser2.id = 'h124';
    ser2.title = 'Title of our job';
    ser2.owner = 'c26';
    ser2.shortDescription = 'The process of managing piping projects.';
    let serductImage12 = new SerductImage('69IMG-sfg', ImageType.card, 'http://www.gd-yt.cn/db_picture/pro3/201511211443227705.jpg', 'card');
    let serductImage22 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png', 'card');
    let images2: SerductImage[] = [serductImage12, serductImage22];
    ser2.images = images2;

    let ser33 = Object.assign({}, newSerducts);
    ser33.id = 'h124';
    ser33.title = 'Title of our job';
    ser33.shortDescription = 'The process of managing piping projects.';
    let serductImage123 = new SerductImage('69IMG-sfg', ImageType.card, 'https://4.imimg.com/data4/WB/LY/MY-10167335/crane-duty-helical-gear-box-500x500.jpg', 'card');
    let serductImage223 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png', 'card');
    let images23: SerductImage[] = [serductImage123, serductImage223];
    ser33.images = images23;


    serducts = [newSerducts, ser2, ser33];

    // http://www.gd-yt.cn/db_picture/pro3/201511211443227705.jpg
    // https://4.imimg.com/data4/WB/LY/MY-10167335/crane-duty-helical-gear-box-500x500.jpg
    // https://5.imimg.com/data5/UF/GR/MY-10520144/gantry-crane-gearbox-500x500.jpg
    // https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
    // http://www.gd-yt.cn/db_picture/pro3/202103041507336850.jpg


    //serducts.push(ser2);


    // newSerducts.id = 'frt543';
    // newSerducts.title = 'Test - car';
    // serducts.push(newSerducts);
    serducts = this.extendContent(serducts);
    return this.extendContent2(serducts);
  }

  extendContent2(ser: Serduct[]): Serduct[] {

    let serducts = Object.assign({}, ser);

    let ser33 = Object.assign({}, serducts[1]);
    ser33.id = 'za3fy45';
    ser33.owner = 'c11';
    ser33.title = 'Brand-new ray ban glasses';
    ser33.shortDescription = "<p>Finest glasses you can found.</p><p>Finest glasses you can found.</p><p>Finest glasses you can found.</p><p>Finest glasses you can found.</p><b>Finest glasses you can found.</b>";
    let serductImage123 = new SerductImage('69adIMG-sfg', ImageType.card, 'https://s20.picofile.com/file/8444475218/white_background_product_photoshoot_services_1000x1000.png', 'card');
    let serductImage223 = new SerductImage('zs75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/50x50-logo.png', 'card');
    let serductImage224 = new SerductImage('zs75IMG-ftg', ImageType.catalog, 'https://s20.picofile.com/file/8444511918/ray_ban_640.png', 'cat');
    let images23: SerductImage[] = [serductImage123, serductImage223, serductImage224];
    ser33.images = images23;


    let ser2 = Object.assign({}, ser[2]);
    ser2.id = '2sc3f6yhg';
    ser2.title = 'GL manufacturer with the best .';
    ser2.owner = 'c26';
    ser2.shortDescription = 'IinterFactory comunication and making.';
    let serductImage12 = new SerductImage('69IMG-sfg', ImageType.card, 'https://s21.picofile.com/file/8444476242/office_table_laptop_computer_digital_tablet_smartphone_isolated_pure_white_background_laptop_tablet_mockup_concept_113964775.jpg', 'card');
    let serductImage22 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/50x50-logo.png', 'card');
    let images2: SerductImage[] = [serductImage12, serductImage22];
    ser2.images = images2;



    ser.push(ser2);
    ser.push(ser33);
    return ser;

  }
  extendContent(ser: Serduct[]): Serduct[] {

    let serducts = Object.assign({}, ser);

    let ser33 = Object.assign({}, serducts[1]);
    ser33.id = 'n2fy45';
    ser33.title = 'Renting indstrial heavy machines';
    ser33.shortDescription = 'The Biggest stock in renting bussines of the heavy machins.';
    let serductImage123 = new SerductImage('69IMG-sfg', ImageType.card, 'https://5.imimg.com/data5/UF/GR/MY-10520144/gantry-crane-gearbox-500x500.jpg', 'card');
    let serductImage223 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png', 'card');
    let images23: SerductImage[] = [serductImage123, serductImage223];
    ser33.images = images23;


    let ser2 = Object.assign({}, ser[2]);
    ser2.id = '23f6yhg';
    ser2.title = 'Comunicating management of factoris.';
    ser2.shortDescription = 'IinterFactory comunication and making.';
    let serductImage12 = new SerductImage('69IMG-sfg', ImageType.card, 'http://www.gd-yt.cn/db_picture/pro3/201511211443227705.jpg', 'card');
    let serductImage22 = new SerductImage('75IMG-ftg', ImageType.smaillThumbnail, '../../../../assets/Images/Content/Toolsss 50.png', 'card');
    let images2: SerductImage[] = [serductImage12, serductImage22];
    ser2.images = images2;



    ser.push(ser2);
    ser.push(ser33);
    return ser;

  }

  getAllCompanies() {
    let comp1 = new Company('c11','12', 'Stratton Oakmont', [new ContactInfo(ContactInfoType.cellNumber, '33130012')])
    comp1.profileImage = new SerductImage('541', ImageType.catalog, 'https://s21.picofile.com/file/8444554326/logo_tr_ok.png', comp1.companyName + ' Profie image')
    let comp2 = new Company('c22','18', 'Compimaster', [new ContactInfo(ContactInfoType.cellNumber, '98705214')])
    let comp3 = new Company('c26','14', 'Global Glass Inc', [new ContactInfo(ContactInfoType.cellNumber, '801454565')])
    let companies: Company[] = [comp1, comp2, comp3];
    return companies;
  }

}
