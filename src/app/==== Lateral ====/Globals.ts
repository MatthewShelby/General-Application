export const GlobalConsts = {
      //imageNotFoundAddress : 'https://s20.picofile.com/file/8444360884/no_image_available.jpg'
      imageNotFoundAddress : 'http://www.upsara.com/images/h676284_.jpg'
      
}

import {environment} from '../../environments/environment'
export const DomainName = environment.production? 'https://www.qweq.ir/api/':'https://localhost:44339/api/'// Reverse!!!!
// export const DomainName = environment.production? 'https://www.qweq.ir':'https://192.168.1.3:44339'// Reverse!!!!